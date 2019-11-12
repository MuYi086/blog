## 使用vue-cli搭建vue项目

#### 前言
在工作中，我们常常面临要同时创建和开发多个vue项目.于是，产生一个想法，把这些重复的操作流程化,以便于以后CTRL+C和CTRL+V

#### 全局安装vue-cli
建议这里使用[nrm](./使用nvm和nrm.md 'nrm'),切换到taobao源会比较快
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
至此,一个简单的vue项目就创建完成了.
接下来我们来锦上添花,增加一些附加功能.

#### 安装使用ESLint
```SHELL
# 安装eslint和规则模块
npm i eslint eslint-plugin-import eslint-config-airbnb-base --save-dev
# 创建eslint配置文件.eslintrc.json,添加如下:
{
    "extends": "airbnb-base",
    "rules": {
        "no-console": "off"
    }
}
```
在package.json的scripts字段里面添加三个脚本
1. `lint` : 检查所有js文件的代码
1. `lint-html` : 将检查结果写入一个网页文件./reports/lint-results.html
1. `lint-fix` : 自动修正某些不规范的代码
```JSON
{
    // ...
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "lint": "eslint **/*.js",
        "lint-html": "eslint **/*.js -f html -o ./reports/lint-results.html",
        "lint-fix": "eslint --fix **/*.js"
    },
    // ...
}
```
运行检查
```SHELL
npm run lint
```

#### 使用Mocha进行单元测试
```SHELL
# 安装mocha和断言库chai
npm i -D mocha chai
```
查看add.js文件源码
```JS
function add(x, y) {
    return x + y;
}
```
编写一个测试脚本add.test.js
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
打开package.json文件,改写scripts字段的test脚本
```JSON
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
},
// 改成
"scripts": {
    "test": "mocha *.test.js"
}
```
运行测试用例
```SHELL
npm test
```

#### 使用Nightmare进行功能测试
安装依赖
```SHELL
# nightmare会先安装electron
# 为了保证速度，这里使用淘宝的镜像
# Linux & Mac
$ env ELECTRON_MIRROR=https://npm.taobao.org/mirrors/electron/ npm install

# Windows
$ set ELECTRON_MIRROR=https://npm.taobao.org/mirrors/electron/
$ npm install
```



#### 参考
1. [VUE-CLI使用](https://www.cnblogs.com/samve/p/9095328.html 'VUE-CLI使用')
1. [jsTraining](https://github.com/ruanyf/jstraining/blob/master/demos/README.md 'jsTraining')