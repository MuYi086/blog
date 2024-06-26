# 体验deepseek

## 介绍
最近 `deepseek` 的风头一时无两，主要是他把 `LLM` 的 `api` 打到的白菜价，并且 [不限制并发](https://platform.deepseek.com/api-docs/zh-cn/faq/#%E8%B0%83%E7%94%A8%E6%A8%A1%E5%9E%8B%E6%97%B6%E7%9A%84%E5%B9%B6%E5%8F%91%E9%99%90%E5%88%B6%E6%98%AF%E5%A4%9A%E5%B0%91%E6%98%AF%E5%90%A6%E5%8F%AF%E4%BB%A5%E6%8F%90%E9%AB%98%E8%B4%A6%E5%8F%B7%E7%9A%84%E5%B9%B6%E5%8F%91%E4%B8%8A%E9%99%90)（这点比其他大模型良心太多，很多大模型虽然跟着降价，但是都是限制了并发的，极不友好，举个例子，我日常使用的 `沉浸式翻译` 打开个英文网页，分分钟并发就上来了。）

![price](/Images/AI/体验deepseek/price.jpg "price")

## 注册登录
访问 [deepseek](https://www.deepseek.com/zh) 注册登录账号，然后获取 `api key`, 默认赠送 `500` 万 `token`，有效期 `1` 个月。

::: warning 注意
每次生成的 `api key` 只出现一次，需要自行保存，如果忘记则需要删除旧的，重新生成。
:::

## 使用

1. 列出模型

    ```js
    const axios = require('axios')
    const token = 'sk-xxx'

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://api.deepseek.com/models',
      headers: { 
        'Accept': 'application/json', 
        'Authorization': `Bearer ${token}`
      }
    }

    axios(config)
    .then((response) => {
      console.log(JSON.stringify(response.data))
    })
    .catch((error) => {
      console.log(error)
    })
    ```

    可以得到结果，目前支持的模型有：`deepseek-chat`, `deepseek-coder`

1. 对话

```js
const axios = require('axios')
const token = 'sk-xxx'
let data = JSON.stringify({
  "messages": [
    {
      "content": "You are a helpful assistant",
      "role": "system"
    },
    {
      "content": "比较Vue和React，以及未来前端发展趋势",
      "role": "user"
    }
  ],
  "model": "deepseek-chat",
  "frequency_penalty": 0,
  "max_tokens": 2048,
  "presence_penalty": 0,
  "stop": null,
  "stream": false,
  "temperature": 1,
  "top_p": 1,
  "logprobs": false,
  "top_logprobs": null
})

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api.deepseek.com/chat/completions',
  headers: { 
    'Content-Type': 'application/json', 
    'Accept': 'application/json', 
    'Authorization': `Bearer ${token}`
  },
  data : data
}

axios(config)
.then((response) => {
  console.log(JSON.stringify(response.data))
})
.catch((error) => {
  console.log(error)
})
```

## 实用集成
可与常用的软件如 `chatbox`, `chatgpt-next-web`, `沉浸式翻译` 等集成。

[实用集成](https://github.com/deepseek-ai/awesome-deepseek-integration/blob/main/README_cn.md)

## 搭配沉浸式翻译
1. 翻译服务 => `DeepSeek` => 需配置
1. 基本设置 => 自定义 `API Key` => 填入 `api key` => 设置每秒最大请求数 => 自定义 `API` 接口地址(`https://api.deepseek.com`)
1. `AI` 专家 => 按需选择插件，可以有效提高翻译质量

## 参考
1. [deepseek](https://www.deepseek.com/zh)
1. [deepseek docs](https://platform.deepseek.com/api-docs/zh-cn/)