# 优秀js库moment

## 介绍
在工作场景中，我们经常需要处理时间格式，尤其在写 `h5` 时，需要考虑到 `ios` 和 `安卓` 兼容性( `ios` 不支持 `yyyy-MM-dd` 格式)，以往我们的解决方式是自定义一个 `formatDate` 方法,现在有了 `moment` ,更方便了

## 以往的解决方式
```js
class Type {
  constructor (value) {
    this.typeList = ['Null', 'Undefined', 'Object', 'Array', 'String', 'Number', 'Boolean', 'Function', 'RegExp', 'Date']
    this.init()
  }
  type (value) {
    let s = Object.prototype.toString.call(value)
    return s.match(/\[object (.*?)\]/)[1].toLowerCase()
  }
  // 增加判断类型数据方法
  init () {
    this.typeList.forEach((t) => {
      this['is' + t] = (o) => {
        return this.type(o) === t.toLowerCase()
      }
    })
  }
}

let type = new Type()

function formatDate (dateIn, fmt) {
  if (!fmt) return false
  let newDate = type['isDate'](dateIn) ? dateIn : new Date(dateIn)
  let o = {
    'y+': newDate.getFullYear(), // 年份
    'M+': addZero(newDate.getMonth() + 1), // 月份
    'd+': addZero(newDate.getDate()), // 某一天
    'h+': addZero(newDate.getHours()), // 小时
    'm+': addZero(newDate.getMinutes()), // 分钟
    's+': addZero(newDate.getSeconds()) // 秒
  }
  for (let i in o) {
    if (new RegExp('(' + i + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, o[i])
    }
  }
  return fmt
}

function addZero (e) {
  return Number(e) < 10 ? `0${e}` : e
}
```

## moment常用方法
引入 `moment` 并初始化
```js
const moment = require('moment')
// 要获取当前的日期和时间，只需调用不带参数的 moment() 即可
var now = moment()
console.log(now)
```

1. 时间字符串格式化

    ```js
    // 支持的 ISO 8601 字符串
    var day = moment('2020-08-24')
    console.log(day)
    ```

1. 格式化令牌

    ```js
    var day = moment('12-25-1995', 'MM-DD-YYYY')
    console.log(day)
    // 从 2.3.0 版本开始，可以为最后一个参数指定一个布尔值，以使 Moment 使用严格的解析。
    moment('2012-05-25', 'YYYY-MM-DD', true).isValid()
    ```

    年份、月份、日期的令牌
    输入|示例|描述
    --|:--:|--:
    YYYY|2014|4 或 2 位数字的年份|
    YY|14|2 位数字的年份|
    Y|-25|带有任意数字和符号的年份|
    Q|1..4|年份的季度。将月份设置为季度的第一个月|
    M MM|1..12|月份数字|
    MMM MMMM|Jan..December|语言环境中的月份名称，由 moment.locale() 设置|
    D DD|1..31|月的某天|
    Do|1st..31st|月的某天，带序数|
    DDD DDDD|1..365|年的某天|
    X|1410715640.579|Unix 时间戳|
    x|1410715640579|Unix 毫秒时间戳|

    周年、星期、工作日的令牌
    输入|示例|描述
    --|:--:|--:
    gggg|2014|语言环境的 4 位数字的周年|
    gg|14|语言环境的 2 位数字的周年|
    w ww|1..53|语言环境的年的第几周|
    e|0..6|	语言环境的星期几|
    ddd dddd|Mon...Sunday|语言环境的星期几的名称，由 moment.locale() 设置|
    GGGG|2014|ISO 的 4 位数字的周年|
    GG|14|ISO 的 2 位数字的周年|
    W WW|1..53|ISO 的年的第几周|
    E|1..7|ISO 的星期几|

    小时、分钟、秒钟、毫秒、偏移量的令牌
    输入|示例|描述
    --|:--:|--:
    H HH|0..23|小时（24 小时制）|
    h hh|1..12|小时（使用 a A 的 12 小时制）|
    k kk|1..24|小时（从 1 到 24 的 24 小时制）|
    a A|am pm|上午或下午（单一字符 a p 也被视为有效）|
    m mm|0..59|分钟|
    s ss|0..59|秒钟|
    S SS SSS|0..999|带分钟的秒钟|
    Z ZZ|+12:00|从 UTC 偏移为 +-HH:mm、+-HHmm 或 Z|

1. 格式试探

    ```js
    // 如果不知道输入字符串的确切格式，但是知道它可能是多种格式之一，则可以使用格式数组
    // 使用最后一种格式
    moment('29-06-1995', ['MM-DD-YYYY', 'DD-MM', 'DD-MM-YYYY'])
    // 使用第一种格式
    moment('05-06-1995', ["MM-DD-YYYY", "DD-MM-YYYY"])
    ```

1. `moment(Number)`

    ```js
    // 可以通过传入一个整数值来创建 moment，该整数值表示自 Unix 纪元（1970 年 1 月 1 日 12AM UTC）以来的毫秒数
    var day = moment(1318781876406)
    console.log(day)
    ```

1. `unix()`

    ```js
    // 从unix,自 Unix 纪元以来的秒数时间戳创建moment
    var day = moment.unix(1318781876)
    // 此函数在本地模式中创建了moment对象,如果需要UTC,则可以随后调用.utc()
    var day = moment.unix(1318781876).utc()
    ```

1. `moment(Date)`

    ```js
    // 可以使用预先存在的原生JS Date对象来创建moment
    var day = new Date(2011, 9, 16)
    var dayWrapper = moment(day)
    ```

1. `moment(Number[])`

    ```js
    // 可以使用数值的数组(映射传给new Date()的参数)来创建moment
    moment([2010, 1, 14, 15, 25, 50, 125]) // February 14th, 3:25:50.125 PM
    // 年份之后的任何职都是可选的，并且默认认为可能的最小值
    moment([2010])
    moment([2010, 6])
    moment([2010, 6, 10])
    // 如果数组代表的日期不存在,则moment#isValid将会返回false
    moment([2010, 12]).isValid()
    moment([2010, 10, 31]).isValid()
    moment([2010, 1, 29]).isValid()
    ```
1. 克隆

    ```js
    // 可以调用moment#clone克隆moment
    var a = moment([2012])
    var b = a.clone()
    a.year(2000)
    b.year()
    ```


## 参考
1. [官方仓库](https://github.com/moment/moment)
1. [Moment.js 文档](http://momentjs.cn/docs/)