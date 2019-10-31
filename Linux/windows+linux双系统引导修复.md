## windows+linux双系统引导修复

#### windows引导修复
这个比较好做,我一般是用大白菜，将U盘制作成启动盘.然后进入`PE`，使用引导修复工具：这个会自动查找并修复`windows`的引导

#### linux引导修复
* 一.能进入`linux`系统:
    1. `debian`系可以直接更新`grub2`
        ```
        sudo update-grub2
        ```
    1. 重启系统
* 二.不能进入`linux`系统:
    1. 准备一个`linux`安装盘,进入试用模式
    1. 打开终端,切换至`root`身份
        ```
        sudo -i
        ```
    1. 找出当前`linux`系统所在设备,如下：我的linux设备在`/dev/sda1`
        ```
        fdisk -l
        ```

        ![找出linux设备](/images/linux/windows+linux双系统引导修复/terminal_01.gif "找出linux设备")

    1. 将设备挂载至`/mnt`
        ```
        mount /dev/sda1 /mnt
        ```
    1. 安装并更新`grub2`
        ```
        sudo grub-install --root-directory=/mnt/dev/sda
        sudo update-grub2
        ```
    1. 最后重启电脑
        ```
        reboot
        ```

#### 参考
1. [grub引导项修复详解](https://blog.csdn.net/gatieme/article/details/59127020)
1. [windows+Ubuntu双系统引导修复](https://blog.csdn.net/qq_40196164/article/details/84726694)