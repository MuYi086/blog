# vscode修改文件监控数

## 介绍
::: danger
Error: ENOSPC: System limit for number of file watchers reached
:::

## 解决办法
```shell
sudo gedit /etc/sysctl.conf
# 在最后加上
fs.inotify.max_user_watches=524288
# 运行命令
sudo sysctl -p
```

## 参考
1. [System limit for number of file watchers reached, watch](https://blog.csdn.net/qiphon3650/article/details/108577103)