---
tags:
  - Shell
  - nginx
---
# nginx常用命令

## 介绍
工作中常用到 `putty` 连接远程的 `vps` 操作, 手输命令太麻烦且容易出错, 因此直接拷贝常用的 `nginx` 命令更为高效

::: code-group
```shell [method 1]
# 注意:必要时加上sudo
# 查找路径
whereis nginx

# 启动
service nginx start

# 查看版本号
nginx -V

# 停止
nginx -s stop

# 退出
nginx -s quit

# 重启加载配置
nginx -s reload
```
```shell [method 2]
# 启动nginx
./nginx

# 关闭nginx
./nginx -s stop

# 重启nginx
./nginx -s reload

# 查看已安装的模块
nginx -V
```
:::



## 修复刷新404
```shell
location / {
 try_files $uri $uri/ @router;
  index index.html;
}
 
location @router {
  rewrite ^.*$ /index.html last;
}
```


## 参考
1. [nginx下载](http://nginx.org/en/download.html)
1. [nginx文档](http://nginx.org/en/docs/)
1. [linux下nginx常用命令](https://www.cnblogs.com/lcword/p/14380831.html)