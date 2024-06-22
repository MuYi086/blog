---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "MuYi086's blog"
  text: ""
  tagline: 个人博客,记录工作和生活的点滴
  # actions:
  #   - theme: alt
  #     text: index
  #     link: /Docs/Git/index


# features:
#   - title: Feature A
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature B
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature C
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---
<script setup>
import { ref } from 'vue'
const rowWrapVal = ref(true)
</script>

<!-- AI -->
<a-divider orientation="left">AI</a-divider>
<a-row justify="start">
  <a-button href="/Docs/AI/体验Cloudflare Workers AI">体验Cloudflare Workers AI</a-button>
  <a-button href="/Docs/AI/体验deepseek">体验deepseek</a-button>
</a-row>

<!-- Git -->
<a-divider orientation="left">Git</a-divider>
<a-row justify="start">
  <a-button href="/Docs/Git/Git安装和配置">Git安装和配置</a-button>
  <a-button href="/Docs/Git/GitBook安装和常用命令">GitBook安装和常用命令</a-button>
  <a-button href="/Docs/Git/GitKraken免费版本">GitKraken免费版本</a-button>
  <a-button href="/Docs/Git/前端工程化相关的实用git命令">前端工程化相关的实用git命令</a-button>
</a-row>

<!-- Front-End/CSS -->
<a-divider orientation="left">Front-End/CSS</a-divider>
<a-row justify="start">
  <a-button href="/Docs/Front-End/CSS/开发常用样式">开发常用样式</a-button>
  <a-button href="/Docs/Front-End/CSS/实用效果">实用效果</a-button>
  <a-button href="/Docs/Front-End/CSS/CSS优化-PurgeCSS">CSS优化-PurgeCSS</a-button>
</a-row>

<!-- Front-End/Standards -->
<a-divider orientation="left">Front-End/Standards</a-divider>
<a-row justify="start">
  <a-button href="/Docs/Front-End/Standards/版本编号规范">版本编号规范</a-button>
  <a-button href="/Docs/Front-End/Standards/命名规范">命名规范</a-button>
  <a-button href="/Docs/Front-End/Standards/图片规范">图片规范</a-button>
  <a-button href="/Docs/Front-End/Standards/commit规范">commit规范</a-button>
  <a-button href="/Docs/Front-End/Standards/CSS规范">CSS规范</a-button>
  <a-button href="/Docs/Front-End/Standards/HTML规范">HTML规范</a-button>
  <a-button href="/Docs/Front-End/Standards/JS规范">JS规范</a-button>
  <a-button href="/Docs/Front-End/Standards/CSS格式化之stylelint">CSS格式化之stylelint</a-button>
  <a-button href="/Docs/Front-End/Standards/使用husky+commitlint规范代码提交">使用husky+commitlint规范代码提交</a-button>
</a-row>

<!-- Front-End/JS -->
<a-divider orientation="left">Front-End/JS</a-divider>
<a-row justify="start">
  <a-button href="/Docs/Front-End/JS/常用的设计模式">常用的设计模式</a-button>
  <a-button href="/Docs/Front-End/JS/常用正则">常用正则</a-button>
  <a-button href="/Docs/Front-End/JS/常用snippets">常用snippets</a-button>
  <a-button href="/Docs/Front-End/JS/高德地图常用方法封装">高德地图常用方法封装</a-button>
  <a-button href="/Docs/Front-End/JS/高阶函数片段">高阶函数片段</a-button>
  <a-button href="/Docs/Front-End/JS/键盘事件与KeyBoardWrapper交互">键盘事件与KeyBoardWrapper交互</a-button>
  <a-button href="/Docs/Front-End/JS/解析vue指令clickoutside源码">解析vue指令clickoutside源码</a-button>
  <a-button href="/Docs/Front-End/JS/浏览器的5种Observer">浏览器的5种Observer</a-button>
  <a-button href="/Docs/Front-End/JS/浏览器宏任务和微任务">浏览器宏任务和微任务</a-button>
  <a-button href="/Docs/Front-End/JS/前后端启用https">前后端启用https</a-button>
  <a-button href="/Docs/Front-End/JS/深入理解赋值、浅拷贝、深拷贝">深入理解赋值、浅拷贝、深拷贝</a-button>
  <a-button href="/Docs/Front-End/JS/实现一个中间件">实现一个中间件</a-button>
  <a-button href="/Docs/Front-End/JS/使用vue-socketio">使用vue-socketio</a-button>
  <a-button href="/Docs/Front-End/JS/微信jssdk封装使用">微信jssdk封装使用</a-button>
  <a-button href="/Docs/Front-End/JS/小程序webview调试">小程序webview调试</a-button>
  <a-button href="/Docs/Front-End/JS/优秀js库moment">优秀js库moment</a-button>
  <a-button href="/Docs/Front-End/JS/与移动端通信">与移动端通信</a-button>
  <a-button href="/Docs/Front-End/JS/chrome扩展入门">chrome扩展入门</a-button>
  <a-button href="/Docs/Front-End/JS/Emoji多端统一处理">Emoji多端统一处理</a-button>
  <a-button href="/Docs/Front-End/JS/es5新特性">es5新特性</a-button>
  <a-button href="/Docs/Front-End/JS/es6常用特性">es6常用特性</a-button>
  <a-button href="/Docs/Front-End/JS/es常用片段">es常用片段</a-button>
  <a-button href="/Docs/Front-End/JS/JS标准内置对象">JS标准内置对象</a-button>
  <a-button href="/Docs/Front-End/JS/JS发布订阅模式">JS发布订阅模式</a-button>
  <a-button href="/Docs/Front-End/JS/JS链式调用原理">JS链式调用原理</a-button>
  <a-button href="/Docs/Front-End/JS/JS性能优化">JS性能优化</a-button>
  <a-button href="/Docs/Front-End/JS/Promise介绍和使用">Promise介绍和使用</a-button>
  <a-button href="/Docs/Front-End/JS/Range的使用">Range的使用</a-button>
  <a-button href="/Docs/Front-End/JS/uniapp使用eslint校验代码">uniapp使用eslint校验代码</a-button>
  <a-button href="/Docs/Front-End/JS/Vue+Oauth登录实现">Vue+Oauth登录实现</a-button>
  <a-button href="/Docs/Front-End/JS/Vue实现富文本插入Emoji">Vue实现富文本插入Emoji</a-button>
  <a-button href="/Docs/Front-End/JS/比较gz与br加载速度">比较gz与br加载速度</a-button>
