# 安装Ubuntu22.04后要做的事

## 介绍
记录免费开源的 `deb` 或者 `AppImage` 软件

1. 更新源

1. 更新系统

    ```shell
    sudo apt-get update
    ```

1. 更新软件

    ```shell
    # 查看可更新的软件
    apt list --upgradable
    # 更新操作
    sudo apt upgrade
    ```

1. 清理旧组件

    ```shell
    sudo apt autoremove
    ```

1. 删除 `libreoffice`

    ```shell
    sudo apt-get remove libreoffice-common 
    ```

1. 删除 `Amazon` 的链接

    ```shell
    sudo apt-get remove unity-webapps-common
    ```

1. 删除一些少用的自带软件(需要在装)

    ```shell
    sudo apt-get remove thunderbird totem rhythmbox empathy brasero simple-scan gnome-mahjongg aisleriot gnome-mines cheese transmission-common gnome-orca gnome-sudoku
    ```

    ```shell
    sudo apt-get remove onboard deja-dup
    ```

    这样系统就基本干净了

1. 安葬 `AppImage` 依赖

    ```shell
    sudo apt install libfuse2
    ```

    然后将软件权限改为可执行

1. 安装 `GDebi`
    从而可以方便安装 `.deb` 文件

    ```shell
    sudo apt-get update
    sudo apt-get install gdebi
    ```

1. 安装 `Vim`

    ```shell
    sudo apt-get install vim
    ```

1. 安装 `chrome`

    [chrome下载](https://www.google.cn/intl/zh-CN/chrome/)

    然后使用`GDebi`安装`deb`包

1. 安装 `WPS`
    ```shell
    sudo apt-get install wps-office
    ```

1. 安装 `git` 和 `node.js` 和 `npm`

    ::: warning 警告
    ~~sudo apt-get install git nodejs npm~~-

    安装 `nvm`, 控制 `node` 和 `npm` 版本
    
    使用 `npm` 安装 `nrm` 控制 `npm` 源
    :::

1. 安装 `ifconfig`
    ```shell
    sudo apt install net-tools
    ```

1. 安装搜狗输入法

    [下载地址](https://pinyin.sogou.com/linux/?r=pinyin)
    
    然后使用 `GDebi` 安装 `deb` 包

1. 安装 `listen1`

    [下载地址](https://github.com/listen1/listen1_desktop/releases)

1. `Snap` 商店

    [地址](https://snapcraft.io/store)


