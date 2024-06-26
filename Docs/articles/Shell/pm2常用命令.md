# pm2常用命令

## 介绍
`pm2` 是 `node` 进程管理工具,可以使用它简化很多 `node` 应用管理的繁琐任务，如性能监控，自动重启，负载均衡等。

## 常用命令
```shell
# 启动一个进程并把它命名为 uni
pm2 start app.js -n uni

# 列出所有进程信息
pm2 list/ls

# 显示所有进程日志
pm2 logs

# 停止所有进程
pm2 stop all

# 重启所有进程
pm2 restart all

# 0秒停机重载进程 (用于 NETWORKED 进程)
pm2 reload all

# 停止指定的进程
pm2 stop 0

# 重启指定的进程
pm2 restart 0

# 产生 init 脚本 保持进程活着
pm2 startup

# 杀死指定的进程
pm2 delete 0

# 杀死全部进程
pm2 delete all

# 查看进程的资源消耗情况
pm2 monit

# -i 表示 number-instances 实例数量 max 表示 PM2将自动检测可用CPU的数量 可以自己指定数量
pm2 start app.js -i max

# 在文件改变的时候会重新启动程序
pm2 start app.js -n uni --watch

# 设置pm2开机自启
pm2 startup centos

# 保存设置
pm2 save
```

## 参考
1. [PM2 Process Management Quick Start](https://pm2.keymetrics.io/docs/usage/quick-start/)