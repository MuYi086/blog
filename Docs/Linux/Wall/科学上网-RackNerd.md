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



