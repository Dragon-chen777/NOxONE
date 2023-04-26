---
title: call、apply、bind实现
author: NOxONE
date: '2022-07-20'
categories:
  - js
tags:
  - js
---

## 1. call

```js
// 将函数设为对象的属性 -> 执行该函数 -> 删除该函数 --> 返回函数执行返回值
obj.f = fn
let ret = obj.f()
delele obj.f
return ret
```

```js
function call(fn, context, ...args) {
	context = context || window // 默认为window
	context.f = fn
	let ret = context.f(...args)
	delete context.f
	return ret
}
```

## 2. apply

```
和call差不多，只是第三个参数是数组时忽略其后的参数，遍历传入即可
```

```js
function apply(fn, context, ...args) {
	context = context || window
	context.f = fn
	if (Array.isArray(args[0])) args = args[0] // 多出这一行
	let ret = context.f(...args)
	delete context.f
	return ret
}
```

## 3. bind 实现

```
通过闭包的方式，存储context和args，返回的函数命名为fBind
```

```js
function bind(fn, context, ...args) {
	context = context || window
	return function fBind(...args2) {
		if (this instanceof fBind) return new fn(...args, ...args2)
		return fn.apply(context, [...args, ...args2])
	}
}
```
