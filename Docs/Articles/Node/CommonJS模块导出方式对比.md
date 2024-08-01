---
tags:
  - Node
---
# CommonJS模块导出方式对比
在 `CommonJS` 模块系统中，主要有两种导出方式：`module.exports` 和 `exports` 。这两种方式都用于将代码中的变量、函数或对象导出，以便在其他模块中使用

## module.exports
`module.exports` 是 `CommonJS` 模块系统的基本导出方式，可以将单个值（如一个函数、对象或类）导出。通过这种方式，导出时可以指定任何有效的 `JavaScript` 值，模块的默认导出就是由 `module.exports` 指定的

用法示例:
```js
// math.js
function add(a, b) {
  return a + b
}

module.exports = add // 导出一个函数
```

导入示例:
```js
// main.js
const add = require('./math.js')
console.log(add(2, 3)) // 5
```

## exports
`exports` 是 `module.exports` 的一个简写，用于方便地导出多个属性。`exports` 是一个对象，最常用的方式是将多个变量、函数或对象作为属性添加到 `exports` 对象中进行导出

用法示例:
```js
// math.js
exports.add = function(a, b) {
  return a + b
}

exports.sub = function(a, b) {
  return a - b
}

// 也可以直接使用 module.exports 导出一个对象
module.exports.multiply = function(a, b) {
  return a * b
}
```

导入示例:
```js
// main.js
const math = require('./math.js')

console.log(math.add(2, 3)) // 5
console.log(math.sub(5, 2)) // 3  
console.log(math.multiply(2, 3)) // 6
```

## 总结
1. 导出的形式:
    * `module.exports` 可以导出单个值（例如函数、类或对象），被视为模块的默认出口
    * `exports` 通常用于导出多个属性和函数（即一个对象的多个方法）

1. 混合使用:
    * 不建议在同一个模块中同时使用 `module.exports` 和 `exports` 。如果你将 `exports` 赋值为另一个对象，那么它将不再引用 `module.exports` ，因此这些赋值将不会生效

    ```js
    // math.js  
    exports = {
      add: function(a, b) {
        return a + b
      }
    }
    // 注意：此处只会在内部创建一个新对象，重写了 exports，而没有改变 module.exports
    ```

1. 可读性:
    * 使用 `module.exports` 导出单个值时，代码意图更加明确，因为它表明这是一个默认导出
    * 使用 `exports` 导出多个属性时，结构会更清晰，便于理解