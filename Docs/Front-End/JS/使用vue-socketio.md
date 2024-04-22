# 使用vue-socketio

## 介绍
最近运营给管理后台提了个需求：需要马甲和用户实时聊天,于是想到了用 `vue-socketio` 实现

## 安装依赖

::: code-group
```shell 
npm install vue-socketio --save
```
```js [main.js]
import VueSocketIO from 'vue-socket.io'
import Const from "../core/js/const"
Vue.use(new VueSocketIO({
  debug: true,
  connection: Const.NET.WEBSOCKET_URL,
  // options: { path: "/websocket/" } //Optional options
}))
```
:::

## 在页面使用
代码结构如下:
```js
import VueSocketIO from 'vue-socket.io'
export default {
  name: 'app-header',
  watch: {},
  data() {
    return {
      user: '',
      activeIndex: '1',
      newsList: [],
    }
  },
  mounted() {
    this.loadNews()
    this.$socket.connect()
      // this.test()
  },
  sockets: {
    connect: function () {
      let sysUserId = Core.Util.getUserId()
      let params = {sysUserId: sysUserId}
      this.$socket.emit('authentication', params)
      console.log('socket connected')
    },
    customEmit: function (data) {
      // console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
    },
    authentication (data) {
      // console.log(data)
    },
    sendMsg (data) {
      localStorage.setItem('socketNews', JSON.stringify(data.msgs))
      this.loadNews()
    },
    onopen (data) {
      // console.log(data)
    }
  },
  beforeDestroy () {
    console.log('socket断开连接')
    this.$socket.disconnect()
  },
  methods: {
    loadNews () {
      let newStr = localStorage.getItem('socketNews')
      let news = newStr && newStr.length > 0 ? JSON.parse(newStr) : []
      let temp = []
      // 将接收的消息反序列化
      if (news.length > 0) {
        news.forEach(item => {
          let obj = Core.Util.type['isObject'](item) ? item :JSON.parse(item)
          obj.date = Core.Util.dateFormat(new Date(Number(obj.msgTimestamp)), 'yyyy-MM-dd hh:mm:ss') 
          temp.push(obj)
        })
      }
      this.newsList = temp
    }
  }
}
```

## 遗留问题
1. 切换路由，`mouted` 页面不会调用 `connect` 方法,需要手动刷新

## 参考
1. [vue-socketio](https://www.npmjs.com/package/vue-socketio 'vue-socketio')