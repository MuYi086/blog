## Promise介绍和使用

#### Promise状态
`Promise`对象代表一个异步操作，不受外界影响，它有三种状态:
1. pending(进行中)
1. resolved(完成)
1. rejected(失败)

#### Promise的优势
1. 解决回调地狱

    ```
    // 回调地狱
    async(1, function (value) {
      async(value, function (value) {
        async(value, function (value) {
          async(value, function (value) {
            ...
          })
        })
      })
    })
    ```
    使用`Promise`:

      ```
      // setTimeout 多余的参数会作为入参传递给第一个参数方法
      let firstAsync = function (input) {
        return new Promise(function (resolve, reject) {
          setTimeout(resolve, 500, input * input)
        })
      }
      let secondAsync = function (input) {
        return new Promise(function (resolve, reject) {
          setTimeout(resolve, 500, input + input)
        })
      }
      let start = new Promise(function (resolve, reject) {
        resolve(123)
      })
      start.then(firstAsync).then(secondAsync).then(function (res) {
        console.log('最终结果: ' + res)
      })
      ```

1. 进行错误捕获

    ```
    // 注意: reject入参需要是一个Error对象，否则报错
    function ajax(method, url, data) {
      let request = new XMLHttpRequest()
      return new Promise(function (resolve, reject) {
        request.onreadystatechange = function () {
          if (request.readyState === 4) {
            if (request.status === 200) {
              resolve(request.responseText)
            } else {
              reject(new Error(request.status))
            }
          }
        }
        request.open(method, url)
        request.send(data)
      })
    }

    let start = ajax('GET', '/api/test')
    start.then(function (res) {
      console.log(res)
    }).catch(function (error) {
      console.log(error)
    })
    ```

#### 其他用法
1. `Promise.all()`: 并行执行,所有异步操作完成后才执行回调
    ```
    let p1 = new Promise(function (resolve, reject) {
      setTimeout(resolve, 1000, '异步1')
    })
    let p2 = new Promise(function (resolve, reject) {
      setTimeout(resolve, 3000, '异步2')
    })
    Promise.all([p1, p2]).then(function (res) {
      console.log(res)
    })
    ```
1. `Promise.race()`: 仅获得先返回的结果，其余异步任会执行,但结果丢弃

    ```
    let p1 = new Promise(function (resolve, reject) {
      setTimeout(resolve, 1000, '异步1')
    })
    let p2 = new Promise(function (resolve, reject) {
      setTimeout(resolve, 3000, '异步2')
    })
    Promise.race([p1, p2]).then(function (res) {
      console.log(res)
    })
    ```

#### 参考
1. [Promise-廖雪峰](https://www.liaoxuefeng.com/wiki/1022910821149312/1023024413276544)
1. [js promise看这篇就够了](https://www.cnblogs.com/superSmile/p/8406037.html)
1. [JS - Promise使用详解](https://www.cnblogs.com/sweeeper/p/8442613.html)