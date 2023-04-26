---
title: Promise实现
author: NOxONE
date: '2022-07-19'
categories:
  - js
tags:
  - js
---

**talk is cheap, show me the code**

```js
// 定义三种状态
const PENDDING = 'pendding'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'
// 处理上个promise返回值
function resolvePromise(promise, value, res, rej) {
	if (promise === value) {
		return rej(new Error('禁止套娃'))
	}
	if (value instanceof Promise) {
		// 异步
		return value.then(res, rej)
	} else {
		// 同步时，下一个promise.status = 'fulfilled'
		res(value)
	}
}
// 执行栈操作
function stackRun(stack, value) {
	while (stack.length) stack.shift()(value)
}
class Promise {
	status = PENDDING
	value = null
	reason = null
	resolveStack = []
	rejectStack = []

	constructor(executor) {
		try {
			executor(this.resolve.bind(this), this.reject.bind(this))
		} catch (e) {
			this.reject.call(this, e)
		}
	}

	resolve(value) {
		if (this.status === PENDDING) {
			this.status = FULFILLED
			this.value = value
			stackRun(this.resolveStack, value)
		}
	}
	reject(reason) {
		if (this.status === PENDDING) {
			this.status = REJECTED
			this.reason = reason
			stackRun(this.rejectStack, reason)
		}
	}
	/**
	 * 通过两个回调拿到上个promise的结果
	 * 方法本身会返回一个新的Promise对象
	 * 如果返回值是promise对象，返回值为成功，新promise就是成功
	 * 如果返回值是promise对象，返回值为失败，新promise就是失败
	 * 如果返回值非promise对象，新promise对象就是成功，值为此返回值
	 */
	then(onRes, onRej) {
		onRes = typeof onRes === 'function' ? onRes : (v) => v // 不传回调默认传递结果下去
		onRej = typeof onRej === 'function' ? onRej : (e) => e
		let self = this
		const promise2 = new Promise((resolve2, reject2) => {
			console.log(this === self)
			// true 注意，由于使用箭头函数，promise内的this都执向上个promise，
			// 因此通过then可以拿到上个promise内部的value，并且通过在then中传入回调函数对value作一些处理，
			// 若上个promise为异步操作，那么会将回调函数存入栈中，等上个promise异步操作完毕之后及时回调
			const onResCb = () => {
				queueMicrotask(() => {
					// 开启微任务，目的是为了在promise2初始化完毕后再拿到它，不然报错
					try {
						let value2 = onRes(this.value)
						resolvePromise(promise2, value2, resolve2, reject2)
					} catch (e) {
						reject2(e)
					}
				})
			}
			const onRejCb = () => {
				queueMicrotask(() => {
					try {
						let reason2 = onRej(this.reason)
						resolvePromise(promise2, reason2, resolve2, reject2)
					} catch (e) {
						reject2(e)
					}
				})
			}
			if (this.status === PENDDING) {
				this.resolveStack.push(onResCb)
				this.rejectStack.push(onRejCb)
			}
			if (this.status === FULFILLED) onResCb()
			if (this.status === REJECTED) onRejCb()
		})
		return promise2
	}
	static resolve(param) {
		// Promise.resolve().then(()=>{...})
		if (param instanceof Promise) return param
		else queueMicrotask(() => new Promise((res) => res(param))) // Promise.resolve()会在返回的Promise外部再包裹一层微任务
	}
	static reject(reason) {
		queueMicrotask(() => new Promise((res, rej) => rej(reason)))
	}
	/**
	 * 接收一个Promise数组，数组中如有非Promise项，则此项当做成功
	 * 如果所有Promise都成功，则返回成功结果数组
	 * 如果有一个Promise失败，则返回这个失败结果
	 */
	static all(promises) {
		return new Promise((resolve, reject) => {
			promises.forEach((promise, index) => {
				// 等所有的promise.resolve结果后将结果按序装入results数组中通过下个promise.resolve传播
				if (promise instanceof Promise)
					promise.then(
						(res) => addData(res, index),
						(e) => reject(e),
					)
				else addData(promise, index)
			})
			let results = []
			let count = 0
			function addData(value, index) {
				results[index] = value
				count++
				if (count === promises.length) resolve(results)
			}
		})
	}
	/**
	 * 接收一个Promise数组，数组中如有非Promise项，则此项当做成功
	 * 返回Promise最快的项，无论成功失败
	 */
	static race(promises) {
		return new Promise((resolve, reject) => {
			promises.forEach((promise, index) => {
				if (promise instanceof Promise)
					promise.then(
						(res) => resolve(res),
						(e) => reject(e),
					)
				else resolve(promise)
			})
		})
	}
	/**
	 * 接收一个Promise数组，数组中如有非Promise项，则此项当做成功
	 * 把每一个Promise的结果，集合成数组，返回
	 */
	static allSettled(promises) {
		return new Promise((resolve, reject) => {
			promises.forEach((promise, index) => {
				;(promise instanceof Promise &&
					promise.then(
						(res) => addData('fulfilled', res, index),
						(e) => addData('rejected', e, index),
					)) ||
					addData('fulfilled', promise, index)
			})
			let results = []
			let count = 0
			function addData(status, value, index) {
				results[index] = { status, value }
				count++
				count === promises.length && resolve(results)
			}
		})
	}
	/**
	 * 接收一个Promise数组，数组中如有非Promise项，则此项当做成功
	 * 如果有一个Promise成功，则返回这个成功结果
	 * 如果所有Promise都失败，则报错
	 */
	static any(promises) {
		return new Promise((resolve, reject) => {
			let count = 0
			promises.forEach((promise) => {
				promise.then(
					(res) => resolve(res),
					(e) => {
						count++
						count === promises.length && reject(new Error('全部GG'))
					},
				)
			})
		})
	}
}
```

### 参考

[1.从一道让我失眠的 Promise 面试题开始，深入分析 Promise 实现细节](https://juejin.cn/post/6945319439772434469)

[2.Promises/A+规范（中文翻译）](https://blog.csdn.net/qq_41800366/article/details/120788569)

[3.看了就会，手写 Promise 原理，最通俗易懂的版本！！！](https://juejin.cn/post/6994594642280857630)
