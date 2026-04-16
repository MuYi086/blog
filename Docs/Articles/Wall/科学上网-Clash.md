---
tags:
  - Wall
---
# 科学上网-Clash

`Clash` 作为热门的科学上网工具，有非常多的版本。尤其是 `clash-verge-rev`,基本各个平台的安装包都有提供，我个人使用经常在 `windows` 和 `linux` 上工作，手机也是 `ios` 和安卓来回切，于我而言非常方便，功能体验一致性非常棒。
[下载地址](https://github.com/clash-verge-rev/clash-verge-rev/releases)

## 订阅
我是有购买付费节点作为主力使用，也在 `cloudflare` 搭建了多个免费订阅节点给自己使用。主要是预防特殊情况可以顶上，避免失联。
我

> https://pages12-7sb.pages.dev/12?clash

> https://pages17-mf3.pages.dev/17?clash

## 规则配置
| 流量类型 | 处理方式 | 效果 |
|---------|---------|------|
| 🟢 国内网站及 IP | 直连（DIRECT） | 走家里宽带，速度拉满 |
| 🔴 被墙的海外网站 | 代理（PROXY） | 走节点翻墙访问 |
| 🛑 广告和追踪器 | 拦截（REJECT） | 从底层干掉弹窗广告 |

使用`https://github.com/Loyalsoldier/clash-rules` ,核心优势如下：
1. 规则精准度极高
整合了 `V2Ray` 社区最权威的域名和 `IP` 名单，国内 `IP` 段精准无比，`Apple`、`Google`、`Telegram` 等服务都做了独立细分规则。

2. 每日自动更新
每天早上 `6:30` 由 `GitHub Actions` 自动抓取全网最新数据并重新构建。网站天天变，但你的规则永远是最新的。

3. 全客户端兼容
不管你用的是 `Clash Premium` 内核、`Clash Verge Rev`、`Clash for Windows`，还是 `Clash for Android`，全都完美兼容。

打开 `Clash Verge Rev`-> 点击左侧 「订阅」
在右边找到 「全局扩展覆写配置 (`Merge`)」 卡片
右键点击 -> 选择 「编辑文件」-> 清空原有内容，粘贴配置

各规则说明一览：
| 规则集              | 类型          | 动作     | 说明                         |
| ---------------- | ----------- | ------ | -------------------------- |
| applications     | 本地应用        | DIRECT | 迅雷、百度网盘等 P2P 应用直连          |
| private          | 私有域名        | DIRECT | localhost、局域网域名等           |
| reject           | 广告/追踪       | REJECT | 拦截广告域名和隐私追踪器               |
| icloud / apple   | Apple 服务    | DIRECT | iCloud、App Store 等直连       |
| google           | Google 服务   | PROXY  | Google 搜索、YouTube 等走代理     |
| proxy            | 常见海外站       | PROXY  | Twitter、Telegram、Netflix 等 |
| direct           | 国内域名        | DIRECT | 国内各大网站直连                   |
| cncidr / lancidr | CN IP 段     | DIRECT | 国内 IP 和局域网 IP 直连           |
| telegramcidr     | Telegram IP | PROXY  | Telegram 专用 IP 段走代理        |


## 参考
1. [clash-verge-rev](https://github.com/clash-verge-rev/clash-verge-rev)
1. [clash客户端大全](https://clash-node.com/help/list_6_2.html)
1. [clash免费订阅节点1](https://www.mibei77.com/)
1. [clash免费订阅节点2](https://free.datiya.com/)
1. [clash免费订阅节点3](https://nodefree.net/)
1. [github免费clash节点](https://github.com/free-nodes/clashfree)
1. [Clash 规则配置进阶教程](https://www.ermao.net/blog/clash-rules-config/)