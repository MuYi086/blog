---
tags:
  - Shell
---
# vps报错temporary failure in name resolution

## 介绍
新购买了一台 `vps` ,系统 `Ubuntu 20.04 LTS` 64bit, 打算装宝塔时, 发现 `ping` 报错: `temporary failure in name resolution`

## 解决办法
```shell
# 禁用systemd-resolved服务
sudo systemctl disable systemd-resolved.service

# 停止服务
sudo systemctl stop systemd-resolved.service

# 删除链接
sudo rm /etc/resolv.conf

# /etc/手动创建resolv.conf
sudo vim /etc/resolv.conf

# 添加您首选的DNS服务器
nameserver 208.67.222.222

# vi :wq保存重试
```


## 参考
1. [ping: google.com: Temporary failure in name resolution](https://stackoverflow.com/questions/53687051/ping-google-com-temporary-failure-in-name-resolution)
