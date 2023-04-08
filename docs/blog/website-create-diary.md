---
title: 建站日记
author: NOxONE
date: '2077-07-07'
---
# 2023.04.01 ~ 2023.04.02
## 1. 搭建博客主框架
主要内容有：

**导航栏**：`LOGO设计`、`博客`、`Demo`、`百宝箱`、`社交账号`、`标签`、`专栏`、`TimeLine`

**Hero展示区**：`背景`、`头像`、`展示语（静态）`

**个人信息框**：`社交账号（github、掘金、CSDN、Bilibili）`、`专栏`、`标签`

**博客列表**

**引用vuepress-theme-reco主题**

**博客页**：`markdown多级标题、代码、代码块样式优化`，`搬运之前在掘金上写的文章`

嗯... 期间爬了很多很多坑，也飚了很多句国粹，来回翻查官方文档，各种技术博客，白天晚上通宵撸代码，一点一点搭建起来了

PS：若对前端不是真爱的话，那么我可能就直接Say Goodbye了

## 2. GitHub Pages项目部署

也是爬了很多坑... 但最终还是将小破站成功部署了！！！于是顺便把之前写的Demo都一并部署了

暂时把版本定为`NOxONE v1.0.0`

# 2023.04.03
## 1. 添加tab标签栏Logo
也就是你看到的一个白色的小猫猫
## 2. 引入vuepress-plugin-kan-ban-niang看板娘插件
引入时发现live2D模型加载不出来，翻看了源码，发现原插件并未自带live2D模型，而是采用以下方式远程加载模型
```js
loadlive2d(
  'banniang',
  'https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-shizuku/assets/shizuku.model.json'
)
```
但是网络不好，请求不到后续所需的文件，就会导致我的看板娘加载不出来！！！ 😤😤😤

## 3. 魔改看板娘插件
得，还是得靠自己~

于是我就在`vuepress-plugin-kan-ban-niang`插件基础上初步尝试进行魔改，将所需的live2D资源包直接引入本地`public`文件夹的`models`下，修改`vuepress-plugin-kan-ban-niang`源代码，把请求url改成形如：`http://localhost:8000/NOxONE/models/assets/shizuku.model.json`的格式

当然了，之前没了解过这一方面的知识，不知道怎么改，都是自己一步步摸瞎走夜路，最后神奇的改好了！！！

## 4. 让看板娘在移动端也能显示
源代码默认移动端隐藏看板娘，于是我魔改了这一条，在移动端也让她显示出来，大小缩小为一半就行~

好了，现在是凌晨`1:31`，我已经部署好`NOxONE v1.1.0`了，明天还得去公司搬砖呢，先睡觉了，狗命要紧！

