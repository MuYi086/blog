# 搭建v2ray

## 前言
很早之前，在了解到 `herokuapp` 的时候，就想尝试 `v2ray` 了，但是那时候一方面没有时间，一方面技术不够扎实，所以一直没有动手。终于，最近准备捡起来，搭建心心念念的 `v2ray`

## 介绍
一款优秀的代理集成工具。本文使用了 `V2ray + WebSocket + TLS + Nginx + Cloudflare` 搭建
* 优点 :  高匿,快速, 支持多平台, 多协议
* 缺点 : 配置较复杂,上手需要结合多种技术

## Cloudflare + BT(宝塔)

`Cloudflare` : 这里我们用来解析域名的 `DNS` ,并创建 `SSL` 证书
`BT` : 创建网站并绑定证书

1. [注册](https://dash.cloudflare.com) 并解析域名
    * 添加域名:代理状态设为关闭

        ![代理](/Images/Linux/搭建v2ray/v2ray_01.png '代理')

    * 在域名控制面板将 `DNS` 修改指向到 `Cloudflare`

        ```shell
        NS	earl.ns.cloudflare.com
        NS	vita.ns.cloudflare.com
        ```

1. 加密和创建证书
    * 使用 `SSL/TLS` 加密

        ![代理](/Images/Linux/搭建v2ray/v2ray_02.png '代理')

    * 创建证书

        ![证书](/Images/Linux/搭建v2ray/v2ray_03.png '证书')

        ![证书](/Images/Linux/搭建v2ray/v2ray_04.png '证书')

    *  记录并保存证书信息

        ![证书](/Images/Linux/搭建v2ray/v2ray_05.png '证书')
    
    *  将证书和密钥写到对应 `/etc/ssl/cert.pem` 和 `/etc/ssl/key.pem` 中

1. `BT` (宝塔设置)
    * 添加站点

        ![添加网站](/Images/Linux/搭建v2ray/v2ray_06.gif '添加网站')

    * 绑定证书

        ![绑定证书](/Images/Linux/搭建v2ray/v2ray_07.gif '绑定证书')

## 安装v2ray和配置
> 方法(1)： 一键安装脚本已失效,改用 `Alvin9999/new-pac` 安装 [自建v2ray服务器教程-高阶篇](https://github.com/Alvin9999/new-pac/wiki/%E8%87%AA%E5%BB%BAv2ray%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%95%99%E7%A8%8B)
> 方法(2)： [安装x-ui：支持多协议多用户的 xray 面板](https://github.com/vaxilu/x-ui) (推荐)

**记得先校正服务器时间，参见下方特别注意**

`v2ray` 安装配置完成后，去 `CloudFlare` 打开 `SSL/TLS` 设置为 `Full` 状态, 打开 `DNS` 并设置代理状态
不要安装 `BBR` 加速，会导致 `v2ray` 失效,重启后 `putty` 无法连接
```shell
wget -N --no-check-certificate "https://raw.githubusercontent.com/chiakge/Linux-NetSpeed/master/tcp.sh"

chmod +x tcp.sh

./tcp.sh
```

~~一键安装脚本:包含 `vmess + ws + tls`~~
```shell
wget -N --no-check-certificate -q -O install.sh "https://raw.githubusercontent.com/wulabing/V2Ray_ws-tls_bash_onekey/master/install.sh" && chmod +x install.sh && bash install.sh
```

开启 `bbr` 加速
```shell
wget --no-check-certificate https://github.com/teddysun/across/raw/master/bbr.sh && chmod +x bbr.sh && ./bbr.sh
```

~~普通安装~~
```shell
# ssh登录远程vps安装v2ray
wget -N --no-check-certificate https://raw.githubusercontent.com/FunctionClub/v2ray.fun/master/install.sh && bash install.sh
```

~~安装 `v2-ui`~~
```shell
wget https://blog.sprov.xyz/v2-ui.sh
bash ./v2-ui.sh
```




`BT` (宝塔)--安全--防火墙：放行上面设定的端口号

![放行端口](/Images/Linux/搭建v2ray/v2ray_08.png '放行端口')

登录 `vpsIp:5000` ，使用 `v2ray.fun` 面板修改配置

![修改配置](/Images/Linux/搭建v2ray/v2ray_09.png '修改配置')

::: info 修改配置
同时对应修改服务器 `v2ray` 配置

修改 `/etc/v2ray/config.json` 部分配置: 注意去掉注释

对应修改 `nginx` 配置
:::

::: code-group
```json [config.json]
"inbound": {
    "streamSettings": {
        "network": "ws",
        "wsSettings": {
        "path": "/ws/", # 路径
        "headers": {
            "Host": "MuYi086.cn" # 伪装域名
        }
        }
    },
    "protocol": "vmess",
    "port": 10010, # 服务器开放端口
    ...
}
```
```nginx [nginx]
location /ws {
  proxy_redirect off;
  proxy_pass http://127.0.0.1:10010;
  proxy_http_version 1.1;
  proxy_set_header Upgrade $http_upgrade;
  proxy_set_header Connection "upgrade";
  proxy_set_header Host $http_host;
}
```
:::

如图所示：

![修改nginx](/Images/Linux/搭建v2ray/v2ray_10.png '修改nginx')

```shell
# 1. 服务器重启v2ray
service v2ray restart
# 2. BT控制台重启nginx
```

## Cloudflare开启代理

![开启代理](/Images/Linux/搭建v2ray/v2ray_11.png '开启代理')

::: warning 特别注意
如果我们的服务器在国外，需要格外注意服务器系统时间与本地时间是否一致。 `v2ray` 验证方式认为误差超过 `90s` 都是不合法的请求。
```shell
# linux查看系统时间
date -R
```
:::

如果不为东八区的时间，我们使用 `tzselect` 重置下

```shell
tzselect
# 1. 选择Asia
# 2. 选择China
# 3. 选择Beijing Time
# 4. 选1，yes

# 更新环境变量
echo "TZ='Asia/Shanghai'; export TZ" >>/etc/profile
source /etc/profile
```
## 安装报错:chrony error
```shell
# 查看是否存在/var/lib/dpkg/info
# 如果没有
mkdir /var/lib/dpkg/info
```

## 客户端使用
详细使用参考 [v2ray使用](./3种常用且稳定的梯子.md)

## 参考(优先第一条)
1. [V2Ray+WebSocket(ws)+TLS+Nginx+Cloudflare拯救搬瓦工被封IP的VPS](https://liubing.me/v2ray-websocket-tl-nginx-cloudflare-bandwagonhost.html)
1. [V2Ray完全使用教程](https://yuan.ga/v2ray-complete-tutorial/)
1. [VPS 一键开启原版谷歌 BBR 加速教程，bbr.sh](https://v2raycn.com/96.html)
1. [v2ray-文档](https://toutyrater.github.io/prep/install.html)
1. [V2Ray-Wiki](https://github.com/233boy/v2ray/wiki)
1. [国外Linux服务器修改为系统时间为国内东八区，并更新BIOS时间](国外Linux服务器修改为系统时间为国内东八区，并更新BIOS时间)
1. [v2ray下载地址](https://www.yuque.com/renxinlei/wv98lk/owswbg?language=en-us)
1. [ProjectV](https://www.atzlinux.com/doc/v/v2ray/)