</a-row>

<!-- Python -->
<a-divider orientation="left">Python</a-divider>
<a-row justify="start">
  <a-button href="/Docs/Python/微信公众号开发爬坑经历">微信公众号开发爬坑经历</a-button>
  <a-button href="/Docs/Python/mitmproxy抓包">mitmproxy抓包</a-button>
  <a-button href="/Docs/Python/Python版本管理">Python版本管理</a-button>
  <a-button href="/Docs/Python/Python源管理">Python源管理</a-button>
</a-row>

<!-- Node -->
<a-divider orientation="left">Node</a-divider>
<a-row justify="start">
  <a-button href="/Docs/Node/安装Node.js和npm配置">安装Node.js和npm配置</a-button>
  <a-button href="/Docs/Node/node安装报错Unexpected-token">node安装报错Unexpected-token</a-button>
  <a-button href="/Docs/Node/使用nvm和nrm">使用nvm和nrm</a-button>
  <a-button href="/Docs/Node/使用uniapp给小程序添加云函数">使用uniapp给小程序添加云函数</a-button>
  <a-button href="/Docs/Node/使用verdaccio搭建本地npm仓库">使用verdaccio搭建本地npm仓库</a-button>
  <a-button href="/Docs/Node/使用vue-cli搭建vue项目">使用vue-cli搭建vue项目</a-button>
  <a-button href="/Docs/Node/koa使用和API实现">koa使用和API实现</a-button>
  <a-button href="/Docs/Node/Taro command not found多平台解决方案">Taro command not found多平台解决方案</a-button>
  <a-button href="/Docs/Node/使用Lighthouse分析前端性能">使用Lighthouse分析前端性能</a-button>
  <a-button href="/Docs/Node/通过GithubAction将内容部署到vps">通过GithubAction将内容部署到vps</a-button>
</a-row>

<!-- Essay -->
<a-divider orientation="left">随笔</a-divider>
<a-row justify="start">
  <a-button href="/Docs/Essay/竞品研究">竞品研究</a-button>
  <a-button href="/Docs/Essay/MarkdownUse">MarkdownUse</a-button>
  <a-button href="/Docs/Essay/常用Markdown数学公式语法">常用Markdown数学公式语法</a-button>
  <a-button href="/Docs/Essay/国家级智库">国家级智库</a-button>
  <a-button href="/Docs/Essay/国务院机构改革方案">国务院机构改革方案</a-button>
  <a-button href="/Docs/Essay/海淘入坑手册">海淘入坑手册</a-button>
  <a-button href="/Docs/Essay/好文品读">好文品读</a-button>
  <a-button href="/Docs/Essay/前端开发对接问题和解决办法汇总">前端开发对接问题和解决办法汇总</a-button>
  <a-button href="/Docs/Essay/足球知识速成">足球知识速成</a-button>
  <a-button href="/Docs/Essay/IOS申请邓白氏编码">IOS申请邓白氏编码</a-button>
  <a-button href="/Docs/Essay/新建销售计划-页面卡死问题分析">新建销售计划-页面卡死问题分析</a-button>
