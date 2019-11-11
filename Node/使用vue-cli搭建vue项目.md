## 使用vue-cli搭建vue项目

#### 前言
在工作中，我们常常面临要同时创建和开发多个vue项目.于是，产生一个想法，把这些重复的操作流程化,以便于以后CTRL+C和CTRL+V

#### 全局安装vue-cli
建议这里使用[nrm](./使用nvm和nrm.md 'nrm'),切换到taobao源会比较快
```SHELL
npm i -g vue-cli
```

#### 项目初始化
```SHELL
vue init webpack vue-project
# 如下图所示:这里节省时间没有安装ESLint，Unit，Nightwatch
# 由于国内网络,安装photomjs和electron真的很慢,后面我们使用另外方法单独安装
```

![初始化项目](../images/node/使用vue-cli搭建vue项目/vueDemo_01.png '初始化项目')

#### 启动程序
```SHELL
# 如果缺少依赖
npm i
# 运行
npm run dev
```
至此,一个简单的vue项目就创建完成了.
接下来我们来锦上添花,增加一些附加功能.

#### 安装使用ESLint
```SHELL
# 安装eslint和规则模块
npm i eslint eslint-plugin-import eslint-config-airbnb-base --save-dev
# 创建eslint配置文件.eslintrc.json,添加如下:
{
    "extends": "airbnb-base"
}
```



#### 参考
1. [VUE-CLI使用](https://www.cnblogs.com/samve/p/9095328.html 'VUE-CLI使用')
1. [jsTraining](https://github.com/ruanyf/jstraining/blob/master/demos/README.md 'jsTraining')