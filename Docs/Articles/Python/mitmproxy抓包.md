---
tags:
  - mitmproxy
---
# mitmproxy抓包

## 安装

```shell
# pip3 安装 mitmproxy
pip3 install mitmproxy

# 无pip3则安装
sudo apt-get install python3-pip
```

## 使用

```shell
# 指定监听端口,默认8080
mitmproxy -p 8888

# 需要抓包的软件代理设为上述端口
# 使用mitmweb在网页端查看请求信息
mitmweb
```

## 参考
1. [mitmproxy docs](https://docs.mitmproxy.org/stable/overview-installation/)
1. [mitmproxy在windows+chrome上的配置](https://www.jianshu.com/p/8a9c4b298a1f)