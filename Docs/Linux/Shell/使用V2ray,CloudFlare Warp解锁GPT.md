# 使用V2ray,CloudFlare Warp解锁GPT

## 背景
搭建 `GPT` 后其实有正常使用几个月的，但是后来已经突然无法访问 `chat` 页面，并且提示 `Access Denied` 问题。我本身使用的 `Vultr` 的 `vps` 搭建的 `v2ray` 服务，梯子也能正常使用， 但是就是 `chat` 页面无法访问, 估计是 `openai` 针对多数 `vpn` 的公网 `ip` 做了识别。于是开始 `google` 寻求解决方案。英文论坛上有人提出 `openai` 使用了 `cloudflare` 的服务来过滤 `ip` ，然后给出的解决方法就是 "以子之矛, 攻子之盾"，因为 `cloudflare` 自己旗下有一款代理软件叫 `warp` 联想到他不会自己封禁自己, 于是我们使用 `cloudflare warp` 代理来躲避封禁。

## 安装 CloudFlare Warp
```shell
# 一键安装脚本
wget -N https://gitlab.com/rwkgyg/CFwarp/raw/main/CFwarp.sh && bash CFwarp.sh
```

## CloudFlare Warp IPV4 地址稀少, 改用IPV6
`IPV4` 地址都被封的差不多了，我先是使用 `IPV4` 按流程搭建了，但是无法正常使用服务，所以建议大家优先考虑 `IPV6`, `IPV4` 纯粹是碰运气。

由于我使用的是 `Vultr` 的服务，所以以下是 `Vultr` 开启 `IPV6` 的步骤，同学们可以对自己的 `VPS` 服务探索，大同小异。

```shell
# Settings -> IPV6 —> Add
```
![添加IPV6](/Images/Linux/%E4%BD%BF%E7%94%A8V2ray%2CCloudFlare-Warp%E8%A7%A3%E9%94%81GPT/vultr_step_1.png)

## 启动脚本并安装
```shell
# 步骤1, 启动脚本
./CFwarp.sh

# 步骤2，选择2
# 提示：
# 一、选项1与2任意选，支持相互切换
# 二、进入脚本快捷方式：cf
# =================================================================
# 1. 选择 warp-go 内核安装WARP
# 2. 选择 wgcf    内核安装WARP
# 0. 退出脚本
# =================================================================

# 步骤3， 选择1 （Socks5-WARP 不支持 IPV6）
# 任意选择适合自己的warp现实方案（选项1、2、3，可单选，可多选共存）
# 进入脚本快捷方式：cf
# =================================================================
# 1. 方案一：安装/切换WGCF-WARP
# 2. 方案二：安装Socks5-WARP
# 3. 方案三：显示Xray-WireGuard-WARP代理配置文件、二维码
# 4. 卸载WARP
# -----------------------------------------------------------------
# 5. 关闭、开启/重启WARP
# 6. WARP其他选项：查看WARP进程守护，刷WARP+流量……
# 7. WARP三类账户升级/切换(WARP/WARP+/WARP Teams)
# 8. 更新CFwarp安装脚本
# 9. 将当前WGCF-WARP内核替换为WARP-GO内核
# 0. 退出脚本

# 步骤4，选择2， 不搭配分流规则
# 提示：VPS的本地出站IP将被你选择的warp的IP所接管，如VPS本地无该出站IP，则被另外生成warp的IP所接管

# 如果你什么都不懂，回车便是！！！

# 1. 安装/切换wgcf-warp单栈IPV4（回车默认）
# 2. 安装/切换wgcf-warp单栈IPV6
# 3. 安装/切换wgcf-warp双栈IPV4+IPV6

# 步骤5, 设置完成，回看终端输出
# ------------------------------------------------------------------------------------
# 方案一：当前 IPV4 接管出站流量情况如下（WARP监测已开启）
# WARP状态：关闭中
# 服务商 Tencent Cloud Computing 获取IPV4地址：xxx.xxx.xxx.xxx  xxx
# 奈飞NF解锁情况：遗憾，当前IP仅可观看Netflix自制剧
# ChatGPT解锁情况：遗憾，当前IP无法访问ChatGPT官网服务
# ------------------------------------------------------------------------------------
# 方案一：当前 IPV6 接管出站流量情况如下（WARP监测已开启）
# WARP状态：运行中，WARP普通账户(无限WARP流量)
# 服务商 Cloudflare 获取IPV6地址：xxxx:xxxx:xxxx:xxxx::xxxx:xxxx  xxx
# 奈飞NF解锁情况：遗憾，当前IP仅可观看Netflix自制剧
# ChatGPT解锁情况：恭喜，当前IP支持访问ChatGPT官网服务
# ------------------------------------------------------------------------------------

# 注意：别忘了将绑定的域名解析到cloudflare,并将代理状态设置为仅DNS
```

