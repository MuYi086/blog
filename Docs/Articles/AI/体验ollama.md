---
tags:
  - AI
---
# 体验ollama

## 介绍
`Ollama` 诞生于 `AI` 技术民主化的浪潮中，其核心使命是让每个人都能在本地设备上自由运行大型语言模型

## 下载
```bash
curl -fsSL https://ollama.com/install.sh | sh
```

## 核心命令速查
### 基础管理
| 命令                               | 说明              | 场景         |
| -------------------------------- | --------------- | ---------- |
| `ollama serve`                   | 启动 API 服务（后台常驻） | 生产环境/脚本调用  |
| `ollama run <模型>`                | 交互式对话           | 测试提示词效果    |
| `ollama run <模型> --verbose`      | 显示生成速度统计        | 评估性能       |
| `ollama list` / `ollama ls`      | 列出已下载模型         | 管理磁盘空间     |
| `ollama ps`                      | 查看当前运行中的模型      | 监控 VRAM 占用 |
| `ollama stop <模型>`               | 强制卸载模型释放显存      | 切换模型前      |
| `ollama pull <模型>`               | 下载/更新模型         | 首次部署       |
| `ollama rm <模型>`                 | 删除模型            | 清理空间       |
| `ollama create <名> -f Modelfile` | 基于配置创建定制模型      | 角色固定化      |

## 非交互式使用(适合流水线)
### 单条提示直接输出（用于脚本）
```bash
printf "将以下文本改写成悬疑风格：\n" | ollama run qwen3:14b

# 读取文件并处理
ollama run llama3.2 "总结以下内容：" < input.txt > output.txt

# 查看性能指标（tokens/s）
ollama run qwen3:14b --verbose <<< "测试生成速度"
```

## 设置为系统服务
```bash
# 1. 创建 ollama 服务文件
sudo tee /etc/systemd/system/ollama.service > /dev/null <<EOF
[Unit]
Description=Ollama Service
After=network-online.target

[Service]
ExecStart=/usr/local/bin/ollama serve
User=$USER
Group=$USER
Restart=always
RestartSec=3

[Install]
WantedBy=default.target
EOF

# 2. 重新加载 systemd
sudo systemctl daemon-reload

# 3. 设置开机自启并立即启动
sudo systemctl enable --now ollama

# 4. 检查服务状态（确认显示 active (running)）
sudo systemctl status ollama

```

::: warning
如果提示 Error: could not connect to ollama server, run 'ollama serve' to start it
那么说明用户/权限配置有问题

需要修改服务文件

```bash

sudo nano /etc/systemd/system/ollama.service

```

将用户改为你的实际用户

```bash
[Unit]
Description=Ollama Service
After=network-online.target

[Service]
ExecStart=/usr/local/bin/ollama serve
User=muyi086           # 改成你的用户名
Group=muyi086          # 改成你的用户组
Restart=always
RestartSec=3
Environment="HOME=/home/muyi086"    # 改成你的 home 目录
Environment="OLLAMA_HOST=0.0.0.0"

[Install]
WantedBy=default.target
```

然后重启服务
```bash
sudo systemctl daemon-reload
sudo systemctl restart ollama
sudo systemctl status ollama
```

:::


## 配置镜像源(国内加速)
### 临时
```bash
export OLLAMA_MODELS=/mnt/ollama/models  # 可选：自定义存储路径
export OLLAMA_HOST=0.0.0.0:11434

# 使用国内镜像源（如阿里云、DaoCloud）
export OLLAMA_REGISTRY=registry.ollama.ai  # 官方默认
export OLLAMA_REGISTRY=ollama.m.daocloud.io  # DaoCloud 镜像
export OLLAMA_REGISTRY=registry.aliyuncs.com/ollama  # 阿里云镜像（如有）
```

### 永久配置
写入 `~/.bashrc`

