---
title: 《The way to go笔记》第四章 基本结构和数据类型
author: NOxONE
date: '2023-05-16'
categories:
  - Golang
tags:
  - Golang
---

## 4.1 文件名、关键字和标识符
略
## 4.2 GO程序的基本结构和要素
### 4.2.1 包的概念、导入与可见性
**1. 包的概念**

一个go程序由多个包构成，每个go文件会被包含在不同的包下，通过`package xx`表明属于哪一个包，最顶层的包为`main`

标准库存放在`$GOROOT/pkg/$GOOS_$GOARCH`目录下

若对一个包进行更改并重新编译，那么所有引用了这个包的客户端程序都需要重新编译才会生效

依赖图：`A.go` -> `B.go` -> `C.go`，编译顺序：`C.go` -> `B.go` -> `A.go`

**2. 包的导入**

Go程序通过`import`关键字导入包
```golang
import "fmt"
import "os"
```
```golang
import (
  "fmt"
  "os"
)
```
若包名不是以`./`或`/`开头，那么就意味是全局包，否则将会从相对目录或绝对路径中查找包

导入包会将这个包的所有代码对象加载进来

**3. 包的内部可见性**

在一个包中，若变量以大写字母开头，将会被导出访问（`public`）；以小写字母开头，将只能在包内可以访问（`private`）

每一个包都将作为一个命名空间，通过`xx.Fn`的方式访问其内部的公共方法和属性
```js
// main.go
package main

import "mod1" // 将会指定mod1为包的命名空间

func main() {
  mod1.Fn() // 访问mod1包的公共方法
  mod1.Num // 访问公共属性
  mod1.Person
  
  // 以下访问无效
  mod1.fn()
  mod1.num
  mod1.person
}
```
```golang
// mod1/main.go
package mod1

// public
func Fn() { ... }
var Num = 1
type Person struct {
  Name string // public
  id   int // private
}

// private
func fn() { ... }
var num = 2
type person struct { ... }
```
### 4.2.2 main函数
`main()`函数必须指定在`main`包中，作为go程序的入口，且不能包含传参和返回类型，否则报错！
```js
func main() {
  // ...
}
```
函数一旦执行完毕就会退出程序

## 4.3 常量
常量定义方式为：`const xx [type] = val`，存储在常量中数据类型只能是布尔型、数字型和字符串型
```js
const Pi = 3.14

const (
  Num = 7
  Str = "abc"
  Flag = true
)
```

常量值必须在编译时就确定，否则报错
```js
const n = getNumber() // err
```
## 4.4 变量
### 4.4.1 声明
变量的完整声明方式为：`var xx [type] = val`

只声明不赋值
```js
var a int // 这时默认值为0
```
多个声明
```js
var (
  a int // 默认0
  b str // 默认""
  c bool // 默认false
  d floot // 默认0.0
)
```
声明并赋值
```js
var a int = 7
var b = 5 // 自动类型推断
var c string = "abc"
```
在函数体或代码块(if、for)外部声明时将作为全局变量，否则为局部变量

局部变量声明简写
```js
func fn() { // 函数内部
  a := 1
}

for i := 1; i< 5; i++ { // 代码块{}
  b := true
}
```

### 4.4.2 值类型和引用类型
对于int、float、bool、string以及`array`、`struct`类型都属于值类型，变量存储的是`存放在内存中的值`，赋值操作执行的是`值拷贝`

对于slice、map、channel都属于引用类型，变量存储的是`指针`，赋值操作执行的是`指针拷贝`

## 4.5 基本类型和运算符
### 4.5.1 布尔类型 bool
```js
var flag bool = true
```
```js
var n = 10

n == 10 // true
n == 5 // false
n != 5 // true
```

### 4.5.2 数字类型
GO语言数字类型包括整型、浮点型、复数

**整型int、uint**

`int`和`uint`在64位操作系统上使用64位存储，即`int64`、`uint64`；在32位操作系统上使用32位存储

数值范围
```js
int8: [-128, 127] 即[-2^7, 2^7-1]
int16、int32、int64

uint8: [0, 255] 即[0, 2^8-1]
uint16、uint32、uint64
```
示例
```js
var n1 int8 = -128
var n2 int = -127500
var n3 uint8 = 255
var n4 uint = 25500
```
**浮点型float**

