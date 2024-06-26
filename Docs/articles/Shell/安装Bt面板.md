# 安装Bt面板

## 介绍
宝塔面板(`btpanel`)是一款支持 `Linux` 和 `Windows` 系统的服务器运维管理工具，可以一键安装 `LNMP` / `LAMP` 网站环境，提供资源监控、文件管理、软件安装等功能，还有安全防火墙。安装使用 `btpanel`，可以很方便的管理和维护我们的服务器。

## 安装
1. 下载安装包
  在 `bt` 官网下载对应地区的脚本，不同地区使用的 `cdn` 地址，下载不同的镜像加速。如果购买的国外 `vps` ，记得下拉选欧美下载后再复制链接。

    ![bt_install](/Images/Shell/安装Bt面板/bt_install.jpg "bt_install")

    ```shell
    # ubuntu/deepin安装脚本(欧美下载)
    wget -O install.sh https://cf1-node.aapanel.com/install/install-ubuntu_6.0.sh && sudo bash install.sh ed8484bec
    # ubuntu/deepin安装脚本(默认下载)
    wget -O install.sh https://download.bt.cn/install/install-ubuntu_6.0.sh && sudo bash install.sh ed8484bec
    ```


1. 终端安装完成后会提示面板信息

    ![panel_info](/Images/Shell/安装Bt面板/panel_info.jpg "panel_info")

1. 复制到浏览器，访问面板，登录后会提示安装 `LNMP` 或者 `LAMP` 环境，最新版还会多一个选择 `JAVA` 环境，这里我们选择比较轻量的 `LNMP` 环境。

    ::: warning 注意
    无特殊需求，建议选极速安装，非必要不要选 `编译安装`, 相当的慢，我测试 `brotli`，在 `ubuntu 18.04` 和 `20.04` 上重新编译 `nginx` , 等了很长时间不提，最后还编译失败了。在 `22.04` 花了将近一个小时，终于编译成功。
    :::

## aaPanel
其实宝塔面板还有一个孪生兄弟，叫 `aaPanel`, 针对国外用户，这个版本更干净，强制绑定宝塔账号的限制，习惯了中文宝塔的安装 `aaPanel` 也很容易上手

```shell
URL=https://www.aapanel.com/script/install_7.0_en.sh && if [ -f /usr/bin/curl ];then curl -ksSO "$URL" ;else wget --no-check-certificate -O install_7.0_en.sh "$URL";fi;bash install_7.0_en.sh aapanel
```
变更设置也是和宝塔面板一样，在终端通过 `bt` 命令进行设置。

## 其他设置
1. 可以在网页面板设置修改登录用户名称、密码、端口等。(每次变更后需要重新登录)

1. 也可以在终端使用 `bt` 命令进行设置。（推荐）

    ![bt_change_pw](/Images/Shell/安装Bt面板/bt_change_pw.jpg "bt_change_pw")

## 反向代理
反向代理是一种代理服务器，它接受客户端的请求，然后将请求转发给内部网络上的目标服务器。反向代理可以提高安全性、负载均衡和缓存性能。

举个场景，我的 `vps` 隶属于 `RackNerd` , `ip` 早就被封了，所以我是无法直接通过 `ip` 访问到我服务器的 `bt` 地址的，那么平时我要维护服务器怎么做的呢。

* 方法一: 使用 `vpn`
* 方法二: 配置反向代理，借助 `cloudflare` 中转, 通过域名直接访问到服务器（配置完成前需要利用方法一访问）。

接下来我重点介绍第二种。

1. 在 `cloudflare` 将一个二级域名解析到我们被屏蔽的主机，设置代理

    ![cf_proxy](/Images/Shell/安装Bt面板/cf_proxy.jpg "cf_proxy")

1. 在 `bt` 面板中配置反向代理

    ![bt_proxy](/Images/Shell/安装Bt面板/bt_proxy.jpg "bt_proxy")

    ::: warning 注意
    `target URL` 需要注意填写到端口，不要接举例路径，否则 `network` 访问很多请求会报 `404`

    那是因为 `bt` 面板 登录以及其他的功能都是 `ip:端口/路径`  访问, 如果解析到面板地址其他功能路径就会 `404` ，我们反代设置 `ip:端口` 就可以了。后面我们访问的时候可以 `反代域名+路径`，或者面板内部自动跳转
    :::


## 参考
1. [宝塔面板](https://www.bt.cn/new/download.html)
1. [aaPanel](https://www.aapanel.com/new/download.html#install)