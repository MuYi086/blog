# 科学上网-v2ray搭建

## 介绍
一款优秀的代理集成工具。

这里使用了 `V2ray + WS + TLS + Cloudflare` 搭建
* 优点 :  高匿,快速, 支持多平台, 多协议
* 缺点 : 配置较复杂,上手需要结合多种技术

## Cloudflare + 1Panel
::: warning 注意
以前我们是使用 `BT(宝塔)` 面板的，但是它版本迭代后不支持自定义 `SSL` 证书了，因此改用开源且更友好的 `1Panel`
:::

`Cloudflare` : 这里我们用来解析域名的 `DNS` ,并创建 `SSL` 证书

`1Panel` : 创建网站并绑定证书

### 注册并解析域名
[cloudflare](https://dash.cloudflare.com)

1. 添加域名:代理状态设为关闭

    ![代理](/Images/Wall/科学上网-v2ray搭建/v2ray_01.png '代理')

1. 在域名控制面板将 `DNS` 修改指向到 `Cloudflare`

    ```shell
    NS	earl.ns.cloudflare.com
    NS	vita.ns.cloudflare.com
    ```

### 加密和创建证书
1. 使用 `SSL/TLS` 加密

    ![代理](/Images/Wall/科学上网-v2ray搭建/v2ray_02.png '代理')

1. 创建证书

    ![证书](/Images/Wall/科学上网-v2ray搭建/v2ray_03.png '证书')

    ![证书](/Images/Wall/科学上网-v2ray搭建/v2ray_04.png '证书')

1. 记录并保存证书信息

    ![证书](/Images/Wall/科学上网-v2ray搭建/v2ray_05.png '证书')
    
1. 将证书和密钥写到对应 `/etc/ssl/cert.pem` 和 `/etc/ssl/key.pem` 中

### 1Panel设置

1. 上传证书: 网站->证书->上传证书->粘贴私钥key->粘贴证书(pem)

1. 创建网站: 网站->创建网站->运行环境->新增

## 安装x-ui
这里我们不直接安装 `v2ray` ，而是通过面板集成，方便管理。

最开始用的 `v2ray.fun` 的面板,后面脚本失效了，也尝试过`v2-ui` ，被屏蔽后再到现在使用的 `x-ui`

```shell
wget https://raw.githubusercontent.com/vaxilu/x-ui/master/install.sh
bash install.sh
```

安装完成后可以使用 `x-ui` 命令操作面板，注意访问需要 `1Panel` 放行相应的端口

方法一: "操作->二维码->另存为" 到 `v2ray` 客户端扫码

方法二: "详细信息->查看->复制链接",  到 `v2ray` 客户端粘贴

::: warning 注意
`Cloudflare` 支持的 `https` 端口好有限,建议使用非 `443` 的端口

`443`、`2053`、`2083`、`2087`、`2096`、`8443`
:::


## Cloudflare开启代理

![开启代理](/Images/Wall/科学上网-v2ray搭建/v2ray_11.png '开启代理')

::: warning 特别注意
使用 `x-ui` 等面板可忽略以下

如果我们的服务器在国外，需要格外注意服务器系统时间与本地时间是否一致。 `v2ray` 验证方式认为误差超过 `90s` 都是不合法的请求。
```shell
# linux查看系统时间
date -R
```

如果不为东八区的时间，我们使用 `tzselect` 重置下

```shell
tzselect
# 1. 选择Asia
# 2. 选择China
# 3. 选择Beijing Time
# 4. 选1，yes

# 更新环境变量
echo "TZ='Asia/Shanghai'; export TZ" >>/etc/profile
source /etc/profile
```
:::


## 安装报错: chrony error
```shell
# 查看是否存在/var/lib/dpkg/info
# 如果没有
mkdir /var/lib/dpkg/info
```

## 参考
1. [V2Ray+WebSocket(ws)+TLS+Nginx+Cloudflare拯救搬瓦工被封IP的VPS](https://liubing.me/v2ray-websocket-tl-nginx-cloudflare-bandwagonhost.html)
1. [v2ray-文档](https://toutyrater.github.io/prep/install.html)
1. [V2Ray-Wiki](https://github.com/233boy/v2ray/wiki)
1. [ProjectV](https://www.atzlinux.com/doc/v/v2ray/)


