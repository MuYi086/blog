---
tags:
  - 前端
---
# Node-使用npx skills管理skills

## 安装

```shell
# 全局安装
npm i skills -g

# github 缩写
npx skills add vercel-labs/agent-skills

# github 完整URL
npx skills add https://github.com/vercel-labs/agent-skills

# skill在一个仓库直接的链接
npx skills add https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines

# GitLab URL
npx skills add https://gitlab.com/org/repo

# 其他 git URL
npx skills add git@github.com:vercel-labs/agent-skills.git

# 本地路径
npx skills add ./my-local-skills

# 确认版本号
npx skills --version
```

## 查看列表
```shell
# -g, --global 安装到用户目录而不是项目
# -a, --agent <agents...> 针对特定代理
# -s, --skill <skills...> 按名称安装特定技能
# -l, --list 无需安装即可列出可用技能
# --copy 复制文件而不是符号链接到代理目录
# -y, --yes 台哦过所有确认提示
# --all 等同于 --skill '*' --agent '*' -y

# skills list
npx skills list # 列出已安装的技能
npx skills ls -g # 列出全局安装的技能
npx skills ls -a claude-code -a cursor # 列出具体agent安装的技能
```

## 发现
```shell
# skills find
npx skills find # 交互式搜索
npx skills find typescript # 关键词搜索
npx skills find react --owner vercel # 通过组织或者拥有者搜索
```

## 升级
```shell
# skills update
npx skills update # 更新所有技能
npx skills update my-skill # 通过名称更新单一技能
npx skills update frontend-design web-design-guidelines # 更新多个具体的技能
npx skills update -g # 更新全局技能
npx skills update -p # 更新项目技能
npx skills update -y # 非交互式(自动检测范围:在项目中则为项目级，否则为全局)
```

## 创建
```shell
# skills init
npx skills init # 在当前目录创建一个SKILL.md
npx skills init my-skill # 在子目录创建一个SKILL
```


## 删除
```shell
# skills remove
npx skills remove # 交互式删除已安装的技能
npx skills remove web-design-guidelines # 通过名称删除具体的skill
npx skills remove frontend-design web-design-guidelines # 删除多个技能
npx skills remove --global web-design-guidelines # 删除全局的技能
npx skills remove --agent claude-code cursor my-skill # 从具体agent删除技能
npx skills remove --all # 无需确认删除所有技能
npx skills remove --skill '*' -a cursor # 从具体的agent删除所有技能
npx skills remove my-skill --agent '*' # 从所有的agent删除具体的skill
npx skills rm my-skills # 使用 rm 的alias名称 
```

## 参考
1. [skills](https://github.com/vercel-labs/skills)
1. [开放代理技能工具 - npx skills 的详解](https://zhuanlan.zhihu.com/p/2002781120773768430)
1. [npx skills : 最佳 Skills 管理工具完整指南](https://zhuanlan.zhihu.com/p/2036456492824580192)
