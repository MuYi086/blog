## CI/CD搭建配置

#### 前言
主要讲述 `gitlab-ci` 和 `jekins` 的使用体验
系统环境: `deepin 15.11 x64`

#### gitlab-ci
[安装gitlab](../Linux/docker安装和使用gitlab.md '安装gitlab')

安装 `gitlab-runner`
1. 方法一:GNU/Linux安装(不好使)
    ```SHELL
    # For Debian/Ubuntu/Mint
    curl -L https://packages.gitlab.com/install/repositories/runner/gitlab-runner/script.deb.sh | sudo bash

    # For RHEL/CentOS/Fedora
    curl -L https://packages.gitlab.com/install/repositories/runner/gitlab-runner/script.rpm.sh | sudo bash

    # install
    # For Debian/Ubuntu/Mint
    sudo apt-get install gitlab-runner

    # For RHEL/CentOS/Fedora
    sudo yum install gitlab-runner

    # for DEB based systems
    apt-cache madison gitlab-runner
    sudo apt-get install gitlab-runner=10.0.0

    # for RPM based systems
    yum list gitlab-runner --showduplicates | sort -r
    sudo yum install gitlab-runner-10.0.0-1
    ```
1. 方法二： FreeBSD安装(推荐)
    ```SHELL
    # Linux x86-64
    sudo wget -O /usr/local/bin/gitlab-runner https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-linux-amd64

    # Linux x86
    sudo wget -O /usr/local/bin/gitlab-runner https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-linux-386

    # Linux arm
    sudo wget -O /usr/local/bin/gitlab-runner https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-linux-arm

    # 添加执行权限
    sudo chmod +x /usr/local/bin/gitlab-runner

    # 创建一个gitlab-ci用户
    sudo useradd --comment 'GitLab Runner' --create-home gitlab-runner --shell /bin/bash

    # 安装并启动服务
    sudo gitlab-runner install --user=gitlab-runner --working-directory=/home/gitlab-runner
    sudo gitlab-runner start
    ```
1. 方法三:通过 `deb` 安装
    可能大家在使用方法一安装提示:无法定位到软件包 `gitlab-runner` , 那么可以使用这种方式手动安装 [地址](https://gitlab-runner-downloads.s3.amazonaws.com/latest/index.html '地址')
    ```SHELL
    # For Debian/Ubuntu/Mint
    dpkg -i gitlab-runner_<arch>.deb

    # For RHEL/CentOS/Fedora
    rpm -i gitlab-runner_<arch>.rpm
    ```
1. 方法四:通过 `docker` 安装
    ```SHELL
    # 下载安装镜像
    docker pull gitlab/gitlab-runner:latest
    # 运行容器
    # -m 最大占用内存 --memory-reservation 内存+swap
    # -d: 后台运行
    # -p:将容器内部端口向外映射,这里用8081是防止80端口被占用
    # --name:命名容器名称
    # -v:将容器内数据文件夹,日志,配置等挂载到宿主机指定目录下
    docker run -d -m 500M --name gitlab-runner --restart always -v /var/run/docker.sock:/var/run/docker.sock -v /srv/gitlab-runner/config:/etc/gitlab-runner gitlab/gitlab-runner:latest
    ```

然后注册 `gitlab-runner`
```SHELL
# linux，mac等
sudo gitlab-runner register
# docker register
docker run --rm -t -i -v /srv/gitlab-runner/config:/etc/gitlab-runner gitlab/gitlab-runner register
# 1.按照提示输入你的gitlab地址和token：gitlab项目设置 => CI/CD => Runner
# 2.按照提示输入描述
# 3.按照提示打标签
# 4.按照提示选择执行者:我这里是shell
```

配置 `.gitlab-ci.yml`
```SHELL
# 定义 stages
stages:
  - update
  - test
  - build
# 创建node_modules缓存，不用每次都重新安装依赖了
cache:
  key: ${CI_BUILD_REF_NAME}
  paths:
    - node_modules/

# 更新代码并安装依赖
update:
  stage: update
  script:
    - npm install
  tags:
    - update

# 执行单元测试
test:
  stage: test
  script:
    - npm run test
  tags:
    - unitTest

# 打包
build:
  stage: build
  script:
    - npm run build
  tags:
    - build
```


#### dist目录下index.html打开空白页的解决方案
```SHELL
# 可以在log看到如下提示
# Tip: built files are meant to be served over an HTTP server.
# Opening index.html over file:// won't work.

# 全局安装http-server
npm install -g http-server
# 进入dist目录,启用
cd dist && hs
```

#### 参考
1. [图文详解k8s自动化持续集成之GitLab CI/CD](https://www.cnblogs.com/sunsky303/p/10775126.html '图文详解k8s自动化持续集成之GitLab')
1. [Gitlab CI持续集成 - GitLab Runner 安装与注册](https://www.jianshu.com/p/fab407ddfed0 'Gitlab CI持续集成 - GitLab Runner 安装与注册')
1. [gitlab runner](https://docs.gitlab.com/runner/install/index.html 'gitlab runner')
1. [Install GitLab Runner on FreeBSD](https://docs.gitlab.com/runner/install/freebsd.html 'Install GitLab Runner on FreeBSD')
1. [基于Gitlab CI搭建持续集成环境](https://www.jianshu.com/p/705428ca1410 '基于Gitlab CI搭建持续集成环境')
1. [用 GitLab CI 进行持续集成](https://scarletsky.github.io/2016/07/29/use-gitlab-ci-for-continuous-integration/ '用 GitLab CI 进行持续集成')
1. [前端项目基于GitLab-CI的持续集成/持续部署（CI/CD）](https://juejin.im/post/5c015f4ae51d453244120d86 '前端项目基于GitLab-CI的持续集成/持续部署（CI/CD）')
1. [前端项目gitlab CI（持续集成）实践](https://github.com/WarpPrism/Blog/issues/38 '前端项目gitlab CI（持续集成）实践')
1. [Gitlab自动部署之二：安装GITLAB-RUNNER](https://juejin.im/post/5cb92a3ae51d456e5f76c485 'Gitlab自动部署之二：安装GITLAB-RUNNER')
1. [gitlab-runner注册](https://docs.gitlab.com/runner/register/index.html#docker 'gitlab-runner注册')
1. [如何通过文件打开Vue中的index.html](https://www.sail.name/2017/06/10/how-to-open-index-html-of-vue-over-file/ '如何通过文件打开Vue中的index.html')


