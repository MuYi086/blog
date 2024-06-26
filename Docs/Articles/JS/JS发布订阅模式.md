# JS发布订阅模式

## 介绍
在 `vue` 开发中，经常会用到事件传递,例如 `eventBus` ,我们可以使用 `on` 和 `emit` 方法去触发需要的事件.

## 定义
发布-订阅模式其实是一种对象间一对多的依赖关系，当一个对象的状态发送改变时，所有依赖于它的对象都将得到状态改变的通知。订阅者（ `Subscriber` ）把自己想订阅的事件注册（ `Subscribe` ）到调度中心（ `Event Channel` ），当发布者（ `Publisher` ）发布该事件（ `Publish Event `）到调度中心，也就是该事件触发时，由调度中心统一调度（ `Fire Event` ）订阅者注册到调度中心的处理代码。
例如以下在 `vue` 中的使用
```js
// 封装成工具库eventBus
import Vue from 'vue'
let bus = new Vue()
Vue.prototype.$eventBus = bus
export default bus

// 页面使用
import Bus from './commom/eventBus'
Bus.$emit('test', null)
Bus.$on('test', this.doSomeThing)
```

## 实现
以上是 `vue` 集成了功能.同样的,我们可以用 `es6` 实现.
::: warning 思路
1. 创建一个对象
2. 在该对象上创建一个缓存列表(调度中心)
3. `on` 方法用来把函数 `fn`都加到缓存列表中(订阅在注册事件到调度中心)
4. `emit` 方法取到 `arguments` 里第一个当做 `event` ,根据 `event` 值去执行对应缓存列表中的函数(发布者发布事件到调度中心,调度中心处理代码)
5. `off` 方法可以根据 `event` 值取消订阅(取消订阅)
:::

```js
// 代码
let eventEmitter = {
  // 缓存列表
  list: {},
  // 订阅
  on (event, fn) {
    // 如果没有event值,就给event创建个缓存列表
    // 如果有对应的event值,把fn添加到对应event的缓存列表里
    (this.list[event] || (this.list[event] = [])).push(fn)
    return this
  },
  // 监听一次
  once (event, fn) {
    // 先绑定,调用后删除
    function on () {
      this.off(event, on)
      fn.apply(this, arguments)
    }
    on.fn = fn
    this.on(event, on)
    return this
  },
  // 取消订阅
  off (event, fn) {
    let fns = this.list[event]
    // 如果缓存列表中没有对应的fn,返回false
    if (!fns) return false
    if (!fn) {
      // 如果fn不存在,就会将event值对应缓存列表中的fn都清空
      fns && (fns.length = 0)
    } else {
      // 如果有fn, 遍历缓存列表,看看传入的fn与那个函数相同,如果相同就直接从缓存列表中删除
      let cb
      let cbLen = fns.length
      for (let i = 0; i < cbLen; i++) {
        cb = fns[i]
        if (cb === fn || cb.fn === fn) {
          fns.splice(i, 1)
          break
        }
      }
    }
    return this
  },
  // 发布
  emit () {
    // 第一个参数对应的event值,直接用数组的shift方法取出
    let event = [].shift.call(arguments)
    let fns = [...this.list[event]]
    // 如果缓存列表里没有fn就返回false
    if (!fns || fns.length === 0) {
      return false
    }
    // 遍历event值对应的缓存列表,依次执行fn
    fns.forEach(fn => {
      fn.apply(this, arguments)
    })
    return this
  }
}

// 测试
function user1 (content) {
  console.log('用户1订阅了: ', content)
}
function user2 (content) {
  console.log('用户2订阅了: ', content)
}
function user3 (content) {
  console.log('用户3订阅了: ', content)
}
function user4 (content) {
  console.log('用户4订阅了: ', content)
}

// 订阅
eventEmitter.on('article1', user1)
eventEmitter.on('article1', user2)
eventEmitter.on('article1', user3)

// 取消user2方法的订阅
eventEmitter.off('article1', user2)
eventEmitter.once('article2', user4)

// 发布
eventEmitter.emit('article1', 'JS 发布-订阅模式')
eventEmitter.emit('article1', 'JS 发布-订阅模式')
eventEmitter.emit('article2', 'JS 观察者模式')
eventEmitter.emit('article2', 'JS 观察者模式')
```

## 参考
1. [JavaScript 发布-订阅模式](https://segmentfault.com/a/1190000019260857)
