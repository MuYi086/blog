---
tags:
  - AI
---
# qwen禁用思考模式

## 介绍
我有一些项目涉及到使用`ollama`调用`qwen`的模型，但是使用的`qwen3.5:9b`默认会输出思考，严重影响了响应速度，我需要关闭思考模式，直接输出结果

## 措施
我将上述问题发给了市面上的几个 `ai`，回答的结果都不生效，最终还是在发给 `qwen3.6 plus`，他给出了正确的结果。果然还是自家模型训练的最彻底

`Qwen3.5-9B` 禁用思考模式的方法

根据搜索结果，`Qwen3.5-9B` 模型禁用思考模式（`Thinking/Reasoning`）有以下几种主流方法，具体取决于你的部署方式：

### 方法一：Prompt 末尾追加指令（最简单）

在用户输入的末尾添加 `/no_think` 指令（**注意斜杠前要有空格**）：

```
请解释一下黑洞是什么 /no_think
```

> 该机制通过模型内置的指令解析器实现，检测到特定标记时会跳过思维链生成模块 

---

### 方法二：通过 `enable_thinking` 参数控制（推荐）

#### ✅ 使用 Transformers 原生调用
```python
from transformers import AutoTokenizer, AutoModelForCausalLM

tokenizer = AutoTokenizer.from_pretrained("Qwen/Qwen3.5-9B", trust_remote_code=True)
model = AutoModelForCausalLM.from_pretrained("Qwen/Qwen3.5-9B", trust_remote_code=True)

messages = [{"role": "user", "content": "Say five countries in Africa."}]

# 关键：设置 enable_thinking=False
text = tokenizer.apply_chat_template(
    messages,
    tokenize=False,
    enable_thinking=False,  # ← 禁用思考
    add_generation_prompt=True
)
# ... 后续生成代码
```


#### ✅ 使用 vLLM / API 调用
在请求体中添加 `chat_template_kwargs` 参数：
```json
{
  "model": "Qwen3.5-9B",
  "messages": [{"role": "user", "content": "hello"}],
  "stream": true,
  "chat_template_kwargs": {
    "enable_thinking": false
  }
}
```
---

### 方法三：Ollama 部署专用方式

如果你使用 **Ollama** 部署 `Qwen3.5-9B`，需使用 **Ollama 原生 API**（⚠️ 不是 `OpenAI` 兼容接口）：

```python
import requests

payload = {
    "model": "qwen3.5:9b",
    "messages": [{"role": "user", "content": "hello"}],
    "stream": True,
    "think": False  # ← Ollama 原生参数，控制思考模式
}

response = requests.post("http://localhost:11434/api/chat", json=payload, stream=True)
```

> ⚠️ 注意：`/api/chat` 是 Ollama 原生接口，`/v1/chat/completions` 是 OpenAI 兼容接口，后者可能不支持 `think` 参数 

---

### 方法四：LM Studio / GGUF 部署

1. 创建虚拟模型目录，编写 `model.yaml`：
```yaml
model: unsloth/Qwen3.5-9B-GGUF-no-thinking
base: unsloth/Qwen3.5-9B-GGUF/Qwen3.5-9B-Q4_K_M.gguf
metadataOverrides:
  reasoning: false
customFields:
  - key: enableThinking
    displayName: "Enable Thinking"
    type: boolean
    defaultValue: false  # ← 默认关闭
    effects:
      - type: setJinjaVariable
        variable: enable_thinking
```

2. 在 `LM Studio` 中加载该虚拟模型，并确认 `Enable Thinking = Off` 

---

### 方法五：永久修改模型默认行为（高级）

修改模型目录下的 `tokenizer_config.json` 中的 `chat template`：

将：
```jinja
{%- if enable_thinking is defined and enable_thinking is false %}
```
改为：
```jinja
{%- if enable_thinking is not defined or enable_thinking is false %}
```

> 这样模型默认就会关闭思考，但仍可通过前两种方式临时开启 

---

## ⚠️ 常见问题排查

| 问题 | 可能原因 | 解决方案 |
|------|----------|----------|
| 关了思考还在输出 `<think>` | 旧会话缓存了配置 | 新建聊天窗口测试 |
| 参数不生效 | 变量名写错 | 确认是 `enable_thinking` 而非 `disable_thinking` |
| Ollama 调用无效 | 用了 OpenAI 兼容接口 | 改用 `/api/chat` 原生接口 + `think` 参数 |
| 部分框架不支持 | 旧版本兼容性 | 升级 transformers / vLLM / MindIE 到最新版 |

---

## 📊 关闭思考的效果

- ✅ 推理速度提升 40%-60%，适合对响应速度要求高的场景 
- ✅ 减少 Token 消耗，降低 API 成本
- ⚠️ 复杂推理任务可能准确率略有下降，建议根据任务类型灵活开关

> 💡 **建议**：知识问答、简单任务可关闭思考；数学推理、代码生成、多步规划等复杂任务建议保留思考模式。