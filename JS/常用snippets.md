## 常用snippets

#### 背景
基于 `vscode` ,提高开发效率

#### 添加路径
File >> Preferences >> User Snippets >> New Snippets

#### vue模板
```JSON
{
	// Place your snippets for vue here. Each snippet is defined under a snippet name and has a prefix, body and 
	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the 
	// same ids are connected.
	// Example:
	// "Print to console": {
	// 	"prefix": "log",
	// 	"body": [
	// 		"console.log('$1');",
	// 		"$2"
	// 	],
	// 	"description": "Log output to console"
	// }
  "vue": {
    "prefix": "vue",
    "body": [
      "<template>",
        "  <view class=\"container\">",
        "  </view>",
      "</template>",
      "",
      "<script>",
      "import { config, util, api } from '../../utils/index'",
      "export default {",
        "  components: {},",
        "  computed: {",
        "    // test: {",
        "    //   get: function () {},",
        "    //   set: function (v) {}",
        "    // }",
        "  },",
        "  watch: {",
        "    // test: function (newObj, oldObj) {}",
        "  },",
        "  data () {",
          "    return {",
            "      staticHost: config.staticHost,",
            "      defaultImg: config.defaultImg,",
            "      assets: config.defaultImg.assets,",
            "      dataList: [],",
            "      resData: {},",
            "      dataLoading: false",
          "    }",
        "  },",
        "  beforeCreate () {},",
        "  created () {},",
        "  beforeMount () {},",
        "  mounted () {},",
        "  beforeDestroy () {},",
        "  destroyed () {},",
        "  onLoad (op) {},",
        "  onShow () {},",
        "  onReady () {},",
        "  // 用户点击右上角分享",
        "  onShareAppMessage: function (res) {",
          "    const that = this",
          "    if (res.from === 'button') {",
            "      const shareMsg = util.getShareObj(that)",
            "      return util.commonShareAppMessage(shareMsg)",
          "    } else {",
            "      return util.commonShareAppMessage()",
          "    }",
        "  },",
        "  onPullDownRefresh () {},",
        "  onReachBottom () {},",
        "  methods: {}",
      "}",
      "</script>",
      "",
      "<style lang='scss' scoped>",
      ".container {",
        "  background: #f7f8fa;",
      "}",
      "</style>",
      "",
    ]
  }
}
```

#### uniVue模板
```JSON
{
	// Place your global snippets here. Each snippet is defined under a snippet name and has a scope, prefix, body and 
	// description. Add comma separated ids of the languages where the snippet is applicable in the scope field. If scope 
	// is left empty or omitted, the snippet gets applied to all languages. The prefix is what is 
	// used to trigger the snippet and the body will be expanded and inserted. Possible variables are: 
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. 
	// Placeholders with the same ids are connected.
	// Example:
	// "Print to console": {
	// 	"scope": "javascript,typescript",
	// 	"prefix": "log",
	// 	"body": [
	// 		"console.log('$1');",
	// 		"$2"
	// 	],
	// 	"description": "Log output to console"
	// }
  "uni": {
    "prefix": "uni",
    "body": [
      "<template>",
        "  <view class=\"container\">",
        "  </view>",
      "</template>",
      "",
      "<script>",
      "import { config, util, api } from '../../utils/index'",
      "export default {",
        "  components: {},",
        "  computed: {",
        "    // test: {",
        "    //   get: function () {},",
        "    //   set: function (v) {}",
        "    // }",
        "  },",
        "  watch: {",
        "    // test: function (newObj, oldObj) {}",
        "  },",
        "  data () {",
          "    return {",
            "      staticHost: config.staticHost,",
            "      defaultImg: config.defaultImg,",
            "      assets: config.defaultImg.assets,",
            "      dataList: [],",
            "      resData: {},",
            "      dataLoading: false",
          "    }",
        "  },",
        "  onLoad (op) {},",
        "  onShow () {},",
        "  onReady () {},",
        "  onHide () {},",
        "  onUnload () {},",
        "  onResize () {},",
        "  onPullDownRefresh () {},",
        "  onReachBottom () {},",
        "  onShareAppMessage: function (res) {",
          "    const that = this",
          "    if (res.from === 'button') {",
            "      const shareMsg = util.getShareObj(that)",
            "      return util.commonShareAppMessage(shareMsg)",
          "    } else {",
            "      return util.commonShareAppMessage()",
          "    }",
        "  },",
        "  onPageScroll (e) {},",
        "  methods: {}",
      "}",
      "</script>",
      "",
      "<style lang='scss' scoped>",
      ".container {",
        "  background: #f7f8fa;",
      "}",
      "</style>",
      "",
    ]
  }
}
```

