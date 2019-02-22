### windows安装.msi文件报错2503和2502
##### 原因分析
安装TortoiseSVN.msi或者msi之类的程序过程中报错2503或者2502,主要使用户的权限不够大,在右键安装时无法像exe执行文件选择"以管理员身份运行"

![2502](/images/windows/chapter_03/2502.jpg)
![2503](/images/windows/chapter_03/2503.jpg)

##### 网上解决办法
###### 一、修改组策略:对应用程序始终以提升的权限进行安装(失败,依然报错)
1. 使用`win+R`命令打开运行,输入gpedit.msc进入本机计算机策略
1. `计算机配置->管理模板->windows组件->windows installer` 然后选择右侧的`始终以提升的权限进行安装`
1. 右键编辑,选中`以启用`,确定
![组策略编辑](/images/windows/chapter_03/gpedit.png)

###### 二、使用命令行安装:进入管理员命令行,执行安装(安装成功,单安装目录下的可执行文件无法被执行)
1. 以管理员身份运行cmd
1. 输入安装命令和安装文件所在目录
![命令行安装](/images/windows/chapter_03/terminal.png)

###### 三、修改注册表:给msi安装包右键菜单里添加`以管理员身份运行`选项(成功)
1. 通过`win+R`打开`运行`,输入`regedit`,打开注册表编辑器
1. 在左侧列表中定位至`HKEY_CLASSES_ROOT\Msi.Package\shell`
1. 右侧点击`shell`,选择`新建-项`,然后重命名为`runas`,选中`runas`项，双击右侧窗口`默认`字符串,把数值数据修改为`以管理员身份运行`
 ![注册表编辑器](/images/windows/chapter_03/regedit.png)

1. 在`runas`项下载新建一个`command`项,同样把右侧`默认`字符串数值数据修改为`msiexec /i"%1"`
1. 结论:重新右键点击msi文件,选择`以管理员身份运行`