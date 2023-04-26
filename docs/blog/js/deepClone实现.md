---
title: deepClone实现
author: NOxONE
date: '2022-07-21'
categories:
  - js
tags:
  - js
---

对于数组和对象，递归处理即可

```js
function deepClone(o) {
	if (typeof o != 'object' || o == null) return o // 简单数据类型、null、undefined

	let ret = Array.isArray(o) ? [] : {}
	for (let key in o) ret[key] = deepClone(o[key])
	return ret
}
```
