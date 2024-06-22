# 比较gz与br加载速度

## 介绍
网络优化的方式有很多种，今天我们聊聊有限带宽下，通过文件压缩格式进行的优化。

## gz
`gz` 是 `gnu zip` 的缩写，，压缩比可达到 `90%` 以上。

我用的宝塔面板默认开启 `gzip: on` ，所以我们需要先手动设置 `gzip: off`, 然后观察 `network` 加载或者 `webvitals` 插件数据

1. `gzip: off`

    ![无压缩](/Images/JS/比较gz与br加载速度/无压缩.jpg '无压缩')

1. `gzip: on`

    ![gz](/Images/JS/比较gz与br加载速度/gz.jpg 'gz')

对比发现，`webvitals` 指标的时间差不多，但是 `network` 加载完成时间要快很多


## br
`br` 是 `Brotli` 的缩写，是 `Google` 出的一种文件压缩工具，根据 `Google` 的官方数据和实际使用经验，`Brotli` 相对于 `Gzip` 可以实现更高的压缩率，有时候可以达到 `20-30%` 的压缩率提升。

`nginx` 安装 `brotli` 请参考之前的一篇文章[宝塔nginx安装ngx_brotli](/Docs/Linux/Shell/宝塔nginx安装ngx_brotli)

![br](/Images/JS/比较gz与br加载速度/br.jpg 'br')


## 分析
我们用了一个简单的网页测试了无压缩，`gzip` 压缩，`br` 压缩分别在同样带宽下的表现。可以发现完成用时上，`gz` < `br` < `无压缩`，在 `webvitals` 数据表现 `gz` < `无压缩` < `br`。

那么为什么 `br` 没有达到预期的效果呢，我们分析主要有俩点原因：

1. 服务器压缩 `br` 需要额外的性能开销，影响的页面响应时间。

1. 单个简单网页的测试条件有限，导致 `br` 压缩效果没有达到预期。

那么我们改变条件，在同目录下放下已压缩好的 `gz` 文件和 `br` 文件，然后再次对比

```shell
# 压缩gzip
gzip -k -f -9 index.html

# 压缩br
npm i -g brotli-cli
brotli-cli compress index.html
```

![已压缩的数据](/Images/JS/比较gz与br加载速度/已压缩的数据.jpg '已压缩的数据')

可以看到文件大小 `br` < `gz` < `无压缩`

我们把文件放到服务器，再次实验

1. 无压缩

    ![实验2无压缩](/Images/JS/比较gz与br加载速度/实验2无压缩.jpg '实验2无压缩')

1. `gzip`

    ![实验2gz](/Images/JS/比较gz与br加载速度/实验2gz.jpg '实验2gz')

1. `br`

    ![实验2br](/Images/JS/比较gz与br加载速度/实验2br.jpg '实验2br')

真的尽力，从图上看，依旧没能达到 `google` 宣传的加载速度。

可能是简单页面测试条件有限，囊括的场景不多。`br` 其实是有用武之地的，我们去看 `cloudflare` 以及最大的同性交友网站: `github`, 对于 `html` , `xml` , `json` 等返回的是 `gzip`, `css`, `js` 返回的全是 `br` 格式。再反观国内，大流量电商网站 `jd` 和 `taobao` 所有资源都是返回 `gzip`。


## 参考
1. [brotli-cli](https://www.npmjs.com/package/brotli-cli)


