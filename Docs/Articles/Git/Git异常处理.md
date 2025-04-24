---
tags:
  - Git
---
# Git异常处理

## push 和 pull 报错
1. `git push` 时提示 `push failed : master, your remote branch is out of date, please fetch origin before pushing` , 但是使用 `pull` 时报错 `pull failed reference refs/remotes/origin/dev_202312 not found`

::: code-group
```shell [git]
# 1. 清理本地无效的远程分支引用
git remote prune origin

# 2. 切换到 master 分支并强制更新
git checkout master
git fetch origin  # 仅获取远程最新数据，不自动合并
git reset --hard origin/master  # 强制将本地 master 对齐到远程
```
:::

作用：是确保本地 `master` 分支与远程完全同步，避免残留旧引用干扰
风险：`reset --hard` 会覆盖本地未提交的修改，请提前备份