---
title: 伪代码理解EventLoop
author: NOxONE
date: '2023-03-31'
categories:
  - js
tags:
  - js
---

1. `js主线程`执行遇到异步代码将其推入事件触发线程维护的异步回调队列中（分宏微）
2. js 主线程执行执行完毕，`渲染线程`执行重新渲染 dom（包括重排重绘）
3. 渲染线程执行完毕，执行`事件触发线程`，将异步回调队列中任务取出依次执行，具体过程为：先清空微任务队列，然后每从宏任务队列中取出一个宏任务执行后又去清空微任务队列，直到宏任务队列为空，又
4. 返回执行 js 主线程，形成`EventLoop`

```js
function runJs() {
	let syncStack = [] // 同步执行栈
	let asyncMicroQueue = [] // 异步微任务队列
	let asyncMacroQueue = [] // 异步宏任务队列

	function runSyncStack() {
		// 主线程
		while (syncStack.length) syncStack.pop()() // 清空同步执行栈
		reRender() // 重新渲染
		runAsyncQueue() // 从任务队列取出异步任务执行
	}

	function runAsyncQueue() {
		// 任务队列
		while (asyncMicroQueue.length) asyncMicroQueue.shift()() // 先清空微任务队列

		while (asyncMacroQueue.length) {
			// 每执行一个异步宏，就要清空一次微任务队列（因为有可能异步宏会往微任务队列push异步微）
			asyncMacroQueue.shift()()
			while (asyncMicroQueue.length) asyncMicroQueue.shift()()
		}
		runSyncStack() // 回到js主线程
	}
	runSyncStack()
}
```

解析栈=>同步调用栈-->异步回调队列

```js
let parseStask = []
let syncStack = []
let asyncMicroQueue = []
let asyncMacroQueue = []
```
