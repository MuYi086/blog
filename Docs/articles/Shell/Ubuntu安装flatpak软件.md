# Ubuntu安装flatpak软件

## 安装 flatpak
1. `Ubuntu 20.04` 及以后版本安装 `flatpak`

    ```shell
    sudo apt install flatpak
    ```

    ![flathub](/Images/Shell/Ubuntu安装flatpak软件/flathub.jpg 'flathub')

1. `Ubuntu 18.04` 及以前版本需要使用 `PPA`

    ```shell
    sudo add-apt-repository ppa:flatpak/stable
    sudo apt update
    sudo apt install flatpak
    ```

## 添加 flathub 仓库
在 `Ubuntu` 中安装好 `Flatpak` 后，如果直接尝试安装软件包，由于未添加 `Flatpak` 软件源，将会提示 `No remote refs found similar to ‘flathub’` 错误

1. 添加 `Flathub` 中央仓库，但是速度很慢，建议使用下面的上海交大镜像源

    ```shell
    sudo flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
    ```

1. 使用上海交大镜像源

    ```shell
    wget https://mirror.sjtu.edu.cn/flathub/flathub.gpg
    sudo flatpak remote-modify --gpg-import=flathub.gpg flathub
    ```

## 使用 flatpak 安装软件

```shell
# 举例:安装本地的flatpak包
flatpak install ./Geph-x86_64.flatpak

# 安装远程仓库的软件包
flatpak install flathub com.github.tchx84.Flatseal
```
安装过程中会逐步安装依赖

![flatpak_install](/Images/Shell/Ubuntu安装flatpak软件/flatpak_install.jpg 'flatpak_install')

重启电脑，软件列表里就会出现刚刚安装的软件

## 其他

```shell
# 搜索软件包
flatpak search <package_name>

# 列出已安装的 Flatpak 软件包
flatpak list

# 卸载Flatpak软件包
flatpak uninstall <package_name>

# 清楚不再需要的软件包和运行时
flatpak uninstall --unused

# 终端运行flatpak软件
flatpak run <package_name>
```

## 参考
1. [如何在 Ubuntu 中安装和使用 Flatpak](https://www.sysgeek.cn/ubuntu-flatpak/)
1. [flathub](https://flathub.org/)
1. [上海交大flathub镜像](https://mirror.sjtu.edu.cn/docs/flathub)