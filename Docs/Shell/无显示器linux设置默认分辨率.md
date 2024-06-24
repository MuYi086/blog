# 无显示器linux设置默认分辨率

## 介绍
使用 `teamview` 远程连接无显示器的主机时，默认分辨率会被设置为 `640x480`，显示的内容有限，操作非常不便。

## xrandr命令
```shell
# 查看当前分辨率
xrandr
# 设置分辨率
xrandr -s 1920x1080
xrandr --output VGA-1 --mode 1920x1080
```


## 参考
1. [Ubuntu虚拟显示器且远程控制（无显示器接入）](https://www.xiaoledeng.com/2020/09/19/ubuntu-screen-remote-control/)
1. [linux 下更改分辨率](https://blog.csdn.net/SueMagic/article/details/89399959)
1. [ubuntu设置虚拟显示器且远程连接](https://blog.csdn.net/weekdawn/article/details/126342081)