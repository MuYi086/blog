## 功能性的shell命令

#### 进程名查看进程信息
```SHELL
ps -ef | grep docker
```

#### 查看端口占用
```SHELL
sudo netstat -lnp | grep id
```

#### 杀死进程
```SHELL
kill -s 9 id
```

#### 内存使用情况
```SHELL
# 直观统计
free -h
# top命令查看所有:P排序CPU, M排序内存
top -d sec -u user
```

# apache2服务
```SHELL
# 启动
sudo /etc/init.d/apache2 start
# 重启
sudo /etc/init.d/apache2 restart
# 停止
sudo /etc/init.d/apache2 stop
```
