## vps内资源通过mega快传到本地

#### 背景
众所周知，由于 `GFW` 的存在,国内下载一些外网资源非常的慢,使用 `vps` 通过  `youtube-dl` 下载再拖回本地成为了首选,但是使用 `FTP` , `Http` 等方式依然很大程度会被限速，于是想到一种折中方案，将资源转存到 `MEGA` 云盘,然后本地在 `down` 下来

#### 安装和使用youtube-dl
1. 使用 `putty` 登录 `vps`
1. 安装 `youtube-dl`

    ```SHELL
    # 方法一:使用curl
    sudo curl -L https://yt-dl.org/downloads/latest/youtube-dl -o /usr/local/bin/youtube-dl
    sudo chmod a+rx /usr/local/bin/youtube-dl

    # 方法二:使用wget
    sudo wget https://yt-dl.org/downloads/latest/youtube-dl -O /usr/local/bin/youtube-dl
    sudo chmod a+rx /usr/local/bin/youtube-dl

    # 方法三:使用pip
    sudo pip install --upgrade youtube_dl
    ```

1. 获取视频分辨率

    ```SHELL
    # -F 获取视频分辨率列表
    youtube-dl -F videoUrl
    ```

1. 下载视频

    ```SHELL
    # -f 分辨率 视频地址
    youtube-dl -f 480p videoUrl
    ```


#### 安装和使用Rclone
1. 安装 `rclone`
    ```SHELL
    curl https://rclone.org/install.sh | sudo bash
    ```

1. 配置并登录 `mega`

    ```SHELL
    rclone config
    # 按照文档所示,一步一步即可
    No remotes found - make a new one
    n) New remote
    s) Set configuration password
    q) Quit config
    n/s/q> n
    name> remote
    Type of storage to configure.
    Choose a number from below, or type in your own value
    [snip]
    XX / Mega
      \ "mega"
    [snip]
    Storage> mega
    User name
    user> you@example.com
    Password.
    y) Yes type in my own password
    g) Generate random password
    n) No leave this optional password blank
    y/g/n> y
    Enter the password:
    password:
    Confirm the password:
    password:
    Remote config
    --------------------
    [remote]
    type = mega
    user = you@example.com
    pass = *** ENCRYPTED ***
    --------------------
    y) Yes this is OK
    e) Edit this remote
    d) Delete this remote
    y/e/d> y
    ```

1. 常用命令

    ```SHELL
    # 1. 列出一级目录
    rclone lsd remote:
    # 2. 列出所有文件
    rclone ls remote:
    # 同步vps的一个目录到云盘并命名为backup
    rclone copy /home/source remote:backup
    ```

1. 最后使用 `MEGASync` 拖回本地即可

#### 参考
1. [youtube-dl官方仓库](https://github.com/ytdl-org/youtube-dl 'youtube-dl')
1. [rclone官方仓库](https://rclone.org/downloads/ 'rclone官方仓库')
1. [rclone-mega](https://rclone.org/mega/ 'rclone-mega')
