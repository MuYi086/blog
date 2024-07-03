import{_ as s,o as i,c as a,a7 as n}from"./chunks/framework.CgLK9O2D.js";const y=JSON.parse('{"title":"前端工程化相关的实用git命令","description":"","frontmatter":{"tags":["Git"]},"headers":[],"relativePath":"Articles/Git/前端工程化相关的实用git命令.md","filePath":"Articles/Git/前端工程化相关的实用git命令.md","lastUpdated":1719414676000}'),l={name:"Articles/Git/前端工程化相关的实用git命令.md"},p=n(`<h1 id="前端工程化相关的实用git命令" tabindex="-1">前端工程化相关的实用git命令 <a class="header-anchor" href="#前端工程化相关的实用git命令" aria-label="Permalink to &quot;前端工程化相关的实用git命令&quot;">​</a></h1><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p>最近在做一个网页自动检查新版本发布提示用户刷新的需求，用到了一些工程化实用的 <code>git</code> 命令，记录一下。</p><h2 id="实用命令" tabindex="-1">实用命令 <a class="header-anchor" href="#实用命令" aria-label="Permalink to &quot;实用命令&quot;">​</a></h2><p>常用的命令就不说了，大家天天提交，都有用到。以下主要记录在实现某些特殊需求时可能会用到的 <code>git</code> 命令。</p><details class="details custom-block"><summary>点我查看代码</summary><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 显示最近n次提交记录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> log</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 简单显示git log记录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> shortlog</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 显示tag列表</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tag</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -l</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 管理多个工作树</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> worktree</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 描述tag版本(返回hash)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> describe</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 显示reflog信息show 选项接收git log接受的任何选项</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reflog</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reflog</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> show</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 显示本地存储库中的引用</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> show-ref</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --head</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> show-ref</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --tags</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 显示当前head分支</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> symbolic-ref</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> HEAD</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 显示当前git name</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user.name</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 显示当前git email</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user.email</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 显示某个commit详细信息</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> show</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commitId</span></span></code></pre></div></details><h2 id="pretty-formats" tabindex="-1">PRETTY FORMATS <a class="header-anchor" href="#pretty-formats" aria-label="Permalink to &quot;PRETTY FORMATS&quot;">​</a></h2><p>高级用法，可以很方便的格式化输出 <code>&lt;string&gt;</code> 格式允许指定要显示的信息。但是有一个例外，用 <code>%n</code> 来获得换行符而不是 <code>\\n</code></p><details class="details custom-block"><summary>点我查看代码</summary><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 提交哈希</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%H</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 缩写提交哈希</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%h</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 树形哈希</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%T</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 缩写树哈希</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%t</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 缩写为父哈希</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%p</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 项目作者姓名</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%an</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 项目作者姓名(尊重.mailmap)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%aN</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 项目作者电邮</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%ae</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 项目作者电邮(尊重.mailmap)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%aE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 项目作者日期(格式遵循 --data=option)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%ad</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 项目作者日期(RFC2822格式)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%aD</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 项目作者日期(相对)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%ar</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 项目作者日期(unix timestamp)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%at</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 项目作者日期(ISO 8601格式)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%ai</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 项目作者日期(ISO 8601格式 严格)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%aI</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 项目作者日期(short format YYYY-MM-DD)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%as</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 项目作者日期(human style)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%ah</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 提交者姓名</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%cn</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 提交者姓名(尊重.mailmap)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%cN</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 提交者电邮</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%ce</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 提交者电邮(尊重.mailmap)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%cE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 提交者电子邮件本地部分(@符号之前的部分)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%cl</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 提交者电子邮件本地部分(遵守 .mailmap)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%cL</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 提交者日期(格式遵循 --data=option)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%cd</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 提交者日期(RFC2822格式)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%cD</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 提交者日期(相对)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%cr</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 提交者日期(unix timestamp)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%ct</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 提交者日期(ISO 8601格式)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%ci</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 提交者日期(ISO 8601格式 严格)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%cI</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 提交者日期(short format YYYY-MM-DD)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%cs</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 提交者日期(human style)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%ch</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 没有(&quot;,&quot;)包装的ref名称</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%D</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在达到提交的命令行上给出的引用名称（如git log --source），仅适用于git log</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%S</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># encoding 编码</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%e</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># subject 主题</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%s</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 适合用作文件名的经过清理的主题行</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%f</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># body 正文</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%b</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 未经处理的主题和正文</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%B</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># commit notes 提交说明</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%N</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 来自GPG的已签名提交的原始验证消息</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%GG</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 显示好的（有效）签名“G”，坏签名显示“B”，有效期未知的好签名显示“U”，已过期的好签名显示“X”，“Y”代表由过期密钥签名的好签名，“R”表示由撤销密钥签名的好签名，“E”表示签名无法检查（例如缺少密钥），“N”表示没有签名</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%G?</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 显示签名提交的签名者姓名</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%GS</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 显示用于签署签名提交的密钥</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%GK</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 显示签名提交的密钥指纹</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%GF</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 显示主键的指纹，其子键用于签名提交的签名</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%GP</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># reflog选择器，例如refs/stash@{1}或refs/stash@{2 minutes ago};格式遵循-g选项描述的规则。 @之前的部分是命令行中给出的refname（因此git log -g refs/heads/master将产生refs/heads/master@{0}）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%gD</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 缩短了reflog选择器;与%gD相同，但refname部分缩短了人类的可读性（因此refs/heads/master变为master）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%gd</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># reflog身份名称</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%gn</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># reflog身份名称(尊重.mailmap)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%gN</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># reflog身份电子邮件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%ge</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># reflog身份电子邮件(尊重.mailmap)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%gE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># reflog主题</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%gs</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 将颜色切换为红色</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%Cred</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 将颜色切换为绿色</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%Cgreen</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 将颜色切换为蓝色</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%Gblue</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 重置颜色</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%Creset</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 颜色规格.默认情况下，仅在启用日志输出时显示颜色（通过color.diff，color.ui或--color，并且如果我们要去终端，则尊重前者的auto设置）。 %C(auto,...)被接受为默认的历史同义词（例如，%C(auto,red)）。即使没有启用颜色，指定%C(always,...)也会显示颜色（尽管只考虑使用--color=always为整个输出启用颜色，包括这种格式和其他任何git可能颜色的颜色）。单独auto（即%C(auto)）将打开下一个占位符的自动着色，直到再次切换颜色。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%C(...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 左（&amp;lt;），右（&amp;gt;）或边界（-）标记</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%m</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 换行符</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%n</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 原始%</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%%</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 从十六进制代码打印一个字节</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%x00</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 切换行换行</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%w([</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt; w</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [，&lt; </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">1&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [，&lt; </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">2&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">]]]</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使下一个占位符至少取N列，如果需要，在右边填充空格。如果输出长于N列，则可以选择在开头（ltrunc），中间（mtrunc）或结尾（trunc）截断。请注意，截断仅适用于N&gt; = 2</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;(&lt;N&gt; [，trunc </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ltrunc</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> mtrunc]</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使下一个占位符至少占用第N列，如果需要，在右边填充空格</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">N</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 与%相似，%&lt;|(&lt;N&gt;)，但左边的填充空格</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;(&lt;N&gt;), %</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">N</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 类似于%&gt;(&lt;N&gt;),%&gt;|(&lt;N&gt;)，除非下一个占位符占用的空间多于给定的空间并且左侧有空格，请使用这些空格</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;(&lt;N&gt;), %</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">N</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 类似于%&lt;(&lt;N&gt;),%&lt;|(&lt;N&gt;)，但填充两侧（即文本居中）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;(&lt;N&gt;), %&gt;&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">N</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div></details><p>举例</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 支持组合使用</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 获取当前git用户的name</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user.name</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 获取当前git用户的email</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user.email</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 获取最近一次提交者的name和email</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> log</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --pretty=format:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;%cn %ce&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 获取最近一次提交时间</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> log</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --pretty=format:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;%ct&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 获取最近一次提交主题</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> log</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --pretty=format:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;%s&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 获取最近一次提交的hash</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> log</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --pretty=format:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;%H&quot;</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><p>结合 <code>node</code> 子进程的 <code>execSync</code> 方法，可以很方便的获取一些 <code>git</code> 信息包括(当前分支，提交者，提交时间，提交标题，当前 <code>tag</code> 等),以便于在编译时注入运行时或者生成 <code>buildInfo.json</code> 文件</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">execSync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;child_process&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getGitBranch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () { </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 获取当前分支</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> branchName</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> execSync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;git symbolic-ref --short -q HEAD&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      encoding: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;utf8&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">trim</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> branchName</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (e) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;获取git分支失败&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> branch</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getGitBranch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(branch, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;-------------------------getGitBranch/branch----------------------&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ol><li><a href="https://www.bookstack.cn/read/git-doc-zh/README.md" target="_blank" rel="noreferrer">Git中文参考</a></li><li><a href="https://git-scm.com/docs/gittutorial" target="_blank" rel="noreferrer">git-scm</a></li><li><a href="https://www.runoob.com/note/56524" target="_blank" rel="noreferrer">Git常用命令</a></li></ol><div style="display:none;" data-pagefind-meta="base64:JTdCJTIydGFncyUyMiUzQSU1QiUyMkdpdCUyMiU1RCUyQyUyMmRhdGUlMjIlM0ExNzE5NDE0Njc2MDAwJTdE"></div>`,17),h=[p];function t(k,e,r,g,d,c){return i(),a("div",null,h)}const E=s(l,[["render",t]]);export{y as __pageData,E as default};
