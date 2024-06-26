---
tags:
  - Shell
---
# 解决linux安装xmind缺少依赖报错

最近需要查看思维导图,于是需要安装 `xmind` .
[官方下载地址](https://www.xmind.cn/download/)

## 问题: 在 Ubuntu16.04 安装 xmind 缺少依赖,并且依赖无法被安装
国内的各种办法五花八门,大致有这几种,但是常识之后均以失败告终

1. 安装 `openjdk`
```shell
sudo apt-get install openjdk-8-jdk
```

2. 更新
```shell
sudo apt-get clean
sudo apt-get update
sudo apt-get upgrade
```

## 解决办法
避开官方的 `setup.sh` ,在执行安装时采用第三方的 `xmind-install.sh` ,安装完成后去对应的32或64位目录直接执行(参考于 `google` )

项目地址:[https://github.com/dinos80152/XMind-Linux-Installer](https://github.com/dinos80152/XMind-Linux-Installer)