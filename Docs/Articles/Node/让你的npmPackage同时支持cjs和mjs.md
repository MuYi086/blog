---
tags:
  - Node
---
# 让你的npmPackage同时支持cjs和mjs

## 介绍
`CJS`（`CommonJS`）是一种用于在服务器端和旧版浏览器中组织和导入/导出 `JavaScript` 代码的模块系统, 后缀名为 `.cjs`。 它使用 `require` 和 `module.exports` 语法来导入和导出模块。`CJS` 模块是同步加载的，这意味着在导入模块时，代码会阻塞执行直到模块加载完成。

`MJS`（`ESM`，`ECMAScript` 模块）是 `ECMAScript 6`（`ES6`）引入的官方 `JavaScript` 模块系统, 后缀名为 `.mjs`。它使用 `import` 和`export` 语法来导入和导出模块。`MJS` 模块是异步加载的，这意味着在导入模块时，代码会继续执行，而不会阻塞。

`CJS` 和 `MJS` 之间的主要区别在于语法和加载方式。`CJS` 适用于服务器端和旧版浏览器，而 `MJS` 适用于现代浏览器和支持 `ES6` 模块的环境。

## 问题场景
让我们看下这段来自 `util.js` 的代码

:::code-group
```js [util.js]
const { qs } = require('@muyi086/qs') // [!code warning]
const { varType } = require('@muyi086/var-type') // [!code warning]
const authHttp = require('./authHttp')
const apiUser = require('./api/api_user')
const basicHttp = require('./common/basicHttp')
const uniUtil = require('./common/uniUtil')
const publicUtil = require('./common/publicUtil')
const { abortAllRequest, isAllRequestOver } = basicHttp
const { commonViewTap, getCurrentPageUrlWithArgs, getMiniPage } = uniUtil
const { newTimeStamp, formatDate, renderTodayTomorrowSoOn, transWeekDay, formatDateTime, randomStrFromCharCode } = publicUtil
const { config } = require('./configAll')
const storage = require('./storage')
const { stringify, parse } = qs
```
:::

::: warning 注意
高亮的俩行是引入的外部 `CJS` 模块，也就是发布时 `npm package` 导出的方式为 `module.exports = xxx`

由于我们不能在一个 `js` 同时使用 `require` 和 `import`, 于是看到后面的其他封装类库的引入都变成了 `require` 形式 ,这样不太方便，因为在 `vue` 项目里我是希望有些封装的函数能直接操作 `vue` 实例和 `store` 的，但是他们都仅支持 `import` 导入, 这样我 `util` 里封装的函数就被迫以只能通过参数的形式传递 `vue` 实例和 `store`
:::

## 解决思路
我们将 `npm` 包编译成 `cjs` 和 `mjs` 各一份，用户在 `import` 时，就返回 `mjs` 文件，如果是使用 `require`, 就返回 `cjs` 文件 ，这样在不同的场景就可以灵活使用了

## 目录说明
拿我其中一个 `@muyi086/var-type` 的包举例, 这是项目目录结构

![varType_tree](/Images/Node/让你的npmPackage同时支持cjs和mjs/varType_tree.png "varType_tree")

1. `lib`目录存放核心代码, 后续用 `esbuild` 将 `index.ts` 文件编译成 `cjs` 和 `mjs` 两份
1. `package.json` 和 `.npmignore` 分别存放项目配置和忽略文件
1. `readme.md` 保存文档说明，`LICENSE` 保存开源协议

## 实现
其中最重要的是 `package.json` 和 `esbuild` 编译的配置

1. `package.json` 我们增加如下代码, 这样我们通过 `require` 和 `import` 就会导入不同的文件

    ``` json [package.json]
    {
      "main": "./lib/index.min.cjs",
      "module": "./lib/index.min.mjs",
      "exports": {
        ".": {
          "require": "./lib/index.min.cjs",
          "import": "./lib/index.min.mjs"
        }
      }
    }
    ```

1. `esbuild` 编译 `index.ts` 成 `cjs` 和 `mjs` 两份

具体代码如下

