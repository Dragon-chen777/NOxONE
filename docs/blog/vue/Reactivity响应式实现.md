---
title: Reactivity响应式简单实现
author: NOxONE
date: '2022-07-23'
categories:
  - vue
tags:
  - vue
---

最简单的响应式主要只包含三个元素：`Observer`、`Dep`、`Watcher`

- `Observer`：递归地监听对象上的所有属性，在属性值改变的时候，触发相应的`watcher`
- `Watcher`：观察者，当监听的数据值修改时，执行响应的回调函数（`Vue`里面的更新模板内容）
- `Dep`：连接`Observer`和`Watcher`的桥梁，每一个`Observer`对应一个`Dep`，它内部维护一个数组，保存与该`Observer`相关的`Watcher`

```js
function Observer(target, key, value) {
	let dep = new Dep()
	if (Object.prototype.toString.call(value) == '[object Object]') Reflect.ownKeys(value).forEach((key) => new Observer(value, key, value[key]))
	Object.defineProperty(target, key, {
		enumerable: true,
		configurable: false,
		get() {
			Dep.target && dep.addSub(Dep.target) // 订阅
			return value
		},
		set(newVal) {
			dep.notify() // 通知
			value = newVal
		},
	})
}
class Dep {
	constructor() {
		this.subs = [] // watchers数组
	}
	addSub(watcher) {
		!this.subs.includes(watcher) && this.subs.push(watcher) // 避免重复收集
	}
	notify() {
		this.subs.forEach((watcher) => watcher.update())
	}
}
class Watcher {
	// 观察者模式
	constructor(renderCb) {
		this.renderCb = renderCb
	}
	update() {
		Dep.target = this
		this.renderCb()
		Dep.target = null
	}
}
```

官方原理图如下
![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/77ed9c007c5548baad8aa0715e009dde~tplv-k3u1fbpfcp-watermark.image?)

```js
// 测试
let app = document.getElementById('app')
let vm = {
	data: {
		id: 1007,
		goods: { price: 1 },
	},
}
let ob = new Observer(vm, 'data', vm.data)
let watcher = new Watcher(() => (app.innerHTML = vm.data.goods.price))
watcher.update()

let btn = document.getElementById('btn')
btn.onclick = () => vm.data.goods.price++
```

对照测试示例如下
![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4d39bb5b13584152827835184b5c56c6~tplv-k3u1fbpfcp-watermark.image?)
