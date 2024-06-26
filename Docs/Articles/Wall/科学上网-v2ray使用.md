---
tags:
  - Wall
  - v2ray
---
# 科学上网-v2ray使用

## 客户端下载
1. `Windows` : 
    * v2ray-core : [地址](https://github.com/v2ray/v2ray-core/releases/latest)
        ```shell
        https://github.com/v2ray/v2ray-core/releases/latest
        ```
    * v2rayN : [地址](https://github.com/2dust/v2rayN/releases/latest)
        ```shell
        https://github.com/2dust/v2rayN/releases/latest
        ```
1. `Linux` :
    * v2ray : 
        ```shell
        wget https://install.direct/go.sh
        bash ./go.sh
        ```
    * qv2ray:
        ```shell
        https://github.com/Qv2ray/Qv2ray/releases
        ```
    * nekoray:
        ```shell
        https://github.com/MatsuriDayo/nekoray/releases
        ```
1. `Mac` :
    * v2ray-core: 地址同 `windows` 一致,选择 `mac` 版本
    * v2rayN: 地址同 `windows` 一致,选择 `mac` 版本

1. `Android` : 
    * v2rayNG: [地址](https://github.com/2dust/v2rayNG/releases/latest)
        ```shell
        https://github.com/2dust/v2rayNG/releases/latest
        ```
    * Actinium: [地址](https://github.com/V2Ray-Android/Actinium/releases/latest)
        ```shell
        https://github.com/V2Ray-Android/Actinium/releases/latest
        ```
    * BifrostV: [地址](https://play.google.com/store/apps/details?id=com.github.dawndiy.bifrostv)
        ```shell
        https://play.google.com/store/apps/details?id=com.github.dawndiy.bifrostv
        ```

1. `IOS` : 以下三个软件需要到美国市场才能下载,国内暂无
    * Kitsunebi: [地址](https://apps.apple.com/us/app/kitsunebi/id1275446921)
        ```shell
        https://apps.apple.com/us/app/kitsunebi/id1275446921
        ```
    * ShadowRocket: [地址](https://apps.apple.com/us/app/shadowrocket/id932747118)
        ```shell
        https://apps.apple.com/us/app/shadowrocket/id932747118
        ```
    * Pepi: [地址](https://apps.apple.com/us/app/pepi/id1283082051)
        ```shell
        https://apps.apple.com/us/app/pepi/id1283082051
        ```

## 修改配置
1. `windows`

    ![windows配置](/Images/Wall/科学上网-v2ray使用/outside_01.png 'windows配置')

1. `Linux`

    ```shell
    # 修改 /etc/v2ray/config.json
    sudo vi /etc/v2ray/config.json
    ```

    ::: warning
    粘贴我的配置文件即可

    注意去掉注释
    :::

    ```js
    {
        "policy": null,
        "log": {
            "access": "",
            "error": "",
            "loglevel": "warning"
        },
        "inbounds": [ // 客户端配置
            { // inbounds为客户端入口
                "tag": "proxy",
                "port": 10808, // 本地流量端口:为了防止和以前的1080冲突,改成使用10808端口
                "listen": "127.0.0.1", // listen的ip改成0.0.0.0表示开启局域网共享
                "protocol": "socks", // 协议
                "sniffing": {
                    "enabled": true,
                    "destOverride": [
                        "http",
                        "tls"
                        ]
                    },
                "settings": {
                    "auth": "noauth",
                    "udp": true,
                    "ip": null,
                    "address": null,
                    "clients": null
                    },
                "streamSettings": null
            },
            {
                "tag": "proxy",
                "port": 10809, // http使用10809端口
                "listen": "127.0.0.1",
                "protocol": "http", // 协议
                "sniffing": {
                    "enabled": true,
                    "destOverride": [
                        "http",
                        "tls"
                        ]
                    },
                "settings": {
                    "auth": "noauth",
                    "udp": true,
                    "ip": null,
                    "address": null,
                    "clients": null
                    },
                "streamSettings": null
            }
        ],
        "outbounds": [ // 服务端配置
            {
            "tag": "proxy",
            "protocol": "vmess", // v2ray自带协议
            "settings": {
                "vnext": [
                {
                    "address": "MuYi086.cn", // 服务器地址
                    "port": 443, // 远程端口
                    "users": [
                    {
                        "id": "xxx", // 用户id
                        "alterId": 100, // 额外Id
                        "email": "t@t.tt",
                        "security": "auto"
                    }
                    ]
                }
                ],
                "servers": null,
                "response": null
            },
            "streamSettings": {
                "network": "ws", // websocket
                "security": "tls", // 安全传输协议
                "tlsSettings": {
                "allowInsecure": true,
                "serverName": "MuYi086.cn"
                },
                "tcpSettings": null,
                "kcpSettings": null,
                "wsSettings": {
                "connectionReuse": true,
                "path": "/ws/", // 路径
                "headers": {
                    "Host": "MuYi086.cn" // 伪装域名
                    }
                },
                "httpSettings": null,
                "quicSettings": null
            },
            "mux": {
                "enabled": true
            }
            },
            {
            "tag": "direct",
            "protocol": "freedom",
            "settings": {
                "vnext": null,
                "servers": null,
                "response": null
            },
            "streamSettings": null,
            "mux": null
            },
            {
            "tag": "block",
            "protocol": "blackhole",
            "settings": {
                "vnext": null,
                "servers": null,
                "response": {
                "type": "http"
                }
            },
            "streamSettings": null,
            "mux": null
            }
        ],
        "stats": null,
        "api": null,
        "dns": null,
        "routing": {
            "domainStrategy": "IPIfNonMatch",
            "rules": [
            {
                "type": "field",
                "port": null,
                "inboundTag": [
                "api"
                ],
                "outboundTag": "api",
                "ip": null,
                "domain": null
            }
            ]
        }
    }
    ```
    重启 `v2ray` 服务
    ```shell
    service v2ray restart
    ```

## 免费节点
该项目，每10分钟更新一次
[V2ray-Configs](https://github.com/barry-far/V2ray-Configs)

复制对应的 `Sub1.txt` 中的 `vmess`, `vless` 等 链接导入到对应客户端


## 参考
1. [v2ray](https://github.com/v2ray/v2ray-core)
1. [v2ray高级玩法](https://toutyrater.github.io/prep/install.html)
1. [V2ray-Configs](https://github.com/barry-far/V2ray-Configs)
