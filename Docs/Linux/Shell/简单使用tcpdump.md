# 简单使用tcpdump

## 安装
`deepin20.3` 默认没有安装 `tcpdump`
```SHELL
# 安装
sudo apt-get install tcpdump
```

## 提权
当前用户默认不能直接运行 `tcpdump` ，需要使用 `root` 权限
```SHELL
# 让当前用户可以执行tcpdump
sudo chmod u+s /usr/sbin/tcpdump
```

## 使用
```SHELL
# 监听指定协议和端口得数据包:比如vue项目
tcpdump tcp port 8089

# 监听指定网络接口得数据包
tcpdump -i eno1 # 通过ifconfig获得

# 监听指定主机得数据包
tcpdump host 192.168.10.254
```

## 参考
1. [抓包工具tcpdump用法说明](https://www.cnblogs.com/f-ck-need-u/p/7064286.html '抓包工具tcpdump用法说明')
1. [谁说抓包必须用root权限](https://blog.csdn.net/mseaspring/article/details/109376902 '谁说抓包必须用root权限')
1. [抓包神器 tcpdump 使用介绍](https://cizixs.com/2015/03/12/tcpdump-introduction/ '抓包神器 tcpdump 使用介绍')