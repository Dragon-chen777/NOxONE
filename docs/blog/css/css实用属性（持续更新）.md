---
title: css实用属性（持续更新）
author: NOxONE
date: '2022-12-04'
categories:
  - css
tags:
  - css
---

```css
.div{
  pointer-events: none; // 禁止点击，DOM不会触发点击事件
  animation: ani 3s steps(3); //  steps(n)控制动画帧到帧之间的步进，动画更平滑
  content-visibility: auto; // 非可视区的子元素不渲染（用于优化长列表渲染）
  contain-intrinsic-size: 200px; // 指定当前元素的预宽高，解决设置content-visibility之后滚动抽搐的问题
}
// 后续持续更新

// 精灵图转gif
.box{
  width 200px
  height 150px
  background url(xxx.png) no-repeat
  background-size 3000% 100% // 假设精灵图由30张图片构成
  animation ani 3s steps(29) infinite // 29 = 30 - 1
}
@keyframes ani{
  0%
    background-position 0 0
  100%
    background-position 100% 0
}

```
