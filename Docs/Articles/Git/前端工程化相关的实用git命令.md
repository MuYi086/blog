---
tags:
  - Git
---
# 前端工程化相关的实用git命令

## 介绍
最近在做一个网页自动检查新版本发布提示用户刷新的需求，用到了一些工程化实用的 `git` 命令，记录一下。

## 实用命令
常用的命令就不说了，大家天天提交，都有用到。以下主要记录在实现某些特殊需求时可能会用到的 `git` 命令。

::: details 点我查看代码
```shell
# 显示最近n次提交记录
git log -n
# 简单显示git log记录
git shortlog -n
# 显示tag列表
git tag -l 
# 管理多个工作树
git worktree list
# 描述tag版本(返回hash)
git describe version
# 显示reflog信息show 选项接收git log接受的任何选项
git reflog
git reflog show -n
# 显示本地存储库中的引用
git show-ref --head
git show-ref --tags
# 显示当前head分支
git symbolic-ref HEAD
# 显示当前git name
git config user.name
# 显示当前git email
git config user.email
# 显示某个commit详细信息
git show commitId
```
:::

## PRETTY FORMATS
高级用法，可以很方便的格式化输出
`<string>` 格式允许指定要显示的信息。但是有一个例外，用 `%n` 来获得换行符而不是 `\n` 

::: details 点我查看代码
```shell
# 提交哈希
%H

# 缩写提交哈希
%h

# 树形哈希
%T

# 缩写树哈希
%t

# 缩写为父哈希
%p

# 项目作者姓名
%an

# 项目作者姓名(尊重.mailmap)
%aN

# 项目作者电邮
%ae

# 项目作者电邮(尊重.mailmap)
%aE

# 项目作者日期(格式遵循 --data=option)
%ad

# 项目作者日期(RFC2822格式)
%aD

# 项目作者日期(相对)
%ar

# 项目作者日期(unix timestamp)
%at

# 项目作者日期(ISO 8601格式)
%ai

# 项目作者日期(ISO 8601格式 严格)
%aI

# 项目作者日期(short format YYYY-MM-DD)
%as

# 项目作者日期(human style)
%ah

# 提交者姓名
%cn

# 提交者姓名(尊重.mailmap)
%cN

# 提交者电邮
%ce

# 提交者电邮(尊重.mailmap)
%cE

# 提交者电子邮件本地部分(@符号之前的部分)
%cl

# 提交者电子邮件本地部分(遵守 .mailmap)
%cL

# 提交者日期(格式遵循 --data=option)
%cd

# 提交者日期(RFC2822格式)
%cD

# 提交者日期(相对)
%cr

# 提交者日期(unix timestamp)
%ct

# 提交者日期(ISO 8601格式)
%ci

# 提交者日期(ISO 8601格式 严格)
%cI

# 提交者日期(short format YYYY-MM-DD)
%cs

# 提交者日期(human style)
%ch

# 没有(",")包装的ref名称
%D

# 在达到提交的命令行上给出的引用名称（如git log --source），仅适用于git log
%S

# encoding 编码
%e

# subject 主题
%s

# 适合用作文件名的经过清理的主题行
%f

# body 正文
%b

# 未经处理的主题和正文
%B

# commit notes 提交说明
%N

# 来自GPG的已签名提交的原始验证消息
%GG

# 显示好的（有效）签名“G”，坏签名显示“B”，有效期未知的好签名显示“U”，已过期的好签名显示“X”，“Y”代表由过期密钥签名的好签名，“R”表示由撤销密钥签名的好签名，“E”表示签名无法检查（例如缺少密钥），“N”表示没有签名
%G?

# 显示签名提交的签名者姓名
%GS

# 显示用于签署签名提交的密钥
%GK

# 显示签名提交的密钥指纹
%GF

# 显示主键的指纹，其子键用于签名提交的签名
%GP

# reflog选择器，例如refs/stash@{1}或refs/stash@{2 minutes ago};格式遵循-g选项描述的规则。 @之前的部分是命令行中给出的refname（因此git log -g refs/heads/master将产生refs/heads/master@{0}）
%gD

# 缩短了reflog选择器;与%gD相同，但refname部分缩短了人类的可读性（因此refs/heads/master变为master）
%gd

# reflog身份名称
%gn

# reflog身份名称(尊重.mailmap)
%gN

# reflog身份电子邮件
%ge

# reflog身份电子邮件(尊重.mailmap)
%gE

# reflog主题
%gs

# 将颜色切换为红色
%Cred

# 将颜色切换为绿色
%Cgreen

# 将颜色切换为蓝色
%Gblue

# 重置颜色
%Creset

# 颜色规格.默认情况下，仅在启用日志输出时显示颜色（通过color.diff，color.ui或--color，并且如果我们要去终端，则尊重前者的auto设置）。 %C(auto,...)被接受为默认的历史同义词（例如，%C(auto,red)）。即使没有启用颜色，指定%C(always,...)也会显示颜色（尽管只考虑使用--color=always为整个输出启用颜色，包括这种格式和其他任何git可能颜色的颜色）。单独auto（即%C(auto)）将打开下一个占位符的自动着色，直到再次切换颜色。
%C(...)

# 左（&lt;），右（&gt;）或边界（-）标记
%m

# 换行符
%n

# 原始%
%%

# 从十六进制代码打印一个字节
%x00

# 切换行换行
%w([< w> [，< i1> [，< i2>]]])

# 使下一个占位符至少取N列，如果需要，在右边填充空格。如果输出长于N列，则可以选择在开头（ltrunc），中间（mtrunc）或结尾（trunc）截断。请注意，截断仅适用于N> = 2
%<(<N> [，trunc | ltrunc | mtrunc])

# 使下一个占位符至少占用第N列，如果需要，在右边填充空格
%<|(<N>)

# 与%相似，%<|(<N>)，但左边的填充空格
%>(<N>), %>|(<N>)

# 类似于%>(<N>),%>|(<N>)，除非下一个占位符占用的空间多于给定的空间并且左侧有空格，请使用这些空格
%>(<N>), %>|( N>)

# 类似于%<(<N>),%<|(<N>)，但填充两侧（即文本居中）
%><(<N>), %><|(<N>)

```
:::


举例

```shell
# 支持组合使用
# 获取当前git用户的name
git config user.name

# 获取当前git用户的email
git config user.email

# 获取最近一次提交者的name和email
git log -1 --pretty=format:"%cn %ce"

# 获取最近一次提交时间
git log -1 --pretty=format:"%ct"

# 获取最近一次提交主题
git log -1 --pretty=format:"%s"

# 获取最近一次提交的hash
git log -1 --pretty=format:"%H"


```

## 使用
结合 `node` 子进程的 `execSync` 方法，可以很方便的获取一些 `git` 信息包括(当前分支，提交者，提交时间，提交标题，当前 `tag` 等),以便于在编译时注入运行时或者生成 `buildInfo.json` 文件

```js
const { execSync } = require('child_process')
function getGitBranch () { // 获取当前分支
  try {
    const branchName = execSync('git symbolic-ref --short -q HEAD', {
      encoding: 'utf8'
    }).trim()
    return branchName
  } catch (e) {
    return new Error('获取git分支失败')
  }
}
const branch = getGitBranch()
console.log(branch, '-------------------------getGitBranch/branch----------------------')
```


## 参考
1. [Git中文参考](https://www.bookstack.cn/read/git-doc-zh/README.md)
1. [git-scm](https://git-scm.com/docs/gittutorial)
1. [Git常用命令](https://www.runoob.com/note/56524)
