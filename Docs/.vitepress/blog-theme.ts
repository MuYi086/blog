// 主题独有配置
import { getThemeConfig } from '@sugarat/theme/node'

// 所有配置项，详见文档: https://theme.sugarat.top/
const blogTheme = getThemeConfig({
  author: 'MuYi086',
  // 开启RSS支持
  // RSS,

  // 搜索
  // 默认开启pagefind离线的全文搜索支持（如使用其它的可以设置为false）
  // search: false,

  // markdown 图表支持（会增加一定的构建耗时）
  // mermaid: true
  home: {
    name: "MuYi086's Blog",
    motto: '记录工作和生活的点滴',
    logo: '/Images/home/logo.png'
  },
  // 页脚
  footer: {
    version: false,
    // message 字段支持配置为HTML内容，配置多条可以配置为数组
    // message: '下面 的内容和图标都是可以修改的噢（当然本条内容也是可以隐藏的）',
    message: 'Released under the MIT License.',
    copyright: 'Copyright © 2019-present MuYi086'
    // icpRecord: {
    //   name: '浙ICP备xxx号',
    //   link: 'https://beian.miit.gov.cn/'
    // },
    // securityRecord: {
    //   name: '公网安备xxxxx',
    //   link: 'https://www.beian.gov.cn/portal/index.do'
    // },
  },

  // 主题色修改
  themeColor: 'el-blue',
  // 友链
  friend: [
    {
      nickname: 'Vitepress',
      des: 'Vite & Vue Powered Static Site Generator',
      avatar:
        'https://vitepress.dev/vitepress-logo-large.webp',
      url: 'https://vitepress.dev/',
    },
  ],

  // 公告
  // popover: {
  //   title: '公告',
  //   body: [
  //     { type: 'text', content: '👇公众号👇---👇 微信 👇' },
  //     {
  //       type: 'image',
  //       src: 'https://xxx.img'
  //     },
  //     {
  //       type: 'text',
  //       content: '欢迎大家加群&私信交流'
  //     },
  //     {
  //       type: 'button',
  //       content: '作者博客',
  //       link: 'https://github.com/MuYi086/blog'
  //     },
  //     {
  //       type: 'button',
  //       content: '加群交流',
  //       props: {
  //         type: 'success'
  //       },
  //       link: 'https://xxx',
  //     }
  //   ],
  //   duration: 0
  // },
  // giscus配置: https://giscus.app/zh-CN
  // 软件推荐: https://vitepress.yiov.top/plugin.html
  comment: {
    type: 'giscus',
    options: {
      repo: 'MuYi086/blog',
      repoId: 'MDEwOlJlcG9zaXRvcnkxNzE3NzI2NTU=',
      category: 'Announcements',
      categoryId: 'DIC_kwDOCj0K784CgZR2',
      inputPosition: 'top'
    },
    mobileMinify: true
  },
  // 看板娘配置
  oml2d: {
    mobileDisplay: true,
    models: [
      {
        path: 'https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/Live2D/Senko_Normals/senko.model3.json'
      }
    ]
  }
})

export { blogTheme }
