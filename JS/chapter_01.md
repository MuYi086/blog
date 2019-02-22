### JS性能优化
##### 一、避免全局查找
优化脚本性能最重要的就是注意`全局查找`.使用全局变量和函数肯定比局部的开销更大,因为涉及到`作用域链`上的查找
```
function demo1 () {
    var imgs = document.getElementsByTagName('img')
    for (var i = 0, length = imgs.length; i< len; i++) {
        imgs[i].title = document.title + 'image' + i
    }
    var msg = document.getElementById('msg')
    msg.innerHTML = '更新完成'
}
```

这个函数包含了三个对于全局`document对象`的引用.如果在页面上有多个图片，那么for循环的document引用会被执行很多次,每次都要运行`作用域链`查找.我们创建一个指向`document对象`的局部变量，就可以通过限制一次全局查找来改进这个函数的性能
```
function demo1 () {
    var doc = document
    var imgs = doc.getElementsByTagName('img')
    for (var i = 0, len = imgs.length; i< len; i++) {
         imgs[i].title = doc.title + 'image' + i
    }
    var msg = doc.getElementById('msg')
    msg.innerHTML = '更新完成'
}
// 限制的函数只有一次全局查找,肯定更快
```

> 目前剧汇王朝项目使用`elementUI`,代码中几乎没有直接的`DOM`操作了,优化效果不大

##### 二、避免使用with语句
和函数类似,`with`语句会创建自己的作用域,因此会增加其中执行的代码的作用域链的长度
```
function demo2 () {
    with (document.body) {
        alert(tagName)
        innerHTML = 'demo2'
    }
}
```
由于额外的作用域链查找，在`with`语句中执行的代码肯定会比外面执行的代码要慢
```
function demo2 () {
    var body = document.body
    alert(body.tagName)
    body.innerHTML = 'demo2'
}
```
阅读体验比`with`更好，并且让你知道`tagName`和`innerHTML`属于哪个对象.同时将`document.body`存储在局部变量省去了额外的全局查找
> 剧汇王朝项目几乎没有使用`with`,优化效果不大

##### 三、避免不必要的属性查找
使用变量和数组要比访问对象上的属性更有效率,对象上的任何属性查找都要比访问变量或者数组花费更长时间,因为必须在原型链中对拥有该名称的属性进行一次搜索.属性查找越多，执行时间就越长
```
var query = window.location.href.substring(window.location.href.indexOf('?'))
```
在这段代码中，有6次属性查找,数点就可以,`window.location.href.substring`有3次,`window.location.href.indexOf`有3次,因此效率特别不好.一旦多次用到对象属性，应该将其存储在局部变量中
```
var url = window.location.href
var query = url.substring(url.indexOf('?'))
```
尽可能多的使用局部变量将属性查找替换为值查找

##### 四、优化迭代
1. **减值迭代**:大多数循环使用从0开始,增加到某个特定值.在很多情况下,从最大值开始,在循环中不断减值的迭代器更加高效
> 但是在我实验中,并没有发现倒序快,难道是`chrome V8`引擎优化过？

    ![循环](/images/js/chapter_01/forEach_01.png)
    ![循环](/images/js/chapter_01/forEach_02.png)
> 但是我发现俩个放一起执行,永远是后一个执行速度快!
    ![循环](/images/js/chapter_01/forEach_03.png)

2. **简化终止条件**:由于每次循环都会计算终止条件，所以必须保证他尽可能快，应该避免属性查找
3. **使用后测试循环**:最常用的`for循环`和`while循环`都是前测试循环,而`do-while`这种后测试循环,可以避免最初终止条件的运算，因此运行更快.
这一条测试也没有得到预期效果，发现同样是后面的函数执行快
    ![循环](/images/js/chapter_01/forEach_04.png)

4. **展开循环**:当循环的次数是确定的,消除循环并多次使用函数调用会更快
    ![循环](/images/js/chapter_01/forEach_05.png)

这个经过测试的确会快一些
> 我们剧汇王朝产品可以考虑是否采用`Duff`来循环,效果比较明显

如果对于循环中的迭代次数不能事先确定,可以考虑一种叫做`Duff`的技术.这个技术是`Tom Duff`命名的.最早在c语言中使用.基本概念是通过计算迭代的次数是否为8的倍数将一个循环展开为一系列语句

```
// 假设values.length >0
var times = Math.ceil(values.length / 8)
var startAt = values.length % 8
var i = 0
do {
    switch(startAt) {
        case 0: cal(i++)
        case 7: cal(i++)
        case 6: cal(i++)
        case 5: cal(i++)
        case 4: cal(i++)
        case 3: cal(i++)
        case 2: cal(i++)
        case 1: cal(i++)
    }
    startAt = 0
}  while (--times > 0)
```

