---
tags:
  - Shell
  - windows
  - linux
---
# windows+linux双系统引导修复

## windows
这个比较好做,我一般是用大白菜，将U盘制作成启动盘.然后进入 `PE` ，使用引导修复工具：这个会自动查找并修复 `windows` 的引导

## linux

::: info 能进入linux系统
`debian` 系可以直接更新 `grub2`     
```shell
sudo update-grub2
```
重启系统
:::

::: info 不能进入linux系统
```shell
# 准备一个linux安装盘,进入试用模式
# 打开终端,切换至root身份
sudo -i

# 找出当前linux系统所在设备,如下：我的linux设备在/dev/sda1
fdisk -l

```

![找出linux设备](/Images/Shell/windows+linux双系统引导修复/terminal_01.gif "找出linux设备")

```shell
# 将设备挂载至 /mnt
mount /dev/sda1 /mnt

# 安装并更新 grub2
sudo grub-install --root-directory=/mnt/dev/sda
sudo update-grub2

# 最后重启电脑
reboot
```
:::

## 参考
1. [grub引导项修复详解](https://blog.csdn.net/gatieme/article/details/59127020)
1. [windows+Ubuntu双系统引导修复](https://blog.csdn.net/qq_40196164/article/details/84726694)