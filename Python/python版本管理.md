## python版本管理

#### 前言
由于开发需要，某些 `package` 需要 `python3.6` 以上,但是本机使用的 `deepin` ，当前系统内置了 `python 2.7` 和 `python 3.5` ,且非常不好动弹，容易导致系统出问题。于是想到用版本管理 `python` ，本文尝试了 `pyenv` 和 `miniconda`

#### pyenv安装和使用
```SHELL
curl -L https://raw.githubusercontent.com/yyuu/pyenv-installer/master/bin/pyenv-installer | bash 

```

###### 设置环境变量
```SHELL
# 打开配置文件
sudo gedit /etc/profile
# 在底部加上:其中user是你的用户目录
PYENV=/home/user/.pyenv
PATH=${PATH}:${PYENV}/bin
# 如果path没有export记得export一下:我这里之前已经有很多变量了
export JAVA_HOME JRE_HOME CLASS_PATH PATH MAVEN_HOME PYENV
# 让配置生效
source /etc/profile
pyenv --version
```

###### 常用命令
```SHELL
# 默认pyenv安装速度很慢,建议下载源码放在./pyenv/cache下（注意是tar.xz的，tgz的不识别）
# 安装依赖：否则会报错装不上
sudo apt-get install libc6-dev gcc
sudo apt-get install -y make build-essential libssl-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm
# 安装
pyenv install 3.8.0
# 设定当前目录版本
pyenv local 3.8.0
# 设定全局版本切换
pyenv global 3.8.0
# 重建环境变量
pyenv rehash
# 其他命令参考 -h
```

#### miniconda安装和使用
[下载地址](https://mirrors.tuna.tsinghua.edu.cn/anaconda/miniconda/ '下载地址')
```SHELL
# 下载latest版本
wget -c https://mirrors.tuna.tsinghua.edu.cn/anaconda/miniconda/Miniconda3-latest-Linux-x86_64.sh
# 安装,按提示yes即可
bash Miniconda3-latest-Linux-x86_64.sh
```

#### 总结
1. `miniconda` 更友好, `pyenv` 命令变更系统 `python` 版本存在不成功的情况
1. `miniconda` 继承了 `anaconda` 的特性,插件很丰富

#### 参考
1. [pyenv](https://github.com/pyenv/pyenv 'pyenv')
1. [安装pyenv](https://www.cnblogs.com/ttkl/p/10778857.html '安装pyenv')
1. [linux安装或卸载miniconda](https://www.jianshu.com/p/fab0068a32b4 'linux安装或卸载miniconda')