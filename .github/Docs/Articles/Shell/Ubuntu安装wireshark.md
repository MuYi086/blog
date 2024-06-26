# Ubuntu安装wireshark

## 安装
`windows` 和 `macOS` 直接 [下载安装包](https://www.wireshark.org/download.html) 安装即可，`ubuntu` 下需要使用命令安装

::: code-group
```shell
# ubuntu 22.04 可以直接安装
sudo apt install wireshark

# 其他早期版本需要使用PPA
sudo add-apt-repository ppa:wireshark-dev/stable
sudo apt update
sudo apt install wireshark
```

安装过程中会询问是否允许非 `root` 用户抓包，选择 `yes`允许
:::

## 参考
1. [在 Ubuntu Linux 上安装和使用 Wireshark](https://cn.linux-console.net/?p=18472)
1. [wireshark download](https://www.wireshark.org/download.html)