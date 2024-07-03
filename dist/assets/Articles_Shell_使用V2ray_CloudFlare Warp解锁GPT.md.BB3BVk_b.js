import{_ as s,o as a,c as i,a7 as n}from"./chunks/framework.CgLK9O2D.js";const l="/assets/vultr_step_1.Bs3iW6vA.png",p="/assets/xui_step1.JLAUEQoK.png",y=JSON.parse('{"title":"使用V2ray,CloudFlare Warp解锁GPT","description":"","frontmatter":{"tags":["Shell"]},"headers":[],"relativePath":"Articles/Shell/使用V2ray,CloudFlare Warp解锁GPT.md","filePath":"Articles/Shell/使用V2ray,CloudFlare Warp解锁GPT.md","lastUpdated":1719417334000}'),t={name:"Articles/Shell/使用V2ray,CloudFlare Warp解锁GPT.md"},h=n(`<h1 id="使用v2ray-cloudflare-warp解锁gpt" tabindex="-1">使用V2ray,CloudFlare Warp解锁GPT <a class="header-anchor" href="#使用v2ray-cloudflare-warp解锁gpt" aria-label="Permalink to &quot;使用V2ray,CloudFlare Warp解锁GPT&quot;">​</a></h1><h2 id="背景" tabindex="-1">背景 <a class="header-anchor" href="#背景" aria-label="Permalink to &quot;背景&quot;">​</a></h2><p>搭建 <code>GPT</code> 后其实有正常使用几个月的，但是后来已经突然无法访问 <code>chat</code> 页面，并且提示 <code>Access Denied</code> 问题。我本身使用的 <code>Vultr</code> 的 <code>vps</code> 搭建的 <code>v2ray</code> 服务，梯子也能正常使用， 但是就是 <code>chat</code> 页面无法访问, 估计是 <code>openai</code> 针对多数 <code>vpn</code> 的公网 <code>ip</code> 做了识别。于是开始 <code>google</code> 寻求解决方案。英文论坛上有人提出 <code>openai</code> 使用了 <code>cloudflare</code> 的服务来过滤 <code>ip</code> ，然后给出的解决方法就是 &quot;以子之矛, 攻子之盾&quot;，因为 <code>cloudflare</code> 自己旗下有一款代理软件叫 <code>warp</code> 联想到他不会自己封禁自己, 于是我们使用 <code>cloudflare warp</code> 代理来躲避封禁。</p><h2 id="安装-cloudflare-warp" tabindex="-1">安装 CloudFlare Warp <a class="header-anchor" href="#安装-cloudflare-warp" aria-label="Permalink to &quot;安装 CloudFlare Warp&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 一键安装脚本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -N</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://gitlab.com/rwkgyg/CFwarp/raw/main/CFwarp.sh</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> CFwarp.sh</span></span></code></pre></div><h2 id="cloudflare-warp-ipv4-地址稀少-改用ipv6" tabindex="-1">CloudFlare Warp IPV4 地址稀少, 改用IPV6 <a class="header-anchor" href="#cloudflare-warp-ipv4-地址稀少-改用ipv6" aria-label="Permalink to &quot;CloudFlare Warp IPV4 地址稀少, 改用IPV6&quot;">​</a></h2><p><code>IPV4</code> 地址都被封的差不多了，我先是使用 <code>IPV4</code> 按流程搭建了，但是无法正常使用服务，所以建议大家优先考虑 <code>IPV6</code>, <code>IPV4</code> 纯粹是碰运气。</p><p>由于我使用的是 <code>Vultr</code> 的服务，所以以下是 <code>Vultr</code> 开启 <code>IPV6</code> 的步骤，同学们可以对自己的 <code>VPS</code> 服务探索，大同小异。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Settings -&gt; IPV6 —&gt; Add</span></span></code></pre></div><p><img src="`+l+`" alt="添加IPV6" title="添加IPV6"></p><h2 id="启动脚本并安装" tabindex="-1">启动脚本并安装 <a class="header-anchor" href="#启动脚本并安装" aria-label="Permalink to &quot;启动脚本并安装&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 步骤1, 启动脚本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./CFwarp.sh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 步骤2，选择2</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 提示：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 一、选项1与2任意选，支持相互切换</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 二、进入脚本快捷方式：cf</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># =================================================================</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1. 选择 warp-go 内核安装WARP</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2. 选择 wgcf    内核安装WARP</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 0. 退出脚本</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># =================================================================</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 步骤3， 选择1 （Socks5-WARP 不支持 IPV6）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 任意选择适合自己的warp现实方案（选项1、2、3，可单选，可多选共存）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 进入脚本快捷方式：cf</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># =================================================================</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1. 方案一：安装/切换WGCF-WARP</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2. 方案二：安装Socks5-WARP</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 3. 方案三：显示Xray-WireGuard-WARP代理配置文件、二维码</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 4. 卸载WARP</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -----------------------------------------------------------------</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 5. 关闭、开启/重启WARP</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 6. WARP其他选项：查看WARP进程守护，刷WARP+流量……</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 7. WARP三类账户升级/切换(WARP/WARP+/WARP Teams)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 8. 更新CFwarp安装脚本</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 9. 将当前WGCF-WARP内核替换为WARP-GO内核</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 0. 退出脚本</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 步骤4，选择2， 不搭配分流规则</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 提示：VPS的本地出站IP将被你选择的warp的IP所接管，如VPS本地无该出站IP，则被另外生成warp的IP所接管</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果你什么都不懂，回车便是！！！</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1. 安装/切换wgcf-warp单栈IPV4（回车默认）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2. 安装/切换wgcf-warp单栈IPV6</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 3. 安装/切换wgcf-warp双栈IPV4+IPV6</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 步骤5, 设置完成，回看终端输出</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ------------------------------------------------------------------------------------</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 方案一：当前 IPV4 接管出站流量情况如下（WARP监测已开启）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># WARP状态：关闭中</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 服务商 Tencent Cloud Computing 获取IPV4地址：xxx.xxx.xxx.xxx  xxx</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 奈飞NF解锁情况：遗憾，当前IP仅可观看Netflix自制剧</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ChatGPT解锁情况：遗憾，当前IP无法访问ChatGPT官网服务</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ------------------------------------------------------------------------------------</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 方案一：当前 IPV6 接管出站流量情况如下（WARP监测已开启）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># WARP状态：运行中，WARP普通账户(无限WARP流量)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 服务商 Cloudflare 获取IPV6地址：xxxx:xxxx:xxxx:xxxx::xxxx:xxxx  xxx</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 奈飞NF解锁情况：遗憾，当前IP仅可观看Netflix自制剧</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ChatGPT解锁情况：恭喜，当前IP支持访问ChatGPT官网服务</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ------------------------------------------------------------------------------------</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 注意：别忘了将绑定的域名解析到cloudflare,并将代理状态设置为仅DNS</span></span></code></pre></div><h2 id="刷新-更换-cloudflare-warp-ip" tabindex="-1">刷新/更换 CloudFlare Warp IP <a class="header-anchor" href="#刷新-更换-cloudflare-warp-ip" aria-label="Permalink to &quot;刷新/更换 CloudFlare Warp IP&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用这个命令,每次重启都会刷新IP</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wg-quick@wgcf</span></span></code></pre></div><h2 id="配置v2ray" tabindex="-1">配置v2ray <a class="header-anchor" href="#配置v2ray" aria-label="Permalink to &quot;配置v2ray&quot;">​</a></h2><p><code>v2ray</code> 的配置文件一般位于 <code>/etc/v2ray/config</code>，这里我们修改 <code>outbounds</code> 和 <code>routing</code> 配置</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-P7wRL" id="tab-sSkwmQ3" checked><label for="tab-sSkwmQ3">v2ray.part.json</label><input type="radio" name="group-P7wRL" id="tab-ruz2cda"><label for="tab-ruz2cda">v2ray.json</label></div><div class="blocks"><div class="language-shell vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># outbounds 增加一栏</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   &quot;tag&quot;: &quot;IP6_out&quot;,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   &quot;protocol&quot;: &quot;freedom&quot;,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   &quot;settings&quot;: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#     &quot;domainStrategy&quot;: &quot;UseIPv6&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># routing 给每个rules 增加 type, domain 和 outboundTag</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># &quot;type&quot;: &quot;field&quot;,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># &quot;domain&quot;: [ &quot;openai.com&quot; ],</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># &quot;outboundTag&quot;: &quot;IP6_out&quot;</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;api&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;services&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;HandlerService&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;LoggerService&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;StatsService&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;tag&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;api&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;inbounds&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;listen&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;127.0.0.1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;port&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">xxxx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;protocol&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;dokodemo-door&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;settings&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;address&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;127.0.0.1&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;tag&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;api&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;outbounds&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;protocol&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;freedom&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;settings&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;tag&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;IP6_out&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;protocol&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;freedom&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;settings&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;domainStrategy&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;UseIPv6&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;protocol&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;blackhole&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;settings&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {},</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;tag&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;blocked&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;policy&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;system&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;statsInboundDownlink&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;statsInboundUplink&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;routing&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;rules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;inboundTag&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          &quot;api&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;field&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;domain&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          &quot;openai.com&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;outboundTag&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;IP6_out&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;ip&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          &quot;geoip:private&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;field&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;domain&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          &quot;openai.com&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;outboundTag&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;IP6_out&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;protocol&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          &quot;bittorrent&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;field&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;domain&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          &quot;openai.com&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;outboundTag&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;IP6_out&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;stats&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><p>由于笔者安装了 <code>xui</code>, 所以配置文件直接在网页上修改，然后重启面板生效</p><p><img src="`+p+'" alt="调整v2ray配置" title="调整v2ray配置"></p><h2 id="最后" tabindex="-1">最后 <a class="header-anchor" href="#最后" aria-label="Permalink to &quot;最后&quot;">​</a></h2><p>再次使用 <code>Google</code> 访问 <code>chat</code> 页面, 发现可以正常使用了</p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ol><li><a href="https://powerfulyang.com/post/136" target="_blank" rel="noreferrer">使用 V2Ray + CloudFlare Warp 解锁 ChatGPT</a></li><li><a href="https://iecho.cc/2023/03/27/apply-cloudflare-warp-for-v2ray-shadowsocks-outbound-connections/" target="_blank" rel="noreferrer">使用 Cloudflare WARP 作为 V2Ray/Shadowsocks 出站（落地）连接</a></li></ol><div style="display:none;" data-pagefind-meta="base64:JTdCJTIydGFncyUyMiUzQSU1QiUyMlNoZWxsJTIyJTVEJTJDJTIyZGF0ZSUyMiUzQTE3MTk0MTczMzQwMDAlN0Q="></div>',24),e=[h];function k(o,d,r,c,E,g){return a(),i("div",null,e)}const F=s(t,[["render",k]]);export{y as __pageData,F as default};
