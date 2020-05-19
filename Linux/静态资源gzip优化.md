## 静态资源gzip优化

#### 前言
`vue` 单页面应用打包后的资源比较大,耗时较长,特别是鄙人的 `vps` 还不是特别快，为了提升访问体验, 优化就是需要克服的第一座大山.

#### 介绍
资源压缩方式主要有俩种:静态压缩和动态压缩
1. 静态压缩：资源在本地压缩好后传到服务器
1. 动态压缩: 服务器在接收到请求时动态压缩请求的资源
前者比较友好，后者需要消耗更多 `cpu` 资源

#### 开始

```SHELL
# 首先通过nginx -V查看是否安装http_gzip_static_module
nginx -V
# 若无，则须在编译时加上
./configure --with-http_gzip_static_module
```

#### 资源静态压缩
一般有俩种方式, `compression-webpack-plugin` 插件压缩和自定义shell脚本压缩
推荐用自写脚本压缩，自己动手，丰衣足食.
1. 使用 `compression-webpack-plugin` 插件压缩

    ```JS
    // 安装依赖
    npm install compression-webpack-plugin --save-dev
    // vue.config.js修改
    const CompressionPlugin = require('compression-webpack-plugin')
    const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i
    module.exports = {
      publicPath: './',
      productionSourceMap: false,
      configureWebpack: {...},
      chainWebpack: config => {
        config.resolve.alias.set('@', resolve('src'))
        if (process.env.NODE_ENV === 'production') {
          config.plugin('compressionPlugin')
          .use(new CompressionPlugin({
            filename: '[path].gz[query]',
            algorithm: 'gzip',
            test: productionGzipExtensions,
            threshold: 10240,
            minRatio: 0.8,
            deleteOriginalAssets: true
          }))
        }
      },
    }
    ```

1. 使用自定义 `shell` 脚本压缩: 这里贴上自用脚本

    ```shell
    # 在windows上给gzip加-c参数有问题,否则一行代码就够了.没办法，只能先拷贝一份在压缩
    cd ./dist/build/h5/static/js
    mkdir oldjs
    cp ./*.js oldjs/
    gzip -9 ./*.js 
    cd oldjs/
    cd ../
    mv ./oldjs/*.js ./
    rm -fr ./oldjs/
    ```

#### 服务器动态压缩
服务端 `nginx` 启用 `gzip` 压缩原理：
1. 浏览器支持 `gzip` ,继续执行，否则直接返回未压缩的 `js` 和 `css`
1. 优先启用 `gzip` 静态压缩:有 `gzip` 文件直接使用，否则继续执行
1. `gzip`动态压缩

    ```shell
    # nginx配置gzip
    # 注意:gzip_static on;需要放置在最前
    gzip_static on;
    gzip on;
    gzip_min_length  1k;
    gzip_buffers     4 16k;
    gzip_http_version 1.1;
    gzip_comp_level 2;
    gzip_types     text/plain application/javascript application/x-javascript text/javascript text/css application/xml;
    gzip_vary on;
    gzip_proxied   expired no-cache no-store private auth;
    gzip_disable   "MSIE [1-6]\.";
    ```

#### 参考
1. [nginx常用命令](./nginx常用命令.md 'nginx常用命令')
1. [CompressionWebpackPlugin文档](https://www.webpackjs.com/plugins/compression-webpack-plugin/ 'CompressionWebpackPlugin文档')
1. [Vue项目 webpack优化 compression-webpack-plugin 开启gzip](https://www.cnblogs.com/zigood/p/12504401.html 'Vue项目 webpack优化 compression-webpack-plugin 开启gzip')
1. [前端性能优化-gzip压缩](https://zhuanlan.zhihu.com/p/37429159 '前端性能优化-gzip压缩')
1. [nginx静态压缩(ngx_http_gzip_static_module)](http://www.ttlsa.com/nginx/nginx-ngx_http_gzip_static_module/ 'nginx静态压缩(ngx_http_gzip_static_module)') 
1. [HttpGzipStatic文档](https://www.nginx.cn/doc/optional/gzipstatic.html 'HttpGzipStatic')