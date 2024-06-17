import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh',
  title: 'blog',
  description: 'MuYi086\'s blog',
  head: [
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
    ]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: '',
    logo: '',
    nav: [
      { text: '首页', link: '/' },
      { text: '前端', link: '/' },
      { text: '后端', link: '/' },
      { text: 'Linux', link: '/' },
      { text: 'Git', link: '/' },
      { text: '随笔', link: '/' }
    ],

    sidebar: [
      {
        text: 'Examples',
        collapsed: true,
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/MuYi086' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present MuYi086'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    }
  },
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
    image: {
      // 默认使用图片懒加载
      lazyLoading: true
    }
  }
})
