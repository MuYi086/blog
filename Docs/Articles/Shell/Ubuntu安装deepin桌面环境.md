---
tags:
  - Shell
---
# Ubuntu安装deepin桌面环境

## 介绍
有一说一，`Ubuntu22.04` 默认的桌面环境是真的很普通，对于颜控的我无法忍受，所以就尝试安装 `deepin` 桌面环境.

## 安装
1. 添加Ubuntu DDE Remix 官方的 PPA

    ```shell
    sudo add-apt-repository ppa:ubuntudde-dev/stable
    ```

1. 安装深度桌面环境

    ```shell
    sudo apt install ubuntudde-dde
    ```

    ::: warning 注意
    当询问选择 "显示管理器" 时, 如果需要深度桌面主题的锁屏， 选择 `lightdm`， 否则选择 `gdm3`
    :::

1. 重启生效

    ```shell
    # 方法一:
    sudo systemctl reboot

    # 方法二:
    reboot
    ```

## 卸载
1. 将显示管理器设置为 `gdm3`

    ```shell
    # 显示配置
    sudo dpkg-reconfigure lightdm
    # 选择 gdm3 继续
    ```

1. 卸载深度桌面环境


    ```shell
    sudo apt remove startdde ubuntudde-dde
    ```

1. 重启

    ```shell
    reboot
    ```


## 参考
1. [如何在 Ubuntu 20.04 LTS 上安装深度（Deepin）桌面环境](https://linux.cn/article-12724-1.html)
1. [Ubuntu 22.04|20.04安装深度桌面环境|](https://cn.linux-console.net/?p=21054#:~:text=%E5%9C%A8Ubuntu%2022.04%2F20.04%E4%B8%8A%E5%AE%89%E8%A3%85%E6%B7%B1%E5%BA%A6%E6%A1%8C%E9%9D%A2%E7%8E%AF%E5%A2%83%EF%BC%88DDE%EF%BC%89%201%20%E7%AC%AC%201%20%E6%AD%A5%EF%BC%9A%E6%B7%BB%E5%8A%A0%20UbuntuDDE%20Stable,%E6%AD%A5%E9%AA%A43%EF%BC%9A%E5%9C%A8Ubuntu%E4%B8%8A%E4%BD%BF%E7%94%A8%E6%B7%B1%E5%BA%A6%E6%A1%8C%E9%9D%A2%E7%8E%AF%E5%A2%83%EF%BC%88DDE%EF%BC%89%20%E5%AE%89%E8%A3%85%E5%90%8E%E9%87%8D%E6%96%B0%E5%90%AF%E5%8A%A8%E6%82%A8%E7%9A%84%E6%9C%BA%E5%99%A8%E3%80%82%20sudo%20systemctl%20reboot%20%E5%9C%A8%E7%99%BB%E5%BD%95%E5%B1%8F%E5%B9%95%E4%B8%AD%EF%BC%8C%E4%BD%BF%E7%94%A8%E6%A1%8C%E9%9D%A2%E5%88%87%E6%8D%A2%E5%99%A8%E9%80%89%E6%8B%A9%20DDE%E3%80%82%20)