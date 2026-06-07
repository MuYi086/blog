---
tags:
  - 人工智能
---
# AI-使用HF-Mirror下载模型

## 介绍
域名 `hf-mirror.com`，用于镜像 `huggingface.co` 域名。作为一个公益项目，致力于帮助国内AI开发者快速、稳定的下载模型、数据集。

## 方法一:网页下载
在本站搜索，并在模型主页的`Files and Version`中下载文件

## 方法二:huggingface-cli
`huggingface-cli` 是 `Hugging Face` 官方提供的命令行工具，自带完善的下载功能。使用方法如下：
```shell
# 1.安装依赖
pip install -U huggingface_hub

# 2.设置环境变量
export HF_ENDPOINT=https://hf-mirror.com # Linux
$env:HF_ENDPOINT = "https://hf-mirror.com" # Windows Powershell
# 建议将上面这一行写入 ~/.bashrc

# 3.下载模型
huggingface-cli download --resume-download gpt2 --local-dir gpt2

# 4.下载数据集
huggingface-cli download --repo-type dataset --resume-download wikitext --local-dir wikitext
# 可以添加 --local-dir-use-symlinks False 参数禁用文件软链接，这样下载路径下所见即所得
```

## 方法三:使用hfd
`hfd` 是本站开发的 `huggingface` 专用下载工具，基于成熟工具 `aria2`，可以做到稳定高速下载不断线。

```shell
# 1.下载hfd
wget https://hf-mirror.com/hfd/hfd.sh
chmod a+x hfd.sh

# 2.设置环境变量
export HF_ENDPOINT=https://hf-mirror.com # linux
$env:HF_ENDPOINT = "https://hf-mirror.com" # Windows Powershell

# 3.下载模型
./hfd.sh gpt2

# 4.下载数据集
./hfd.sh wikitext --dataset
```

## 方法四：使用环境变量（非侵入式）
非侵入式，能解决大部分情况。`huggingface` 工具链会获取`HF_ENDPOINT`环境变量来确定下载文件所用的网址，所以可以使用通过设置变量来解决。

```shell
HF_ENDPOINT=https://hf-mirror.com python your_script.py
# 不过有些数据集有内置的下载脚本，那就需要手动改一下脚本内的地址来实现了
```
## 参考
1. [如何使用HF-Mirror](https://hf-mirror.com/)
