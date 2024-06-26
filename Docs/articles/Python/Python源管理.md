# Python源管理

## 前言
`python` 默认的的源的速度真是惨不忍睹，谁用谁知道
于是收集了下面常用的速度比较稳定的源,以便于自用和更新

## 源整理
以下地址加 `https` 也是可以的

源名称|地址|
--|--|
阿里|http://mirrors.aliyun.com/pypi/simple/|
清华|http://pypi.tuna.tsinghua.edu.cn/simple/|
豆瓣|http://pypi.douban.com/|
华中理工大学|http://pypi.hustunique.com/|
山东理工大学|http://pypi.sdutlinux.org/|
中国科学技术大学|http://pypi.mirrors.ustc.edu.cn/|

## 常用命令
```shell
# 查找软件
pip search Package

# 安装软件
pip install Package

# 使用临时地址安装软件
pip install -i src Package

# 更新软件
pip install -U Package

# 卸载软件
pip uninstall Package

# 列出已安装的软件
pip list
```

## 下载安装pip
```shell
# 下载
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py

# 安装
python3 get-pip.py
```

## 修改源
::: info linux
```shell
# 没有则新建pip.conf
mkdir ~/.pip && cd ~/.pip && touch pip.conf

# 编辑
gedit pip.conf

# 填入下面配置
[global]
index-url = https://mirrors.aliyun.com/pypi/simple/
trusted-host = mirrors.aliyun.com
```
:::

::: info windows
```shell
# 使用 `pip -v config list` 查看配置文件目录
# 类似如下结果
For variant 'global', will try loading 'C:\ProgramData\pip\pip.ini'
For variant 'user', will try loading 'C:\Users\Administrator\pip\pip.ini'
For variant 'user', will try loading 'C:\Users\Administrator\AppData\Roaming\pip\pip.ini'
For variant 'site', will try loading 'C:\ProgramData\anaconda3\pip.ini'

# 然后在Administrator下新建目路pip
# 新建文件pip.ini
# 编辑文件,填入,保存
[global]
index-url = https://mirrors.aliyun.com/pypi/simple/
trusted-host = mirrors.aliyun.com
```
:::

## pip3错误修复
```shell
# 错误提示如下：
Traceback (most recent call last):
  File "/usr/bin/pip3", line 9, in <module>
    from pip import main
ImportError: cannot import name 'main'

# 进入/usr/bin/pip3，调整为

from pip import __main__
if __name__ == '__main__':
    sys.exit(__main__._main())
```


## 参考
1. [python 国内镜像加速](https://www.jianshu.com/p/c7dbe4820017)
1. [pip常用命令](https://www.cnblogs.com/keithtt/p/9393036.html)
1. [pip　install](https://pip.pypa.io/en/stable/installing/)

