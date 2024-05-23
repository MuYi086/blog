# 科学上网-RackNerd

## 介绍
继 `surfshark` 退款之后，重新购买了一个促销 `RackNerd` 的 `VPS` ，年付 `11` 美元不到，对比配置，性价比挺高，在 [ping.cn](https://ping.chinaz.com/) 测速 `San Jose, CA` 是同类型机房中速度最快的。

![RackNerd](/Images/Linux/Wall/科学上网-RackNerd/config.png "RackNerd")

## 噩耗
购买后，拿到 `ssh` 信息准备登录，发现主 `ip` 被封了，国内所有测速点均无法 `ping` 通，顿时俩眼一黑。

## 急救措施
1. 本地 `putty` 和 `ssh` 已废，改用 `WebTerm` 登录 `ssh`, 这个 网页 `ssh` 部署在外网，因此可以访问到 `RackNerd` 的主 `ip`

1. 安装 `1Panel` 面板

    ::: warning 注意
    方法一: 使用 [Tor浏览器](/Docs/Linux/Wall/科学上网-Tor) 访问被屏蔽的 `1Panel` 面板地址

    方法二: 使用 [免费的v2ray节点](https://github.com/barry-far/V2ray-Configs) 访问被屏蔽的 `1Panel` 面板地址 
    :::

1. 将域名解析到 `Cloudflare`, 所有流量走 `SSL`, 参考[科学上网-v2ray搭建](/Docs/Linux/Wall/科学上网-v2ray搭建#cloudflare--1panel)

## 使用体验
从以下可以发现, 开启 `BBR` 对于 `vmess` 提升还是比较大的, 平均来看 `vless` 协议速度优于 `vmess`, 但提升不大。

1. 使用 `vmess` 协议, 在停用缓存基础上，访问部署的 `x-ui` 网站

    ::: tip 未开启BBR
    已传输 2.4MB, 完成用时: 6.05s， DOMContentLoad: 5.74s, 加载时间: 5.87s

    已传输 2.4MB, 完成用时: 5.00s， DOMContentLoad: 4.46s, 加载时间: 4.61s

    已传输 2.4MB, 完成用时: 11.95s， DOMContentLoad: 11.43s, 加载时间: 11.56s

    已传输 2.4MB, 完成用时: 32.41s， DOMContentLoad: 31.86s, 加载时间: 32.0s

    已传输 2.4MB, 完成用时: 45.7s， DOMContentLoad: 45.4s, 加载时间: 45.53s

    已传输 2.4MB, 完成用时: 12.18s， DOMContentLoad: 11.17s, 加载时间: 11.3s

    已传输 2.4MB, 完成用时: 16.85s， DOMContentLoad: 16.55s, 加载时间: 16.69s

    去掉最高最低，平均15.484s
    :::

    ::: tip 已开启BBR
    已传输 2.4MB, 完成用时: 10.10s， DOMContentLoad: 9.15s, 加载时间: 9.26s

    已传输 2.4MB, 完成用时: 6.82s， DOMContentLoad: 6.25s, 加载时间: 6.36s

    已传输 2.4MB, 完成用时: 5.86s， DOMContentLoad: 4.95s, 加载时间: 5.05s

    已传输 2.4MB, 完成用时: 9.53s， DOMContentLoad: 9.18s, 加载时间: 9.29s

    已传输 2.4MB, 完成用时: 4.33s， DOMContentLoad: 4.02s, 加载时间: 4.12s

    已传输 2.4MB, 完成用时: 37.88s， DOMContentLoad: 37.54s, 加载时间: 37.71s

    已传输 2.4MB, 完成用时: 16.41s， DOMContentLoad: 16.04s, 加载时间: 16.15s

    去掉最高最低，平均9.222s
    :::


1. 使用 `vless` 协议, 在停用缓存基础上，访问部署的 `x-ui` 网站

    ::: tip 未开启BBR
    已传输 2.4MB, 完成用时: 6.65s， DOMContentLoad: 6.09s, 加载时间: 6.21s

    已传输 2.4MB, 完成用时: 5.73s， DOMContentLoad: 5.36s, 加载时间: 5.49s

    已传输 2.4MB, 完成用时: 8.14s， DOMContentLoad: 7.83s, 加载时间: 7.98s

    已传输 2.4MB, 完成用时: 5.44s， DOMContentLoad: 5.12s, 加载时间: 5.25s

    已传输 2.4MB, 完成用时: 10.43s， DOMContentLoad: 9.83s, 加载时间: 9.97s

    已传输 2.4MB, 完成用时: 14.74s， DOMContentLoad: 13.63s, 加载时间: 13.76s

    已传输 2.4MB, 完成用时: 15.77s， DOMContentLoad: 15.43s, 加载时间: 15.58s

    去掉最高最低，平均8.681s
    :::

    ::: tip 已开启BBR
    已传输 2.4MB, 完成用时: 7.58s， DOMContentLoad: 7.07s, 加载时间: 7.18s

    已传输 2.4MB, 完成用时: 4.27s， DOMContentLoad: 3.76s, 加载时间: 3.86s

    已传输 2.4MB, 完成用时: 26.59s， DOMContentLoad: 26.07s, 加载时间: 26.17s

    已传输 2.4MB, 完成用时: 12.19s， DOMContentLoad: 10.78s, 加载时间: 10.92s

    已传输 2.4MB, 完成用时: 7.85s， DOMContentLoad: 7.53s, 加载时间: 7.65s

    已传输 2.4MB, 完成用时: 9.79s， DOMContentLoad: 9.17s, 加载时间: 9.29s

    已传输 2.4MB, 完成用时: 7.97s， DOMContentLoad: 7.44s, 加载时间: 7.55s

    去掉最高最低，平均8.517s
    :::



