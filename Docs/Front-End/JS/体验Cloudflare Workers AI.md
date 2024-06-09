# 体验Cloudflare Workers AI

## 介绍
`Workers AI` 允许您在 `Cloudflare` 网络上运行机器学习模型，无论是来自 `Workers` 、`Pages` 还是通过 `Cloudflare API` 的任何地方编写的代码。

::: warning 注意
`Workers AI` 将于 2024 年 4 月 1 日后对以下型号的所有使用超过每天 `10,000` 个神经元的部分收取每 `1,000` 个神经元 `0.011` 美元的费用

* bge-small-en-v1.5
* bge-base-en-v1.5
* bge-large-en-v1.5
* distilbert-sst-2-int8
* llama-2-7b-chat-int8
* llama-2-7b-chat-fp16
* mistral-7b-instruct-v0.1
* m2m100-1.2b
* resnet-50
* whisper

其他标记为 `beta` 版本的模型目前不收费。

有关更多详情，请参考 [价格页面](https://developers.cloudflare.com/workers-ai/platform/pricing)
:::

## 在线体验
[playground](https://playground.ai.cloudflare.com/)

## CLI 运行
### 准备条件
1. 注册 `cloudflare` 账号
1. 安装 `nodejs` 和 `npm`

### 创建 worker 项目

::: code-group
```shell [npm]
npm create cloudflare@latest
```
```shell [yarn]
yarn create cloudflare
```
:::

### 配置环境变量

在 `wrangler.toml` 文件末尾添加配置, 将 `Workers AI` 绑定到您的 `Worker`

```shell
[ai]
binding = "AI"
```

### 运行一个推理任务

这里我们使用 `@cf/qwen/qwen1.5-14b-chat-awq` 尝试问答

调整 `src/index.ts`

```js
export interface Env {
  AI: Ai;
}

export default {
  async fetch(request, env): Promise<Response> {

    const messages = [
      { role: "system", content: "You are a friendly assistant" },
      {
        role: "user",
        content: "对比Vue和React,并给出未来前端的趋势",
      },
    ];
    const response = await env.AI.run("@cf/qwen/qwen1.5-14b-chat-awq", { messages });

    return Response.json(response);
  },
} satisfies ExportedHandler<Env>;
```

使用 `npm run dev` 运行推理，再打开的网页使用 `cloudflare` 授权后，即可看到返回结果。

![CLI](/Images/Front-End/JS/体验CloudflareWorkersAI/cli.jpg)

## curl 运行

```shell
# account_id 在 左侧 workers ai => 使用 REST API => 获取帐户 ID

# token 在 左侧 workers ai => 使用 REST API => 创建 Workers AI API 令牌

curl https://api.cloudflare.com/client/v4/accounts/$CLOUDFLARE_ACCOUNT_ID/ai/run/@cf/qwen/qwen1.5-14b-chat-awq \
  -X POST \
  -H "Authorization: Bearer $CLOUDFLARE_AUTH_TOKEN" \
  -d '{ "messages": [{ "role": "system", "content": "You are a friendly assistant" }, { "role": "user", "content": "对比Vue和React,并给出未来前端的趋势" }]}'
```

  ![curl](/Images/Front-End/JS/体验CloudflareWorkersAI/curl.jpg "curl")

## REST API

```js
const axios = require('axios');

const account_id = 'xx'
const token = 'xx'
const model_name = '@cf/qwen/qwen1.5-14b-chat-awq'
const options = {
	method: 'POST',
	url: `https://api.cloudflare.com/client/v4/accounts/${account_id}/ai/run/${model_name}`,
	headers: {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${token}`
	},
	data: {
		text: '比较一下Vue和React，以及未来web前端趋势'
	}
};

axios.request(options).then(function(response) {
	console.log(response.data);
}).catch(function(error) {
	console.error(error);
});
```

## 图片生成
1. 使用 `node` 实现

    ```js
    export interface Env {
      AI: Ai;
    }

    export default {
      async fetch(request, env): Promise<Response> {

        const inputs = {
          prompt: "a lovely korea girl, with curly hair",
        };

        const response = await env.AI.run(
          "@cf/stabilityai/stable-diffusion-xl-base-1.0",
          inputs
        );

        return new Response(response, {
          headers: {
            "content-type": "image/png",
          },
        });
      },
    } satisfies ExportedHandler<Env>;
    ```

    ![img1](/Images/Front-End/JS/体验CloudflareWorkersAI/img1.jpg "img1")

1. 使用 `culr` 实现

    ```shell
    # -o 将二进制图片保存到文件
    curl https://api.cloudflare.com/client/v4/accounts/${account_id}/ai/run/@cf/stabilityai/stable-diffusion-xl-base-1.0 \
      -X POST \
      -H "Authorization: Bearer ${token}" \
      -d '{ "prompt": "a lovely korea girl, with curly hair" }' \
      -o test2.jpg
    ```

    ![img2](/Images/Front-End/JS/体验CloudflareWorkersAI/img2.jpg "img2")


## 参考
1. [Workers AI](https://developers.cloudflare.com/workers-ai/)
1. [Excute Ai Model](https://developers.cloudflare.com/api/operations/workers-ai-post-run-model)