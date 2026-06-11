---
tags:
  - 前端
---
# Node-使用nvm和nrm

## 背景
为了方便在不同 `node` 版本下进行试验和开发,使用 `nvm` 或者 `fnm` 可以在同一台设备上进行多个 `node` 版本切换;
`nrm` 则可以控制切换多个 `npm` 源

## nvm安装
[官方nvm地址](https://github.com/nvm-sh/nvm)

[nvm-windows地址](https://github.com/coreybutler/nvm-windows)

::: code-group
```shell [curl]
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash
```
```shell [wget]
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash
```
:::

如果报错
::: danger
Failed to connect to raw.githubusercontent.com port 443: 拒绝连接
:::

解决方案如下:

```shell
# 直接复制网址在浏览器打开
# https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh
# 复制页面内容保存到本地install.sh,用bash执行
bash ./install.sh
```
## nvm 命令
```shell
# 安装node
nvm install node

# 安装特定版本的node
nvm install 5.0.0

# 显示列表
nvm ls

# 显示当前版本
nvm current

# 切换版本
nvm use 5.0.0

# 删除版本
# 5.0.0是对应的版本号
nvm uninstall 5.0.0

# 指定默认的node版本
nvm alias default 5.0.0

# 列出远端可以安装的版本
nvm list available
```

## 使用淘宝镜像
```shell
# 使用淘宝镜像可加快下载速度
# 经测试官网镜像下载npm会巨慢,建议改用淘宝镜像

# linux和mac 在终端修改配置（可以不用设置，使用nrm更改镜像地址更安全）
nvm node_mirror https://npm.taobao.org/mirrors/node/
nvm npm_mirror https://npm.taobao.org/mirrors/npm/

# 终端连接不上nvm时
# ~/.bashrc文件中添加下句，设置永久环境变量
export NVM_NODEJS_ORG_MIRROR=https://npm.taobao.org/mirrors/node
# 或者使用清华镜像
export NVM_NODEJS_ORG_MIRROR=https://mirrors.tuna.tsinghua.edu.cn/nodejs-release/
# windows可以通过修改setting.txt配置, 加入上面俩行即可
# 目录: C:\Users\用户\AppData\Roaming\nvm
```

## 查看node和npm版本
```shell
node --version
npm --version
```

## 其他错误
`npm` 在 `install` 包,报 `No package.json found`
```shell
# 初始化package.json
npm init --yes
# 修复
npm audit fix
# 再次安装
npm install package
# vscode安装包报错时
# 使用bash npm i
```

## fnm安装
[官方地址](https://fnm.nodejs.cn/docs/)

::: code-group
```shell [curl]
# 在线安装
curl -fsSL https://fnm.vercel.app/install | bash

# 如果网络环境不好，也可以离线安装
# 先去下载对应系统的版本:https://github.com/Schniz/fnm/releases
# 然后手动解压
# 1. 创建安装目录
mkdir -p ~/.local/share/fnm
# 2. 移动 fnm 到该目录
mv fnm ~/.local/share/fnm/
# 3. 给它执行权限
chmod +x ~/.local/share/fnm/fnm
# 4. 添加到PATH
echo 'export PATH="$HOME/.local/share/fnm:$PATH"' >> ~/.bashrc
echo 'eval "$(fnm env --shell bash)"' >> ~/.bashrc
source ~/.bashrc

# windows安装
# ① 右键点击“此电脑”或“我的电脑”，选择“属性”；
# ② 点击“高级系统设置”；
# ④ 在“系统属性”窗口中，点击“环境变量”；
# ⑤ 在“系统变量”部分，点击“新建”；
# ⑥ 分别输入变量名FNM_DIR与变量值D:software nm-windows（记得替换为自己的Fnm安装路径）；
# ⑦ 在“系统变量”部分，找到 Path 变量并双击；
# ⑧ 点击“新建”，添加 Fnm 的安装路径%FNM_DIR%；
# ⑨ 点击“确定”以保存更改。

# 如果npm --version 报错
# PowerShell 默认禁止运行 .ps1 脚本，npm 在 fnm_multishells 目录下生成了 npm.ps1，所以被拦截
# 以管理员执行
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
# windows系统如果要在powershell中运行
# 1.如果文件不存在，先创建
if (!(Test-Path $PROFILE)) {
  New-Item -ItemType File -Path $PROFILE -Force
}
# 2.用记事本打开编辑
notepad $PROFILE
# 3.再打开的文件添加
fnm env --use-on-cd | Out-String | Invoke-Expression
# 4.保存并关闭记事本
# 5.验证
# 查看文件内容确认写入成功
Get-Content $PROFILE
# 关闭所有 PowerShell 窗口，重新打开一个新的
# 然后直接测试
node --version
npm --version

# windows系统如果要在bash中运行
notepad ~/.bashrc
# fnm 初始化
eval "$(fnm env --use-on-cd --shell bash)"
source ~/.bashrc

# 检查 fnm 是否可用
fnm --version

# 设定临时环境变量
export FNM_NODE_DIST_MIRROR=https://mirrors.tuna.tsinghua.edu.cn/nodejs-release/
# 查看所有远程可安装的Node版本
fnm list-remote
# 然后正常使用 fnm 即可
fnm install <version>
fnm use <version>      # 使用Node.js 24
# 查看当前正在使用的Node版本
fnm current
# 查看本地已安装的所有Node版本
fnm list
# 删除指定版本的Node
fnm uninstall <version>
# 验证 Node.js
node --version
```
:::

## 安装nrm
```shell
npm install -g nrm
# 安装老版本保证use方法生效
npm install -g @adams549659584/nrm
```

## windows上无法识别nrm命令
```shell
# 原因是nrm没有添加到path
# 进入系统设置环境变量
# 查看node的目录位置
npm config ls
# 添加一个系统变量 NRM_PATH, 路径为上面的node bin location
# 然后在系统变量path里加入 %NRM_PATH%
```

## nrm 命令
```shell
# nrm 列表
nrm ls

# 切换源
nrm use taobao

# 打印当前源
nrm current

# 添加源(以下已私有仓库为例)
nrm add sinopia http://127.0.0.1:4783

# 删除
nrm del name
```

## 注意
有时重启电脑后, `terminal` 进入默认的环境,会提示找不到已安装的相应的 `npm` 包, 此时重新 `nvm use` 一下即可

## 参考
1. [Windows中使用fnm](https://juejin.cn/post/7546054937026527273)