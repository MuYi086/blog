---
tags:
  - JS
---
# es常用片段

## switch case 优化
::: code-group
```js [原代码]
function doAction(action) {
    switch (action) {
        case 'hack':
            return 'hack'
        case 'slach':
            return 'slach'
        case 'run':
            return 'run'
        default:
            throw new Error('Invalid action.')
    }
}
```
```js [优化后]
function doAction(action) {
    var actions = {
        'hack': () => {
            return 'hack'
        },
        'slach': () => {
            return 'slach'
        },
        'run': () => {
            return 'run'
        }
    }
    if (typeof actions[action] !== 'function') {
        throw new Error('Invalid action.')
    }
    return actions[action]()
}
```
:::

## typeof 优化
::: code-group
```js [原代码]
let type = function (value) {
    let s = typeof(value)
    return s
}
```
```js [优化后]
let type = (value) => {
    let s = Object.prototype.toString.call(value)
    return s.match(/\[object (.*?)\]/)[1].toLowerCase()
}
// 增加判断类型数据方法
['Null', 'Undefined', 'Object', 'Array', 'String', 'Number', 'Boolean', 'Function', 'RegExp'].forEach((t) => {
  type['is' + t] = (o) => {
    return type(o) === t.toLowerCase()
  }
})
```
:::

## enumerable 遍历属性
```js
let obj = {}
Object.definedProperty(obj, 'x', {
    value: 123,
    enumerable: false
})

obj.x // 123

for (var key in obj) {
    // for...in 循环包括继承的属性
    console.log(key)
}
// undefined

// Object.keys方法不包括继承的属性
Object.keys(obj) // []
// JSON.stringify会排除enumerable为false的属性
JSON.stringify(obj) // "{}"
```

## 对象拷贝
```js
// 浅拷贝指的是拷贝对象的引用
// 深拷贝
let extend = (to, from) => {
    for (let property in from) {
        if (!from.hasOwnProperty(property)) continue
        Object.defineProperty(
            to,
            property,
            Object.getOwnPropertyDescriptor(from, property)
        )
    }
    return to
}
extend({}, { get a() { return 1 } })
// { get a() { return 1 } }
```