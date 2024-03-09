## ES5新特性

#### 严格模式
```JS
// 在JS文件或者函数的顶部添加'use strict' 启用严格模式
'use strict';
function do () {
  console.log(111)
}

function test () {
  'use strict';
  console.log(111)
}
```

#### json
```JS
// parse:反序列化成json对象
let str = '{"width": 34, "height": 23}'
let jsonObj = JSON.parse(str)

// stringify:序列化成json字符串
let testObj = {width: 34, height: 23}
let jsonStr = JSON.stringify(testObj)
```

#### Array
```JS
// indexOf:返回指定元素的下标,没有返回-1
let arr = [1, 2, 3, 4]
console.log(arr.indexOf(3)) // 2

// forEach:遍历数组,不能break
arr.forEach(item => {
  console.log(item)
})

// map:遍历数组,返回值操作后组成新数组返回,原数组不变
let arr2 = arr.map(function (val) {
  return val * val
})
console.log(arr2) // [1, 4, 9, 16]

// every:所有回调都返回true,才返回true,遇到false就break,返回false
arr.every(function (val) {return val > 3}) // false

// some:有一个回调返回true就break并返回true，否则返回false
arr.some(function (val) {return val > 3}) // true

// filter:新数组返回回调为true的值,原数组不变
arr.filter(function (val) {return val > 3}) // [4]

// reduce:累加器,原数组不变
arr.reduce(function (total, currentVal) {return total + currentVal}) // 10
```

#### Object
```JS
// 添加或更改对象属性
let test = {name: 'MuYi086'}
Object.defineProperty(test, 'age', {value: 26})
console.log(Object) // {name: "MuYi086", age: 26}

// 添加或更改多个对象属性
let props = {'age': {value: 26, writable: true}, 'weight': {value: 70, writable: false}}
Object.defineProperties(test, props)
console.log(test) // {name: "MuYi086", age: 26, weight: 70}

// 用defineProperty实现双向绑定
// HTML
<input type="text" id="content" value="欧哥哥" />
<div id='t-in'></div>

// JS:新属性，不能是input已有的value
let input = document.getElementById('content')
let title = document.getElementById('t-in')
Object.defineProperty(input, 'val', {
  get: function () {
    return this.value
  },
  set: function (val) {
    this.value = val
    title.innerHTML = val
  }
})

input.val = 'MuYi086, 你好'

// 访问属性
let res = Object.getOwnPropertyDescriptor(test, 'name')
console.log(res) // {value: "MuYi086", writable: true, enumerable: true, configurable: true}

// 以数组返回所有属性
let test = {name: 'MuYi086', age: 26}
let res = Object.getOwnPropertyNames(test)
console.log(res) // ["name", "age"]

// 以数组返回所有可枚举的属性
let res = Object.keys(test)
console.log(res) // ["name", "age"]

// 访问原型
let res = Object.getPrototypeOf(test)
console.log(res)

// 阻止向对象添加属性
Object.preventExtensions(test)

// 判断对象是否可添加属性
console.log(Object.isExtensible(test))

// 密封:防止更改对象属性,不能delete,值可以变
Object.seal(test)

// 判断是否被密封
Object.isSealed(test)

// 冻结:类似密封，但更彻底,值也不能变更
Object.freeze(test)

// 判断是否被冻结
Object.isFrozen(test)
```

#### Function扩展
```JS
// Function.prototype.bind
function aa () {console.log(this.author)}
function bb (name) {this.author = name}
let test = new bb('MuYi086')
let showResult = aa.bind(test)
showResult()

// bind会把第一个实参作为当前this
// 第二参起，会依次传递给原始函数
function aa (age) {
  this.name = 'MuYi086'
  this.age = age
}
let obj = {}
let bb = aa.bind(obj, 26)
bb()
console.log(obj)
```
#### 参考
1. [ES5数组方法](https://www.imooc.com/article/72071?block_id=tuijian_wz)
1. [JavaScript ES5 对象方法](https://zixuephp.net/manual-javascript-703.html)
1. [ES5 之 Function扩展](https://blog.csdn.net/z_x_qiang/article/details/85728241)
1. [翻译：ECMAScript 5.1简介](https://www.zhangxinxu.com/wordpress/2012/01/introducing-ecmascript-5-1/)
1. [es5重要新特性梳理](https://my.oschina.net/tbd/blog/635103)