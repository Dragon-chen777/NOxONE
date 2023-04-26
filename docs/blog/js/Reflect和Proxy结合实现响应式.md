---
title: Reflect和Proxy结合实现响应式
author: NOxONE
date: '2022-07-18'
categories:
  - js
tags:
  - js
---

`Reflect`是一个内置的对象，它提供拦截 JavaScript 操作的方法。
他可以与`Proxy`结合使用以实现和`Object.defineProperty`类似的功能，且性能更好，Vue3 正在考虑用此替换之前的方案实现响应式

```js
// target 取值目标, key 键值, 若目标对象指定了getter/setter，receiver则为getter/setter调用时的this值
Reflect.get(target, key, receiver)
Reflect.set(target, key, value, receiver)
new Proxy(proxyObj, {
	get(target, key, receiver) {
		return target[key]
	},
	set(target, key, value, receiver) {
		target[key] = value
	},
})
```

传入第三个参数`receiver`，是为了明确`this指向`，例子说明如下

```js
// 不使用receiver
let person = {
	_name: '老李子',
	get name() {
		console.log(this) // person
		return this._name // 老李子
	},
}
let personProxy = new Proxy(person, {
	get(target, key) {
		// 这里的target为person
		return Reflect.get(target, key) // 相当于target[key]
	},
})
let p1 = {
	__proto__: personProxy,
	_name: '小李子',
}

p1.name
// 读取p1.name时，p1自身无该属性，也没指定该属性的getter，故从继承personProxy查找
// 这时会触发personProxy的getter，读取target里的key，此时target为person，Reflect.get(target,key)等价于target[key]
```

```js
// 使用receiver
let person = {
	_name: '老李子',
	get name() {
		console.log(this) // p1
		return this._name // 小李子
	},
}
let personProxy = new Proxy(person, {
	get(target, key, receiver) {
		return Reflect.get(target, key, receiver)
		// 这时访问target[key]的同时，修改属性访问中的this指向传入的receiver对象即调用者p1
	},
})
let p1 = {
	__proto__: personProxy,
	_name: '小李子',
}

p1.name
```

使用 Reflect 和 Proxy 实现响应式

```js
function observe(proxyObj, getCb, setCb) {
	let handler = {
		get(target, key, receiver) {
			getCb(...[...arguments].slice(0, -1)) // 舍弃末尾传参

			if (typeof target[key] === 'object' && target[key] !== null) return new Proxy(target[key], handler) // 完美监听Object or Array
			else return Reflect.get(...arguments)
		},
		set(target, key, value, receiver) {
			setCb(...[...arguments].slice(0, -1))
			return Reflect.set(...arguments)
		},
	}
	return new Proxy(proxyObj, handler)
}

// test
let data = { a: 1 }
let p = observe(
	data,
	(t, k) => console.log(`get: ${k}=${t[k]}`),
	(t, k, v) => console.log(`set: ${k}=${v}`),
)
p.a // get: a=1
p.a = 2 // set: a=2
```

Vue3 之所以要使用`Proxy`代替原先的`Object.defineProperty`，原因在于：

1.无需再一层层递归 observe，性能更好，代码易读性加强

2.使用 Reflect 无需再区别对待 Object 和 Array

Reflect 其他用法：

```js
Reflect.apply(fn, thisArgument, args) // 代替fn.apply()
Reflect.construct(Constructor, args) // 代替 new Constructor(...args)
Reflect.defineProperty(target, key, disc) // 代替Object.defineProperty(target,key,disc)
Reflect.getOwnPropertyDescriptor(target, key) // 代替Object.getOwnPropertyDescriptor(target,key)

Reflect.has(target, key) // 判断是否有key,相当于key in target, 注意：原型上的属性也会遍历到
Reflect.ownKeys(target) // 等价于[...Object.getOwnPropertyNames(target), ...Object.getOwnPropertySymbols(target)]

Reflect.setPrototypeOf(target, prototype)
Reflect.getPrototypeOf(target)
```

## 参考

[参考一](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/get)

[参考二](https://juejin.cn/book/6844733763675488269/section/6844733763759374344?referrer=574f8d8d2e958a005fd4edac)
