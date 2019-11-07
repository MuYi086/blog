## 使用verdaccio搭建本地npm仓库

#### 背景
1. 更加安全
1. 方便统一管理公司内部的私有包
1. 加速:本地npm服务器会缓存下载过的包

#### 前言
由于sinopia作者停止维护和升级,于是一群人fork了sinopia的一个新分支，还起了个洋气的意大利名。并且更新和维护比较勤快,建议大家使用verdaccio替换sinopia

#### 安装
```
npm install -g verdaccio
```

#### 运行
```
verdaccio
```

#### 配置文件
```
// 以本机deepin 为例,配置文件位置如下:
cd /home/ougege/.config/verdaccio
// 其中ougege是用户名
vim ./config.yaml
// vim的操作可自行百度
// 或者用gedit来编辑
gedit ./config.yaml
// 编辑文件在底部加一行以便于局域网内也能访问
listen: 0.0.0.0:4873
```

#### 访问verdaccio
```
// 浏览器打开 localhost:4873
```

#### 添加用户
```
// 域名自行修改
npm set registry http://127.0.0.1:4873
npm adduser --registry http://127.0.0.1:4873
// 按提示输入用户名,密码和邮件地址
// 然后可以尝试在本地verdaccio的网页登录
```

#### 查看当前用户
```
// 判断是否注册用户
npm who am i
```

#### 发布
```
// 开发一个npm包:可自行百度,这里不展开了;然后发布到本地verdaccio
npm publish
// 如果要发布到npm.org;可以自行注册账号密码,然后切换本机npm的registry
```

#### 使用pm2守护进程
```
// 全局安装pm2
npm install -g pm2 --unsafe-perm
// 使用pm2启动verdaccio
pm2 start verdaccio
// 找出verdaccio所在进程id
ps -ef | grep verdaccio
// 杀掉verdaccio
kill -s 9 id
// 重新访问localhost:4873
// 发现verdaccio照常运行
// 重新查看verdaccio进程,发现正常运行,但id变了
ps -ef | grep verdaccio
// 手动停止命令
pm2 stop verdaccio
```

#### 发布到局域网
如果`verdaccio`运行在虚拟机,需要让局域网内用户访问
请将网络模式选择桥接模式：复制物理网络连接状态
如果虚拟机不能上网,可如下操作
```
编辑 => 虚拟网络编辑器 => 更改设置 => 选择桥接模式,选择宿主机网卡
```

![步骤图](../images/node/使用verdaccio搭建npm仓库/verdaccio_01.png '步骤图')

#### 参考
1. [使用verdaccio 搭建私有npm 服务器](https://blog.csdn.net/qq_29594393/article/details/81587989 '使用verdaccio 搭建私有npm 服务器')
1. [npm 私服工具verdaccio 搭建](https://blog.csdn.net/yyzzhc999/article/details/80097073 'npm 私服工具verdaccio 搭建')
1. [verdaccio官网](https://www.npmjs.com/package/verdaccio 'verdaccio官网')
1. [pm2官网](https://www.npmjs.com/package/pm2 'pm2官网')