const BLOG_BASE = '/blog'
const sidebar = { // 侧栏
  '/blog': [
    {
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
    },
    {
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
      ]
    }
  ]
}

module.exports = {
  title: 'NOxONE',
  description: '这是NOxONE的第一个博客',
  base: '/NOxONE/',
  theme: 'reco',
  themeConfig: {
    type: 'blog',
    authorAvatar: 'https://p3-passport.byteimg.com/img/user-avatar/039391726bfa394febe9e5853f06026a~180x180.awebp',
    nav: [
      {
        text: '博客',
        link: '/blog/'
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
    sidebar,
    subSidebar: 'auto',
    blogConfig: {
      category: {
        location: 4,
        text: '分类'
      },
      tag: {
        location: 5,     // 在导航栏菜单中所占的位置，默认3
        text: '标签'      // 默认文案 “标签”
      },
      socialLinks: [     // 信息栏展示社交信息
        {icon: 'reco-github', link: 'https://github.com/recoluan'},
        {icon: 'reco-npm', link: 'https://www.npmjs.com/~reco_luan'}
      ]
    }
  },
  plugins: [],
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
  }
}