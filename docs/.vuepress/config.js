const BASE_URL = 'https://dragon-chen777.github.io'

const BLOG_BASE = '/blog'
const JS_COLUMN = {
  title: 'JS',
  path: BLOG_BASE + '/js/一文搞懂执行上下文、VO、AO、Scope、[[scope]]、作用域链、闭包',
  collapsable: true,
  children: [
    {
      title: '一文搞懂执行上下文、VO、AO、Scope、[[scope]]、作用域链、闭包',
      path: BLOG_BASE + '/js/一文搞懂执行上下文、VO、AO、Scope、[[scope]]、作用域链、闭包'
    },
    {
      title: '伪代码理解EventLoop',
      path: BLOG_BASE + '/js/伪代码理解EventLoop'
    },
    {
      title: 'EventDispatch实现',
      path: BLOG_BASE + '/js/EventDispatch实现'
    },
    {
      title: 'JS内存管理与垃圾回收机制',
      path: BLOG_BASE + '/js/JS内存管理与垃圾回收机制'
    },
    {
      title: 'Array原生方法实现',
      path: BLOG_BASE + '/js/Array原生方法实现'
    },
    {
      title: 'call、apply、bind实现',
      path: BLOG_BASE + '/js/call、apply、bind实现'
    },
    {
      title: 'new理解和实现',
      path: BLOG_BASE + '/js/new理解和实现'
    },
    {
      title: 'Promise实现',
      path: BLOG_BASE + '/js/Promise实现'
    },
    {
      title: 'Reflect和Proxy结合实现响应式',
      path: BLOG_BASE + '/js/Reflect和Proxy结合实现响应式'
    },
    {
      title: '事件循环机制',
      path: BLOG_BASE + '/js/事件循环机制'
    },
    {
      title: '防抖和节流函数实现',
      path: BLOG_BASE + '/js/防抖和节流函数实现'
    },
    {
      title: 'JS类型判断',
      path: BLOG_BASE + '/js/JS类型判断'
    },
    {
      title: 'JS类型转换',
      path: BLOG_BASE + '/js/JS类型转换'
    },
    {
      title: 'JS模块化',
      path: BLOG_BASE + '/js/JS模块化'
    },
    {
      title: 'deepClone实现',
      path: BLOG_BASE + '/js/deepClone实现'
    },
    {
      title: 'Curry函数实现',
      path: BLOG_BASE + '/js/Curry函数实现'
    },
    {
      title: 'ES6中新增的class',
      path: BLOG_BASE + '/js/ES6中新增的class'
    },
    {
      title: 'instanceof机制和实现',
      path: BLOG_BASE + '/js/instanceof机制和实现'
    },
    {
      title: 'Iterator和Generator',
      path: BLOG_BASE + '/js/Iterator和Generator'
    },
  ]
}
const CSS_COLUMN = {
  title: 'CSS',
  path: BLOG_BASE + '/css/1. background、color、渐变',
  collapsable: true,
  children: [
    {
      title: '1. background、color、渐变',
      path: BLOG_BASE + '/css/1. background、color、渐变'
    },
    {
      title: '2. border-radius、阴影、文本效果、字体',
      path: BLOG_BASE + '/css/2. border-radius、阴影、文本效果、字体'
    },
    {
      title: '3. transform transition animation+@keyframes',
      path: BLOG_BASE + '/css/3. transform transition animation+@keyframes'
    },
    {
      title: '4. filter object-fit outline-offset',
      path: BLOG_BASE + '/css/4. filter object-fit outline-offset'
    },
    {
      title: '5. @media css变量',
      path: BLOG_BASE + '/css/5. @media css变量'
    },
    {
      title: '6. Flex布局',
      path: BLOG_BASE + '/css/6. Flex布局'
    },
    {
      title: 'css实用属性（持续更新）',
      path: BLOG_BASE + '/css/css实用属性（持续更新）'
    },
  ]
}
const ES6_COLUMN = {
  title: 'ES6',
  path: BLOG_BASE + '/es6/1.let和const',
  collapsable: true,
  children: [
    {
      title: '1.let和const',
      path: BLOG_BASE + '/es6/1.let和const'
    },
    {
      title: '2.解构赋值',
      path: BLOG_BASE + '/es6/2.解构赋值'
    },
    {
      title: '3.String扩展',
      path: BLOG_BASE + '/es6/3.String扩展'
    },
    {
      title: '4.Function扩展',
      path: BLOG_BASE + '/es6/4.Function扩展'
    },
    {
      title: '5.Array扩展',
      path: BLOG_BASE + '/es6/5.Array扩展'
    },
    {
      title: '6.Object扩展',
      path: BLOG_BASE + '/es6/6.Object扩展'
    },
    {
      title: '7.新增Symbol',
      path: BLOG_BASE + '/es6/7.新增Symbol'
    },
    {
      title: '8.新增Set',
      path: BLOG_BASE + '/es6/8.新增Set'
    },
    {
      title: '9.新增Map',
      path: BLOG_BASE + '/es6/9.新增Map'
    },
    {
      title: '10.Async异步函数',
      path: BLOG_BASE + '/es6/10.Async异步函数'
    },
    {
      title: '11.新增class',
      path: BLOG_BASE + '/es6/11.新增class'
    }
  ]
}
const VUE_COLUMN = {
  title: 'VUE',
  path: BLOG_BASE + '/vue/Reactivity响应式实现',
  collapsable: true,
  children: [
    {
      title: 'Reactivity响应式实现',
      path: BLOG_BASE + '/vue/Reactivity响应式实现'
    },
    {
      title: 'Virtual DOM和Diff原理及实现',
      path: BLOG_BASE + '/vue/Virtual DOM和Diff原理及实现'
    },
    {
      title: 'Render函数简单实现',
      path: BLOG_BASE + '/vue/Render函数简单实现'
    },
    {
      title: 'Vue.nextTick用法和实现',
      path: BLOG_BASE + '/vue/Vue.nextTick用法和实现'
    },
    {
      title: 'Vue.set用法和实现',
      path: BLOG_BASE + '/vue/Vue.set用法和实现'
    },
    {
      title: 'Vue.use原理和实现',
      path: BLOG_BASE + '/vue/Vue.use原理和实现'
    },
  ]
}
const THREEJS_COLUMN = {
  title: 'THREE.JS',
  path: BLOG_BASE + '/threejs/Three.js 梦开始的地方：Scene、Camera、Render、Mesh',
  collapsable: true,
  children: [
    {
      title: 'Three.js 梦开始的地方：Scene、Camera、Render、Mesh',
      path: BLOG_BASE + '/threejs/Three.js 梦开始的地方：Scene、Camera、Render、Mesh'
    },
    {
      title: 'Three.js Object3D的移动、旋转、缩放及矩阵转化',
      path: BLOG_BASE + '/threejs/Three.js Object3D的移动、旋转、缩放及矩阵转化'
    },
    {
      title: 'Three.js Animation动画系统概念及应用',
      path: BLOG_BASE + '/threejs/Three.js Animation动画系统概念及应用'
    },
  ]
}
const BROWSER_COLUMN = {
  title: '浏览器',
  path: BLOG_BASE + '/browser/浏览器渲染原理',
  collapsable: true,
  children: [
    {
      title: '浏览器渲染原理',
      path: BLOG_BASE + '/browser/浏览器渲染原理'
    },
    {
      title: '浏览器架构',
      path: BLOG_BASE + '/browser/浏览器架构'
    },
    {
      title: '渲染进程里的多个线程',
      path: BLOG_BASE + '/browser/渲染进程里的多个线程'
    },
  ]
}
const ALGORITHM_COLUMN = {
  title: '数据结构与算法',
  path: BLOG_BASE + '/algorithm/数据结构在JS中的实现',
  collapsable: true,
  children: [
    {
      title: '数据结构在JS中的实现',
      path: BLOG_BASE + '/algorithm/数据结构在JS中的实现'
    },
  ]
}
const FRONT_END_ENGINEERING_COLUMN = {
  title: '前端工程化',
  path: BLOG_BASE + '/front-end-engineering/webpack搭建',
  collapsable: true,
  children: [
    {
      title: 'webpack搭建',
      path: BLOG_BASE + '/front-end-engineering/webpack搭建'
    },
    {
      title: '移动端适配方案',
      path: BLOG_BASE + '/front-end-engineering/移动端适配方案'
    },
  ]
}
const WEBSITE_CREATE_DIARY = {
  title: '建站日记',
  path: BLOG_BASE + '/website-create-diary',
}
const DONE_LIST = {
  title: 'Todo',
  path: BLOG_BASE + '/todo-list'
}
const NOXONE_MUSIC_LIST = [
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

const sidebar = { // 侧栏
  '/blog': [
    WEBSITE_CREATE_DIARY,
    JS_COLUMN,
    CSS_COLUMN,
    ES6_COLUMN,
    VUE_COLUMN,
    THREEJS_COLUMN,
    BROWSER_COLUMN,
    ALGORITHM_COLUMN,
    FRONT_END_ENGINEERING_COLUMN,
    DONE_LIST
  ]
}

module.exports = {
  title: 'NOxONE',
  description: '流水落花春去也，天上人间',
  base: '/NOxONE/',
  head: [
    ['link', { rel: 'icon', href: `${BASE_URL}/assets/images/logo.png` }]
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
        text: 'Demo',
        icon: 'reco-other',
        items: [
          {
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
        items: [
          {
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
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },

    ],
    sidebar,
    subSidebar: 'auto',
    blogConfig: {
      category: {
        location: 5,
        text: '专栏'
      },
      tag: {
        location: 5,     // 在导航栏菜单中所占的位置，默认3
        text: '标签'      // 默认文案 “标签”
      },
      socialLinks: [     // 信息栏展示社交信息
        { icon: 'reco-github', link: 'https://github.com/Dragon-chen777' },
        { icon: 'reco-juejin', link: 'https://juejin.cn/user/3488066386291463' },
        { icon: 'reco-csdn', link: 'https://blog.csdn.net/Xiaoyc7' },
        { icon: 'reco-bilibili', link: 'https://space.bilibili.com/273377574' },
      ]
    }
  },
  plugins: [
    [
      "vuepress-plugin-kan-ban-niang",
      {
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
    ],
    [
      "@noxone/vuepress-plugin-music-player",
      {
        musicList: NOXONE_MUSIC_LIST,
        zIndex: 19
      }
    ],
    [
      "vuepress-plugin-cover",
      {

      }
    ]
  ],
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
}
