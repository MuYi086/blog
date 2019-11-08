## 使用nvm和nrm

#### 背景
为了方便在不同 `node` 版本下进行试验和开发,使用 `nvm` 可以在同一台设备上进行多个 `node` 版本切换;
`nrm` 则可以控制切换多个 `npm` 源

#### nvm安装
[官方nvm地址](https://github.com/nvm-sh/nvm '官方nvm地址')
```SHELL
// 以下方式二选一
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash

wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash
```
如果报错
```JSON
Failed to connect to raw.githubusercontent.com port 443: 拒绝连接
```
解决方案如下:
```SHELL
// 直接复制网址在浏览器打开
// https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh
// 复制页面内容保存到本地install.sh,用bash执行
bash ./install.sh
```
#### 安装node和npm
```SHELL
// 安装node
nvm install node
// 安装特定版本的node
nvm install 5.0.0
```

#### 显示列表
```SHELL
nvm ls
```

#### 显示当前版本
```SHELL
nvm current
```

#### 切换版本
```SHELL
nvm use 5.0.0
```

#### 查看node和npm版本
```SHELL
node --version
npm --version
```
#### 删除版本
```SHELL
// 5.0.0是对应的版本号
nvm uninstall 5.0.0
```

#### 其他错误
`npm` 在 `install` 包,报 `No package.json found`
```SHELL
// 初始化package.json
npm init --yes
// 修复
npm audit fix
// 再次安装
npm install package
```

#### 安装nrm
```SHELL
npm install -g nrm
```

#### 列出可用的源
```SHELL
nrm ls
```

#### 切换源
```SHELL
nrm use taobao
```

#### 打印当前源
```SHELL
nrm current
```

#### 添加源
```SHELL
// 以下已私有仓库为例
nrm add sinopia http://127.0.0.1:4783
```

#### 删除
```SHELL
nrm del name
```