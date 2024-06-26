---
tags:
  - Wall
---
# 科学上网-Slicehosting

## 介绍
利用 `Slicehosting` 空间搭建免费科学上网节点，作为一个备用梯子。

::: warning 注意
不稳定，用了一天服务就 `ban` 了，登录面板一切正常，重启依旧不能正常代理
:::

## 注册
打开官网 [https://dash.slicehosting.tech/](https://dash.slicehosting.tech/) 点击 `Login with Discord` 按钮进行注册

## 创建服务器
进入控制面板，点击 `Create a server` 按钮, 只需输入服务器名称，选择服务器地址(目前有德国和新加坡节点可选)，选择服务器软件 `purpur` (配置最佳,有 `2048M` 内存)，点击 `Create server` 即可创建成功。`CPU` 默认占用是 `50%` ，所以 `Slicehosting` 默认可以创建2个地区的服务器。

点击左侧 `Control panel` 选择 `Reset password` , 记录弹窗里的一次性密码

服务器 `install` 后，点击 `Open` ，输入账号和刚才获得的密码，登录服务器，开始搭建节点。

## 上传节点代码文件

1. 进入 `Flie` 页面，删除 `server.jar` 文件

1. 克隆 [https://github.com/dsadsadsss/java-wanju](https://github.com/dsadsadsss/java-wanju) 项目并上传 `c.yml` 和 `server.jar` 这两个文件 (已备份到比特球)

1. 点击打开 `c.yml` 文件，需要修改 `3` 个地方的信息，分别是自己的 `ARGO` 域名，及其 `CloudFlare Token` 值和 `UUID`

    * 登录 `CloudFlare`，点击左侧的 `Zero Trust`, 选择 `Networks` 下的 `Tunnels`, 创建一个新隧道，复制生成的 `Token`，右键三个点配置添加自定义域名 (最好填二级域名), 选择类型 `HTTP` ，`URL` 地址注意要根据节点类型来确定, 一般选 `vless` 填 `localhost:8002`, 复制 `Subdomain`  + `domain` 生成的域名

    * 通过 [https://uutool.cn/uuid/](https://uutool.cn/uuid/) 生成 `UUID`

      ::: warning 注意
      `vmess` 端口：`localhost:8001`

      `vless` 端口：`localhost:8002`

      删除 `TOK` 和 `ARCO_DOMAIN` 所在行前的 `#`，使该行能够生效。

      `TOK` 数值只粘贴去除 `cloudflared.exe service install` 后的字段，包括之间的空格。
      :::

1. 回到控制台，点击 `Start` ，服务器会运行上传的文件程序。稍等几分钟后(一般 `6` 到 `7` 分钟左右)，就会出现节点信息。

      ::: warning 注意
      但是由于厂商把节点信息给屏蔽掉了，直接是看不到的，需要手动创建节点信息。

      可以手动添加或者利用上面项目里的 `slicehostinghelper.com.exe` 生成 `vless` 链接
      :::

::: danger 危险
Users have to log in to the dashboard within every 7 days, otherwise, servers will be suspended.

用户必须在每 7 天内登录仪表板，否则服务器将被暂停。
:::

## 参考
1. [利用 Slicehosting 搭建免费科学上网节点](https://www.5iehome.cc/archives/using-slicehosting-to-build-free-node.html)
1. [Slicehosting Helper](https://github.com/shiteThings/slicehosting)
1. [java-wanju](https://github.com/dsadsadsss/java-wanju)
