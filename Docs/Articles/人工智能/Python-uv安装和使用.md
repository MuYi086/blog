---
tags:
  - 人工智能
---
# Python-uv安装和使用

## 前言
`uv` 是 `Astral` 出的 `Python` 包管理器和项目管理器。他们做的 `ruff` 现在是 `Python linter` 兼 `formatter` 的事实标准。`uv` 是他们的下一款产品，目标是替代 `pip`、`pip-tools`、`pipenv`、`poetry`、`virtualenv`、`pyenv` 一整套老工具。

## 优势
1. 快: 用 `Rust` 写的，依赖解析比 `pip` 快 `10-100` 倍。装个 `numpy` 半秒搞定
1. 单二进制: `uv` 本身没有 `Python` 依赖，一个可执行文件，往哪里一放就能用
1. 统一: 项目管理（创建项目、加依赖、跑脚本）、`Python` 版本管理（装 `Python` 解释器）、虚拟环境管理（`venv`），全在一个工具里
1. 兼容: `uv pip install` 跟 `pip install` 用法一致；`pyproject.toml` 用的是 `PEP 621` 标准，迁出迁入没壁垒

## 安装
```shell
# macOS
brew install uv

# 跨平台方案
curl -LsSf https://astral.sh/uv/install.sh | sh

# windows使用PowerShell
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"

# 已经有pip
pip install uv

# 查看版本
uv --version

# 安装python
uv python install 3.12.13

# 查看python版本
uv python list
```

## 使用
`uv run` 是 `uv` 的核心命令，它会做这几件事:
1. 检查项目的 `Python` 版本是否合适，没有就自动装
1. 检查 `.venv/` 虚拟环境是否存在，不存在就自动建
1. 检查依赖是否齐全，不齐全就自动装
1. 用项目的虚拟环境跑命令

```shell
# 创建一个项目
uv init hello-world

# 运行项目
uv run main.py

# 添加依赖
uv add httpx

# 添加多个依赖
uv add httpx click rich

# 增加开发依赖
uv add --dev pytest ruff

# 删除依赖
uv remove rich

# 升级依赖
uv add httpx --upgrade
# 或者
uv lock --upgrade-package httpx

# 指定版本范围
uv add "httpx>=0.27,<0.30"

# 临时命令: uvx 使用 uv tool run 的简写，跑完即丢，不污染项目
uvx httpie https://httpbin.org/get

# 全局安装软件和使用
uv tool install ruff
uv tool upgrade ruff
uv tool uninstall ruff
```

## 环境一致性
```shell
# 克隆项目
git clone <repo>

# 进入项目
cd <repo>

# 安装环境和依赖
uv sync

# 只装生产依赖,不装开发依赖
uv sync --no-dev

# 强制重新解析依赖
uv sync --reinstall

# 只安装某个dependency-group
uv sync --only-group dev
```

## 技巧
```shell
# 检查全局缓存
uv cache dir

# 清理缓存
uv cache clean
```


## 参考
1. [uv安装和使用](https://learn-py.org/lessons/python23/pyproject-uv/#step-1)

