## 特别实用的shell命令

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

#### apache2服务
```SHELL
# 启动
sudo /etc/init.d/apache2 start
# 重启
sudo /etc/init.d/apache2 restart
# 停止
sudo /etc/init.d/apache2 stop
```

#### 手动清理内存
```SHELL
# 清理前
free -h

# 清理
su
echo N > /proc/sys/vm/drop_caches

# 清理后
free -h
```

#### 自动清理内存
创建一个清理脚本 `memoryFree.sh`
```SHELL
#!/bin/bash
# CPU
cpu=`cat /proc/cpuinfo | grep "cpu cores" | uniq | awk -F: '{print $2}'`
# 总内存
MemTotal=`free -g |grep "Mem:" | awk '{print $2}'`
# 剩余内存
MemFree=`free -m |grep "Mem:" | awk '{print $4}'`
# 磁盘大小
disk_size=`df -h / | awk '{print $2}' | sed -n '2p'`
# 系统架构
system_bit=`getconf LONG_BIT`
# 进程
process=`ps -ef | wc -l`
# 软件数
soft_num=`dpkg -l |wc -l`
# ip
ip=`ifconfig eth0 |grep "inet \u5730\u5740"|awk -F ' ' '{print $2}'|cut -d ":" -f 2`
# echo "cpu num:$cpu"
# echo "memory tatal: $MemTotal""G"
echo "memory free: $MemFree""M"
# echo "disk size: $disk_size"
# echo "system bit: $system_bit"
# echo "process: $process"
# echo "software num: $soft_num"
# echo "ip: $ip"
# 当前丢弃的数字
currentDrop=$(cat /proc/sys/vm/drop_caches)
# 限制内存800M触发
memoryLimit=800
# -gt：大于; -lt: 小于; -eq:等于; -ge:大于等于; -le:小于等于; -ne:不等于;
if [ $MemFree -gt $memoryLimit ]
then
    echo "内存大于800M,不担心"
    echo $MemFree
else
    echo "我要清理内存了"
    if [ $currentDrop -eq 2 ]
    then
        # echo "我要丢到1里"
        echo 1 > /proc/sys/vm/drop_caches
    else
        # echo "我要丢到2里"
        echo 2 > /proc/sys/vm/drop_caches
    fi
fi
```
创建一个定时控制脚本 `do.sh`
```SHELL
#!/bin/bash
while [ true ]
do
    echo "执行啊啊"
    ./memoryFree.sh
    sleep 5s
done
```
执行
```SHELL
# 给权限并执行
sudo chmod -R 777 ./do.sh
sudo ./do.sh
```