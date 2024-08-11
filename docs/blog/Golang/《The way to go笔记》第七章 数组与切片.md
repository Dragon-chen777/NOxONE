---
title: 《The way to go笔记》第七章 数组与切片
author: NOxONE
date: '2023-05-20'
categories:
  - Golang
tags:
  - Golang
---

## 7.1 数组

### 7.1.1 数组初始化与赋值

JS数组比较奔放，元素类型不会有限制，例如可以同时包含数字、字符串、对象等；

而Go数组会严格很多，定义为：一组具有`唯一类型`的且`长度固定`的序列，意味着在定义一个数组时就需指明长度和类型（`[5]int`与`[10]int`属于不同类型数组），且严格限制不能越界（例如arr长度为3，执行`arr[3] = 1`会报错，而js数组不会，是因为js数组是动态扩容的）

**数组声明**

```js
var arr [5]int // 长度为5，元素类型为int，值为[0 0 0 0 0]
```

仅声明不赋值时，每一个元素为对应类型的`零值`，在这里为int的零值`0`

**赋值**

```js
for i := 0; i < len(arr); i++ { arr[i] = i } // [0 1 2 3 4]
for i, _ := range arr { arr[i]++ } // [1 2 3 4 5]
```

**声明并初始化**

在声明并初始化时，可以使用`...`代替长度，在传入初始化值时会自动推断长度

```js
var arr = [...]int{1, 2, 3}
fmt.Println(arr, len(arr), cap(arr)) // [1 2 3] 3 3
```

以下是八股，

```js
var arr1 = [5]int{1:5, 4: 10} // [0 5 0 0 10]
```

### 7.1.2 数组为值类型

在JS中数组为引用类型，而在Go中，数组为`值类型`，这意味着数组作为传参时，实际拷贝的是值，而非指针，在函数内部对数组修改无效

```js
func main() {
  arr := [...]int {1, 2, 3, 4, 5}
  func(arr [5]int){
    for i,_ := range arr {
      arr[i]++
    }
  }(arr)
  fmt.Println(arr) // [1 2 3 4 5]
}
```

要想在函数内部修改数组的值，需要指定传参为数组指针而非数组值（对其他值类型同理）

```js
func main() {
  arr := [...]int {1, 2, 3, 4, 5}
  func(arr *[5]int){
    for i,_ := range arr {
      arr[i]++
    }
  }(&arr)
  fmt.Println(arr) // [2 3 4 5 6]
}
```

由于数组是`按值传递`，把大数组传递给函数时，为降低内存空间，可以指定为`按指针传递`

```js
// 求数组项总和
var arr = [10000]int{1,2,3,...,10000}
func getArrSum(arr *[10000]int) (sum int) {
  for _, n := range *arr {
    sum += n
  }
  return
}
getArrSum(&arr) // 空间复杂度O(1)

func getArrSum2(arr [10000]int) (sum int) {
  for _, n := range arr {
    sum += n
  }
  return
}
getArrSum(arr) // 空间复杂度O(n)
```

### 7.1.3 多维数组

```js
var arr [2][3]int // [[0 0 0] [0 0 0]]
```

```js
var arr = [2][3]int{
  [3]int{1, 2, 3},
  [3]int{4, 5, 6},
} // [[1 2 3] [4 5 6]]
```

```js
var arr [2][3]int
for i := 0; i < len(arr); i++ {
  for j :=0; j < len(arr[i]); j++ {
    arr[i][j] = i * len(arr[i]) + j + 1
  }
}
fmt.Println(arr) // [[1 2 3] [4 5 6]]
```

对于JS

```js
var arr = new Array(2).fill(0).map(() => new Array(3).fill(0)) // [[0,0,0], [0,0,0]]
```

```js
var arr = [
  [1,2,3],
  [4,5,6]
]
```

```js
var arr = []
for (let i = 0; i < 2; i++) {
  arr[i] = [] // 或 arr.push([])，js就是这么奔放~
  for(let j = 0; j < 3; j++) {
     arr[i][j] = i * 3 + j + i // arr[i].push(i * 3 + j + i)，奔放~
  }
} // [[1,2,3], [4,5,6]]
```

## 7.2 切片

### 7.2.1 切片定义和特性

在JS中常用数组，而在Go中常用的是切片，切片的定义和特性如下：

*   是对数组的一个`连续片段`的引用
*   可以理解为建立在数组类型之上的抽象(`动态扩容数组`)
*   同个数组的不同切片之间`共享数据`

### 7.2.2 切片声明和初始化

**声明方式**

```js
// 1. 截取数组片段[start:end)
arr := [3]int{1,2,3}
s := arr[0:3] // 起始和截止下标都可以省略，默认值为0和arr.length

// 2. 最常用的方式
s := []int{1,2,3}

// 3. make(T, len, cap)
s := make([]int, 10, 20) // 长度是切片的长度，容量是底层数组的长度

// 4. 只声明不初始化
var s []int
```

使用`make(T, len, cap)`声明切片时，长度虽然是动态扩容的，但需要在一定条件下才能触发，在未扩容之前若对切片做一些超出边界的操作会报错

```js
s: = make([]int, 0 , 10)
s[5] = 7 // 报错, js中则为 [undefine,undefine,undefine,undefine,7]

// 以下条件可以触发扩容
s = append(s, 7) // [7] 相当于js的arr.push(7)
s = s[0:5] // [7 0 0 0 0] 相当于js的arr = arr.slice(0,5)
s[5] = 7 // [7 0 0 0 7]
```

扩容时，cap会成倍增长

```js
s := make([]int, 0, 5)
fmt.Println(len(s), cap(s)) // 0 5

c := cap(s)
for i := 0; i < 20; i++ {
s = append(s,i)  
  if cap(s) != c {
    c = cap(s)
    fmt.Println(c) // 10 20
  } 
}
```

同个数组的不同切片共享数据，因为他们的底层数组是同一个

```js
s := []int{1,2,3,4} // [1 2 3 4]，底层数组[1 2 3 4]
s2 := s[1,3] // [2 3] // 底层数组[1 2 3 4]
s2[1] = 100 // [2 100]
fmt.Println(s) // [1 2 100 4]
```
切片去除某个下标元素需要手动实现
```js
func main() {
  s := []int{1,2,3,4,5}
  s = removeAtIdx(s,1)
  fmt.Println(s)
}
func removeAtIdx(s []int, idx int) []int {
  len := len(s)
  for i := idx; i < len - 1; i++ {
    s[i] = s[i+1] // 后面元素往前移
  }
  return s[:len-1] // 去掉最后一个元素
}
```
`copy(target, source)`复制切片
```js
s := []int{1,2,3,4,5}
c := make([]int, 3)
copy(c,s)
fmt.Println(c) // [1 2 3]

// 实际执行的操作为
for i := 0; i < len(s) && i < len(c); i++ {
  c[i] = s[i]
}
```