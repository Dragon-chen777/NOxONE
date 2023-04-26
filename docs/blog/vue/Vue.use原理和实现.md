---
title: Vue.use原理及实现
author: NOxONE
date: '2023-03-20'
categories:
  - vue
tags:
  - vue
---

## 1. 用法

[引用官方说法](https://cn.vuejs.org/api/application.html#app-use)

```js
Vue.use(plugin, ...args) : this
```

> 第一个参数应是插件本身，可选的第二个参数是要传递给插件的选项。
> 插件可以是一个带  `install()`  方法的对象，亦或直接是一个将被用作  `install()`  方法的函数。插件选项 (`app.use()`  的第二个参数) 将会传递给插件的  `install()`  方法。
> 若  `app.use()`  对同一个插件多次调用，该插件只会被安装一次

谈谈我的理解：

1. 方法第一个参数为`plugin`对象，剩余参数传入给`plugin`的`install`方法调用
2. `plugin`对象内部需定义一个`install`方法，第一个参数为`Vue`，剩余参数由上边传递过来
3. 若`plugin`本身定义为为一个函数，那么将被作为`install`方法调用

```js
// 注册全局toster组件
import Toster from '@/components/toster.vue'

let gTosterPlugin = {
	install(Vue) {
		Vue.components('Toster', Toster)
	},
}
Vue.use(gTosterPlugin) // 会调用gTosterPlugin.install方法并将this（即Vue）作为第一个参数
```

## 2. 实现

**Talk is cheap, show me the code**

```js
Vue.use = function (plugin) {
	let installedPlugins = this._installledPlugins || (this._installledPlugins = []) // 已注册plugin列表
	if (installedPlugins.includes(plugin)) return this // 已注册
	let args = [...arguments].slice(1) // 有传入参数的情况：Vue.use(plugin, arg1, arg2)
	args.unshift(this) // [Vue, arg1, arg2]

	if (typeof plugin.install == 'function') plugin.install.apply(plugin, args) // install(Vue, arg1, arg2)
	else if (typeof plugin == 'function') plugin.apply(null, args) // plugin本身作为install函数调用
	installedPlugins.push(plugin) // 添加到已注册插件列表，避免重复注册
	return this
}
```
