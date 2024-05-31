# 科学上网-Surfshark

::: danger 警告
后文都可忽略，截止 `20240522`，当前已选择退款处理（30天内可向官方申请退款）。实在是大陆封锁太严重了，`surfshark` 针对大陆的节点（日本，美国，英国，香港，台湾，泰国，韩国），只有泰国能连上，这几天还异常的慢，经常断连接，正常访问 `google` 和 `gmail` 都无法保证。后续还是自己购买 `vps` ，搭建自用的机场。
:::

## 背景
因为目前自用的梯子, 搭在 `vultr` 的云服务上，有点小贵，加上 `ipv4` , 每个月固定 `3.5$` 支出。即将到期，不打算续费了，所以决定换个性价比高的 `vpn` ，降低心智负担和维护成本，目前使用的是 `Surfshark` 。

## 介绍
我个人的使用场景还是比较全面的，基本上 `windows`, `linux`, `browser`, `iphone`, `android` 都有对应的端

## windows
官网下载安装即可，无额外心智负担，登录后，默认配置即可

## linux
### ~~方法一: ubuntu-gui~~
``` shell
# get script
curl -f https://downloads.surfshark.com/linux/debian-install.sh --output surfshark-install.sh
# install
sh surfshark-install.sh
# sudo apt update
```
::: warning 注意
截止 `20340508` ,会报错 `not found`
:::

### ~~方法二: snap-gui~~
`snap` 显示 当前 `LAST UPDATED : 17 April 2024 - latest/beta`
但是截止 `20340508` ,安装时会报错 `not found`
``` shell
sudo snap install surfshark --beta
```
::: warning snap安装速度慢
可以安装 `snap` 代理和客户端来加速
``` shell
sudo snap install snap-store-proxy
sudo snap install snap-store-proxy-client
```
:::

## browser
去到对应的浏览器应用商店下载对应的扩展,例如在 `chrome` 浏览器 [Surfshark](https://chromewebstore.google.com/detail/surfshark-vpn-extension/ailoabdmgclmfmhdagmlohpjlbpffblp?hl=zh-CN&utm_source=ext_sidebar)，登录后默认配置即可，但是当前封锁严重，无法连接，还是客户端稳定

## iphone
切换美区账号，下载 `Surfshark` 客户端，登录后默认配置即可

## android
去 `google play` 下载 [Surfshark](https://play.google.com/store/apps/details?id=com.surfshark.vpnclient.android&referrer=utm_source%3Ddirect%26utm_medium%3Dnone) 客户端，或者官网下载 [apk](https://downloads.surfshark.com/android/Surfshark.apk), 登录后默认配置即可

## hosts
```shell
#ux.surfshark.com
104.18.120.34 ux.surfshark.com
104.18.121.34 ux.surfshark.com

#ext.surfshark.com
104.18.120.34 ext.surfshark.com
104.18.121.34 ext.surfshark.com

#stats.surfshark.com
104.18.120.34 stats.surfshark.com
104.18.121.34 stats.surfshark.com

#go-front-s.surfshark.com
92.249.36.138 go-front-s.surfshark.com
```

## 其他方法
### WireGuard
[下载WireGuard](https://www.WireGuard.com/install/)

操作步骤是在 `Surfshark` 控制台生成密钥对，然后用密钥对选择需要的 `Surfshark` 服务器，下载 `conf` 配置，最后导入 `WireGuard` 使用

[如何在 Windows 上设置手动 WireGuard®连接](https://support.surfshark.com/hc/en-us/articles/6586553044498-How-to-set-up-a-manual-WireGuard-connection-on-Windows)
[中国可用的WireGuard配置](https://my.shark-china.com/vpn/manual-setup/main/WireGuard?restricted=&country=cn)

###  OpenVPN

[OpenVPN 3 Linux](https://community.openvpn.net/openvpn/wiki/OpenVPN3Linux)






## 参考
1. [Surfshark](https://www.surfshark.com/)
1. [Surfshark Help](https://support.surfshark.com/hc/en-us/sections/4414400041362-Applications)
1. [Snap Surfshark](https://snapcraft.io/surfshark)
1. [解决Ubuntu中snap安装软件下载速度龟速问题](https://www.cnblogs.com/linga/p/14270212.html)
