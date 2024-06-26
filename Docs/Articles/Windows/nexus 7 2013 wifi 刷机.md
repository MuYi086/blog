---
tags:
  - Windows
---
# nexus 7 2013 wifi 刷机

## 背景
上周我哥拿了个 `nexus 7` 安卓平板，说现在的`miui4.4` 太卡了，让我帮忙刷机。好呗，继续折腾呗。几年前，换了苹果后，好多年不接触刷机了。过程还是有些曲折的,因为以前熟悉的刷机工具和网站相继倒闭了（刷机大师，刷机精灵，魔趣等）,奇兔刷机现在收费了，只好寻找新的免费工具。加上我目前家用主力机是 `deepin 23` ，`linux` 系统，映像中也不能提供软件刷机（后来`google` 网站下载 `platform-tools` 后才知道有 `bash` 的可执行文件，支持 `linux` 的）。只好翻箱倒柜找到老婆的老式电脑，装上`win10` 继续折腾。

## 开始
打开 `usb` 调试后连上电脑，发现显示设备名是`nexus 7` ,但是搜索互联网，发现 `nexus 7` 分俩个版本的,2012和2013，那么我手上的板砖到底属于哪一款呢？搜索多个帖子后，通过比对平板背面的 `logo` ，终于确定机型为 `2013 wifi flo` 型。

## 准备
1. 下载 [platform-tools](https://dl.google.com/android/repository/platform-tools-latest-windows.zip)
1. 下载 [twrp](https://dl.twrp.me/flo/)
1. 下载 [官方rom](https://developers.google.com/android/nexus/images)
1. 下载 [CyanogenMod 14.1](https://cyanogenmodroms.com/flo/)

## 刷机
```shell
# 1. 长按音量-和开机键进入fastboot
# 2. 解压platform-tools,将twrp压缩包放到解压后的platform-tools目录
# 3. 打开cmd命令行,进入到platform-tools对应目录
cd /platform-tools
# 4. 连接usb，查找设备是否连接
adb devices
# 5. 刷入recovery
fastboot flash recovery twrp.xxx.img
# 6. 重启到装好的recovery，在advance里开启sideload功能，pc使用命令安装rom
adb sideload xxx.zip
# 7. 也可以直接在recovery使用install卡刷
# 8. 最后，刷机后记得双清wipe，再启动系统
```


## Nexus Root Toolkit
是 `nexus` 的一整套工具集,支持解锁，备份，`root` 等功能,但是我在实际使用中发现只针对安卓版本低于 `6.0` 以下可用，我刷了 `cm 14.1` 之后系统在 `7.0` 以上了，无法正常使用。

## superSu
在 `recovery` 中刷入 `superSu` 后，重启 `root` 权限并未生效,有时间再看

## 参考
1. [List of Best Custom ROM for Google Nexus 7 2013](https://www.getdroidtips.com/custom-rom-nexus-7-2013/#google_vignette)
1. [Nexus7 II 刷入 miui4.4](https://github.com/xx-sec/xx-sec/issues/21)
1. [ADB Sideload是什么以及我如何使用](https://www.kancloud.cn/hancf/twrp_cn/2160303)
1. [NEXUS7二代如何刷机?](https://www.zhihu.com/question/22821607)
1. [NEXUS 7刷回官方4.3系统的方法](https://kzpu.com/archives/3157.html)
1. [Cyanogenmod ROM Google Nexus 7 Wi-Fi 2013 flo](https://cyanogenmodroms.com/flo/)
