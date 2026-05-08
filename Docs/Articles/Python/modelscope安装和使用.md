---
tags:
  - Python
---
# modelscope安装和使用

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
```

## 参考
1. [VoxCPM2 下载模型](https://modelscope.cn/models/OpenBMB/VoxCPM2)