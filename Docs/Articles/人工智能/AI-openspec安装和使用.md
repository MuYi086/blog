---
tags:
  - 人工智能
---
# AI-openspec安装和使用

## 介绍

`OpenSpec` 是一个给 `AI` 编程助手用的**规格驱动开发**（`spec-driven development`，`SDD`）框架，目标是 `build the right thing and build it right`——先把要做什么写清楚（规格），再让 `agent` 按规格去实现。它轻量、可配置、不绑定某个特定工具，同一个规格可以被 `Claude Code`、`Codex`、`OpenCode` 等多个 `agent` 复用。

核心是一个五步循环：

1. **探索**（`explore`）：和 `agent` 一起想清楚问题，读代码、比较方案，不写任何代码；
2. **提案**（`propose`）：把想法变成一份可评审的计划，生成 `openspec/changes/<change>/` 目录（`proposal.md`、`specs/`、`design.md`、`tasks.md`）；
3. **评审**（`review`）：在还没有代码的时候修正计划——直接改 `Markdown` 文件，或者让 `agent` 改；
4. **实施**（`apply`）：新开一个干净的会话，`agent` 按 `tasks.md` 逐条实现并勾选；
5. **归档**（`archive`）：把变更里的规格合并进主规格 `openspec/specs/`，并把变更目录移入 `openspec/changes/archive/`。

> 版本提示：`OpenSpec 2.0` 起以**技能**（`skills`）为主，`1.x` 的 `/opsx:*` 命令文件已被取代；从旧版升级请参考官方的 `Upgrade to 2.0` 文档。

- 官网：<https://openspec.dev/>
- 仓库：[Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec)（`MIT` 协议）

## 安装 CLI

`OpenSpec` 的 `CLI` 是一个单文件，**独立安装版不需要 `Node.js`**（`Alpine Linux` 需先装 `libstdc++`、`libgcc`）。

`macOS` / `Linux`：

```shell
curl -fsSL https://openspec.dev/cli/install.sh | sh
```

`Windows` 的 `PowerShell`：

```powershell
irm https://openspec.dev/cli/install.ps1 | iex
```

如果安装器打印出 `export PATH=...` 之类的提示，按提示执行。装完验证：

```shell
openspec --version
```

### 用包管理器安装（可选）

```shell
# npm（需要 Node.js 22.20.0 及以上）
npm install -g @fission-ai/openspec@latest

# Homebrew
brew install openspec

# Nix
nix profile install github:Fission-AI/OpenSpec
# 或临时运行，不留在 PATH 里
nix run github:Fission-AI/OpenSpec -- --version

# Deno（需要显式权限参数）
deno install --global \
  --allow-read --allow-write --allow-env --allow-sys=cpus,homedir --allow-net=edge.openspec.dev \
  npm:@fission-ai/openspec@latest
```

`pnpm`、`bun` 同样可用。注意两点：`yarn global add` 只适用于 `Yarn Classic`（`1.x`），新版 `Yarn` 已移除全局安装；`bun` 虽然能装 `OpenSpec`，但运行时仍需要机器上有 `Node.js`。安装器默认装到 `~/.local/bin`（`Windows` 为 `%LOCALAPPDATA%\Programs\openspec`，并自动加入用户 `PATH`）。可用环境变量控制：

- `OPENSPEC_VERSION`：**仅当需要锁定版本时才设置**，默认安装最新版（目前为 `v2.1.1`），例如 `OPENSPEC_VERSION=v2.1.1`；
- `OPENSPEC_INSTALL_DIR`：自定义安装目录。

`Windows` 下要先设置变量再执行安装脚本：

```powershell
$env:OPENSPEC_VERSION = 'v2.1.1'
irm https://openspec.dev/cli/install.ps1 | iex
```

## 项目初始化

进入项目目录执行：

```shell
cd your-project
openspec init
```

`init` 会做两件事：在仓库根目录创建 `openspec/`（规格与变更记录），并为选定的工具安装技能。常用参数：

```shell
# 直接指定工具，跳过交互式选择
openspec init --tools claude,codex,opencode

# 只建 openspec/ 结构，不装任何工具文件
openspec init --tools none

# 把技能装到项目里（默认是把技能装到机器上，跨项目共享）
openspec init --scope project --tools claude
```

