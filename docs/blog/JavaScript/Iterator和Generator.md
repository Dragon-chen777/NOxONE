---
title: Iterator和Generator
author: NOxONE
date: '2022-07-20'
categories:
  - js
tags:
  - js
---

## 1.Iterator

#### 1.1 什么是 Iterator

`Iterator`即`迭代器`，它定义了对象的遍历机制。

它有一个`next()`方法，在遍历时会调用`iterator.next()`，会返回结果`{value,done}`：

- `value`为本轮迭代拿到的值
- `done`为布尔值，标志是否遍历结束，从而控制遍历操作

定义对象的迭代器也很简单：为其定义`[Symbol.iterator]`方法从中返回一个含有`next`方法的迭代器对象即可

不多 bb，来看代码：

```js
// 定义obj的[Symbol.iterator]
let obj = {
	properties: [
		['id', 107],
		['age', 18],
	],

	[Symbol.iterator]() {
		let curIndex = 0 // 迭代器指针，每轮迭代结束都会偏移，指示下一轮迭代索引
		let self = this
		return {
			// 返回一个Iterator对象，含有一个next方法
			next() {
				let done = curIndex > self.properties.length - 1 // 是否遍历结束
				return { value: self.properties[curIndex++], done } // curIndex++控制迭代器指针偏移一位
			},
		}
	},
}
```

定义了 Iterator 后便可以通过`for...of`来进行遍历，其遍历过程伪代码如下:

```js
for (let item of obj) {
	// ...
}

// 等价于
if ([Symbol.iterator] in obj) {
	// 定义了迭代器
	let iterator = obj[Symbol.iterator]() // 获取obj的迭代器
	for (let res = iterator.next(); !res.done; res = iterator.next()) {
		item = res.value // 将value赋给item
		// ...
	}
} else throw new Error('obj is not iterable') // 不可迭代

// 执行一下看看
for (let item of obj) console.log(item)
// ['id',107]
// ['age',18]
```

#### 1.2 预置 Iterator 的数据类型

很多数据类型都预置了 Iterator，称其为`iterable`，如下数据类型预置了 Iterator:

- Array
- Map
- Set
- String(唯一的简单数据类型)
- TypedArray
- Arguments
- NodeList

将以上数据类型都作一遍`for...of`，以及手动获取 iterator 实现迭代看看输出的结果

```js
let { log } = console

// 1.Array
let arr = [1, 2]
for (let item of arr) {
	log(item) // 1、2
}

let iterator = arr[Symbol.iterator]()
log(iterator.next()) // {value: 1, done: false}
log(iterator.next()) // {value: 2, done: false}
log(iterator.next()) // {value: undefined, done: true}

// 2.Map
let map = new Map()
map.set('id', 107)
map.set('age', 18)

for (let item of map) {
	log(item) // ['id', 107]、 ['age', 18]
}
for (let [key, val] of map) {
	log(key, val) // 'id' 107 , 'age' 18
}

iterator = map[Symbol.iterator]()
log(iterator.next()) // {value: ["id",107],done: false}
log(iterator.next()) // {value: ["age",18],done: false}
log(iterator.next()) // {value: undefined, done: true}

// 3.Set
let set = new Set([1, 2]) // 和Array一样

// 4.String
let string = 'ab'
for (let item of string) {
	log(item) // a、b
}

iterator = string[Symbol.iterator]()
log(iterator.next()) // {value: 'a', done: false}
log(iterator.next()) // {value: 'b', done: false}
log(iterator.next()) // {value: undefined, done: true}

// 5.Arguments
fn(1, 2)
function fn() {
	for (let item of arguments) {
		log(item) // 1、2
	}

	iterator = arguments[Symbol.iterator]()
	log(iterator.next()) // {value: 1, done: false}
	log(iterator.next()) // {value: 2, done:false}
	log(iterator.next()) // {value: undefined, done: true}
}

// 6.Nodelist
/** 
<ul>
  <li>1</li>
  <li>2</li>
</ul>
*/
let lis = document.getElementsByTagName('li')
for (let item of lis) {
	console.log(item) // <li>1</li>、<li>2</li>
}
iterator = lis[Symbol.iterator]()
log(iterator.next()) // {value: li, done: false}
log(iterator.next()) // {value: li, done: false}
log(iterator.next()) // {value: undefined, done: true}
```

