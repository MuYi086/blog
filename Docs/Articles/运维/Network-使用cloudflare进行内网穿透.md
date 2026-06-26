---
tags:
  - 运维
---
# Network-使用cloudflare进行内网穿透

## 背景
作为一名开发，经常需要将本地开发机上的服务，快速生成一个临时、公开的 `HTTPS` 网址，方便与他人共享或测试

## 内网穿透方式
最简单的方式是`ngrok` 和 `localtunnel`，缺点是延迟几乎让你无法正常体验和使用

复杂一点的就是本文即将介绍的 `cloudflare-tunnel`，由于它有遍布全球的边缘节点，速度体验上是相当不错的。

## 快速尝试
先下载对应系统的[cloudflared](https://github.com/cloudflare/cloudflared)软件，并且添加到`path`
我们可以按照官方文档给的 `quick tunnels` 文档快速开始
```shell
# 先启动你本地的项目，比如是locahost:8090
# 然后再终端执行
cloudflared tunnel --url http://localhost:8090
# 找到终端输出的临时地址，在浏览器打开，就可以看到网页显示我们正在运行的项目了
# 这个临时分享给其他人通过公网也能访问,说明内网穿透已经成功
```

## 完整配置
参考官网[开始文档](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/get-started/)逐步操作和配置

1. 点击去创建一个`tunnel`
1. 选择对应系统按照说明完成配置: ![配置tunnel](/Images/运维/Network-使用cloudflare进行内网穿透/create_tunnel.png)
1. 在[cloudflare绑定域名](/Articles/运维/Linux-安装1Panel.md#绑定域名)
1. 进入`tunnel`管理页面，点击添加路由，选择已发布的应用程序，并完成配置: ![添加route](/Images/运维/Network-使用cloudflare进行内网穿透/add_route.png)

## 注意
:::warning
需要注意添加路由的地址中协议和端口一定要和本地run的协议和端口一致
:::

## 参考
1. [cloudflared](https://github.com/cloudflare/cloudflared)
1. [download](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/downloads/#windows)
1. [Quick Tunnels](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/do-more-with-tunnels/trycloudflare/)
1. [Get started](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/get-started/)
