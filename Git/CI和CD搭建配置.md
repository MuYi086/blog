## CI/CD搭建配置

#### 前言
主要讲述 `gitlab-ci` 和 `jekins` 的使用体验
系统环境: `deepin 15.11 x64`

#### gitlab-ci
[安装gitlab](../Linux/docker安装和使用gitlab.md '安装gitlab')

安装 `gitlab-runner`
1. 方法一:添加gitlab官方库
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

1. 方法二:通过 `deb` 安装(强烈推荐)
    并非我不想使用第一种,而是提示:无法定位到软件包 `gitlab-runner`
    当前系统环境 `deepin 15.11` 
    只能手动下载了：[地址](https://gitlab-runner-downloads.s3.amazonaws.com/latest/index.html '地址')
    ```SHELL
    # For Debian/Ubuntu/Mint
    dpkg -i gitlab-runner_<arch>.deb

    # For RHEL/CentOS/Fedora
    rpm -i gitlab-runner_<arch>.rpm
    ```

然后注册 `gitlab-runner`
```SHELL
sudo gitlab-runner register
# 1.按照提示输入你的gitlab地址和token：gitlab项目设置 => CI/CD => Runner
# 2.按照提示输入描述
# 3.按照提示打标签
# 4.按照提示选择执行者:我这里是shell
```

配置gitlab-ci.yml
```SHELL
# 定义 stages
stages:
  - update
  - test
  - build

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

# 发布
deploy:
  stage: deploy
  script:
    - npm run dev
  tags:
    - deploy
```

#### 参考
1. [图文详解k8s自动化持续集成之GitLab CI/CD](https://www.cnblogs.com/sunsky303/p/10775126.html '图文详解k8s自动化持续集成之GitLab')
1. [Gitlab CI持续集成 - GitLab Runner 安装与注册](https://www.jianshu.com/p/fab407ddfed0 'Gitlab CI持续集成 - GitLab Runner 安装与注册')
1. [gitlab runner](https://docs.gitlab.com/runner/install/index.html 'gitlab runner')
1. [gitlab runner register](https://docs.gitlab.com/runner/register/index.html#gnulinux 'gitlab runner register')
1. [基于Gitlab CI搭建持续集成环境](https://www.jianshu.com/p/705428ca1410 '基于Gitlab CI搭建持续集成环境')
1. [用 GitLab CI 进行持续集成](https://scarletsky.github.io/2016/07/29/use-gitlab-ci-for-continuous-integration/ '用 GitLab CI 进行持续集成')
1. [前端项目基于GitLab-CI的持续集成/持续部署（CI/CD）](https://juejin.im/post/5c015f4ae51d453244120d86 '前端项目基于GitLab-CI的持续集成/持续部署（CI/CD）')
1. [前端项目gitlab CI（持续集成）实践](https://github.com/WarpPrism/Blog/issues/38 '前端项目gitlab CI（持续集成）实践')


