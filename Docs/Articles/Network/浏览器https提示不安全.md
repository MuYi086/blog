---
tags:
  - Network
---
# 浏览器https提示不安全

## 介绍
有些免费的 `SSL` 证书无法通过浏览器验证，访问时会提示不安全，非常影响用户访问。

![network_error](/Images/Network/浏览器https提示不安全/network_error.png 'network_error')

一些免费免费证书，比如我申请的 `cloudflare` 15年的证书就在此列（也包括一些其他证书）

点开左上角 `URL` 可以看到详细提示信息

![network_detail](/Images/Network/浏览器https提示不安全/network_detail.png 'network_detail')

## 解决办法
1. 申请其他受认证的免费 `SSL` 证书（比如腾讯云的免费证书 `TrustAsia` ，其他免费的 `Lets's Encrypt`, `ZeroSSL` 等）
1. 购买付费证书（土豪可以忽略1，直接选择2即可）

## 申请腾讯云免费证书
1. 登录腾讯云控制台，找到 [我的证书](https://console.cloud.tencent.com/ssl) => `申请免费证书`
1. 填写绑定域名，手动DNS验证,申请邮箱 => 提交申请
1. 复制腾讯云生成的解析信息

    ![tencent_cname](/Images/Network/浏览器https提示不安全/tencent_cname.png 'tencent_cname')

1. 手动添加一条解析记录，比如我的域名由 `cloudflare` 解析的，就需要在 `cloudflare` 的 `DNS` 面板新增一条解析，并保存

    ![cloudflare_cname](/Images/Network/浏览器https提示不安全/cloudflare_cname.png 'cloudflare_cname')

1. 腾讯云 `SSL` 申请页面, 点击验证域名, 成功后再证书列表找到刚才申请的证书，点击下载即可
1. 在 `bt`，`1panel`等面板, 给相关的网站配置 `https`，证书信息填写刚才获得的 `KEY` 和 `PEM`

::: warning 注意
从2024年4月25日后，多数证书厂商的免费 `SSL` 证书有效期调整为 `90` 天，已申请的证书有效期不变。
:::



## 利用1panel申请Let's Encrypt证书
1. 登录 `1panel` 面板，找到 网站 => 证书 => `Acme` 账户 => 创建账户
1. 填写邮箱，账号类型选择 `Let's Encrypt`, 秘钥算法选择 `EC 256`
1. 登录 `cloudflare` 控制台， 右上角个人中心 => 我的个人资料 => `API` 令牌
1. 创建令牌 => 选择 `编辑区域DNS` => 使用模板 => 其他都默认，第二栏区域资源 => `Select` 对应下拉选择对应域名 => 继续以显示摘要 => 创建令牌 => 复制 `API` 令牌
1. 回到 `1panel` 面板，证书栏目 => 选择 `DNS` 账户 => 创建账户 => 选择 `Cloudflare` => 输入刚才复制的 `API` 令牌
1. 点击申请证书 => 填写域名 => `Acme` 账户选择 `Let's Encrypt` => 秘钥算法选择 `EC 256` => 验证方式选择 `DNS` 账号(下拉选择 `cloudflare` ) => 确认

    ![ssl_apply](/Images/Network/浏览器https提示不安全/ssl_apply.png 'ssl_apply')

1. 在面板对应网站 配置项 `https`，选择对应的 Acme 账户，选择对应的证书, 保存，再次访问网站，即可看到 `https` 正常访问

    ![admin_ssl](/Images/Network/浏览器https提示不安全/admin_ssl.png 'admin_ssl')


::: tip 提示
`RSA`：是一种非对称加密算法，常见的密钥长度包括 `2048` 位、`3072` 位和 `4096` 位等。较长的密钥长度通常提供更强的安全性，但也会增加加密和解密的计算复杂度。

`EC`：是一种椭圆曲线加密算法，它在相同的安全级别下拥有更小的密钥长度和更高的性能, 但计算复杂度相对较高。

对于个人博客使用的网站和服务器, 一般会选择 `RSA 2048`, `EC 256` 或更长的密钥长度以确保通信的安全性
:::

## 利用1panel申请ZeroSSL证书
1. 同上操作，只是创建`Acme` 账户时，选择 `ZeroSSL`，其他都一致即可

::: warning 注意
不要选择 `Buypass` 和 `Google Cloud`, 大陆无法正常访问
:::


## 参考
1. [1panel中使用cloudflare DNS账户申请SSL证书&自动续签](https://www.soulcloser.com/4075/)