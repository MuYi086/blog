# 微信jssdk封装使用

## 介绍
在做项目中,有一个需求要在网页中实现自定义分享到微信的内容.加上了解过 `jssdk` ,为方便使用,进一步封装了 `jweixin`

## 实现
这里就不说明公众号怎么配置,后端怎么与微信签名了,可参考下面的博文,本篇主要展示前端分享功能代码实现

::: tip 安装 `jweixin-module`
```shell
npm i jweixin-module --save
```
:::

::: tip 封装
以下我使用了封装好的 `util` 和 `api`
  ::: details 点我查看代码
  ```js
  var jweixin = require('jweixin-module')
  export default {  
    //判断是否在微信中  
    isWechat: function () {  
      var ua = window.navigator.userAgent.toLowerCase()
      if (ua.match(/micromessenger/i) == 'micromessenger') {  
        return true
      } else {  
        return false
      }  
    },  
    //初始化sdk配置  
    initJssdk: function(util, api, data, callback) {  
      //服务端进行签名:https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#4
      let apiSrc = api.getWechatJsSign
      let params = {
        url: data.link
      }
      let tempToken = {'token': data.token}
      uni.showLoading()
      util.postData.call(this, apiSrc, params, 'POST', function (res) {
        if (res) {
          let data = res.data.data
          console.log(data)
          jweixin.config({
            debug: false, // 开启调试模式
            appId: data.appId, // 必填，公众号的唯一标识
            timestamp: data.timestamp, // 必填，生成签名的时间戳
            nonceStr: data.nonceStr, // 必填，生成签名的随机串
            signature: data.signature,// 必填，签名
            jsApiList: [
              'updateAppMessageShareData',//自定义“分享给朋友”及“分享到QQ”按钮的分享内容
              'updateTimelineShareData',//自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容
              'onMenuShareWeibo',//获取“分享到腾讯微博”按钮点击状态及自定义分享内容接口
              'checkJsApi',  
              // 'onMenuShareTimeline',  
              // 'onMenuShareAppMessage'
            ], // 必填，需要使用的JS接口列表
            success: () => {
              console.log('success')
            },
            fail: () => {
              console.log('fail')
            }
          })
          //配置完成后，再执行分享等功能  
          if (callback) {
            callback(res.data.data)
          }
        }
        uni.hideLoading()
      }, function (res) {
        uni.hideLoading()
        uni.showToast({ title: res.errMsg, icon: 'none', duration: 1500 })
      }, tempToken)
    },
    //在需要自定义分享的页面中调用  
    share: function (util, api, data, type) {
      let url = data.url ? data.url : window.location.href
      //每次都需要重新初始化配置，才可以进行分享
      let signData
      this.initJssdk(util, api, data, function(signData) {
        signData = signData
      })
      jweixin.ready(function(){
        var shareData = {  
          title: data && data.title ? data.title : signData.site_name,
          desc: data && data.desc ? data.desc : signData.site_description,  
          link: url,
          imgUrl: data && data.img ? data.img : signData.site_logo,  
          success: function (res) {  
            //用户点击分享后的回调，这里可以进行统计，例如分享送金币之类的  
            // 关闭页面的弹框
            console.log('关闭页面的弹框')
          },
          cancel: function (res) {
            let errMsg = '分享失败，请咨询管理员'
            uni.showToast({ title: errMsg, icon: 'none', duration: 1500 })
          }
        }
        switch (type) {
          //分享给朋友接口
          case 1:
            jweixin.updateAppMessageShareData(shareData)
            // jweixin.onMenuShareAppMessage(shareData)
            break
          //分享到朋友圈接口
          case 2:
            jweixin.updateTimelineShareData(shareData)
            break
          default:
            jweixin.updateAppMessageShareData(shareData)
            // jweixin.onMenuShareAppMessage(shareData)
        }
      })
    }  
  }
  ```
:::


::: tip 页面调用
  ```js
  // 引入
  import {util, api, config, wechat} from '../../utils/index'

  // 构建data对象,调用wechat方法
  let data = {
    title: title,
    desc: desc,
    link: url,
    img: img,
    token: that.token
  }
  wechat.share(util, api, data, 1)
  ```
:::

## 参考
1. [微信JSSdk实现分享功能](https://www.cnblogs.com/ifme/p/11796705.html)
1. [vue使用微信JS-SDK实现分享功能](https://segmentfault.com/a/1190000020163797)
1. [uniapp中使用微信jssdk](https://www.cnblogs.com/niceyoo/p/12232641.html)