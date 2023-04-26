---
title: Array原生方法实现
author: NOxONE
date: '2023-02-02'
categories:
  - js
tags:
  - js
---

## 1. 数组迭代

```js
function map(arr, cb) {
	if (!Array.isArray(arr) || typeof cb != 'function') return []

	let ret = []
	for (let i = 0; i < arr.length; i++) {
		ret.push(cb(arr[i], i, arr))
	}
	return ret
	// 对于forEach这里为一行代码：for (let i = 0; i < arr.length; i++) cb(arr[i], i, arr)
}

function filter(arr, cb) {
	if (!Array.isArray(arr) || typeof cb != 'function') return []

	let ret = []
	for (let i = 0; i < arr.length; i++) {
		cb(arr[i], i, arr) && ret.push(arr[i])
	}
	return ret
	// 对于find这里为一行代码：for (let i = 0; i < arr.length; i++) if(cb(arr[i], i, arr)) return arr[i]
}

function every(arr, cb) {
	if (!Array.isArray(arr) || typeof cb != 'function') return false

	for (let i = 0; i < arr.length; i++) if (!cb(arr[i], i, arr)) return false
	return true

	//** 对于some这里为两行代码：
	for (let i = 0; i < arr.length; i++) if (cb(arr[i], i, arr)) return true
	return false
	//**
}

function reduce(arr, cb, init) {
	if (!Array.isArray(arr) || typeof cb != 'function') return undefined

	let ret = init || arr[0]
	for (let i = init ? 0 : 1; i < arr.length; i++) ret = cb(ret, arr[i], i, arr)
	return ret
}
```

待更新
