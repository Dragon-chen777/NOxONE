(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{486:function(v,_,a){"use strict";a.r(_);var s=a(2),e=Object(s.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"_2023-04-01-2023-04-02"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2023-04-01-2023-04-02"}},[v._v("#")]),v._v(" 2023.04.01 ~ 2023.04.02")]),v._v(" "),_("h2",{attrs:{id:"_1-搭建博客主框架"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-搭建博客主框架"}},[v._v("#")]),v._v(" 1. 搭建博客主框架")]),v._v(" "),_("p",[v._v("主要内容有：")]),v._v(" "),_("p",[_("strong",[v._v("导航栏")]),v._v("："),_("code",[v._v("LOGO设计")]),v._v("、"),_("code",[v._v("博客")]),v._v("、"),_("code",[v._v("Demo")]),v._v("、"),_("code",[v._v("百宝箱")]),v._v("、"),_("code",[v._v("社交账号")]),v._v("、"),_("code",[v._v("标签")]),v._v("、"),_("code",[v._v("专栏")]),v._v("、"),_("code",[v._v("TimeLine")])]),v._v(" "),_("p",[_("strong",[v._v("Hero展示区")]),v._v("："),_("code",[v._v("背景")]),v._v("、"),_("code",[v._v("头像")]),v._v("、"),_("code",[v._v("展示语（静态）")])]),v._v(" "),_("p",[_("strong",[v._v("个人信息框")]),v._v("："),_("code",[v._v("社交账号（github、掘金、CSDN、Bilibili）")]),v._v("、"),_("code",[v._v("专栏")]),v._v("、"),_("code",[v._v("标签")])]),v._v(" "),_("p",[_("strong",[v._v("博客列表")])]),v._v(" "),_("p",[_("strong",[v._v("引用vuepress-theme-reco主题")])]),v._v(" "),_("p",[_("strong",[v._v("博客页")]),v._v("："),_("code",[v._v("markdown多级标题、代码、代码块样式优化")]),v._v("，"),_("code",[v._v("搬运之前在掘金上写的文章")])]),v._v(" "),_("p",[v._v("嗯... 期间爬了很多很多坑，也飚了很多句国粹，来回翻查官方文档，各种技术博客，白天晚上通宵撸代码，一点一点搭建起来了")]),v._v(" "),_("p",[v._v("PS：若对前端不是真爱的话，那么我可能就直接Say Goodbye了")]),v._v(" "),_("h2",{attrs:{id:"_2-github-pages项目部署"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-github-pages项目部署"}},[v._v("#")]),v._v(" 2. GitHub Pages项目部署")]),v._v(" "),_("p",[v._v("也是爬了很多坑... 但最终还是将小破站成功部署了！！！于是顺便把之前写的Demo都一并部署了")]),v._v(" "),_("p",[v._v("暂时把版本定为"),_("code",[v._v("NOxONE v1.0.0")])]),v._v(" "),_("h1",{attrs:{id:"_2023-04-03"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2023-04-03"}},[v._v("#")]),v._v(" 2023.04.03")]),v._v(" "),_("h2",{attrs:{id:"_1-添加tab标签栏logo"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-添加tab标签栏logo"}},[v._v("#")]),v._v(" 1. 添加tab标签栏Logo")]),v._v(" "),_("p",[v._v("也就是你看到的一个白色的小猫猫")]),v._v(" "),_("h2",{attrs:{id:"_2-引入vuepress-plugin-kan-ban-niang看板娘插件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-引入vuepress-plugin-kan-ban-niang看板娘插件"}},[v._v("#")]),v._v(" 2. 引入vuepress-plugin-kan-ban-niang看板娘插件")]),v._v(" "),_("p",[v._v("引入时发现live2D模型加载不出来，翻看了源码，发现原插件并未自带live2D模型，而是采用以下方式远程加载模型")]),v._v(" "),_("div",{staticClass:"language-js extra-class"},[_("pre",{pre:!0,attrs:{class:"language-js"}},[_("code",[_("span",{pre:!0,attrs:{class:"token function"}},[v._v("loadlive2d")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),v._v("\n  "),_("span",{pre:!0,attrs:{class:"token string"}},[v._v("'banniang'")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(",")]),v._v("\n  "),_("span",{pre:!0,attrs:{class:"token string"}},[v._v("'https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-shizuku/assets/shizuku.model.json'")]),v._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),v._v("\n")])])]),_("p",[v._v("但是网络不好，请求不到后续所需的文件，就会导致我的看板娘加载不出来！！！ 😤😤😤")]),v._v(" "),_("h2",{attrs:{id:"_3-魔改看板娘插件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-魔改看板娘插件"}},[v._v("#")]),v._v(" 3. 魔改看板娘插件")]),v._v(" "),_("p",[v._v("得，还是得靠自己~")]),v._v(" "),_("p",[v._v("于是我就在"),_("code",[v._v("vuepress-plugin-kan-ban-niang")]),v._v("插件基础上初步尝试进行魔改，将所需的live2D资源包直接引入本地"),_("code",[v._v("public")]),v._v("文件夹的"),_("code",[v._v("models")]),v._v("下，修改"),_("code",[v._v("vuepress-plugin-kan-ban-niang")]),v._v("源代码，把请求url改成形如："),_("code",[v._v("http://localhost:8000/NOxONE/models/assets/shizuku.model.json")]),v._v("的格式")]),v._v(" "),_("p",[v._v("当然了，之前没了解过这一方面的知识，不知道怎么改，都是自己一步步摸瞎走夜路，最后神奇的改好了！！！")]),v._v(" "),_("h2",{attrs:{id:"_4-让看板娘在移动端也能显示"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-让看板娘在移动端也能显示"}},[v._v("#")]),v._v(" 4. 让看板娘在移动端也能显示")]),v._v(" "),_("p",[v._v("源代码默认移动端隐藏看板娘，于是我魔改了这一条，在移动端也让她显示出来，大小缩小为一半就行~")]),v._v(" "),_("p",[v._v("好了，现在是凌晨"),_("code",[v._v("1:31")]),v._v("，我已经部署好"),_("code",[v._v("NOxONE v1.1.0")]),v._v("了，明天还得去公司搬砖呢，先睡觉了，狗命要紧！")]),v._v(" "),_("h1",{attrs:{id:"_2023-04-05"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2023-04-05"}},[v._v("#")]),v._v(" 2023.04.05")]),v._v(" "),_("h1",{attrs:{id:"_1-第一次封装vuepress插件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-第一次封装vuepress插件"}},[v._v("#")]),v._v(" 1. 第一次封装vuepress插件")]),v._v(" "),_("p",[v._v("今天清明节放假，自己也没闲着，中午约了妹子吃饭，然后看新海诚新出的电影《铃芽之旅》，回来补了个觉，起床就开始撸代码。主要做了一件事，那就是TODO列表的第2项，引入之前写的"),_("a",{attrs:{href:"https://dragon-chen777.github.io/Music-player/",target:"_blank",rel:"noopener noreferrer"}},[v._v("音乐播放器组件"),_("OutboundLink")],1),v._v("，用Vue重构了一遍，按照vuepress插件编写规范，将其封装成了插件，并成功引入到小破站中，正如你在左下角所看到的那样~")]),v._v(" "),_("p",[v._v("好吧，这个只是初版，还有一些功能还待完善，例如：可隐藏开启、可配置项再多一些（目前只支持修改播放器大小，播放器面板颜色，音乐标题，播放键颜色以及进度条颜色）等等，或者可以的话，再加一个音乐播放列表可让用户选择最好不过了...")]),v._v(" "),_("p",[v._v("先这样吧，目前这个插件只是在本地，等功能完善了再上传到npm上吧~ 现在是凌晨"),_("code",[v._v("1:04")]),v._v("，部署完新的一版，就睡了睡了~")]),v._v(" "),_("p",[v._v("对了，这一版为"),_("code",[v._v("NOxONE v1.2.0")])]),v._v(" "),_("h1",{attrs:{id:"todo列表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#todo列表"}},[v._v("#")]),v._v(" TODO列表")]),v._v(" "),_("ol",[_("li",[v._v("看板娘右工具栏功能拓展")]),v._v(" "),_("li",[v._v("将自己之前写的"),_("a",{attrs:{href:"https://dragon-chen777.github.io/Music-player/",target:"_blank",rel:"noopener noreferrer"}},[v._v("音乐播放器组件"),_("OutboundLink")],1),v._v("引入小破站（当然了，最快的方式是引入别人写好的插件，但是没必要！我就要引入我的！因为我写的最好看！不接受反驳！）")]),v._v(" "),_("li",[v._v("导航栏样式修改（玻璃虚化透明背景、带圆角）")]),v._v(" "),_("li",[v._v("首页背景图替换")])]),v._v(" "),_("div",{staticClass:"language-css extra-class"},[_("pre",{pre:!0,attrs:{class:"language-css"}},[_("code",[v._v("                                       ┌─┐       ┌─┐ + +\n                                    ┌──┘ ┴───────┘ ┴──┐++\n                                    │                 │\n                                    │       ───       │++ + 望咩望？！死靓仔！！ + +\n                                    ███████───███████ │+\n                                    │                 │+\n<-- 往左走，我到点该下班了，谢谢！  │       ─┴─       │\n                                    │                 │\n                                    └───┐         ┌───┘\n                                        │         │\n                                        │         │   + +  +  + +\n                                        │         │\n                                        │         └──────────────┐\n                                        │                        │\n                                        │                        ├─┐\n                                        │                        ┌─┘\n                                        │                        │\n                                        └─┐  ┐  ┌───────┬──┐  ┌──┘  + + + +\n                                          │ ─┤ ─┤       │ ─┤ ─┤\n                                          └──┴──┘       └──┴──┘  + + + +\n")])])])])}),[],!1,null,null,null);_.default=e.exports}}]);