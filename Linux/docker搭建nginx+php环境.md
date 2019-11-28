## docker搭建nginx+php环境

#### 前言
之前使用 `docker` 部署 `gitlab` 和 `jenkins` 很是舒服，管理也很方便。于是今天来尝试 `nginx＋php` 。

#### 安装nginx
```SHELL
# 拉取最新镜像
docker pull nginx
# 创建一个目录用来存放nginx配置
cd /home/ougege/program
mkdir -p nginx/www
# 运行容器
# -m 最大占用内存 --memory-reservation 内存+swap
# -d: 后台运行
# --rm：容器停止运行后，自动删除容器文件
# -p:将容器内部端口向外映射
# --name:命名容器名称
# -v:将容器内数据文件夹,日志,配置等挂载到宿主机指定目录下
docker run -m 200M -d --rm -p 8089:80 --name nginx --network testnet --network-alias nginx -v /home/ougege/program/nginx/www:/usr/share/nginx/html nginx
# 然后在www目录创建一个hello world页面
echo '<h1>Ｈello World</h1>' >> /home/ougege/program/nginx/www/index.html
# 把容器内nginx配置拷贝出来并命名为conf
docker cp nginx:/etc/nginx /home/ougege/program/nginx/conf
# 最后停止docker
# 重新创建一个nginx容器
docker run -m 200M -d --rm -p 8089:80 --name nginx --network testnet --network-alias nginx -v /home/ougege/program/nginx/www:/usr/share/nginx/html -v /home/ougege/program/nginx/conf:/etc/nginx nginx
```

#### 安装php-fpm
```SHELL
# 拉取镜像
docker pull php:7.1-fpm
# 运行容器
# -m 最大占用内存 --memory-reservation 内存+swap
# -d: 后台运行
# --rm：容器停止运行后，自动删除容器文件
# -p:将容器内部端口向外映射
# --name:命名容器名称
# -v:将容器内数据文件夹,日志,配置等挂载到宿主机指定目录下
docker run -d --rm -p 9000:9000 --name php --network testnet --network-alias php -v /home/ougege/program/nginx/www:/home -d php:7.1-fpm
```

对应调整 `nginx` 配置
```SHELL
# 查询php容器的ip：我的是172.18.0.3
docker inspect php | grep "IPAddress"

# 进入nginx/www,创建index.php
cd /home/ougege/program/nginx/www && touch index.php
gedit index.php

# 粘贴一个hello world
<!DOCTYPE html>
<html>
    <body>
        <?php
            echo "Hello World!";
        ?>
    </body>
</html>

gedit /home/ougege/program/nginx/conf/conf.d/default.conf
# 修改nginx配置,如下
# 注意:php ip改为刚才获取的; /scripts改成新建php容器时的目录

server {
    listen       80;
    server_name  localhost;
    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm index.php;
    }
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
    location ~ \.php$ {
        fastcgi_pass   172.18.0.3:9000;
        fastcgi_index  index.php;
        fastcgi_param  SCRIPT_FILENAME  /home/$fastcgi_script_name;
        include        fastcgi_params;
    }
}

# 进入nginx并重载配置
docker exec -it nginx bash
service nginx reload
```


#### 参考
1. [docker-nginx](https://hub.docker.com/_/nginx/ 'docker-nginx')
1. [docker-php-fpm](https://hub.docker.com/r/crunchgeek/php-fpm 'docker-php-fpm')
1. [Nginx容器教程](https://www.ruanyifeng.com/blog/2018/02/nginx-docker.html 'Nginx容器教程')
1. [Docker中配置Nginx与PHP](https://segmentfault.com/a/1190000011637451 'Docker中配置Nginx与PHP')
1. [docker部署php+nginx环境](https://juejin.im/post/5b20cf9ef265da6dfd1a7fcb 'docker部署php+nginx环境')