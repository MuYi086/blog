---
tags:
  - Shell
---
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

# sync 命令用于将数据从内存缓冲区写入磁盘
# 将值 1 写入 /proc/sys/vm/drop_caches 文件, 代表清理 page cache，inode 和 dentry 缓存
sudo sync && echo 1 > /proc/sys/vm/drop_caches

# 清理后
free -h
```

## 自动清理内存
::: code-group
```shell [memoryFree.sh]
#!/bin/bash

# 获取 CPU 核心数
cpu_cores=$(cat /proc/cpuinfo | grep "cpu cores" | uniq | awk -F: '{print $2}')

# 获取内存信息
mem_info=$(grep MemFree /proc/meminfo | awk '{print $2}')

#将内存大小单位从 kB 转换为 MB
MemFree=$(($mem_info / 1024))

#将内存大小单位从 kB 转换为 MB
MemTotal=$(grep MemTotal /proc/meminfo | awk '{print $2}')
MemTotal=$(($MemTotal / 1024))

# 获取磁盘大小
disk_size=$(df -h / | awk 'NR==2 {print $2}')

# 获取系统架构
system_bit=$(getconf LONG_BIT)

# 获取进程数量
process_count=$(ps -ef | wc -l)

# 获取已安装软件数
software_count=$(dpkg -l | grep ^ii | wc -l)

# 获取 IP 地址（适应新的网络接口命名约定）
ip_address=$(ip addr show | awk '/inet / {print $2}' | grep -v "127.0.0.1" | awk 'NR==1')

# 打印系统信息
echo "Memory free: $MemFree""M"
echo "CPU cores: $cpu_cores"
echo "Memory total: $MemTotal""M"
echo "Disk size: $disk_size"
echo "System bit: $system_bit"
echo "Process count: $process_count"
echo "Software count: $software_count"
echo "IP address: $ip_address"

# 检查内存是否低于阈值并执行相应操作
memoryLimit=800
if [[ -n $MemFree && $MemFree -gt $memoryLimit ]]; then
  echo "Memory is greater than 800M, everything's fine."
  echo $MemFree
else
  echo "Low memory detected, performing cache cleanup."
  sync && echo 1 > /proc/sys/vm/drop_caches
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