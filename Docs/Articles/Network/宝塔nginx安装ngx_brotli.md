---
tags:
  - Network
  - nginx
  - brotli
---
# 宝塔nginx安装ngx_brotli

## 介绍
`br` 是 `Brotli` 的缩写，是 `Google` 出的一种文件压缩工具，根据 `Google` 的官方数据和实际使用经验，`Brotli` 相对于 `Gzip` 可以实现更高的压缩率，有时候可以达到 `20-30%` 的压缩率提升。感兴趣可以参考这篇[Gzip vs Brotli 压缩算法，谁更好？及最优实施方案](https://zhanzhangb.cn/tutorials/gzip-vs-brotli-better-compression.html)


`nginx` 默认安装不带`brotli` 支持，所以我们需要手动编译安装 `nginx` 启用 `brotli` 支持。

::: warning 注意
无特殊需求，建议选极速安装，非必要不要选 `编译安装`, 相当的慢，我测试 `brotli`，在 `ubuntu 18.04` 和 `20.04` 上重新编译 `nginx` , 等了很长时间不提，最后还编译失败了。
![18.04_error](/Images/Network/宝塔nginx安装ngx_brotli/18.04_error.png "18.04_error")

最后，在 `22.04` 花了将近一个小时，终于编译成功。
:::

## 卸载已安装的nginx
如果面板还没有安装 `nginx` ，可以跳过此步骤。

登录宝塔面板 => 软件商品 => 已安装 => 找到 `nginx` => 卸载

## 安装ngx_brotli
1. 以 `root` 用户登录到 `vps` 终端

    ```shell
    # 进入对应目录
    cd /www/server
    # 下载ngx_brotli
    git clone --recurse-submodules -j8 https://github.com/google/ngx_brotli
    # 添加ngx_brotli编译参数
    echo "--add-module=/www/server/ngx_brotli" > /www/server/panel/install/nginx_configure.pl
    ```
1. 宝塔面板 => 软件商品 => 搜索 `nginx` => 安装 => 勾选 `编译安装` => 提交

## 使用
在宝塔面板新建一个网站，打开 `nginx` 配置文件，添加如下配置并保存。

```nginx
brotli on;
brotli_comp_level 1;
brotli_buffers 16 8k;
brotli_min_length 20;
brotli_types text/xml text/plain text/css application/javascript application/x-javascript application/rss+xml text/javascript image/tiff image/svg+xml application/json application/xml;
```

再次访问网页，可以看到 `Content-Encoding: br`，说明成功了。
![internet_br](/Images/Network/宝塔nginx安装ngx_brotli/internet_br.jpg "internet_br")






## 参考
1. [宝塔面板](https://www.bt.cn/new/download.html)
1. [aaPanel](https://www.aapanel.com/new/download.html#install)
1. [宝塔面板Nginx开启Brotli压缩，提升网站加载速度-【给网站提提速】](https://developer.aliyun.com/article/1253206)
1. [Nginx 启用 QUIC 与 Brotli 的完整教程(宝塔面板8.0.6)](https://zhanzhangb.cn/tutorials/nginx-quic-brotli-bt.html)
1. [Gzip vs Brotli 压缩算法，谁更好？及最优实施方案](https://zhanzhangb.cn/tutorials/gzip-vs-brotli-better-compression.html)
