---
title: JS模块化
author: NOxONE
date: '2022-07-19'
categories:
  - js
tags:
  - js
---

## 0. 模块化

模块化规范有`AMD`、`CMD`、`CommonJS`、`ESModule`，前面两者逐渐被抛弃了，现在主流的服务器端 node 使用`CommonJS`，客户端使用`ESModule`。且`ESModule`是 ES6 提出的新模块化规范，是`编译时加载`，性能较好，其他的都是`运行时加载`

## 1. AMD

AMD 即 Async Module Define,异步模块定义，采用的是异步加载模块的方式，它的具体实现是`require.js`这个库

```js
// api.js
define(()=>{
  let apiDelete = 'https://github.com/delete'
  let fn = function(){ ... }
  return { apiDelete,fn }
})
```

```js
// main.js
let fn
require(['./api.js'], (module) => {
	console.log(module.apiDelete)
	fn = module.fn
})
```

```html
<!-- index.html -->
<script data-main="./main" src="./require.js" />
<!--
  这里会加载require.js文件,并传入data-main='./main'指明main.js为入口解析，
  这时会require异步加载api.js文件，拿到define里的函数返回的模块，然后传递给require回调函数
-->
```

## 2. CMD

CMD 即 Common Module Define，`sea.js`是实现 CMD 规范的一个库

```js
// api.js
define((require, exports) => {
	exports.a = 1
})
```

## 3. CommonJS

CommonJS 主要用于 nodejs 服务器端，原生实现，无需引入其他库，是同步加载，而非异步，若要用于浏览器端需要先编译才行

```js
// api.js
let apiGet = 'https://github.com/get'
function fn(){ ... }

module.exports = { apiGet,fn }
console.log('api.js导出完毕!') // 在被引入时，会默认执行api.js文件，故也会打印这行字

// 扩展: exports === module.export，但是 exports={...}时会改变指针，导出无效，正确方式为 exports.a = 1
```

```js
// main.js
let { apiGet, fn } = require('./api.js')
```

## 4. ESModule

是 ES6 推荐的新模块化规范，但是无论浏览器还是 nodejs 都还没有原生支持该规范，需要 babel 转译,是编译时加载，
导出

```js
export{ a,b,c }
import { a,b,c } from 'xxx'
import { a as myA, b, c} from 'xxx'

export default { ... }
import obj from '...'

export const a = 1
export const b = 2
import * as obj from 'xxx'

export const a = 1
export const b = 2
export default function(){ ... }
import fn,{a,b} from 'xxx'
import {default as fn, a, b} from 'xxx'
```

## 参考

[1.【深度全面】前端 JavaScript 模块化规范进化论](https://segmentfault.com/a/1190000023711059)
