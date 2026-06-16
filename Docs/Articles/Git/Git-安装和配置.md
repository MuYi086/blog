---
tags:
  - Git
---
# Git-安装和配置

## 下载
[Git下载](https://git-scm.com/downloads)

## 安装
如果是 `windows` 记得勾选 `Add a Git Bash Profile to Windows Terminal` , 其他都选默认即可

`linux` 和 `mac` 直接安装就行

## Git配置用户名和邮箱
```shell
git config --global user.name "Your Name"
git config --global user.email "email@example.com"
```

## 创建SSH Key

旧命令生成的 `rsa`， `github` 不认
~~ssh-keygen -t rsa -C "youremail@example.com"~~
```shell

# 尝试一:使用新命令生成rsa(gitee没问题了，github提示rsa type invalid)
ssh-keygen -t ed25519 -C "yourEmail@example.com"

# 尝试二:升级git版本,从当前2.27升级到2.35最新后,发现github可以正常pull和push

```
 `id_rsa` 和 `id_rsa.pub` 分别是私钥和公钥

## 添加github的host
```JS
# github
192.30.253.112 github.com
192.30.253.113 github.com
192.30.253.118 gist.github.com
192.30.253.119 gist.github.com
```

## github添加SSH Key
 `Account settings` 选择 `SSH and GPG keys` 填入你的公钥 `id_rsa.pub`

验证是否成功，在 `git bash` 里面输入下面的命令

```shell
ssh -T git@github.com
```

## wsl复用同一份git key

~~1. 方法一: 创建软连接~~
软链接容易出现权限问题

    ```shell

    # 删除（如果存在的话）并重新创建符号链接
    sudo ln -sf /mnt/c/Users/<你的Win用户名>/.ssh ~/.ssh

    # 设置文件权限
    chmod 700 ~/.ssh
    chmod 600 ~/.ssh/id_*
    chmod 600 ~/.ssh/config   # 如有 config 文件
    ```

2. 方法二: 复制`.ssh`目录到`wsl`中
`vscode` 提交会提示`git`未配置`user.name`和`user.email`
    ```shell
    # 1. 删除原来的软链接
    rm ~/.ssh

    # 2. 重新复制整个 .ssh 文件夹到 WSL
    cp -r /mnt/c/Users/<你的Win用户名>/.ssh ~/

    # 3. 在`wsl`重新配置`user.name`和`user.email`

    # 4. 修正权限
    chmod 700 ~/.ssh
    chmod 600 ~/.ssh/id_*
    chmod 600 ~/.ssh/config   # 如果有 config 文件
    ```
