# deepin安装oh my Zsh

## 介绍
使用 `linux` 这些年，发行版本用了很多，但是一直用的默认的 `bash` ，最近浏览公众号和 `github` 被不同人安利了 `Zsh` ，据说很强大，于是准备尝试下。

## 安装

`oh my Zsh` 基于 `Zsh` ，所以先安装 `Zsh`

### linux
`linux` 安装比较简单，直接安装即可

```shell
# 安装
sudo apt-get install zsh

# 查看版本
zsh --version

# 设置为默认shell
chsh -s $(which zsh)

# 注销并重新登录以使用最新的默认shell

# 默认shell会提示没有.zshrc文件,不要管，后面安装oh my Zsh后会自动创建

# 关闭重新打开终端,提示消失

# 安装oh my Zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# 如果无法访问raw.githubusercontent.com，可以使用下面的方式安装
sh -c "$(curl -fsSL https://install.ohmyz.sh)"

```

### windows
推荐使用方法二
::: info 方法一
`WSL` 安装 `Zsh`:  `windows` 需要先去商店安装 `WSL` , 然后选择一个 `linux` 子系统，比如 `ubuntu`, 然后在选择 `ubuntu` 终端安装 `Zsh`
```shell
apt-get install zsh
```
`windows` 子系统中无法和系统共享环境和目录，所以很多 `Zsh` 命令无法正常使用, 比如 `vsc .` 等，不是很方便
:::
::: info 方法二
以 `Git Bash` 终端为基础，来安装 `Zsh`终端
1. [下载安装 Git Bash](/Git/Git安装和配置)
1. [下载Zsh](https://packages.msys2.org/package/zsh?repo=msys&variant=x86_64)
1. 将解压的文件和目录一起放入 `git bash` 的安装目录, 一般是在 `C:\Program Files\Git`
1. 将 `zsh` 设为默认 `bash`
```shell
# 在~目录建立.bashrc文件
cd ~
touch .bashrc

# 编辑文件
if [ -t 1 ]; then
  exec zsh
fi

# 重启git bash 终端

# 然后就和上面的linux步骤一样下载脚本安装 oh my Zsh
```
:::

::: warning 注意
如果遇到网络问题无法正常安装，可以尝试将 `vpn` 配置为系统代理

或者 [科学上网-让终端走代理](/Wall/科学上网-让终端走代理)
:::

## plugin
`oh my Zsh` 拥有强大的插件，可以安装一些常用的插件，比如 `zsh-autosuggestions` 插件，可以自动提示命令

::: code-group
```shell [.zshrc]
# 常用插件
plugins=(git git-commit docker extract colored-man-pages codeclimate mysql-macports npm nvm pip pm2 shell-proxy sudo systemd ubuntu vscode)
```
:::

## 参考
1. [oh my Zsh](https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH)
1. [Windows安装Zsh终端](https://zhuanlan.zhihu.com/p/625583037)
1. [Windows在git-bash安装zsh](https://packages.msys2.org/package/zsh?repo=msys&variant=x86_64)
