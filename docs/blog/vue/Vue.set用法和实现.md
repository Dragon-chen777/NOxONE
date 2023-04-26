---
title: Vue.set的用法和实现
author: NOxONE
date: '2023-03-21'
categories:
  - vue
tags:
  - vue
---

## 1. 用法

```js
Vue.set(target, key, val) : val
```

[引用官方说法](https://v2.cn.vuejs.org/v2/api/#Vue-set)

> 向响应式对象中添加一个 property，并确保这个新 property 同样是响应式的，且触发视图更新。它必须用于向响应式对象上添加新 property，因为 Vue 无法探测普通的新增 property (比如  `this.myObject.newProperty = 'hi'`)

这里有两个关键点：

1. 添加一个`新key`，即之前对象里边没有这个 key
2. 让这个 key 也是`响应式`，这样才能在这个 key 值更新时视图也跟着更新

用法示例

```html
<div>name: {{ obj.name }} id: {{ obj.id }}</div>
```

```js
export default {
	data() {
		return {
			obj: {
				name: 'NO x ONE',
				// 开始并没有id
			},
		}
	},
	created() {
		this.obj.id = 1 // 这里虽然是给data里的obj添加了新key，但是并非响应式，视图不会跟着更新
		this.$set(this.obj, 'id', 1) // 新key作响应式处理，视图更新
	},
}
```

## 2. 实现

**Talk is cheap, show me the code**

```js
Vue.set = function (target, key, val) {
	// 对于array需调用splice方法特殊处理
	if (Array.isArray(target)) {
		target.splice(key, 1, val)
		return val
	}

	// 若target本身就有这个key，说明之前已对该key调用defineReactive作响应式处理
	// 或者target非响应式数据时，执行普通的赋值操作即可
	if (key in target || !target.__ob__) {
		target[key] = val
		return val
	}

	// key为后来新添加的且target是响应式数据，这时候需要对新key作响应式处理
	defineReactive(target, key, val)
	return val
}
```
