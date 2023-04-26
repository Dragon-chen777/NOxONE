---
title: Vue.nextTick用法和实现
author: NOxONE
date: '2023-03-21'
categories:
  - vue
tags:
  - vue
---

## 1. 用法

[引用我认为最官方的官方说法](https://cn.vuejs.org/api/general.html#nexttick)

```js
Vue.nextTick(callback?: () => void): Promise<void>
```

> 当你在 Vue 中更改响应式状态时，最终的 DOM 更新并不是同步生效的，而是由 Vue 将它们缓存在一个队列中，直到下一个“tick”才一起执行。这样是为了确保每个组件无论发生多少状态改变，都仅执行一次更新。
> `nextTick()`  可以在状态改变后立即使用，以等待 DOM 更新完成。你可以传递一个回调函数作为参数，或者 await 返回的 Promise。

使用示例

```html
<template>
	<button id="counter" @click="increment">{{ count }}</button>
</template>
<script>
	export default {
	  data: () => ({ count: 0 })
	  methods: {
	    async increment() {
	      this.count++
	      console.log(document.getElementById('counter').textContent) // DOM还未更新 0
	      await nextTick(()=>console.log('DOM此时已挂载，在数据更新前作一些操作'))
	      console.log(document.getElementById('counter').textContent) // DOM已更新 1
	    }
	  }
	}
</script>
```

## 2. 实现

**“ Talk is cheap, show me the code ”**

```js
Vue.nextTick = (() => {
	function createTimerFunc() {
		// 在页面重排重绘之后执行
		// Promise.resolve.then -> MutationObserver -> setImmediate -> setTimeout
		// 这些都是可以异步回调，异步队列里的任务是在同步任务执行完毕->浏览器重排重绘 之后才执行
		if (Promise) return () => Promise.resolve.then(flushCallbacks) // 满足绝大多数浏览器

		// 以下是兼容处理
		if (MutationObserver) {
			// 在监听的DOM改变后会执行回调
			let counter = 1
			let observer = new MutationObserver(flushCallbacks)
			let textNode = document.createTextNode(String(counter)) // 创建监听的文本节点
			observer.observe(textNode, { characterData: true })
			return () => {
				counter ^= 1
				textNode.data = String(counter)
			}
		}

		if (setImmediate) return () => setImmediate(flushCallbacks)
		if (setTimeout) return () => setTimeout(flushCallbacks)
	}
	let timerFunc = createTimerFunc()

	let callbacks = []
	let pending = false
	function flushCallbacks() {
		// 从回调队列里弹出回调函数，逐个执行
		pending = false
		while (callbacks.length) callbacks.shift()()
	}

	// 主程序
	return (cb) => {
		// 原理：在注册的异步回调函数被执行之前，往回调队列callbacks里push回调函数
		callbacks.push(cb)
		if (pending) return
		pending = true
		timerFunc()
	}
})()
```
