---
tags:
  - JS
  - uniapp
  - eslint
---
# uniapp使用eslint校验代码

## 背景
随着手头上负责的前端项目越来越多，为了保证代码的准确性和可阅读性，让各位同事养成标准代码的的书写习惯，于是给当前 `uniapp` 项目加入了 `eslint` 校验


## 步骤
[vue中使用eslint](/Articles/Node/使用vue-cli搭建vue项目)
```shell
# 全局安装eslint
npm install eslint -g
# 给项目本身安装eslint
npx eslint --init
# 这里我们选用standard,即webpack默认的规则标准
# 自动修复常见错误: 命令后跟目录地址
eslint --fix src
# 如未改变，需重启vscode
```
![步骤图](/Images/JS/uniapp使用eslint校验代码/console_01.jpg '步骤图')

```shell
# vscode左侧extensions安装eslint插件
# 启用eslint插件

# 由于standard规则检查空格,于是vscode需要配置tab转空格
```

::: info
1. 编辑 `settings.json`
1. 给项目新建一个文件命名 `.editorconfig`
1. 编辑 `.eslintrc.js`
::: 
::: code-group
```json [settings.json]
{
  "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",
  "window.zoomLevel": 2,
  "terminal.integrated.automationShell.linux": "",
  "terminal.integrated.automationShell.windows": "",
  "editor.fontSize": 12,
  "editor.find.autoFindInSelection": "always",
  "eslint.format.enable": true,
  "editor.detectIndentation": false,
  "editor.renderControlCharacters": true,
  "editor.renderWhitespace": "all",
  "editor.tabSize": 2,
  "[vue]": {
      "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[json]": {
    "editor.quickSuggestions": {
      "strings": true
    },
    "editor.suggest.insertMode": "replace"
  },
  "editor.fontLigatures": null
}
```
```shell [.editorconfig]
root = true

[*]
charset = utf-8
indent_style = tab
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
```
```js [.eslintrc.js]
globals: {
  uni: true,
  getCurrentPages: true,
  AndroidObj: true,
  wx: true,
  sendApp: true,
  requirePlugin: true
}
```
:::

## 参考
1. [Eslint](https://eslint.bootcss.com/)

