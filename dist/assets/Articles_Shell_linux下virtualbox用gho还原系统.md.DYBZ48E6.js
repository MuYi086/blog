import{_ as s,o as a,c as i,a7 as e}from"./chunks/framework.CgLK9O2D.js";const l="/assets/laomaotao_01.CHVYkVdV.png",n="/assets/laomaotao_02.D1Sn9UGp.png",b=JSON.parse('{"title":"linux下virtualbox用gho还原系统","description":"","frontmatter":{"tags":["Shell"]},"headers":[],"relativePath":"Articles/Shell/linux下virtualbox用gho还原系统.md","filePath":"Articles/Shell/linux下virtualbox用gho还原系统.md","lastUpdated":1719417334000}'),t={name:"Articles/Shell/linux下virtualbox用gho还原系统.md"},h=e('<h1 id="linux下virtualbox用gho还原系统" tabindex="-1">linux下virtualbox用gho还原系统 <a class="header-anchor" href="#linux下virtualbox用gho还原系统" aria-label="Permalink to &quot;linux下virtualbox用gho还原系统&quot;">​</a></h1><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p><code>windows</code> 下用 <code>virtualbox</code> 安装 <code>iso</code> 和 <code>u盘</code> 启动的博文已经很多了，这里不赘述。本文主要讲述比较生僻的在 <code>linux</code> 上利用 <code>gho</code> 装系统。其实开源的 <code>virtualbox</code> 已经足够满足我需求了。至于为啥不用 <code>VM</code> ，只有一个字形容：穷。</p><h2 id="过程" tabindex="-1">过程 <a class="header-anchor" href="#过程" aria-label="Permalink to &quot;过程&quot;">​</a></h2><p>首先，理清逻辑。我们无法直接在 <code>virtualbox</code> 中安装 <code>gho</code> 文件。所以这里我们借用 <code>pe</code></p><ol><li><p>使用 <code>virtualbox</code> 创建一个新的虚拟电脑(建议使用 <code>vmdk</code> 格式,方便以后迁移)</p></li><li><p>挂载一个 <code>pe</code> 的 <code>iso</code> 镜像.</p><ul><li><p>选择第二栏 iso 模式并导出(我就不截图了,下图来自老毛桃官网) <img src="'+l+`" alt="iso模式" title="iso模式"></p></li><li><p>最好将iso镜像用户根目录.我这里放到/home/MuYi086下</p></li></ul></li><li><p>在 <code>virtualbox</code> 中添加当前用户组</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># MuYi086是我当前用户名</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> usermod</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -G</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vboxusers</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> MuYi086</span></span></code></pre></div></li><li><p>挂载 <code>gho</code> 文件所在磁盘</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看gho所在磁盘:这里我的磁盘在/dev/sdb1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">df</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 让当前用户获得磁盘读写权限</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> chmod</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> o+rw</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /dev/sdb1</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 为磁盘建立一个虚拟硬盘镜像</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -filename 是要输出的位置</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -rawdisk 是磁盘路径</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 以下是6.1及之前创建方式</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VBoxManage</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> internalcommands</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> createrawvmdk</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -filename</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /home/MuYi086/vboxee.vmdk</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -rawdisk</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /dev/sdb1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 以下是7.0版本创建方式,依旧报错,内外网均为找到答案</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VBoxManage</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> createmedium</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> disk</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --filename=/home/MuYi086/demo1.vmdk</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --sizebyte=2000398934016</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --diffparent=/dev/sdb1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --format=VMDK</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --variant=Standard</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 方法一：7.0改用扩展包支持usb</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 下载Oracle VM VirtualBox Extension Pack</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># sudo groupadd usbfs</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># sudo adduser MuYi086 usbfs</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># sudo adduser MuYi086 vboxusers</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># reboot</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 右下角U盘挂载对应盘符</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 方法二：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 光盘 =&gt; 选择或创建虚拟盘 =&gt; 创建 =&gt; 选择文件夹 =&gt; 右键注册 =&gt; 创建 =&gt; CD光驱</span></span></code></pre></div></li><li><p>在 <code>virtualbox</code> 存储中添加磁盘 <img src="`+n+'" alt="添加磁盘" title="添加磁盘"></p></li><li><p>启动中 <code>Win + F12</code> 选择 <code>CD</code> ，也就是老毛桃启动,进入PE之后就和 <code>windows</code> 一样，给系统分区，然后选择 <code>gho</code> 安装了.</p></li></ol><h2 id="最后" tabindex="-1">最后 <a class="header-anchor" href="#最后" aria-label="Permalink to &quot;最后&quot;">​</a></h2><p>进入系统后，最好安装一下 <a href="http://download.virtualbox.org/virtualbox/" target="_blank" rel="noreferrer">增强驱动</a> ，效果会好很多</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 顶部菜单 =&gt; 设备 =&gt; 安装增强驱动</span></span></code></pre></div><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ol><li><a href="https://www.laomaotao.net/" target="_blank" rel="noreferrer">老毛桃</a></li><li><a href="https://blog.csdn.net/SimileciWH/article/details/86750966" target="_blank" rel="noreferrer">Ubuntu与Windows下使得Virtualbox从U盘启动系统</a></li><li><a href="https://docs.oracle.com/en/virtualization/virtualbox/6.0/user/vboxmanage-createmedium.html" target="_blank" rel="noreferrer">VBoxManage createmedium</a></li><li><a href="https://www.oracle.com/virtualization/technologies/vm/downloads/virtualbox-downloads.html" target="_blank" rel="noreferrer">Oracle VM VirtualBox Extension Pack</a></li></ol><div style="display:none;" data-pagefind-meta="base64:JTdCJTIydGFncyUyMiUzQSU1QiUyMlNoZWxsJTIyJTVEJTJDJTIyZGF0ZSUyMiUzQTE3MTk0MTczMzQwMDAlN0Q="></div>',12),o=[h];function p(d,r,k,c,g,u){return a(),i("div",null,o)}const y=s(t,[["render",p]]);export{b as __pageData,y as default};
