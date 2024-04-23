# virtualbox虚拟机和宿主机互相复制粘贴

## 介绍
最近在整理硬盘中的图片和视频，需要统一转格式后放到云盘，分别利用 `windows` 和 `linux` 不同的软件格式转换，因此需要俩边互传文件，记录下在 `virtualbox` 下的操作方法。

## 步骤
打开 `virtualbox` => 设置
1. 左侧常规 => 高级 => 设为双向共享粘贴
![设为双向共享粘贴](/Images/Linux/virtualbox虚拟机和宿主机互相复制粘贴/step_3.png "设为双向共享粘贴")

1. 左侧存储 => 控制器: `SATA` => 勾选 `使用主机输入输出(I/0)缓存`
![使用主机输入输出](/Images/Linux/virtualbox虚拟机和宿主机互相复制粘贴/step_4.png "使用主机输入输出")

1. 左侧存储 => 控制器: `SATA` => 选择对应磁盘 => 勾选 `固态驱动器`
![勾选'固态驱动器'](/Images/Linux/virtualbox虚拟机和宿主机互相复制粘贴/step_5.png "勾选'固态驱动器'")

1. 左侧存储 => 控制器: `SATA` => 选择对应磁盘 => 勾选 `自动挂载`
![自动挂载](/Images/Linux/virtualbox虚拟机和宿主机互相复制粘贴/step_6.png "自动挂载")
1. 启动虚拟机 => 点击菜单 => 设备 => 安装增强功能 => 我的电脑找到光驱 => 进入执行 `exe` 安装 => 重启虚拟机
![安装增强功能](/Images/Linux/virtualbox虚拟机和宿主机互相复制粘贴/step_1.png "安装增强功能")
![进入执行](/Images/Linux/virtualbox虚拟机和宿主机互相复制粘贴/step_2.png "进入执行")

1. 我的电脑 => 找到对应磁盘或文件夹 => 操作复制粘贴
![找到对应磁盘或文件夹](/Images/Linux/virtualbox虚拟机和宿主机互相复制粘贴/step_7.png "找到对应磁盘或文件夹")




## 参考
1. [Virtualbox主机和虚拟机之间文件夹共享及双向拷贝](https://www.zhangshengrong.com/p/pDXBO3z1Pd/)
