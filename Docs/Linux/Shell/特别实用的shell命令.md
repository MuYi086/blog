# 特别实用的shell命令

## 进程名查看进程信息
```shell
ps -ef | grep docker
```

## 查看端口占用
```shell
sudo netstat -lnp | grep id
```

## 杀死进程
```shell
kill -s 9 id
```

## 显示包相关信息
```shell
# 已安装的包信息
apt-cache showpkg docker
# 列出以xx开头的包(来自网络缓存,非本地)
apt-cache pkgnames docker
```

## 压缩和解压
```shell
# zip和unzip。如果没有zip请使用apt-get update && apt-get install -y zip安装
zip -r dir.zip test_directory/   # 将test_directory文件夹压缩为dir.zip文件
unzip dir.zip   # 将dir.zip文件解压

# tar. 以下参数c代表压缩，x表示解压，z代表压缩/解压为gz格式的压缩包
tar czf dir.tar.gz test_directory/   # 将test_directory文件夹压缩为dir.tar.gz文件
tar xzf dir.tar.gz   # 将dir.tar.gz文件解压

# tar还可以用于压缩和解压其他格式的压缩文件，比如bz2
tar cjf dir.tar.bz2 test_directory/   # 将test_directory文件夹压缩为dir.tar.bz2文件
tar xjf dir.tar.bz2   # 将dir.tar.bz2文件解压
```

## 查看GPU信息
```shell
nvidia-smi
```

## 磁盘使用情况
```shell
df -h
```

## 内存使用情况
```shell
# 直观统计
free -h
# top命令查看所有:P排序CPU, M排序内存
top -d sec -u user
```

## apache2服务
```shell
# 启动
sudo /etc/init.d/apache2 start
# 重启
sudo /etc/init.d/apache2 restart
# 停止
sudo /etc/init.d/apache2 stop
```

## 手动清理内存
```shell
# 清理前
free -h

# 清理
su
echo N > /proc/sys/vm/drop_caches

# 清理后
free -h
```

## 自动清理内存
::: code-group
```shell [memoryFree.sh]
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
# 限制内存800M触发
memoryLimit=800
# -gt：大于; -lt: 小于; -eq:等于; -ge:大于等于; -le:小于等于; -ne:不等于;
if [ $MemFree -gt $memoryLimit ]
then
  echo "内存大于800M,不担心"
  echo $MemFree
else
  echo "我要清理内存了"
  # echo 1 > /proc/sys/vm/drop_caches
  # 1:清空pagecache;
  # 2:清空dentries和inodes
  # 3:清空给所有缓存(pagecache,dentries和inodes)
  echo 3 > /proc/sys/vm/drop_caches
  # sudo bash -c "echo 3 > /proc/sys/vm/drop_caches"
fi
```
```shell [do.sh]
#!/bin/bash
while [ true ]
do
  echo "执行内存释放脚本"
  ./memoryFree.sh
  sleep 5s
done
```
:::

执行
```shell
# 给权限并执行
sudo chmod 777 ./do.sh
sudo chmod 777 ./memoryFree.sh
# 或者简单点 -R 递归
sudo chmod 777 -R ./currentDir
sudo ./do.sh
```

## 查找文件
```shell
# 例如查找所有jenkins文件
find / -name jenkins.*
```

## 文件系统只读模式修复
```shell
sudo mount -o remount rw /media/deepin/新加卷 
```