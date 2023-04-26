---
title: Virtual DOM和Diff原理及实现
author: NOxONE
date: '2023-03-20'
sticky: 2
cover: 'https://dragon-chen777.github.io/assets/images/祢豆子/7.jpg'
categories:
  - vue
tags:
  - vue
---

## 0. 写在开头

本文将秉承**Talk is cheap, show me the code**原则，做到文字最精简，一切交由代码说明！

## 1. vdom

vdom 即虚拟 DOM，将 DOM 映射为 JS 对象，结合 diff 算法更新 DOM

以下为 DOM

```html
<div id="app">
	<div class="home">home</div>
</div>
```

映射成 VDOM

```js
{
  tag: 'div',
    attrs: {
    id: 'app'
  },
  children: [
    {
      tag: 'div',
      attrs: {
        class: 'home'
      },
      children: [
        {
          tag: undefined,
          attrs: undefined,
          text: 'home',
          children: undefined
        }
      ]
    }
  ]
}
```

通过这个 vdom 实现简单的`render`函数，可以通过 js 操作修改 dom

```html
<template>
	<div id="app">
		<div v-for="item in arr">{{ item.name }} : {{ item.id }}</div>
	</div>
	<button id="btn">reRender</button>
</template>
```

```js
let app = document.getElementById('app')
let data = {
	arr: [
		{ name: 'a', id: 1 },
		{ name: 'b', id: 2 },
		{ name: 'c', id: 3 },
	],
}

function render(data) {
	app.innerHtml = ''
	let children = []
	data.forEach((item) => {
		let el = document.createElement('div')
		el.innerHtml = `${item.name} : ${item.id}`
		app.appendChild(el)
	})
}

// test
render(data.arr) // 首次渲染
let btn = document.getElementById('btn')
btn.onClick = () => {
	data.arr[2].id++ // 修改关联数据
	render(data.arr) // 重新渲染：暴力刷新DOM，没有diff，实际上只用更新最后一个div就行
}
```

### 1.1 使用 snabbdom 实现 VDOM

snabbldom 是简易实现 vdom 功能的库，有两个核心 api：`h函数`和`patch函数`

```js
h(tag, attrs, children) // 创建vnode
patch(vnode, newVnode) // 对vnode进行diff后挂载到真实dom上
```

结合`h`和`patch`实现`render`渲染函数

```js
let app = document.getElementById('app')
let vnode

function render(data) {
	let newVnode = h(
		'div',
		{ class: 'wrap' },
		data.forEach((item) => {
			return h('div', {}, `${item.name} : ${item.id}`)
		}),
	)
	patch(vnode, newVnode)
	vnode = newVnode
}

render(data.arr) // 首次渲染

let btn = document.getElementById('btn')
btn.onClick = () => {
	data.arr[2].id++ // 修改关联数据
	render(data.arr) // 重新渲染：在patch函数里经过vdom的diff后再挂载到真实dom，这里只更新最后一个div
}
```

## 2. Diff

为了尽量减少 DOM 操作，需要通过 diff 对比新旧 vnode，针对更改的地方进行更新 DOM，而非替换整个 DOM

大体思路为：

0. 对新旧两个节点调用`patch`函数
1. 进来先判断两个节点是否为同一类型，具体是对比`key`、`tag`、`data`等属性
2. 若不为同一类型，那么基于新节点创建 dom 之后作替换
3. 若为同一类型，那么调用`patchVnode`函数
4. 进来先判断两个节点是文本节点的话，那么就作文本内容替换
5. 否则判断是否都有子节点，都有的话调用`updateChildren`函数，通过`首尾四个指针`对子节点数组进行 diff 更新；若旧节点有子节点，新节点没有，这时就删除子节点；若旧节点无子节点，新节点有，这时基于新节点创建 dom 作替换即可

通过`createElment`函数，将 VDOM 转为真实 DOM

```js
function createElement(vnode) {
	if (vnode.text) return document.createTextNode(vnode) // 文本节点

	let { tag, attrs, children } = vnode

	let el = document.createElement(tag) // tag

	for (let key of attrs) {
		// attrs
		el.setAttribute(key, attrs[key])
	}

	children.forEach((childVnode) => {
		// children
		el.appendChild(createElement(childVnode))
	})
	vnode.el = el
	return el
}
```

通过`patch`函数，执行 diff 更新操作

判断`vnode`和`newVnode`是否为同一类型节点，是则继续递归对比子节点，否则直接替换

