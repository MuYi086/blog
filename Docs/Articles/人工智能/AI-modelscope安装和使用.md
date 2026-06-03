---
tags:
  - 人工智能
---
# AI-modelscope安装和使用

## 背景
从 `Python 3.11` 开始，很多 `Linux` 发行版将系统 `Python` 标记为“外部管理环境”，禁止直接使用 `pip install` 安装包。目的是防止你意外覆盖或破坏系统工具依赖的 `Python` 包，导致系统不稳定。
1. 创建虚拟环境（不会影响系统）
2. 使用 pipx（适合安装命令行工具）
这里我选择的是方式2，因为后面要频繁用 `modelscope download` 这种命令行工具。它的优势是:
  * 它会自动为 `modelscope` 创建一个隔离的虚拟环境
  * 同时把 `modelscope` 命令链接到系统路径，让你能在任何目录下直接使用
  * 不需要每次先 `source activate`，用完也不用 `deactivate`

## 安装

```shell
# 启用 universe 源并安装 pipx
sudo add-apt-repository universe
sudo apt update
sudo apt install pipx

# 更新
source ~/.bashrc

# 继续安装modelscope
pipx install modelscope
```

## 使用

```shell
# 命令行下载
modelscope download --model OpenBMB/VoxCPM2

# 下载整个模型到指定目录
modelscope download --model OpenBMB/VoxCPM2 --local_dir ~/modelscope

# 写入 `~/.bashrc`
export MODELSCOPE_CACHE='您希望的下载路径'
source ~/.bashrc
```

:::warning
如果提示 `modelscope：未找到命令`

那么很大可能是当前 `shell` 的 `PATH` 环境变量里没有包含 `/home/muyi086/.local/bin`，所以直接敲 `modelscope` 系统找不到这个命令

```shell
# 方法一
# 将下面这行添加到 ~/.bashrc 末尾
export PATH="$HOME/.local/bin:$PATH"
source ~/.bashrc

# 方法二
# 自动添加并提示
pipx ensurepath
```
:::

## 参考
1. [VoxCPM2 下载模型](https://modelscope.cn/models/OpenBMB/VoxCPM2)
1. [ModelScope模型下载](https://zhuanlan.zhihu.com/p/19706523709)
1. [ModelScope模型下载默认位置及如何修改为指定路径](https://www.onetts.com/wk/12439)
