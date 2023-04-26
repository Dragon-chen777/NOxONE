---
title: instanceof机制和实现
author: NOxONE
date: '2022-07-21'
categories:
  - js
tags:
  - js
---

## 1. instanceof 机制

1. 获取对象的`__proto__`和判断类型的`prototype`
2. 遍历对象上的所有原型直到==判断类型的`prototype`返回`true`
3. 若遍历到尽头也就是 null 了还是没结果返回`false`

```js
function instanceof(left, right) {
  for (left = left.__proto__; left; left = left.__proto__) {
    if (left === right.prototype) return true
  }
  return false
}
```

## 2. [Symblol.hasInstance]方法重写

更精确的来说`a instanceof B`实际会执行`B[Symbol.hasInstance](a)`

```js
// instanceof机制
class A {
	static [Symbol.hasInstance](instance) {
		for (instance = instance.__proto; instance; instance = instance.__proto__) {
			if (instance === this) return true
		}
		return false
	}
}
new A() instanceof A // true

// 重写
class Person {
	static [Symbol.hasInstance](instance) {
		return instance instanceof Array
	}
}

;[1, 2, 3] instanceof Person // true
new Person() instanceof Person // false
```