#### component
```JSON
{
  "component": {
    "prefix": "component",
    "body": [
      "<template>",
        "  <view class=\"component\">",
        "  </view>",
      "</template>",
      "",
      "<script>",
      "import { config } from '../../../utils/index'",
      "export default {",
        "  props: {",
        "    isFixed: {",
        "      type: Boolean,",
        "      default: false",
        "    }",
        "  },",
        "  components: {},",
        "  computed: {",
        "    // test: {",
        "    //   get: function () {},",
        "    //   set: function (v) {}",
        "    // }",
        "  },",
        "  watch: {",
        "    // test: function (newObj, oldObj) {}",
        "  },",
        "  data () {",
          "    return {",
            "      staticHost: config.staticHost,",
            "      defaultImg: config.defaultImg,",
            "      assets: config.defaultImg.assets",
          "    }",
        "  },",
        "  beforeCreate () {},",
        "  created () {},",
        "  beforeMount () {},",
        "  mounted () {},",
        "  beforeUpdate () {},",
        "  updated () {},",
        "  beforeDestroy () {},",
        "  destroyed () {},",
        "  methods: {}",
      "}",
      "</script>",
      "",
      "<style lang='scss'>",
      ".component {}",
      "</style>",
      "",
    ]
  }
}
```

#### api.js
```JSON
{
  "api": {
    "prefix": "api",
    "body": [
      "const config = require('../config.js')",
      "module.exports = {",
      "  getList: config.host + 'api/' // xxx",
      "}",
      "",
    ]
  }
}
```

#### request
```JSON
{
	"request": {
    "prefix": "request",
    "body": [
      "const that = this",
      "const url = api.getChatConversation",
      "const params = {}",
      "const transHeader = { Authorization: this.loginTokenInfo.token }",
      "uni.showLoading()",
      "util.postData.call(this, url, params, 'POST', function (res) {",
      "  if (res.data) {",
      "    const data = res.data.data",
      "    const tips = '保存成功'",
      "    uni.showToast({ title: tips, icon: 'none', duration: 1500 })",
      "  }",
      "  uni.hideLoading()",
      "}, function (err) {",
      "  uni.hideLoading()",
      "  uni.showToast({ title: err.data.msg, icon: 'none', duration: 1500 })",
      "}, transHeader)",
    ]
  }
}
```

#### initStorage
```JSON
{
	"initStorage": {
    "prefix": "initStorage",
    "body": [
      "initStorage () {",
      "  const loginUserInfo = xtyStorage.get(xtyStorage.loginUserInfo)",
      "  this.loginUserInfo = loginUserInfo ? JSON.parse(loginUserInfo) : {}",
      "}",
    ]
  }
}
```

#### judgeAll
```JSON
{
	"judgeAll": {
    "prefix": "judgeAll",
    "body": [
      "judgeAll () {",
      "  let sum = 1",
      "  let msg = ''",
      "  if (this.userName) {",
      "    sum *= 1",
      "  } else {",
      "    msg = '昵称不能为空'",
      "    sum *= 0",
      "  }",
      "  if (msg) {",
      "    uni.showToast({ title: msg, icon: 'none', duration: 1500 })",
      "  }",
      "  return sum",
      "}",
    ]
  }
}
```

#### setStorage
```JSON
{
	"setStorage": {
    "prefix": "setStorage",
    "body": [
      "const info = {}",
      "xtyStorage.set(xtyStorage.loginTokenInfo, JSON.stringify(info))",
    ]
  }
}
```

#### image
```JSON
{
	"image": {
    "prefix": "image",
    "body": [
      "<image class=\"tips tip-1\" :mode=\"'scaleToFill'\" :src=\"assets.customer_chat\" @error=\"imageError\"></image>",
    ]
  }
}
```

#### staticHostImg
```JSON
{
	"staticHostImg": {
    "prefix": "staticHostImg",
    "body": [
      "item.productImg = `${config.staticHost}${item.productImg}`",
    ]
  }
}
```

#### formatDate
```JSON
{
	"formatDate": {
    "prefix": "formatDate",
    "body": [
      "item.endTime = util.formatDate(new Date(Number(item.endTime)), 'yyyy-MM-dd hh:mm')",
    ]
  }
}
```

#### initSelections
```JSON
{
	"initSelections": {
    "prefix": "initSelections",
    "body": [
      "initSelections () {",
      "  this.operList = selectOptions.exchangeGoodsDetailOptions1",
      "}",
    ]
  }
}
```

#### iconfont
```JSON
{
	"iconfont": {
    "prefix": "iconfont",
    "body": [
      "<text class=\"iconfont icon-fanhui1\"></text>",
      "<text class=\"inline t-icon hxjs-iconxuanzhong\"></text>",
    ]
  }
}
```

#### initLinkAndTitle
```JSON
{
	"initLinkAndTitle": {
    "prefix": "initLinkAndTitle",
    "body": [
      "initLinkAndTitle () {",
      "  const { bitmap } = config.InviteMessage",
      "  const referralLink = `/pages/invite/register?invitationCode=${this.resData.invitationCode}`",
      "  this.shareObj = {",
      "    title: this.resData.subTitle,",
      "    image: bitmap,",
      "    pageLink: referralLink",
      "  }",
      "}",
    ]
  }
}
```

