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

## 升级Warp Trust账户



## 参考
1. [Warp](https://one.one.one.one/)
1. [合法免费高速VPN环境搭建——Warp 1.1.1.1](https://blog.csdn.net/luoqiaoliang/article/details/138466429)
1. [WARP科学上网全攻略：详细教程及账号升级操作解析](https://blog.ilue.pp.ua/archives/warpke-xue-shang-wang-quan-gong-lue-xiang-xi-jiao-cheng-ji-zhang-hao-sheng-ji-cao-zuo-jie-xi)
