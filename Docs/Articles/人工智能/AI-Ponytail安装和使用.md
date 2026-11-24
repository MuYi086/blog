---
tags:
  - 人工智能
---
# AI-Ponytail安装和使用

## 介绍

`Ponytail`是一个给 `AI` 编程助手（`agent`）用的技能包（`agent skill`），核心理念一句话概括：**让 `AI` 像组里那个最懒的资深开发一样思考——最好的代码，是你根本没写的代码**。

它不是一个独立的工具，而是一套提示词/规则：要求 `agent` 在动手写代码之前，先读懂改动触及的真实代码路径，然后沿着一条「阶梯」选择最省事的解法：

1. 先看仓库里有没有现成的实现可以复用，优先复用；
2. 能不能用标准库、原生能力、已有依赖解决，就不引入新东西；
3. 只有确实需要时，才写最小的实现。

几个关键特点：

- **懒在方案，不懒在读代码**：理解问题是前提，不能跳过；
- **懒但不敷衍**：信任边界校验、数据丢失处理、安全、可访问性这些永远不在裁剪范围内；
- **该留测试就留测试**：涉及分支、循环、解析、金额或安全的逻辑，会留一个小测试；
- **每次回复都会交代**：跳过了什么、没检查什么、有什么风险。

仓库的核心其实只有两个文件：

- `skills/ponytail/SKILL.md`：完整的提示词，支持技能的 `agent` 直接安装它；
- `AGENTS.md`：精简版规则，给只会读取规则文件的 `agent` 用。

其它所有平台的安装方式，本质都是把这套提示词加载进对应的 `agent`。

> 官方仓库：[DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail)，官网：<https://ponytail.dev/>。
> 安全提醒：**只从 `DietrichGebert/ponytail`（`GitHub`）或 `@dietrichgebert/ponytail`（`npm`）安装**。官方从不出售 `.exe` / `.dll` 文件，遇到这种「安装包」一定不是正版。

## 安装前准备

`Claude Code` 和 `Codex` 的插件会运行两个很小的 `Node.js` 生命周期钩子（`hook`），所以需要 `node` 在 `PATH` 里。可以先检查：

```shell
node -v
```

注意：对使用 `nix` / `nvm` 的用户，`node` 必须在**非交互式 `shell`** 的 `PATH` 中。如果没有 `node`，技能本身仍然可用，但每次钩子调用会报一个无害的 `node: command not found`，且自动激活不会生效。

## `Claude Code` 安装

在 `Claude Code` 里，把下面两条**分两次发送**（必须两次独立的 `prompt`，一起发不生效）：

```shell
/plugin marketplace add DietrichGebert/ponytail
/plugin install ponytail@ponytail
```

安装完成后**开启一个新会话**。之后正常提需求即可，`Ponytail` 会默认以 `full` 级别自动生效。

如果用 `Claude Code` 桌面应用（没有 `/plugin` 命令），可以在界面的 **`Code`** 标签页里操作：

- 方式一：在输入框里直接输入上面两条 `/plugin` 命令；
- 方式二：点击输入框旁的 **+** 按钮 → **`Plugins`** → **`Add plugin`** 浏览已配置的市场，在侧边栏 **`Customize`** 里管理市场。

> `CodeBuddy` 也用同样的两条 `/plugin` 命令安装这个插件，用 `/ponytail ultra` 等切换级别，但它没有子 `agent` 注入能力。

## `Codex` 安装

`Codex` 走插件市场安装：

```shell
codex plugin marketplace add DietrichGebert/ponytail
codex plugin add ponytail@ponytail
```

然后启动 `codex`，打开 `/hooks`，检查并信任它的两个生命周期钩子，再开一个新会话即可。

- `Codex` 桌面版：安装完成后**重启应用**，插件就会被识别；
- 如果你是从终端安装的，同时也在用 `ChatGPT` 应用，重启应用后会加载同一个插件。

`Codex` 默认用 `@` 调用技能，例如 `@ponytail-help`、`@ponytail lite`；`ChatGPT` 应用和 `Claude Code` 则用斜杠命令 `/`。

> **如果输入 `@` 后没有识别到 `ponytail` 技能/命令**（输入框不补全、发出去没反应），改用插件命名空间的写法：`$ponytail:ponytail`、`$ponytail:ponytail-review`、`$ponytail:ponytail-audit`、`$ponytail:ponytail-help` 等。格式为 `$<插件名>:<技能名>`，`Codex` 的 `CLI` 和 `IDE` 扩展都支持这种方式。

## `OpenCode` 安装

`OpenCode` 支持多种安装方式，按需选择。

### 方式一：命令行全局安装

```shell
opencode plugin add @dietrichgebert/ponytail
```

### 方式二：项目级配置

在项目的 `opencode.json` 中加入：

```json
{ "plugins": ["@dietrichgebert/ponytail"] }
```

### 方式三：从本地 `checkout` 运行

插件会复用仓库里的 `hooks/` 和 `skills/`，可以直接指向本地目录：

```json
{ "plugins": ["./.opencode/plugins"] }
```

几个容易踩的坑：