::: code-group
```ts [index.ts]
/**
 * @Description: js变量类型判断
 * @Author: MuYi086
 * @Email: 1258947325@qq.com
 * @Blog: https://github.com/MuYi086/blog
 * @Date: 2021/04/11 12:30
 */
class VarType {
  private typeList: string[]
  private static _instance: VarType | null = null
  constructor() {  
    this.typeList = ['Null', 'Undefined', 'Object', 'Array', 'ArrayBuffer', 'String', 'Number', 'Boolean', 'Function', 'RegExp', 'Date', 'FormData', 'File', 'Blob', 'URLSearchParams', 'Set', 'WeakSet', 'Map', 'WeakMap']
    this.init()
  }
  static get instance(): VarType {  
    if (!VarType._instance) {
      VarType._instance = new VarType()
    }
    return VarType._instance
  }
  /**
   * 判断变量类型
   * @param {string} value
   * @returns lowercase string
   */
  private type (value: any): string {
    const s = Object.prototype.toString.call(value)
    return s.match(/\[object (.*?)\]/)[1].toLowerCase()
  }

  /**
   * 增加判断类型数据方法
   */
  private init(): void {
    const self = this
    this.typeList.forEach((t: string) => {
      Object.defineProperty(VarType.prototype, `is${t}`, {
        value: function (o: any) {
          return self.type(o) === t.toLowerCase()
        },
        writable: true,
        configurable: true
      })
    })
  }
  /**
   * isBuffer
   * @param {any} val
   * @returns boolean
   */
  static isBuffer(val: any): boolean {  
    return val !== null && (VarType as any).isUndefined(val) && val.constructor !== null && (VarType as any).isUndefined(val.constructor) && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val)
  }

  /**
   * isStream
   * @param {any} val
   * @returns boolean
   */
  static isStream(val: any): boolean {  
    return (VarType as any).isObject(val) && (VarType as any).isFunction(val.pipe)
  }

  /**
   * proxy对象有俩个特性: reactive, readonly
   * @param {*} val
   * @returns boolean
   */
  // isProxy (val) {
  //   function shouldBeCloneable (o) {
  //     const type = typeof o
  //     return (
  //       o?.constructor === ({}).constructor ||
  //       type === 'undefined' ||
  //       o === null ||
  //       type === 'boolean' ||
  //       type === 'number' ||
  //       type === 'string' ||
  //       o instanceof Date ||
  //       o instanceof RegExp ||
  //       o instanceof Blob ||
  //       o instanceof File ||
  //       o instanceof FileList ||
  //       o instanceof ArrayBuffer ||
  //       o instanceof ImageData ||
  //       o instanceof ImageBitmap ||
  //       o instanceof Array ||
  //       o instanceof Map ||
  //       o instanceof Set
  //     )
  //   }
  //   function isCloneable (val) {
  //     try {
  //       postMessage(val, '*')
  //     } catch (error) {
  //       // 错误码25表示不能被clone
  //       if (error?.code === 25) return false
  //     }
  //     return true
  //   }
  //   const _shouldBeCloneable = shouldBeCloneable(val)
  //   const _isCloneable = isCloneable(val)
  //   return _shouldBeCloneable && !_isCloneable
  // }
}
// 使用 varType["isNull"](null)等
export const varType = VarType.instance
```

```package.json [package.json]
{
  "name": "@muyi086/var-type",
  "version": "1.0.5",
  "description": "JS variable type checking",
  "main": "./lib/index.min.cjs", // [!code focus]
  "module": "./lib/index.min.mjs", // [!code focus]
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "exports": { // [!code focus]
    ".": { // [!code focus]
      "require": "./lib/index.min.cjs", // [!code focus]
      "import": "./lib/index.min.mjs" // [!code focus]
    } // [!code focus]
  },
  "repository": {
    "type": "git",
    "url": "git+ssh://git@github.com/MuYi086/npm_package.git"
  },
  "keywords": [
    "typeof",
    "variable",
    "JavaScript",
    "type",
    "var",
    "checking"
  ],
  "author": "MuYi086",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/MuYi086/npm_package/issues"
  },
  "homepage": "https://github.com/MuYi086/npm_package#readme"
}
```

```js [esbuild.js]
const { build } = require('esbuild')
const path = require('path')
const chalk = require('chalk')

/**
 * 执行build命令
 * @param {*} inputFilePath 入口文件
 * @param {*} outputPath 输出文件
 * @param {*} format 格式: esm, cjs
 * @param {*} platform 运行平台: node, browser, neutral
 * @param {*} minify // 压缩代码
 * @param {*} bundle // 打包成单个文件
 * @returns promise
 */
const excuteBuild = (inputFilePath, outputPath, format = 'cjs', platform = 'neutral', minify = true, bundle = true) => {
  return build({
    entryPoints: [path.resolve(inputFilePath)],
    outfile: path.resolve(outputPath),
    format,
    platform: platform,
    minify,
    bundle,
  })
}

/**
 * 编译脚本
 */
const compileScript = async () => {
  const varTypeInputFilePath = 'var-type/lib/index.ts'
  const varTypeOutputCjsPath = 'var-type/lib/index.min.cjs'
  const varTypeOutputMjsPath = 'var-type/lib/index.min.mjs'
  try {
    console.log(chalk.blue('-------------------------编译/var-type----------------------'))
    await excuteBuild(varTypeInputFilePath, varTypeOutputCjsPath, 'cjs')
    await excuteBuild(varTypeInputFilePath, varTypeOutputMjsPath, 'esm')
    console.log(chalk.green('编译完成,全部成功!'))
  } catch (e) {
    console.error(chalk.red('编译失败', e))
    process.exit(1)
  }
}

compileScript()
```
:::

## 最后
将 `package` 到 `npmjs` 后，我们就可以通过包名下载使用了

``` shell
# 发布包
npm publish --access=public
# 安装包
npm install @muyi086/var-type
```

```js
// require
const { varType } = require('@muyi086/var-type')
// import
import { varType } from '@muyi086/var-type'
```


## 参考
1. [一文搞懂 cjs 和 mjs 如何相互使用](https://juejin.cn/post/7210003299109683258)
1. [发布一个 ESM 和 CJS 并存的 package](https://juejin.cn/post/7037386586899611684)