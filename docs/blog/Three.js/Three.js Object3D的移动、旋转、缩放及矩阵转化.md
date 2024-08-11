---
title: Three.js Object3D的移动、旋转、缩放及矩阵转化
author: NOxONE
date: '2023-03-24'
categories:
  - three.js
tags:
  - three.js
---

## 1. Transition、Scale、Rotate

在 three.js 中，空间分为`世界空间`和`对象空间`，`scene`的直接子对象相对于`世界空间`定位，而对象的子对象相对于`对象空间`定位

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/80ec7ac0ccd04445a966f5caeb7c627f~tplv-k3u1fbpfcp-watermark.image?)

所有的`Object3D`基于空间里的笛卡尔坐标系移动、旋转和缩放

```js
class Object3D {
	constructor() {
		this.position = {
			// transition
			x: 0,
			y: 0,
			z: 0,
			set(x, y, z) {
				this.x = x
				this.y = y
				this.z = z
			},
		}
		this.scale = {
			// scale
			x: 0,
			y: 0,
			z: 0,
			set(x, y, z) {
				this.x = x
				this.y = y
				this.z = z
			},
		}
		this.rotate = {
			// rotate
			x: 0,
			y: 0,
			z: 0, // rad
			set(x, y, z) {
				this.x = x
				this.y = y
				this.z = z
			},
		}
		// ...
	}
}
// 通过Vector3改变transtion、scale
let o = new Object3D()
o.postion = new Vector3(1, 1, 1) // 等价于：o.postion.set(1,1,1)
o.scale = new Vector3(2, 2, 2) // 等价于：o.scale.set(2,2,2)

// 通过Euler改变rotate，通过MathUtils.degToRad方法将角度deg转为rad弧度
import { MathUtils } from 'three'

let radX = MathUtils.degToRad(90) // 90deg -->  Math.PI * (90 / 180) --> Math.PI / 2
let radY = MathUtils.degToRad(-90)
let radZ = MathUtils.degToRad(90)

o.rotate = new Euler(radX, radY, radZ) // 等价于：o.rotate.set(radX, radY, radZ)
```

## 2. 转换矩阵

对于计算机处理`向量`、`欧拉角`的效率并不高，更推荐将平移、旋转、缩放转换成一个 4 维矩阵即`Matrix4`

初始为`单位矩阵I`，`T`代表`Transition`，`S`代表`Scale`，`R`代表`Rotate`

```js
o.postion.set(Tx, Ty, Tz)
o.scale.set(Sx, Sy, Sz)
o.updateMatrix() // 更新Matrix
// 合并TS，先不考虑R
let TSMatix = [
	[Sx, 0, 0, Tx],
	[0, Sy, 0, Ty],
	[0, 0, Sz, Tz],
	[0, 0, 0, 1],
]
```

旋转比较特殊

```js
let rad = MathUtils.degToRad(30) // Math.PI / 6
let s0 = Math.sin(rad)
let c0 = Math.cos(rad)
```

```js
o.rotate.x = rad
let RxMatix = [
	[1, 0, 0, 0],
	[0, c0, s0, 0],
	[0, -s0, c0, 0],
	[0, 0, 0, 1],
]
```

```js
o.rotate.y = rad
let RyMatix = [
	[c0, 0, s0, 0],
	[0, 1, 0, 0],
	[-s0, 0, c0, 0],
	[0, 0, 0, 1],
]
```

```js
o.rotate.z = rad
let RzMatix = [
	[c0, -s0, 0, 0],
	[s0, c0, 0, 0],
	[0, 0, 1, 0],
	[0, 0, 0, 1],
]
```

合并`TSR`，需要对矩阵做相乘

```js
let { cos, sin } = Math
let rad = MathUtils.degToRad(0) // Math.PI / 6
let c0 = cos(rad)
let s0 = sin(rad)

o.rotate.x = rad
o.rotate.y = rad
o.rotate.z = rad

o.postion.set(1, 2, 3)
o.scale.set(2, 2, 2)

o.updateMatix()
// 合并TSR
let TSRMatix = TSMatix * RxMatix * RyMatix * RzMatix // 自己算，我也不会~
```

## 3. 世界空间矩阵和对象空间矩阵的转化

```js
const scene = new Scene()
const meshA = new Mesh()
const meshB = new Mesh()
scene.add(meshA)
meshA.add(meshB)

// meshA矩阵变换
let matixA = new Matix4()
matixA.set(1, 0, 0, 5, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
meshA.matix = matixA // 等价于 meshA.position.set(5,0,0)
// meshB矩阵变换
let matixB = new Matix4()
matixB.set(1, 0, 0, 2, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
meshB.matix = matixB // 等价于 meshA.position.set(2,0,0)

// meshA.matrix和meshA.matrixWorld相同都为 matixA
meshA.updateMatrix()
meshA.updateMatrixWorld()

// meshB.matrix为matrixB
meshB.updateMatrix()

// meshB.matrixWorld为 matixA + matrixB
meshB.updateMatrixWorld()
// 等价于以下代码
let matrixWorldB = new Matrix4()
matrixWorldB.set(1, 0, 0, 7, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
meshB.matixWorld = matrixWorldB
```
