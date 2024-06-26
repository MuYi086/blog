---
tags:
  - Wall
  - Tor
---
# 科学上网-Tor

## 介绍
`Tor` 浏览器最大的用处就是匿名上网,保护用户隐私,没有人知道你在互联网做了什么。虽然能自有访问互联网，但是想对来说速度比较慢，毕竟鱼和熊掌不可兼得。

## 使用
我个人使用体验上还好，`google` 和 `YouTube` 还算流畅
`Tor` 浏览器安装后需要获取网桥 `Bridge` ，默认内置网桥不用试，都被 `Ban` 了

1. 官方获取网桥的页面[https://bridges.torproject.org/bridges](https://bridges.torproject.org/bridges) 也是不行的，公开的都被 `Ban`
1. 推荐使用邮箱获取私密网桥,支持的邮箱有 `Gmail` ， `Yahoo` , `Riseup` 

联系人 `bridges@torproject.org` 发送 `get transport obfs4` 

联系人 `frontdesk@torproject.org` 发送 `private bridge cn` 

基本上都是秒回的,另外，贪心的想获取多个网桥，请3个小时后再试（我已经踩过这个坑了）

![科学上网](/Images/Wall/科学上网-Tor/internet_06.png "科学上网")

个人自用网桥
```shell
obfs4 46.226.105.182:3785 7F9D25E5515D0C8C2A6B0995CFC65CFE77303B9F cert=y5Ev1p/hH0hRO7jQAiMIH+z6jHTKSpnngndz7shZ5nDwto81txViGyLB4Rg7EsnlRNwDPw iat-mode=0

obfs4 138.201.126.116:19443 A00AAEDBBFF21FD1496523AF25C79460A02BE88D cert=+/dNcl2PtaS9ZU5Ldy3BUfhLkXZ9YonvtSfOywpKmayAp98INcbWrYuT6Ol5KMxioGKdEg iat-mode=0

obfs4 89.58.48.49:1312 B955F0A232152B2B09BC41C1AB55CC5F9234B915 cert=RITDHdwFfyU9iHBpOFQfGj8IbWynJDEXQ2A7KCA7EYoUTF0rZ/1ESQbCak8Kc/UuXjGhVA iat-mode=0

obfs4 195.15.243.103:3785 E102004D130241E5C0D46C7E3D049413087265E7 cert=VgPBLrGxnGUAHd9yVsiIL7b1B2fM6FW6CiKzySN7+auze75fgesLCXROfB2WYUA94F6uRw iat-mode=0

obfs4 195.15.243.212:3785 01A0C521775D042472D0FC5F6A14430B8AA2EE08 cert=xiLkxosrzh0SE0sAZdavQgecNrxHefFVTlSH7Tg37gkfJfAq1GZCoonIcQiQuU2BfFE4ag iat-mode=0

webtunnel [2001:db8:77cb:5ce6:9995:7466:7ffa:b3f8]:443 770EA6412C8D3997ABFFF7173A3E53F1D3660167 url=https://shallotfarm.org/jcHgyp7m90iQr9QaVSprq1wP

webtunnel [2001:db8:6281:baa0:afc0:9579:b303:59a7]:443 377CF6FCBFD2E57D0775EA6F2E8D3EF0D8CDD02F url=https://cryptomeanscryptography.club/TfDS3X50Rf3dR5x3Q3vLS25o
```


`Tor` 官网下载地址: [https://www.torproject.org/projects/torbrowser.html.en](https://www.torproject.org/projects/torbrowser.html.en)

备用地址: [https://tor.calyxinstitute.org/download/](https://tor.calyxinstitute.org/download/)

::: warning 注意
`windows` 和 `macOS` 下安装后直接使用

`linux` 解压文件后，再终端执行 `./start-tor-browser.desktop`
:::
