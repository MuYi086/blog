# 科学上网-Cloudflare-Warp

## 安装
下载 `Warp` 客户端 [Warp](https://one.one.one.one/)

1. `windows` 直接下载 `msi` 文件安装: 需要结合下载 `Warp` 工具包初始化 (已备份到比特球)

1. `linux`

以下是 [Ubuntu如何安装Warp](https://pkg.cloudflareclient.com/#ubuntu)

```shell
# Add cloudflare gpg key
curl -fsSL https://pkg.cloudflareclient.com/pubkey.gpg | sudo gpg --yes --dearmor --output /usr/share/keyrings/cloudflare-warp-archive-keyring.gpg

# Add this repo to your apt repositories
echo "deb [signed-by=/usr/share/keyrings/cloudflare-warp-archive-keyring.gpg] https://pkg.cloudflareclient.com/ $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/cloudflare-client.list

# Install
sudo apt-get update && sudo apt-get install cloudflare-warp
```

## 升级Warp+
下载 `telegram` 搜索关键词 `warp + bot` 获取 `key`

然后 `warp` 客户端 偏好设置 -> 账号 -> 使用其他秘钥

更新后显示余额 `24pb` 的流量


## 升级Warp Trust账户

1. 登录 `cloudflare`

1. 右侧点击 `zero trust`

    ![点击zero trust](/Images/Linux/Wall/科学上网-Cloudflare-Warp/step_1.png '点击zero trust')


1. 进入 `settings`

    ![进入settings](/Images/Linux/Wall/科学上网-Cloudflare-Warp/step_2.png '进入settings')

1. 选择 `warp client`

    ![选择warp client](/Images/Linux/Wall/科学上网-Cloudflare-Warp/step_3.jpg '选择warp client')

1. 选择免费计划

    ![free plan](/Images/Linux/Wall/科学上网-Cloudflare-Warp/step_4.jpg 'free plan')

1. 接下来会提示添加支付方式，可以使用 `paypal` 或者自行添加 `visa` 或 `master` 卡

1. 再然后 `settings` -> `warp client` -> `Device enrollment` -> `manage` 增加 `rule` (选择符合条件的邮箱后缀)

1. 最后在 `warp` 客户端登录 `zero trust` 账号

::: warning 注意
如果忘记团队名

可以在 `settings` -> `custom pages` 获取团队名称 
:::


## 参考
1. [Warp](https://one.one.one.one/)
1. [合法免费高速VPN环境搭建——Warp 1.1.1.1](https://blog.csdn.net/luoqiaoliang/article/details/138466429)
1. [WARP科学上网全攻略：详细教程及账号升级操作解析](https://blog.ilue.pp.ua/archives/warpke-xue-shang-wang-quan-gong-lue-xiang-xi-jiao-cheng-ji-zhang-hao-sheng-ji-cao-zuo-jie-xi)
