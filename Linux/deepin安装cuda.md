## deepin安装cuda

#### 基本安装程序
选择不同发行版，下载链接其实是同一个
```SHELL
wget https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2204/x86_64/cuda-ubuntu2204.pin
sudo mv cuda-ubuntu2204.pin /etc/apt/preferences.d/cuda-repository-pin-600
wget https://developer.download.nvidia.com/compute/cuda/12.3.2/local_installers/cuda-repo-ubuntu2204-12-3-local_12.3.2-545.23.08-1_amd64.deb
sudo dpkg -i cuda-repo-ubuntu2204-12-3-local_12.3.2-545.23.08-1_amd64.deb
sudo cp /var/cuda-repo-ubuntu2204-12-3-local/cuda-*-keyring.gpg /usr/share/keyrings/
sudo apt-get update
sudo apt-get -y install cuda-toolkit-12-3
```

#### 驱动程序安装程序
为适配 `cuda`, `nvdia` 驱动需要升级到版本 `545` 以上
```SHELL
# 如果已经安装过nvdia驱动，不要再次安装驱动,会覆盖之前的，告知nvdia-smi无法使用
```


#### 参考
1. [nvida 驱动下载](https://www.nvidia.cn/geforce/drivers/ 'nvida 驱动下载')
1. [CUDA Toolkit Download](https://developer.nvidia.com/cuda-downloads?target_os=Linux&target_arch=x86_64&Distribution=Ubuntu&target_version=22.04&target_type=deb_local 'CUDA Toolkit Download')