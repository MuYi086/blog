# HTML规范

## 背景
参考凹凸实验室的规范,整理提炼出适合当前团队使用的前端规范.
旨在增强团队开发协作,提高代码质量和打造开发基石的编码规范.

## 代码规范
1. `DOCTYPE` 声明

    ::: tip DOCTYPE
    `HTML` 文件必须加上 `DOCTYPE` 声明，并统一使用 `HTML5` 的文档声明：
    :::
    ```html
    <!DOCTYPE html>
    ```

1. `LANG` 页面语言 

    ::: tip LANG
    推荐使用属性值 `cmn-Hans-CN`（简体, 中国大陆），但是考虑浏览器和操作系统的兼容性，目前仍然使用 `zh-CN` 属性值
    :::
    ```html
    <html lang="zh-CN">
    ```

1. `CHAESET`

    ::: tip CHAESET
    `HTML-5` 中默认的字符编码是 `UTF-8`
    请尽量统一写成标准的 `UTF-8` ，不要写成 `utf-8` 或 `utf8` 或 `UTF8`。根据 `IETF` 对`UTF-8` 的定义，其编码标准的写法是 `UTF-8` ；而 `UTF8` 或 `utf8` 的写法只是出现在某些编程系统中，如 `.NET framework` 的类 `System.Text.Encoding` 中的一个属性名就叫 `UTF8`
    :::
    ```html
    <meta charset="UTF-8">
    ```

1. 元素及标签闭合

    `HTML` 元素有5种:
    ::: info 空元素
    `area` 、`base` 、`br` 、`col` 、`command` 、`embed` 、`hr` 、`img` 、`input` 、`keygen` 、`link` 、`meta` 、`param` 、`source` 、`track` 、`wbr`
    :::
    ::: info 原始文本元素
    `script` 、`style`
    :::
    ::: info RCDATA 元素
    `textarea` 、`title`
    :::
    ::: info 外来元素
    `MathML` 命名空间和 `SVG` 命名空间的元素
    :::
    ::: info 常规元素
    常规元素：其他 `HTML` 允许的元素都称为常规元素
    :::

    ```html
    <!-- 所有具有开始标签和结束标签的元素都要写上起止标签 -->
    <!-- 某些允许省略开始标签或和束标签的元素亦都要写上 -->
    <!-- 空元素标签都不加 “/” 字符 -->
    <div>
      <h1>我是h1标题</h1>
      <p>我是一段文字，我有始有终，浏览器能正确解析</p>
    </div>
    <br>
    ```

1. 书写风格

    ```html
    <!-- HTML标签名、类名、标签属性和大部分属性值统一用小写 -->
    <div class="demo"></div>

    <!-- HTML文本、CDATA、JavaScript、meta标签某些属性等内容可大小写混合 -->
    <!-- 优先使用 IE 最新版本和 Chrome Frame -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>

    <!-- HTML文本内容 -->
    <h1>I AM WHAT I AM </h1>

    <!-- JavaScript 内容 -->
    <script type="text/javascript">
      var demoName = 'demoName';
      ...
    </script>
      
    <!-- CDATA 内容 -->
    <script type="text/javascript"><![CDATA[
    ...
    ]]></script>
    ```

1. 类型属性

    ```html
    <!-- 不需要为 CSS、JS 指定类型属性，HTML5 中默认已包含 -->
    <link rel="stylesheet" href="" >
    <script src=""></script>
    ```

1. 元素属性

    ```html
    <!-- 元素属性值使用双引号语法 -->
    <input type="text">

    <!-- 元素属性值可以写上的都写上 -->
    <input type="radio" name="name" checked="checked" >
    ```

1. 特殊字符引用

    在 `HTML` 中不能使用小于号 “<” 和大于号 “>”特殊字符，浏览器会将它们作为标签解析，若要正确显示，在 `HTML` 源代码中使用字符实体

    ```html
    <a href="#">more&gt;&gt;</a>
    ```

1. 代码缩进

    统一使用四个空格进行代码缩进，使得各编辑器表现一致（各编辑器有相关配置）

    ```html
    <div class="jdc">
        <a href="#"></a>
    </div>
    ```

