---
tags:
  - Shell
---
# OpenEuler配置nginx

## 背景
我们需要在店铺内主机部署一套前端的代码，同时支持本地登录和云端登录。本地登录好处理，直接访问局域网内接口即可，云端登录由于需要云服务器接口，这里会遇到同源策略限制。

## 方案讨论
最终团队内部讨论后，现阶段我们采用 `nginx` 反代绕过同源策略

1. `nginx` 反代
![nginx反代](../../Images/Shell/OpenEuler配置nginx/1.png 'nginx反代')

2. `App` 原生代理
![App原生代理](../../Images/Shell/OpenEuler配置nginx/2.png 'App原生代理')

## 优缺点
| 维度 | 🅰️ 方案一：本地反向代理 (Nginx) | 🅱️ 方案二：JSBridge 原生代理 |
| :--- | :--- | :--- |
| 核心原理 | 浏览器 -> 本地 Nginx (同源) -> 云端 | H5 -> JSBridge -> App 原生网络库 -> 云端 |
| ✅ 核心优点 | 1. 开发极快：只需配置 Nginx，H5 代码几乎零改动。<br>2. 透明无感：H5 以为是直连，无需感知代理存在。<br>3. 调试方便：可以直接在浏览器 Network 面板看到完整请求/响应。<br>4. 兼容性好：不仅支持 App WebView，也支持普通 PC/手机浏览器（只要配了 hosts 或局域网 IP）。 | 1. 安全性最高：Token/密钥存储在原生层，H5 无法通过 `console` 窃取。<br>2. 功能强大：原生层可统一处理加密、签名、证书绑定 (SSL Pinning)。<br>3. 弱网优化：原生层可实现更强大的重试、缓存、断点续传机制。<br>4. 彻底隔离：完全绕过浏览器所有安全策略（CORS, Mixed Content）。 |
| ❌ 核心缺点 | 1. 部署维护重：每台门店设备都要安装并维护 Nginx，版本升级困难（需逐台更新）。<br>2. 环境依赖：强依赖本地网络环境，若 Nginx 进程挂掉，整个 H5 瘫痪。<br>3. 安全风险：若 Nginx 配置不当，可能成为内网渗透跳板；且 Token 仍暴露在浏览器内存中。<br>4. HTTPS 麻烦：本地 Nginx 若要配 HTTPS，需自签证书，会导致 WebView 报“不安全”警告，需额外配置忽略证书错误。 | 1. 开发成本高：需要 iOS/Android 原生开发人员介入，编写桥接代码，联调周期长。<br>2. 发版困难：桥接逻辑修改通常伴随 App 发版，无法像 H5 那样热更新修复 Bug。<br>3. 调试黑盒：原生层的网络请求在浏览器 Network 面板不可见，需借助 Charles/Flipper 等抓包工具，排查问题难度大。<br>4. 兼容性陷阱：不同 WebView 内核 (X5, WKWebView) 对 JSBridge 的支持有细微差异，需大量测试。 |
| 📉 隐性成本 | - 运维成本：需建立一套机制监控成千上万台设备的 Nginx 状态。<br>- 培训成本：实施人员需懂基础 Linux/Nginx 配置。 | - 沟通成本：前端与原生团队需定义严格的接口协议 (Protocol)。<br>- 回归测试成本：每次 H5 变动都可能需要原生配合回归。 |
| 🚨 致命场景 | 场景：门店设备系统重装或中毒，Nginx 未启动。<br>后果：业务完全不可用，且前端无法自动修复。 | 场景：App 旧版本存在桥接 Bug，但用户未更新 App。<br>后果：新上线的 H5 功能在旧版 App 上直接白屏或报错，且无法通过发 H5 包修复（必须强制用户更新 App）。 |
| 适用建议 | ✅ 短期项目 / PoC 验证<br>✅ 内部工具 / 受控环境 (IT 能兜底维护设备)<br>✅ 无法修改 App 源码 的历史遗留项目 | ✅ 对外商业产品 (高安全要求)<br>✅ 长期迭代的核心业务<br>✅ 涉及支付/敏感数据 的场景<br>✅ 已有成熟原生团队 支持 |


