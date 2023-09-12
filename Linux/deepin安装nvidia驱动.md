## deepin安装nvidia驱动

#### 下载准确驱动
1. 确定电脑显卡型号
```SHELL
# 查看电脑显卡型号
sudo lshw -numeric -C display
```
![查看电脑显卡型号](/images/linux/deepin安装nvidia驱动/step_1.png '查看电脑显卡型号')

2. 进入`NVIDIA`官网 [下载驱动](https://www.nvidia.cn/Download/index.aspx?lang=cn '下载驱动')
![搜索驱动](/images/linux/deepin安装nvidia驱动/step_2.png '搜索驱动')
![下载驱动](/images/linux/deepin安装nvidia驱动/step_3.png '下载驱动')

#### 禁用 `nouveau` 驱动
1.安装深度的`显卡驱动管理器`,切换到因特尔默认驱动，然后重启
```SHELL
sudo apt-get install deepin-graphics-driver-manager
```
![显卡驱动管理](/images/linux/deepin安装nvidia驱动/step_4.png '显卡驱动管理')

2. 协助`NVIDIA`开源驱动和闭源驱动
```SHELL
sudo apt autoremove nvidia-*
```

3. 禁止`nouveau` 驱动
`nouveau` 是通过逆向 `Nvidia` 的 `Linux` 驱动创造的一个开源第三方 `Nvidia` 显卡驱动程序，因此其效果差，性能低。在手动安装 `NVIDIA` 闭源驱动时需要禁用 `nouveau` 驱动。
```SHELL
# 许多帖子的说法是blacklist.conf，但我deepin是最新20.6，找到的是blacklist-bcm43.conf
sudo gedit /etc/modprobe.d/blacklist-bcm43.conf

# 在打开的文件中添加一下，并保存关闭
blacklist nouveau
blacklist lbm-nouveau
options nouveau modeset=0
alias nouveau off
alias lbm-nouveau off

# 终端执行
sudo update-initramfs -u

# 重启
reboot

# 查看nouveau有没有运行,没输出代表禁用生效
lsmod | grep nouveau
```

#### 安装 `nvidia` 驱动

1. 关闭图形界面
安装 `NVIDIA` 闭源驱动,需要停止当前的图形界面
```SHELL
# 使用CTRL+ALT+F2进入超级终端,登录账号
# 关闭图形界面
sudo service lightdm stop
```

2. 安装 `nvidia` 驱动
```SHELL
# 增加可执行权限(替换成你下载的文件)
sudo chmod +x NVIDIA***.run
# 安装
# -no-opengl-files : 只安装驱动文件，不安装OpenGL文件
# -no-nouveau-check ：安装驱动时不检查Nouveau
sudo bash NVDIA***.run -no-opengl-files -no-nouveau-check
# 第一步和第二步都选yes即可
# 安装完毕后重启
reboot
```

#### 检查驱动是否成功安装
```SHELL
# 使用nvidia-setting命令启动驱动管理程序
nvidia-settings
# 使用nvidia-smi命令打印系统安装的nvidia驱动信息
nvidia-smi
```

#### 其他命令
```SHELL
# 查看集成显卡
lspci | grep VGA
# 查看NVIDIA显卡
lspci | grep NVIDIA
# 查看nouveau是否运行
lsmod | grep nouveau
# 集显和独显切换
# 安装dde-dock-switch_graphics_card管理
# https://gitee.com/deepin-opensource/switch-graphics-card/releases
# 下载xx.deb安装后，安装默认位置为 /opt/apps/dde-dock-graphics-plugin
# cd /opt/apps/dde-dock-graphics-plugin
# sudo bash ./files/bin/NVIDIA.sh
# 重启,NVIDIA驱动运行正常,且多屏扩展也ok了
```

#### 注意
因为是第三方插件,部分机型重启后有可能导致 `dde` 崩溃，任务栏进入安全模式。可以下载星火商店，找到`dde-dock` ，卸载后重启即可

#### 参考
1. [Deepin20.1安装NVIDIA最新显卡驱动](https://bbs.deepin.org/post/213544  'Deepin20.1安装NVIDIA最新显卡驱动')
1. [Linux(Deepin)如何安装NVIDIA显卡驱动（deepin-Linux）](https://www.likecs.com/show-187504.html 'Linux(Deepin)如何安装NVIDIA显卡驱动（deepin-Linux）')
