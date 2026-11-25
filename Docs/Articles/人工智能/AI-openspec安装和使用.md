---
tags:
  - 人工智能
---
# AI-openspec安装和使用

## 介绍

`OpenSpec` 是一个给 `AI` 编程助手用的**规格驱动开发**（`spec-driven development`，`SDD`）框架，目标是 `build the right thing and build it right`——先把要做什么写清楚（规格），再让 `agent` 按规格去实现。它轻量、可配置、不绑定某个特定工具，同一个规格可以被 `Claude Code`、`Codex`、`OpenCode` 等多个 `agent` 复用。

日常流程是 **探索 → 提案 → 评审 → 实施 → 验收 → 归档**。需求有变化时修订提案，确有需要时可以提前同步规格，稍后再归档。

OpenSpec 2.x 通过 **技能（Skills）**提供对话工作流。Codex 对话中的 `$openspec-update-change` 会修订某个变更的计划，终端里的 `openspec update` 会刷新已安装的工作流文件。旧教程中的 `/opsx:*` 是 1.x 的入口写法。 [官方技能说明](https://openspec.dev/docs/skills)

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

- `OPENSPEC_VERSION`：按需锁定版本，例如 `OPENSPEC_VERSION=v2.1.1`。省略时由安装器选择可用的最新稳定版。
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

支持 `--scope` 的 2.x 版本可选择两种安装范围。OpenSpec 2.0 默认将技能装在项目中，2.1 起新项目默认采用机器级安装。可以用 `openspec init --help` 核对当前版本支持的选项。 [官方项目初始化说明](https://openspec.dev/docs/setup)

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

- 技能位置：项目级安装使用 `.agents/skills/`，并在 `.claude/skills/` 下提供入口。机器级安装使用用户目录下的对应路径。
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

- 技能位置：取决于安装范围，查看项目的 `.agents/skills/` 或用户目录的 `~/.agents/skills/`。
- 调用方式：在对话中输入 `$openspec-propose`、`$openspec-apply-change` 等技能名，并附上需求或 Change 名称。
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

### 规格和变更放在哪里

`openspec/specs/` 保存项目当前采用的**主规格**。`openspec/changes/<change>/` 保存一次变更的规划和实施记录，完成后可移到 `openspec/changes/archive/`。以默认的 `spec-driven` schema 为例，一个 Change 通常包含以下文件。 [官方项目配置说明](https://openspec.dev/docs/setup)

| 产物 | 写什么 |
| --- | --- |
| `proposal.md` | 变更的原因、范围和受影响的能力 |
| `specs/<capability>/spec.md` | **增量规格（delta spec）**，描述本次新增、修改、删除或重命名的需求及其可观察的行为 |
| `design.md` | 技术方案、关键取舍、迁移或兼容性处理 |
| `tasks.md` | 可执行、可验证的任务清单，完成后勾选 |

### 默认安装的六个技能

下表使用技能的完整名称。在 Codex 对话中加 `$`，在 Claude Code 等支持斜杠调用的工具中加 `/`。项目里同时有多个 Change 时，在对话中明确给出目标名称。 [官方技能说明](https://openspec.dev/docs/skills)

| 工作流 | 技能名称 | 什么时候用 |
| --- | --- | --- |
| Explore | `openspec-explore` | 需求还模糊时，先读代码和现有规格，梳理选项、约束和待确认的问题。可以先停在讨论阶段。 |
| Propose | `openspec-propose` | 目标明确后，新建 Change 并一次生成可评审的规划产物。 |
| Update | `openspec-update-change` | 已有 Change 的行为、范围或方案有调整时，修订已有规划并保持相关文件一致。涉及代码的调整随后交给 Apply。 |
| Apply | `openspec-apply-change` | 按任务清单开始或继续实施。结合代码和验证结果更新任务进度。 |
| Sync | `openspec-sync-specs` | 将某个活跃 Change 的增量规格合入主规格，同时保留其活跃状态。适合提前同步已验收的规则，或单独审阅合并结果。 |
| Archive | `openspec-archive-change` | 交付验收后结束 Change，确认规格同步情况，再将变更目录移入归档。常规变更可在这一步一并同步规格。 |

### 用「导出 CSV」走一遍

1. **Explore**。讨论导出范围是当前页、所选行还是全部筛选结果，以及空结果如何处理。
2. **Propose**。创建 `add-csv-export`，把「导出全部筛选结果」写成规格，并拆出交互、导出逻辑和验证任务。
3. **Update**。如果评审决定改为「只导出选中的行」，用 `$openspec-update-change add-csv-export` 同步修订增量规格、设计和任务中受影响的部分。
4. **Apply**。评审通过后用 `$openspec-apply-change add-csv-export` 实现，验证选中多行、未选中以及导出失败等场景。换会话续做时仍可引用同一个 Change。
5. **Archive**。实现和验收完成后，用 `$openspec-archive-change add-csv-export` 同步并归档。若另一个变更要提前引用已经验收的导出规则，可以先用 `$openspec-sync-specs add-csv-export`，稍后再归档。

同步规格的官方技能名是 `openspec-sync-specs`，对应工作流 ID `sync`。同步方向是 **`openspec/changes/<change>/specs/` → `openspec/specs/`**。它按 `ADDED`、`MODIFIED`、`REMOVED`、`RENAMED` 合并对应需求。两个活跃 Change 都修改同一条需求时，合并前先对照当前主规格和两边的目标行为。 [官方技能说明](https://openspec.dev/docs/skills)

修订计划时，如果整类产物还没生成，例如缺少 `design.md`，可以用 Continue 或按 CLI 输出的模板补建。如果需求目标已经换了，另建一个 Change 更容易追踪各自的范围。

### 可选工作流

默认的 `core` profile 安装上述六个工作流。按需启用以下扩展技能。 [官方 Profile 说明](https://openspec.dev/docs/profiles)

| 工作流 | 技能名称 | 用途 |
| --- | --- | --- |
| New | `openspec-new-change` | 创建 Change 骨架，适合分步编写产物。 |
| Continue | `openspec-continue-change` | 按 schema 的依赖顺序生成下一份待创建的产物，适合逐份评审。 |
| Fast-forward | `openspec-ff-change` | 新建 Change，并一次生成进入实施所需的规划产物。已有 Change 可用 Continue 补齐下一份产物。 |
| Verify | `openspec-verify-change` | 核对实现是否覆盖任务和规格场景，以及代码是否符合设计。 |
| Bulk archive | `openspec-bulk-archive-change` | 批量归档多个已完成的 Change，并检查它们的规格差异。 |
| Onboard | `openspec-onboard` | 用一个真实 Change 跟着助手走完一轮工作流。 |

在终端运行以下命令。配置选择会保存到本机，更新后应用到相应的安装范围。

```shell
openspec config profile
openspec update
```

### 常用终端命令

| 命令 | 用途 |
| --- | --- |
| `openspec list` / `openspec list --specs` | 查看活跃 Change 和任务进度，或查看主规格列表。 |
| `openspec status --change add-csv-export` | 查看规划产物的生成状态。 |
| `openspec show add-csv-export --type change --diff` | 查看本次变更的规格差异。 |
| `openspec instructions design --change add-csv-export --json` | 查看产物模板、规则和输出路径。 |
| `openspec validate add-csv-export --type change --strict` | 严格校验 Change 的规格结构和规则。同步后可用 `openspec validate --specs` 检查主规格。 |
| `openspec new change add-csv-export` | 在终端只创建 Change 骨架。 |
| `openspec archive add-csv-export` | 在终端归档，默认同时更新主规格。希望先由助手检查完成情况和同步内容时，可用 Archive 技能。 |
| `openspec update --dry-run` | 预览工作流文件的刷新内容。可用 `openspec update --help` 确认版本支持。 |

**看进度时区分三种证据。** `status` 的产物全齐表示规划已就绪，`list` 的任务数量来自清单勾选，`validate` 通过表示规格文档满足校验规则。交付前还要基于代码、测试和运行结果确认用户场景，必要时用 Verify 技能辅助核对。 [官方 CLI 参考](https://openspec.dev/docs/cli)

## 更新与卸载

升级 `CLI`：

```shell
# 独立安装版
openspec install
# 指定版本示例
openspec install 2.1.1

# npm 安装版
npm install -g @fission-ai/openspec@latest

# Homebrew 安装版
brew upgrade openspec

# Nix 安装版
nix profile upgrade openspec
```

按安装方式升级 CLI 后，再刷新技能以应用当前版本的工作流。部分安装方式也会在 `openspec update` 时提供 CLI 升级提示。 [官方 CLI 参考](https://openspec.dev/docs/cli)

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
7. [Skills（核心及可选工作流）](https://openspec.dev/docs/skills)
8. [Profiles（选择安装哪些技能）](https://openspec.dev/docs/profiles)
9. [CLI（终端命令参考）](https://openspec.dev/docs/cli)
