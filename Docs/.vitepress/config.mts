import { defineConfig } from 'vitepress'

// 导入主题的配置
import { blogTheme } from './blog-theme'

// 如果使用 GitHub/Gitee Pages 等公共平台部署
// 通常需要修改 base 路径，通常为“/仓库名/”
// 如果项目名已经为 name.github.io 域名，则不需要修改！
// const base = process.env.GITHUB_ACTIONS === 'true'
//   ? '/vitepress-blog-sugar-template/'
//   : '/'

// Vitepress 默认配置
// 详见文档：https://vitepress.dev/reference/site-config
export default defineConfig({
  // 继承博客主题(@sugarat/theme)
  extends: blogTheme,
  // base,
  lang: 'zh-cn',
  title: 'MuYi086\'s blog',
  description: 'MuYi086\'s blog',
  lastUpdated: true,
  // 详见：https://vitepress.dev/zh/reference/site-config#head
  head: [
    ['meta', { name: 'msvalidate.01', content: '011728C0C573DFC396C941E8EF5D8387' }],
    // 配置网站的图标（显示在浏览器的 tab 上）
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    // https://animate.style/
    ['link',{ href: 'https://cdn.bootcdn.net/ajax/libs/animate.css/4.1.1/animate.min.css', rel: 'stylesheet' }],
    // https://ant-design.antgroup.com/index-cn
    ['link',{ href: 'https://cdn.bootcdn.net/ajax/libs/ant-design-vue/4.2.2/reset.css', rel: 'stylesheet' }],
    // https://clarity.microsoft.com
    ['script', {}, 
      `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src='https://www.clarity.ms/tag/'+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, 'clarity', 'script', 'mo15sqq8xd')`
      ],
      // https://analytics.google.com/
      [
        'script',
        { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-8NF14ZVCH5' }
      ],
      ['script', {}, 
        `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-8NF14ZVCH5');`
      ],
      // 百度统计: https://tongji.baidu.com/main/setting/10000636882/home/site/getjs?siteId=20724325
      ['script', {}, 
        `var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?ed558b679137e233a92a57c4dddef714";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();`
      ],
    ],
    themeConfig: {
    // 展示 2,3 级标题在目录中
    outline: {
      level: [2, 3],
      label: '目录'
    },
    // 默认文案修改
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '相关文章',
    lastUpdatedText: '上次更新于',

    // 设置logo
    // logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '关于作者', link: 'https://github.com/MuYi086' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/MuYi086' },
    ],
    // footer: {
    //   message: 'Released under the MIT License.',
    //   copyright: 'Copyright © 2019-present MuYi086'
    // },
    // search: {
    //   provider: 'local',
    //   options: {
    //     locales: {
    //       zh: {
    //         translations: {
    //           button: {
    //             buttonText: '搜索文档',
    //             buttonAriaLabel: '搜索文档'
    //           },
    //           modal: {
    //             noResultsText: '无法找到相关结果',
    //             resetButtonTitle: '清除查询条件',
    //             footer: {
    //               selectText: '选择',
    //               navigateText: '切换'
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }
    // }
  }
})
