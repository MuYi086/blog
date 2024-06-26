# 科学上网-Cloudflare-Pages

## 部署 Cloudflare Pages

1. 下载 [worker.zip](https://raw.githubusercontent.com/cmliu/edgetunnel/main/worker.zip)  已备份在比特球网盘

1. 在 `Cloudflare Pages` 控制台中选择 上传资产后，为你的项目取名后点击 创建项目，然后上传你下载好的 `worker.zip` 文件后点击 部署站点

1. 部署完成后点击 继续处理站点 后，选择 `设置` > `环境变量` > `制作为生产环境定义变量` > `添加变量`。 变量名称填写 `UUID` ，值则为你的 `UUID`，后点击 保存即可。 [在线生成UUID](https://1024tools.com/uuid/)

1. 返回 `部署` 选项卡，在右下角点击 `创建新部署` 后，重新上传 `worker.zip` 文件后点击 `保存并部署` 即可。

## 访问订阅内容

1. 访问 `https://[YOUR-PAGES-URL]/[YOUR-UUID]` 即可获取订阅内容

::: warning 注意
直接使用默认网页地址生成的 `v2ray` 链接，会被屏蔽，无法正常使用，建议参考下方教程配置 `自定义域` 访问
:::

## 配置自定义域

1. 在 `Pages` 控制台的 `自定义域` 选项卡，下方点击 `设置自定义域`。

1. 填入你的自定义二级域名，注意不要使用你的根域名，例如：我的主域名是 `muyi086.top`, 添加一个已经解析过的二级域名 `v2ray.muyi086.top`

1. 再次访问 `https://[自定义二级域名]/[YOUR-UUID]` 即可获取订阅内容，此时这个 `v2ray` 链接是可以科学上网的


## 参考
1. [edgetunnel](https://github.com/cmliu/edgetunnel)