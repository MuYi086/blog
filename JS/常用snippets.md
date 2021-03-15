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
