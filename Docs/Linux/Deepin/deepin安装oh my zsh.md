# deepin安装oh my zsh

## 介绍
使用 `linux` 这些年，发行版本用了很多，但是一直用的默认的 `bash` ，最近浏览公众号和 `github` 被不同人安利了 `zsh` ，据说很强大，于是准备尝试下。

## 安装

`oh my zsh` 基于 `zsh` ，所以先安装 `zsh`
```shell
# 安装
sudo apt-get install zsh

# 查看版本
zsh --version

# 设置为默认shell
chsh -s $(which zsh)

# 注销并重新登录以使用最新的默认shell

# 默认shell会提示没有.zshrc文件,不要管，后面安装oh my zsh后会自动创建

# 关闭重新打开终端,提示消失

# 安装oh my zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# 如果无法访问raw.githubusercontent.com，可以使用下面的方式安装
sh -c "$(curl -fsSL https://install.ohmyz.sh)"

```

## plugin
`oh my zsh` 拥有强大的插件，可以安装一些常用的插件，比如 `zsh-autosuggestions` 插件，可以自动提示命令

```shell
# 常用插件
plugins=(git git-commit docker extract colored-man-pages codeclimate mysql-macports npm nvm pip pm2 shell-proxy sudo systemd ubuntu vscode)
```

## 参考
1. [oh my zsh](https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH)
