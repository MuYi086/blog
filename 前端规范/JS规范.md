## JS规范

#### 语言规范
1. 类型
    * 基本类型
      * 字符串
      * 数值
      * 布尔类型
      * `null`
      * `undefined`

        ```JS
        const foo = 1
        let bar = foo

        bar = 9

        console.log(foo, bar) // 1, 9
        ```
    * 复杂类型
      * `object`
      * `array`
      * `function`

        ```JS
        const foo = [1, 2, 3]
        const bar = foo

        bar[0] = 9

        console.log(foo[0], bar[0]) // 9, 9
        ```


1. 引用
    `const` 和 `let` 都是块级作用域，`var` 是函数级作用域

    ```JS
    // 对所有引用都使用 const，不要使用 var
    const a = 1
    const b = 2

    // 如果引用是可变动的，则使用 let
    let count = 1
    if (count < 10) {
      count += 1
    }
    ```     

1. 对象

    ```JS
    // 请使用字面量值创建对象
    const a = {}

    // 别使用保留字作为对象的键值，这样在 IE8 下不会运行
    const a = {
      defaults: {},
      common: {}
    }

    // 请使用对象方法的简写方式
    const job = 'FrontEnd'
    const item = {
      job
    }

    // 对象属性值的简写方式要和声明式的方式分组
    const job = 'FrontEnd'
    const department = 'JDC'

    const item = {
      job,
      department,
      sex: 'male',
      age: 25
    }
    ```

1. 数组

    ```JS
    // 请使用字面量值创建数组
    const items = []

    // 向数组中添加元素时，请使用 push 方法
    items.push('test')

    // 使用拓展运算符 ... 复制数组
    itemsCopy = [...items]

    // 使用数组的 map 等方法时，请使用 return 声明，如果是单一声明语句的情况，可省略 return
    [1, 2, 3].map(x => {
      const y = x + 1
      return x * y
    })

    [1, 2, 3].map(x => x + 1)

    const flat = {}
    [[0, 1], [2, 3], [4, 5]].reduce((memo, item, index) => {
      const flatten = memo.concat(item)
      flat[index] = flatten
      return flatten
    })

    inbox.filter((msg) => {
      const { subject, author } = msg
      if (subject === 'Mockingbird') {
        return author === 'Harper Lee'
      }

      return false
    })
    ```

1. 解构赋值

    ```JS
    // 当需要使用对象的多个属性时，请使用解构赋值
    function getFullName (user) {
      const { firstName, lastName } = user

      return `${firstName} ${lastName}`
    }

    function getFullName ({ firstName, lastName }) {
      return `${firstName} ${lastName}`
    }

    // 当需要使用数组的多个值时，请同样使用解构赋值
    const arr = [1, 2, 3, 4]
    const [first, second] = arr

    // 函数需要回传多个值时，请使用对象的解构，而不是数组的解构
    // 如果是数组解构，那么在调用时就需要考虑数据的顺序
    const [top, xx, xxx, left] = doSomething()
    function doSomething () {
      return { top, right, bottom, left }
    }

    // 此时不需要考虑数据的顺序
    const { top, left } = doSomething()
    ```

1. 字符串

    ```JS
    // 字符串统一使用单引号的形式 ''
    const department = 'JDC'

    // 字符串太长的时候，请不要使用字符串连接符换行 \，而是使用 +
    const str = '凹凸实验室 凹凸实验室 凹凸实验室' +
    '凹凸实验室 凹凸实验室 凹凸实验室' +
    '凹凸实验室 凹凸实验室'

    // 程序化生成字符串时，请使用模板字符串
    const test = 'test'
    const str = `ab${test}`
    ```

1. 函数

    ```JS
    // 请使用函数声明，而不是函数表达式 ''
    function foo () {
      // do something
    }

    // 不要在非函数代码块中声明函数
    let test
    if (isUse) {
      test = () => {
        // do something
      }
    }

    // 不要使用 arguments，可以选择使用 ...
    // arguments 只是一个类数组，而 ... 是一个真正的数组
    function test (...args) {
      return args.join('')
    }

    // 不要更改函数参数的值
    function test (opts = {}) {
      // ...
    }
    ```

1. 原型

    ```JS
    // 使用 class，避免直接操作 prototype
    class Queue {
      constructor (contents = []) {
        this._queue = [...contents]
      }

      pop () {
        const value = this._queue[0]
        this._queue.splice(0, 1)
        return value
      }
    }
    ```

1. 模块

    ```JS
    // 使用标准的 ES6 模块语法 import 和 export
    import Util from './util'
    export default Util

    // 更优
    import { Util } from './util'
    export default Util

    // 不要使用 import 的通配符 *，这样可以确保你只有一个默认的 export
    import Util from './util'
    ```

1. 迭代器

    ```JS
    // 不要使用 iterators
    const numbers = [1, 2, 3, 4, 5]
    let sum = 0
    numbers.forEach(num => sum += num)

    // 更优
    const sum = numbers.reduce((total, num) => total + num, 0)
    ```

1. 对象属性

    ```JS
    // 使用 . 来访问对象属性
    const joke = {
      name: 'haha',
      age: 28
    }

    const name = joke.name
    ```

