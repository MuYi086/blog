# CSS格式化之stylelint

## 介绍
在团队协作中，我们需要统一团队的代码风格，所以需要一个代码格式化工具。这里我们介绍使用 `stylelint` 来格式化 `css` 代码。

## 安装
分别配置 `package.json` 和 `.stylelintrc.cjs`
::: code-group

```json [package.json]
"devDependencies": {
  "postcss": "^8.4.12",
  "postcss-html": "^1.3.0",
  "stylelint": "^14.6.0",
  "stylelint-config-html": "^1.0.0",
  "stylelint-config-prettier": "^9.0.3",
  "stylelint-config-recommended": "^7.0.0",
  "stylelint-config-recommended-less": "^1.0.4",
  "stylelint-config-recommended-scss": "^7.0.0",
  "stylelint-config-recommended-vue": "^1.4.0",
  "stylelint-config-standard": "^25.0.0",
  "stylelint-config-standard-scss": "^4.0.0",
  "stylelint-less": "^1.0.5",
  "stylelint-order": "^5.0.0"
}
"scripts": {
  "lint:stylelint": "stylelint \"src/**/*.{vue,css,scss}\" --fix"
}
```

```js [.stylelintrc.cjs]
module.exports = {
  // 扩展标准样式lint配置
  extends: [
    'stylelint-config-standard', // 标准配置
    'stylelint-config-prettier', // Prettier配置
    'stylelint-config-html/vue', // HTML和Vue配置
    'stylelint-config-recommended-vue/scss', // 推荐的Vue和SCSS配置
    'stylelint-config-recommended-less', // 推荐的Less配置
    'stylelint-config-recommended-scss' // 推荐的SCSS配置
  ],
  // 插件
  plugins: ['stylelint-order'], // 插件：样式顺序
  // 覆盖配置
  overrides: [
    {
      'files': ['**/*.vue'], // 匹配.vue文件
      'customSyntax': 'postcss-html' // 使用postcss-html自定义语法
    }
  ],
  // 忽略文件
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts', '**/*.json'], // 忽略指定文件类型
  // 规则
  rules: {
    indentation: 2, // 缩进为2
    'selector-pseudo-element-no-unknown': [ // 选择器伪元素未知
      true,
      {
        ignorePseudoElements: ['v-deep'] // 忽略v-deep伪元素
      }
    ],
    'number-leading-zero': 'never', // 数字前导零永远不需要
    'no-descending-specificity': null, // 禁止特异性降低
    'font-family-no-missing-generic-family-keyword': null, // 字体组中不缺少通用字体关键字
    'selector-type-no-unknown': null, // 选择器类型未知
    'at-rule-no-unknown': null, // @规则未知
    'no-duplicate-selectors': null, // 禁止重复选择器
    'no-empty-source': null, // 禁止空源
    // 禁止空块
    'block-no-empty': true,
    'selector-pseudo-class-no-unknown': [ // 选择器伪类未知
      true,
      { ignorePseudoClasses: ['global'] } // 忽略全局伪类
    ],
    'max-nesting-depth': null, // 最大嵌套深度
    'max-line-length': null, // 最大行长度
    'selector-max-compound-selectors': null, // 选择器最大复合选择器
    'selector-no-qualifying-type': null, // 选择器无资格类型
    'selector-class-pattern': null, // 选择器类模式
    'function-parentheses-newline-inside': null, // 函数括号内换行
    'alpha-value-notation': 'number', // 透明值表示为数字
    // 禁止空第一行
    'no-empty-first-line': true,
    // 限制单行声明块中声明的最大数量:取消限制,防止normalize这样第三方压缩样式报错
    'declaration-block-single-line-max-declarations': null,
    // 禁止字体系列中出现重复名称。(同上)
    'font-family-no-duplicate-names': null,
    // 防止rpx报错
    'unit-no-unknown': [
      true,
      {
        ignoreUnits: ['rpx'], // 忽略rpx单位
      },
    ],
    // 兼容自定义属性(防止蓝湖，月维生成样式报错)
    'custom-property-pattern': null,
    // 属性顺序
    'order/properties-order': [
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',
      'display',
      'flex-wrap',
      'justify-content',
      'align-items',
      'float',
      'clear',
      'overflow',
      'overflow-x',
      'overflow-y',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',
      'font-size',
      'font-family',
      'font-weight',
      'text-justify',
      'text-align',
      'text-indent',
      'text-overflow',
      'text-decoration',
      'white-space',
      'color',
      'background',
      'background-position',
      'background-repeat',
      'background-size',
      'background-color',
      'background-clip',
      'border',
      'border-style',
      'border-width',
      'border-color',
      'border-top-style',
      'border-top-width',
      'border-top-color',
      'border-right-style',
      'border-right-width',
      'border-right-color',
      'border-bottom-style',
      'border-bottom-width',
      'border-bottom-color',
      'border-left-style',
      'border-left-width',
      'border-left-color',
      'border-radius',
      'opacity',
      'filter',
      'list-style',
      'outline',
      'visibility',
      'box-shadow',
      'text-shadow',
      'resize',
      'transition'
    ]
  }
}
```
:::

## 使用
使用 `npm run lint:stylelint`，会自动修复大多数错误，剩下的错误需要按照终端提示修复。当终端无任何提示则表示全局已经没有样式错误。

## 实现ide保存自动格式化
1. `vscode` 下载 `stylelint` 插件
1. 在项目下新建 `.vscode` 文件夹，新建 `settings.json` 文件, 添加如下配置

    ```json
    "editor.codeActionsOnSave": {
      "source.fixAll.stylelint": "explicit", // 开启stylelint自动修复
    },
    "stylelint.validate": [ // 需要格式化的文件类型
      "css",
      "less",
      "postcss",
      "scss",
      "sass",
      "vue"
    ],
    "stylelint.enable": true // 开启stylelint
    ```

1. 然后试着调整样式顺序，然后 `ctrl + s` 保存，会自动修复


## 参考
1. [Stylelint Docs](https://stylelint.io/)
1. [2022 Stylelint 配置详细步骤（css、less、sass、vue适用）](https://blog.csdn.net/m0_60273757/article/details/125762025)
1. [vue2项目配置prettier + eslint + commitlint + stylelint](https://juejin.cn/post/7167175528909275143)