#### 1.3 调用 iterator 的场合

处理之前介绍的`for...of`会调用 iterator，在其他场合也会`隐式调用`（本质为语法糖）

##### 1.3.1 解购赋值

```js
let set = new Set([1, 2, 3])
let [x, y] = set

// 等价于
let iterator = set[Symbol.iterator]()
let x = iterator.next().value
let y = iterator.next().value
```

##### 1.3.2 ...操作符

```js
let str = 'abc'
let strArr = [..str]

// 等价于
let iterator = str[Symbol.iterator]()
let strArr = []
let res = iterator.next()
while(!res.done){
  strArr.push(res.value)
  res = iterator.next()
}

let arr = [1,2,3]
let [x,...y] = arr

// 等价于
let iterator = arr[Symbol.iterator]()
let x = iterator.next().value
let y = []
let res = iterator.next()
while(!res.done){
  y.push(res.value)
  res = iterator.next()
}
```

##### 1.3.3 yield\*

在 generator 函数中使用`yiled*`加上`iterable`数据类型可以将其作为迭代器遍历

```js
function* f() {
	yield* [1, 2, 3] // 等价于 return [1,2,3][Symbol.interator]()
}
let gen = f()
gen.next() // 1
gen.next() // 2
gen.next() // 3
```

## 2.Generator

#### 2.1 什么是 Generator?

`Generator`是一个控制`Iterator`的函数，称为`生成器`，可以随时`暂停`，随时`恢复`，它是`[Symbol.iterator]`的一个语法糖，执行后会自动返回一个`Iterator`，只是它不用依赖指定的对象

Genenrator 函数有两个特点：

- function 和函数名之间有一个`*` ，形如`function* f(){...}`、`function * f(){...}`、`function *f(){...}`
- 内部使用`yield`指定每轮迭代返回的值

不多 bb，上代码

```js
function* f() {
	yield 1
	yield 2
	yield 3
}
let iterator = f()
iterator.next() // {value:1,done:false}
iterator.next() // {value:2,done:false}
iterator.next() // {value:3,done:false}
iterator.next() // {value:undefined,done:true}

// 相当于
function f() {
	return {
		values: [1, 2, 3],
		[Symbol.interator]() {
			// Interator
			let curIdx = 0 // 当前指针
			let self = this
			return {
				// 迭代器对象
				next() {
					let done = curIdx > self.values.length - 1
					return { value: self.values[curIdx++], done }
				},
			}
		},
	}[Symbol.interator]()
}
```

#### 2.2 Generator 函数定义方式

Generator 函数定义比较特殊，必须携带`*`，以下是所有定义方式

```js
// 具名函数
function* f(){ ... }
function * f(){ ... }
function *f(){ ... }
// 匿名函数
let f = function* (){ ... }
let f = function * (){ ... }
let f = function *(){ ... }
// 对象方法
let obj={
  *f(){ ... },
  * f(){ ... },
  f: function* (){ ... },
  f: function * (){ ... },
  f: function *(){ ... },
}
// generator不能为箭头函数，会抛错 SyntaxError
```

#### 2.3 Generator 内部`yield`与`return`

`yiled`语句表示停顿，返回其后的值作为`value`，`done`为`false`,在下一轮迭代还会执行其后的语句直到遇到下一个`yiled`或`return`

`return`语句表示结束，会返回其后的值作为`value`，并将`done`设置为`true`，随后下一轮迭代不再执行后面的语句，一直返回`{value:undefined, done:true}`

不多 bb，来看看代码:

```js
function* f() {
	let a = 2,
		b = 4
	yield a * b // {value:8,done:false}
	b = 5
	yield a * b // {value:10,done:false}
	a = 1
	return a * b // {value:5,done:true}
	// 之后以下代码不再执行，调用next()返回的都是{value:undefined,done:true}
	a = 0
	yield a * b
}

let iterator = f()
iterator.next()
iterator.next()
iterator.next()
iterator.next()
iterator.next()
```

流程是这样的:

```js
next--> 执行代码1 --> yield返回value,done为false -->
next --> 执行代码2 --> yield返回value，done为false-->
next --> 执行最后的代码 --> return返回value，done为true -->
...
next--> 都返回{value:undefined,done:true}
```

`yield`还可以实现`委托迭代`，其后调用另一个 generator 函数或一个`iterable`数据的迭代器，通过这个方式可以实现多个生成器的`串联`
不多 bb，上代码:

