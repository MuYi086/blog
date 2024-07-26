---
tags:
  - Node
---
# 使用verdaccio搭建本地npm仓库


## 介绍
由于 `sinopia` 作者停止维护和升级,于是一群人 `fork` 了 `sinopia` 的一个新分支，还起了个洋气的意大利名。并且更新和维护比较勤快,建议大家使用`verdaccio` 替换 `sinopia`

## 优势
1. 更加安全
1. 方便统一管理公司内部的私有包
1. 加速:本地 `npm` 服务器会缓存下载过的包

## 安装
```shell
npm install -g verdaccio
```

## 运行
```shell
verdaccio
```

## 配置文件
```shell
# 以本机deepin 为例,配置文件位置如下:
cd /home/MuYi086/.config/verdaccio

# 其中MuYi086是用户名
vim ./config.yaml

# vim的操作可自行百度
# 或者用gedit来编辑
gedit ./config.yaml

# 编辑文件在底部加一行以便于局域网内也能访问
listen: 0.0.0.0:4873
```

## 访问verdaccio
```JSON
// 浏览器打开 localhost:4873
```

## 添加用户
```shell
# 域名自行修改
npm set registry http://127.0.0.1:4873
npm adduser --registry http://127.0.0.1:4873

# 按提示输入用户名,密码和邮件地址
# 然后可以尝试在本地verdaccio的网页登录
```

## 查看当前用户
```shell
# 判断是否注册用户
npm who am i
```

## 设置代理
```shell
# 清除npm缓存
npm cache clean --force

# 设置代理
npm config set proxy http://127.0.0.1:10809
npm config set https-proxy http://127.0.0.1:10809

# 取消代理
npm config delete proxy
npm config delete https-proxy
```

## 发布
```shell
# 开发一个npm包:可自行百度,这里不展开了;
npm init
# 如果创建一个范围公共包
npm init --scope=@my-username
# 添加用户
npm adduser
# 如果直接修改github里的project，重新登录即可
npm login
# 如果登录403报错,查看默认源
npm get registry 
npm config set registry https://registry.npmjs.org/
# 然后关闭重新打开终端
# 然后发布到本地verdaccio
npm publish
# 如果要发布到npm.org;可以自行注册账号密码,然后切换本机npm的registry
# 如果发布一个范围公共包
npm publish --access=public
```

::: warning 注意
发布失败时，注意看 `log` 日志

无法登录可以使用以下俩个操作

1. 使用 `ping.cn` 拿到了延迟比较低的 `ip` ，然后粘贴到 `hosts`

1. 更换 `dns` ，使用 `1.1.1.1` 或者 `8.8.8.8` ,这俩个对国外网站比较友好

然后访问 `https://registry.npmjs.org`, 能正常返回 `200`, 基本就通了，可以正常 `npm login` 和 `publish` 了

排除未登录原因后，一般依赖引用了别的包导致体积过大

增加 `.npmignore` 忽略 `node_modules` 即可
:::

## 使用pm2守护进程
```shell
# 全局安装pm2
npm install -g pm2 --unsafe-perm
# 使用pm2启动verdaccio
pm2 start verdaccio
# 找出verdaccio所在进程id
ps -ef | grep verdaccio
# 杀掉verdaccio
kill -s 9 id
# 重新访问localhost:4873
# 发现verdaccio照常运行
# 重新查看verdaccio进程,发现正常运行,但id变了
ps -ef | grep verdaccio
# 手动停止命令
pm2 stop verdaccio
```

## 发布到局域网
如果 `verdaccio` 运行在虚拟机,需要让局域网内用户访问
请将网络模式选择桥接模式：复制物理网络连接状态
如果虚拟机不能上网,可如下操作
```JSON
编辑 => 虚拟网络编辑器 => 更改设置 => 选择桥接模式,选择宿主机网卡
```

![步骤图](/Images/Node/使用verdaccio搭建npm仓库/verdaccio_01.png '步骤图')

## 参考
1. [使用verdaccio 搭建私有npm 服务器](https://blog.csdn.net/qq_29594393/article/details/81587989)
1. [npm 私服工具verdaccio 搭建](https://blog.csdn.net/yyzzhc999/article/details/80097073)
1. [verdaccio官网](https://www.npmjs.com/package/verdaccio)
1. [pm2官网](https://www.npmjs.com/package/pm2)