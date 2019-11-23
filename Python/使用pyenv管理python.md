## 使用pyenv管理python

#### 前言
由于开发需要，某些 `package` 需要 `python3.6` 以上,但是本机使用的 `deepin` ，当前系统内置了 `python 2.7` 和 `python 3.5` ,且非常不好动弹，容易导致系统出问题。于是想到用 `pyenv` 虚拟环境来管理 `python`

#### 安装
```SHELL
curl -L https://raw.githubusercontent.com/yyuu/pyenv-installer/master/bin/pyenv-installer | bash 

```

#### 设置环境变量
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

#### 常用命令
```SHELL
# 默认pyenv安装速度很慢,建议下载源码放在./pyenv/cache下（注意是tar.xz的，tgz的不识别）
# 安装依赖：否则会报错装不上
sudo apt-get install libc6-dev gcc
sudo apt-get install -y make build-essential libssl-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm
# 安装
pyenv install 3.8.0
# 设定版本
pyenv global 3.8.0
# 其他命令参考 -h
```

#### 参考
1. [pyenv](https://github.com/pyenv/pyenv 'pyenv')
1. [安装pyenv](https://www.cnblogs.com/ttkl/p/10778857.html '安装pyenv')