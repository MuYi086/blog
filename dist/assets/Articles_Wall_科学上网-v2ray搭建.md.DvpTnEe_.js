import{_ as a,o as s,c as e,a7 as i}from"./chunks/framework.CgLK9O2D.js";const l="/assets/v2ray_01.D9bIkGMG.png",t="/assets/v2ray_02.FMOl4zXb.png",n="/assets/v2ray_03.DjWfBWHX.png",o="/assets/v2ray_04.CrtOvIYL.png",p="/assets/v2ray_05.KjmXDVly.png",r="/assets/v2ray_11.CIQsl0sB.png",f=JSON.parse('{"title":"科学上网-v2ray搭建","description":"","frontmatter":{"tags":["Wall"]},"headers":[],"relativePath":"Articles/Wall/科学上网-v2ray搭建.md","filePath":"Articles/Wall/科学上网-v2ray搭建.md","lastUpdated":1719417334000}'),c={name:"Articles/Wall/科学上网-v2ray搭建.md"},d=i('<h1 id="科学上网-v2ray搭建" tabindex="-1">科学上网-v2ray搭建 <a class="header-anchor" href="#科学上网-v2ray搭建" aria-label="Permalink to &quot;科学上网-v2ray搭建&quot;">​</a></h1><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p>一款优秀的代理集成工具。</p><p>这里使用了 <code>V2ray + WS + TLS + Cloudflare</code> 搭建</p><ul><li>优点 : 高匿,快速, 支持多平台, 多协议</li><li>缺点 : 配置较复杂,上手需要结合多种技术</li></ul><h2 id="cloudflare-1panel" tabindex="-1">Cloudflare + 1Panel <a class="header-anchor" href="#cloudflare-1panel" aria-label="Permalink to &quot;Cloudflare + 1Panel&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">注意</p><p>以前我们是使用 <code>BT(宝塔)</code> 面板的，但是它版本迭代后不支持自定义 <code>SSL</code> 证书了，因此改用开源且更友好的 <code>1Panel</code></p></div><p><code>Cloudflare</code> : 这里我们用来解析域名的 <code>DNS</code> ,并创建 <code>SSL</code> 证书</p><p><code>1Panel</code> : 创建网站并绑定证书</p><h3 id="注册并解析域名" tabindex="-1">注册并解析域名 <a class="header-anchor" href="#注册并解析域名" aria-label="Permalink to &quot;注册并解析域名&quot;">​</a></h3><p><a href="https://dash.cloudflare.com" target="_blank" rel="noreferrer">cloudflare</a></p><ol><li><p>添加域名:代理状态设为关闭</p><p><img src="'+l+`" alt="代理" title="代理"></p></li><li><p>在域名控制面板将 <code>DNS</code> 修改指向到 <code>Cloudflare</code></p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">NS</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	earl.ns.cloudflare.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">NS</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	vita.ns.cloudflare.com</span></span></code></pre></div></li></ol><h3 id="加密和创建证书" tabindex="-1">加密和创建证书 <a class="header-anchor" href="#加密和创建证书" aria-label="Permalink to &quot;加密和创建证书&quot;">​</a></h3><ol><li><p>使用 <code>SSL/TLS</code> 加密</p><p><img src="`+t+'" alt="代理" title="代理"></p></li><li><p>创建证书</p><p><img src="'+n+'" alt="证书" title="证书"></p><p><img src="'+o+'" alt="证书" title="证书"></p></li><li><p>记录并保存证书信息</p><p><img src="'+p+`" alt="证书" title="证书"></p></li><li><p>将证书和密钥写到对应 <code>/etc/ssl/cert.pem</code> 和 <code>/etc/ssl/key.pem</code> 中</p></li></ol><h3 id="_1panel设置" tabindex="-1">1Panel设置 <a class="header-anchor" href="#_1panel设置" aria-label="Permalink to &quot;1Panel设置&quot;">​</a></h3><ol><li><p>上传证书: 网站-&gt;证书-&gt;上传证书-&gt;粘贴私钥key-&gt;粘贴证书(pem)</p></li><li><p>创建网站: 网站-&gt;创建网站-&gt;运行环境-&gt;新增</p></li></ol><h2 id="安装x-ui" tabindex="-1">安装x-ui <a class="header-anchor" href="#安装x-ui" aria-label="Permalink to &quot;安装x-ui&quot;">​</a></h2><p>这里我们不直接安装 <code>v2ray</code> ，而是通过面板集成，方便管理。</p><p>最开始用的 <code>v2ray.fun</code> 的面板,后面脚本失效了，也尝试过<code>v2-ui</code> ，被屏蔽后再到现在使用的 <code>x-ui</code></p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://raw.githubusercontent.com/vaxilu/x-ui/master/install.sh</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install.sh</span></span></code></pre></div><p>安装完成后可以使用 <code>x-ui</code> 命令操作面板，注意访问需要 <code>1Panel</code> 放行相应的端口</p><p>方法一: &quot;操作-&gt;二维码-&gt;另存为&quot; 到 <code>v2ray</code> 客户端扫码</p><p>方法二: &quot;详细信息-&gt;查看-&gt;复制链接&quot;, 到 <code>v2ray</code> 客户端粘贴</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p><code>Cloudflare</code> 支持的 <code>https</code> 端口好有限,建议使用非 <code>443</code> 的端口</p><p><code>443</code>、<code>2053</code>、<code>2083</code>、<code>2087</code>、<code>2096</code>、<code>8443</code></p></div><h2 id="cloudflare开启代理" tabindex="-1">Cloudflare开启代理 <a class="header-anchor" href="#cloudflare开启代理" aria-label="Permalink to &quot;Cloudflare开启代理&quot;">​</a></h2><p><img src="`+r+`" alt="开启代理" title="开启代理"></p><div class="warning custom-block"><p class="custom-block-title">特别注意</p><p>使用 <code>x-ui</code> 等面板可忽略以下</p><p>如果我们的服务器在国外，需要格外注意服务器系统时间与本地时间是否一致。 <code>v2ray</code> 验证方式认为误差超过 <code>90s</code> 都是不合法的请求。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># linux查看系统时间</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">date</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -R</span></span></code></pre></div><p>如果不为东八区的时间，我们使用 <code>tzselect</code> 重置下</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tzselect</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1. 选择Asia</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2. 选择China</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 3. 选择Beijing Time</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 4. 选1，yes</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 更新环境变量</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;TZ=&#39;Asia/Shanghai&#39;; export TZ&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/etc/profile</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">source</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/profile</span></span></code></pre></div></div><h2 id="安装报错-chrony-error" tabindex="-1">安装报错: chrony error <a class="header-anchor" href="#安装报错-chrony-error" aria-label="Permalink to &quot;安装报错: chrony error&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看是否存在/var/lib/dpkg/info</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果没有</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /var/lib/dpkg/info</span></span></code></pre></div><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ol><li><a href="https://liubing.me/v2ray-websocket-tl-nginx-cloudflare-bandwagonhost.html" target="_blank" rel="noreferrer">V2Ray+WebSocket(ws)+TLS+Nginx+Cloudflare拯救搬瓦工被封IP的VPS</a></li><li><a href="https://toutyrater.github.io/prep/install.html" target="_blank" rel="noreferrer">v2ray-文档</a></li><li><a href="https://github.com/233boy/v2ray/wiki" target="_blank" rel="noreferrer">V2Ray-Wiki</a></li><li><a href="https://www.atzlinux.com/doc/v/v2ray/" target="_blank" rel="noreferrer">ProjectV</a></li></ol><div style="display:none;" data-pagefind-meta="base64:JTdCJTIydGFncyUyMiUzQSU1QiUyMldhbGwlMjIlNUQlMkMlMjJkYXRlJTIyJTNBMTcxOTQxNzMzNDAwMCU3RA=="></div>`,32),h=[d];function k(g,u,y,b,v,m){return s(),e("div",null,h)}const C=a(c,[["render",k]]);export{f as __pageData,C as default};
