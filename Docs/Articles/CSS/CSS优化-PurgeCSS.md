---
tags:
  - CSS
---
# CSS优化-PurgeCSS

## 介绍
`PurgeCSS` 是一个 `CSS` 优化工具，可以删除未使用的 `CSS` 代码。

`PurgeCSS` 通过分析你的内容和 `CSS` 文件，首先它将 `CSS` 文件中使用的选择器与内容文件中的选择器进行匹配，然后它会从 `CSS` 中删除未使用的选择器，从而生成更小的 `CSS` 文件。

## 使用
1. 我们先记录下未使用 `PurgeCSS` 之前的项目打包大小

![未优化](/Images/CSS/CSS优化-PurgeCSS/step_1.jpg "未优化")

2. `postcss` 使用 `Purgecss` 

  ::: code-group
  ```shell [install]
  npm i -D @fullhuman/postcss-purgecss
  ```

  ```js [postcss.config.js]
  const purgecss = require('@fullhuman/postcss-purgecss')

  module.exports = {
    plugins: [
      purgecss({
        content: ['./**/*.html']
      })
    ]
  }
  ```
  :::

3. 再次编译，查看体积

![已优化](/Images/CSS/CSS优化-PurgeCSS/step_2.jpg "已优化")

::: warning
其他打包软件和框架配置，比如 `grunt`, `gulp` , `webpack` , `react`, `vue` 等请参考官方文档。
:::

## 白名单
利用 `safelist` 参数指定哪些 `CSS` 选择器可以保留在最终的 `CSS` 中。

```js
const purgecss = new Purgecss({
  content: [], // content
  css: [], // css
  safelist: ['random', 'yep', 'button']
})
```

也可以在 CSS 中指定

```CSS
/*! purgecss start ignore */
h5 {
  color: pink;
}

h6 {
  color: lightcoral;
}
/*! purgecss end ignore */
```

## 总结
效果拔群，`3.7M` 直接降到 `2.5M` , 体积减少 `33%`

::: warning 注意
我们会发现有些页面会丢夫部分样式，这是因为 PurgeCSS 删除的是未在content 选项中制定的文件中的 CSS

我们仅仅指定了 html 文件，所以 vue 文件中的样式会被删除

我们需要调整配置，设置如下

```js
module.exports = {
  plugins: [
    purgecss({
      content: ['./**/*.html', '**/*.vue']
    })
  ]
}
```
:::

再次编译, 体积为 `2.9M` ， 减少 `22%` , 能有效提升前端页面加载速度。

![已优化](/Images/CSS/CSS优化-PurgeCSS/step_3.jpg "已优化")


## 参考
1. [PurgeCss Wiki](https://purgecss.com/getting-started.html)