const sidebar = require('../blog')
const BASE_URL = 'https://dragon-chen777.github.io'

const NOXONE_MUSIC_LIST = [ // todo
  'カナタハルカ',
  'なんでもないや',
  '打上花火',
  '愛にできることはまだあるかい',
  '宝贝（in the night）',
  '张三的歌',
  'Melody',
  '普通朋友',
  '飞机场的10：30',
  '爱，很简单',
  '对不起',
  '一路向北',
  'Drugs You Should Try It',
  'Mamacita',
].map(music => ({
  cover: `${BASE_URL}/assets/music/${music}.png`,
  title: music,
  link: `${BASE_URL}/assets/music/${music}.mp3`
}))



module.exports = {
  title: 'NOxONE',
  description: '欢迎来到NOxONE的小破站~',
  base: '/NOxONE/',
  head: [
    ['link', {
      rel: 'icon',
      href: `${BASE_URL}/assets/images/logo.png`
    }]
  ],
  theme: 'reco',
  themeConfig: {
    type: 'blog',
    logo: `${BASE_URL}/assets/images/NOxONE_LOGO.png`,
    authorAvatar: 'https://p3-passport.byteimg.com/img/user-avatar/039391726bfa394febe9e5853f06026a~180x180.awebp',
    nav: [
      {
        text: '博客',
        icon: 'reco-home',
        link: '/blog/website-create-diary'
      },
      {
        text: 'Demos',
        icon: 'reco-other',
        items: [{
            text: 'NOxONE音乐播放器',
            link: 'https://dragon-chen777.github.io/Music-player'
          },
          {
            text: '打方块游戏',
            link: 'https://dragon-chen777.github.io/Block-collision-game'
          },
          {
            text: '马保国打字游戏',
            link: 'https://dragon-chen777.github.io/Typer-game'
          },
          {
            text: '答案之书',
            link: 'https://dragon-chen777.github.io/Book-of-answers'
          },
          {
            text: '影院座位预订',
            link: 'https://dragon-chen777.github.io/Cinema-seat-reservation'
          },
          {
            text: '我的处女作',
            link: 'https://dragon-chen777.github.io/My-first-web-20200722'
          }
        ]
      },
      {
        text: '百宝箱',
        icon: 'reco-menu',
        items: [{
            text: '前端工具箱',
            link: 'https://www.runjs.cool'
          },
          {
            text: 'tinypng图片压缩',
            link: 'https://tinypng.com'
          },
          {
            text: '路过图床',
            link: 'https://imgse.com'
          },
          {
            text: '代码随想录',
            link: 'https://programmercarl.com'
          },
          {
            text: '打字背英文',
            link: 'https://qwerty.kaiyi.cool'
          }
        ]
      },
      {
        text: '社交账号',
        icon: 'reco-account',
        items: [{
            text: 'Github',
            link: 'https://github.com/Dragon-chen777'
          },
          {
            text: 'npm',
            link: 'https://www.npmjs.com/~noxone'
          },
          {
            text: '掘金',
            link: 'https://juejin.cn/user/3488066386291463'

          },
          {
            text: 'CSDN',
            link: 'https://blog.csdn.net/Xiaoyc7'
          },
          {
            text: 'Bilibili',
            link: 'https://space.bilibili.com/273377574'
          }
        ]
      },
    ],
    sidebar,
    subSidebar: 'auto',
    blogConfig: {
      category: {
        location: 5,
        text: '专栏'
      },
      tag: {
        location: 5, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认文案 “标签”
      },
      socialLinks: [ // 信息栏展示社交信息
        {
          icon: 'reco-github',
          link: 'https://github.com/Dragon-chen777'
        },
        {
          icon: 'reco-csdn',
          link: 'https://www.npmjs.com/~noxone'
        },
        {
          icon: 'reco-juejin',
          link: 'https://juejin.cn/user/3488066386291463'
        },
        {
          icon: 'reco-csdn',
          link: 'https://blog.csdn.net/Xiaoyc7'
        },
        {
          icon: 'reco-bilibili',
          link: 'https://space.bilibili.com/273377574'
        },
      ]
    }
  },
  plugins: {
    "@noxone/vuepress-plugin-cover": {},
    "@noxone/vuepress-plugin-music-player": {
      musicList: NOXONE_MUSIC_LIST,
      zIndex: 19
    },
    "vuepress-plugin-kan-ban-niang": {
      clean: false,
      modelStyle: {
        position: "fixed",
        right: "100px",
        bottom: "0px",
        opacity: "0.9",
        zIndex: 99999
      },
      messages: {
        home: '迷路了吗？让我带你回家吧~',
        theme: '哼，花心的男人~',
        close: '别离开我，好吗？'
      }
    }
  },
  locales: {
    '/': {
      lang: 'zn-CN'
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': '/'
      }
    }
  },
  extraWatchFiles: [
    '.vuepress/styles/index.styl', // 使用相对路径
  ]
}