## ES6常用特性

#### 默认值参数
1. 参数在函数内不能用let或const再次声明
    ```JS
    function test(x = 5) {
      let x = 1 // 报错
      const x = 2 // 报错
    }
    ```
1. 使用参数默认值时,函数不能有同名参数

    ```JS
    // 报错 Duplicate parameter name
    function test(x, x, y = 1) {
      ...
    }
    ```
1. 入参为undefined或不传值会使用函数默认值;入参未''或null会使用传入的参数值

    ```JS
    function test(num = 1) {
      console.log((typeof num) + ', num的值为: ' + num)
    }
    test() // number, num的值为: 1
    test(undefined) // number, num的值为: 1
    test('') // string, num的值为: 
    test(null) // object, num的值为: null
    ```
1. 位置在前的默认参数可用于后面的默认参数
    ```JS
    function test(name, height, msg = name + ' height is ' + height) {
      return [name, height, msg]
    }
    test('ougege', 'nihao') // ["ougege", "nihao", "ougege height is nihao"]
    test('ougege', 'nihao', 'hello world') // ["ougege", "nihao", "hello world"]
    ```

1. 默认值参数应当放在函数末尾,否则函数调用入参不能省略,会报错
    ```JS
    function test(x, y = 5, z) {
      return [x, y, z]
    }
    test(1, , 2) // 报错
    ```

1. 有默认值,函数的length属性将返回没有指定默认值的参数个数.如果默认参数不是尾部参数,那么length属性也不在计入后面的参数.
    ```JS
    (function (a) {}).length // 1
    (function (a = 5) {}).length // 0
    (function (a, b = 1, c) {}).length // 1
    ```

#### 变量声明:let和const
let声明变量,const声明常量,俩者都为块级作用域,仅在最近的一个块中有效;const声明的对象内所包含的值是可以被修改的,即对象指向的地址不变.
```JS
const student = {name: '小明'}

student.name = '小王' // 成功修改
student = {name: '小王'} // 报错
```

