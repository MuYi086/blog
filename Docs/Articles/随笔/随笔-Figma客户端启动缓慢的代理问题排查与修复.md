---
tags:
  - 随笔
---
# 随笔-Figma客户端启动缓慢的代理问题排查与修复

## 起因

最近在 `Windows 11` 上配置了 `Codex CLI` 和 `WSL` 的代理，之后发现 `Figma` 桌面客户端启动很慢，进度条要等很久才能加载完成。

`Codex` 的 `.env` 和 `WSL` 的 `.bashrc` 各自配置了代理，但它们不会自动给独立启动的 `Windows` 桌面应用设置代理。检查进程、用户和系统级的代理环境变量后，也没有发现 `HTTP_PROXY`、`HTTPS_PROXY`、`ALL_PROXY` 或 `NO_PROXY`。

## 排查

先用 `curl` 测试本地代理能否访问 `Figma`：

```powershell
curl.exe -I --max-time 15 `
  --proxy http://127.0.0.1:10809 `
  https://www.figma.com
```

返回 `200 Connection established` 和 `200 OK`，说明本地代理能访问官网。这个测试只覆盖了一次官网请求，不能说明桌面客户端所需的所有服务都正常。

## 解决

`Figma` 的 `Windows` 客户端支持通过注册表设置 `ProxyUrl`。以管理员身份打开 `PowerShell`，先备份已有配置：

```powershell
if (Test-Path 'HKLM:\SOFTWARE\Figma') {
    reg.exe export 'HKLM\SOFTWARE\Figma' "$env:USERPROFILE\Desktop\figma-reg-backup.reg" /y
}
```

如果已有 `ProxyUrl`，记下原值，方便恢复。然后写入代理地址：

```powershell
reg.exe add 'HKLM\SOFTWARE\Figma' `
  /v ProxyUrl /t REG_SZ `
  /d 'http://127.0.0.1:10809' /f

reg.exe query 'HKLM\SOFTWARE\Figma' /v ProxyUrl
```

这里的 `10809` 是我的本地代理端口，需要替换为自己的 `HTTP` 或兼容 `HTTP` 的混合代理端口。该注册表配置对这台电脑上的用户生效。

关闭 `Figma` 窗口并退出系统托盘中的进程，再重新启动。

## 撤销配置

如果之前没有 `ProxyUrl`，可以用管理员 `PowerShell` 删除新增的值：

```powershell
reg.exe delete 'HKLM\SOFTWARE\Figma' /v ProxyUrl /f
```

如果之前已有该值，应恢复备份的原值。更换代理端口后也要记得更新配置；如果插件、本地字体或 `MCP` 连接出现异常，可以检查本地地址的代理绕过规则，必要时撤销设置。

## 参考

1. [Figma 官方：Configure desktop app settings via registry keys on Windows](https://help.figma.com/hc/en-us/articles/17717066917911-Configure-desktop-app-settings-via-registry-keys-on-Windows)
2. [Figma 官方：Adjust your network settings](https://help.figma.com/hc/en-us/articles/19424714305943-Adjust-your-network-settings)
3. [前文：AI-Codex-Cli配置代理](../人工智能/AI-Codex-Cli配置代理.md)
