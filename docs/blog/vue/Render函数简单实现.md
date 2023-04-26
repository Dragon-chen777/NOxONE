---
title: Render函数简单实现
author: NOxONE
date: '2023-02-02'
categories:
  - vue
tags:
  - vue
---

**“ Talk is cheap, show me the code”**

```js
// ast语法树
let ast = {
	tag: 'div',
	attr: {
		class: 'banner',
		id: 'banner',
	},
	text: '商品Banner',
	children: [
		{
			tag: 'div',
			attr: {
				class: 'bannerItem',
				key: '101',
			},
			text: '图片1',
			children: [
				{
					tag: 'img',
					attr: {
						class: 'bannerCover',
						src: 'https://www.baidu.com/imgs/1.png',
					},
				},
			],
		},
		{
			tag: 'div',
			attr: {
				class: 'bannerItem',
				key: '102',
			},
			text: '图片2',
			children: [
				{
					tag: 'img',
					attr: {
						class: 'bannerCover',
						src: 'https://www.baidu.com/imgs/1.png',
					},
				},
			],
		},
	],
}

function render(root, ast) {
	let { tag, attr, text, children } = ast
	let ele = document.createElement(tag)
	for (let key in attr) ele.setAttribute(key, attr[key])
	ele.innerText = text
	children && children.forEach((item) => render(ele, item))
	root.appendChild(ele)
}

let root = document.getElementById('app')
render(root, ast)
```
