## 安装deepin系统后要做的事

1. [deepin 换源](./deepin换源.md  'deepin 换源')

1. [Git安装和配置](../Git/Git安装和配置.md 'Git安装和配置')

1. 在应用商店下载安装常用软件:
    ```SHELL
    # Tim， 钉钉, 微信, 微信开发者工具, TeamView, GitKraken
    # Stacer, MEGA, Putty, GVim, 阿里旺旺, FileZilla
    # WPS Office, GIMP, 福昕阅读器, 网易云音乐, 搜狗输入法
    # Chrome, Firefox
    ```

1. 从比特球下载开发常用软件和工具

1. 从 `github` 仓库下载常用项目
    ```SHELL
    https://github.com/ougege?tab=repositories
    ```

1. 搭建本地 `v2ray` 客户端
    ```SHELL
    wget https://install.direct/go.sh
    sudo bash go.sh --local ./v2ray-linux-64.zip
    # 启动v2ray
    sudo systemctl start v2ray
    # 查看v2ray状态
    sudo systemctl status v2ray
    # 停止v2ray
    sudo systemctl stop v2ray
    ```

1. 修改v2ray配置: [3种常用且稳定的梯子](./3种常用且稳定的梯子.md '3种常用且稳定的梯子')
    ```SHELL
    # 启动v2ray
    service v2ray start
    # 查看v2ray状态
    service v2ray status
    # 停止v2ray
    service v2ray stop
    ```

1. 登录谷歌账号,同步书签和插件

1. [安装Node.js和npm配置](../Node/安装Node.js和npm配置.md '安装Node.js和npm配置')

1. [使用nvm和nrm](../Node/使用nvm和nrm.md '使用nvm和nrm')


1. 利用 `switch-omega` 和 `shadowsock-over-websocket` 实现 `chrome` 科学上网

1. [python版本管理](../Python/python版本管理.md 'python版本管理')

1. [Python源管理](../Python/Python源管理.md 'Python源管理')