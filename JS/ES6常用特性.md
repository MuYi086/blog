## ES6常用特性

#### 默认值参数
1. 参数在函数内不能用let或const再次声明
    ```
    function test(x = 5) {
      let x = 1 // 报错
      const x = 2 // 报错
    }
    ```
1. 使用参数默认值时,函数不能有同名参数

    ```
    // 报错 Duplicate parameter name
    function test(x, x, y = 1) {
      ...
    }
    ```
1. 入参为undefined或不传值会使用函数默认值;入参未''或null会使用传入的参数值

    ```
    function test(num = 1) {
      console.log((typeof num) + ', num的值为: ' + num)
    }
    test() // number, num的值为: 1
    test(undefined) // number, num的值为: 1
    test('') // string, num的值为: 
    test(null) // object, num的值为: null
    ```
1. 位置在前的默认参数可用于后面的默认参数
    ```
    function test(name, height, msg = name + ' height is ' + height) {
      return [name, height, msg]
    }
    test('ougege', 'nihao') // ["ougege", "nihao", "ougege height is nihao"]
    test('ougege', 'nihao', 'hello world') // ["ougege", "nihao", "hello world"]
    ```

1. 默认值参数应当放在函数末尾,否则函数调用入参不能省略,会报错
    ```
    function test(x, y = 5, z) {
      return [x, y, z]
    }
    test(1, , 2) // 报错
    ```

1. 有默认值,函数的length属性将返回没有指定默认值的参数个数.如果默认参数不是尾部参数,那么length属性也不在计入后面的参数.
    ```
    (function (a) {}).length // 1
    (function (a = 5) {}).length // 0
    (function (a, b = 1, c) {}).length // 1
    ```

#### 变量声明:let和const
let声明变量,const声明常量,俩者都为块级作用域,仅在最近的一个块中有效;const声明的对象内所包含的值是可以被修改的,即对象指向的地址不变.
```
const student = {name: '小明'}

student.name = '小王' // 成功修改
student = {name: '小王'} // 报错
```

#### 模板字符串
在ES6以前,字符串模板常用+号进行字符串拼接,在ES6里使用反引号(`)表示普通字符串,同时可以插入变量
```
let name = 'ougege'
let age = 26
let str1 = '名字: ' + name + ', 今年' + age + '岁'
let str2 = `名字: ${name}, 今年${age}岁`
console.log(str1)
console.log(str2)
```

#### 标签模板字面量
把目标字符串中的数值格式化为美元,示例如下:
```
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
```
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
```
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
```
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

#### 




#### 参考
1. [ES6 - 函数默认参数与rest参数](https://www.jianshu.com/p/9078fdffd810)
1. [ES6 - 模板字符串](https://www.jianshu.com/p/07e9c5ccce74)
1. [ES6扫盲：标签模板字面量](http://www.imooc.com/article/76123)
1. [ES6 箭头函数](https://www.cnblogs.com/huancheng/p/9447764.html)
1. [ES6-Rest参数和扩展运算符](https://www.jianshu.com/p/9a2a2d0098d3)
1. [ES6 函数默认参数与rest参数](https://www.jianshu.com/p/9078fdffd810)
1. [必须掌握的ES6新特性](https://www.cnblogs.com/Double-Zhang/p/8259662.html)
1. [ES6中常用的10个新特性讲解](https://www.jianshu.com/p/ac1787f6c50f)