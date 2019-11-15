## 功能性的shell命令

#### 进程名查看进程信息
```
ps -ef | grep docker
```

#### 进程id查看进程占用端口
```
netstat -nap | grep 8080
```

#### 杀死进程
```
kill -s 9 id
```

#### 内存使用情况
```
top -d sec -u user
# P排序CPU, M排序内存
```
