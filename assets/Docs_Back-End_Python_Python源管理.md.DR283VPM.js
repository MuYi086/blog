import{_ as s,c as i,o as a,av as n}from"./chunks/framework.B1bPfM8U.js";const g=JSON.parse('{"title":"Python源管理","description":"","frontmatter":{},"headers":[],"relativePath":"Docs/Back-End/Python/Python源管理.md","filePath":"Docs/Back-End/Python/Python源管理.md","lastUpdated":1718243983000}'),p={name:"Docs/Back-End/Python/Python源管理.md"},l=n(`<h1 id="python源管理" tabindex="-1">Python源管理 <a class="header-anchor" href="#python源管理" aria-label="Permalink to &quot;Python源管理&quot;">​</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p><code>python</code> 默认的的源的速度真是惨不忍睹，谁用谁知道 于是收集了下面常用的速度比较稳定的源,以便于自用和更新</p><h2 id="源整理" tabindex="-1">源整理 <a class="header-anchor" href="#源整理" aria-label="Permalink to &quot;源整理&quot;">​</a></h2><p>以下地址加 <code>https</code> 也是可以的</p><table><thead><tr><th>源名称</th><th>地址</th></tr></thead><tbody><tr><td>阿里</td><td><a href="http://mirrors.aliyun.com/pypi/simple/" target="_blank" rel="noreferrer">http://mirrors.aliyun.com/pypi/simple/</a></td></tr><tr><td>清华</td><td><a href="http://pypi.tuna.tsinghua.edu.cn/simple/" target="_blank" rel="noreferrer">http://pypi.tuna.tsinghua.edu.cn/simple/</a></td></tr><tr><td>豆瓣</td><td><a href="http://pypi.douban.com/" target="_blank" rel="noreferrer">http://pypi.douban.com/</a></td></tr><tr><td>华中理工大学</td><td><a href="http://pypi.hustunique.com/" target="_blank" rel="noreferrer">http://pypi.hustunique.com/</a></td></tr><tr><td>山东理工大学</td><td><a href="http://pypi.sdutlinux.org/" target="_blank" rel="noreferrer">http://pypi.sdutlinux.org/</a></td></tr><tr><td>中国科学技术大学</td><td><a href="http://pypi.mirrors.ustc.edu.cn/" target="_blank" rel="noreferrer">http://pypi.mirrors.ustc.edu.cn/</a></td></tr></tbody></table><h2 id="常用命令" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令" aria-label="Permalink to &quot;常用命令&quot;">​</a></h2><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查找软件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> search</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Package</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装软件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Package</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用临时地址安装软件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Package</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 更新软件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -U</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Package</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 卸载软件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uninstall</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Package</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 列出已安装的软件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="下载安装pip" tabindex="-1">下载安装pip <a class="header-anchor" href="#下载安装pip" aria-label="Permalink to &quot;下载安装pip&quot;">​</a></h2><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 下载</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://bootstrap.pypa.io/get-pip.py</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> get-pip.py</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> get-pip.py</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="修改源" tabindex="-1">修改源 <a class="header-anchor" href="#修改源" aria-label="Permalink to &quot;修改源&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">linux</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 没有则新建pip.conf</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.pip</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.pip</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">touch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pip.conf</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 编辑</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gedit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pip.conf</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 填入下面配置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[global]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">index-url</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://mirrors.aliyun.com/pypi/simple/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">trusted-host</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mirrors.aliyun.com</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></div><div class="info custom-block"><p class="custom-block-title">windows</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用 \`pip -v config list\` 查看配置文件目录</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 类似如下结果</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">For</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> variant</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;global&#39;,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> will</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> try</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> loading</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;C:\\ProgramData\\pip\\pip.ini&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">For</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> variant</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;user&#39;,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> will</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> try</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> loading</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;C:\\Users\\Administrator\\pip\\pip.ini&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">For</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> variant</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;user&#39;,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> will</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> try</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> loading</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;C:\\Users\\Administrator\\AppData\\Roaming\\pip\\pip.ini&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">For</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> variant</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;site&#39;,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> will</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> try</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> loading</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;C:\\ProgramData\\anaconda3\\pip.ini&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 然后在Administrator下新建目路pip</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 新建文件pip.ini</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 编辑文件,填入,保存</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[global]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">index-url</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://mirrors.aliyun.com/pypi/simple/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">trusted-host</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mirrors.aliyun.com</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></div><h2 id="pip3错误修复" tabindex="-1">pip3错误修复 <a class="header-anchor" href="#pip3错误修复" aria-label="Permalink to &quot;pip3错误修复&quot;">​</a></h2><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 错误提示如下：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Traceback</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (most </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">recent</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> call</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> last</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  File</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;/usr/bin/pip3&quot;,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> line</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 9,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">modul</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ImportError:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cannot</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;main&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 进入/usr/bin/pip3，调整为</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> __main__</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> __name__</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;__main__&#39;:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    sys.exit(__main__._main(</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ol><li><a href="https://www.jianshu.com/p/c7dbe4820017" target="_blank" rel="noreferrer">python 国内镜像加速</a></li><li><a href="https://www.cnblogs.com/keithtt/p/9393036.html" target="_blank" rel="noreferrer">pip常用命令</a></li><li><a href="https://pip.pypa.io/en/stable/installing/" target="_blank" rel="noreferrer">pip　install</a></li></ol>`,17),e=[l];function t(h,r,k,d,F,c){return a(),i("div",null,e)}const b=s(p,[["render",t]]);export{g as __pageData,b as default};