1. 纯数字输入框

    ```html
    <!-- 使用 type="tel" 而不是 type="number" -->
    <input type="tel">
    ```

1. 代码嵌套

    ```html
    <!-- 元素嵌套规范，每个块状元素独立一行，内联元素可选 -->
    <div>
      <h1></h1>
      <p></p>
    </div>	
    <p><span></span><span></span></p>

    <!-- 段落元素与标题元素只能嵌套内联元素 -->
    <h1><span></span></h1>
    <p><span></span><span></span></p>
    ```

## 注释规范
1. 单行注释

    ```html
    <!-- 一般用于简单的描述，如某些状态描述、属性描述等 -->
    <!-- 注释内容前后各一个空格字符，注释位于要注释代码的上面，单独占一行 -->
    <!-- Comment Text -->
    <div>...</div>
    ```

1. 模块注释

    ```html
    <!-- 一般用于描述模块的名称以及模块开始与结束的位置 -->
    <!-- 模块与模块之间相隔一行 -->
    <!-- S Comment Text A -->	
    <div class="mod_a">
      ...
    </div>
    <!-- E Comment Text A -->
      
    <!-- S Comment Text B -->	
    <div class="mod_b">
      ...
    </div>
    <!-- E Comment Text B -->
    ```

1. 嵌套模块注释

    ```html
    <!-- S Comment Text A -->
    <div class="mod_a">
        
        <div class="mod_b">
            ...
        </div>
        <!-- /mod_b -->
          
        <div class="mod_c">
          ...
        </div>
        <!-- /mod_c -->
        
    </div>
    <!-- E Comment Text A -->
    ```


## 文件模板
1. `HTML5` 标准模板

    ```html
    <!DOCTYPE html>
    <html lang="zh-CN">
    <head>
    <meta charset="UTF-8">
    <title>HTML5标准模版</title>
    </head>
    <body>
      
    </body>
    </html>
    ```

1. 移动端

    ```html
    <!DOCTYPE html>
    <html lang="zh-CN">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no" >
    <meta name="format-detection" content="telephone=no" >
    <title>移动端HTML模版</title>
      
    <!-- S DNS预解析 -->
    <link rel="dns-prefetch" href="">
    <!-- E DNS预解析 --> 

    <!-- S 线上样式页面片，开发请直接取消注释引用 -->
    <!-- #include virtual="" -->
    <!-- E 线上样式页面片 -->

    <!-- S 本地调试，根据开发模式选择调试方式，请开发删除 --> 
    <link rel="stylesheet" href="css/index.css" >
    <!-- /本地调试方式 -->

    <link rel="stylesheet" href="http://srcPath/index.css" >
    <!-- /开发机调试方式 -->
    <!-- E 本地调试 -->

    </head>
    <body>

    </body>
    </html>
    ```

1. PC端


    ```html
    <!DOCTYPE html>
    <html lang="zh-CN">
    <head>
    <meta charset="UTF-8">
    <meta name="keywords" content="your keywords">
    <meta name="description" content="your description">
    <meta name="author" content="author,email address">
    <meta name="robots" content="index,follow">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
    <meta name="renderer" content="ie-stand">
    <title>PC端HTML模版</title>

    <!-- S DNS预解析 --> 
    <link rel="dns-prefetch" href="">
    <!-- E DNS预解析 --> 

    <!-- S 线上样式页面片，开发请直接取消注释引用 -->
    <!-- #include virtual="" -->
    <!-- E 线上样式页面片 -->

    <!-- S 本地调试，根据开发模式选择调试方式，请开发删除 --> 
    <link rel="stylesheet" href="css/index.css" >
    <!-- /本地调试方式 -->

    <link rel="stylesheet" href="http://srcPath/index.css" >
    <!-- /开发机调试方式 -->
    <!-- E 本地调试 -->

    </head>
    <body>

    </body>
    </html>
    ```

## 参考
1. [HTML规范](https://guide.aotu.io/docs/html/code.html 'HTML规范')
1. [W3C](https://www.w3.org/ 'W3C')
1. [Apple Developer](https://developer.apple.com/ 'Apple Developer')
