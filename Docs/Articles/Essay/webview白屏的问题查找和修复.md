# webview白屏的问题查找和修复

## 介绍
有运营反应，有部分用户访问我们的小程序后，打开 `webview` 页面，显示白屏，删除小程序重新进入也未解决问题。

## 初步判断
这里有俩个关键点

1. 仅部分用户出现白屏
1. 以前是能正常访问

初步判断是代码执行的兼容性问题

## 顺藤摸瓜
刚巧团队内部有个同事的 `iphone 7` 能复现这个问题, 于是我们首先进行了 `charles` 抓包, 分别拿到了正常手机和白屏手机的请求, 对比发现俩者从服务端拿到的资源请求包括文件名 `hash` 是一致的。

![webview_charles_1](/Images/Essay/webview白屏的问题查找和修复/webview_charles_1.png "webview_charles_1")

到了这里我们基本可以确定不同设备上拿到的代码是一致的，出问题的是兼容性，在不同机型上渲染执行可能出错导致的白屏。

前面提到用户以前是能正常访问 `webview` 的，也就是在某一段时间我们的代码编译后导致的白屏.

于是我接下来的重点放到了查找问题代码，通过切换月份分支，从 `5,6,7` 月分别调试缩小到7月范围，然后按照 `commit` 减半调试缩小范围，确定了包含问题代码的 `commit` 记录

![webview_commit_1](/Images/Essay/webview白屏的问题查找和修复/webview_commit_1.png "webview_commit_1")

在多次注释更新的包后，最终确定了问题定位出在 `package.json` 升级的新包 `@muyi086/var-type` 上.

![webview_commit_2](/Images/Essay/webview白屏的问题查找和修复/webview_commit_2.png "webview_commit_2")

## 出问题的代码分析
1. 这是老版本的代码，使用 `js` 实现

    ::: code-group
    ```js [index.js 源码]
    /**
     * @Description: js变量类型判断
      * @Author: MuYi086
      * @Email: 1258947325@qq.com
      * @Blog: https://github.com/MuYi086/blog
      * @Date: 2021/04/11 12:30
      */
    class VarType {
      constructor () {
        this.typeList = ['Null', 'Undefined', 'Object', 'Array', 'ArrayBuffer', 'String', 'Number', 'Boolean', 'Function', 'RegExp', 'Date', 'FormData', 'File', 'Blob', 'URLSearchParams', 'Set', 'WeakSet', 'Map', 'WeakMap']
        this.init()
      }

      /**
       * 判断变量类型
      * @param {string} value
      * @returns lowercase string
      */
      type (value) {
        const s = Object.prototype.toString.call(value)
        return s.match(/\[object (.*?)\]/)[1].toLowerCase()
      }

      /**
       * 增加判断类型数据方法
      */
      init () {
        this.typeList.forEach((t) => {
          this['is' + t] = (o) => {
            return this.type(o) === t.toLowerCase()
          }
        })
      }

      /**
       * isBuffer
      * @param {any} val
      * @returns boolean
      */
      isBuffer (val) {
        return val !== null && !this.isUndefined(val) && val.constructor !== null && !this.isUndefined(val.constructor) && this.isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val)
      }

      /**
       * isStream
      * @param {any} val
      * @returns boolean
      */
      isStream (val) {
        return this.isObject(val) && this.isFunction(val.pipe)
      }
    }
    // 使用 varType["isNull"](null)等
    module.exports = new VarType()
    ```
    ```js [index.min.cjs 美化后]
    var e = class {
      constructor() {
        this.typeList = ["Null", "Undefined", "Object", "Array", "ArrayBuffer", "String", "Number", "Boolean", "Function", "RegExp", "Date", "FormData", "File", "Blob", "URLSearchParams", "Set", "WeakSet", "Map", "WeakMap"],
        this.init()
      }
      type(t) {
        return Object.prototype.toString.call(t).match(/\[object (.*?)\]/)[1].toLowerCase()
      }
      init() {
        this.typeList.forEach(t = >{
          this["is" + t] = r = >this.type(r) === t.toLowerCase()
        })
      }
      isBuffer(t) {
        return t !== null && !this.isUndefined(t) && t.constructor !== null && !this.isUndefined(t.constructor) && this.isFunction(t.constructor.isBuffer) && t.constructor.isBuffer(t)
      }
      isStream(t) {
        return this.isObject(t) && this.isFunction(t.pipe)
      }
    };
    module.exports = new e;
    ```
    :::

1. 这是升级后新版本的代码，使用 `ts` 实现

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
    }
    // 使用 varType["isNull"](null)等
    export const varType = VarType.instance
    ```
    ```js [inedex.min.cjs 美化后]
    var s = Object.defineProperty;
    var o = Object.getOwnPropertyDescriptor;
    var c = Object.getOwnPropertyNames;
    var u = Object.prototype.hasOwnProperty;
    var p = (e, t) = >{
      for (var n in t) s(e, n, {
        get: t[n],
        enumerable: !0
      })
    },
    y = (e, t, n, i) = >{
      if (t && typeof t == "object" || typeof t == "function") for (let r of c(t)) ! u.call(e, r) && r !== n && s(e, r, {
        get: () = >t[r],
        enumerable: !(i = o(t, r)) || i.enumerable
      });
      return e
    };
    var f = e = >y(s({},
    "__esModule", {
      value: !0
    }), e);
    var b = {};
    p(b, {
      varType: () = >l
    });
    module.exports = f(b);
    var a = class e {
      typeList;
      static _instance = null;
      constructor() {
        this.typeList = ["Null", "Undefined", "Object", "Array", "ArrayBuffer", "String", "Number", "Boolean", "Function", "RegExp", "Date", "FormData", "File", "Blob", "URLSearchParams", "Set", "WeakSet", "Map", "WeakMap"],
        this.init()
      }
      static get instance() {
        return e._instance || (e._instance = new e),
        e._instance
      }
      type(t) {
        return Object.prototype.toString.call(t).match(/\[object (.*?)\]/)[1].toLowerCase()
      }
      init() {
        let t = this;
        this.typeList.forEach(n = >{
          Object.defineProperty(e.prototype, `is$ {
            n
          }`, {
            value: function(i) {
              return t.type(i) === n.toLowerCase()
            },
            writable: !0,
            configurable: !0
          })
        })
      }
      static isBuffer(t) {
        return t !== null && e.isUndefined(t) && t.constructor !== null && e.isUndefined(t.constructor) && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t)
      }
      static isStream(t) {
        return e.isObject(t) && e.isFunction(t.pipe)
      }
    },
    l = a.instance;
    ```
    :::

对比发现 `ts` 的代码实现使用了单例模式,并且内部使用了`defineProperty`, `getOwnPropertyDescriptor` 等属性，这也是导致某些机型上不执行代码导致白屏的原因, 因为在编译时没有提供 `polyfill` 支持旧版浏览器。

## 解决方案
由于线上 `bug` 需要紧急修复，所以当前先简单处理，发布一个新的 `npm` 包 `js` 版本替换原先的 `ts` 版本, 然后紧急发版。以后有时间会优化代码，在 `ts` 版本上尝试修复编译导致的问题。




