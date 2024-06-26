---
tags:
  - Windows
---
# 自用host

## 软件
使用开源的 [SwitchHosts](https://github.com/oldj/SwitchHosts) 管理 `hosts`

## 查找最快ip
可以使用 [站长之家的ping检测](https://ping.chinaz.com/github.com) , 选择其他,找到国外最快 `ip` .然后选择电信，联通，移动，找到国内能访问的最快 `ip`作为替补 
## 常用网站host
```shell
127.0.0.1	localhost

#jetbrains.com
0.0.0.0 account.jetbrains.com

#xmind 8
127.0.0.1  www.xmind.net

#mega.nz
31.216.144.5  mega.nz

# figma.com
13.35.147.48 figma.com
52.222.214.18 figma.com
52.84.251.53 figma.com

# figma.com国内线路
13.225.103.65 figma.com
99.84.133.16 figma.com

# github
20.248.137.48  github.com
140.82.121.4 github.com
140.82.121.3 github.com
20.27.177.113 github.com

# github国内线路
20.205.243.166 github.com

# gist.github.com
20.248.137.48    gist.github.com
140.82.121.4   gist.github.com
140.82.121.3    gist.github.com

# gist.github.com国内线路
78.16.49.15 gist.github.com
20.205.243.166 gist.github.com

# github.global.ssl.fastly.net
151.101.1.194  github.global.ssl.fastly.net
199.232.45.194    github.global.ssl.fastly.net

# codeload.github.com
20.248.137.55 codeload.github.com
140.82.121.9  codeload.github.com
20.27.177.114  codeload.github.com

# codeload.github.com国内线路
20.205.243.165 codeload.github.com

# objects.githubusercontent.com
185.199.108.133 objects.githubusercontent.com
185.199.109.133 objects.githubusercontent.com
185.199.110.133 objects.githubusercontent.com
185.199.111.133 objects.githubusercontent.com

#raw.githubusercontent.com
185.199.108.133 raw.githubusercontent.com
185.199.109.133 raw.githubusercontent.com
185.199.110.133 raw.githubusercontent.com
185.199.111.133 raw.githubusercontent.com

# dustinbrett.com 网页操作系统
104.21.44.105 dustinbrett.com
188.114.96.3 dustinbrett.com
172.67.198.186 dustinbrett.com

# dustinbrett.com国内线路
104.21.44.105 dustinbrett.com

# reddit.com
151.101.1.140 reddit.com
146.75.113.140 rediit.com
151.101.109.140 reddit.com
146.75.49.140 reddit.com

#packages.openvpn.net
104.19.190.106 packages.openvpn.net
104.19.191.106 packages.openvpn.net
```

## 常见问题
1. `switchhosts` 增加了场景未生效, `ping` 显示的 `ip` 还是原来的?
答: 可能是 `switchhosts` 未能写入成功, 可以先去 `etc`目录查看是否有`hosts` 文件,如果没有，需要手动创建一个，然后再启动 `switchhosts`
