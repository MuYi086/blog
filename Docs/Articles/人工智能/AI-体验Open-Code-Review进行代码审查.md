---
tags:
  - 人工智能
---
# AI-体验Open-Code-Review进行代码审查

## 介绍
`Open Code Review` 是一款 `AI` 驱动的代码审查 `CLI` 工具。它的前身是阿里集团内部官方 `AI` 代码审查助手，过去两年在内部服务了数万开发者，识别了数百万个代码缺陷。经过大规模充分验证后，我们将其孵化为开源项目，对社区开放。只需配置一个模型端点即可使用。

它读取 `Git diff`，通过具备工具调用能力的 `Agent` 将变更文件发送至可配置的 `LLM`，生成具有行级精度的结构化审查意见。`Agent` 可以读取完整文件内容、搜索代码库、检查其他变更文件以获取上下文，从而进行深度审查——而非仅停留在表面的 `diff` 反馈

## 安装
1. 通过`npm`安装

```shell
npm install -g @alibaba-group/open-code-review
```
1. 从 [GitHub Release](https://github.com/alibaba/open-code-review/releases) 下载

## 快速开始
1. 配置`LLM`

```shell
# 方式 A：交互式配置
ocr config set llm.url https://api.anthropic.com/v1/messages
ocr config set llm.auth_token your-api-key-here
ocr config set llm.model claude-opus-4-6
ocr config set llm.use_anthropic true

# 方式 B：环境变量（优先级最高）
export OCR_LLM_URL=https://api.anthropic.com/v1/messages
export OCR_LLM_TOKEN=your-api-key-here
export OCR_LLM_MODEL=claude-opus-4-6
export OCR_USE_ANTHROPIC=true
```

配置存储于 `~/.opencodereview/config.json`。

同时兼容了 `Claude Code` 环境变量（`ANTHROPIC_BASE_URL`、`ANTHROPIC_AUTH_TOKEN`、`ANTHROPIC_MODEL`），并解析 `~/.zshrc` / `~/.bashrc` 中的相关导出。

1. 测试连通性

```shell
ocr llm test
```

1. 开始审查

```shell
cd your-project

# 工作区模式 —— 审查所有暂存、未暂存和未跟踪的变更
ocr review

# 分支范围 —— 比较两个引用
ocr review --from main --to feature-branch

# 单个提交
ocr review --commit abc123
```

## 集成到编程Agent
```shell
# 1. 作为Skill安装
npx skills add alibaba/open-code-review --skill open-code-review

# 2. 作为Claude Code Plugin
/plugin marketplace add alibaba/open-code-review
/plugin install open-code-review@open-code-review
# 此命令注册 /open-code-review:review 斜杠命令，运行 OCR 并自动过滤和修复问题。

# 3. 直接复制命令文件
# 项目级
mkdir -p .claude/commands
curl -o .claude/commands/open-code-review.md \
  https://raw.githubusercontent.com/alibaba/open-code-review/main/plugins/open-code-review/commands/review.md

# 用户级
mkdir -p ~/.claude/commands
curl -o ~/.claude/commands/open-code-review.md \
  https://raw.githubusercontent.com/alibaba/open-code-review/main/plugins/open-code-review/commands/review.md
```

## CI/CD集成
`OCR` 可以集成到 `CI/CD` 流水线中，在 `Merge Request` / `Pull Request` 时自动进行代码审查
```shell
ocr review \
  --from "origin/main" \
  --to "origin/feature-branch" \
  --format json \
  --audience agent
```

## 参考
1. [open-code-review](https://github.com/alibaba/open-code-review/blob/main/README.zh-CN.md)