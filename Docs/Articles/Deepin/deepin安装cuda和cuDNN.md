---
tags:
  - Deepin
---
# deepin安装cuda和cuDNN

## 基本安装程序
选择不同发行版，下载链接其实是同一个
```shell
wget https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2204/x86_64/cuda-ubuntu2204.pin
sudo mv cuda-ubuntu2204.pin /etc/apt/preferences.d/cuda-repository-pin-600
wget https://developer.download.nvidia.com/compute/cuda/12.3.2/local_installers/cuda-repo-ubuntu2204-12-3-local_12.3.2-545.23.08-1_amd64.deb
sudo dpkg -i cuda-repo-ubuntu2204-12-3-local_12.3.2-545.23.08-1_amd64.deb
sudo cp /var/cuda-repo-ubuntu2204-12-3-local/cuda-*-keyring.gpg /usr/share/keyrings/
sudo apt-get update
sudo apt-get -y install cuda-toolkit-12-3
```

## 驱动程序安装程序
为适配 `cuda`, `nvdia` 驱动需要升级到版本 `545` 以上

[cuDNN下载](https://developer.nvidia.com/rdp/cudnn-archive)
```shell
# 如果已经安装过nvdia驱动，不要再次安装驱动,会覆盖之前的，告知nvdia-smi无法使用
```

## 安装cuDNN
```shell
# 选择操作系统对应的cuda版本下载,需要登陆nvdia账号

# 安装完成后update如果提示如下错误：之前复制的 .pub 文件格式不对，apt 源配置要求的是 cudnn-local-08A7D361-keyring.gpg 这个二进制密钥环文件
W: GPG 错误：file:/var/cudnn-local-repo-ubuntu2204-8.9.7.29  InRelease: 由于没有公钥，无法验证下列签名： NO_PUBKEY F37D203008A7D361
E: 仓库 “file:/var/cudnn-local-repo-ubuntu2204-8.9.7.29  InRelease” 没有数字签名。
N: 无法安全地用该源进行更新，所以默认禁用该源。
N: 参见 apt-secure(8) 手册以了解仓库创建和用户配置方面的细节。

# 需要手动修复
sudo cp /var/cudnn-local-repo-ubuntu2204-8.9.7.29/cudnn-local-08A7D361-keyring.gpg /usr/share/keyrings/
# 重新更新
sudo apt-get update
```

## 参考
1. [nvida 驱动下载](https://www.nvidia.cn/geforce/drivers/)
1. [cuDNN下载](https://developer.nvidia.com/rdp/cudnn-archive)
1. [CUDA Toolkit Download](https://developer.nvidia.com/cuda-downloads?target_os=Linux&target_arch=x86_64&Distribution=Ubuntu&target_version=22.04&target_type=deb_local)