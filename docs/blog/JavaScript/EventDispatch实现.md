---
title: EventDispatch实现
author: NOxONE
date: '2023-03-25'
categories:
  - js
tags:
  - js
---

## 1. EventDispatch

`EventDispatch`即事件调度，实际上应用了`订阅发布`模式，有四个功能：

1. 添加订阅者：`addEventListener(event, listener)`
2. 删除订阅者：`removeEventListener(event, listener)`
3. 调用事件：`dispatchEvent(event)`
4. 查询对象是否订阅了事件：`hasEventListener(event, listener)`

## 2. 实现代码

**talk is cheap, show me the code**

```js
class EventDispatcher {
	constructor() {
		this.listeners = {} // 事件订阅控制器
	}
	addEventListener(event, listener) {
		let listeners = this.listeners
		if (!listeners[event]) listeners[event] = [] // 建立事件订阅队列

		if (!listeners[event].includes(listener)) listeners[event].push(listener) // 向队列添加事件订阅者
	}
	removeEventListener(event, listener) {
		if (!this.listeners[event]) return
		let listenerQueue = this.listeners[event]

		let idx = listenerQueue.indexOf(listener)
		idx > -1 && listenerQueue.splice(idx, 1) // 移除事件订阅者
	}
	dispatchEvent(event) {
		if (!this.listeners[event]) return
		let listenerQueue = this.listeners[event]

		for (let listener of listenerQueue) listener() // 通知事件的每一个订阅者
	}
	hasEventListener(event, listener) {
		let listeners = this.listeners

		return listeners[event] && listeners[event].includes(listener)
	}
}

// test
let eventDispatcher = new EventDispatcher()
let cb1 = () => console.log(1)
let cb2 = () => console.log(2)
eventDispatcher.addEventListener('event1', cb1)
eventDispatcher.addEventListener('event1', cb2)

eventDispatcher.events // { event1: [ cb1, cb2 ] }
eventDispatcher.dispatchEvent('event1') // 1 2
eventDispatcher.removeEventListener('event1', cb1)
eventDispatcher.hasEventListener('event1', cb1) // false
eventDispatcher.dispatchEvent('event1') // 2
```

## 参考

[three/core/EventDispatcher.js](https://github.com/mrdoob/three.js/blob/master/src/core/EventDispatcher.js)
