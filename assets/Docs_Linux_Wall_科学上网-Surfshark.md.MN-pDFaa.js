import{_ as s,c as a,o as e,av as n}from"./chunks/framework.B1bPfM8U.js";const i="/assets/opvn.BhqWfp8y.jpg",m=JSON.parse('{"title":"科学上网-Surfshark","description":"","frontmatter":{},"headers":[],"relativePath":"Docs/Linux/Wall/科学上网-Surfshark.md","filePath":"Docs/Linux/Wall/科学上网-Surfshark.md","lastUpdated":1718243983000}'),r={name:"Docs/Linux/Wall/科学上网-Surfshark.md"},l=n(`<h1 id="科学上网-surfshark" tabindex="-1">科学上网-Surfshark <a class="header-anchor" href="#科学上网-surfshark" aria-label="Permalink to &quot;科学上网-Surfshark&quot;">​</a></h1><div class="danger custom-block"><p class="custom-block-title">警告</p><p>后文都可忽略，截止 <code>20240522</code>，当前已选择退款处理（30天内可向官方申请退款）。实在是大陆封锁太严重了，<code>surfshark</code> 针对大陆的节点（日本，美国，英国，香港，台湾，泰国，韩国），只有泰国能连上，这几天还异常的慢，经常断连接，正常访问 <code>google</code> 和 <code>gmail</code> 都无法保证。后续还是自己购买 <code>vps</code> ，搭建自用的机场。</p></div><h2 id="背景" tabindex="-1">背景 <a class="header-anchor" href="#背景" aria-label="Permalink to &quot;背景&quot;">​</a></h2><p>因为目前自用的梯子, 搭在 <code>vultr</code> 的云服务上，有点小贵，加上 <code>ipv4</code> , 每个月固定 <code>3.5$</code> 支出。即将到期，不打算续费了，所以决定换个性价比高的 <code>vpn</code> ，降低心智负担和维护成本，目前使用的是 <code>Surfshark</code> 。</p><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p>我个人的使用场景还是比较全面的，基本上 <code>windows</code>, <code>linux</code>, <code>browser</code>, <code>iphone</code>, <code>android</code> 都有对应的端</p><h2 id="windows" tabindex="-1">windows <a class="header-anchor" href="#windows" aria-label="Permalink to &quot;windows&quot;">​</a></h2><p>官网下载安装即可，无额外心智负担，登录后，默认配置即可</p><h2 id="linux" tabindex="-1">linux <a class="header-anchor" href="#linux" aria-label="Permalink to &quot;linux&quot;">​</a></h2><h3 id="方法一-ubuntu-gui" tabindex="-1"><s>方法一: ubuntu-gui</s> <a class="header-anchor" href="#方法一-ubuntu-gui" aria-label="Permalink to &quot;~~方法一: ubuntu-gui~~&quot;">​</a></h3><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># get script</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://downloads.surfshark.com/linux/debian-install.sh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --output</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> surfshark-install.sh</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># install</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> surfshark-install.sh</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># sudo apt update</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">注意</p><p>截止 <code>20340508</code> ,会报错 <code>not found</code></p></div><h3 id="方法二-snap-gui" tabindex="-1"><s>方法二: snap-gui</s> <a class="header-anchor" href="#方法二-snap-gui" aria-label="Permalink to &quot;~~方法二: snap-gui~~&quot;">​</a></h3><p><code>snap</code> 显示 当前 <code>LAST UPDATED : 17 April 2024 - latest/beta</code> 但是截止 <code>20340508</code> ,安装时会报错 <code>not found</code></p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> snap</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> surfshark</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --beta</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">snap安装速度慢</p><p>可以安装 <code>snap</code> 代理和客户端来加速</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> snap</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> snap-store-proxy</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> snap</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> snap-store-proxy-client</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div><h2 id="browser" tabindex="-1">browser <a class="header-anchor" href="#browser" aria-label="Permalink to &quot;browser&quot;">​</a></h2><p>去到对应的浏览器应用商店下载对应的扩展,例如在 <code>chrome</code> 浏览器 <a href="https://chromewebstore.google.com/detail/surfshark-vpn-extension/ailoabdmgclmfmhdagmlohpjlbpffblp?hl=zh-CN&amp;utm_source=ext_sidebar" target="_blank" rel="noreferrer">Surfshark</a>，登录后默认配置即可，但是当前封锁严重，无法连接，还是客户端稳定</p><h2 id="iphone" tabindex="-1">iphone <a class="header-anchor" href="#iphone" aria-label="Permalink to &quot;iphone&quot;">​</a></h2><p>切换美区账号，下载 <code>Surfshark</code> 客户端，登录后默认配置即可</p><h2 id="android" tabindex="-1">android <a class="header-anchor" href="#android" aria-label="Permalink to &quot;android&quot;">​</a></h2><p>去 <code>google play</code> 下载 <a href="https://play.google.com/store/apps/details?id=com.surfshark.vpnclient.android&amp;referrer=utm_source%3Ddirect%26utm_medium%3Dnone" target="_blank" rel="noreferrer">Surfshark</a> 客户端，或者官网下载 <a href="https://downloads.surfshark.com/android/Surfshark.apk" target="_blank" rel="noreferrer">apk</a>, 登录后默认配置即可</p><h2 id="hosts" tabindex="-1">hosts <a class="header-anchor" href="#hosts" aria-label="Permalink to &quot;hosts&quot;">​</a></h2><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#ux.surfshark.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">104.18.120.34</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ux.surfshark.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">104.18.121.34</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ux.surfshark.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#ext.surfshark.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">104.18.120.34</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ext.surfshark.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">104.18.121.34</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ext.surfshark.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#stats.surfshark.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">104.18.120.34</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stats.surfshark.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">104.18.121.34</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stats.surfshark.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#go-front-s.surfshark.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">92.249.36.138</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> go-front-s.surfshark.com</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="其他方法" tabindex="-1">其他方法 <a class="header-anchor" href="#其他方法" aria-label="Permalink to &quot;其他方法&quot;">​</a></h2><h3 id="wireguard" tabindex="-1">WireGuard <a class="header-anchor" href="#wireguard" aria-label="Permalink to &quot;WireGuard&quot;">​</a></h3><p><a href="https://www.WireGuard.com/install/" target="_blank" rel="noreferrer">下载WireGuard</a></p><p>操作步骤是在 <code>Surfshark</code> 控制台生成密钥对，然后用密钥对选择需要的 <code>Surfshark</code> 服务器，下载 <code>conf</code> 配置，最后导入 <code>WireGuard</code> 使用</p><p><a href="https://support.surfshark.com/hc/en-us/articles/6586553044498-How-to-set-up-a-manual-WireGuard-connection-on-Windows" target="_blank" rel="noreferrer">如何在 Windows 上设置手动 WireGuard®连接</a><a href="https://my.shark-china.com/vpn/manual-setup/main/WireGuard?restricted=&amp;country=cn" target="_blank" rel="noreferrer">中国可用的WireGuard配置</a></p><h3 id="openvpn" tabindex="-1">OpenVPN <a class="header-anchor" href="#openvpn" aria-label="Permalink to &quot;OpenVPN&quot;">​</a></h3><p>添加一个 <code>openvpn</code> 配置一般包括 <code>ca</code> 证书, 用户证书 <code>crt</code> ,用户私钥 <code>key</code></p><p>也可以直接导入 <code>.ovpn</code> 文件,会自动识别对应的配置</p><p><img src="`+i+'" alt="ovpn配置" title="ovpn配置" loading="lazy"></p><p><a href="https://community.openvpn.net/openvpn/wiki/OpenVPN3Linux" target="_blank" rel="noreferrer">OpenVPN 3 Linux</a></p><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p><code>openvpn3</code> 地址 <code>403 forbidden</code> 了, 挂代理无法安装</p></div><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ol><li><a href="https://www.surfshark.com/" target="_blank" rel="noreferrer">Surfshark</a></li><li><a href="https://support.surfshark.com/hc/en-us/sections/4414400041362-Applications" target="_blank" rel="noreferrer">Surfshark Help</a></li><li><a href="https://snapcraft.io/surfshark" target="_blank" rel="noreferrer">Snap Surfshark</a></li><li><a href="https://www.cnblogs.com/linga/p/14270212.html" target="_blank" rel="noreferrer">解决Ubuntu中snap安装软件下载速度龟速问题</a></li></ol>',37),t=[l];function p(o,h,d,c,k,u){return e(),a("div",null,t)}const g=s(r,[["render",p]]);export{m as __pageData,g as default};
