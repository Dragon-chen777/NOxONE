
module.exports = {
  title: 'NOxONE',
  description: '这是NOxONE的第一个博客',
  base: '/NOxONE/',
  theme: 'reco',
  themeConfig: {
    nav: [
      {
        text: '博客',
        link: '/blog'
      },
      {
        text: '社交账号',
        items: [{
          text: '掘金',
          link: 'https://juejin.cn/user/3488066386291463'
        },
          {
            text: 'Github',
            link: 'https://github.com/Dragon-chen777'
          },
          {
            text: 'Bilibili',
            link: 'https://space.bilibili.com/273377574'
          }
        ]
      },
    ],
    sidebar: [
      // {
      //   title: '欢迎学习',
      //   path: '/',
      //   collapsable: true,
      //   children: [
      //     {
      //       title: '学前必读',
      //       path: '/'
      //     }
      //   ]
      // },
      {
        title: '基础学习',
        path: '/handbook/article1',
        collapsable: true,
        children: [
          {
            title: '文章1',
            path: '/handbook/article1'
          },
          {
            title: '文章2',
            path: '/handbook/article2'
          },
        ]
      },

    ],
    subSidebar: 'auto'
  },
  plugins: [
    // [
    //   '@vuepress-reco/vuepress-plugin-kan-ban-niang',
    //   {
    //     theme: ['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16'],
    //     clean: true,
    //     modelStyle: {
    //       position: "fixed",
    //       left: "0px",
    //       bottom: "0px",
    //       opacity: "0.9",
    //       zIndex: 99999
    //     }
    //   }
    // ],
    [

    ]
  ],
  locales: {
    '/': {
      lang: 'zn-CN'
    }
  }
}
