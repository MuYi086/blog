import{_ as s,c as a,o as n,av as i}from"./chunks/framework.B1bPfM8U.js";const m=JSON.parse('{"title":"pm2常用命令","description":"","frontmatter":{},"headers":[],"relativePath":"Docs/Linux/Shell/pm2常用命令.md","filePath":"Docs/Linux/Shell/pm2常用命令.md","lastUpdated":1718243983000}'),l={name:"Docs/Linux/Shell/pm2常用命令.md"},p=i(`<h1 id="pm2常用命令" tabindex="-1">pm2常用命令 <a class="header-anchor" href="#pm2常用命令" aria-label="Permalink to &quot;pm2常用命令&quot;">​</a></h1><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p><code>pm2</code> 是 <code>node</code> 进程管理工具,可以使用它简化很多 <code>node</code> 应用管理的繁琐任务，如性能监控，自动重启，负载均衡等。</p><h2 id="常用命令" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令" aria-label="Permalink to &quot;常用命令&quot;">​</a></h2><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 启动一个进程并把它命名为 uni</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pm2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> app.js</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uni</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 列出所有进程信息</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pm2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list/ls</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 显示所有进程日志</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pm2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> logs</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 停止所有进程</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pm2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stop</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> all</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 重启所有进程</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pm2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> all</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 0秒停机重载进程 (用于 NETWORKED 进程)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pm2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reload</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> all</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 停止指定的进程</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pm2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stop</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 重启指定的进程</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pm2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 产生 init 脚本 保持进程活着</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pm2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> startup</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 杀死指定的进程</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pm2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> delete</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 杀死全部进程</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pm2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> delete</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> all</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看进程的资源消耗情况</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pm2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> monit</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -i 表示 number-instances 实例数量 max 表示 PM2将自动检测可用CPU的数量 可以自己指定数量</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pm2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> app.js</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> max</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在文件改变的时候会重新启动程序</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pm2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> app.js</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uni</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --watch</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置pm2开机自启</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pm2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> startup</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> centos</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 保存设置</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pm2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> save</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ol><li><a href="https://pm2.keymetrics.io/docs/usage/quick-start/" target="_blank" rel="noreferrer">PM2 Process Management Quick Start</a></li></ol>`,7),e=[p];function h(r,t,k,c,F,d){return n(),a("div",null,e)}const u=s(l,[["render",h]]);export{m as __pageData,u as default};
