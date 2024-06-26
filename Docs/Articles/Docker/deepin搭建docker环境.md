---
tags:
  - Deepin
  - docker
---
# deepin搭建docker环境

## 前言
本来我是想搭建 `gitlab` ,后来综合网上的教程，在 `deepin` 上试了多次，失败.于是转而通过学习 `docker` 来一键部署 `gitlab` .

## 开局暗坑
```shell
wget -q0- https://get.docker.com/ | sh
# deepin由于不是官方认证的stable版本
# 不能直接通过docker脚本安装docker
```

## 解决办法
1. 确保先卸载以前版本
    ```shell
    sudo apt-get remove docker.io docker-engine
    ```
1. 安装秘钥管理相关工具
    ```shell
    sudo apt-get install apt-transport-https ca-certificates curl python-software-properties software-properties-common
    # 提示大意是software-properties-common可以替代被引用的python-software-properties
    # 无关紧要,照字面意思其实可以不要后面的python-software-properties
    ```

1. 下载安装秘钥
    国内源优选 [清华大学开源软件镜像站](https://mirrors.tuna.tsinghua.edu.cn/help/docker-ce/) 或 [中科大开源镜像站](http://mirrors.ustc.edu.cn/)
    ```shell
    curl -fsSL https://mirrors.ustc.edu.cn/docker-ce/linux/debian/gpg | sudo apt-key add -
    # 如下官方源：网络问题，容易被墙
    # curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -
    ```

    检查秘钥是否安装成功
    ```shell
    sudo apt-key fingerprint 0EBFCD88
    # 如果成功,会返回pub, uid, sub信息
    ```

1. 添加 `docker` 仓库
    ```shell
    # 编辑 /etc/apt/sources.list 添加如下
    deb [arch=amd64] https://mirrors.ustc.edu.cn/docker-ce/linux/debian stretch stable
    # 如下是官方源:网络问题，容易被墙
    # deb [arch=amd64] https://download.docker.com/linux/debian stretch stable
    ```

1. 更新仓库并安装 `docker-ce`
    ```shell
    sudo apt-get update
    sudo apt-get install docker-ce
    ```
1. 设置国内镜像加速

    ```shell
    # 配置daemon.json:没有的话自己touch一个
    sudo gedit /etc/docker/daemon.json
    # 填入收集的镜像地址
    {
        "registry-mirrors": [
            "https://hub-mirror.c.163.com",
            "https://reg-mirror.qiniu.com",
            "https://registry.docker-cn.com",
            "https://docker.mirrors.ustc.edu.cn",
            "https://mirror.ccs.tencentyun.com"
        ]
    }
    # 重启
    sudo service docker restart
    ```

1. 常用 `docker` 命令

    ::: details 点我查看代码
    ```shell
    # 启动docker
    systemctl start docker

    # 停止docker
    systemctl stop docker

    # 查看安装的版本信息
    docker version

    # docker的demo项目hello-world
    sudo docker run hello-world

    # 让普通用户也能运行docker:把账号加到docker用户组,重启docker服务,切换身份
    sudo groupadd docker
    sudo gpasswd -a user_name(MuYi086) docker
    newgrp - docker # 将当前用户切换到docker组中
    sudo service docker restart

    # 并不是一劳永逸,首次进入需切换身份
    su root
    su user_name(MuYi086)

    # 如果提示鉴定错误，是由于初次安装未给root设置密码,重新设置即可
    sudo passwd root

    # 列出镜像
    docker images

    # 查找镜像
    docker search python

    # 获取镜像
    docker pull python

    # 删除镜像
    docker rmi python

    # 查看状态
    docker stats 

    # 列出当前活动容器
    docker ps

    # 列出所有容器
    docker ps -a

    # 创建容器
    docker create nginx:1.12

    # 启动容器
    docker start nginx

    # 创建+启动容器
    docker run -it ubuntu /bin/bash

    # 进入容器
    docker exec -it nginx bash

    # 停止和删除容器
    docker stop nginx
    docker rm nginx

    # 搜索docker hub上的镜像
    docker search ubuntu

    # 管理镜像
    docker inspect ubuntu

    # 查询容器Ip
    docker inspect container_name | grep "IPAddress"

    # 移除容器
    docker rm container_name

    # 删除镜像:该镜像下容器实例必须都已停止
    docker rmi image_name

    # 卸载docker-ce
    apt remove docker-ce
    apt autoremove

    # 容器互联
    # 创建一个 MySQL 容器，将运行我们 Web 应用的容器连接到这个 MySQL 容器上，打通两个容器间的网络，实现它们之间的网络互通
    docker run -d --name mysql -e MYSQL_RANDOM_ROOT_PASSWORD=yes mysql
    docker run -d --name webapp --link mysql webapp:latest

    # 创建bridge网络
    docker network create -d bridge individual

    # 查询新创建的bridge
    docker network ls
    docker network lis

    # 挂载文件到容器: 传递 -v 或 --volume 选项来指定内外挂载的对应目录或文件
    docker run -d --name nginx -v /webapp/html:/usr/share/nginx/html nginx:1.12

    # 挂载临时文件目录
    docker run -d --name webapp --tmpfs /webapp/cache webapp:latest

    # 删除数据卷
    docker volume rm appdata

    # 提交容器更改
    docker commit -m "Configured" webapp

    # 为镜像命名
    docker tag 0bc42f7ff218 webapp:1.0
    docker tag webapp:1.0 webapp:latest

    # 镜像迁移
    docker save webapp:1.0 > webapp-1.0.tar
    docker save -o ./webapp-1.0.tar webapp:1.0

    # 导入镜像
    docker load < webapp-1.0.tar
    docker load -i webapp-1.0.tar

    # 批量迁移
    docker save -o ./images.tar webapp:1.0 nginx:1.12 mysql:5.7

    # 导出和导入容器
    docker export -o ./webapp.tar webapp
    docker import ./webapp.tar webapp:1.0

    ```
    :::

## 参考
1. [deepin系统下的docker安装](https://www.jianshu.com/p/8200a3a50806)
1. [Deepin下安装Docker](https://www.diandian100.cn/bce2e291.html)
1. [Docker 加速器](http://guide.daocloud.io/dcs/daocloud-9153151.html)