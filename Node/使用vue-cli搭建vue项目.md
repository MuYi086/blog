## 使用vue-cli搭建vue项目

#### 前言
在工作中，我们常常面临要同时创建和开发多个 `vue` 项目.于是，产生一个想法，把这些重复的操作流程化,以便于以后 `CTRL+C` 和 `CTRL+V`

#### 全局安装vue-cli
建议这里使用 [nrm](./使用nvm和nrm.md 'nrm') ,切换到 `taobao` 源会比较快
```SHELL
npm i -g vue-cli
```

#### 项目初始化
```SHELL
vue init webpack vue-project
# 如下图所示:这里节省时间没有安装ESLint，Unit，Nightwatch
# 由于国内网络,安装photomjs和electron真的很慢,后面我们使用另外方法单独安装
```

![初始化项目](../images/node/使用vue-cli搭建vue项目/vueDemo_01.png '初始化项目')

#### 启动程序
```SHELL
# 如果缺少依赖
npm i
# 运行
npm run dev
```
至此,一个简单的 `vue` 项目就创建完成了.
接下来我们来锦上添花,增加一些附加功能.

#### 安装使用ESLint
```SHELL
# 安装eslint和规则模块
# 注意：这里指定了10.2.1这个版本（跟随vue-cli推荐版本）;是因为之后的版本验证更严格，只使用一次的变量会报错.提示让你用const定义
npm i eslint eslint-config-standard@10.2.1 eslint-friendly-formatter eslint-loader eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard eslint-plugin-vue babel-eslint --save-dev
```
创建 `eslint` 配置文件 `.eslintrc.js`
```JS
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
创建 `.eslintignore`
```
/build/
/config/
/dist/
/*.js
```

修改 `package.json` 文件,增加 `Eslint` 校验
```JSON
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
修改 `webpack.base.conf.js`
```JS
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
最后在 `index.js` 配置使用 `eslint`
```JS
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

#### 使用Mocha进行单元测试
```SHELL
# 建议全局安装mocha
npm i -g mocha
# 安装断言库chai
npm i chai --save-dev
```
查看 `add.js` 文件源码
```JS
function add(x, y) {
    return x + y;
}
```
编写一个测试脚本 `add.test.js`
```JS
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
`mocha` 默认运行 `test` 子目录里面的测试脚本
```SHELL
mocha test
```
当然，你也可以自定义漂亮的报告格式,例如 `mochawesome`
```SHELL
npm i -g mochawesome
```

打开 `package.json` 文件,改写 `scripts` 字段的 `test` 脚本
```JSON
// 改成
"scripts": {
  "test": "mocha --recursive ./test/* --reporter mochawesome"
}
```
运行测试用例
```SHELL
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

#### 使用Nightmare进行功能测试
安装依赖
```SHELL
# nightmare会先安装electron
# 为了保证速度，这里使用淘宝的镜像
# Linux & Mac
$ export  ELECTRON_MIRROR=https://npm.taobao.org/mirrors/electron/

# Windows
$ set ELECTRON_MIRROR=https://npm.taobao.org/mirrors/electron/

# 安装electron
npm i electron -g
# 安装nightmare
npm i nightmare -g
```
然后新建个 `demo.js`
```JS
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
运行程序
```SHELL
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
            })
            .catch(error => {
                console.error('Search failed:', error)
            })
    })
})

function getData () {
    let contentHtml = document.getElementById('technicalSupport').innerHTML
    return contentHtml
}
```


#### 参考
1. [VUE-CLI使用](https://www.cnblogs.com/samve/p/9095328.html 'VUE-CLI使用')
1. [jsTraining](https://github.com/ruanyf/jstraining/blob/master/demos/README.md 'jsTraining')
1. [ESLint](https://eslint.org/ 'ESLint')
1. [测试框架 Mocha 实例教程](http://www.ruanyifeng.com/blog/2015/12/a-mocha-tutorial-of-examples.html '测试框架 Mocha 实例教程')
1. [Nightmare](https://github.com/segmentio/nightmare 'Nightmare')
1. [解决npm安装electron很慢的问题](https://segmentfault.com/a/1190000020932174 '解决npm安装electron很慢的问题')
1. [前端的UI自动化测试](https://maizsss.github.io/2017/10/28/%E5%89%8D%E7%AB%AF%E7%9A%84UI%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95/ '前端的UI自动化测试')