```js
function* f(i) {
	yield ++i // 2
	yield* f2(i) // 委托迭代
}
function* f2(i) {
	yield ++i // 3
	yield ++i // 4
	yield* [5, 6] // 委托迭代 5 6
}

let iterator = f(1)
iterator.next()
iterator.next()
iterator.next()
iterator.next()
iterator.next()
```

#### 2.4 Generator 与`[Symbol.iterator]`的联系

Generator 函数与[Symbol.iterator]函数都返回`Iterator`，但是有区别的：前者返回的 iterator 是`iterable`，而后者不行

```js
// Generator
function * generator(arr) {
  for (let i = 0,len=arr.length; i<len;i++)  yield arr[i]
}
let iterator1 = generator([1, 2])
for (let g of iterator1) {
  console.log(g) // 1 2
}

// [Symbol.iterator]
let arr = [1,2]

let iterator2 = arr[Symbol.iterator]()
for(let item of iterator2){ .... } // iterator2 is not iteratble
```

两者也可以关联起来：使用 Generator 函数来定义[Symbol.iterator]

```js
let obj = {
	[Symbol.iterator]: function* () {
		yield 1
		yield 2
		yield 3
	},
}
for (let item of obj) {
	alert(item)
} // 1 2 3
```

#### 2.5 Generator 函数高级用法

##### 2.5.1 控制遍历过程

```js
function *f(arr){
  arr.forEach(item=>{
    yield item instanceof Array ? *f(item) : item
  })
}
let arr = [1,[[2,3],4],[5,6]]
for(let item of f(arr)){ alert(item) } // 1 2 3 4 5 6

// 数组扁平化
function fn(arr){
  let res = []

  let interator = (function *f(arr){
    arr.forEach(item=>{
      yield item instanceof Array ? *f(item) : item
    })
  })(arr);

  for(let item of interator) res.push(item)

  return res
}
```

##### 2.5.2 `return`、`throw`、`next`

iterator 的`return`方法强制指定迭代结束，若传入参数则作为结果的`value`,否则为`{value:undefined,done:true}`

```js
function* f() {
	yield 1
	yield 2
	yield 3
}
let gen = f()
gen.next() // 1
gen.return(107) // {value:107,done:true}
gen.next() // {value:undefined,done:true}
```

`throw`方法强制抛错，同时迭代结束

```js
let gen2 = f()
gen2.next() // 1
gen2.throw('err') // 抛错 err
gen2.next() // {value:undefined,done:true}
```

在 generator 函数中`yield`这一代码行若有`赋值操作`，那么会先暂停返回其后的值，等下一轮 next 迭代开始时才会进行赋值操作，
而`next()`方法可以传入一个参数作为上一轮`yield`暂停时的返回值，不传默认为上一轮`yield`返回值

```js
function* f(x) {
	let y = 2 * (yield x + 1) // 先yield返回，等下一轮next后才会给y赋值，由于next(12)，故y=2*12=24
	let z = yield y / 3 // 下一轮next赋值，由于next(),故z=24/3=8
	return x + y + z // 5+24+8
}
let b = f(5)
b.next() // { value:6, done:false }
b.next(12) // { value:8, done:false }   将上次yield返回值变为12,故y = 24
b.next() // { value:37, done:true } // 5+24+8 = 42
```

##### 2.5.3 实现斐波那契数列

```js
function* fibonacci(pre = 0, cur = 1, max = Infinity) {
	while (cur <= max) {
		yield cur
		cur = cur + pre
		pre = cur - pre
	}
}
let iterator = fibonacci()
iterator.next().value // 1
iterator.next().value // 1
iterator.next().value // 2
iterator.next().value // 3
iterator.next().value // 5
```

##### 2.5.4 实现异步操作

```js
let fetch = require('node-fetch')
function* request(url) {
	let result = yield fetch(url) // 这里返回的是一个Promise
	alert(result) // Promise.then(res=>result = res.json)
}

let gen = request('https://api.github.com/users/github')
gen.next().value.then((res) => {
	gen.next(res.json()) // 回传给generator函数里的result变量
})
```

## 参考

[1.迭代器与生成器](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_Generators)

[2.Iterator 和 for...of 循环(阮一峰 ES6)](https://es6.ruanyifeng.com/#docs/iterator)
