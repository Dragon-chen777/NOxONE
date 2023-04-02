---
title: new理解和实现
author: NOxONE
date: '2022-07-18'
categories:
- js
tags:
- js
---

new会执行当前的构造函数，并且加入一些语法糖操作：
1. 将this指向新创建的obj
2. `obj.__proto__`指向构造函数的prototype
3. 执行构造函数，若这个构造函数没有return一个对象则默认return这个obj

**Talk is cheap, show me the code**
```js
function new(constructor, ...args) {
  // let o = new Object()
  // o.__proto__ = constructor.prototype
  let o = Object.create(constructor.prototype) // 一行取代两行
  let res = constructor.apply(o, args)
  return typeof res == 'object' ? res : o
}
```
## 参考
[1. JS的new到底是干什么的？](https://zhuanlan.zhihu.com/p/23987456)

[2. new的模拟实现](https://github.com/mqyqingfeng/Blog/issues/13)
