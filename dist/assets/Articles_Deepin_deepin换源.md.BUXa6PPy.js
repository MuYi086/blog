import{_ as s,o as a,c as i,a7 as n}from"./chunks/framework.CgLK9O2D.js";const y=JSON.parse('{"title":"deepin换源","description":"","frontmatter":{"tags":["Deepin"]},"headers":[],"relativePath":"Articles/Deepin/deepin换源.md","filePath":"Articles/Deepin/deepin换源.md","lastUpdated":1719414676000}'),e={name:"Articles/Deepin/deepin换源.md"},t=n(`<h1 id="deepin换源" tabindex="-1">deepin换源 <a class="header-anchor" href="#deepin换源" aria-label="Permalink to &quot;deepin换源&quot;">​</a></h1><h2 id="过程" tabindex="-1">过程 <a class="header-anchor" href="#过程" aria-label="Permalink to &quot;过程&quot;">​</a></h2><p>众所周知，<code>deepin</code> 默认的官方源下载速度着实不快。</p><p>这里我们换成第三方提供的源。比如阿里云。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置=&gt;更新设置=&gt;切换镜像源=&gt;阿里云</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 编辑配置文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gedit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/apt/sources.list</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 将官方地址替换成阿里云如下:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Generated by deepin-installer</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">deb</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [by-hash=force] https://mirrors.aliyun.com/deepin lion main contrib non-free</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#地址替换为 https://mirrors.aliyun.com/deepin lion main contrib non-free</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 更新源</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 更新包(二选一)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dist-upgrade</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 在升级软件包时自动处理依赖</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> upgrade</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 更新已安装的包</span></span></code></pre></div><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ol><li><a href="https://blog.csdn.net/mqc19881123/article/details/74016132/" target="_blank" rel="noreferrer">deepin15官方源更细特别慢，换阿里云的记录</a></li><li><a href="https://blog.csdn.net/baidu_41751590/article/details/89064220" target="_blank" rel="noreferrer">Deepin更换镜像源,更换系统软件更新源方法完整整理用html书写</a></li></ol><div style="display:none;" data-pagefind-meta="base64:JTdCJTIydGFncyUyMiUzQSU1QiUyMkRlZXBpbiUyMiU1RCUyQyUyMmRhdGUlMjIlM0ExNzE5NDE0Njc2MDAwJTdE"></div>`,8),l=[t];function p(h,d,r,k,c,o){return a(),i("div",null,l)}const F=s(e,[["render",p]]);export{y as __pageData,F as default};