``` bash
echo 'export OLLAMA_REGISTRY=ollama.m.daocloud.io' >> ~/.bashrc
source ~/.bashrc
```

### 常用镜像源
| 镜像源      | 地址                             | 备注      |
| -------- | ------------------------------ | ------- |
| 官方默认     | `registry.ollama.ai`           | 海外，国内慢  |
| DaoCloud | `ollama.m.daocloud.io`         | 国内较快，推荐 |
| 阿里云      | `registry.aliyuncs.com/ollama` | 需确认可用性  |
| 清华 TUNA  | `ollama.tuna.tsinghua.edu.cn`  | 教育网友好   |
| DeepSeek 官方镜像  | `ollama.deepseek.com`  |    |
| 浙江大学镜像站  | `ollama.zju.edu.cn`  |    |
| 魔搭社区  | `ollama.modelscope.cn`  |    |

### 验证加速效果

```bash
# 清除旧配置，测试下载速度
ollama pull llama3.2:1b --verbose

# 或查看当前使用的 registry
ollama pull qwen3:14b 2>&1 | head -20
```

## 性能加速关键配置
### 环境变量
建议将以下内容加入 `~/.bashrc` 或 `systemd` 服务配置

```bash
# 1. 显存优化：限制并发数避免 OOM
export OLLAMA_NUM_PARALLEL=1          # 单并发，保证大模型流畅

# 2. 强制 GPU 加速（你的 4070 Ti SUPER 支持 CUDA）
export OLLAMA_GPU_OVERHEAD=1GB        # 预留 1GB 显存缓冲
export CUDA_VISIBLE_DEVICES=0         # 指定第一块 GPU

# 3. 上下文长度控制（根据小说章节长度调整）
export OLLAMA_CONTEXT_LENGTH=8192     # 8K 上下文，适合长文本生成

# 4. 模型保持时间（生产环境建议）
export OLLAMA_KEEP_ALIVE=30m          # 30分钟后释放显存，或设为24h常驻
```

### 显存释放技巧
当你需要切换模型（如从文本生成切换到检查脚本）时
```bash
# 方法1：API 调用立即释放（推荐集成到脚本）
curl -X POST http://localhost:11434/api/generate \
  -d '{"model": "qwen3:14b", "keep_alive": 0}'

# 方法2：命令行停止
ollama stop qwen3:14b
```

## 针对小说生产的Modelfile定制
创建 `novel_assistant.modelfile`

```dockerfile
FROM qwen3:14b

# 参数调优（创意写作平衡）
PARAMETER temperature 0.8      # 适度创造性
PARAMETER top_p 0.9            # 核采样
PARAMETER repeat_penalty 1.1   # 减少重复（小说关键）

# 系统提示：固化你的 3D 有声小说风格
SYSTEM """
你是专业的 3D 有声小说剧本工程师。你的职责：
1. 将输入文本改写为适合双耳音频（Binaural）表现的剧本格式
2. 标注声音方位（左/右/远/近）和情绪强度
3. 控制每句长度在 15-25 字，便于 TTS 断句
4. 自动标注需要音效的位置 [SFX:雷声/雨声/脚步声]
5. 输出格式：场景标题 | 方位标注 | 台词/旁白 | 音效标记

当前项目：悬疑灵异题材，要求氛围紧张但不血腥，适合深夜收听。
"""

# 16GB VRAM 下 14B 模型约占用 9-10GB，留足余量给 TTS 和 3D 渲染
```

创建并运行

```bash
ollama create novel-3d -f novel_assistant.modelfile
ollama run novel-3d --verbose
```

