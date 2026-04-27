---
tags:
  - Python
---
# python项目安装指南

## 解决方案：使用 Python 虚拟环境
  ```shell
  # 进入 CosyVoice 目录 
  cd ~/github/audio-3d/models/cosyvoice/CosyVoice                    
  # 创建虚拟环境
  python3 -m venv .venv        
  # 激活虚拟环境 
  source .venv/bin/activate                
  # 升级 pip                                     
  pip install --upgrade pip                           
  # 安装依赖               
  pip install -r requirements.txt                               
  # 启动服务            
  python api.py --port 50000
  ```

## 加速 pip 安装的方法
  ```shell
  # 方法1：使用国内镜像（对微软包无效，但对其他包有效）                             
  # 临时使用清华镜像                           
  pip install -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple                                   
  # 或阿里镜像                                
  pip install -r requirements.txt -i https://mirrors.aliyun.com/pypi/simple/                    
  # 方法2：单独处理慢包（推荐）           
  onnxruntime-gpu 从 GitHub 直接下载：       
  # 1. 先下载 wheel 文件（用浏览器或 wget）           
  # 访问: https://github.com/microsoft/onnxruntime/releases                                                                          
  # 找到对应版本: onnxruntime_gpu-1.18.0-cp312-cp312-manylinux_2_28_x86_64.whl                                  
  # 2. 本地安装
  pip install ./onnxruntime_gpu-1.18.0-cp312-cp312-manylinux_2_28_x86_64.whl                                                                   
  方法3：修改 requirements.txt 跳过慢包          
  # 1. 注释掉 requirements.txt 中的慢包           
  sed -i 's/onnxruntime-gpu/# onnxruntime-gpu/' requirements.txt                              
  # 2. 安装其他依赖   
  pip install -r requirements.txt                                             
  # 3. 单独安装 onnxruntime-gpu（使用清华镜像的 CPU 版，或从 GitHub 下载 GPU 版
  pip install onnxruntime -i https://pypi.tuna.tsinghua.edu.cn/simple 
  方法4：使用代理（如果你有）                                 
  # 临时使用代理
  export https_proxy=http://127.0.0.1:7890     
  pip install -r requirements.txt                  
  # 针对 CosyVoice 的具体建议：                              
  # 1. onnxruntime-gpu 可以从 GitHub Releases 下载对应版本的 .whl 文件，然后本地安装
  # 2. torch 使用清华镜像：pip install torch -i https://pypi.tuna.tsinghua.edu.cn/simple                                               
  # 3. deepspeed 可能会编译很久，可以先用 pip install deepspeed --no-build-isolation 或跳过                              
  # 配置好后运行 npm run check:local 验证服务是否启动。
  ```