---
title: JS类型判断
author: NOxONE
date: '2022-07-18'
categories:
  - js
tags:
  - js
---

**Talk is cheap, show me the code**

```js
let class2Type = {}
let types = ['Boolean', 'Number', 'String', 'Object', 'Function', 'Array', 'Date', 'RegExp']
for (let type of types) class2Type[`[object ${type}]`] = type.toLowerCase()

function type(obj) {
	if (obj == null) return obj + '' // undefine、null

	if (typeof obj == 'object' || typeof obj == 'function') return class2Type[Object.prototype.toString.call(obj)]
	return typeof obj
}
```

## 参考

[1.JS 类型判断上](https://github.com/mqyqingfeng/Blog/issues/28)

[2.JS 类型判断下](https://github.com/mqyqingfeng/Blog/issues/30)
