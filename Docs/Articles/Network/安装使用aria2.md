---
tags:
  - Network
---
# 安装使用aria2

## 介绍

## 安装
```shell
# ubuntu安装很方便，命令行安装即可
sudo apt-get install aria2

# 配置
# 创建目录
sudo mkdir /etc/aria2
# 新建session文件
sudo touch /etc/aria2/aria2.session    
# 设置aria2.session可写
sudo chmod 777 /etc/aria2/aria2.session
# 在目录建配置文件
sudo gedit /etc/aria2/aria2.conf

# 以下配置自行调整
#dir=/home/xxx/aria2-temp-dir
#disable-ipv6=true
#打开rpc的目的是为了给web管理端用
enable-rpc=true
rpc-allow-origin-all=true
rpc-listen-all=true
#端口号我都是改为别的，一般不保持默认。当然不对外开放的话无所谓。
rpc-listen-port=6800
#断点续传
#continue=true
input-file=/etc/aria2/aria2.session
save-session=/etc/aria2/aria2.session
#最大同时下载任务数
max-concurrent-downloads=20
save-session-interval=120
# Http/FTP 相关
connect-timeout=120
#lowest-speed-limit=10K
#同服务器连接数
max-connection-per-server=10
#max-file-not-found=2
#最小文件分片大小, 下载线程数上限取决于能分出多少片, 对于小文件重要
min-split-size=10M
#单文件最大线程数, 路由建议值: 5
split=10
check-certificate=false
#http-no-cache=true

## 上面的参数和下面的重复，我是为了方便把打开的参数集中在一起，方便修改。大家新建的话可以默认仅使用上面的参数，也可以去掉上面的参数，根据自己的要求修改增加下面的参数 ##
## '#'开头为注释内容, 选项都有相应的注释说明, 根据需要修改 ##
## 被注释的选项填写的是默认值, 建议在需要修改时再取消注释  ##

## 文件保存相关 ##

# 文件的保存路径(可使用绝对路径或相对路径), 默认: 当前启动位置
#dir=~/downloads
# 启用磁盘缓存, 0为禁用缓存, 需1.16以上版本, 默认:16M
disk-cache=128M
# 文件预分配方式, 能有效降低磁盘碎片, 默认:prealloc
# 预分配所需时间: none < falloc ? trunc < prealloc
# falloc和trunc则需要文件系统和内核支持
# NTFS建议使用falloc, EXT3/4建议trunc, MAC 下需要注释此项
file-allocation=prealloc
# 断点续传
continue=true

## 下载连接相关 ##

# 最大同时下载任务数, 运行时可修改, 默认:5
#max-concurrent-downloads=5
# 同一服务器连接数, 添加时可指定, 默认:1
#max-connection-per-server=5
# 最小文件分片大小, 添加时可指定, 取值范围1M -1024M, 默认:20M
# 假定size=10M, 文件为20MiB 则使用两个来源下载; 文件为15MiB 则使用一个来源下载
#min-split-size=10M
# 单个任务最大线程数, 添加时可指定, 默认:5
#split=5
# 整体下载速度限制, 运行时可修改, 默认:0
max-overall-download-limit=0
# 单个任务下载速度限制, 默认:0
max-download-limit=0
# 整体上传速度限制, 运行时可修改, 默认:0
max-overall-upload-limit=0
# 单个任务上传速度限制, 默认:0
max-upload-limit=0
# 禁用IPv6, 默认:false
#disable-ipv6=true
# 连接超时时间, 默认:60
#timeout=60
# 最大重试次数, 设置为0表示不限制重试次数, 默认:5
#max-tries=5
# 设置重试等待的秒数, 默认:0
#retry-wait=0

## 进度保存相关 ##

# 从会话文件中读取下载任务
#input-file=/etc/aria2/aria2.session
# 在Aria2退出时保存`错误/未完成`的下载任务到会话文件
#save-session=/etc/aria2/aria2.session
# 定时保存会话, 0为退出时才保存, 需1.16.1以上版本, 默认:0
#save-session-interval=60

## RPC相关设置 ##

# 启用RPC, 默认:false
#enable-rpc=true
# 允许所有来源, 默认:false
#rpc-allow-origin-all=true
# 允许非外部访问, 默认:false
#rpc-listen-all=true
# 事件轮询方式, 取值:[epoll, kqueue, port, poll, select], 不同系统默认值不同
#event-poll=select
# RPC监听端口, 端口被占用时可以修改, 默认:6800
#rpc-listen-port=6800
# 设置的RPC授权令牌, v1.18.4新增功能, 取代 --rpc-user 和 --rpc-passwd 选项
#rpc-secret=<TOKEN>
# 设置的RPC访问用户名, 此选项新版已废弃, 建议改用 --rpc-secret 选项
#rpc-user=<USER>
# 设置的RPC访问密码, 此选项新版已废弃, 建议改用 --rpc-secret 选项
#rpc-passwd=<PASSWD>
# 是否启用 RPC 服务的 SSL/TLS 加密,
# 启用加密后 RPC 服务需要使用 https 或者 wss 协议连接
#rpc-secure=true
# 在 RPC 服务中启用 SSL/TLS 加密时的证书文件,
# 使用 PEM 格式时，您必须通过 --rpc-private-key 指定私钥，这里可以是CRT或者其他格式，标准内都支持。
#rpc-certificate=/path/to/certificate.pem
# 在 RPC 服务中启用 SSL/TLS 加密时的私钥文件
#rpc-private-key=/path/to/certificate.key

## BT/PT下载相关 ##

# 当下载的是一个种子(以.torrent结尾)时, 自动开始BT任务, 默认:true
#follow-torrent=true
# BT监听端口, 当端口被屏蔽时使用, 默认:6881-6999
#listen-port=51413
# 单个种子最大连接数, 默认:55
#bt-max-peers=55
# 打开DHT功能, PT需要禁用, 默认:true
enable-dht=false
# 打开IPv6 DHT功能, PT需要禁用
enable-dht6=false
# DHT网络监听端口, 默认:6881-6999
#dht-listen-port=6881-6999
# 本地节点查找, PT需要禁用, 默认:false
bt-enable-lpd=false
# 种子交换, PT需要禁用, 默认:true
enable-peer-exchange=false
# 每个种子限速, 对少种的PT很有用, 默认:50K
#bt-request-peer-speed-limit=50K
# 客户端伪装, PT需要
peer-id-prefix=-TR2770-
user-agent=Transmission/2.77
peer-agent=Transmission/2.77
# 当种子的分享率达到这个数时, 自动停止做种, 0为一直做种, 默认:1.0
seed-ratio=2.0
# 强制保存会话, 即使任务已经完成, 默认:false
# 较新的版本开启后会在任务完成后依然保留.aria2文件
#force-save=false
# BT校验相关, 默认:true
#bt-hash-check-seed=true
# 继续之前的BT任务时, 无需再次校验, 默认:false
bt-seed-unverified=true
# 保存磁力链接元数据为种子文件(.torrent文件), 默认:false
bt-save-metadata=true

## 高级设置    
# 是否允许写覆盖Restart download from scratch if the corresponding control file doesn'
# allow-overwrite=false
#磁盘缓存，单位为K或者M。0为禁用磁盘缓存。                               
disk-cache=3100M             
#存放在内存中的最多下载结果，设置过多将会导致内存占用过高。0表示不存储下载结果。
max-download-result=500
#保留未完成的任务                                                  
keep-unfinished-download-result=true 
# 最低Tls版本
min-tls-version=TLSv1.2
# 最大断点续传尝试次数                                         
# max-resume-failure-tries=0                 
# 全局最大下载速度，单位K或者M,0表示不限制             
max-overall-download-limit=0
# 每个任务最大下载速度，单位K或者M,0表示不限制           
max-download-limit=0                                          
#不加载配置文件Disable loading aria2.conf file                          
#no-conf=false
# 强制保存会话, 即使任务已经完成, 默认:false
# 较新的版本开启后会在任务完成后依然保留.aria2文件
force-save=true
```
其他设置
```shell
# 修改启动文件权限
sudo chmod 755 /etc/init.d/aria2c

# 添加aria2c服务到开机启动
cd /etc/init.d
sudo update-rc.d aria2c defaults

# 现在即可使用systemctl管理
sudo systemctl start aria2   #启动
sudo systemctl status aria2c   #查看状态
```





## 参考
1. [在Ubuntu上安装Aria2完整手把手教程/Ubuntu server上安装BT下载软件Aria2](https://zhuanlan.zhihu.com/p/658156257)
1. [Ubuntu 安装 Aria2-NG](https://lxnchan.cn/aria2-ng.html)