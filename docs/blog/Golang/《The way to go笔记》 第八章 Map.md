---
title: 《The way to go笔记》 第八章 Map
author: NOxONE
date: '2023-05-21'
categories:
  - Golang
tags:
  - Golang
---

## 8.1 Map

map是引用类型，由多个键值对构成，声明方式如下

```js
var map1 map[keyType]valType
var map2 = make(map[keyType]valType, len)
```

```js
var map1 = map[string]int {
  "a": 1,
  "b": 2,
}
map1["a"] = 4 // 更改key-val
map1["c"] = 3 // 添加key-val

var map2 = map[int]func() int {
  1: func() int { return 1 },
}
var map3 = make(map[string]int)
map3["a"] = 7
fmt.Println(map1) // map[a:4 b:2 c:3]
fmt.Println(map3) // map[a:7]
```

`len`返回其长度

```js
len(map1) // 2
```

## 8.2 检测键值对是否存在

通过`map1[key]`的方式会返回两个值，分别为`val`和当前key是否存在的布尔值

```js
var map1 = map[string]int {
  "a": 1,
  "b": 2,
}
val, ok := map1["a"] // 1 true
val2, ok2 := map1["c"] // 0 false
```

## 8.3 删除键值对

通过`delete(map1, key)`的方式可以删除

```js
delete(map1, "a")
```

## 8.4 for-range迭代map

```js
for key, value := range map1 {
  // ...
}
```

## 8.5 map类型切片
```js
s := make([]map[string]int, 5)
s2 = []map[string]int {
  map[string]int { "a": 1 },
  map[string]int { "b": 2 },
  map[string]int { "c": 3 },
}

for _, val := range s {
  fmt.Println(val) // map[] ...
}
for _, val := range s2 {
  fmt.Print(val) // map[a:1] map[b:2] map[c:3]
}
```
