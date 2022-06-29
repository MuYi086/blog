## nginx常用命令

#### 前言
工作中常用到 `putty` 连接远程的 `vps` 操作, 手输命令太麻烦且容易出错, 因此直接拷贝常用的 `nginx` 命令更为高效

```SHELL
# 启动nginx
./nginx
# 关闭nginx
./nginx -s stop
# 重启nginx
./nginx -s reload
# 查看已安装的模块
nginx -V
```

#### 修复刷新404
```SHELL
location / {
 try_files $uri $uri/ @router;
  index index.html;
}
 
location @router {
  rewrite ^.*$ /index.html last;
}
```


#### 参考
1. [nginx下载](http://nginx.org/en/download.html 'nginx下载')
1. [nginx文档](http://nginx.org/en/docs/ 'nginx文档')