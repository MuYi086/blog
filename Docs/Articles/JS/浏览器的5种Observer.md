---
tags:
  - JS
---
# 浏览器的5种Observer

## IntersectionObserver
监听一个元素和可视区域相交部分的比例，然后再可视比例达到某个阀值的时候触发回调

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #box1,
        #box2 {
            width: 100px;
            height: 100px;
            background: blue;
            color: #fff;
            position: relative;
        }

        #box1 {
            top: 500px;
        }

        #box2 {
            top: 800px;
        }
    </style>
</head>

<body>
    <div id="box1">BOX11</div>
    <div id="box2">BOX22</div>
    <script>
        // 监听一个元素和可视区域相交部分的比例，然后再可视比例达到某个阀值的时候触发回调
        const intersectionObserver = new IntersectionObserver(
            function (entries) {
                console.log('info')
                entries.forEach(item => {
                    console.log(item.target, item.intersectionRatio)
                })
            }, {
            threshold: [0.5, 1]
        }
        )
        intersectionObserver.observe(document.querySelector('#box1'))
        // intersectionObserver.observe(document.querySelector('#box2'))
    </script>
</body>

</html>
```


## MutationObserver
监听对元素的属性的修改、对它的子节点的增删改

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #box {
            width: 100px;
            height: 100px;
            background: blue;
            position: relative;
        }
    </style>
</head>
<body>
    <div id="box">
        <button>光</button>
    </div>
    <script>
        // 监听对元素的属性的修改、对它的子节点的增删改
        setTimeout(() => {
            box.style.background = 'pink'
        }, 2000)
        setTimeout(() => {
            const dom = document.createElement('button')
            dom.textContent = 'blog'
            box.appendChild(dom)
        }, 3000)
        setTimeout(() => {
            document.querySelectorAll('button')[0].remove()
        }, 5000)
        const mutationObserver = new MutationObserver((mutationsList) => {
            console.log(mutationsList)
        })
        mutationObserver.observe(box, {
            attributes: true,
            childList: true
        })
    </script>
</body>
</html>
```


## ResizeObserver
监听大小的改变,当 `width` 、`height` 被修改时会触发回调

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #box {
            width: 100px;
            height: 100px;
            background: blue;
        }
    </style>
</head>
<body>
    <div id="box"></div>
    <script>
        // 监听大小的改变,当width、height被修改时会触发回调
        const box = document.querySelector('#box')
        setTimeout(() => {
            box.style.width = '200px'
        }, 2000)
        const resizeObserver = new ResizeObserver(entries => {
            console.log('当前', entries)
        })
        resizeObserver.observe(box)
    </script>
</body>
</html>
```

## PerformanceObserver
用于监听记录 `performance` 数据的行为,一旦记录了就会触发回调
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button onclick="measureClick()">Measure</button>
    <img src="https://cloudneedle-tv.oss-cn-hangzhou.aliyuncs.com/hs_tv/hs_logo/hslogo.png" />
    <script>
        // 用于监听记录performance数据的行为,一旦记录了就会触发回调
        const performanceObserver = new PerformanceObserver(list => {
            list.getEntries().forEach(entry => {
                console.log(entry)
            })
        })
        performanceObserver.observe({entryTypes: ['resource', 'mark', 'measure']})
        // 用mark方法记录某个时间点
        performance.mark('registered-observer')
        function measureClick () {
            // 用measure方法记录某个时间段
            performance.measure('button clicked')
        }
    </script>
</body>
</html>
```

## ReportingObserver
监听过时的 `api` 、浏览器的一些干预行为的报告

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button>测试</button>
    <script>
        // 监听过时的api、浏览器的一些干预行为的报告
        const reportingObserver = new ReportingObserver((reports, observer) => {
            for (const report of reports) {
                // 上报
                console.log(report.body)
            }
        }, {types: ['intervention', 'deprecation']})
        reportingObserver.observe()
    </script>
</body>
</html>
```

## 参考
1. [IntersectionObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver)
1. [MutationObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver)
1. [ResizeObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/ResizeObserver)
1. [PerformanceObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/PerformanceObserver)
1. [ReportingObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/ReportingObserver)