---
tags:
  - Deepin
---
# deepin25浏览器提示webgl不可用

## 背景
在使用 `figma` 查看设计图时，进入页面后提示由于当前不支持 `webgl`，页面自动关闭了。我满心疑问，之前一直好好地，怎么突然提示浏览器不支持 `webgl` 呢? 我琢磨了一下，大概率是显卡驱动的问题，因为我为了跑 `ollama` 和 `cuda`, 更新过 `nvidia` 驱动

## 确认浏览器gpu状态
```shell
# 浏览器输入chrome://gpu/ 查看显卡功能状态
chrome://gpu/

# 查看webgl的状态确实是Disabled
```

## 问题处理

```shell
# 步骤1. 浏览器开启访问 chrome://flags/
chrome://flags/
# 搜索webgl，将搜索结果的几个选项设置为启用

# 步骤2. 重置 Chrome GPU 缓存
# 关闭所有 Chrome 窗口后执行
rm -rf ~/.config/google-chrome/Default/GPUCache/
rm -rf ~/.config/google-chrome/ShaderCache/

# 重新打开浏览器，这时候figma网页应该能正常查看设计图了
```


## 参考
1. [揭秘Deepin操作系统：轻松开启WebGL，解锁沉浸式网页体验](https://www.oryoy.com/news/jie-mi-deepin-cao-zuo-xi-tong-qing-song-kai-qi-webgl-jie-suo-chen-jin-shi-wang-ye-ti-yan.html)