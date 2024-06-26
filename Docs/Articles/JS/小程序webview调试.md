---
tags:
  - JS
---
# 小程序webview调试

## 背景
由于项目历史原因，接手的小程序代码是原生写的，微信一套，支付宝一套，导致后续迭代的时候微信上的同样的功能要做俩遍，兼容支付宝，很是麻烦。后来讨论决定新增的部分功能，复杂度不高的，优先使用 `webview` 实现，小程序里使用 `webview` 访问,通过注入 `token` 交互.

## 前置条件
1. 小程序 `webview` 访问仅支持 `https`
1. `webview` 地址仅支持域名，不支持 `IP` 和端口

## 步骤
1. 微信公众平台进入公众号设置的功能设置里填写 `JS` 接口安全域名
1. [服务端签名](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#4)
1. 前端静态资源服务器上传微信校验文件并通过验证
1. 前端引入 `jweixin` ,并初始化需要申请的接口列表
  * `index.html` 引入 `jweixin`
  * `onload` : 首次进入将 `url` 存储用于 `jWeixin` 验签
  * 初始化,申请接口列表

  ::: code-group
  ```html [index.html]
  <script src="https://res.wx.qq.com/open/js/jweixin-1.6.0.js"></script>
  ```
  ```js [index.vue]
  console.log(location.href.split('#')[0], '-------------------------pageOnloadInit执行----------------------')
  storage.set(storage.webviewSignUrl, location.href.split('#')[0])
  ```
  ```js [jWeixin.js]
  initJssdk (util, api, data) {
    return new Promise((resolve, reject) => {
      const apiSrc = api.wxminiappWxAppGetSign
      const params = {
        url: data.link
      }
      uni.showLoading()
      util.postData.call(this, apiSrc, params, 'POST', function (res) {
        if (res) {
          const data = res.data.data
          jWeixin.config({
            debug: true, // 开启调试模式
            appId: configAll.config.officialAccountAppId, // 必填，公众号的唯一标识
            timestamp: data.timestamp, // 必填，生成签名的时间戳
            nonceStr: data.nonceStr, // 必填，生成签名的随机串
            signature: data.signature, // 必填，签名
            jsApiList: [
              'openLocation', // 使用微信内置地图查看位置接口
              'getLocation' // 获取地理位置接口
            ], // 必填，需要使用的JS接口列表
            success: (res) => {
              console.log(res, 'jWeixin/success')
              resolve(res)
            },
            fail: (err) => {
              console.log(err, 'jWeixin/fail')
              reject(err)
            }
          })
          jWeixin.ready(function (res) {
            console.log(res, '-------------------------jWeixin.ready----------------------')
            // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
          })
          jWeixin.error(function (res) {
            console.log(res, '-------------------------jWeixin.error----------------------')
            // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
          })
        }
        uni.hideLoading()
      }, function (err) {
        uni.hideLoading()
        uni.showToast({ title: err.errMsg, icon: 'none', duration: 1500 })
        reject(err)
      })
    })
  }
  ```
  :::

## 注意事项
1. 微信签名一旦调试成功,把 `debug: true` 注释,否则会在 `ios` 调试引起未知错误,其实已经验签成功了,但是开了调试页面一直报错
1. 路由跳转不能是 `tabBar` ，仅支持相对路径

    ```js
    jWeixin.miniProgram.redirectTo({ url: '../login/login' }, (res) => {
      console.log(res, '-------------------------navigateTo/packageA/pages/login/login----------------------')
    }, (err) => {
      console.log(err, '-------------------------navigateTo/err----------------------')
    })
    ```


1. 在 `webview` 内部没有更好的办法判断当前`webview` 外部环境是微信还是支付宝，采用注入`runEnv` 到 `webview`

      ```js
      /**
       * 对应运行环境执行函数的callback
      * @param {*} e
      * @param {*} obj
      */
      const runEnvCallback = (e = 'mp-weixin', obj) => {
        const defaultEnvObj = renderEnvFormatFn()
        Object.assign(defaultEnvObj, obj)
        obj[e]()
      }

      /**
       * 生成所有运行环境对应的基础对象
      * @returns object
      */
      const renderEnvFormatFn = () => {
        const fn = () => { console.log('未找到对应环境回调函数') }
        return {
          app: fn,
          web: fn,
          'mp-weixin': fn,
          'mp-alipay': fn,
          'mp-baidu': fn,
          'mp-toutiao': fn
        }
      }

      // 使用
      util.runEnvCallback(this.runEnv,
      {
        'mp-weixin': () => {
          jWeixin.miniProgram.postMessage({ data: postData })
        }
      })
      ```

1. 所有页面公共要执行的逻辑

      ```js
      /**
       * 页面onLoad初始化参数
      */
      const pageOnloadInit = (op) => {
        return new Promise((resolve, reject) => {
          try {
            console.log(location.href.split('#')[0], '-------------------------pageOnloadInit执行----------------------')
            // 首次进入将url存储用于jWeixin验签
            storage.set(storage.webviewSignUrl, location.href.split('#')[0])
            // testUrl: http://192.168.2.181:8083/html/#/pages/index/index?token=831eb544-aa27-4869-a878-3c5eb7ac5417
            if (op.vConsole === '1') {
              const vConsole = new Vconsole()
              console.log(vConsole, '-------------------------vConsole----------------------')
            }
            if (op.token) {
              store.commit('user/SET_TOKEN', op.token)
            }
            if (op.tabType) {
              store.commit('shop/SET_TABTYPE', Number(op.tabType))
            }
            if (op.runEnv) {
              store.commit('system/SET_RUNENV', op.runEnv)
            }
            if (op.hasLocation) {
              const hasLocation = op.hasLocation === 'true'
              store.commit('location/SET_HASLOCATION', hasLocation)
            }
            if (op.longitude && op.latitude) {
              const pos = { latitude: Number(op.latitude), longitude: Number(op.longitude) }
              store.commit('location/SET_MINIPOSITION', pos)
              store.commit('location/SET_UNIPOSITION', pos)
            }
            console.log(store.getters, '-------------------------store.getters----------------------')
            resolve(true)
          } catch (err) {
            reject(err)
          }
        })
      }
      ```

## 参考
1. [服务端签名](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#4)
1. [webview文档](https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html)
