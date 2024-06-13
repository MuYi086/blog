import{_ as s,c as n,o as a,av as i}from"./chunks/framework.B1bPfM8U.js";const o=JSON.parse('{"title":"自用host","description":"","frontmatter":{},"headers":[],"relativePath":"Docs/Windows/自用host.md","filePath":"Docs/Windows/自用host.md","lastUpdated":1718246337000}'),l={name:"Docs/Windows/自用host.md"},p=i(`<h1 id="自用host" tabindex="-1">自用host <a class="header-anchor" href="#自用host" aria-label="Permalink to &quot;自用host&quot;">​</a></h1><h2 id="软件" tabindex="-1">软件 <a class="header-anchor" href="#软件" aria-label="Permalink to &quot;软件&quot;">​</a></h2><p>使用开源的 <a href="https://github.com/oldj/SwitchHosts" target="_blank" rel="noreferrer">SwitchHosts</a> 管理 <code>hosts</code></p><h2 id="查找最快ip" tabindex="-1">查找最快ip <a class="header-anchor" href="#查找最快ip" aria-label="Permalink to &quot;查找最快ip&quot;">​</a></h2><p>可以使用 <a href="https://ping.chinaz.com/github.com" target="_blank" rel="noreferrer">站长之家的ping检测</a> , 选择其他,找到国外最快 <code>ip</code> .然后选择电信，联通，移动，找到国内能访问的最快 <code>ip</code>作为替补</p><h2 id="常用网站host" tabindex="-1">常用网站host <a class="header-anchor" href="#常用网站host" aria-label="Permalink to &quot;常用网站host&quot;">​</a></h2><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">127.0.0.1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	localhost</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#jetbrains.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">0.0.0.0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> account.jetbrains.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#xmind 8</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">127.0.0.1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  www.xmind.net</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#mega.nz</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">31.216.144.5</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  mega.nz</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># figma.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">13.35.147.48</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> figma.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">52.222.214.18</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> figma.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">52.84.251.53</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> figma.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># figma.com国内线路</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">13.225.103.65</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> figma.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">99.84.133.16</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> figma.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># github</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">20.248.137.48</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  github.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">140.82.121.4</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> github.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">140.82.121.3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> github.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">20.27.177.113</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> github.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># github国内线路</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">20.205.243.166</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> github.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># gist.github.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">20.248.137.48</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    gist.github.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">140.82.121.4</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   gist.github.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">140.82.121.3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    gist.github.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># gist.github.com国内线路</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">78.16.49.15</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gist.github.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">20.205.243.166</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gist.github.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># github.global.ssl.fastly.net</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">151.101.1.194</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  github.global.ssl.fastly.net</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">199.232.45.194</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    github.global.ssl.fastly.net</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># codeload.github.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">20.248.137.55</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> codeload.github.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">140.82.121.9</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  codeload.github.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">20.27.177.114</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  codeload.github.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># codeload.github.com国内线路</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">20.205.243.165</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> codeload.github.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># objects.githubusercontent.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">185.199.108.133</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> objects.githubusercontent.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">185.199.109.133</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> objects.githubusercontent.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">185.199.110.133</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> objects.githubusercontent.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">185.199.111.133</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> objects.githubusercontent.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#raw.githubusercontent.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">185.199.108.133</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> raw.githubusercontent.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">185.199.109.133</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> raw.githubusercontent.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">185.199.110.133</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> raw.githubusercontent.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">185.199.111.133</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> raw.githubusercontent.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># dustinbrett.com 网页操作系统</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">104.21.44.105</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dustinbrett.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">188.114.96.3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dustinbrett.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">172.67.198.186</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dustinbrett.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># dustinbrett.com国内线路</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">104.21.44.105</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dustinbrett.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># reddit.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">151.101.1.140</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reddit.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">146.75.113.140</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rediit.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">151.101.109.140</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reddit.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">146.75.49.140</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reddit.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#packages.openvpn.net</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">104.19.190.106</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> packages.openvpn.net</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">104.19.191.106</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> packages.openvpn.net</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br></div></div><h2 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h2><ol><li><code>switchhosts</code> 增加了场景未生效, <code>ping</code> 显示的 <code>ip</code> 还是原来的? 答: 可能是 <code>switchhosts</code> 未能写入成功, 可以先去 <code>etc</code>目录查看是否有<code>hosts</code> 文件,如果没有，需要手动创建一个，然后再启动 <code>switchhosts</code></li></ol>`,9),e=[p];function h(t,r,k,c,b,F){return a(),n("div",null,e)}const g=s(l,[["render",h]]);export{o as __pageData,g as default};
