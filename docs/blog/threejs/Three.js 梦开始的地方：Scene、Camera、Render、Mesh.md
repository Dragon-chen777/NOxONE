---
title: Three.js 梦开始的地方：Scene、Camera、Render、Mesh
author: NOxONE
date: '2023-03-22'
categories:
  - three.js
tags:
  - three.js
---

## 0. 写在开头

本文秉承**Talk is cheap, show me the code**原则，做到文字精简，一切交由代码~

## 1. three.js 应用的基石

`Scene`：场景是我们能看到的一切的载体

`Camera`：透过投影仪查看场景

`Renderer`：渲染器将透过`Camera`观察到的每一帧`Scene`绘制到`<canvas>`中

`Mesh`：网格是计算机图形学中最常见的**可见对象**

场景、投影仪、渲染器再加上可见对象组成了应用的基石

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e9e4d93009c443609dc7c23d5b36940e~tplv-k3u1fbpfcp-watermark.image)

## 2. Scene

**创建 Scene**

```js
const scene = new Scene()
```

场景定义了三维的**笛卡尔坐标系**，里边的物体都是基于这个坐标系移动

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/42f83193a35644ea822f1283cd9ec33a~tplv-k3u1fbpfcp-watermark.image?)

场景及场景中的物体构成了一个`树结构`，场景位于根节点

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/860aff38c80c4939bc1db3f4c8720e03~tplv-k3u1fbpfcp-watermark.image?)

## 3. Camera

**创建 Camera**

```js
const container = document.getElementById('container') // 应用容器

const fov = 45 // 视角
const aspect = container.width / container.height // 投影宽高比
const near = 0.1 // 可视近点
const far = 1000 // 可视远点
const camera = new PerspectiveCamera(fov, aspect, near, far) // 透视投影仪
```

投影仪可选类型，传参配置项都不同

0. [Camera（基类）](https://threejs.org/docs/index.html#api/zh/cameras/Camera)
1. [PerspectiveCamera（透视）](https://threejs.org/docs/index.html#api/zh/cameras/PerspectiveCamera)
2. [OrthographicCamera（正交）](https://threejs.org/docs/index.html#api/zh/cameras/OrthographicCamera)
3. [CubeCamera（立方）](https://threejs.org/docs/index.html#api/zh/cameras/CubeCamera)
4. [StereoCamera（立体）](https://threejs.org/docs/index.html#api/zh/cameras/StereoCamera)

## 4. Renderer

**创建 Render**

```js
const renderer = new WebGLRenderer() // WebGL渲染器
```

## 5. Mesh

**创建 Mesh**

`Mesh`由`几何体`和`材质`构成

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b76fe72b2f2646abbdf9b34d17a40632~tplv-k3u1fbpfcp-watermark.image?)

```js
const width = 2
const height = 2
const depth = 2
const geomery = new BoxBufferGeometry(width, height, depth) // 立方几何体

const material = new MeshBasicMaterial() // 基础网格材质

const mesh = new Mesh(geometry, material) // 网格
```

## 6. 构建场景

1. 获取应用容器
2. 创建`Scene`、`Camera`、`Renderer`，并初始化
3. 创建`Mesh`，并加入到`Sene`中
4. 通过`Renderer`渲染场景

```js
// 1.获取应用容器
const container = document.getElementById('container') // 应用容器

// 2.创建Scene、Camera、Renderer，并初始化
const scene = new Scene() // 场景
scene.background = new Color('pink') // 设置背景颜色

const camera = new PerspectiveCamera(45, container.width / container.height, 0.1, 1000) // 透视投影仪
camera.position.set(0, 0, 10) // 设置投影点坐标，默认为(0, 0, 0)

const renderer = new WebGLRanderer() // WebGL渲染器
renderer.setSize(container.width, container.height) // 设置渲染器大小
renderer.setPixelRatio(window.devicePixelRatio) // 设置渲染像素比为设备像素比dpr，防止模糊

// 3.创建Mesh，并加入到Sene中
const geomery = new BoxBufferGeometry(width, height, depth) // 立方几何体
const material = new MeshBasicMaterial() // 基础网格材质
const mesh = new Mesh(geometry, material) // 网格
scene.add(mesh) // 向场景中加入物体

// 4.通过Renderer渲染场景
container.append(render.domElement) // 将渲染器生成的<canvas>添加到父容器中
renderer.render(scene, camera) // 透过camera将观察到的sene绘制到<canvas>中
```

## 参考

1. [Welcome to Discover three.js!](https://discoverthreejs.com/zh/book/first-steps/first-scene/#setup)
2. [最官方的官方文档](https://threejs.org/docs/index.html#api/zh)
