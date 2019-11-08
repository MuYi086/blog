## deepin使用tensorflow入门机器学习

#### 前言
最近机器学习太火热了，本着不做一名outMan的原则,我决定去学一下机器学习中最热门的tensorflow.下文主要记录和阐述在尝试过程中遇到的坑和解决方法.

#### deepin搭建环境
1. 首先,tensorflow需要python环境,本机使用deepin系统,python3默认3.5.3 然而在使用pip安装时你会发现其中matplotlib需要python3.6以上的环境才能安装.
1. 没办法,只能撸起袖子加油干.网上搜索一圈deepin升级python3新版本,大多数说法都是编译
    ```SHELL
    // 第一步:https://www.python.org/downloads/source/  下载新python源码
    // 第二步：文件解压并进入目录 * 为对应版本
    tar -xzf python-*.tgz
    cd python-*
    // 第三步:解压后进行配置
    ./configure --prefix=/usr/python --enable-shared CFLAGS=-fPIC
    // 第四步:安装
    make && make install
    // 然后你会发现一系列error，最终安装失败
    // 终端python3 --version 依然是3.5.3
    ```
1. 此路不通,只得另寻它法,于是在深度的论坛，见到了网友们提到了anaconda,感觉有了方向,于是乎开始了第二次尝试
    ```SHELL
    // 第一步:进入https://www.anaconda.com/distribution/ 下载最新的软件
    // 第二步:终端执行 (该填yes的就yes)
    bash ./anaconda.sh
    // 第三步:创建python环境
    conda create --name python37 python=3.7.0
    // 此时会报错未找到conda命令
    // 第四步:添加对应的环境变量
    echo 'export PATH="home/*/anaconda3/bin:$PATH"' >> ~/.bashrc
    source ~/bashrc
    // 第五步:查看当前系统python版本
    python3 --version
    ```

1. 此时python3已经升级到3.6以上了,可以正常安装tensorflow了
    ```SHELL
    pip install tensorflow
    ```
#### tensorflow实例使用



#### 参考
1. [在Deepin操作系统中安装Python-3.7.1.tgz的方法](https://ywnz.com/linuxjc/3575.html '在Deepin操作系统中安装Python-3.7.1.tgz的方法')
1. [python官网](https://www.python.org/downloads/source/ 'python官网')
1. [deepin 升级python--深度论坛](https://bbs.deepin.org/forum.php?mod=viewthread&tid=144792 'deepin 升级python--深度论坛')
1. [anaconda下载](https://www.anaconda.com/distribution/ 'anaconda下载')
1. [用一个小例子教你入门机器学习框架TensorFlow](https://juejin.im/post/5b11117f6fb9a01e59182980 '用一个小例子教你入门机器学习框架TensorFlow')