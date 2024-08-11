---
title: 《The way to go笔记》第六章 函数
author: NOxONE
date: '2023-05-20'
categories:
  - Golang
tags:
  - Golang
---

## 6.1 函数参数和返回值

golang中的函数可以有多个返回值，使用`func`关键字定义函数

```js
// 无参数无返回值
func fn1() {
  fmt.Println(1)
}
// 有参数无返回值
func fn2(a int, b string) {
  fmt.Println(a, b)
}
// 单个返回值
func fn3(a, b int) int {
  return a + b
}
// 多个返回值
func fn4(a int, b string) (int, bool) {
  return a + 1, b == "noxone"
}
```

运行结果

```js
fn1() // 1
fn2(7, "noxone") // 7 "noxone"
fmt.Println(fn3(1,1)) // 2
fmt.Println(fn4(6, "noxone")) // 7 true
```

**具名返参和匿名返参**

```js
// 具名返参
func fn(a, b int) (c int, d int) {
  c = a + 1
  d = b + 1
  // reutrn c, d 
  return
}
// 匿名返参
func fn() int, string {
  return 5, "noxone"
}
```

**练习：** 编写函数，求解两个`整型`的`和、差、积`，要求写出具名返参版本和匿名返参版本

```js
// 具名返参
func test(a, b int) (sum int, minus int, accumulate int) {
  sum = a + b
  minus = a - b 
  accumulate = a * b
  // return sum, minus, accumulate
  return
}
// 匿名返参
func test2(a, b int) (int, int, int) {
  return a + b, a - b, a * b
}
```

**空白符**

空白符`_`用来匹配一些不需要的函数返回值，然后丢弃

```js
func fn() (a int, b int, ok bool) {
  return 1, 7, true
}

var a, b, _ = fn() // 丢弃ok
```

**指针传参**

函数默认都是按值传参，即传入的是值的拷贝，因此要想实现按指针传参，可以使用菊花`*`指定传参为指针类型

```js
func main() {
  a := 5
  add(&a, 5)
  fmt.Println(a) // 10
}

func add(n *int, m int) { // *int n为int类型的指针
  *n += m
}
```

**变长传参**

函数的最后一个参数使用`args ...type`的形式，会将多个传参存入args切片中，形如:

```js
func fn(arg1 int, arg2 string, args ...string) { ... } // 多余的参数传入args字符串型切片中
// 在js中，是这样
function fn(arg1, arg2, ...args) { ... } // 多余的参数传入args数组中
```

示例

```js
func fn(a int, b string, args ...string) {
  fmt.Println(a,b, args) // 7 noxone [a b c]
  for _, val := range args {
      fmt.Println(val) // a b c
  } 
}

fn(7, "noxone", "a", "b", "c")
```

## 6.2 defer

`defer`关键字将某个语句或函数推迟到函数返回之前才执行，在go中`return`其实是分为两步：1.为返回值赋值 2.将返回值返回调用
处，而`defer`实际上是在为返回值赋值后执行，然后返回值才返回调用处

```js
func main() {
  defer fn1()
  fn2()
  fn3()
  // 2 3 1
}

func fn1() {
  fmt.Print(1) 
}
func fn2() {
  fmt.Print(2) 
}
func fn3() {
  fmt.Print(3) 
}
```

`defer`会将执行语句或函数压入待执行栈中，先入后出

```js

func main() {
  defer fn1()
  defer fn2()
  defer fn3()
  // 3 2 1
}

func fn1() {
  fmt.Print(1) 
}
func fn2() {
  fmt.Print(2) 
}
func fn3() {
  fmt.Print(3) 
}

// 实现倒序迭代
for i:= 1; i <= 5; i++ {
  defer fmt.Print(i) // 5 4 3 2 1
}
```

利用`defer`的特性，可以实现代码追踪

```js
func trace(s string)   { fmt.Println("in ", s) }
func untrace(s string) { fmt.Println("out ", s) }

func a() {
  trace("a")
  defer untrace("a")
  fmt.Println("a")
}

func b() {
  trace("b")
  defer untrace("b")
  fmt.Println("b")
  a()
}
func main() {
  b() // in b -> b -> in a -> a -> out a -> out b
}
```

或者这样

```js
func main() {
  defer trace("out ", trace("in ", "a"))
  fmt.Println("a")
  defer trace("out ", trace("in ", "b"))
  fmt.Println("b")
  // in b -> b -> in a -> a -> out a -> out b
}

func trace(tip string, s string) (st string) {
  fmt.Println(tip, s)
  return s
}
```

利用`defer`在`return`给返回值赋值的特性，输出打印返回值

```js
func fn() (n int, s string) {
  defer func() {
    fmt.Println(n, s)
  }()
  return 7, "noxone"
}

// 在接收返回值前会先打印
num, str := fn() // 7 "noxone"
```

## 6.3 内置函数

```js
close(ch) // 关闭管道通信
len(val) int  // 返回某个类型的长度（string、array、slice、map、channel）
cap(val) int // 返回某个类型的最大容量（slice、map）
new(T) T // 分配T类型的零值并返回其地址
make(T, len, cap) T // 返回T类型初始化后的值，只能用于slice、map和channel
copy(s) slice // 复制slice
append(s ...slice) slice // 连接slice
panic、recover // 错误处理
```

## 6.4 闭包

和JS的闭包差不多，不想再多BB了，会JS的同学可以看我之前写的博客，传送门👉 [一文搞懂执行上下文、VO、AO、Scope、\[\[scope\]\]、作用域链、闭包](https://juejin.cn/post/7121724252381773861)

**匿名函数**

```js
func main() {
  // 匿名函数调用
  func(n int) {
    fmt.Println(n) // 1
  }(1)
  
  // 匿名函数定义
  fv := func(n int, b int, c ...string) (isEven bool, sum int) {
    fmt.Println(n, b, c)
    return n%2 == 0, n + b
  }
  fmt.Printf("类型: %T，地址: %v", fv, fv) // 类型: func(int, int, ...string) (bool, int)，地址: 0x48eb50
}
```

**将defer和匿名函数结合使用实现修改具名返回值**

```js
func f() (ret int) {
  defer func() {
    ret++
  }()
  return 1
}
func main() {
  fmt.Println(f()) // 2
}
```

**将函数作为返回值**

返回的内部函数保存当前`外部函数作用域下的变量(在JS中是存储在AO里边)`，从而实现所谓的闭包

```js
func fn(a int) func(b int) int {
  return func(b int) int {
    return a + b // a属于外部函数作用域下的变量
  }
}

func fn2() func(int) int {
  var count int
  return func(delta int) int {
    count += delta
    return count // count属于外部函数作用域下的变量
  }
}
func main() {
  f := fn(2)
  fmt.Println(f(3)) // 5
  
  f2 := fn2()
  fmt.Println(f2(1)) // 1
  fmt.Println(f2(2)) // 3
  fmt.Println(f2(10)) // 13
}
```