</a-row>

<!-- Linux/Docker -->
<a-divider orientation="left">Linux/Docker</a-divider>
<a-row justify="start">
  <a-button href="/Docs/Linux/Docker/CI和CD搭建配置">CI和CD搭建配置</a-button>
  <a-button href="/Docs/Linux/Docker/deepin搭建docker环境">deepin搭建docker环境</a-button>
  <a-button href="/Docs/Linux/Docker/docker安装和使用gitlab">docker安装和使用gitlab</a-button>
  <a-button href="/Docs/Linux/Docker/docker搭建nginx+php环境">docker搭建nginx+php环境</a-button>
</a-row>

<!-- Linux/Wall -->
<a-divider orientation="left">Linux/Wall</a-divider>
<a-row justify="start">
  <a-button href="/Docs/Linux/Wall/科学上网-heroku">科学上网-heroku</a-button>
  <a-button href="/Docs/Linux/Wall/科学上网-XX-NET">科学上网-XX-NET</a-button>
  <a-button href="/Docs/Linux/Wall/科学上网-Tor">科学上网-Tor</a-button>
  <a-button href="/Docs/Linux/Wall/科学上网-让终端走代理">科学上网-让终端走代理</a-button>
  <a-button href="/Docs/Linux/Wall/科学上网-Surfshark">科学上网-Surfshark</a-button>
  <a-button href="/Docs/Linux/Wall/科学上网-浏览器代理">科学上网-浏览器代理</a-button>
  <a-button href="/Docs/Linux/Wall/科学上网-shadowsock">科学上网-shadowsock</a-button>
  <a-button href="/Docs/Linux/Wall/科学上网-v2ray搭建">科学上网-v2ray搭建</a-button>
  <a-button href="/Docs/Linux/Wall/科学上网-v2ray使用">科学上网-v2ray使用</a-button>
  <a-button href="/Docs/Linux/Wall/科学上网-RackNerd">科学上网-RackNerd</a-button>
  <a-button href="/Docs/Linux/Wall/科学上网-Cloudflare-Pages">科学上网-Cloudflare-Pages</a-button>
  <a-button href="/Docs/Linux/Wall/科学上网-Cloudflare-Warp">科学上网-Cloudflare-Warp</a-button>
  <a-button href="/Docs/Linux/Wall/科学上网-Slicehosting">科学上网-Slicehosting</a-button>
  <a-button href="/Docs/Linux/Wall/科学上网-Geph">科学上网-Geph</a-button>
</a-row>

<!-- Linux/Deepin -->
<a-divider orientation="left">Linux/Deepin</a-divider>
<a-row justify="start">
  <a-button href="/Docs/Linux/Deepin/deepin换源">deepin换源</a-button>
  <a-button href="/Docs/Linux/Deepin/安装deepin系统后要做的事">安装deepin系统后要做的事</a-button>
  <a-button href="/Docs/Linux/Deepin/deepin20安装mysql">deepin20安装mysql</a-button>
  <a-button href="/Docs/Linux/Deepin/deepin安装cuda和cuDNN">deepin安装cuda和cuDNN</a-button>
  <a-button href="/Docs/Linux/Deepin/deepin安装lamp">deepin安装lamp</a-button>
  <a-button href="/Docs/Linux/Deepin/deepin安装nvidia驱动">deepin安装nvidia驱动</a-button>
  <a-button href="/Docs/Linux/Deepin/deepin安装p7zip">deepin安装p7zip</a-button>
  <a-button href="/Docs/Linux/Deepin/deepin使用tensorflow入门机器学习">deepin使用tensorflow入门机器学习</a-button>
  <a-button href="/Docs/Linux/Deepin/deepin安装oh my Zsh">deepin安装oh my Zsh</a-button>
</a-row>

