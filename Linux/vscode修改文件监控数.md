#### vscode修改文件监控数

#### 问题
```SHELL
Error: ENOSPC: System limit for number of file watchers reached
```

#### 解决办法
```SHELL
sudo gedit /etc/sysctl.conf
# 在最后加上
fs.inotify.max_user_watches=524288
# 运行命令
sudo sysctl -p
```

#### 参考
1. [System limit for number of file watchers reached, watch](https://blog.csdn.net/qiphon3650/article/details/108577103 'System limit for number of file watchers reached, watch')