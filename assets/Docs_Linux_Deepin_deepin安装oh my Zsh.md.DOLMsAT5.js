import{_ as s,c as a,o as i,av as n}from"./chunks/framework.B1bPfM8U.js";const b=JSON.parse('{"title":"deepin安装oh my Zsh","description":"","frontmatter":{},"headers":[],"relativePath":"Docs/Linux/Deepin/deepin安装oh my Zsh.md","filePath":"Docs/Linux/Deepin/deepin安装oh my Zsh.md","lastUpdated":1718243983000}'),e={name:"Docs/Linux/Deepin/deepin安装oh my Zsh.md"},l=n(`<h1 id="deepin安装oh-my-zsh" tabindex="-1">deepin安装oh my Zsh <a class="header-anchor" href="#deepin安装oh-my-zsh" aria-label="Permalink to &quot;deepin安装oh my Zsh&quot;">​</a></h1><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p>使用 <code>linux</code> 这些年，发行版本用了很多，但是一直用的默认的 <code>bash</code> ，最近浏览公众号和 <code>github</code> 被不同人安利了 <code>Zsh</code> ，据说很强大，于是准备尝试下。</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p><code>oh my Zsh</code> 基于 <code>Zsh</code> ，所以先安装 <code>Zsh</code></p><h3 id="linux" tabindex="-1">linux <a class="header-anchor" href="#linux" aria-label="Permalink to &quot;linux&quot;">​</a></h3><p><code>linux</code> 安装比较简单，直接安装即可</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zsh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看版本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">zsh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --version</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置为默认shell</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chsh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> $(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">which</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zsh)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 注销并重新登录以使用最新的默认shell</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 默认shell会提示没有.zshrc文件,不要管，后面安装oh my Zsh后会自动创建</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 关闭重新打开终端,提示消失</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装oh my Zsh</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -fsSL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果无法访问raw.githubusercontent.com，可以使用下面的方式安装</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -fsSL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://install.ohmyz.sh)&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h3 id="windows" tabindex="-1">windows <a class="header-anchor" href="#windows" aria-label="Permalink to &quot;windows&quot;">​</a></h3><p>推荐使用方法二</p><div class="info custom-block"><p class="custom-block-title">方法一</p><p><code>WSL</code> 安装 <code>Zsh</code>: <code>windows</code> 需要先去商店安装 <code>WSL</code> , 然后选择一个 <code>linux</code> 子系统，比如 <code>ubuntu</code>, 然后在选择 <code>ubuntu</code> 终端安装 <code>Zsh</code></p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zsh</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>windows</code> 子系统中无法和系统共享环境和目录，所以很多 <code>Zsh</code> 命令无法正常使用, 比如 <code>vsc .</code> 等，不是很方便</p></div><div class="info custom-block"><p class="custom-block-title">方法二</p><p>以 <code>Git Bash</code> 终端为基础，来安装 <code>Zsh</code>终端</p><ol><li><a href="/Docs/Git/Git安装和配置.html">下载安装 Git Bash</a></li><li><a href="https://packages.msys2.org/package/zsh?repo=msys&amp;variant=x86_64" target="_blank" rel="noreferrer">下载Zsh</a></li><li>将解压的文件和目录一起放入 <code>git bash</code> 的安装目录, 一般是在 <code>C:\\Program Files\\Git</code></li><li>将 <code>zsh</code> 设为默认 <code>bash</code></li></ol><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在~目录建立.bashrc文件</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">touch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .bashrc</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 编辑文件</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-t</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">then</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  exec</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zsh</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 重启git bash 终端</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 然后就和上面的linux步骤一样下载脚本安装 oh my Zsh</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></div><div class="warning custom-block"><p class="custom-block-title">注意</p><p>如果遇到网络问题无法正常安装，可以尝试将 <code>vpn</code> 配置为系统代理</p><p>或者 <a href="/Docs/Linux/Wall/科学上网-让终端走代理.html">科学上网-让终端走代理</a></p></div><h2 id="plugin" tabindex="-1">plugin <a class="header-anchor" href="#plugin" aria-label="Permalink to &quot;plugin&quot;">​</a></h2><p><code>oh my Zsh</code> 拥有强大的插件，可以安装一些常用的插件，比如 <code>zsh-autosuggestions</code> 插件，可以自动提示命令</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-UhoWW" id="tab-qhSu4PX" checked="checked"><label for="tab-qhSu4PX">.zshrc</label></div><div class="blocks"><div class="language-shell vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 常用插件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">plugins</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git-commit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> extract</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> colored-man-pages</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> codeclimate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mysql-macports</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nvm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pm2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> shell-proxy</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ubuntu</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vscode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div></div><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ol><li><a href="https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH" target="_blank" rel="noreferrer">oh my Zsh</a></li><li><a href="https://zhuanlan.zhihu.com/p/625583037" target="_blank" rel="noreferrer">Windows安装Zsh终端</a></li><li><a href="https://packages.msys2.org/package/zsh?repo=msys&amp;variant=x86_64" target="_blank" rel="noreferrer">Windows在git-bash安装zsh</a></li></ol>`,18),p=[l];function h(t,r,c,d,k,o){return i(),a("div",null,p)}const F=s(e,[["render",h]]);export{b as __pageData,F as default};
