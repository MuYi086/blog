# 安装1Panel

## 安装
适用于 `Ubuntu`

[文档](https://1panel.cn/docs/installation/online_installation/)

```shell
curl -sSL https://resource.fit2cloud.com/1panel/package/quick_start.sh -o quick_start.sh && sudo bash quick_start.sh
```

## 开启SSL
面板设置 => 安全 => 面板SSL => 按钮打开

## 防火墙
`1Panel` 集成了两种广泛使用的 `Linux` 防火墙软件：`Firewalld` 和 `UFW`

`RedHat/CentOS` 使用的是 `Firewall` 防火墙。

`Debian/Ubuntu`使用的是 `UFW` 防火墙。

[文档](https://1panel.cn/docs/user_manual/hosts/firewall/)

```shell
# 更新软件包
sudo apt update

# 安装 UFW
sudo apt install ufw

# 如果你在远程位置连接你的服务器，在启用 UFW 防火墙之前，你必须显式允许进来的 SSH 连接。否则，你将永远都无法连接到机器上
sudo ufw allow 22/tcp

# 放开 1Panel 系统端口， 8090改为安装时设置的端口
sudo ufw allow 8090/tcp

# 启动 UFW
sudo ufw enable
```

## 绑定域名
这里使用反代域名实现
1. 先在 `cloudflare` 上 解析一个二级域名

1. `1panel` 面板创建 一个网站 => 绑定域名

![反代设置](/Images/Shell/安装1Panel/反代设置.png '反代设置')

保存后, 再次输入刚才的二级域名即可访问 `1panel` 面板

::: warning 注意
通过 面板设置 => 安全 => 域名绑定 会无法访问面板

暂未找到解决办法

可以通过登录ssh，输入 `1pctl reset domain` 重置绑定域名
:::

## 参考
1. [在线安装](https://1panel.cn/docs/installation/online_installation/)
1. [请教1panel面板绑定域名应该如何操作](https://bbs.fit2cloud.com/t/topic/2092/4)