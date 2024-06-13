import{_ as s,c as a,o as i,av as n}from"./chunks/framework.B1bPfM8U.js";const o=JSON.parse('{"title":"神器vimium使用说明","description":"","frontmatter":{},"headers":[],"relativePath":"Docs/Windows/神器vimium使用说明.md","filePath":"Docs/Windows/神器vimium使用说明.md","lastUpdated":1718243983000}'),l={name:"Docs/Windows/神器vimium使用说明.md"},e=n(`<h1 id="神器vimium使用说明" tabindex="-1">神器vimium使用说明 <a class="header-anchor" href="#神器vimium使用说明" aria-label="Permalink to &quot;神器vimium使用说明&quot;">​</a></h1><h2 id="设置搜索引擎" tabindex="-1">设置搜索引擎 <a class="header-anchor" href="#设置搜索引擎" aria-label="Permalink to &quot;设置搜索引擎&quot;">​</a></h2><ol><li><p>打开 <code>vimium</code> 设置界面</p></li><li><p>修改 <code>Custom search engines</code>配置</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">w:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://www.wikipedia.org/w/index.php?title=Special:Search</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&amp;search</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">%s</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Wikipedia</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># More examples.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># (Vimium supports search completion Wikipedia, as</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># above, and for these.)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">g:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://www.google.com/search?q=%s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Google</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">l:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://www.google.com/search?q=%s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&amp;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">btnI</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> I&#39;m feeling lucky...</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">y: https://www.youtube.com/results?search_query=%s Youtube</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">gm: https://www.google.com/maps?q=%s Google maps</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">b: https://www.bing.com/search?q=%s Bing</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">d: https://duckduckgo.com/?q=%s DuckDuckGo</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">az: https://www.amazon.com/s/?field-keywords=%s Amazon</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">qw: https://www.qwant.com/?q=%s Qwant</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></li><li><p>点击底部保存</p></li></ol><h2 id="操作网页" tabindex="-1">操作网页 <a class="header-anchor" href="#操作网页" aria-label="Permalink to &quot;操作网页&quot;">​</a></h2><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">j</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 向下滚动一点</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">k</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 向上滚动一点</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">d</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 向下滚动半页</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">u</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 向上滚动半页</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gg</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 滚动到页面顶部</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">G</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 滚动到页面底部</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">h</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 向左滚动</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">l</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 向右滚动</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">r</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 刷新页面</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yy</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 复制当前页的url到剪贴板</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">p</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 在当前标签页打开剪贴板中的url，如果不是url则默认搜索引擎搜索</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">P</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 在新标签页打开剪贴板中的url，如果不是url则默认搜索引起搜索</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">i</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 输入模式，有些网页有内置的快捷键,进入该模式即可使用网页内置的快捷键</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">v</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 可视化模式</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gi</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 定焦在页面第一个文本可输入的位置</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">f</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 打开元素定位器,是在当前标签页打开</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">F</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 打开元素定位器,是在新标签页打开</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gF</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 选择下一个frame(尤其在选择网页内置视频的时候很管用)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 显示命令的帮助菜单(再按一次关闭)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="操作标签" tabindex="-1">操作标签 <a class="header-anchor" href="#操作标签" aria-label="Permalink to &quot;操作标签&quot;">​</a></h2><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">t</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 新建标签页</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">J,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gT</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 切换到左标签页</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">K,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gt</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 切换到右标签页</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">^</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 切换到上一个历史标签页(可用于俩个标签页之间的切换)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">g0</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 切换到第一个标签</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">g$</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 切换到最后一个标签</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yt</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 复制当前标签页并打开</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">x</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 关闭当前标签页</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">X</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 恢复关闭的标签页</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># &lt;&lt; 将当前标签页向左移动</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># &gt;&gt; 将当前标签页向右移动</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="浏览历史" tabindex="-1">浏览历史 <a class="header-anchor" href="#浏览历史" aria-label="Permalink to &quot;浏览历史&quot;">​</a></h2><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">L</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 前进</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">H</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 后退</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="查找功能" tabindex="-1">查找功能 <a class="header-anchor" href="#查找功能" aria-label="Permalink to &quot;查找功能&quot;">​</a></h2><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 开启查找功能(右下角输入enter结束)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">n</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 查找下一个</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">N</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 查找上一个</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="使用搜索框" tabindex="-1">使用搜索框 <a class="header-anchor" href="#使用搜索框" aria-label="Permalink to &quot;使用搜索框&quot;">​</a></h2><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">o</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 从url，书签，历史记录中搜索地址,回车打开</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">O</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 从url，书签，历史记录中搜索地址,回车在新标签页打开</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">b</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 仅从书签搜索地址，回车打开</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">B</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 仅从书签搜索地址，回车新标签页中打开</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 搜索当前浏览器的所有标签</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h4><ol><li><a href="https://github.com/philc/vimium#keyboard-bindings" target="_blank" rel="noreferrer">vimium README</a></li><li><a href="https://zhuanlan.zhihu.com/p/38179086" target="_blank" rel="noreferrer">神器vimium：比同级程序员成长更快，我主要靠它</a></li><li><a href="https://www.jianshu.com/p/2af687487d2c" target="_blank" rel="noreferrer">Chrome神器Vimium使用方法</a></li></ol>`,15),p=[e];function h(t,r,k,d,c,b){return i(),a("div",null,p)}const u=s(l,[["render",h]]);export{o as __pageData,u as default};