数值范围
```js
float32: +-[1e-45, 3.4e38]
float64: +-[5e-324, 107e308]
```
float32精确到`小数点后7位`，float64精确到`小数点后15位`（从首个非零数开始算）,因此在作赋值或比较操作时要小心`精度缺失`
```js
var f1 float32 = 0.0123456789
var f2 float32 = 0.00000123456789
var f3 float64 = 0.0123456789
var f4 float64 = 0.00000123456789

fmt.Println(f1, f2) // 0.012345679  1.2345679e-06
fmt.Println(f3, f4) // 0.0123456789 1.23456789e-06
```
### 4.5.3 运算符优先级
有些运算符拥有较高的优先级，二元运算符的运算方向均是从左至右
```js
优先级     运算符
 7         ^ !
 6         * / % << >> & &^
 5         + - | ^
 4         == != < <= >= >
 3         <-
 2         &&
 1         ||
```

## 4.6 字符串
略
## 4.7 strings和strconv包
### 4.7.1 strings
go使用`strings`包来完成字符串操作（不像js靠原型链原生就已经实现好了）

以下是常用方法
```js
strings.HasPrefix(s, prefix string) bool // 是否以prefix开头
strings.HasSuffix(s, suffix string) bool // 是否以suffix结尾
strings.Contains(s, substr string) bool // 是否包含substr子字符串
strings.Index(s, str string) int // 从前往后查询，返回首个匹配str索引，无则返-1
strings.LastIndex(s, str string) int // 从后往前查询...

strings.Replace(str, old, new string, n int) string // 将str的前n个子串old替换成new，若n=-1则替换所有old，并返回新字符串
strings.Repeat(s, n int) string // 将s重复n次并返回
strings.ToLower(s) string // 将s转小写并返回
strings.ToUpper(s) string // 将s转大写并返回
strings.TrimSpace(s) tring // 将s前后空白符去掉并返回
strings.Trim(s, sub string) string // 将s前后sub子字符串去掉并返回
strings.TrimLeft(s, sub string) string // 将s前sub子字符串去掉并返回

strings.Fields(s) slice // 以空白作为分隔符，将s分割转为slice并返回
strings.Split(s, sep string) slice // 以sep作为分隔符，将s分割转为slice并返回
strings.Join(sl []string, sep string) string // 以sep作为分隔符，将sl切片转成字符串并返回
```
示例
```js
fmt.Println(strings.HasPrefix("abc", "ab")) // true
fmt.Println(strings.HasSuffix("abc", "b")) // false
fmt.Println(strings.Contains("abc", "bc")) // true

fmt.Println(strings.Index("abc", "b")) // 1
fmt.Println(strings.LastIndex("aabbbcc", "b")) // 4
fmt.Println(strings.Replace("mmabcmmabcmmabc", "abc", "x",2)) // mmxmmxmmabc
fmt.Println(strings.Repeat("abc", 3)) // abcabcabc
fmt.Println(strings.ToLower("ABC")) // abc
fmt.Println(strings.ToUpper("abc")) // ABC
fmt.Println(strings.TrimSpace(" abc ")) // abc
fmt.Println(strings.Trim("xxabcxx", "xx")) // abc
fmt.Println(strings.TrimLeft("xxabcxx", "xx")) // abcxx

fmt.Println(strings.Fields("abc")) // ["abc"]
fmt.Println(strings.Split("axbxc", "x")) // ["a" "b" "c"]
// arr := []string{"a", "b", "c"}
// sl := arr[0:3]
sl := []string{"a", "b", "c"}[:] // ["a" "b" "c"]
fmt.Println(strings.Join(sl, "x")) // axbxc
```
### 4.7.2 strconv
`strconv`包用于字符串的类型转换
```js
strconv.Itoa(n int) string // 将数字n转字符串
strconv.FormatFloat(f float64, fmt byte, prec int, bitSize int) string // 将浮点数f转为字符串，格式为fmt，精度为prec，bitSize使用32对应float32，64对应float64
strconv.Atoi(s string) (i int, err error) // 字符串转数字
strconv.ParseFloat(s string, bitSize int) (f float64, err error) // 字符串转换为浮点
```
## 4.8 指针
1. 指针就是指向另一个内存地址的值
2. 指针变量就是保存内存地址的变量
3. *（菊花）操作就是取出内存地址所对应的值
 

[传送门](https://learnku.com/go/t/35168)