关于 `scope`：

- **默认（机器级）**：技能放在 `~/.agents/skills/`，所有项目共享，项目里只提交 `openspec/`；
- **`--scope project`**：技能放在项目的 `.agents/skills/`，并给需要独立目录的工具建立链接或副本，`openspec/`、技能、工具入口一起提交到 `Git`。`Windows` 上项目安装使用副本，便于随 `Git` 带到其它检出目录。

生成的目录大致如下（以 `Claude Code` + `Codex` 为例）：

```text
my-project/
├── .agents/skills/
│   ├── .openspec-target          # 记录了本项目为哪些工具做了配置
│   └── openspec-propose/SKILL.md # 各工具共用的那一份技能
└── .claude/
    └── skills/openspec-propose   # 指向 ../../.agents/skills/openspec-propose 的链接
```

`Codex`、`Cursor` 等工具直接读 `.agents/skills/`，不需要额外链接。`openspec update` 会依据 `.openspec-target` 知道该刷新哪些工具和技能。

> 不想手动敲命令？可以把官方的 `setup prompt` 粘贴给 `AI` 助手，它会安装 `CLI`、执行 `openspec init` 并验证结果：
>
> ```text
> Fetch https://raw.githubusercontent.com/Fission-AI/OpenSpec/main/install.md and follow it.
> ```
>
> 也可以直接在终端里管道给 `CLI` 助手（以 `Claude Code` 为例）：`curl -fsSL https://raw.githubusercontent.com/Fission-AI/OpenSpec/main/install.md | claude`。官方提醒这种方式效果因模型而异，且只适合能自己纠正 `AI` 错误的用户。

## `Claude Code`

`Claude Code` 的工具 `id` 是 `claude`：

```shell
openspec init --tools claude
```

- 技能位置：共用的 `.agents/skills/`，并在 `.claude/skills/openspec-*` 建立链接；
- 调用方式：斜杠命令 `/openspec-propose`、`/openspec-explore`、`/openspec-apply-change`、`/openspec-archive-change` 等；
- 如果选择了技能但在聊天里找不到：

```shell
openspec update
```

然后**重启 `Claude Code`**，再在聊天里输入 `/openspec-propose`。如果只是部分工作流缺失，检查当前 `profile`（见下文"工作流与技能"）。

## `Codex`

`Codex` 的工具 `id` 是 `codex`：

```shell
openspec init --tools codex
```

- 技能位置：`.agents/skills/openspec-*/SKILL.md`。`Codex` 是 **`skills-only`**——即使交付模式设为 `commands`，也不会生成 `Codex` 自定义提示词文件；
- 调用方式：**用 `$` 而不是 `/`**，例如 `$openspec-propose`、`$openspec-apply-change`。`Codex` 不识别 `/openspec-propose`（上游 `issue`），所以直接把 `$openspec-propose` 和你的想法一起说出来，或者输入 `/skills` 选择技能；
- `Codex` 桌面版：打开侧栏的 **`Skills`**，选择对应的 `openspec-*` 技能即可；
- 旧版本装在 `.codex/skills/` 下的技能会在下一次 `openspec update` 时迁移，自定义和被改过的文件会保留。

## `OpenCode`

`OpenCode` 的工具 `id` 是 `opencode`：

```shell
openspec init --tools opencode
```

- 技能位置：共用的 `.agents/skills/`，并在 `.opencode/skills/` 下提供入口；
- 调用方式：和大多数工具一样用斜杠命令，例如 `/openspec-propose`、`/openspec-apply-change`；
- 之后正常在 `OpenCode` 里提需求即可，也可以直接用自然语言说"用 `openspec` 的 `apply-change` 技能实现这个变更"。

## 其它 `agent`

`openspec init --tools` 支持 `30+` 种工具，常见 `id`：

```text
claude             Claude Code
codex              Codex
opencode           OpenCode
cursor             Cursor
gemini             Gemini CLI
github-copilot     GitHub Copilot
kimi               Kimi Code
kiro               Kiro
qwen               Qwen Code
trae               Trae
agents             其它 / 通用（读取共享的 .agents/skills/）
```

