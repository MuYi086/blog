# 前端工程化相关的实用git命令

## 介绍
最近在做一个网页自动检查新版本发布提示用户刷新的需求，用到了一些工程化实用的 `git` 命令，记录一下。

## 实用命令
常用的命令就不说了，大家天天提交，都有用到。以下主要记录在实现某些特殊需求时可能会用到的 `git` 命令。

```shell
# 显示最近n次提交记录
git log -n
# 简单显示git log记录
git shortlog -n
# 显示tag列表
git tag -l 
# 管理多个工作树
git worktree list
# 描述tag版本(返回sha)
git describe version
# 显示reflog信息show 选项接收git log接受的任何选项
git reflog
git reflog show -n
# 显示本地存储库中的引用
git show-ref --head
git show-ref --tags
# 显示当前head分支
git symbolic-ref HEAD
```

## 使用
结合 `node` 子进程的 `execSync` 方法，可以很方便的获取一些 `git` 信息包括(当前分支，提交者，提交时间，提交标题，当前 `tag` 等),以便于在编译时注入运行时或者生成 `buildInfo.json` 文件

```node
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
1. [Git中文参考](https://www.bookstack.cn/read/git-doc-zh/README.md 'Git中文参考')
1. [git-scm](https://git-scm.com/docs/gittutorial 'git-scm')
1. [Git常用命令](https://www.runoob.com/note/56524 'Git常用命令')
