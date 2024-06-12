# 使用husky+commitlint规范代码提交

## 介绍
在项目迭代中，我们希望在代码提交时，能够规范提交信息，防止提交信息不规范，导致代码提交时，出现错误。这时候，我们可以使用 `husky` + `commitlint` 来实现。

## commitlint

[commit规范说明](/Docs/Front-End/Standards/commit规范)

### 安装
```shell
# npm
npm i -D commitlint @commitlint/config-conventional @commitlint/cli

# yarn
yarn add -D commitlint @commitlint/config-conventional @commitlint/cli
```

### 配置
::: code-group
``` js [commitlint.config.js]
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 'body-leading-blank': [2, 'always'], // 主体前有空行，默认就是 always
    // 'footer-leading-blank': [2, 'always'], // 末行前有空行，默认就是 always
    // 'header-max-length': [2, 'always', 108], // 首行最大长度，默认就是 always,72
    // 'subject-empty': [2, 'never'], // 标题不可为空，默认就是 never
    // 'type-empty': [2, 'never'], // 类型不可为空，默认就是 never

    // 允许的类型
    'type-enum': [
      2,
      'always',
      [
        'build', // 构造工具、外部依赖（webpack、npm）
        'chore', // 不涉及 src、test 的其他修改（构建过程或辅助工具的变更）
        'ci', // 修改项目继续集成流程（Travis，Jenkins，GitLab CI，Circle等）
        'docs', // 文档
        'feat', // 新增功能
        'fix', // bug 修复
        'perf', // 性能优化
        'refactor', // 重构
        'revert', // 回退
        'style', // 代码风格（不影响代码含义）
        'test', // 测试

        // 下面几个是自定义新增的
        'wip', // 开发中
        'refine', // 小优化，没有到 refactor 的程度
      ]
    ]
  }
}
```
:::

## husky
### 安装
```shell
# npm
npm i -D husky

# yarn
yarn add -D husky
```

### 配置
::: code-group
```json [package.json husky9]
{
  "scripts": {
    "prepare": "husky && npm run huskyInit",
    "huskyInit": "zx ./huskyInit.mjs"
  }
}
```
```json [package.json husky8]
{
  "scripts": {
    "prepare": "husky install && npm run huskyInit",
    "huskyInit": "zx ./huskyInit.mjs"
  }
}
```
:::

### 使用
正常 `npm i` 或者 `yarn install` 后，会自动执行 `prepare` 脚本，然后会自动安装 `husky` 的钩子。

## 常用husky钩子
1. `pre-commit`：在提交之前执行，用于检查代码是否规范，如果不规范，则不允许提交。
1. `commit-msg`：在提交之前执行，用于检查提交信息是否规范，如果不规范，则不允许提交。
1. `pre-push`：在推送之前执行，用于检查代码是否规范，如果不规范，则不允许推送。
1. `post-commit`：在提交之后执行，用于记录提交信息。
1. `post-merge`：在合并之后执行，用于记录合并信息。
1. `post-checkout`：在检出之后执行，用于记录检出信息。
1. `post-receive`：在接收之后执行，用于记录接收信息。
1. `post-rewrite`：在重写之后执行，用于记录重写信息。
1. `post-update`：在更新之后执行，用于记录更新信息。
1. `pre-rebase`：在重写之前执行，用于检查代码是否规范，如果不规范，则不允许重写。
1. `pre-receive`：在接收之前执行，用于检查代码是否规范，如果不规范，则不允许接收。
1. `pre-auto-merge`：在自动合并之前执行，用于检查代码是否规范，如果不规范，则不允许自动合并。
1. `pre-auto-gc`：在自动垃圾回收之前执行，用于检查代码是否规范，如果不规范，则不允许自动垃圾回收。

::: code-group
```shell [pre-commit]
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"
# 加入path
PATH=$PATH:/usr/local/bin:/usr/local/sbin
npx --no-install -- lint-staged
```

```shell [commit-msg]
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"
# 加入path
PATH=$PATH:/usr/local/bin:/usr/local/sbin
npx --no-install commitlint --edit 
```
:::

## 自定义husky init脚本
可以使用 `bash` , `node` , `zx` 达到目的
三选一即可，`zx` 和 `node` 语法一样的，主要是 `import` 改成 `require`

::: code-group
```shell [husky-init.sh]
# bash脚本执行husky-init
# commit-msg
echo '#!/usr/bin/env sh' > .husky/_/commit-msg
echo '. "$(dirname -- "$0")/husky.sh"' >> .husky/_/commit-msg
echo 'npx --no-install commitlint --edit' >> .husky/_/commit-msg

# pre-commit
echo '#!/usr/bin/env sh' > .husky/_/pre-commit
echo '. "$(dirname -- "$0")/husky.sh"' >> .husky/_/pre-commit
echo '# npx --no-install -- lint-staged' >> .husky/_/pre-commit
```

```js [huskyInit.mjs]
#!/usr/bin/env zx
/**
 * @Description: zx脚本执行husky-init
 * @Author: MuYi086
 * @Email: 1258947325@qq.com
 * @Blog: https://github.com/MuYi086/blog
 * @Date: 2024/05/06 15:23
 */
import fs from 'fs/promises'
import chalk from 'chalk'
const dir = '.husky/_/'
const preCommitFile = 'pre-commit'
const commitMsgFile = 'commit-msg'
/**
 * 往固定路径的文件同步写入内容
 * @param {*} path
 * @param {*} content
 */
async function writeCommitScriptToHusky (path, content) {
  try {
    await fs.writeFile(path, content)
  } catch (err) {
    console.log(err)
  }
}

/**
 * 往固定路径的文件同步追加内容
 * @param {*} path
 * @param {*} content
 */
async function addCommitScriptToHusky (path, content) {
  try {
    await fs.appendFile(path, content)
  } catch (err) {
    console.log(err)
  }
}

/**
 * 启动
 */
async function start () {
  const commitMsgPath = `${dir}${commitMsgFile}`
  const preCommitPath = `${dir}${preCommitFile}`
  console.log(chalk.blue('准备执行husky-init'))
  // commit-msg
  console.log(chalk.blue('初始化husky commit-msg'))
  await writeCommitScriptToHusky(commitMsgPath, '#!/usr/bin/env sh')
  await addCommitScriptToHusky(commitMsgPath, '\r\n. "$(dirname -- "$0")/husky.sh"')
  await addCommitScriptToHusky(commitMsgPath, '\r\nnpx --no-install commitlint --edit')
  // pre-commit
  console.log(chalk.blue('初始化husky pre-commit'))
  await writeCommitScriptToHusky(preCommitPath, '#!/usr/bin/env sh')
  await addCommitScriptToHusky(preCommitPath, '\r\n. "$(dirname -- "$0")/husky.sh"')
  await addCommitScriptToHusky(preCommitPath, '\r\n# npx --no-install -- lint-staged')
  console.log(chalk.green('已完成husky init'))
}
start()

```
:::

## 注意
::: warning
`husky8` 生成 `hook` 目录与 `9` 不一致，
::: code-group
```js [huskyInit.mjs husky8]
const dir = '.husky/'
```
```js [huskyInit.mjs husky9]
const dir = '.husky/_/'
```
:::

## 参考
1. [commitlint 规范](https://github.com/conventional-changelog/commitlint)
1. [husky](https://github.com/typicode/husky)
