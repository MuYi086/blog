# 使用nvm和nrm

## 背景
为了方便在不同 `node` 版本下进行试验和开发,使用 `nvm` 可以在同一台设备上进行多个 `node` 版本切换;
`nrm` 则可以控制切换多个 `npm` 源

## nvm安装
[官方nvm地址](https://github.com/nvm-sh/nvm '官方nvm地址')

[nvm-windows地址](https://github.com/coreybutler/nvm-windows 'nvm-windows地址')

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
```

## 使用淘宝镜像
```shell
# 使用淘宝镜像可加快下载速度
# 经测试官网镜像下载npm会巨慢,建议改用淘宝镜像

# linux和mac 在终端修改配置
nvm node_mirror https://npm.taobao.org/mirrors/node/
nvm npm_mirror https://npm.taobao.org/mirrors/npm/

# 终端连接不上nvm时
# ~/.bashrc文件中添加下句，设置永久环境变量
export NVM_NODEJS_ORG_MIRROR=https://npm.taobao.org/mirrors/node

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