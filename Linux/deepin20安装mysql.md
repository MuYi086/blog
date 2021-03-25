## deepin20安装mysql

#### 背景
重装系统, 选择了 `deepin20` ,可是官方源里并没有 `mysql`

#### 安装
1. 方法一: 换源

  ```SHELL
  # 在我的系统识别为不安全的源,仍旧无法安装
  # 其他网友怎么成功的，尚不清楚
  sudo gedit /etc/apt/sources.list
  # 删除内容，并添加一下内容
  deb [by-hash=force] https://mirrors.aliyun.com/deepin/ panda main contrib non-free
  # 执行
  sudo apt-get update
  sudo apt-get upgrade
  # 安装mysql
  sudo apt-get install mysql-server mysql-client
  ```

1. 方法二:一键安装 `lnmp` 或 `lamp`

```SHELL
# 这里仅演示安装lnmp (国产有小皮和BT等)
# 按照提示选择即可,某些系统仅支持安装php7以上版本
sudo wget -O install.sh https://notdocker.xp.cn/install.sh && sudo bash install.sh
```


#### 参考
1. [phpstudy linux面板安装](https://www.xp.cn/linux.html#install-show 'phpstudy linux面板安装')
1. [deepin v20安装mysql](https://blog.csdn.net/weixin_45079974/article/details/109033353 'deepin v20安装mysql')