```js
function patch(vnode, newVnode) {
	if (isSameNode(vnode, newVnode)) patchVnode(vnode, newVnode)
	else replaceVnode(vnode, newVnode)
}

function replaceVnode(vnode, newVnode) {
	let el = vnode.el // 旧节点
	let parentEl = api.getParentNode(el) // 获取父节点
	api.insertBefore(parentEl, createElement(newVnode), api.getNextSibling(el)) // 插入新节点
	api.removeChild(parentEl, el) // 删除旧节点
}

function isSameNode(vnode, newVnode) {
	return (
		vnode.key == newVnode.key && // key是否相同
		vnode.tag == newVnode.tag && // tag是否相同
		isDef(vnode.data) == isDef(newVnode.data) // 是否都定义了data
		// &&... 其他条件
	)
}

function patchVnode(vnode, newVnode) {
	let el = (newVnode.el = vnode.el) // 获取当前旧节点对应的dom，并赋值给新节点的el

	// 1.都为文本节点，且文本不一样
	if (vnode.text && newVnode.text && vnode.text != newVnode.text) return api.setElText(el, newVnode.text) // 替换文本

	let ch = vnode.children
	let newCh = newVnode.children
	if (ch && newCh) return updateChildren(el, ch, newCh) // 2.都有子节点，递归对比
	if (ch) return api.removeChild(el) // 3.vnode有子节点，newVnode无，删除子节点
	return replaceVnode(vnode, newVnode) // 4. newNode有子节点，vnode无，替换即可
}
```

`updateChildren`实现比较复杂，使用`首尾四指针`进行`vnode`和`newVnode`的对比

```js
function updateChildren(el, ch, newCh) {
	// 子节点下标
	let l = 0
	let r = ch.length - 1
	let newL = 0
	let newR = newCh.length - 1

	// 子节点
	let lNode = ch[l]
	let rNode = ch[r]
	let newLNode = newCh[newL]
	let newRNode = newCh[newR]

	while (l <= r && newL <= newR) {
		if (!lNode || !rNode || !newLNode || !newRNode) {
			// 边界处理
			if (!lNode) lNode = ch[++l]
			if (!rNode) rNode = ch[--r]
			if (!newLNode) newLNode = newCh[++newL]
			if (!newRNode) newRNode = newCh[--newR]
			continue
		}

		// 新旧子节点首尾指针对比 l*newL、r*newR、l*newR、r*newL
		if (isSameNode(lNode, newLNode)) {
			patchVnode(lNode, newLNode)
			lNode = ch[++l]
			newLNode = newCh[++newL]
			continue
		}
		if (isSameNode(rNode, newRNode)) {
			patchVnode(rNode, newRNode)
			rNode = ch[--r]
			newRNode = newCh[--newR]
			continue
		}
		if (isSameNode(lNode, newRNode)) {
			patchVnode(lNode, newRNode)
			api.insertBefore(el, lNode.el, api.nextSibling(rNode.el))
			lNode = ch[++l]
			newRNode = newCh[--newR]
			continue
		}
		if (isSameNode(rNode, newLNode)) {
			patchVnode(rNode, newLNode)
			api.insertBefore(el, rNode.el, lNode.el)
			rNode = ch[--r]
			newLNode = newCh[++newL]
			continue
		}

		// 在vnode未知序列区间[l,r]生成key-idx的map表，用newLNode的key在未知序列中找到可复用的位置
		if (!keyIdxMap) keyIdxMap = getKeyIdxMap(ch, l, r) // map

		keyIdx = keyIdxMap.get(newLNode.key)
		if (!keyIdx) {
			api.insertBefore(el, createElement(newLNode), lNode.el)
		} else {
			let nodeToMove = ch[keyIdx]
			patchVnode(nodeToMove, newLNode)
			api.insertBefore(el, nodeToMove.el, lNode.el)
		}
		newLNode = newCh[++newL]
	}
}

function getKeyIdxMap(ch, l, r) {
	let map = new Map()
	while (l <= r) map.set(ch[l].key, l++)
	return map
}
```

## 参考

1. Vue2 源码
2. [15 张图，20 分钟吃透 Diff 算法核心原理](https://juejin.cn/post/6994959998283907102)
3. [Vue2 的 diff 算法--updateChildren 图文流程以及缺点](https://juejin.cn/post/7094540782517878820#heading-5)
