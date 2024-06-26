# git bash交互提示符不工作

## 起因
最近要写小程序，于是从 `deepin` 切回了 `window 10` ，安装了最新的 `vue-cli` ，然后按照 `uniapp` 文档初始化 `uni` 项目选择配置时，发现 `git bash` 交互提示符不工作，无法上下移动

## 结果
通过搜索引擎查询关键词发现 `vue-cli` 官方有如下一段解释

![提示](/Images/Windows/gitbash交互提示符不工作/tip_1.jpg "提示")

```shell
# 进入git安装目录
gedit /etc/bash.bashrc

# 在文件自后一行加上自定义指令
alias vue='winpty vue.cmd'
```


## 参考
1. [Vue CLI](https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create)
1. [Vue CLI 3.X 在windows中使用Git Bash创建项目时，出现交互提示符不工作的问题](https://blog.csdn.net/weixin_30491641/article/details/95805300?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1.pc_relevant_paycolumn_v3&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1.pc_relevant_paycolumn_v3&utm_relevant_index=2)