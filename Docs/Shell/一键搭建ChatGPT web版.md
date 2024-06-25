# 一键搭建ChatGPT web版

## 介绍
成功 [解锁ChatGPT](/Shell/使用V2ray,CloudFlare%20Warp解锁GPT) 后，虽然官网的 `3.5` 是免费，但是使用上也不是很方便，需要科学上网才能使用访问 `chat` 页面。于是想到有没有可以国内访问的 `web` 版本，还真有， `github` 上已经开源了 `ChatGPT-Next-Web` ，使用 `openai` 的付费 `api key` 即可。
![ChatGPT-Next-Web](/Images/Shell/%E4%B8%80%E9%94%AE%E6%90%AD%E5%BB%BAChatGPT%20web%E7%89%88/ChatGPT-Next-Web_step4.png 'ChatGPT-Next-Web')

## 创建API keys
::: warning 步骤
1. 登录 `openai` 并访问 `api keys` 页面: https://platform.openai.com/account/api-keys

1. 右上角 `Personal` => `View API keys` => `Create new secret key`
:::


## 部署 ChatGPT-Next-Web
访问 [ChatGPT-Next-Web](https://github.com/Yidadaa/ChatGPT-Next-Web), 参考中文版本开始部署,可以直接使用 `github` 账号登录，还是很方便的。
创建过程中填入 `openai key` 和 访问密码 `code` (有密码才能访问聊天，防止别人盗用你的额度), 点击 `Deploy` 后等待安装大概2分钟左右.
部署成功后， 点 `continue to dashboard`, 可以看到一个默认域名，但是只能通过梯子访问，不符合我们的预期，所以我们去 `Settings => Domains => Add` 给他添加一个可以国内访问的域名

![添加新域名](/Images/Shell/%E4%B8%80%E9%94%AE%E6%90%AD%E5%BB%BAChatGPT%20web%E7%89%88/ChatGPT-Next-Web_step1.png '添加新域名')

## 解析域名
我们将刚才在 `vercel` 网站 添加的域名解析到 `cname.vercel-dns.com` 并启用代理,保存。
![解析域名](/Images/Shell/%E4%B8%80%E9%94%AE%E6%90%AD%E5%BB%BAChatGPT%20web%E7%89%88/ChatGPT-Next-Web_step3.png '解析域名')
![解析域名](/Images/Shell/%E4%B8%80%E9%94%AE%E6%90%AD%E5%BB%BAChatGPT%20web%E7%89%88/ChatGPT-Next-Web_step2.png '解析域名')

等待几分钟，生效后就可以使用浏览器访问你刚才设置的域名，畅快的使用 `chatgpt` 了。

## 参考
1. [ChatGPT-Next-Web](https://github.com/Yidadaa/ChatGPT-Next-Web)
1. [一键搭建web版chatGPT，无需魔法，国内可用](https://juejin.cn/post/7224121578124050490)
1. [ChatGPT Next Web 部署教程：一键搭建一个国内可以访问的 ChatGPT](https://laowangblog.com/chatgpt-next-web-set-up-tutorial.html)