## 刷新/更换 CloudFlare Warp IP
```shell
# 使用这个命令,每次重启都会刷新IP
systemctl restart wg-quick@wgcf
```

## 配置v2ray
`v2ray` 的配置文件一般位于 `/etc/v2ray/config`，这里我们修改 `outbounds` 和 `routing` 配置

::: code-group
```shell [v2ray.part.json]
# outbounds 增加一栏
#  {
#   "tag": "IP6_out",
#   "protocol": "freedom",
#   "settings": {
#     "domainStrategy": "UseIPv6"
#   }

# routing 给每个rules 增加 type, domain 和 outboundTag
# "type": "field",
# "domain": [ "openai.com" ],
# "outboundTag": "IP6_out"
```
```json [v2ray.json]
{
  "api": {
    "services": [
      "HandlerService",
      "LoggerService",
      "StatsService"
    ],
    "tag": "api"
  },
  "inbounds": [
    {
      "listen": "127.0.0.1",
      "port": xxxx,
      "protocol": "dokodemo-door",
      "settings": {
        "address": "127.0.0.1"
      },
      "tag": "api"
    }
  ],
  "outbounds": [
    {
      "protocol": "freedom",
      "settings": {}
    },
    {
      "tag": "IP6_out",
      "protocol": "freedom",
      "settings": {
        "domainStrategy": "UseIPv6"
      }
    },
    {
      "protocol": "blackhole",
      "settings": {},
      "tag": "blocked"
    }
  ],
  "policy": {
    "system": {
      "statsInboundDownlink": true,
      "statsInboundUplink": true
    }
  },
  "routing": {
    "rules": [
      {
        "inboundTag": [
          "api"
        ],
        "type": "field",
        "domain": [
          "openai.com"
        ],
        "outboundTag": "IP6_out"
      },
      {
        "ip": [
          "geoip:private"
        ],
        "type": "field",
        "domain": [
          "openai.com"
        ],
        "outboundTag": "IP6_out"
      },
      {
        "protocol": [
          "bittorrent"
        ],
        "type": "field",
        "domain": [
          "openai.com"
        ],
        "outboundTag": "IP6_out"
      }
    ]
  },
  "stats": {}
}
```
:::

由于笔者安装了 `xui`, 所以配置文件直接在网页上修改，然后重启面板生效

![调整v2ray配置](/Images/Linux/%E4%BD%BF%E7%94%A8V2ray%2CCloudFlare-Warp%E8%A7%A3%E9%94%81GPT/xui_step1.png)

## 最后
再次使用 `Google` 访问 `chat` 页面, 发现可以正常使用了

## 参考
1. [使用 V2Ray + CloudFlare Warp 解锁 ChatGPT](https://powerfulyang.com/post/136 '使用 V2Ray + CloudFlare Warp 解锁 ChatGPT')
1. [使用 Cloudflare WARP 作为 V2Ray/Shadowsocks 出站（落地）连接](https://iecho.cc/2023/03/27/apply-cloudflare-warp-for-v2ray-shadowsocks-outbound-connections/ '使用 Cloudflare WARP 作为 V2Ray/Shadowsocks 出站（落地）连接')