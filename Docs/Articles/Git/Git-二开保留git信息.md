---
tags:
  - Git
---
# Git-二开保留git信息

## 原因
在使用开源项目进行二开时，如果直接将开源项目的源码拷贝到新仓库中，再提交会丢失原项目的提交信息。

## 方法一:直接fork
1. 在网页上点原仓库的`Fork`
2. `clone`你自己的`Fork`

```shell
git clone https://github.com/你的用户名/a.git
cd a
```

3. 添加上游原仓库，方便同步

```shell
git remote add upstream https://github.com/原作者/a.git
```

4. 开发并提交

```shell
git checkout -b my-dev
# 修改代码
git add .
git commit -m "我的二开修改"
git push origin my-dev
```

这样原历史都在，后续提交是你自己的。`github`会显示`fork`来源。

## 方法二:新建自己的空仓库，但保留历史
1. 在`github/gitlab`上新建一个空仓库
  注意: 不要勾选初始化`README`、`.gitignore`、`License`,否则会产生一个额外提交，导致`push`冲突。

2. 完整镜像原仓库所有分支和标签

```shell
git clone --mirror https://github.com/原作者/a.git
cd a.git

git remote set-url origin https://github.com/你的用户名/a.git
git push --mirror
```
这样原仓库的所有分支、标签、提交历史都会推到你的新仓库。

3. 正常`clone`你的新仓库来开发

```shell
cd ..
git clone https://github.com/你的用户名/a.git
cd a

# 添加上游，方便以后同步原项目
git remote add upstream https://github.com/原作者/a.git
```

之后正常开发:

```shell
git checkout -b my-feature
# 改代码
git add .
git commit -m "feat: 我的二开功能"
git push origin my-feature
```

如果只关心默认分支，也可以这样

```shell
git clone https://github.com/原作者/a.git
cd a

# 原来的 origin 改成 upstream
git remote rename origin upstream

# 添加你的新仓库为 origin
git remote add origin https://github.com/你的用户名/a.git

# 推送默认分支和标签
git push -u origin main
git push origin --tags
```

以后同步原仓库更新

```shell
git fetch upstream
git checkout main
git merge upstream/main
git push origin main

# 或者使用rebase
git fetch upstream
git checkout my-dev
git rebase upstream/main
```