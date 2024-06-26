---
tags:
  - Node
  - vue
---
# 使用vue-cli搭建vue项目

## 介绍
在工作中，我们常常面临要同时创建和开发多个 `vue` 项目.于是，产生一个想法，把这些重复的操作流程化,以便于以后 `CTRL+C` 和 `CTRL+V`

## 全局安装vue-cli
建议这里使用 [nrm](/Articles/Node/使用nvm和nrm) ,切换到 `taobao` 源会比较快
```shell
npm i -g vue-cli
```

## 项目初始化
```shell
vue init webpack vue-project
# 如下图所示:这里节省时间没有安装ESLint，Unit，Nightwatch
# 由于国内网络,安装photomjs和electron真的很慢,后面我们使用另外方法单独安装
```

![初始化项目](/Images/Node/使用vue-cli搭建vue项目/vueDemo_01.png '初始化项目')

## VUE CLI 4.x安装使用
```shell
# 卸载旧
npm uninstall vue-cli -g
# 安装新
npm i -g @vue/cli
# 升级
npm update -g @vue/cli
# 创建
vue create hello-world
# help
vue create --help
# 使用图形界面
vue ui
```

## 启动程序
```shell
# 如果缺少依赖
npm i
# 运行
npm run dev
```
至此,一个简单的 `vue` 项目就创建完成了.
接下来我们来锦上添花,增加一些附加功能.

## 安装使用ESLint
```shell
# 安装eslint和规则模块
# 注意：这里指定了10.2.1这个版本（跟随vue-cli推荐版本）;是因为之后的版本验证更严格，只使用一次的变量会报错.提示让你用const定义
npm i eslint eslint-config-standard@10.2.1 eslint-friendly-formatter eslint-loader eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard eslint-plugin-vue babel-eslint --save-dev
```

1. 创建 `eslint` 配置文件 `.eslintrc.js`
1. 创建 `.eslintignore`
1. 修改 `package.json` 文件,增加 `Eslint` 校验
1. 修改 `webpack.base.conf.js`
1. 最后在 `index.js` 配置使用 `eslint`

::: code-group
```JS [.eslintrc.js]
// https://eslint.org/docs/user-guide/configuring
module.exports = {
    root: true,
    parserOptions: {
      parser: 'babel-eslint'
    },
    env: {
      browser: true,
    },
    extends: [
      // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
      // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
      'plugin:vue/essential', 
      // https://github.com/standard/standard/blob/master/docs/RULES-en.md
      'standard'
    ],
    // required to lint *.vue files
    plugins: [
      'vue'
    ],
    // add your custom rules here
    rules: {
      // allow async-await
      'generator-star-spacing': 'off',
      // allow debugger during development
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    }
}
```
``` shell [.eslintignore]
/build/
/config/
/dist/
/*.js
```
```JSON [package.json]
{
  ...
  "scripts": {
    "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
    "start": "npm run dev",
    "build": "node build/build.js"
  },
  ...
}
```
```JS [webpack.base.conf.js]
// 增加
const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
})

module.exports = {
  ... // 省略内容
  module: {
    rules: [
      // 注意：下面是扩展运算符
      ...(config.dev.useEslint ? [createLintingRule()] : []),
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      ... // 省略内容
    ]
  }
  ... // 省略内容
}
```
```JS [index.js]
// 省略内容
...
// Use Eslint Loader?
// If true, your code will be linted during bundling and
// linting errors and warnings will be shown in the console.
useEslint: true,
// If true, eslint errors and warnings will also be shown in the error overlay
// in the browser.
showEslintErrorsInOverlay: false,

/**
  * Source Maps
  */

// https://webpack.js.org/configuration/devtool/#development
devtool: 'cheap-module-eval-source-map',
...
// 省略内容
```
:::

## Eslint 关闭校验

```JS
// 关闭段落校验
/* eslint-disable */
  代码块
/* eslint-enable */

// 关闭当前行校验
一行代码 // eslint-disable-line

// 关闭下一行校验
// eslint-disable-next-line
下一行的代码

// 关闭对单一文件的校验
// 在文件头部加上注释,eslint在校验的时候会跳过后续的代码
/* eslint-disable */
```


## 使用Mocha进行单元测试
```shell
# 建议全局安装mocha
npm i -g mocha
# 安装断言库chai
npm i chai --save-dev
```

1. 查看 `add.js` 文件源码
1. 编写一个测试脚本 `add.test.js`
::: code-group
```JS [add.js]
function add(x, y) {
    return x + y
}
module.exports = add
```

