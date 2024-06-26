---
tags:
  - JS
---
# Vue+Oauth登录实现

## 介绍
在开发时，经常会遇到使用第三方登录的场景(比如微信,微博登录), 今天我们就来聊聊 `Oauth` 登录.

## Oauth流程
其实各家 `Oauth` 登录流程大同小异，最为经典的莫过于 `github` 的 `Oauth` 登录.但是由于 `GFW` 的原因,时不时的抽风,调用接口调试有时候会超时。
因此下面我们使用国内的 `gitee` 举例说明.
![Oauth流程](/Images/JS/Vue+Oauth登录实现/oauth_step_1.png)

## 纯后端实现
这里就不介绍了，阮一峰老师有个 `demo`，使用 `koa` + `axios`实现
博客: [GitHub OAuth 第三方登录示例教程](http://www.ruanyifeng.com/blog/2019/04/github-oauth.html)
源码: [node-oauth-demo](https://github.com/ruanyf/node-oauth-demo)

## 纯前端实现
为了方便大家理解, 这里将认证步骤归纳总结如下:
1. 应用将用户引导(浏览器链接跳转)到码云三方认证页面上
1. 用户对应用进行授权(网页上点击同意)
1. 码云服务器通过回调地址跳回时将 `code` 带上
1. 应用获取 `url` 的 `code` 向码云服务器请求 `access_token`
1. 应用通过 `access_token` 调用码云相关接口获取用户信息

具体步骤如下:

1. 登录码云 => 头像下拉 => 设置 => 左侧数据管理 => 第三方应用 => 创建应用
1. 创建一个 `vue` 项目, `router` 新建俩个路由及对应页面
    ```js
    // router.js
    {
      path: '/oauth',
      name: 'oauth',
      component: () => import('views/oauth/index.vue'),
      meta: { title: '授权登录', icon: 'User', affix: true }
    },
    {
      path: '/oauth/redirect',
      name: 'redirect',
      component: () => import('views/oauth/redirect.vue'),
      meta: { title: '授权回调', icon: 'User', affix: true }
    },
    ```
1. 码云创建应用填入信息, 创建应用
    ```js
    // 应用主页 https:127.0.0.1:8089
    // 应用回调地址 https://127.0.0.1:8089/oauth/redirect
    // 大家将上面的地址改成自己的即可
    ```

1. 复制应用的 `Client ID`, `Client Secret`, 保存到 `vue` 项目
    ```js
    // 在全局Config.js定义Oauth的配置信息
    OAuthConfig: {
      gitee: {
        giteeApiUri: 'https://gitee.com/',
        redirectUri: 'https://127.0.0.1:8089/oauth/redirect',
        clientId: 'xxx',
        clientSecrets: 'xxx'
      }
    }
    ```
1. 在 `vite.config.js` 配置 `server`
    ```js
    // 引入配置文件
    import { Config } from './src/utils/Config'
    const { gitee } = Config.OAuthConfig
    ...
    server: {
      host: '127.0.0.1',
      proxy: {
        '/giteeApi': {
          target: `${gitee.giteeApiUri}`,
          secure: false,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/giteeApi/, '')
        }
      },
      port: 8089,
      https: true
    }
    ```
1. 在 `oauth/index.vue` 编写跳转链接
    ```html
    <script setup>
    // 这里我使用的element的组件,大家可以按照个人喜好替换
    import { getCurrentInstance } from 'vue'
    // 因为我把全家对象都挂载到app上了
    const { UtilFn, Config } = getCurrentInstance().proxy
    const gotoOauthByGitee = () => {
      const { giteeApiUri, redirectUri, clientId } = Config.OAuthConfig.gitee
      const linkHref = `${giteeApiUri}/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`
      // 项目里为了方便,会进行封装.下面会放windowOpen的实际代码
      UtilFn.windowOpen(linkHref)
    }

    function windowOpen (url = './', name = '_blank') {
      if (!url) { return false }
      window.open(url, name)
    }
    </script>

    <template>
      <div class='component component-oauth'>
        <el-button type="primary" @click="gotoOauthByGitee">gitee授权</el-button>
      </div>
    </template>
    ```

1. 完善 `oauth/redirect.vue` 页面
这里特别要注意.网上多数用 `axios` 直接向 `gitee` 请求是会报错 `promise error` ,因为多数 `Oauth` 平台获取授权的返回值结构体没有 `code` 属性,会导致 `axios` 不能正常 `resolve` ,而走 `reject`

    ```html
    <!-- fetch版本 -->
    <script setup>
      import { ref, onMounted, getCurrentInstance } from 'vue'
      import { useRouter } from 'vue-router'
      const { currentRoute } = useRouter()
      import axios from 'axios'
      const { Config } = getCurrentInstance().proxy
      const route = currentRoute.value
      const { clientId, redirectUri, clientSecrets } = Config.OAuthConfig.gitee
      const code = ref('')
      onMounted(() => {
        code.value = route.query.code
      })
      const getTokenByGitee = async (code) => {
        const getTokenUrl = '/giteeApi/oauth/token?' +
          `grant_type=authorization_code&` +
          `code=${code}&` +
          `client_id=${clientId}&` +
          `redirect_uri=${redirectUri}&` +
          `client_secret=${clientSecrets}`
        const { access_token } = await fetch(getTokenUrl, {method: 'POST'})
        .then((response) => response.json())
        console.log(access_token, '-------------------------access_token----------------------')
        const getUserUrl = `/giteeApi/api/v5/user?access_token=${access_token}`
        fetch(getUserUrl)
        .then((response) => response.json())
        .then((userInfo) => console.log(userInfo))
      }
      </script>

      <template>
        <div class='component component-redirect'>
          <el-button type="primary" @click="getTokenByGitee(code)">手动获取</el-button>
        </div>
      </template>
    ```

    ```html
    <!-- axios版本 -->
    <!-- 使用axios我们需要再做一层封装,捕获reject出来的数据 -->
    <script setup>
      import { ref, onMounted, getCurrentInstance } from 'vue'
      import { useRouter } from 'vue-router'
      import axios from 'axios'
      const { Config } = getCurrentInstance().proxy
      const { currentRoute } = useRouter()
      const route = currentRoute.value
      const { clientId, redirectUri, clientSecrets } = Config.OAuthConfig.gitee
      const code = ref('')
      onMounted(() => {
        code.value = route.query.code
      })
      const getTokenByGitee = async (code) => {
        const getTokenUrl = '/giteeApi/oauth/token?' +
          `grant_type=authorization_code&` +
          `code=${code}&` +
          `client_id=${clientId}&` +
          `redirect_uri=${redirectUri}&` +
          `client_secret=${clientSecrets}`
        const tokenResponse = await new Promise(async (resolve, reject) => {
          await axios({
            method: 'post',
            url: getTokenUrl,
            headers: {
              accept: 'application/json'
            }
          }).then().catch(data => {
            if (data) {
              resolve(data)
            } else {
              reject(new Error('没有值'))
            }
          })
        })
        const { access_token } = tokenResponse.data
        console.log(access_token, '-------------------------tokenResponse----------------------')
        const getUserUrl = `/giteeApi/api/v5/user?access_token=${access_token}`
        const userInfo = await new Promise(async (resolve, reject) => {
          await axios({
            method: 'get',
            url: getUserUrl,
            headers: {
              accept: 'application/json'
            }
          }).then().catch(data => {
            if (data) {
              resolve(data)
            } else {
              reject(new Error('没有值'))
            }
          })
        })
        console.log(userInfo.data, '-------------------------userInfo----------------------')
        
      }
      </script>

      <template>
        <div class='component component-redirect'>
          <el-button type="primary" @click="getTokenByGitee(code)">手动获取</el-button>
        </div>
      </template>
    ```


## 参考
1. [OAuth文档](https://gitee.com/api/v5/oauth_doc#/)
1. [Axios](https://javasoho.com/axios/index.html)
1. [Fetch](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)

