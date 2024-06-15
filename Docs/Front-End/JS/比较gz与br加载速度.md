# 比较gz与br加载速度

## 介绍
网络优化的方式有很多种，今天我们聊聊有限带宽下，通过文件压缩格式进行的优化。

## gz
`gz` 是 `gnu zip` 的缩写，，压缩比可达到 `90%` 以上。

由于我使用的 `1panel` 安装的 `openresty` 默认开启 `gzip: on` ，所以我们需要先手动设置 `gzip: off`, 然后观察 `network` 加载或者 `webvitals` 插件数据

1. `gzip: off`

    ![无压缩](/Images/Front-End/JS/比较gz与br加载速度/无压缩.png '无压缩')

1. `gzip: on`

    ![gz](/Images/Front-End/JS/比较gz与br加载速度/gz.png 'gz')

对比发现，`webvitals` 指标的时间差不多，但是 `network` 加载完成时间要快很多


## br
`br` 是 `Brotli` 的缩写，是 `Google` 出的一种文件压缩工具，根据 `Google` 的官方数据和实际使用经验，`Brotli` 相对于 `Gzip` 可以实现更高的压缩率，有时候可以达到 `20-30%` 的压缩率提升
