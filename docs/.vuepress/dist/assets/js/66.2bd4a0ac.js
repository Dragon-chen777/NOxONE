(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{487:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_2023-04-01-2023-04-02"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2023-04-01-2023-04-02"}},[t._v("#")]),t._v(" 2023.04.01 ~ 2023.04.02")]),t._v(" "),s("h2",{attrs:{id:"_1-搭建博客主框架"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-搭建博客主框架"}},[t._v("#")]),t._v(" 1. 搭建博客主框架")]),t._v(" "),s("p",[t._v("主要内容有：")]),t._v(" "),s("p",[s("strong",[t._v("导航栏")]),t._v("："),s("code",[t._v("LOGO设计")]),t._v("、"),s("code",[t._v("博客")]),t._v("、"),s("code",[t._v("Demo")]),t._v("、"),s("code",[t._v("百宝箱")]),t._v("、"),s("code",[t._v("社交账号")]),t._v("、"),s("code",[t._v("标签")]),t._v("、"),s("code",[t._v("专栏")]),t._v("、"),s("code",[t._v("TimeLine")])]),t._v(" "),s("p",[s("strong",[t._v("Hero展示区")]),t._v("："),s("code",[t._v("背景")]),t._v("、"),s("code",[t._v("头像")]),t._v("、"),s("code",[t._v("展示语（静态）")])]),t._v(" "),s("p",[s("strong",[t._v("个人信息框")]),t._v("："),s("code",[t._v("社交账号（github、掘金、CSDN、Bilibili）")]),t._v("、"),s("code",[t._v("专栏")]),t._v("、"),s("code",[t._v("标签")])]),t._v(" "),s("p",[s("strong",[t._v("博客列表")])]),t._v(" "),s("p",[s("strong",[t._v("引用vuepress-theme-reco主题")])]),t._v(" "),s("p",[s("strong",[t._v("博客页")]),t._v("："),s("code",[t._v("markdown多级标题、代码、代码块样式优化")]),t._v("，"),s("code",[t._v("搬运之前在掘金上写的文章")])]),t._v(" "),s("p",[t._v("嗯... 期间爬了很多很多坑，也飚了很多句国粹，来回翻查官方文档，各种技术博客，白天晚上通宵撸代码，一点一点搭建起来了")]),t._v(" "),s("p",[t._v("PS：若对前端不是真爱的话，那么我可能就直接Say Goodbye了")]),t._v(" "),s("h2",{attrs:{id:"_2-github-pages项目部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-github-pages项目部署"}},[t._v("#")]),t._v(" 2. GitHub Pages项目部署")]),t._v(" "),s("p",[t._v("也是爬了很多坑... 但最终还是将小破站成功部署了！！！于是顺便把之前写的Demo都一并部署了")]),t._v(" "),s("p",[t._v("暂时把版本定为"),s("code",[t._v("NOxONE v1.0.0")])]),t._v(" "),s("h1",{attrs:{id:"_2023-04-03"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2023-04-03"}},[t._v("#")]),t._v(" 2023.04.03")]),t._v(" "),s("h2",{attrs:{id:"_1-添加tab标签栏logo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-添加tab标签栏logo"}},[t._v("#")]),t._v(" 1. 添加tab标签栏Logo")]),t._v(" "),s("p",[t._v("也就是你看到的一个白色的小猫猫")]),t._v(" "),s("h2",{attrs:{id:"_2-引入vuepress-plugin-kan-ban-niang看板娘插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-引入vuepress-plugin-kan-ban-niang看板娘插件"}},[t._v("#")]),t._v(" 2. 引入vuepress-plugin-kan-ban-niang看板娘插件")]),t._v(" "),s("p",[t._v("引入时发现live2D模型加载不出来，翻看了源码，发现原插件并未自带live2D模型，而是采用以下方式远程加载模型")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadlive2d")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'banniang'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-shizuku/assets/shizuku.model.json'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("但是网络不好，请求不到后续所需的文件，就会导致我的看板娘加载不出来！！！ 😤😤😤")]),t._v(" "),s("h2",{attrs:{id:"_3-魔改看板娘插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-魔改看板娘插件"}},[t._v("#")]),t._v(" 3. 魔改看板娘插件")]),t._v(" "),s("p",[t._v("得，还是得靠自己~")]),t._v(" "),s("p",[t._v("于是我就在"),s("code",[t._v("vuepress-plugin-kan-ban-niang")]),t._v("插件基础上初步尝试进行魔改，将所需的live2D资源包直接引入本地"),s("code",[t._v("public")]),t._v("文件夹的"),s("code",[t._v("models")]),t._v("下，修改"),s("code",[t._v("vuepress-plugin-kan-ban-niang")]),t._v("源代码，把请求url改成形如："),s("code",[t._v("http://localhost:8000/NOxONE/models/assets/shizuku.model.json")]),t._v("的格式")]),t._v(" "),s("p",[t._v("当然了，之前没了解过这一方面的知识，不知道怎么改，都是自己一步步摸瞎走夜路，最后神奇的改好了！！！")]),t._v(" "),s("h2",{attrs:{id:"_4-让看板娘在移动端也能显示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-让看板娘在移动端也能显示"}},[t._v("#")]),t._v(" 4. 让看板娘在移动端也能显示")]),t._v(" "),s("p",[t._v("源代码默认移动端隐藏看板娘，于是我魔改了这一条，在移动端也让她显示出来，大小缩小为一半就行~")]),t._v(" "),s("p",[t._v("好了，现在是凌晨"),s("code",[t._v("1:31")]),t._v("，我已经部署好"),s("code",[t._v("NOxONE v1.1.0")]),t._v("了，明天还得去公司搬砖呢，先睡觉了，狗命要紧！")]),t._v(" "),s("h1",{attrs:{id:"_2023-04-05"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2023-04-05"}},[t._v("#")]),t._v(" 2023.04.05")]),t._v(" "),s("h2",{attrs:{id:"_1-第一次封装vuepress插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-第一次封装vuepress插件"}},[t._v("#")]),t._v(" 1. 第一次封装vuepress插件")]),t._v(" "),s("p",[t._v("今天清明节放假，自己也没闲着，中午约了妹子吃饭，然后看新海诚新出的电影《铃芽之旅》，回来补了个觉，起床就开始撸代码。主要做了一件事，那就是TODO列表的第2项，引入之前写的"),s("a",{attrs:{href:"https://dragon-chen777.github.io/Music-player/",target:"_blank",rel:"noopener noreferrer"}},[t._v("音乐播放器组件"),s("OutboundLink")],1),t._v("，用Vue重构了一遍，按照vuepress插件编写规范，将其封装成了插件，并成功引入到小破站中，正如你在左下角所看到的那样~")]),t._v(" "),s("p",[t._v("好吧，这个只是初版，还有一些功能还待完善，例如：可隐藏开启、可配置项再多一些（目前只支持修改播放器大小，播放器面板颜色，音乐标题，播放键颜色以及进度条颜色）等等，或者可以的话，再加一个音乐播放列表可让用户选择最好不过了...")]),t._v(" "),s("p",[t._v("先这样吧，目前这个插件只是在本地，等功能完善了再上传到npm上吧~ 现在是凌晨"),s("code",[t._v("1:04")]),t._v("，部署完新的一版，就睡了睡了~")]),t._v(" "),s("p",[t._v("对了，这一版为"),s("code",[t._v("NOxONE v1.2.0")])]),t._v(" "),s("h1",{attrs:{id:"_2023-04-07"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2023-04-07"}},[t._v("#")]),t._v(" 2023.04.07")]),t._v(" "),s("h2",{attrs:{id:"_1-首次发布-noxone-vuepress-plugin-music-player"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-首次发布-noxone-vuepress-plugin-music-player"}},[t._v("#")]),t._v(" 1. 首次发布@noxone/vuepress-plugin-music-player")]),t._v(" "),s("p",[t._v("今天下班吃饭后到家快八点了，所以赶时间给博客的"),s("code",[t._v("noxone-music-player")]),t._v("添加一个"),s("code",[t._v("隐藏展开")]),t._v("功能，并且首次封装成了插件，发布到了"),s("a",{attrs:{href:"https://github.com/Dragon-chen777/vuepress-plugin-music-player",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),s("OutboundLink")],1),t._v("和"),s("a",{attrs:{href:"https://dragon-chen777.github.io/assets/assets/music/%E3%82%AB%E3%83%8A%E3%82%BF%E3%83%8F%E3%83%AB%E3%82%AB.png",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm"),s("OutboundLink")],1),t._v("上（更多详情点击进去看就行了，这里就不作赘述了）")]),t._v(" "),s("p",[t._v("现在谁都可以通过以下方式导入这个插件了，真是太棒了~")]),t._v(" "),s("div",{staticClass:"language-sheel extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("npm i @noxone/vuepress-plugin-music-player\n")])])]),s("p",[t._v("但是这个插件只能在vuepress框架中使用，明显不行，所以下一步再进行改造，让它也能在vue框架中使用，它将会是以下方式使用")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("noxone-music-player")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":musicList")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("musicList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("noxone-music-player")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("是不是很酷呢？")]),t._v(" "),s("h2",{attrs:{id:"_2-live2d添加更多好看的看板娘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-live2d添加更多好看的看板娘"}},[t._v("#")]),t._v(" 2. live2d添加更多好看的看板娘")]),t._v(" "),s("p",[t._v("之前只有一个默认的"),s("code",[t._v("shizuku")]),t._v("老婆，但是，一个怎么够呢？")]),t._v(" "),s("p",[t._v("嗯... 也不是我花心，只是她们都太可爱了，你可以试试点击左下角看板娘旁边的换肤按钮，这样就可以看到其他添加的看板娘了，真是太棒了~")]),t._v(" "),s("h1",{attrs:{id:"_2023-04-08"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2023-04-08"}},[t._v("#")]),t._v(" 2023.04.08")]),t._v(" "),s("h2",{attrs:{id:"_1-一些优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-一些优化"}},[t._v("#")]),t._v(" 1. 一些优化")]),t._v(" "),s("ol",[s("li",[t._v("去除移动端点击显示默认蓝色底框（太丑了）")]),t._v(" "),s("li",[t._v("看板娘消息框样式优化及提示语修改")]),t._v(" "),s("li",[t._v("将一些资源文件迁移，托管在Github上的"),s("a",{attrs:{href:"https://github.com/Dragon-chen777/assets",target:"_blank",rel:"noopener noreferrer"}},[t._v("NOxONE资源库"),s("OutboundLink")],1),t._v("中，并部署线上："),s("a",{attrs:{href:"https://dragon-chen777.github.io/assets/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://dragon-chen777.github.io/assets/"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("鉴于第3条，在"),s("code",[t._v("config.js")]),t._v("文件中对"),s("code",[t._v("noxone播放器")]),t._v("音乐列表配置传入方式进行调整具体如下")])]),t._v(" "),s("p",[t._v("之前是这样")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@noxone/vuepress-plugin-music-player"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("musicList")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("cover")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://dragon-chen777.github.io/music/Mojito.png'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Mojito'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("link")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://dragon-chen777.github.io/music/Mojito.mp3'")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("现在是这样")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BASE_URL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://dragon-chen777.github.io'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NOXONE_MUSIC_LIST")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'カナタハルカ'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'なんでもないや'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'打上花火'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'愛にできることはまだあるかい'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'张三的歌'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("music")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("cover")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BASE_URL")]),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("/assets/music/")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("music"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(".png")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" music"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("link")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BASE_URL")]),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("/assets/music/")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("music"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(".mp3")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@noxone/vuepress-plugin-music-player"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("musicList")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NOXONE_MUSIC_LIST")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"_2-添加todo专栏"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-添加todo专栏"}},[t._v("#")]),t._v(" 2. 添加TODO专栏")]),t._v(" "),s("p",[t._v("和建站日记最底部的todo列表不同，这个todo专栏记录的代办范围比较广，例如：学习ts、three.js、搭建noxone组件库和工具库等等，底部的todo列表主要是代办的建站工作。")]),t._v(" "),s("h2",{attrs:{id:"_3-自定义鼠标样式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-自定义鼠标样式"}},[t._v("#")]),t._v(" 3. 自定义鼠标样式")]),t._v(" "),s("p",[t._v("正如你所见的鼠标变成了一个可爱的☆，移动到超链接时会被点亮就像这样⭐")]),t._v(" "),s("p",[t._v("嗯... 今天的工作差不多就这样啦~")]),t._v(" "),s("h1",{attrs:{id:"todo列表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#todo列表"}},[t._v("#")]),t._v(" TODO列表")]),t._v(" "),s("ol",[s("li",[t._v("看板娘右工具栏功能拓展\n"),s("s",[t._v("2. 将自己之前写的"),s("a",{attrs:{href:"https://dragon-chen777.github.io/Music-player/",target:"_blank",rel:"noopener noreferrer"}},[t._v("音乐播放器组件"),s("OutboundLink")],1),t._v("引入小破站（当然了，最快的方式是引入别人写好的插件，但是没必要！我就要引入我的！因为我写的最好看！不接受反驳！）")])]),t._v(" "),s("li",[t._v("导航栏样式修改（玻璃虚化透明背景、带圆角）")]),t._v(" "),s("li",[t._v("首页背景图替换")])]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[t._v("                                       ┌─┐       ┌─┐ + +\n                                    ┌──┘ ┴───────┘ ┴──┐++\n                                    │                 │\n                                    │       ───       │++ + 望咩望？！死靓仔！！ + +\n                                    ███████───███████ │+\n                                    │                 │+\n<-- 往左走，我到点该下班了，谢谢！  │       ─┴─       │\n                                    │                 │\n                                    └───┐         ┌───┘\n                                        │         │\n                                        │         │   + +  +  + +\n                                        │         │\n                                        │         └──────────────┐\n                                        │                        │\n                                        │                        ├─┐\n                                        │                        ┌─┘\n                                        │                        │\n                                        └─┐  ┐  ┌───────┬──┐  ┌──┘  + + + +\n                                          │ ─┤ ─┤       │ ─┤ ─┤\n                                          └──┴──┘       └──┴──┘  + + + +\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);