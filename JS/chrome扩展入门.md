## chrome扩展入门

#### 说明
一个最简单的插件应该包含几个类型的文件，第一个是 `manifest.json` ，这个是对整个插件的说明，一个 `icon.png` 是插件图标，一个 `popup.html` 用来显示插件，一般来说还需要一个 `popup.js` 和一个 `popup.css` ,这就是最最基本的文件组成了。

1. 先看看manifest.json文件
    ```JSON
    {
        "manifest_version": 2,
        "name": "一个简单的时钟效果",
        "description": "一个简单的时钟效果",
        "version": "0.0.1",
        "browser_action": {
            "default_icon": "icon.png",
            "default_title": "我的个人时钟",
            "default_popup": "popup.html"
        }
    }
    ```

    简单说明一下，`"manifest_version":2` 这是说明版本，这是固定格式, `"name"` 用来说明插件的名称, `"description"` 是对插件的描述, `"version"` 是插件的发行版本, `"browser_action"` 是对插件具体的说明。


1. 接下来是 `popup.html`

    ```HTML
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>我的时钟</title>
            <link rel="stylesheet" type="text/css" href="myClock.css" />
        </head>
        <body>
            <div id="clockDemo"></div>
            <script src="myClock.js"></script>
        </body>
    </html>
    ```


1. 样式表 `myClock.css`

    ```CSS
    *{margin: 0; padding: 0;}
    body{width:200px;height:100px;}
    div{line-height: 100px;font-size:40px;text-align: center;}
    ```

1. 最后是 `myClock.js`

    ```JS
    function myClock (e) {
        var today = new Date()
        var h = today.getHours()
        var m = today.getMinutes()
        var s = today.getSeconds()
        m = addZero(m)
        s = addZero(s)
        e.innerHTML = h + ':' + m + ':' + s
        setTimeout(function () {
            myClock(e)
        }, 1000)
    }
    function addZero (num) {
        return num >=10 ? num : '0' + num
    }
    var clockDemo = document.getElementById('clockDemo')
    myClock(clockDemo)
    ```



#### chrome下载(国内)
1. [chrome插件网](http://chromecj.com/list/)
1. [chrome插件](http://www.cnplugins.com/)

#### 扩展推荐
1. [鼠标手势CrxMouse](http://chromecj.com/productivity/2014-07/27.html)
1. [标签背景图 Momentum](http://chromecj.com/accessibility/2017-05/746.html)
1. [Octotree 码农必备](http://chromecj.com/web-development/2017-10/840.html)
1. [广告屏蔽 adsafe](http://chromecj.com/fun/2017-07/778.html)


#### 参考
1. [chrome中文翻译(需翻墙)](https://crxdoc-zh.appspot.com/extensions/getstarted)
1. [chrome 扩展官方(需翻墙)](https://developer.chrome.com/extensions/manifest)
1. [chrome App官方(需翻墙)](https://developer.chrome.com/apps/manifest)
1. [360扩展](http://open.chrome.360.cn/extension_dev/overview.html)