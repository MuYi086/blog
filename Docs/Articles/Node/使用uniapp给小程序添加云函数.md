---
tags:
  - Node
  - uniapp
---
# 使用uniapp给小程序添加云函数

## 过程
1. 创建云函数目录 `functions`

1. 在 `manifest.json` 中使用云函数

1. `vue.config.js` 中配置 `webpack` 拷贝插件

1. 在 `eslintrc.js` 中不校验 `wx` 对象   

1. 在 `app.vue` 中初始化云函数

    ::: code-group
      ```json [manifest.json]
      "mp-weixin": {
        "appid": "xxxxxxx",
        "cloudfunctionRoot": "./functions/"
      }
      ```
      ```js [vue.config.js]
      const path = require('path')
      const CopyWebpackPlugin = require('copy-webpack-plugin')
      module.exports = {
        configureWebpack: {
          plugins: [
            new CopyWebpackPlugin([
              {
                from: path.join(__dirname, './src/functions'),
                to: path.join(__dirname, 'dist/dev/mp-weixin/functions')
              }
            ])
          ]
        }
      }
      ```
      ```js [eslintrc.js]
      module.exports = {
        env: {
          browser: true,
          commonjs: true,
          es2021: true,
          node: true
        },
        extends: [
          'plugin:vue/essential',
          'standard'
        ],
        parserOptions: {
          ecmaVersion: 12
        },
        plugins: [
          'vue'
        ],
        rules: {
          'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
        },
        globals: {
          uni: true,
          getCurrentPages: true,
          AndroidObj: true,
          wx: true,
          sendApp: true,
          requirePlugin: true,
          debugger: true
        }
      }
      ```
      ```vue [app.vue]
      <script>
      export default {
        onLaunch: function () {
          console.log('App Launch')
          // 云函数init
          wx.cloud.init({
            traceUser: true
          })
        },
        onShow: function () {
          console.log('App Show')
        },
        onHide: function () {
          console.log('App Hide')
        }
      }
      </script>
      ```
    :::

1. 在小程序开发者工具配置消息推送触发云函数

    ```shell
    # 云开发 => 设置 => 其他设置 => 添加消息推送
    ```


## 参考
1. [manifest.json配置cloudfunctionroot](https://uniapp.dcloud.io/collocation/manifest?id=cloudfunctionroot)
1. [云开发消息推送](https://developers.weixin.qq.com/miniprogram/dev/framework/server-ability/message-push.html#option-cloud)
