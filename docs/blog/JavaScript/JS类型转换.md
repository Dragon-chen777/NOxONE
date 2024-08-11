---
title: JS类型转换
author: NOxONE
date: '2020-07-18'
categories:
  - js
tags:
  - js
---

`ToPrimitive`：数据类型转化为`原始值`

```js
function ToPrimitive(target, type) {
	// 将目标对象转换为指定类型原始值[[primitive]]
	if (target == [[primitive]]) return target

	if (type == String) {
		if (target.toString() == [[primitive]]) return target.toString()
		if (target.valueOf() == [[primitive]]) return target.valueOf()
	}

	if (type == Number) {
		if (target.valueOf() == [[primitive]]) return target.valueOf() // object.valueOf()通常返回自身
		if (target.toString() == [[primitive]]) return target.toString()
	} else {
		// type未传入时优先valueOf()
		if (target.valueOf() == [[primitive]]) return target.valueOf()
		if (target.toString() == [[primitive]]) return target.toString()
	}
}
```

`toString`和`toNumber`：数据类型转化为`String` or `Number`

```js
toString(target) == ToPrimitive(target, String)
toNumber(target) == ToPrimitive(target, Number)
```

### +操作

计算 `val1 + val2`:

```js
if (typeof ToPrimitive(val1) == 'string' || typeof ToPrimitive(val2) == 'string') return toString(val1) + toString(val2)
else return toNumber(val1) + toNumber(val2)
```

### ==判断

判断 `x == y`

```js
let typeX = typeof x,
	typeY = typeof y

// 类型相同
if (typeX === typeY) {
	if (x === null || x === undefined) return true
	if (typeX === 'String' || typeX === 'Boolean' || typeX === 'Object') return x === y
	if (typeX === 'Number') {
		if (isNaN(x) || isNaN(y)) return false // 众所周知NaN不等于任何，包括自身
		if ((x === +0 && y === -0) || (x === -0 && y === +0)) return true
		return x === y
	}
}

// 类型不同
// 1.众所周知 null == undefined
if ((x === null && y === undefined) || (x === undefined && null)) return true

// 2.二者有一个为number，一个为string
if (typeX === 'Number' && typeY === 'String') return x == toNumber(y)
if (typeX === 'String' && typeY === 'Number') return y == toNumber(x)

// 3.二者有一个为boolean
if (typeX === 'Boolean') toNumber(x) == y
if (typeY === 'Boolean') toNumber(y) == x

// 4.二者有一个为Object，另一个为number或string
if (typeX === 'Object') ToPrimitive(x) == y
if (typeY === 'Object') ToPrimitive(y) == x
```

## 参考

[1.JS 类型转换上](https://github.com/mqyqingfeng/Blog/issues/159)

[2.JS 类型转换下](https://github.com/mqyqingfeng/Blog/issues/160)
