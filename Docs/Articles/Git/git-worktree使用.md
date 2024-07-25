# Git Worktree使用
`worktree` 的意思是工作树，同一个仓库可以对应多个 `worktree` 、分支。

## 应用
可以再多个分支同时工作并且不影响，如果遇到一套代码要对应多个产品的情况，那么 `worktree` 将会是很好的解决方案

## 命令
```shell
# 添加工作树
# 如果不提供分支名称，将基于当前分支创建新的分支；如果提供 -b 则检出指定的分支
git worktree add <path> -b <branch>

# 列出工作树
git worktree list

# 移除工作树
git worktree remove <path>

# 清理工作目录
git worktree prune

# 切换到已有工作树的目录
cd <path>
```

## 与分支管理对比优劣
特性|使用 git worktree|使用分支切换
:--:|:--|:--
并行性|可以同时拥有多个工作树，独立进行多任务开发|只能在一个工作树中进行，需频繁切换|
灵活性|适合同时处理多个特性、修复和测试|切换较快速，但不利于并发开发|
环境隔离|每个工作树之间的文件和分支独立，互不影响|基于同一工作树，文件可能被覆盖|
复杂性|需要管理多个工作树，可能增加操作复杂度|较为简单，适合一般工作流程|
资源占用|每个工作树占用磁盘空间|占用空间小，所有代码共享同一目录|
版本控制|可以快速拉取和切换不同版本的代码|通过分支跟踪不同版本，容易混淆|

## 参考
1. [git worktree Documentation](https://git.js.cn/docs/git-worktree)
1. [git worktree 日常使用教程](https://juejin.cn/post/7241760513204994103)
1. [git worktree 上手指南](https://www.cnblogs.com/caoshufang/p/16258975.html)
1. [Git Worktree的使用](https://jasonkayzk.github.io/2020/05/03/Git-Worktree%E7%9A%84%E4%BD%BF%E7%94%A8/)