## API集成
基础生成接口
```python
import requests
import json

def generate_script(text_chunk, model="novel-3d"):
    """将小说段落转换为 3D 音频剧本"""
    response = requests.post(
        'http://localhost:11434/api/generate',
        json={
            'model': model,
            'prompt': f'转换以下内容为 3D 音频剧本格式：\n\n{text_chunk}',
            'stream': False,
            'options': {
                'num_ctx': 8192,      # 上下文长度
                'temperature': 0.8
            }
        }
    )
    return response.json()['response']

# 批量处理时监控显存
def check_gpu():
    import subprocess
    result = subprocess.run(['nvidia-smi', '--query-gpu=memory.used', '--format=csv,noheader,nounits'], 
                          capture_output=True, text=True)
    return int(result.stdout.strip())  # MB
```

聊天接口（多轮对话保持角色）

```python
# 适合连续改写多个章节，保持风格一致
def chat_rewrite(chapters, system_prompt=None):
    messages = []
    if system_prompt:
        messages.append({'role': 'system', 'content': system_prompt})
    
    results = []
    for ch in chapters:
        messages.append({'role': 'user', 'content': f'改写章节：{ch}'})
        
        resp = requests.post('http://localhost:11434/api/chat', json={
            'model': 'novel-3d',
            'messages': messages,
            'stream': False
        }).json()
        
        rewritten = resp['message']['content']
        results.append(rewritten)
        
        # 保持上下文但控制长度
        messages.append({'role': 'assistant', 'content': rewritten})
        if len(messages) > 6:  # 保留最近3轮
            messages = messages[:1] + messages[-4:]
    
    return results
```

## 16GB VRAM 模型选择建议
| 模型                  | 量化版本     | 显存占用  | 适用场景         |
| ------------------- | -------- | ----- | ------------ |
| **qwen3:14b**       | Q4\_K\_M | ~9GB  | 主力创作，中文表现优秀  |
| **llama3.1:8b**     | Q8\_0    | ~8GB  | 快速迭代测试提示词    |
| **gemma3:12b**      | Q4\_K\_M | ~8GB  | 轻量级改写任务      |
| **deepseek-r1:14b** | Q4\_K\_M | ~9GB  | 需要推理能力的复杂剧情  |
| **gpt-oss:20b**     | Q4\_K\_M | ~14GB | 你的配置上限，速度极快  |

::: warning 注意
避免同时加载多个大模型。
:::

## 生产环境 Systemd 服务配置
创建 `/etc/systemd/system/ollama.service`

```ini
[Unit]
Description=Ollama Service
After=network.target

[Service]
Type=simple
User=你的用户名
Environment="OLLAMA_HOST=0.0.0.0:11434"
Environment="OLLAMA_NUM_PARALLEL=1"
Environment="OLLAMA_KEEP_ALIVE=30m"
Environment="OLLAMA_CONTEXT_LENGTH=8192"
Environment="PATH=/usr/local/bin:/usr/bin:/bin"
ExecStart=/usr/local/bin/ollama serve
Restart=always
RestartSec=3

[Install]
WantedBy=multi-user.target
```

启用

```bash
sudo systemctl daemon-reload
sudo systemctl enable ollama
sudo systemctl start ollama
```

<!--
## 与3D音频流水线集成

基于规划，建议 `produce_chapter.py` 流程

```python
# 伪代码示例
def produce_chapter(chapter_text):
    # 1. Ollama 改写剧本（标注方位/音效）
    script = generate_3d_script(chapter_text)  # 调用 Ollama API
    
    # 2. 立即释放 LLM 显存，给 TTS 腾地方
    requests.post('http://localhost:11434/api/generate', 
                 json={'model': 'novel-3d', 'keep_alive': 0})
    
    # 3. XTTS v2 语音克隆（你的 10 小时样本）
    audio_segments = tts_generate(script, voice_clone_model)
    
    # 4. Binaural 3D 渲染
    binaural_audio = render_binaural(audio_segments)
    
    # 5. 输出到 SMB 共享目录，笔记本自动同步
    save_to_network_drive(binaural_audio)
```

::: tip
这样确保 LLM → TTS → 3D 渲染 三个阶段不会同时抢显存，16GB 可以流畅运转
:::
-->


## 参考
1. [ollama](https://ollama.com/)