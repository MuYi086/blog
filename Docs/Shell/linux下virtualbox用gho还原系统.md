# linux下virtualbox用gho还原系统

## 介绍
`windows` 下用 `virtualbox` 安装 `iso` 和 `u盘` 启动的博文已经很多了，这里不赘述。本文主要讲述比较生僻的在 `linux` 上利用 `gho` 装系统。其实开源的 `virtualbox` 已经足够满足我需求了。至于为啥不用 `VM` ，只有一个字形容：穷。

## 过程
首先，理清逻辑。我们无法直接在 `virtualbox` 中安装 `gho` 文件。所以这里我们借用 `pe`

1. 使用 `virtualbox` 创建一个新的虚拟电脑(建议使用 `vmdk` 格式,方便以后迁移)

1. 挂载一个 `pe` 的 `iso` 镜像.
    * 选择第二栏 iso 模式并导出(我就不截图了,下图来自老毛桃官网)
        ![iso模式](/Images/Shell/linux下virtualbox用gho还原系统/laomaotao_01.png 'iso模式')
    
    * 最好将iso镜像用户根目录.我这里放到/home/MuYi086下

1. 在 `virtualbox` 中添加当前用户组
    ```shell
    # MuYi086是我当前用户名
    sudo usermod -G vboxusers -a MuYi086
    ```

1. 挂载 `gho` 文件所在磁盘

    ```shell
    # 查看gho所在磁盘:这里我的磁盘在/dev/sdb1
    df
    # 让当前用户获得磁盘读写权限
    sudo chmod o+rw /dev/sdb1
    # 为磁盘建立一个虚拟硬盘镜像
    # -filename 是要输出的位置
    # -rawdisk 是磁盘路径
    # 以下是6.1及之前创建方式
    VBoxManage internalcommands createrawvmdk -filename /home/MuYi086/vboxee.vmdk -rawdisk /dev/sdb1

    # 以下是7.0版本创建方式,依旧报错,内外网均为找到答案
    VBoxManage createmedium disk --filename=/home/MuYi086/demo1.vmdk --sizebyte=2000398934016 --diffparent=/dev/sdb1 --format=VMDK --variant=Standard

    # 方法一：7.0改用扩展包支持usb
    # 下载Oracle VM VirtualBox Extension Pack
    # sudo groupadd usbfs
    # sudo adduser MuYi086 usbfs
    # sudo adduser MuYi086 vboxusers
    # reboot
    # 右下角U盘挂载对应盘符

    # 方法二：
    # 光盘 => 选择或创建虚拟盘 => 创建 => 选择文件夹 => 右键注册 => 创建 => CD光驱
    ```

1. 在 `virtualbox` 存储中添加磁盘
    ![添加磁盘](/Images/Shell/linux下virtualbox用gho还原系统/laomaotao_02.png '添加磁盘')

1. 启动中 `Win + F12` 选择 `CD` ，也就是老毛桃启动,进入PE之后就和 `windows` 一样，给系统分区，然后选择 `gho` 安装了.

## 最后
进入系统后，最好安装一下 [增强驱动](http://download.virtualbox.org/virtualbox/) ，效果会好很多

```shell
# 顶部菜单 => 设备 => 安装增强驱动
```

## 参考
1. [老毛桃](https://www.laomaotao.net/)
1. [Ubuntu与Windows下使得Virtualbox从U盘启动系统](https://blog.csdn.net/SimileciWH/article/details/86750966)
1. [VBoxManage createmedium](https://docs.oracle.com/en/virtualization/virtualbox/6.0/user/vboxmanage-createmedium.html)
1. [Oracle VM VirtualBox Extension Pack](https://www.oracle.com/virtualization/technologies/vm/downloads/virtualbox-downloads.html)