<!-- Linux/Shell -->
<a-divider orientation="left">Linux/Shell</a-divider>
<a-row justify="start">
  <a-button href="/Docs/Linux/Shell/安装Ubuntu22.04后要做的事">安装Ubuntu22.04后要做的事</a-button>
  <a-button href="/Docs/Linux/Shell/反爬虫一些方案总结和尝试">反爬虫一些方案总结和尝试</a-button>
  <a-button href="/Docs/Linux/Shell/简单使用tcpdump">简单使用tcpdump</a-button>
  <a-button href="/Docs/Linux/Shell/解决linux安装xmind缺少依赖报错">解决linux安装xmind缺少依赖报错</a-button>
  <a-button href="/Docs/Linux/Shell/静态资源gzip优化">静态资源gzip优化</a-button>
  <a-button href="/Docs/Linux/Shell/利用zx和SSHKey发布代码到服务器">利用zx和SSHKey发布代码到服务器</a-button>
  <a-button href="/Docs/Linux/Shell/使用V2ray,CloudFlare Warp解锁GPT">使用V2ray,CloudFlare Warp解锁GPT</a-button>
  <a-button href="/Docs/Linux/Shell/使用vscode进行java开发">使用vscode进行java开发</a-button>
  <a-button href="/Docs/Linux/Shell/特别实用的shell命令">特别实用的shell命令</a-button>
  <a-button href="/Docs/Linux/Shell/一键搭建ChatGPT web版">一键搭建ChatGPT web版</a-button>
  <a-button href="/Docs/Linux/Shell/dell G3装系统无法识别第二块硬盘">dell G3装系统无法识别第二块硬盘</a-button>
  <a-button href="/Docs/Linux/Shell/linux下virtualbox用gho还原系统">linux下virtualbox用gho还原系统</a-button>
  <a-button href="/Docs/Linux/Shell/mysql常用命令">mysql常用命令</a-button>
  <a-button href="/Docs/Linux/Shell/navicat连接一键集成环境的mysql">navicat连接一键集成环境的mysql</a-button>
  <a-button href="/Docs/Linux/Shell/nginx常用命令">nginx常用命令</a-button>
  <a-button href="/Docs/Linux/Shell/pm2常用命令">pm2常用命令</a-button>
  <a-button href="/Docs/Linux/Shell/virtualbox虚拟机和宿主机互相复制粘贴">virtualbox虚拟机和宿主机互相复制粘贴</a-button>
  <a-button href="/Docs/Linux/Shell/vps报错temporary failure in name resolution">vps报错temporary failure in name resolution</a-button>
  <a-button href="/Docs/Linux/Shell/vps内资源通过mega快传到本地">vps内资源通过mega快传到本地</a-button>
  <a-button href="/Docs/Linux/Shell/vscode修改文件监控数">vscode修改文件监控数</a-button>
  <a-button href="/Docs/Linux/Shell/windows+linux双系统引导修复">windows+linux双系统引导修复</a-button>
  <a-button href="/Docs/Linux/Shell/zsh常用插件和命令">zsh常用插件和命令</a-button>
  <a-button href="/Docs/Linux/Shell/Ubuntu安装deepin桌面环境">Ubuntu安装deepin桌面环境</a-button>
  <a-button href="/Docs/Linux/Shell/Ubuntu常见问题汇总">Ubuntu常见问题汇总</a-button>
  <a-button href="/Docs/Linux/Shell/安装1Panel">安装1Panel</a-button>
  <a-button href="/Docs/Linux/Shell/Ubuntu安装wireshark">Ubuntu安装wireshark</a-button>
  <a-button href="/Docs/Linux/Shell/Ubuntu安装flatpak软件">Ubuntu安装flatpak软件</a-button>
  <a-button href="/Docs/Linux/Shell/安装Bt面板">安装Bt面板</a-button>
  <a-button href="/Docs/Linux/Shell/宝塔nginx安装ngx_brotli">宝塔nginx安装ngx_brotli</a-button>
</a-row>

<!-- Windows -->
<a-divider orientation="left">Windows</a-divider>
<a-row justify="start" :wrap="rowWrapVal.value">
  <a-button href="/Docs/Windows/安装Openssl">安装Openssl</a-button>
  <a-button href="/Docs/Windows/解决安装Adobe Air时发生错误">解决安装Adobe Air时发生错误</a-button>
  <a-button href="/Docs/Windows/解决win10扩展出来的屏幕模糊">解决win10扩展出来的屏幕模糊</a-button>
  <a-button href="/Docs/Windows/利用charles抓包app">利用charles抓包app</a-button>
  <a-button href="/Docs/Windows/神器vimium使用说明">神器vimium使用说明</a-button>
  <a-button href="/Docs/Windows/自用host">自用host</a-button>
  <a-button href="/Docs/Windows/git bash交互提示符不工作">git bash交互提示符不工作</a-button>
  <a-button href="/Docs/Windows/nexus 7 2013 wifi 刷机">nexus 7 2013 wifi 刷机</a-button>
  <a-button href="/Docs/Windows/SourceTree破解免登录">SourceTree破解免登录</a-button>
  <a-button href="/Docs/Windows/tree命令生成文件目录">tree命令生成文件目录</a-button>
  <a-button href="/Docs/Windows/安装msi文件报错2503和2502">安装msi文件报错2503和2502</a-button>
  <a-button href="/Docs/Windows/浏览器提示HSTS">浏览器提示HSTS</a-button>
</a-row>
