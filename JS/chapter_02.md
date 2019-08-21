### JS标准内置对象
[标准内置对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects)
#### 值属性
* Infinity:无穷大,初始值是Number.POSITIVE_INFINITY
* NaN: 不是一个数字,初始值是NaN,不等于自己
* undefined: 未被赋值
* null字面量: 对象值未设置,也可作为尚未创建的对象
```
  typeof null        // "object" (因为一些以前的原因而不是'null')
  typeof undefined   // "undefined"
  null === undefined // false
  null  == undefined // true
  null === null // true
  null == null // true
  !null //true
  isNaN(1 + null) // false
  isNaN(1 + undefined) // true
```
* globalThis: [实验功能](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/globalThis)


#### 函数属性
* eval(): 会将传入的字符串当做JS代码执行
```
console.log(eval('2 + 2'));
// expected output: 4

console.log(eval(new String('2 + 2')));
// expected output: 2 + 2

console.log(eval('2 + 2') === eval('4'));
// expected output: true

console.log(eval('2 + 2') === eval(new String('2 + 2')));
// expected output: false
```

* uneval(): [非标准](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/uneval)
* isFinite(): 判断传入值是否有限数值(参数是NaN，正无穷大或负无穷大,返回false,其他返回true)
* isNaN(): 判断值是否是NaN,0除以0返回NaN
```
isNaN(NaN);       // true
isNaN(undefined); // true
isNaN({});        // true
isNaN(true);      // false
isNaN(null);      // false
isNaN(37);        // false
isNaN("");        // false: 空字符串被转换成0
```
* parseFloat(value): 解析一个字符串并返回一个浮点数
* parseInt(string, radix): 参数(字符串,进制)  
* decodeURI(encodeURI): 解析编码过的URI
* decodeURIComponent(encodeURI): 解析编码过的部分URI
* encodeURI(URI):将提供的字符串编码为统一的资源标识符
* encodeURIComponent(str): 使用一到四个转义序列来表示字符串中的每个字符的UTF-8编码
* escape(): 已废弃
* unescape(): 已废弃

#### 基本对象
* Object
  1. Object.assign(target, source): 将所有可枚举属性的值从一个或多个源对象复制到目标对象
  ```
    // 复制一个对象
    const obj = {a: 1}
    const copy = Object.assign({}, obj)
    console.log(copy)
    // 深拷贝问题: 源对象的属性值是一个对象的引用，那么它也只指向那个引用
    let obj1 = { a: 0 , b: { c: 0}}; 
    let obj2 = Object.assign({}, obj1); 
    console.log(JSON.stringify(obj2)); // { a: 0, b: { c: 0}} 

    obj2.a = 2; 
    console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 0}} 
    console.log(JSON.stringify(obj2)); // { a: 2, b: { c: 0}}
 
    obj2.b.c = 3; 
    console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 3}} 
    console.log(JSON.stringify(obj2)); // { a: 2, b: { c: 3}} 

    // 深克隆
    obj1 = {a:0, b: {c: 0}}
    let obj3 = JSON.parse(JSON.stringify(obj1))
    obj1.a = 4;
    obj1.b.c = 4;
    console.log(JSON.stringify(obj3)); // {a: 0, b: {c: 0}}

    // 合并对象
    const o1 = {a: 1}
    const o2 = {b: 2}
    const o3 = {c: 3}
    const obj = Object.assign(o1, o2, o3)
    console.log(obj) // {a: 1, b: 2, c: 3}
    console.log(o1) // {a: 1, b: 2, c: 3} 目标对象自身也会改变

    // 合并具有相同属性的对象
    const o1 = {a: 1, b: 1, c: 1}
    const o2 = {b: 2, c: 2}
    const 03 = {c: 3}
    const obj = Object.assign({}, o1, o2, o3)
    console.log(obj)  // {a: 1, b: 2, c: 3}
    // 继承属性和不可枚举属性是不能拷贝的
    const obj = Object.create({foo: 1}, { // foo 是个继承属性
      bar: {
        value: 2 // bar是个不可枚举属性
      },
      baz: {
        value: 3,
        enumerable: true // baz是个自身可枚举属性
      }
    })
    const copy = Object.assign({}, obj)
    console.log(copy) // {baz: 3}
  ```
  2. Object.create(): 一个新对象,带着指定的原型对象和属性
  ```
    const person = {
      isHuman: false,
      printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
      }
    };

    const me = Object.create(person);

    me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
    me.isHuman = true; // inherited properties can be overwritten

    me.printIntroduction();
    // expected output: "My name is Matthew. Am I human? true"
  ```
  3. Object.defineProperty(obj, prop, descriptor): 被传递给函数的对象
  `configurable`:当值为true时，该属性描述符才能够被改变,同时该属性也能从对应的对象上被删除.默认为false
  `enumerable`:当值为true时,该属性才能够出现在对象的枚举属性中,默认为false
  `value`: 变量值,默认undefined
  `writable`: 当值为true时,value才能被赋值运算符改变,默认为false
  `get`: 给属性提供getter的方法,如果没有getter则为undefined,默认undefined
  `set`: 给属性提供setter的方法,如果没有setter则为undefined,属性值修改时,触发执行该方法,默认undefined
