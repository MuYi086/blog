---
tags:
  - 随笔
---
# 随笔-WSL2更新磁盘空间占用

## 背景
由于要本地部署各种大模型研究和使用，然后废弃的也要删除，不然一直占用 `windows` 系统硬盘空间。久了之后就发现 `wsl` 的空间占用一直再增大，再删除了一些模型后也没有降低空间使用量，于是就有了这篇帖子。

## 主要流程

- `Ubuntu` 里的 `df -h /` 显示 `Linux` 文件系统中仍被文件占用的空间。
- `Ubuntu` 里的 `sudo fstrim -av` 会把已空出的区块标记为可回收。它**不会直接缩小 Windows 上的 `ext4.vhdx` 文件**。
- 要让 `Windows` 磁盘上的 `VHDX` 文件变小，还要先关闭 `WSL`，再从 `Windows` 使用 `DiskPart` 的 `compact vdisk`。

## 第 1 步：管理员 PowerShell 确认发行版
使用`PowerShell`运行：

```powershell
wsl.exe --list --verbose
```

确认列表里有名称为 `Ubuntu`、`VERSION` 为 `2` 的发行版。如果名称不同或列表没有 `Ubuntu`，先停下，把完整列表记下来；不要把示例发行版名替换着试。

## 第 2 步：启动 Ubuntu，确认文件系统可写，再 trim

从终端中进入 `Ubuntu`, 依次运行：

```bash
df -h /
touch /tmp/wsl-space-check && rm /tmp/wsl-space-check && echo 'filesystem writable'
sudo fstrim -av
```

确认第二条输出 `filesystem writable`，并且 `fstrim` 没有报错。它显示的 `trim` 数值可能和上次不同。

如果 `Ubuntu` 启动时提示磁盘挂载错误，或者写入测试出现 `Read-only file system`，**在这里停下**：不要运行 `fstrim`，也不要压缩 `VHDX`。先保留完整错误信息，按文末微软的 `WSL VHD` 修复指引处理。

完成后在 `Ubuntu` 中运行：

```bash
exit
```

## 第 3 步：关闭所有 WSL 实例

回到管理员 `PowerShell`。先退出 `Docker Desktop`、`VS Code Remote WSL` 等可能自动启动 `WSL` 的程序，再运行：

```powershell
wsl.exe --shutdown
wsl.exe --list --verbose
```

确认列表中的发行版都显示 `Stopped`。如果仍有发行版显示 `Running`，先关闭可能启动它的程序，再重新运行 `wsl.exe --shutdown` 并检查一次。`VHDX` 仍在使用时不要继续。

## 第 4 步：查找并记录 Ubuntu 的 VHDX 路径和原大小

仍在同一个管理员 `PowerShell` 窗口中，整段复制运行：

```powershell
$distroName = 'Ubuntu'
$entries = @(Get-ChildItem 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Lxss' | Where-Object { $_.GetValue('DistributionName') -eq $distroName })
if ($entries.Count -ne 1) { throw "当前 Windows 账户下找到 $($entries.Count) 个名为 $distroName 的发行版记录；先停下并核对账户和发行版名称。" }
$base = $entries[0].GetValue('BasePath')
if ($base.StartsWith('\\?\')) { $base = $base.Substring(4) }
$vhd = Join-Path $base 'ext4.vhdx'
if (-not (Test-Path -LiteralPath $vhd)) {
    Write-Host "默认 VHDX 不存在：$vhd"
    Get-ChildItem -LiteralPath $base -Filter '*.vhdx' -File | Select-Object FullName, Length
    throw '没有找到默认 ext4.vhdx。先根据上面列出的结果核对实际磁盘文件，不要猜路径继续。'
}
$before = Get-Item -LiteralPath $vhd
Write-Host "Ubuntu 虚拟磁盘：$($before.FullName)"
Write-Host ("压缩前文件大小：{0:N2} GiB" -f ($before.Length / 1GB))
```

确认打印出的完整路径位于 `Ubuntu` 的数据目录，记下“压缩前文件大小”。后续 `DiskPart` 必须使用这里显示的实际路径。不要使用其他发行版的 `ext4.vhdx`。

## 第 5 步：用 DiskPart 压缩已关闭的虚拟磁盘

仍在管理员 `PowerShell` 中输入：

```text
diskpart
```

出现 `DISKPART>` 提示符后，把下一行的示例路径替换成第 4 步打印出的完整路径，然后逐条运行：

```text
select vdisk file="C:\Users\muyi086\AppData\Local\Packages\CanonicalGroupLimited.Ubuntu_79rhkp1fndgsc\LocalState\ext4.vhdx"
detail vdisk
compact vdisk
```

`select vdisk` 成功选择目标磁盘后再运行 `detail vdisk` 和 `compact vdisk`。等待 `compact vdisk` 完成并返回 `DISKPART>` 提示符，不要在执行过程中启动 `Ubuntu`。

如果 `select vdisk` 报错，或 `compact vdisk` 返回错误，记下**刚才运行的完整命令和 DiskPart 的全部输出**，然后输入 `exit` 退出 `DiskPart` 并停下。不要反复执行，也不要改用 `wsl --manage Ubuntu --compact`；这台电脑先前已报告该参数不支持。

成功完成后输入：

```text
exit
```

## 第 6 步：检查 Windows 上的文件大小

回到之前的管理员 `PowerShell` 窗口，运行：

```powershell
$after = Get-Item -LiteralPath $vhd
Write-Host ("压缩后文件大小：{0:N2} GiB" -f ($after.Length / 1GB))
```

把结果和第 4 步的“压缩前文件大小”比较。若 `VHDX` 变小，`Windows` 磁盘空间会相应释放；`Ubuntu` 内 `df -h /` 显示的文件系统容量不一定会变小。若压缩成功但文件几乎没变，可能没有更多可回收区块，或被删除的文件不在这个 `Ubuntu` 文件系统里。不要因此删除或移动 `ext4.vhdx`。

::: warning
如果报错
停在报错位置，并保存以下内容，再按错误文本继续排查：

1. `wsl.exe --list --verbose` 的完整输出。
2. `Ubuntu` 中失败命令的完整输出；若失败发生在 `Windows`，则保存完整 `PowerShell` 或 `DiskPart` 错误。
3. 第 4 步打印的 `VHDX` 路径和压缩前大小。

如果报错属于 `Ubuntu` 磁盘只读或挂载失败，按微软的“修复 `VHD` 挂载错误”指引处理；不要直接在 `Ubuntu` 中猜设备名运行 `e2fsck`。
:::

## 参考

- [Microsoft：How to manage WSL disk space](https://learn.microsoft.com/en-us/windows/wsl/disk-space)（VHDX 路径、WSL 关闭、只读挂载故障处理）
- [Microsoft：compact vdisk](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/compact-vdisk)（只适用于已分离或只读附加的动态 VHD）
- [Linux man-pages：fstrim(8)](https://man7.org/linux/man-pages/man8/fstrim.8.html)（报告的是传给底层设备的最大 discard 数量）