完整列表见官方文档的 `Supported Tools`。大多数工具的调用写法都是 `/openspec-<skill>`，`Codex` 是 `$openspec-<skill>`；`Kimi Code` 是 `/skill:openspec-<skill>`。

如果你的工具不在列表里、但能读 `.agents/skills/`，用 `--tools agents` 即可。对于只认自己目录的工具，可以从项目根目录建一个链接指过去：

```shell
mkdir -p .mytool
ln -s ../.agents/skills .mytool/skills
```

`Windows` 的 `cmd`：

```bat
mkdir .mytool
mklink /J .mytool\skills .agents\skills
```

> `Git` 提交链接的注意点：`Windows` 上需要 `git config --global core.symlinks true`（或 `git clone -c core.symlinks=true <url>`）并开启"开发人员模式"，否则链接会签出成一个小文本文件；用 `mklink /J` 创建的目录联接不会被提交为链接，每台机器都要重建。

## 工作流与技能

`init` 打印的提示会告诉你当前工具正确的调用形式。以下按 `Claude Code` / `OpenCode` 的 `/` 写法列出（`Codex` 把 `/` 换成 `$`）：

| 技能 | 用途 |
| --- | --- |
| `/openspec-explore` | 探索模式：读代码、权衡方案、梳理计划，**不写代码** |
| `/openspec-propose <想法>` | 把想法变成可评审的变更计划（生成 `proposal.md`、`specs/`、`design.md`、`tasks.md`） |
| `/openspec-apply-change` | 按 `tasks.md` 逐条实现，进度就是复选框，没有隐藏状态 |
| `/openspec-verify-change` | 校验实现是否符合规格 |
| `/openspec-archive-change` | 把变更合并进主规格并归档 |

默认使用 **`core profile`**，包含 `propose`、`explore`、`apply`、`update`、`sync`、`archive`。需要扩展工作流（`new`、`continue`、`ff`、`verify`、`bulk-archive`、`onboard`）时：

```shell
openspec config profile
openspec update
```

几个实用点：

- **从探索直接交接**：聊完 `explore` 后说一句 `Propose the change we just discussed`，就会带着刚才的结论进入 `propose`；
- **`apply` 前开新会话**：干净上下文效果更好；中断了就开新会话再说一次 `apply`，会从第一个未勾选的任务继续；
- **改计划随时可以**：规格都是纯 `Markdown`，自己改或让 `agent` 改都行，改完继续 `apply`；
- **归档即沉淀**：`openspec/specs/` 是系统当前行为的唯一事实来源，`openspec/changes/archive/` 是历史，别轻易删除。

## 更新与卸载

升级 `CLI`：

```shell
# 独立安装版
openspec install
# 指定版本（当前最新版为 2.1.1）
openspec install 2.1.1

# npm 安装版
npm install -g @fission-ai/openspec@latest

# Homebrew 安装版
brew upgrade openspec

# Nix 安装版
nix profile upgrade openspec
```

`openspec update` 也会提示是否有新版并可帮你升级（每台机器一次），同时刷新技能——技能不会自动更新。`2.1.1` 起技能直接随 `CLI` 安装，不再依赖 `Git` 和网络。

刷新 `agent` 技能（切换版本或 `profile` 后都要执行）：

```shell
openspec update
```

卸载前请三思：`openspec/specs/` 和 `openspec/changes/archive/` 记录的是系统的行为及其演变原因，建议保留（或留在 `Git` 里）。确认不需要后再删除：

```shell
rm -rf openspec/
```

同时按 `Supported Tools` 里的路径删除各工具生成的 `openspec-*` 技能和 `opsx-*` 命令文件；`CLAUDE.md`、`AGENTS.md` 里的 `OpenSpec` 标记块需要手工删除，你自己的内容要保留。

## 参考

1. [OpenSpec 官网](https://openspec.dev/)
2. [GitHub 仓库 Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec)
3. [官方安装文档 Installation](https://openspec.dev/docs/installation)
4. [Set up your project](https://openspec.dev/docs/setup)
5. [Quickstart](https://openspec.dev/docs/quickstart)
6. [Supported tools（含各工具调用写法）](https://openspec.dev/docs/supported-tools)
