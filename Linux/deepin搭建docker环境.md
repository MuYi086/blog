## deepin搭建docker环境

#### 前言
本来我是想搭建`gitlab`,后来综合网上的教程，在`deepin`上试了多次，失败.于是转而通过学习`docker`来一键部署`gitlab`.

#### 开局暗坑
    ```
    wget -q0- https://get.docker.com/ | sh
    // deepin由于不是官方认证的stable版本
    // 不能直接通过docker脚本安装docker
    ```

#### 解决办法
1. 确保先卸载以前版本
    ```
    sudo apt-get remove docker.io docker-engine
    ```
1. 安装秘钥管理相关工具
    ```
    sudo apt-get install apt-transport-https ca-certificates curl python-software-properties software-properties-common
    // 提示大意是software-properties-common可以替代被引用的python-software-properties
    // 无关紧要,照字面意思其实可以不要后面的python-software-properties
    ```

1. 下载安装秘钥
    国内源优选[清华大学开源软件镜像站](https://mirrors.tuna.tsinghua.edu.cn/help/docker-ce/)或[中科大开源镜像站](http://mirrors.ustc.edu.cn/)
    ```
    curl -fsSL https://mirrors.ustc.edu.cn/docker-ce/linux/debian/gpg | sudo apt-key add -
    // 如下官方源：网络问题，容易被墙
    // curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -
    ```

    检查秘钥是否安装成功
    ```
    sudo apt-key fingerprint 0EBFCD88
    // 如果成功,会返回pub, uid, sub信息
    ```

1. 添加`docker`仓库
    ```
    // 编辑 /etc/apt/sources.list 添加如下
    deb [arch=amd64] https://mirrors.ustc.edu.cn/docker-ce/linux/debian stretch stable
    // 如下是官方源:网络问题，容易被墙
    // deb [arch=amd64] https://download.docker.com/linux/debian stretch stable
    ```

1. 更新仓库并安装`docker-ce`
    ```
    sudo apt-get update
    sudo apt-get install docker-ce
    ```

1. 常用`docker`命令
    ```
    // 启动docker
    systemctl start docker
    // 查看安装的版本信息
    docker version
    // docker的demo项目hello-world
    sudo docker run hello-world
    // 让普通用户也能运行docker:把账号加到docker用户组
    sudo groupadd docker
    sudo gpasswd -a user_name docker
    // 列出镜像
    docker images
    // 查找镜像
    docker search python
    // 获取镜像
    docker pull python
    // 删除镜像
    docker rmi python
    // 列举当前活动容器
    docker ps
    // 列举所有容器
    docker ps -a
    // 启动容器
    docker run -it ubuntu /bin/bash
    // 停止容器
    docker stop container_name
    // 重启容器
    docker start container_name
    // 移出容器
    docker rm container_name
    // 删除镜像:该镜像下容器实例必须都已停止
    docker rmi image_name
    ```
#### 参考
1. [deepin系统下的docker安装](https://www.jianshu.com/p/8200a3a50806)
1. [Deepin下安装Docker](https://www.diandian100.cn/bce2e291.html)