## 查看系统并安装nginx
```bash
# 查看系统信息
cat /etc/os-release

# 根据系统安装nginx

## 方法1:使用dnf安装
sudo dnf update -y
sudo dnf install nginx -y
## 如果提示找不到包，可能需要启用 EPEL 源
## 安装 EPEL 源 (如果需要)
sudo dnf install epel-release -y
## 再次尝试安装
sudo dnf install nginx -y

## 方法2：使用官方预编译二进制包
## 创建 nginx 用户和组
sudo groupadd -r nginx
sudo useradd -r -g nginx -s /sbin/nologin nginx
## 创建安装目录和日志目录
sudo mkdir -p /usr/local/nginx
sudo mkdir -p /var/log/nginx
sudo mkdir -p /var/run/nginx
sudo chown -R nginx:nginx /var/log/nginx /var/run/nginx /usr/local/nginx
cd /tmp
## 下载二进制包 (示例链接，请去官网确认最新版本号)
wget https://nginx.org/download/nginx-1.26.2-linux-x86_64-glibc.tar.gz
# 解压
tar -zxvf nginx-1.26.2-linux-x86_64-glibc.tar.gz
## 将文件移动到安装目录
## 注意：解压后的文件夹里通常直接就是 bin, conf, html 等目录
sudo cp -r nginx-1.26.2/* /usr/local/nginx/
## 修正权限
sudo chown -R nginx:nginx /usr/local/nginx
```

## nginx常用命令
```shell
# 检查是否安装
nginx -v

# 检查运行状态 (Systemd 系统)
systemctl status nginx

# 如果未运行，启动它
sudo systemctl start nginx
# 停止
sudo systemctl stop nginx
# 重启(修改配置文件后不中断服务)
sudo systemctl restart nginx
# 测试配置文件语法
sudo nginx -t
# 重载
sudo systemctl reload nginx
# 设置开机自启 (防止重启后服务挂掉)
sudo systemctl enable nginx


# 主配置文件
cat /etc/nginx/nginx.conf
# 默认站点配置
cat /etc/nginx/conf.d/default.conf
# 网站根目录
cd /usr/share/nginx/html
# 日志目录
cd /var/log/nginx/
```

## 核心nginx配置
```shell
# ==========================================
# 1. 前端静态资源 (解决 SPA 刷新 404)
# ==========================================
location / {
    # 尝试寻找文件，找不到则返回 index.html
    try_files $uri $uri/ /index.html;
}

# ==========================================
# 2. 本地/内网 API 代理
# ==========================================
# 目标：http://xx
location /api/ {
    # 注意：这里末尾带了 /，表示转发时会去掉 /api 前缀
    # 如果后端接口需要 /api 前缀，请去掉 proxy_pass 末尾的 /
    proxy_pass http://xx; 

    # 传递必要的 Header
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;

    # 超时设置
    proxy_connect_timeout 60s;
    proxy_send_timeout 60s;
    proxy_read_timeout 60s;
}

# ==========================================
# 3. 云端 API 代理
# ==========================================
# 目标：https://xx
location /cloud/ {
    # 转发到云端 HTTPS 地址
    # 同样，末尾的 / 会去掉 /cloud 前缀
    proxy_pass https://xx/;

    # 开启 SSL 支持 (Nginx 作为客户端去连接云端 HTTPS)
    proxy_ssl_server_name on; 
    proxy_ssl_protocols TLSv1.2 TLSv1.3;

    # 传递 Header
    proxy_set_header Host xx; # 云端通常需要准确的 Host
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    
    # 超时设置
    proxy_connect_timeout 60s;
    proxy_send_timeout 60s;
    proxy_read_timeout 60s;
}
```


## 其他
| 模式             | 说明           | 适用场景         |
| -------------- | ------------ | ------------ |
| **Enforcing**  | 强制策略，拒绝违规操作  | 生产环境高安全要求    |
| **Permissive** | 只记录警告，不阻止操作  | 调试、开发、避免权限问题 |
| **Disabled**   | 完全关闭 SELinux | 不推荐，失去安全保护   |

```shell
# 查看ip
ip addr

# 检查并临时关闭 SELinux 测试
# 查看状态
getenforce

# 临时设置为 Permissive （0：宽容；1：严格）
sudo setenforce 0

# 每次主机重启会走默认的安全策略，重置为Enforcing,此时webview load 前端网页就会403
# 我们需要永久设置为Permissive
sudo vi /etc/selinux/config
# 设置SELINUX=permissive
```

## 参考
1. [nginx](https://nginx.org/en/)