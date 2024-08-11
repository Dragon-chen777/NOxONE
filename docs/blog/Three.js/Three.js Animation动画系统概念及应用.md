---
title: Three.js Animation动画系统概念及应用
author: NOxONE
date: '2023-03-26'
categories:
  - three.js
tags:
  - three.js
---

## 0. 写在开头

本文秉承**Talk is cheap, show me the code**原则，阐述动画原理，做到文字精简，一切交由代码~

在最后试着构建[坤哥的唱跳 rap](https://www.bilibili.com/video/BV15b41157i4)的动画

## 1. Animation

动画由四个要素构成：关键帧`KeyFrame`、关键帧轨迹`KeyframeTrack`、动画剪辑`AnimationClip`以及动画混合器`AnimationMixer`

## 2. KeyFrame

`关键帧`由三个要素构成：`time`、`property`、`value`，例如：在`0.1s`时`postion`为`(1,0,0)`

**若关键帧中定义的属性在对象中存在，那么将更新对象的属性值，从而形成动画**，例如：位置关键帧可为具有`position`属性的对象设置动画，缩放关键帧可为具有`scale`属性的对象设置动画

伪代码如下

```js
class KeyFrame {
  constructor(p,s,r){
    this.position = p
    this.scale = s
    this.rotation = r
    // this.matrix = m 更常用的是矩阵
  }
}
class Obj {
  constructor(p){
    this.position = p
    // this.matrix = m
  }
}

function animation(keyFrame, obj){
  for(let key in keyFrame) {
    if(key in obj) obj[key] = keyFrame[key] // 只更新帧和对象共用的属性
  }
}

// 假如在60fps下，定义1s内60个关键帧集
let keyFrames = [ kf1, kf2, ..., kf60 ]
for(let keyFrame of keyFrames) animation(keyFrames, obj) // 生成60fps动画
```

## 3. KeyframeTrack

`关键帧轨迹`定义每个时刻的帧，由三个元素构成：`时刻集`、`帧值集`以及`对象的key`

每个单独的动作存储在每个单独的帧轨迹中。例如[坤哥的唱跳 rap](https://www.bilibili.com/video/BV15b41157i4)：手臂动作存储在手臂帧轨迹，腿部动作存储在腿部帧轨迹，还有中分发型帧轨迹、篮球帧轨迹等等（无冒犯的意思，单纯为了形象举例说明~）

在 threejs 中`KeyframeTrack`是基类，子类命名为`TypeKeyframeTrack`

```js
import { TypeKeyframeTrack } from 'three' // Type对应keyFrames数组类型
let keyKF = new TypeKeyframeTrack('.key', times, values)
```

```js
import { NumberKeyframeTrack } from 'three' // keyFrames数组类型为Number

let times = [0, 1, 2, 3, 4] // 时刻集
let values = [0, 1, 0, 1, 0] // 帧值集
let opacityKF = new NumberKeyframeTrack('.material.opacity', times, values) // 帧轨迹
// 该轨迹定义了每个时刻对象的材料透明度
// 0s -> 0
// 1s -> 1
// 2s -> 0
// 3s -> 1
// 4s -> 0
```

```js
import { VectorKeyframeTrack } from 'three'

let times = [0, 3, 6]
let values = [0, 0, 0, 2, 2, 2, 0, 0, 0]
let positionKF = new VectorKeyframeTrack('.hand.position', times, values)
// 0s -> (0,0,0)
// 3s -> (2,2,2)
// 6s -> (0,0,0)
```

## 4. AnimationClip

动画剪辑是附加到对象的所有关键帧轨迹的集合，由三个要素构成：`剪辑名称`、`剪辑时长`、`轨迹集`

不多 BB，上代码

```js
import { AnimationClip, VectorKeyframeTrack } from 'three'

let times = [0, 3, 6]
let values = [0, 0, 0, 2, 2, 2, 0, 0, 0]
let positionKF = new VectorKeyframeTrack('.position', times, values)

let tracks = [positionKF] // 轨迹集
let clipName = 'demo' // 剪辑名称
let clipLength = -1 // 剪辑时长，设置为-1时取轨迹集中最长轨迹时长，这里即为6s

let clip = new AnimationClip(clipName, clipLength, tracks) // 动画片段
```

## 5. AnimationMixer

`AnimationMixer`用于生成模型的动作，即动画混合器，将静态模型转化为动画混合模型`mixer`

通过`mixer.clipAction`可将`AnimationClip`与`mixer`关联，以生成动作

```js
let mixer = new AnimationMixer(model) // 创建model的混合对象
mixer.clipAction(animationClip) // 将animationClip接入到混合对象中，生成对象的动作
```

```js
import { AnimationClip, NumberKeyframeTrack, VectorKeyframeTrack, AnimationMixer } from 'three'
import { model } from './models/model1.js'

let positionKF = new VectorKeyframeTrack('.position', [0, 3, 6], [0, 0, 0, 2, 2, 2, 0, 0, 0]) // 三维向量轨迹

let opacityKF = new NumberKeyframeTrack('.material.opacity', [0, 1, 2, 3, 4, 5, 6], [0, 1, 0, 1, 0, 1, 0]) // 材料透明度轨迹

let moveBlinkClip = new AnimationClip('move-n-blink', -1, [
	// 动画剪辑
	positionKF,
	opacityKF,
])

let mixer = new AnimationMixer(model) // 将静态的model转化为动画对象
let action = mixer.clipAction(moveBlinkClip) // 给model设置动画片段生成动作
```

## 6. 唱跳 rap 动画生成

一般来说，通过手动写代码来定义`KeyFrameTrack`和`AnimationClip`十分硬核，其中涉及到大量的数学计算！所以一般都是通过外部程序在创建模型的同时定义模型动画，在通过`Loader`加载模型时会将`AnimationClip`存储在模型的`animation`数组中

**巅峰迎来虚伪的拥护，黄昏见证真正的信徒**，所以让我们通过写代码的方式，记录下哥哥每一帧的美好~

```js
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js' // webGL Transform Format Loader
import { AnimationMixer } from 'three'

let _GLTFLoader = new GLTFLoader()

let cxkModelData = await _GLTFLoader.loadAsync('./assets/models/cxk.glb') // cxk模型数据，具体内容参考最底部
let cxkModel = cxkModelData.scene.children[0] // cxk模型，这个模型数据定义的scene只有一个child，所以取scene.children[0]即可
let clip = cxkModelData.animations[0] // cxk唱跳rap动画剪辑

let cxkMixer = new AnimationMixer(cxkModel) // cxk模型混合器
let sing_dance_rap_action = cxkMixer.clipAction(clip) // 将动画剪辑接入到混合器中，以生成唱跳rap动作

sing_dance_rap_action.play() // 哥哥开始表演才艺了（但是ikun只能看一眼，想多看几眼需要在渲染器的动画循环每一帧中实时更新cxkMixer）

renderer.setAnimationLoop(() => { // 设置渲染器的动画循环，在每一帧中更新cxkMixer
  cxkMixer.update()
  renderer.render(scene, camera)
})



// cxkModelData长这样
{
  animations: [AnimationClip], // 哥哥的动画剪辑clip在这个集合里
  scene: {
    type: 'Group',
    children: [Mesh], // 哥哥的模型model在这个集合里
    // ...
  },
  // 以下属性暂时还用不上
  asset: { // 模型的一些外部信息
    genetator: 'Khronos Blender glTF 2.0 I/O', // 生成模型的接口
    version: '2.0' // 版本号
  },
  cameras: [... ],
  userData: { ... } // 用户自定义数据
  // ...
}
```

## 参考

[1. The three.js Animation System](https://discoverthreejs.com/book/first-steps/animation-system)

[2. 蔡徐坤原版无特效打篮球视频](https://www.bilibili.com/video/BV15b41157i4)
