---
tags:
  - Shell
---
# navicat连接一键集成环境的mysql

## 介绍
系统使用一键 `lnpm` 安装了 `mysql` , 但是使用 `navicat` 无法直接连接上 `mysql`

## 错误处理
::: danger
Can't connect to local MySQL server through socket '/var/lib/mysql/mysql.sock
:::

```shell
# 1. 首先在web面板安全组放开3306端口
# 2. 找到系统中mysql.sock文件位置
sudo find / -name mysql.sock

# 此次我系统显示目录为/tmp/mysql.sock
# 然后给目标位置设置一个软连接即可
sudo ln -s /tmp/mysql.sock /var/lib/mysql/mysql.sock
```

## 最后
重新使用 `navicat` 连接数据库,已经可以正常使用了

## 参考
1. [Navicat连接BT宝塔mysql数据库](https://blog.csdn.net/weixin_44043817/article/details/109184721)
1. [解决Navicat 连接 Mysql报错](https://www.jianshu.com/p/1fdeb2e5b25a)