#### 模板字符串
在ES6以前,字符串模板常用+号进行字符串拼接,在ES6里使用反引号(`)表示普通字符串,同时可以插入变量
```JS
let name = 'ougege'
let age = 26
let str1 = '名字: ' + name + ', 今年' + age + '岁'
let str2 = `名字: ${name}, 今年${age}岁`
console.log(str1)
console.log(str2)
```

#### 标签模板字面量
把目标字符串中的数值格式化为美元,示例如下:
```JS
function format (strings, ...values) {
  // rudece俩俩一组, 类比"见缝插针"
  return strings.reduce((x, y, idx) => {
    if (idx > 0) {
      let prev = values[idx - 1]
      if (typeof prev === 'number') {
        x += `$${prev.toFixed(2)}`
      } else {
        x += prev
      }
    }
    return x + y
  }, '')
}

let item = '橙子'
let price = 3.5554
let text = format`这个${item}的价格是${price}`
console.log(text) // 这个橙子的价格是$3.56
```

#### 箭头函数
```JS
let fn = () => alert('hello world') // 没有参数的话括号不能省略
let fn = (a, b) => a // 多个参数括号不能省略
let fn = a => a // 一个参数括号可以省略

// 有多条语句，大括号不能省略,并且需要加return
let fn = a => {
  a += 1
  return a
}
// 只有一条语句,大括号可以省略
let fn = a => alert('hello world')
// 只有一条语句,且是返回值，可以省略return
let fn = a => a

// 由于大括号被解释成代码,如果返回值是对象,必须在对象外加括号,否则报错
let fn = id => ({name: 'ougege'})

// 高级用法
let fn = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b +c
fn() // 6

let fn = (func, b) => (c) => func(c - b) // 函数柯里化: 二参作为一参返回函数的入参 
```

#### 扩展运算符
```JS
// 拆解成字符串
let arr = [1, 2]
console.log(...arr) // 1 2

// 数组合并
let arr1 = [1, 2]
let arr2 = [3, 4]
let arr3 = [...arr1, ...arr2]
console.log(arr3) // [1, 2, 3, 4]

// 数组拆解
let [x, ...y] = [1, 2, 3, 4]
console.log(y) // [2, 3, 4]

// 字符串拆解
let xy = [...'abc']
console.log(xy) // ['a', 'b', 'c']
```

#### rest参数
rest参数和一个变量名搭配使用,生成一个数组
```JS
// 获取函数多余的参数
function test (a, b, ...params) {
  console.log(params)
}
test(1, 2, 3, 4)

// rest参数只能是最后一个参数
function test(a, ...params, c) {
  console.log('内部执行了') // 报错
}

// rest和arguments区别
function test(...a) {
  console.log(arguments)
  console.log(a)
}
test(111)
// 对比发现rest参数是一个数组
// arguments对象包含了所有实参
```

#### for of遍历
在ES5 中我们常用for in 或者forEach遍历,但是在最新的ES6，引入了新的for of,用来遍历属性值.
区别如下：
```JS
let testArr = ['黄金', '白银', '原油', '比特币']

// 用for循环
for (let i = 0; i < testArr.length; i++) {
  console.log(testArr[i])
}

// 用数组的forEach方法：缺点是不能break
testArr.forEach(item => {
  console.log(item)
})

// for in 循环会打印出属性
testArr.attr = 'ougege 的blog'
for (let idx in testArr) {
  console.log(testArr[idx])
}

// for of 遍历属性
for (let test of testArr) {
  console.log(test)
}

// for of 终止循环
for (let test of testArr) {
  if (test == '白银') {
    break
  }
  console.log(test) // 黄金
}
```

#### 对象和数组解构
对象解构
```JS
// 利用对象字面量解构
let test = {
  name: 'ougege',
  age: 26
}
let {name, age} = test
console.log(name, age) // ougege 26

// 解构赋值不存在的属性时,会被赋值为undefined
let {height} = test
console.log(height) // undefined

// 嵌套对象解构
let test = {
  type: '贵金属',
  name: ['黄金', '白银'],
  gold: {
    price: 353.0
  },
  silver: {
    price: 4566.0
  }
}

let {gold: {price}} = test
console.log(price) // 353.0
```

数组解构
```JS
let product = ['黄金', '白银', '原油']
let [gold, silver] = product
console.log(gold, silver)

// 嵌套数组解构
let product = [['黄金', '白银'], '原油']
let [preciousMetal, soil] = product
console.log(preciousMetal, soil)

// rest解构(必须写在最后)
let product = ['原油', '黄金', '白银', ]
let [soil, ...preciousMetal] = product
console.log(preciousMetal, soil)
```

#### super关键字
```JS
// 在对象上使用super
let parent = {
  doPrint () {
    console.log('我是父亲')
  }
}
let child = {
  doPrint () {
    super.doPrint()
    console.log('我是后代')
  }
}
Object.setPrototypeOf(child, parent)
child.doPrint()

// 在类上使用super
class Parent {
  constructor (x, y) {
    this.x = x
    this.y = y
  }
  customSplit () {
    return [...this.y]
  }
}
class Child extends Parent {
  constructor (x, y) {
    super(x, y)
  }
  customSplit () {
    return [...this.x]
  }
  task1 () {
    return super.customSplit()
  }
  task2 () {
    return this.customSplit()
  }
}
let test = new Child('hello', 'world')
test.task1()
test.task2()

// super在静态方法之中指向父类,在普通方法指向父类的原型对象
class Parent {
  static test (msg) {
    console.log('static', msg)
  }
  test (msg) {
    console.log('instance', msg)
  }
}
class Child extends Parent {
  static test (msg) {
    super.test(msg)
  }
  test (msg) {
    super.test(msg)
  }
}
Child.test(1) // static 1
let child = new Child()
child.test(2) // instance 2
```

#### Promise
专门有总结过一篇关于Promise的使用
[Promise介绍和使用](./Promise介绍和使用.md)

#### Generator函数
```JS
// 多个返回值状态,调用next()返回
let test = function* () {
  yield 1
  yield 2
  yield 3
}
let k = test()
console.log(k.next()) // {value: 1, done: false}
console.log(k.next()) // {value: 2, done: false}
console.log(k.next()) // {value: 3, done: false}
console.log(k.next()) // {value: undefined, done: true}

// 遍历普通对象
let obj = {
  name: 'ougege',
  age: 26
}
// 拥有Symbol.iterator属性就能使用for...of与...运算符
obj[Symbol.iterator] = function* () {
  for (let key in obj) {
    yield obj[key]
  }
}
for (let value of obj) {
  console.log(value)
}
console.log([...obj])

// 同步赋值操作
let res = 0
function ajaxMy (method, url, param, varibal) {
  setTimeout(function () {
    let response = res++
    varibal.next(response)
  }, 300)
}
let k
let tell = function* () {
  let a = yield ajaxMy('get', 'www.baidu.com', 10, k)
  console.log(a) // 0
  let b = yield ajaxMy('get', 'www.baidu.com', a, k)
  console.log(b) // 1
  let c = yield ajaxMy('get', 'www.baidu.com', b, k)
  console.log(c) // 2
  let d = yield ajaxMy('get', 'www.baidu.com', c, k)
  console.log(d) // 3
}
let k = tell()
k.next()

// 实现状态机
let state = function* () {
  while (1) {
    yield 'show'
    yield 'hide'
  }
}
let displayClass = state()
console.log(displayClass.next().value) // show
console.log(displayClass.next().value) // hide
console.log(displayClass.next().value) // show
console.log(displayClass.next().value) // hide

// 实现轮询函数
let requestSingFn = function* () {
  yield new Promise(function(resolve, reject) {
    setTimeout(function () {
      resolve({code: 304, data: {username: 'ougege'}})
    }, 300)
  })
}
let requestFn = function () {
  let req = requestSignFn()
  let stat = req.next()
  stat.value.then(function (response) {
    if (response.code != 200) {
      setTimeout(function () {
        console.log('重新发送请求')
        requestFn()
      }, 1000)
    } else {
      console.log(response.data)
    }
  })
}
requestFn()
```

#### class类
```JS
// 在ES5中通过构造函数生成实例对象
function test (x, y) {
  this.x = x
  this.y = y
}
test.prototype.toString = function () {
  return this.x + ':' + this.y
}
let testObj = new test(name, ougege)

// 在ES6里使用class写法
class test {
  constructor (x, y) {
    this.x = x
    this.y = y
  }
  toString () {
    return this.x + ':' + this.y
  }
}

// class的所有方法都定义在prototype上面
class B {}
let b = new B()
b.constructor === B.prototype.constructor // true

// 立即执行class
let person = new class {
  constructor (name) {
    this.name = name
  }
  sayName () {
    console.log(this.name)
  }
}('ougege')
person.sayName()

// 类里的方法名采用表达式
let a = 'toString'
class Test {
  constructor (x, y) {
    this.x = x
    this.y = y
  }
  [a]() {
    return this.x + this.y
  }
}
let b = new Test(10, 20)
console.log(b.toString())

// 取值函数get和存值函数set
class MyClassRoom {
  constructor (number) {
    this.number = number
  }
  get newnumber () {
    return this.number
  }
  set newnumber (value) {
    this.number += value
  }
}
let classRoom = new MyClassRoom(60)
classRoom.newnumber = 30
console.log(classRoom.newnumber)
classRoom.newnumber = 20
console.log(classRoom.newnumber)

// class只能在外部定义自身静态属性
class Test {}
Test.a = 1
console.log(Test.a)

// 实例不会继承静态方法
class Test {
  constructor (number) {
    this.number = 60
  }
  // 静态方法的this指向类,而不是实例
  static getVal_01 () {
    return this.number
  }
  static getVal_02 () {
    return 90
  }
}
console.log(Test.getVal_01())
Test.number = 60
console.log(Test.getVal_01())

let test = new Test()
console.log(test.getVal_01())

// 与上不同，子类可以继承静态方法
class Parent {
  static doPrint () {
    console.log('ougege')
  }
}
class Child extends Parent {}
Child.doPrint()
```

#### export 和 import
```JS
// export 输出模块
let a = 1
let b = 'web'
let c = function (n) { return n }
export {a, b, c}

// import 引入模块
import {a, b, c} from './test.js'
console.log(a, b, c(5)) // 1 web 5


// as的用法
let a = 1
let b = 'web'
let c = function (n) { return n }
export {
  a as aa,
  b as bb,
  c as cc
}

import {aa, bb, cc} from './test.js'
console.log(a, b, c(5)) // 1 web 5

// import as 用法
let a = 1
let b = 'web'
let c = function (n) { return n }
export {a, b, c}

import * as test from './test'
console.log(test.a, test.b, test.c(5))

// export default 只用一次, import 可以为该匿名函数指定任意名字
export default function (n) {
  return n
}

import test from './test.js'
console.log(test(10))
```


#### 参考
1. [ES6 - 函数默认参数与rest参数](https://www.jianshu.com/p/9078fdffd810)
1. [ES6 - 模板字符串](https://www.jianshu.com/p/07e9c5ccce74)
1. [ES6扫盲：标签模板字面量](http://www.imooc.com/article/76123)
1. [ES6 箭头函数](https://www.cnblogs.com/huancheng/p/9447764.html)
1. [ES6-Rest参数和扩展运算符](https://www.jianshu.com/p/9a2a2d0098d3)
1. [ES6 函数默认参数与rest参数](https://www.jianshu.com/p/9078fdffd810)
1. [ES6 for of](https://www.jianshu.com/p/f75c23acd54f)
1. [《深入理解ES6》——对象解构和数组解构](https://blog.csdn.net/DFF1993/article/details/82951227)
1. [js中的super的使用](http://www.fly63.com/article/detial/4207)
1. [ES6中Generator函数的用法](https://www.jianshu.com/p/dc311b566fce)
1. [ES6原生Class知识介绍](https://www.jianshu.com/p/2255d41d8e8b)
1. [ES6模块化操作](https://www.cnblogs.com/model-zachary/p/7230669.html?utm_source=itdadao&utm_medium=referral)
1. [必须掌握的ES6新特性](https://www.cnblogs.com/Double-Zhang/p/8259662.html)
1. [ES6中常用的10个新特性讲解](https://www.jianshu.com/p/ac1787f6c50f)