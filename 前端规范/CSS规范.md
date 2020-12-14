## CSS规范

#### 代码规范
1. 样式文件必须写上 @charset 规则，并且一定要在样式文件的第一行首个字符位置开始写，编码名用 “UTF-8”
1. 字符 @charset “”; 都用小写字母，不能出现转义符，编码名允许大小混写
1. 考虑到在使用“UTF-8”编码情况下 BOM 对代码的污染和编码显示的问题，在可控范围下，坚决不使用 BOM。

    ```CSS
    @charset "UTF-8";

    .jdc{}
    ```

#### 代码风格
1. 代码格式化

    ```CSS
    // 推荐使用展开格式
    .jdc{
      display: block;
      width: 50px;
    }
    ```

1. 代码大小写

    ```CSS
    // 样式选择器，属性名，属性值关键字全部使用小写字母书写，属性字符串允许使用大小写。
    .jdc{
      display:block;
    }
    ```

1. 选择器

    ```CSS
    // 尽量少用通用选择器 *
    .jdc {}
    // 不使用 ID 选择器
    .jdc li {}
    // 不使用无具体语义定义的标签选择器
    .jdc li p{}
    ```

1. 代码缩进

    ```CSS
    // 统一使用四个空格进行代码缩进，使得各编辑器表现一致（各编辑器有相关配置）
    .jdc {
        width: 100%;
        height: 100%;
    }
    ```

1. 分号
    
    ```CSS
    // 每个属性声明末尾都要加分号；
    .jdc {
        width: 100%;
        height: 100%;
    }
    ```

1. 代码易读性

    ```CSS
    // 左括号与类名之间一个空格，冒号与属性值之间一个空格
    .jdc { 
        width: 100%; 
    }

    // 逗号分隔的取值，逗号之后一个空格
    .jdc {
        box-shadow: 1px 1px 1px #333, 2px 2px 2px #ccc;
    }

    // 为单个css选择器或新申明开启新行
    .jdc, 
    .jdc_logo, 
    .jdc_hd {
        color: #ff0;
    }
    .nav{
        color: #fff;
    }

    // 颜色值 rgb() rgba() hsl() hsla() rect() 中不需有空格，且取值不要带有不必要的 0
    .jdc {
        color: rgba(255,255,255,.5);
    }

    // 属性值十六进制数值能用简写的尽量用简写
    .jdc {
        color: #fff;
    }

    // 不要为 0 指明单位
    .jdc {
        margin: 0 10px;
    }
    ```

1. 属性值引号

    ```CSS
    // css属性值需要用到引号时，统一使用单引号
    .jdc { 
      font-family: 'Hiragino Sans GB';
    }
    ```

1. 属性书写顺序
    
    ```CSS
    // 布局定位属性：display / position / float / clear / visibility / overflow
    // 自身属性：width / height / margin / padding / border / background
    // 文本属性：color / font / text-decoration / text-align / vertical-align / white- space / break-word
    // 其他属性（CSS3）：content / cursor / border-radius / box-shadow / text-shadow / background:linear-gradient …
    .jdc {
        display: block;
        position: relative;
        float: left;
        width: 100px;
        height: 100px;
        margin: 0 10px;
        padding: 20px 0;
        font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
        color: #333;
        background: rgba(0,0,0,.5);
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        -o-border-radius: 10px;
        -ms-border-radius: 10px;
        border-radius: 10px;
    }
    ```

1. CSS3浏览器私有前缀写法

    ```CSS
    // CSS3 浏览器私有前缀在前，标准前缀在后
    .jdc {
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        -o-border-radius: 10px;
        -ms-border-radius: 10px;
        border-radius: 10px;
    }
    ```

#### 注释规范
1. 单行注释

    ```CSS
    // 不使用 /*! */ 注释方式
    /* Comment Text */
    .jdc{}

    /* Comment Text */
    .jdc{}
    ```

1. 模块注释

    ```CSS
    /* 注释内容第一个字符和最后一个字符都是一个空格字符 */ 
    // /* 与 模块信息描述占一行，多个横线分隔符-与*/占一行，行与行之间相隔两行
    /* Module A
    ---------------------------------------------------------------- */
    .mod_a {}


    /* Module B
    ---------------------------------------------------------------- */
    .mod_b {}
    ```

1. 文件信息注释

    ```CSS
    /* 在样式文件编码声明 @charset 语句下面注明页面名称、作者、创建日期等信息 */ 
    @charset "UTF-8";
    /**
    * @desc File Info
    * @author Author Name
    * @date 2015-10-10
    */
    ```


