---
tags:
  - JS
---
# ESM模块导出方式对比

`ESM` 模块的导出方式主要有俩种，命名导出 `(named exports)` 和默认导出 `(default export)`

## 命名导出
命名导出允许将一个或多个变量、函数、类或对象导出。你可以在导入时选择具体想要导入的内容

用法示例:
```js
// module.js
export const pi = 3.14

export function add(a, b) {  
  return a + b
}  

export class Calculator {
  static multiply(a, b) {
    return a * b
  }
}
```

导入示例:
```js
// main.js
import { pi, add, Calculator } from './module.js'

console.log(pi) // 3.14
console.log(add(2, 3)) // 5
const calc = new Calculator()
console.log(Calculator.multiply(2, 3)) // 6
```

::: tip 优点
* 可以导出多个内容

* 导入时可选择所需的内容，比较灵活
:::

## 默认导出
默认导出用于导出一个主要的内容。一个模块只能有一个默认导出，但是可以与命名导出并存

用法示例:
```js
// person.js  
export default class Person {
  constructor(name) {
    this.name = name
  }
  greet() {
    console.log(`Hello, my name is ${this.name}`)
  }
}
```

导入示例:
```js
// main.js  
import Person from './person.js'

const person = new Person('Alice')
person.greet() // Hello, my name is Alice
```

::: tip 优点
* 语法简洁,适合导出单一的主要内容(类、函数、对象等)

* 导入时不需要花括号,可以使用任意名称
:::

## 混合导出（同时使用）

用法示例:
```js
// module.js
export const pi = 3.14

export function add(a, b) {
  return a + b
}

export default class Person {
  constructor(name) {
    this.name = name
  }
}
```

导入示例:
```js
// main.js  
import Person, { pi, add } from './module.js'

console.log(pi) // 3.14
console.log(add(2, 3)) // 5
const person = new Person('Bob')
console.log(person.name) // Bob
```

::: warning 注意
1. 数量
    * 命名导出: 一个模块可以有多个命名导出
    * 默认导出：一个模块只能有一个默认导出

1. 导入方式
    * 命名导出：使用花括号 `{}` 来导入具体的命名导出
    * 默认导出：不需要使用花括号，可以使用任何名字导入

1. 使用场景
    * 命名导出适合导出多个相关的功能或常量
    * 默认导出适合导出模块的主要功能或类，通常用在一个模块只有一个核心对象的情况下
:::