#### onShow
```JSON
{
	"onShow": {
    "prefix": "onShow",
    "body": [
      "onShow () {",
      "  const currPage = util.getCurrentPage()",
      "  if (currPage.data.distributeId) {",
      "    this.distributeId = currPage.data.distributeId",
      "  }",
      "},",
    ]
  }
}
```

#### getParams
```JSON
{
	"getParams": {
    "prefix": "getParams",
    "body": [
      "getParams () {",
      "  const params = {}",
      "  return params",
      "},",
    ]
  }
}
```

#### goto
```JSON
{
	"goto": {
    "prefix": "goto",
    "body": [
      "// 1:关闭当前页面，跳转到应用内的某个页面",
      "// 2:跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面 需在 app.json 的 tabBar 字段定义的页面  路径后不能带参数",
      "// 3:关闭所有页面，打开到应用内的某个页面",
      "// 99:关闭当前页面，返回上一页面或多级页面",
      "// default:保留当前页面，跳转到应用内的某个页面",
      "util.commonViewTap('/pages/shop/searchResult')",
    ]
  }
}
```

#### getPrePage
```JSON
{
	"getPrePage": {
    "prefix": "getPrePage",
    "body": [
      "const prePage = util.getPrePage()",
      "// #ifndef H5",
      "prePage.setData({",
      "  isReRender: true",
      "})",
      "util.returnPrevPage()",
      "// #endif",
    ]
  }
}
```

#### getList
```JSON
{
	"getList": {
    "prefix": "getList",
    "body": [
      "dataList: [],",
      "hasMore: true,",
      "page: 1,",
      "limit: 10,",
      "getParams () {",
      "  const params = {}",
      "  return params",
      "},",
      "getList () {",
      "  const that = this",
      "  const url = api.getSearchShopList",
      "  const params = this.getParams()",
      "  uni.showLoading()",
      "  util.postData.call(this, url, params, 'POST', function (res) {",
      "    if (res.data) {",
      "      const data = res.data.data",
      "      that.totalPage = data.pages",
      "      that.hasMore = that.page < data.pages",
      "      // that.dataList = that.dealDataList(data)",
      "      uni.hideLoading()",
      "    }",
      "  }, function (err) {",
      "    uni.hideLoading()",
      "    uni.showToast({ title: err.data.msg, icon: 'none', duration: 1500 })",
      "  })",
      "},",
      "getNextPage () {",
      "  const that = this",
      "  const url = api.getSearchShopList",
      "  if (this.page >= this.totalPage) {",
      "    return false",
      "  }",
      "  this.page += 1",
      "  const params = this.getParams()",
      "  uni.showLoading()",
      "  util.postData.call(this, url, params, 'POST', function (res) {",
      "    if (res.data) {",
      "      const data = res.data.data",
      "      that.totalPage = data.pages",
      "      that.hasMore = that.page < data.pages",
      "      // that.dataList = [...that.dataList, ...that.dealDataList(data)]",
      "      uni.hideLoading()",
      "    }",
      "  }, function (err) {",
      "    uni.hideLoading()",
      "    uni.showToast({ title: err.errMsg, icon: 'none', duration: 1500 })",
      "  })",
      "},",
    ]
  }
}
```

#### uniUpload
```JSON
{
	"uniUpload": {
    "prefix": "uniUpload",
    "body": [
      "const transHeader = { Authorization: this.loginTokenInfo.token }",
      "const apiUrl = api.idCardGetInfo",
      "const imgUrl = subThis.formObj.frontImg",
      "util.uniUpload((res) => {",
      "  // do something",
      "  subThis.deal(res)",
      "}, (err) => {",
      "  uni.showToast({ title: err.data.msg, icon: 'none', duration: 1500 })",
      "}, apiUrl, imgUrl, {}, config.idCardUploadRequestBehindLabel, transHeader)",
    ]
  }
}
```

#### promise
```JSON
{
	"promise": {
    "prefix": "promise",
    "body": [
      "const p1 = new Promise(function (resolve, reject) {",
      "  const that = this",
      "  const url = api.getChatConversation",
      "  const params = {}",
      "  const transHeader = { Authorization: that.loginTokenInfo.token }",
      "  uni.showLoading()",
      "  util.postData.call(this, url, params, 'POST', function (res) {",
      "    if (res.data) {",
      "      const data = res.data.data",
      "      const tips = '保存成功'",
      "      uni.showToast({ title: tips, icon: 'none', duration: 1500 })",
      "    }",
      "    uni.hideLoading()",
      "  }, function (err) {",
      "    uni.hideLoading()",
      "    uni.showToast({ title: err.data.msg, icon: 'none', duration: 1500 })",
      "  }, transHeader)",
      "})",
      "Promise.all([p1]).then(res => {",
      "  // do something",
      "})",
    ]
  }
}
```