# 2023.04.05
## 1. 第一次封装vuepress插件
今天清明节放假，自己也没闲着，中午约了妹子吃饭，然后看新海诚新出的电影《铃芽之旅》，回来补了个觉，起床就开始撸代码。主要做了一件事，那就是TODO列表的第2项，引入之前写的[音乐播放器组件](https://dragon-chen777.github.io/Music-player/)，用Vue重构了一遍，按照vuepress插件编写规范，将其封装成了插件，并成功引入到小破站中，正如你在左下角所看到的那样~

好吧，这个只是初版，还有一些功能还待完善，例如：可隐藏开启、可配置项再多一些（目前只支持修改播放器大小，播放器面板颜色，音乐标题，播放键颜色以及进度条颜色）等等，或者可以的话，再加一个音乐播放列表可让用户选择最好不过了...

先这样吧，目前这个插件只是在本地，等功能完善了再上传到npm上吧~ 现在是凌晨`1:04`，部署完新的一版，就睡了睡了~

对了，这一版为`NOxONE v1.2.0`

# 2023.04.07
## 1. 首次发布@noxone/vuepress-plugin-music-player
今天下班吃饭后到家快八点了，所以赶时间给博客的`noxone-music-player`添加一个`隐藏展开`功能，并且首次封装成了插件，发布到了[Github](https://github.com/Dragon-chen777/vuepress-plugin-music-player)和[npm](https://dragon-chen777.github.io/assets/assets/music/%E3%82%AB%E3%83%8A%E3%82%BF%E3%83%8F%E3%83%AB%E3%82%AB.png)上（更多详情点击进去看就行了，这里就不作赘述了）

现在谁都可以通过以下方式导入这个插件了，真是太棒了~
```sheel
npm i @noxone/vuepress-plugin-music-player
```
但是这个插件只能在vuepress框架中使用，明显不行，所以下一步再进行改造，让它也能在vue框架中使用，它将会是以下方式使用
```html
<noxone-music-player :musicList="musicList"></noxone-music-player>
```
是不是很酷呢？
## 2. live2d添加更多好看的看板娘
之前只有一个默认的`shizuku`老婆，但是，一个怎么够呢？

嗯... 也不是我花心，只是她们都太可爱了，你可以试试点击左下角看板娘旁边的换肤按钮，这样就可以看到其他添加的看板娘了，真是太棒了~

# 2023.04.08
## 1. 一些优化
1. 去除移动端点击显示默认蓝色底框（太丑了）
2. 看板娘消息框样式优化及提示语修改
3. 将一些资源文件迁移，托管在Github上的[NOxONE资源库](https://github.com/Dragon-chen777/assets)中，并部署线上：[https://dragon-chen777.github.io/assets/](https://dragon-chen777.github.io/assets/)
4. 鉴于第3条，在`config.js`文件中对`noxone播放器`音乐列表配置传入方式进行调整具体如下

之前是这样
```js
module.exports = {
  // ...
  plugins: [
    [
      "@noxone/vuepress-plugin-music-player",
      {
        musicList: [
          {
            cover: 'https://dragon-chen777.github.io/music/Mojito.png',
            title: 'Mojito',
            link: 'https://dragon-chen777.github.io/music/Mojito.mp3'
          },
          // ...
        ]
      }
    ]
  ]
}
```
现在是这样
```js
const BASE_URL = 'https://dragon-chen777.github.io'
const NOXONE_MUSIC_LIST = [
  'カナタハルカ',
  'なんでもないや',
  '打上花火',
  '愛にできることはまだあるかい',
  '张三的歌'
].map(music => ({
  cover: `${BASE_URL}/assets/music/${music}.png`,
  title: music,
  link: `${BASE_URL}/assets/music/${music}.mp3`
}))
module.exports = {
  // ...
  plugins: [
    [
      "@noxone/vuepress-plugin-music-player",
      {
        musicList: NOXONE_MUSIC_LIST
      }
    ]
  ]
}
```
## 2. 添加TODO专栏
和建站日记最底部的todo列表不同，这个todo专栏记录的代办范围比较广，例如：学习ts、three.js、搭建noxone组件库和工具库等等，底部的todo列表主要是代办的建站工作。

今天的工作差不多就这样啦~

# TODO列表
1. 看板娘右工具栏功能拓展
~~2. 将自己之前写的[音乐播放器组件](https://dragon-chen777.github.io/Music-player/)引入小破站（当然了，最快的方式是引入别人写好的插件，但是没必要！我就要引入我的！因为我写的最好看！不接受反驳！）~~
3. 导航栏样式修改（玻璃虚化透明背景、带圆角）
4. 首页背景图替换
```css
                                       ┌─┐       ┌─┐ + +
                                    ┌──┘ ┴───────┘ ┴──┐++
                                    │                 │
                                    │       ───       │++ + 望咩望？！死靓仔！！ + +
                                    ███████───███████ │+
                                    │                 │+
<-- 往左走，我到点该下班了，谢谢！  │       ─┴─       │
                                    │                 │
                                    └───┐         ┌───┘
                                        │         │
                                        │         │   + +  +  + +
                                        │         │
                                        │         └──────────────┐
                                        │                        │
                                        │                        ├─┐
                                        │                        ┌─┘
                                        │                        │
                                        └─┐  ┐  ┌───────┬──┐  ┌──┘  + + + +
                                          │ ─┤ ─┤       │ ─┤ ─┤
                                          └──┴──┘       └──┴──┘  + + + +
```