- `./` 路径**相对于项目里的 `opencode.json`** 解析；想在多个项目间共享一份 `checkout`，就填该 `checkout` 的 `.opencode/plugins` 目录的**绝对路径**；
- `plugins` 配置项必须是**目录**，不能写具体文件：`OpenCode 2` 对 `ponytail.mjs` 这种路径会报 `configured plugin path must be a directory`；
- 直接在 `OpenCode 2` 里打开这个仓库**不需要任何配置**，它会自动加载 `.opencode/plugins/index.js`；
- `OpenCode 1` 没有 `plugin add`，用的是旧版的 `plugin` 键：`{ "plugin": ["@dietrichgebert/ponytail"] }`，从 `checkout` 运行则填文件路径 `{ "plugin": ["./.opencode/plugins/ponytail.mjs"] }`。

安装后，插件会在**每一轮**按当前级别注入规则集，并注册 `/ponytail` 系列命令。另外，即使不装插件，`OpenCode` 也会自动加载仓库根目录的 `AGENTS.md`，规则同样生效。

> 基于 `OpenCode` 的 `Kilo Code` 走同样的插件，在 `kilo.jsonc`（或全局 `~/.config/kilo/kilo.jsonc`）里加 `{ "plugin": ["@dietrichgebert/ponytail"] }` 即可。

## 其它 `agent`

如果不是上面这几个，按下面思路处理即可：

### 通用做法

- 大多数 `agent` 都读 `AGENTS.md`：把它复制到你的项目根目录；
- 或者让 `agent` 把 `skills/ponytail/SKILL.md` 安装成一个技能；
- 用 `skills CLI` 可以把六个技能批量复制到很多 `agent` 的技能目录：

```shell
npx skills add DietrichGebert/ponytail
```

常用参数：`--agent` 指定 `agent`，`--skill '*'` 一次装齐六个且不询问，`--global` 装到用户级而非项目级。注意这个命令**只装技能**；想要「每会话常驻的规则集」，还得再配 `AGENTS.md` 或用上面的插件。

### 常见平台速查

```shell
# Gemini CLI（作为扩展安装）
gemini extensions install github.com/DietrichGebert/ponytail

# Antigravity CLI（Google 正在把 Gemini CLI 改名为 Antigravity CLI，按你装的命令名来）
agy plugin install github.com/DietrichGebert/ponytail

# GitHub Copilot CLI（和 Codex 一样的插件市场流程）
copilot plugin marketplace add DietrichGebert/ponytail
copilot plugin install ponytail@ponytail

# Goose
goose plugin install github.com/DietrichGebert/ponytail.git

# Pi
pi install git:github.com/DietrichGebert/ponytail
```

只想要规则文件时，仓库里还提供了 `.cursor/rules/`、`.windsurf/rules/`、`.clinerules`、`.github/copilot-instructions.md`、`.kiro/steering/` 等适配文件，复制到对应位置即可。这种方式更轻，但没有斜杠命令和钩子联动。

## 使用

装好后正常提需求即可，默认 `full` 级别常驻生效。需要干预时用命令控制：

| 命令 | 作用 |
| --- | --- |
| `/ponytail [lite \| full \| ultra \| off]` | 设置强度或关闭；不带参数则查看当前级别（关闭时重新以默认级别打开） |
| `/ponytail-review` | 像「被叫起来背锅的资深开发」一样审查当前 `diff`：`bug`、安全、真实负载、缺测试的高风险代码、慢路径，以及可以删掉的东西 |
| `/ponytail-audit` | 对**整个仓库**做同样的检查，按重要性排序 |
| `/ponytail-debt` | 把代码里 `shortcut:` 注释里推迟的事项收集成台账，避免「以后」变成「永远不会」 |
| `/ponytail-gain` | 展示基准测试的成绩板（更少代码、更低成本、更快速度） |
| `/ponytail-help` | 命令速查 |
| `/ponytail band [on \| off]` | 仅 `Claude Code`（2.1.290+）：隐藏/显示输入框上方的成本面板；`/ponytail band import` 可导入历史会话数据 |

级别说明：

- `lite`：轻度干预；
- `full`：默认，完整规则集；
- `ultra`：当代码库「个人冒犯了你」时才用的激进模式；
- `off`：关闭。

几点提醒：

- 这些命令需要**支持技能的宿主**（`Claude Code`、`Codex`、`Devin CLI`、`OpenCode`、`Gemini`、`Antigravity CLI`、`pi`、`Hermes Agent`、`Qoder`、`Grok Build` 等）。纯规则文件适配（如 `Cursor` 规则、`Windsurf`、`Cline`、`Copilot`、`Kiro`）只加载常驻规则，没有命令；
- `Ponytail` 的定位是**编码**，别用它写散文或做非代码类的审查，那需要另一套规则；
- `Ponytail` 不会替你判断「某个抽象是不是公共 `API`」「明天的集成是不是已经签约」「硬件校准参数是不是因为测试机准才显得没用」——这类业务/领域判断还得你自己拿主意。

## 参考

1. [Ponytail 官网](https://ponytail.dev/)
2. [GitHub 仓库 DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail)
3. [官方安装文档 INSTALL.md](https://github.com/DietrichGebert/ponytail/blob/main/INSTALL.md)
4. [A deep dive into Ponytail — Flavio Copes](https://flaviocopes.com/ponytail/)
5. [Ponytail 安装教程：Codex、Claude Code 和 Gemini CLI 怎么用](https://knightli.com/2026/06/24/ponytail-ai-agent-coding-plugin-guide)