`Duff`的实现是通过将values数组中元素个数除以8来计算出循环需要多次迭代的.然后向上取整来保证结果是整数.这个数量保存在startAt变量中,手册执行该循环时,会检查startAt变量有需要多少额外调用,例如,如果数组中有10个值,startAt则等于2,那么最开始的`cal()`则只会被调用2次,在接下来的循环中,startAt被重置为0,这样之后的每次循环都会调用8次`cal()`.展开循环可以提升大数据集的处理速度.
在2003年由`Andrew B.king`提出一个更快的`Duff`技术,将`do-while`循环分成2个单独的循环

```
var times = Math.floor(values.length / 8)
var leftover = values.length % 8
var i = 0

if (leftover > 0) {
    do {
         cal(i++)
     }  while (--leftover > 0)
}
do {
     cal(i++)
     cal(i++)
     cal(i++)
     cal(i++)
     cal(i++)
     cal(i++)
     cal(i++)
     cal(i++)
}  while (--times > 0)
```
在这个实现中,剩余的计算部分不会再实际循环中处理,而是在一个初始化循环中进行除以8的操作.当处理了额外的元素,继续执行每次调用8次`cal()`的主循环,这个方法几乎比原始的`Duff`实现快上40%。
> 结论:针对大数据集使用展开循环可以节省很多时间,但对于小数据集,额外的开销则可能得不偿失,它是要花更多的代码来完成同样的任务.

##### 五、避免双重解释
当使用`eval()`函数或者`Function`构造函数以及使用`setTimeout()`传一个字符串参数时都会发生双重解释
```
// 某些代码求值
eval("alert('测试一下')")

// 创建新函数
var sayHi = new Function("alert('测试一下下')")

// 设置超时
setTimeout("alert('测试一下下')", 500)
```

上面的例子中,都要解析包含了`JS`代码的字符串,这个操作是不能再初始的解析过程中完成的,因为代码是包含在字符串中的,也就是说在`JS`代码运行的同时必须新启动一个解析器来解析新的代码.实例化一个新的解析器有一定开销，所以这种代码要比直接解析慢得多
改进如下:
```
alert('测试一下')

 
var sayHi = function () {
    alert('测试一下下')
}

 
setTimeout(function () {
     alert('测试一下下')
}, 500)
```

> 换位思考？使用`vue`绑定表达式与函数哪个更优,比如`三元`?

其他:
    * **原生方法快**:只要有可能,尽可能使用原生方法而不是自己重写一个.原生方法是用`C/C++`之类的编译型语言写出来的,所以比`JS`快很多.`JS`复杂的数学运算可以使用`Math`对象
    * **Switch语句比if快**:如果有一系列复杂的`if-else`语句,可以转换成单个`switch`语句,还可以通过将`case`语句按照最不可能的顺序进行组织，来进一步优化`switch`语句
    * **位运算符较快**:当进行数学运算时，位运算操作要比任何布尔运算或者数学运算快.选择性的用位运算替换属性运算可以极大的提升复杂运算的性能.诸如取模,逻辑与和逻辑或都以考虑用位运算来替换

##### 六、最小化语句数
1. **多个变量声明**

    ```
    // 4个语句--浪费
    var count = 5
    var color = 'blue'
    var values = [1, 2, 3]
    var now = new Date()

    // 一个语句
    var count = 5, color = 'blue', values = [1, 2, 3], now = new Date()
    ```

1. **插入迭代值**

    ```
    var name = values[i]
    i++

    // 迭代值
    var name = values[i++]
    ```

    自增操作符是后缀操作符,i的值只有在语句其他部分结束之后才会增加

1. **使用数组和对象字面量**

    ```
    // 用4个语句创建和初始化数组==浪费
    values = new Array()
    values[0] = 123
    values[1] = 456
    values[2] = 789

    // 用4个语句创建和初始化对象==浪费
    var person = new Object()
    person.name = 'ougege'
    person.age = 26
    person.sayName = function () {
        alert(this.name)
    }
    ```

    转换成字面量的形式

    ```
    // 用一条语句创建和初始化数组
    var values = [123, 456, 789]

    // 用一条语句创建和初始化对象
    var person = {
        name : 'ougege',
        age : 26,
        sayName: function () {
        alert(this.name)
        }
    }
```

> 这里可以针对api调用的的参数提交和函数内部的计算,我们在写函数时，为了方便阅读,往往是哪里用哪里定义,其实可以使用`变量提升`和`一个语句`,选择语义Or性能?


##### 参考来源
1. [《JS高级程序设计–第三版》](http://www.ituring.com.cn/book/946/)