## js链式调用原理

#### 背景

平时写 `js` ,大家经常会写到诸如 `$(ele).find(child).remove()` 之类的链式调用, 那么这些链式调用是怎么实现的呢？

#### 原理分析

以 `jQuery` 为例,比如 `a.b(m).c(n)` , 其实是采用了 `return this` 的方式

#### 对象链式调用

举例如下:
```JS
let obj = {value: 0}

// 方式一:直接给对象属性添加方法
obj.add = function (a) {
  this.value += a
  return this
}
obj.reduce = function (b) {
  this.value -= b
  return this
}

// 方式二: 给对象的构造函数的原型添加方法
obj.constructor.prototype.add = function (a) {
  this.value += a
  return this
}
obj.constructor.prototype.reduce = function (b) {
  this.value -= b
  return this
}

// 然后可以链式调用obj的方法了
obj.add(3).reduce(1)

// 俩者的区别在于:前者是自有属性,后者的方法继承于原型链上
```

#### 方法链式调用
原理是将函数添加在方法的原型上,然后实例化成对象,通过对象来调用

举例如下:
```JS
function FuncTest(num) {
  this.value = num || 0
}
FuncTest.prototype.add = function (a) {
  this.value += a
  return this
}
FuncTest.prototype.reduce = function (b) {
  this.value -= b
  return this
}
let obj = new FuncTest()
obj.add(4).reduce(2)
```

#### 发散思考

`add(2)(4)(6)` 这种累加如何实现?

```JS
// 第一步:针对add(2)，很容易实现
function add (num) {
  cal = num || 0
  return cal
}

// 第二步:就变成cal(4)(6)
// 这里就会发现要想能继续执行，所以返回值cal应该是个方法
function add (num) {
  cal = num || 0
  func = function (i) {}
  return func
}

// 第三步: 就变成func(6), 所以func的返回值也是一个方法
// 而且这里可以想到应该是返回了自己
function add (num) {
  cal = num || 0
  func = function (i) {
    return func
  }
  return func
}

// 第四步: 我们需要的是返回一个确定值，而不是一个方法
// 所以,可以采用valueOf操作cal值，最后return cal给 func
function add (num) {
  cal = num || 0
  func = function (i) {
    cal += i
    return func
  }
  func.valueOf = function () {
    return cal
  }
  return func
}
// 运行
add(2)(4)(6)
```

#### 总结
1. 链式代码很优雅
1. 遇见复杂问题, 不要怕, 一步步处理, 化繁为简

#### 参考
1. [帮你彻底搞懂JS中的prototype、__proto__与constructor（图解）](https://blog.csdn.net/cc18868876837/article/details/81211729)
1. [玩一把JS的链式调用](https://www.cnblogs.com/tarol/p/5336666.html)
1. [javaScript链式调用原理以及加法实现](https://segmentfault.com/a/1190000008724608)