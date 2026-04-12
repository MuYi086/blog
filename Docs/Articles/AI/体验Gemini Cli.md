---
tags:
  - AI
---
# 体验Gemini Cli

## 介绍
免费层级允许每分钟最多 `60` 次模型请求，每天最多 `1,000` 次，且无需付费。 如果您当前 `Google` 账号的免费配额已达到上限，可以选择使用`Gemini API` 密钥。
只要你的代码/脚本不搞并发轰炸，日常交互式使用基本用不完。

## 安装
按照 `npm` 上指定的命令安装
```shell
# 最好安装到全局
npm i -g @google/gemini-cli
```

## 无法登录
初次在命令行使用 `gemini` 运行时，需要登录，这里容易出现登录失败的原因。
需要有俩个前提：

```shell
# 1. 浏览器代理上网(vpn需要时gemini支持的区域)+已登录的google账号
# 2. 终端需要连接代理（可以设置临时代理）
export https_proxy=http://127.0.0.1:10809

# 然后重新再命令行使用gemini授权即可
```

## 常用命令备忘录

### 1. 基础启动与执行
- `gemini`: 启动标准交互会话。
- `gemini "你的问题"`: 运行提示词并保持在交互模式。
- `gemini -p "你的问题"`: 以非交互模式执行提示词（适合脚本自动化）。
- `cat <文件> | gemini`: 处理管道输入（例如：`cat logs.txt | gemini "分析错误"`）。
- `gemini -r latest`: 恢复当前项目最近的一次会话。

### 2. 上下文注入 (@ 命令)
- `@<路径>`: 将文件或目录的内容注入 AI 上下文。
    - **示例**: `@src/utils.ts 重构这段代码以提高性能。`
    - **注意**: 默认遵循 `.gitignore`，会自动跳过 `node_modules` 等无关目录。

### 3. 会话管理与安全
- `/plan`: 进入“计划模式 (Plan Mode)”，在 AI 实际修改文件前审查其操作步骤。
- `/restore`: 撤销 AI 上一步所做的文件修改。
- `/rewind`: 交互式回溯历史，同时回滚对话状态和文件更改。
- `/chat save <标签>`: 手动保存当前进度的快照/检查点。

### 4. 环境与集成
- `!<命令>`: 在会话中直接运行 shell 命令（例如：`!npm test`）。
- `/init`: 在当前目录初始化 `GEMINI.md`，用于设置项目专属的全局指令。
- `/copy`: 快速将 AI 的最后一条回复复制到剪贴板。
- `/tools`: 查看当前 AI 拥有的所有能力（文件读写、搜索、Shell 等）。

### 5. 常用配置参数 (Flags)
- `-m, --model`: 切换使用的模型（如 `pro`, `flash`, `flash-lite`）。
- `--sandbox`: 在沙箱受限环境中运行，增强安全性。
- `--approval-mode`: 设置审批模式（`yolo` 为全自动执行，`plan` 为强制先出计划）。
- `-w, --worktree`: 在独立的 Git worktree 中开启会话，避免污染主分支。

### 6. 扩展功能
- `gemini mcp list/add`: 管理模型上下文协议 (MCP) 服务器，接入外部工具。
- `gemini skills list/enable`: 管理 Agent 技能，用于特定领域的任务增强。
- `gemini extensions install`: 安装社区或本地开发的扩展功能。


## 参考
1. [国内使用 Gemini CLI 常见登录授权失败：安装与排错指南](https://juejin.cn/post/7520139212605128714)