1. 变量声明

    ```JS
    // 请使用 const、let 关键字,避免全局命名空间的污染
    const demo = new Demo()

    // 将所有的 const 和 let 分组
    const b
    const d
    let a
    let c
    let e
    ```

1. Hoisting

    ```JS
    // var 存在变量提升的情况，即 var 声明会被提升至该作用域的顶部，但是他们的赋值并不会
    // 匿名函数的变量名会提升，但函数内容不会
    function example () {
      console.log(anonymous)  // => undefined

      anonymous()

      var anonymous = function () {
        console.log('test')
      }
    }

    // 命名的函数表达式的变量名会被提升，但函数名和函数函数内容并不会
    function example() {
      console.log(named)  // => undefined

      named()   // => TypeError named is not a function

      superPower()  // => ReferenceError superPower is not defined

      var named = function superPower () {
        console.log('Flying')
      }
    }

    function example() {
      console.log(named)  // => undefined

      named()   // => TypeError named is not a function

      var named = function named () {
        console.log('named')
      }
    }
    ```

1. 分号

    ```JS
    // 我们遵循 Standard 的规范，不使用分号
    const test = 'good'
    (() => {
      const str = 'hahaha'
    })()
    ```

1. 标准特性
  为了代码的可移植性和兼容性，我们应该最大化的使用标准方法，例如优先使用 `string.charAt(3)` 而不是 `string[3]`

1. `for-in` 循环
  推荐使用 `for in` 语法，但是在对对象进行操作时，容易忘了检测 `hasOwnProperty(key)` ，所以我们启用了 `ESLint` 的 `guard-for-in` 选项
  
    > 对数组进行 for in 的时候，顺序是不固定的


#### 代码规范
1. 单行代码块

    ```JS
    // 在单行代码块中使用空格
    function foo () { return true }
    if (foo) { bar = 0 }
    ```

1. 大括号风格
  在编程过程中，大括号风格与缩进风格紧密联系，用来描述大括号相对代码块位置的方法有很多。在 `JavaScript` 中，主要有三种风格

    ```JS
    // One True Brace Style: 推荐使用
    if (foo) {
      bar()
    } else {
      baz()
    }

    // Stroustrup
    if (foo) {
      bar()
    }
    else {
      baz()
    }

    // Allman
    if (foo)
    {
      bar()
    }
    else
    {
      baz()
    }
    ```

1. 变量命名
  当命名变量时，主流分为驼峰式命名（ `variableName` ）和下划线命名（ `variable_name` ）两大阵营
    > 团队约定使用驼峰式命名

1. 逗号空格
  逗号前后的空格可以提高代码的可读性，团队约定在逗号后面使用空格，逗号前面不加空格
    ```JS
    var foo = 1, bar = 2
    ```

1. 逗号风格
  逗号分隔列表时，在 `JavaScript` 中主要有两种逗号风格：
    * 标准风格，逗号放置在当前行的末尾(推荐使用)
    * 逗号前置风格，逗号放置在下一行的开始位置

    ```JS
    var foo = 1,
    bar = 2

    var foo = ['name',
                'age']
    ```

1. 计算属性的空格

    ```JS
    // 约定在对象的计算属性内，禁止使用空格
    obj['foo']
    ```

1. 函数调用

    ```JS
    // 约定在函数调用时，禁止使用空格
    fn()
    ```

1. 对象字面量的键值缩进

    ```JS
    // 约定对象字面量的键和值之间不能存在空格，且要求对象字面量的冒号和值之间存在一个空格
    var obj = { 'foo': 'haha' }
    ```

1. 构造函数首字母大写

    ```JS
    // 约定构造函数的首字母要大小，以此来区分构造函数和普通函数
    var fooItem = new Foo()
    ```

1. 构造函数的参数

    ```JS
    // 约定通过 new 调用构造函数时,使用圆括号
    var person = new Person()
    ```

1. 链式调用
  链式调用如果放在同一行，往往会造成代码的可读性差，但有些时候，短的链式调用并不会影响美观。所以本规范约定一行最多只能有四个链式调用，超过就要求换行

1. 空行
  空白行对于分离代码逻辑有帮助，但过多的空行会占据屏幕的空间，影响可读性。团队约定最大连续空行数为 2

    ```JS
    var a = 1


    var b = 2
    ```

1. 变量声明

    ```JS
    // 约定在声明变量时，一个声明只能有一个变量
    var a
    var b
    var c
    ```

1. 代码块空格

    ```JS
    // 约定代码块前要添加空格
    if (a) {
      b()
    }

    function a () {}
    ```

1. 函数声明的空格

    ```JS
    // 约定函数括号前要加空格
    function func (x) {
      // ...
    }
    ```

1. 操作符的空格

    ```JS
    // 约定操作符前后都需要添加空格
    var sum = 1 + 2
    ``` 

#### 参考
1. [JS规范](https://guide.aotu.io/docs/js/language.html 'JS规范')
1. [W3C](https://www.w3.org/ 'W3C')
1. [Apple Developer](https://developer.apple.com/ 'Apple Developer')
