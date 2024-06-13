import{_ as e,c as a,o as t,av as o}from"./chunks/framework.B1bPfM8U.js";const c="/assets/ChatGPT-Next-Web_step4.BMyKzyUy.png",r="/assets/ChatGPT-Next-Web_step1.BPzQyU6_.png",l="/assets/ChatGPT-Next-Web_step3.B-nhcKpB.png",i="/assets/ChatGPT-Next-Web_step2.B68m7SHi.png",T=JSON.parse('{"title":"一键搭建ChatGPT web版","description":"","frontmatter":{},"headers":[],"relativePath":"Docs/Linux/Shell/一键搭建ChatGPT web版.md","filePath":"Docs/Linux/Shell/一键搭建ChatGPT web版.md","lastUpdated":1718243983000}'),s={name:"Docs/Linux/Shell/一键搭建ChatGPT web版.md"},d=o('<h1 id="一键搭建chatgpt-web版" tabindex="-1">一键搭建ChatGPT web版 <a class="header-anchor" href="#一键搭建chatgpt-web版" aria-label="Permalink to &quot;一键搭建ChatGPT web版&quot;">​</a></h1><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p>成功 <a href="/Docs/Linux/Shell/使用V2ray,CloudFlare Warp解锁GPT.html">解锁ChatGPT</a> 后，虽然官网的 <code>3.5</code> 是免费，但是使用上也不是很方便，需要科学上网才能使用访问 <code>chat</code> 页面。于是想到有没有可以国内访问的 <code>web</code> 版本，还真有， <code>github</code> 上已经开源了 <code>ChatGPT-Next-Web</code> ，使用 <code>openai</code> 的付费 <code>api key</code> 即可。 <img src="'+c+'" alt="ChatGPT-Next-Web" title="ChatGPT-Next-Web" loading="lazy"></p><h2 id="创建api-keys" tabindex="-1">创建API keys <a class="header-anchor" href="#创建api-keys" aria-label="Permalink to &quot;创建API keys&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">步骤</p><ol><li><p>登录 <code>openai</code> 并访问 <code>api keys</code> 页面: <a href="https://platform.openai.com/account/api-keys" target="_blank" rel="noreferrer">https://platform.openai.com/account/api-keys</a></p></li><li><p>右上角 <code>Personal</code> =&gt; <code>View API keys</code> =&gt; <code>Create new secret key</code></p></li></ol></div><h2 id="部署-chatgpt-next-web" tabindex="-1">部署 ChatGPT-Next-Web <a class="header-anchor" href="#部署-chatgpt-next-web" aria-label="Permalink to &quot;部署 ChatGPT-Next-Web&quot;">​</a></h2><p>访问 <a href="https://github.com/Yidadaa/ChatGPT-Next-Web" target="_blank" rel="noreferrer">ChatGPT-Next-Web</a>, 参考中文版本开始部署,可以直接使用 <code>github</code> 账号登录，还是很方便的。 创建过程中填入 <code>openai key</code> 和 访问密码 <code>code</code> (有密码才能访问聊天，防止别人盗用你的额度), 点击 <code>Deploy</code> 后等待安装大概2分钟左右. 部署成功后， 点 <code>continue to dashboard</code>, 可以看到一个默认域名，但是只能通过梯子访问，不符合我们的预期，所以我们去 <code>Settings =&gt; Domains =&gt; Add</code> 给他添加一个可以国内访问的域名</p><p><img src="'+r+'" alt="添加新域名" title="添加新域名" loading="lazy"></p><h2 id="解析域名" tabindex="-1">解析域名 <a class="header-anchor" href="#解析域名" aria-label="Permalink to &quot;解析域名&quot;">​</a></h2><p>我们将刚才在 <code>vercel</code> 网站 添加的域名解析到 <code>cname.vercel-dns.com</code> 并启用代理,保存。 <img src="'+l+'" alt="解析域名" title="解析域名" loading="lazy"><img src="'+i+'" alt="解析域名" title="解析域名" loading="lazy"></p><p>等待几分钟，生效后就可以使用浏览器访问你刚才设置的域名，畅快的使用 <code>chatgpt</code> 了。</p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ol><li><a href="https://github.com/Yidadaa/ChatGPT-Next-Web" target="_blank" rel="noreferrer">ChatGPT-Next-Web</a></li><li><a href="https://juejin.cn/post/7224121578124050490" target="_blank" rel="noreferrer">一键搭建web版chatGPT，无需魔法，国内可用</a></li><li><a href="https://laowangblog.com/chatgpt-next-web-set-up-tutorial.html" target="_blank" rel="noreferrer">ChatGPT Next Web 部署教程：一键搭建一个国内可以访问的 ChatGPT</a></li></ol>',13),h=[d];function n(p,b,_,P,m,g){return t(),a("div",null,h)}const x=e(s,[["render",n]]);export{T as __pageData,x as default};
