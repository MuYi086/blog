---
tags:
  - Node
---
# 安装Node.js和npm配置
[Node官网下载](https://nodejs.org/en/)

在 `windows` 安装时记得勾选 `Add to Path` ,如果安装正常,可以在命令行查看输出相应版本号
```shell
node --version
```

## 查看npm版本
```shell
npm --version
```

## 安装cnpm
```shell
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

## npm 配置显示
```shell
npm config list
```

## 获取npm镜像地址
```shell
npm config get registry
```

## 镜像地址替换成淘宝地址
```shell
npm config set registry http://registry.npm.taobao.org/
```

## 恢复默认镜像地址
```shell
npm config set registry https://registry.npmjs.org/
```

## 删除包
```shell
npm uninstall -g node-sass
```

## 快速下载node-sass等
类似 `node-sass` , `phantomjs` 等会从 `github.com` 上下载一个 `.node` 文件，大部分安装不成功的原因都源自这里，因为 `GitHub Releases` 里的文件都托管在 `s3.amazonaws.com` 上面,而这个地址被墙了
```shell
# 新建一个.npmrc文件
# 注意.npmrc文件的registry会影响npm get registry的值
registry=https://registry.npm.taobao.org
disturl=https://npm.taobao.org/mirrors/node
sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
phantomjs_cdnurl=https://npm.taobao.org/mirrors/phantomjs/
electron_mirror=https://npm.taobao.org/mirrors/electron/
puppeteer_download_host=https://npm.taobao.org/mirrors/
python_mirror=https://npm.taobao.org/mirrors/python/
sentrycli_cdnurl=https://npm.taobao.org/mirrors/sentry-cli/
sharp_binary_host=https://npm.taobao.org/mirrors/sharp/
sharp_dist_base_url=https://npm.taobao.org/mirrors/sharp-libvips/
sharp_libvips_binary_host=https://npm.taobao.org/mirrors/sharp-libvips/
sqlite3_binary_site=https://npm.taobao.org/mirrors/sqlite3/
```

## 参考
1. [安装 node-sass 的正确姿势](https://github.com/lmk123/blog/issues/28)