#### SASS规范
1. SASS注释规范
    SASS支持 CSS 标准的多行注释 /* */，同时也支持单行注释 //

    ```CSS
    /* 全部遵循 CSS 注释规范 */ 
    // 不使用 /*! */ 注释方式
    /* 注释内不放 SASS 变量 */ 

    @charset "UTF-8";

    /**
    * @desc File Info
    * @author liqinuo
    * @date 2015-10-10
    */

    /* Module A
    ----------------------------------------------------------------*/
    .mod_a {}

    /* module A logo */
    .mod_a_logo {}

    /* module A nav */
    .mod_a_nav {}


    /* Module B
    ----------------------------------------------------------------*/
    .mod_b {}

    /* module B logo */
    .mod_b_logo {}

    /* module B nav */
    .mod_b_nav {}
    ```

1. 嵌套规范

    ```CSS
    /* 选择器嵌套 */
    /* CSS */
    .jdc {}
    body .jdc {}

    /* SCSS */
    .jdc {
        body & {}
    }
    ```

1. 属性嵌套

    ```CSS
    /* CSS */
    .jdc {
        background-color: red;
        background-repeat: no-repeat;
        background-image: url(/img/icon.png);
        background-position: 0 0;
    }

    /* SCSS */
    .jdc {
        background: {
            color: red;
            repeat: no-repeat;
            image: url(/img/icon.png);
            position: 0 0;
        }
    }
    ```

1. 变量

    ```CSS
    /* 可复用属性尽量抽离为页面变量，易于统一维护 */
    /* CSS */
    .jdc {
        color: red;
        border-color: red;
    }

    /* SCSS */
    $color: red;
    .jdc {
        color: $color;
        border-color: $color;
    }
    ```

1. 混合

    ```CSS
    /* 根据功能定义模块，然后在需要使用的地方通过 @include 调用，避免编码时重复输入代码段 */
    /* CSS */
    .jdc_1 {
        -webkit-border-radius: 5px;
        border-radius: 5px;
    }
    .jdc_2 {
        -webkit-border-radius: 10px;
        border-radius: 10px;
    }

    /* SCSS */
    @mixin radius($radius:5px) {
        -webkit-border-radius: $radius;
        border-radius: $radius;
    }
    .jdc_1 {
        @include radius; //参数使用默认值
    }
    .jdc_2 {
        @include radius(10px);
    }

    /* CSS */
    .jdc_1 {
        background: url(/img/icon.png) no-repeat -10px 0;
    }
    .jdc_2 {
        background: url(/img/icon.png) no-repeat -20px 0;
    }

    /* SCSS */
    @mixin icon($x:0, $y:0) {
        background: url(/img/icon.png) no-repeat $x, $y;
    }
    .jdc_1 {
        @include icon(-10px, 0);
    }
    .jdc_2 {
        @include icon(-20px, 0);
    }
    ```

1. 占位选择器

    ```CSS
    /* 如果不调用则不会有任何多余的 css 文件，占位选择器以 % 标识定义，通过 @extend 调用 */
    /* scss */
    %borderbox {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    .jdc {
        @extend %borderbox;
    }
    ```

1. extend 继承

    ```CSS
    /* CSS */
    .jdc_1 {
        font-size: 12px;
        color: red;
    }
    .jdc_2 {
        font-size: 12px;
        color: red;
        font-weight: bold;
    }

    /* SCSS */
    .jdc_1 {
        font-size: 12px;
        color: red;
    }
    .jdc_2 {
        @extend .jdc_1;
        font-weight: bold;
    }

    /* 或者 */
    %font_red {
        font-size: 12px;
        color: red;
    }
    .jdc_1 {
        @extend %font_red;
    }
    .jdc_2 {
        @extend %font_red;
        font-weight: bold;
    }
    ```

1. for循环

    ```CSS
    /* CSS */
    .jdc_1 {background-position: 0 -20px;}
    .jdc_2 {background-position: 0 -40px;}
    .jdc_3 {background-position: 0 -60px;}

    /* SCSS */
    @for $i from 1 through 3 {
        .jdc_#{$i} {
            background-position: 0 (-20px) * $i;
        }
    }
    ```

1. each循环

    ```CSS
    /* CSS */ 
    .jdc_list {
        background-image: url(/img/jdc_list.png);
    }
    .jdc_detail {
        background-image: url(/img/jdc_detail.png);
    }

    /* SCSS */ 
    @each $name in list, detail {
        .jdc_#{$name} {
            background-image: url(/img/jdc_#{$name}.png);
        }
    }


    /* CSS */ 
    .jdc_list {
        background-image: url(/img/jdc_list.png);
        background-color: red;
    }
    .jdc_detail {
        background-image: url(/img/jdc_detail.png);
        background-color: blue;
    }

    /* SCSS */ 
    @each $name, $color in (list, red), (detail, blue) {
        .jdc_#{$name} {
            background-image: url(/img/jdc_#{$name}.png);
            background-color: $color;
        }
    }
    ```

