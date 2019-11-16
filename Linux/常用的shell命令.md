## 功能性的shell命令

#### 进程名查看进程信息
```SHELL
ps -ef | grep docker
```

#### 进程id查看进程占用端口
```SHELL
netstat -nap | grep 8080
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