```JS [add.test.js]
let add = require('./add.js')
let expect = require('chai').expect
// describe称为"测试套件"
describe('加法函数测试', function() {
  // it 称为"测试用例"
  it('1加1应该等于2', function() {
    // expect是一句断言
    expect(add(1, 1)).to.be.equal(2)
  })
})
```
:::

`mocha` 默认运行 `test` 子目录里面的测试脚本
```shell
mocha test
```
当然，你也可以自定义漂亮的报告格式,例如 `mochawesome`
```shell
npm i -g mochawesome
```

打开 `package.json` 文件,改写 `scripts` 字段的 `test` 脚本
::: code-group
```JSON [package.json]
// 改成
"scripts": {
  "test": "mocha --recursive ./test/* --reporter mochawesome"
}
```
:::

运行测试用例
```shell
npm test
```
最后在 `mochawesome-report` 子目录查看
`mocha` 常用钩子函数
```JS
before(function() {
  // 在本区块的所有测试用例之前执行
})
after(function() {
  // 在本区块的所有测试用例之后执行
})
beforeEach(function() {
  // 在本区块的每个测试用例之前执行
})
afterEach(function() {
  // 在本区块的每个测试用例之后执行
})
```

## 使用Nightmare进行功能测试
1. 安装依赖

    ::: code-group
    ```shell [Windows]
    # nightmare会先安装electron
    # 为了保证速度，这里使用淘宝的镜像
    $ set ELECTRON_MIRROR=https://npm.taobao.org/mirrors/electron/

    # 安装electron和nightmare
    npm i -g electron nightmare
    ```
    ```shell [Linux]
    # nightmare会先安装electron
    # 为了保证速度，这里使用淘宝的镜像
    $ export  ELECTRON_MIRROR=https://npm.taobao.org/mirrors/electron/

    # 安装electron和nightmare
    npm i -g electron nightmare
    ```
    ```shell [Mac]
    # nightmare会先安装electron
    # 为了保证速度，这里使用淘宝的镜像
    $ export  ELECTRON_MIRROR=https://npm.taobao.org/mirrors/electron/

    # 安装electron和nightmare
    npm i -g electron nightmare
    ```
    :::

1. 然后新建个 `demo.js`

    ::: code-group
    ```JS [demo.js]
    const Nightmare = require('nightmare')
    const nightmare = Nightmare({ show: true })

    nightmare
      .goto('http://www.ckcest.cn/default/es/search?page=kgoes&dbtypecode=type_all&dbid=1000&keyword=')
      .type('#txt_search', '机械')
      .click('#btn_search')
      .wait('.search-result-list')
      .evaluate(getData)
      .end()
      .then(function(res) {
        console.log(res)
      })
      .catch(error => {
        console.error('Search failed:', error)
      })

    function getData () {
      let contentHtml = document.getElementById('result-content').innerHTML
      return contentHtml
    }
    ```
    :::

1. 运行程序
```shell
node demo.js
```

当然, `nightmare` 也可以和 `macha` 一起使用
```JS
const Nightmare = require('nightmare')
let expect = require('chai').expect
describe('测试nightmare', function() {
  it('nightmare使用', function() {
    nightmare = Nightmare({ show: true })
    nightmare
      .goto('http://www.ckcest.cn/default/es/search?page=kgoes&dbtypecode=type_all&dbid=1000&keyword=')
      .type('#txt_search', '机械')
      .click('#btn_search')
      .wait('.search-result-list')
      .evaluate(getData)
      .end()
      .then(res => {
        // expect是一句断言
        expect(res).to.be.equal('浪潮集团有限公司')
      }).catch(error => {
        console.error('Search failed:', error)
      })
    })
})

function getData () {
  let contentHtml = document.getElementById('technicalSupport').innerHTML
  return contentHtml
}
```


## 参考
1. [VUE-CLI使用](https://www.cnblogs.com/samve/p/9095328.html)
1. [jsTraining](https://github.com/ruanyf/jstraining/blob/master/demos/README.md)
1. [ESLint](https://eslint.org/)
1. [测试框架 Mocha 实例教程](http://www.ruanyifeng.com/blog/2015/12/a-mocha-tutorial-of-examples.html)
1. [Nightmare](https://github.com/segmentio/nightmare)
1. [解决npm安装electron很慢的问题](https://segmentfault.com/a/1190000020932174)
1. [前端的UI自动化测试](https://maizsss.github.io/2017/10/28/%E5%89%8D%E7%AB%AF%E7%9A%84UI%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95/)