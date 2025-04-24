---
tags:
  - Node
---
# 编译成cjs和mjs的思路解析
这里拿我写的一个常用包 `@muyi086/var-type` 做说明

## 原始代码
```js
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

## 编译cjs
以下是美化后的代码
```js
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

::: warning 注意
使用 `esbuild` 编译 `cjs` 代码为 `cjs`，可以发现基本只是改变了变量名，减少代码体积
:::

## 编译mjs
以下是美化后的代码
```js
var n = (r, t) = >() = >(t || r((t = {
	exports: {}
}).exports, t), t.exports);
var o = n((u, s) = >{
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
				this["is" + t] = i = >this.type(i) === t.toLowerCase()
			})
		}
		isBuffer(t) {
			return t !== null && !this.isUndefined(t) && t.constructor !== null && !this.isUndefined(t.constructor) && this.isFunction(t.constructor.isBuffer) && t.constructor.isBuffer(t)
		}
		isStream(t) {
			return this.isObject(t) && this.isFunction(t.pipe)
		}
	};
	s.exports = new e
});
export
default o();
```

::: warning 注意
使用 `esbuild` 编译 `cjs` 代码为 `mjs`，可以发现定义了一个复杂的表达式，内含2层箭头函数。

```js
var n = (r, t) => () => (t || r((t = { exports: {} }).exports, t), t.exports);
```
:::
