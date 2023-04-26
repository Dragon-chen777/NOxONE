---
title: Curry函数实现
author: NOxONE
date: '2022-07-20'
categories:
  - js
tags:
  - js
---

柯里化是一种转换，让 `f(a,b,c)` 能以 `f(a)(b)(c)`或`f(a,b)(c)` 的形式进行调用

实现思路：保持原函数可以被正常调用，并且如果参数数量不足，则返回`偏函数`

```js
function curry(fn, ...args) {
	return args.length >= fn.length ? fn(...args) : (...args2) => curry(fn, ...args, ...args2)
}

// 验证
function add(a, b, c, d) {
	console.log(a + b + c + d)
}
let addCurry = curry(add)

addCurry(1)(2, 3)(4) // 10
addCurry(1, 2, 3, 4) // 10
addCurry(1, 2, 3, 4, 5) // 10
```

### 参考

[1.柯里化](https://zh.javascript.info/currying-partials)
