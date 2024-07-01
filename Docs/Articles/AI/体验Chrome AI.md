---
tags:
  - AI
---
# 体验Chrome AI

## 介绍
`google` 将 `Gemini` 大模型在 `Chrome 127 dev` 版本中已经内置了，但是目前还只是处于实验阶段，感兴趣的同学可以和我们一起体验，提前拥抱变化。

::: warning 注意
通过访问 `roadmap` : `https://developer.chrome.com/blog/chrome-ai-roadmap/`, 可以看到

`127` 对应的 `stable` 版本发布时间为 `20240717`

`128` 对应的 `stable` 版本发布时间为 `20240814`
:::

## 下载
下载 [chrome dev](https://www.google.com/chrome/dev/) 或者 [chrome canary](https://www.google.com/chrome/canary/) 版本号不低于 `127` 即可

## 配置
1. 打开 `chrome://flags`
1. 搜索 `Enables optimization guide on device`, 设置成 `Enabled BypassPerfRequirement`  
1. 搜索 `Enable optimization guide on device`, 设置成 `Enabled`
1. 重启浏览器
1. 打开 `chrome://components/`, 查看 `Optimization Guide On Device Model`

![config](/Images/AI/体验ChromeAI/config.jpg)

::: warning 注意
本人使用经验，在 `linux` 系统， `chrome` 会自动下载模型

`windows` 系统，需要使用代理，科学上网后，手动点击 `Optimization Guide On Device Model` 下的 `Check for update`

截止当前 `20240701`, `Optimization Guide On Device Model` 版本 为 `2024.6.5.2205`
:::

## 确认 Gemini Nano 是否可用
`F12` 打开调试面板，控制台输入 `await window.ai.canCreateTextSession()`, 如果返回 `readily`, 说明已经 `ok` 了


## 使用
1. 我们使用 `vite` 简单创建一个 `vue` 项目

    ```shell
    yarn create vite ai-test --template vue
    ```

1. 编辑 `App.vue`

    ```vue
    <template>
      <textarea v-model="question"></textarea>
      <br />
      <button @click="handleSubmit">向 AI 提问</button>
      <br />
      <textarea v-model="answer"></textarea>
    </template>

    <script setup>
    import { onMounted, ref } from 'vue'

    let AI = null
    const question = ref('')
    const answer = ref('')

    onMounted(async () => {
      AI = await window.model.createTextSession()
    })

    const handleSubmit = async () => {
      const data = await AI.prompt(question.value)
      answer.value = data
    }
    </script>
    ```

1. 页面访问调试

    ```shell
    yarn dev
    ```

    ![use_demo](/Images/AI/体验ChromeAI/use_demo.jpg)

## 总结
目前模型功能比较简单，但是已经可以进行简单的问答了。相信随着版本的不断升级推进，`chrome AI` 功能会越来越全，可玩性会更多，值得期待一波。

## 参考
1. [Chrome 127 内置 AI 大模型，JS 可直接调用！](https://mp.weixin.qq.com/s/NK5Ecl-LLW7KxmSAmuUOBA)
1. [Chrome AI：颠覆网页开发的全新黑科技](https://juejin.cn/post/7384997062415843339?searchId=2024070119185902B808E30391DB0A3F78)
1. [Get Access to Gemini Nano Locally Using Chrome Canary ](https://writingmate.ai/blog/access-to-gemini-nano-locally)