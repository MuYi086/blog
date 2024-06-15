# 浏览器提示HSTS

## 问题
由于我的域名开启了 `cloudflare` 代理，在我想测试浏览器访问 `gzip` 和 `br` 文件性能时，在 `cloudflare` 解析处关闭了代理，使用了仅 `DNS` ，然后再次使用 `vpn` 访问我的网站(由于 `racknerd` 的 `ip` 默认被墙，所以之前需要使用 `cloudflare` 代理流量，这样才能直连，关掉 `cloudflare` 代理后就只能使用 `vpn` 才能访问了)，发现浏览器如下提示:

::: warning 注意
`muyi086.top` 通常会使用加密技术来保护您的信息。`Chrome` 此次尝试连接到 `muyi086.top` 时，该网站发回了异常的错误凭据。这可能是因为有攻击者在试图冒充 `muyi086.top`，或者 `Wi-Fi` 登录屏幕中断了此次连接。请放心，您的信息仍然是安全的，因为 `Chrome` 尚未进行任何数据交换便停止了连接。

您目前无法访问 `muyi086.top` ，因为此网站使用了 `HSTS`。网络错误和攻击通常是暂时的，因此，此网页稍后可能会恢复正常。
:::

## 移除浏览器HSTS记录
1. `Chrome` : 访问 `chrome://net-internals/#hsts`
1. `Edge` : 访问 `edge://net-internals/#hsts`

查询并删除对应域名的 `HSTS` 记录

![HSTS](/Images/Windows/浏览器提示HSTS/HSTS.png 'HSTS')

再次访问 `muyi086.top` ，发现已经已经可以正常访问


## 参考
1. [记录一次1Panel配置SSL导致的面板访问失败](https://blog.csdn.net/qq_25851273/article/details/135683207)