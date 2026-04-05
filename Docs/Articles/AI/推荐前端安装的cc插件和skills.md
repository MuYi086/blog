---
tags:
  - AI
---
# 推荐前端安装的cc插件和skills

## 介绍
`claude code` 是 `ai` 的当红炸仔鸡，尤其对开发人员有巨大的提效。以下内容也是我咨询了主流的前沿 `ai` 得到的最适合我目前技术栈的回答，同样也适用其他开发参考。

## 总结
1. `Superpowers`

    ```shell
    # claude code
    /plugin install superpowers@claude-plugins-official

    # codex
    Fetch and follow instructions from https://raw.githubusercontent.com/obra/superpowers/refs/heads/main/.codex/INSTALL.md
    ```

1. 代码智能：`typescript-lsp`（官方插件）

    ```shell
    /plugin install typescript-lsp@claude-plugins-official
    ```

1. `Vue 3` 规范：`vuejs-ai/skills`（Vue 官方风格技能包）

    ```shell
    /plugin marketplace add vuejs-ai/skills
    # 容易超时，建议通过魔法或者skills add安装
    ```

1. `Uniapp` 跨端：`enze00/uniapp-frontend-skills`

    ```shell
    # claude code 官方安装
    /plugin marketplace add enze00/uniapp-frontend-skills
    /plugin install uniapp-frontend-skills@uniapp-frontend-skills 

    # skills 安装
    npx skills add https://github.com/enze00/uniapp-frontend-skills --skill uniapp-frontend
    ```

1. 前端设计/视觉：官方 `frontend-design` 技能 + `Build with Claude` 中的 `frontend-design-pro`

    ```shell
    # 添加 Claude code 插件市场  
    /plugin marketplace add anthropics/claude-code  
      
    # 安装前端设计插件  
    /plugin install frontend-design@claude-code-plugins 

    # skills
    npx skills add https://github.com/anthropics/skills --skill frontend-design
    ```

1. `code-review-skill` —— 综合代码审查技能

    ```shell
    # claude code
    /plugin marketplace add awesome-skills/code-review-skill
    /plugin install code-review-skill@code-review-skill
    ```

1. `Figma` → 前端：`Figma MCP` + 官方 `figma` 插件

1. `Java` 后端协作：`decebals/claude-code-java` 技能包（含 `Spring Boot` 模式）

    ```shell
    # 克隆仓库
    git clone https://github.com/decebals/claude-code-java.git

    # 在你的 Java 项目里执行脚本，自动配置 .claude/ 和 CLAUDE.md
    ./scripts/setup-project.sh ~/projects/your-java-project
    ```

1. `ccstatusline` 插件


     ```shell
    # 一个可高度自定义的 Claude Code CLI 状态栏格式化工具
    git clone https://github.com/sirmalloc/ccstatusline
    ```


## 参考
1. [SKILLS](https://skills.sh/)