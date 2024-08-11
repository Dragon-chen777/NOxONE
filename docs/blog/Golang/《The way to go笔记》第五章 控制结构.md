---
title: 《The way to go笔记》第五章 控制结构
author: NOxONE
date: '2023-05-17'
categories:
  - Golang
tags:
  - Golang
---
## 5.1 if-else
没啥好说的，结构如下：
```js
if condition {
  // ...
} else if condition2 {
  // ...
} else {
  // ...
}
```
```js
if condition {
  // ...
} else {
  // ...
}
```
与其他语言不同的点：if可以包含一个`初始化语句`用于声明一个`局部块变量`，结构如下：
```js
if initialization; condition {
  // ...
}
```
示例
```js
max :=10
a := 8
if a := 18; a > max {
  fmt.Println(a) // 18
}
fmt.Println(a) // 8

// ok-pattern
if val, ok := readData(); ok {
  // 仅在读取成功时执行...
}

// err-pattern
if err := fn(); err != nil {
  // 执行错误时，输出错误信息，并return
}

```

## 5.2 swicth-case
 一对一匹配
```js
switch expression {
case condition1:
  // ...
case condition2: 
  // ...
default:
  // ...
}
```
使用`fallthrough`关键字，实现向下传递匹配
```js

switch expression {
case condition1:
  // ....
  fallthrough
case condition2:
  // ...
  fallthrough
  
// ...
}
```
switch可以包含一个初始化语句，声明`局部块变量`
```js
switch initialization; {
  // ...
}
```
示例
```js
n := 5

switch n {
case 4:
  fmt.Println(1)
case 5:
  fmt.Println(2)	
}

switch m := 10 {
case m > 0:
  fmt.Println(1)
default: 
  fmt.Println(2)
}
```

## 5.3 for
for循环结构
```js
// 三种类型语句都不是必须的，都可以省略
for 初始语句; 条件语句; 修饰语句 {
  // ...
}
```
```js
for i := 0; i< 10; i++ {
  fmt.Println(i)
}
```
基于条件判断的迭代
```js
for 条件语句{
  // ...
}
```
```js
i := 5
for i > 0 {
  i--z
}
```
无限循环，通过`break`、`return`等语句控制退出程序，一个典型应用是服务器，用于不断等待和接受新请求
```js
for t, err = p.Token; err == nil; t, err = p.Token() {
  // ...
}
```
`for-range`，用于迭代一个集合，第一个值为下标，第二个值为元素值
```js
for idx, val := range someSet {
  // ...
}
```
```js
// 数组
arr := []int{1, 2, 3}
for _, val := range arr {
  fmt.Println(val) // 1 2 3
}

// 字符串
str := "abc"
for idx, s := range str {
  fmt.Printf("(%d,%c)\n",idx, s) // (0,a) (1,b) (2,c)  
}
```

## 5.4 break和continue
略，与其他语言一样都是跳出当前代码块

## 5.5 label
for、switch 或 select 语句都可以配合label标识符实现控制`跳入或跳出指定循环代码块`

形如`XXX: 循环代码块`、`continue XXX`、`break XXX`
```js
LABEL1:
  for i := 0; i <= 2; i++ {
    for j := 0; j <= 100; j++ {
      if j > 2 {
        continue LABEL1
      }
      fmt.Printf("(%d,%d)\n", i, j)
    }
  }
// (0,0) (0,1) (0,2)
// (1,0) (1,1) (1,2)
// (2,0) (2,1) (2,2)
```
```js
for z := 0; z<=1; z++{
  LABEL1:
    for i := 0; i <= 2; i++ {
      for j := 0; j <= 100; j++ {
        if j > 2 {
          break LABEL1
        }
        fmt.Printf("(%d,%d,%d)\n", z, i, j)
      }
    }
}
// (0,0,0) (0,0,1) (0,0,2)
// (1,0,0) (1,0,1) (1,0,2)
```