1. function函数

    ```CSS
    @function pxToRem($px) {
        @return $px / 10px * 1rem;
    }
    .jdc {
        font-size: pxToRem(12px);
    }
    ```

1. 运算规范

    ```CSS
    /* 注意运算单位，单位同时参与运算，所以 10px 不等于 10 */
    .jdc {
        width: 100px - 50px;
        width: 100px + 50px;
        width: 100px * 2;
        width: 100px / 2;
    }
    ```

#### 重置样式
1. 移动端

    ```CSS
    * { -webkit-tap-highlight-color: transparent; outline: 0; margin: 0; padding: 0; vertical-align: baseline; }
    body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td { margin: 0; padding: 0; vertical-align: baseline; }
    img { border: 0 none; vertical-align: top; }
    i, em { font-style: normal; }
    ol, ul { list-style: none; }
    input, select, button, h1, h2, h3, h4, h5, h6 { font-size: 100%; font-family: inherit; }
    table { border-collapse: collapse; border-spacing: 0; }
    a { text-decoration: none; color: #666; }
    body { margin: 0 auto; min-width: 320px; max-width: 640px; height: 100%; font-size: 14px; font-family: -apple-system,Helvetica,sans-serif; line-height: 1.5; color: #666; -webkit-text-size-adjust: 100% !important; text-size-adjust: 100% !important; }
    input[type="text"], textarea { -webkit-appearance: none; -moz-appearance: none; appearance: none; }
    ```


1. PC端

    ```CSS
    html, body, div, h1, h2, h3, h4, h5, h6, p, dl, dt, dd, ol, ul, li, fieldset, form, label, input, legend, table, caption, tbody, tfoot, thead, tr, th, td, textarea, article, aside, audio, canvas, figure, footer, header, mark, menu, nav, section, time, video { margin: 0; padding: 0; }
    h1, h2, h3, h4, h5, h6 { font-size: 100%; font-weight: normal }
    article, aside, dialog, figure, footer, header, hgroup, nav, section, blockquote { display: block; }
    ul, ol { list-style: none; }
    img { border: 0 none; vertical-align: top; }
    blockquote, q { quotes: none; }
    blockquote:before, blockquote:after, q:before, q:after { content: none; }
    table { border-collapse: collapse; border-spacing: 0; }
    strong, em, i { font-style: normal; font-weight: normal; }
    ins { text-decoration: underline; }
    del { text-decoration: line-through; }
    mark { background: none; }
    input::-ms-clear { display: none !important; }
    body { font: 12px/1.5 \5FAE\8F6F\96C5\9ED1, \5B8B\4F53, "Hiragino Sans GB", STHeiti, "WenQuanYi Micro Hei", "Droid Sans Fallback", SimSun, sans-serif; background: #fff; }
    a { text-decoration: none; color: #333; }
    a:hover { text-decoration: underline; }
    ```


#### 媒体查询
1. 常用查询语句

    ```CSS
    /* 判断设备横竖屏 */
    /* 横屏 */
    @media all and (orientation :landscape) {

    } 

    /* 竖屏 */
    @media all and (orientation :portrait) {

    }

    /* 判断设备宽高 */
    /* 设备宽度大于 320px 小于 640px */
    @media all and (min-width:320px) and (max-width:640px) {
        
    }

    /* 判断设备像素比 */
    /* 设备像素比为 1 */
    @media only screen and (-webkit-min-device-pixel-ratio: 1), only screen and (min-device-pixel-ratio: 1) {
        
    }

    /* 设备像素比为 1.5 */
    @media only screen and (-webkit-min-device-pixel-ratio: 1.5), only screen and (min-device-pixel-ratio: 1.5) {
        
    }

    /* 设备像素比为 2 */
    @media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2) {
        
    }
    ```

#### 移动端常用私有属性

    ```CSS
    /* 隐藏滚动条 */
    .scroll::-webkit-scrollbar {
        width: 0;
        height: 0;
    } 
    ```

#### 参考
1. [CSS规范](https://guide.aotu.io/docs/css/code.html 'CSS规范')
1. [W3C](https://www.w3.org/ 'W3C')
1. [Apple Developer](https://developer.apple.com/ 'Apple Developer')
1. [带BOM的UTF-8和无BOM的UTF-8有什么区别？网页代码一般使用哪个？](https://www.zhihu.com/question/20167122  '带BOM的UTF-8和无BOM的UTF-8有什么区别？网页代码一般使用哪个？')
