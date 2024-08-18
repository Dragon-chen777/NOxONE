---
title: 写JS一定要优雅！
author: NOxONE
date: '2023-05-20'
categories:
  - js
tags:
  - js
---

## 0. 写在前头

这篇文章会不时更新补充，记录我自己平时在学习以及实际开发过程中，总结整理的一些关于JS的优雅写法

鄙人是一个`重度代码洁癖患者`，能一行代码解决的事，绝对不会书写多行，能代码上下平铺，绝对不会`if-if-if`多层嵌套

当然了，鄙人码龄不过3年，水平有限，但又喜欢写一些博客记录，属于又菜又爱玩的类型。如有写得不好，写得不对的地方，欢迎各位大佬批评指正！

那么不多bb，进入正题\~

## 1. 使用一些位运算取代丑陋的Math方法

### 1.1 取中间值 >>1

针对于正数才有效

```js
let arr = [1,2,3,4,5,6,7]
let l = 0, r = arr.length - 1 

// 获取中间坐标
// let m = Math.floor((l+r)/2)
let m = l + r >> 1
```

### 1.2 向下取整 | 0

```js
function getDigit(n){ // 获取数字各位上的数（个十百千万）
  let digits = []
  while(n){
    digits.push(n % 10)
    // n = Math.floor(n / 10)
    n = (n / 10) | 0
  }
  return digits
}
```

### 1.3 判断奇偶 & 1

```js
let n = 9
if(n % 2 == 0) { 
  // 偶... 
} else { 
  // 奇... 
}

// 改进
if( n & 1 ) { ... }// 奇
else { ... } // 偶
```

## 2.用一行代码取代多行代码
### 2.1 用三目代替if-else

```js
// 是可以，但是不够省流
if(n > 0) {
  fn1()
} else {
  fn2()
}

// 改进
n > 0 ? fn1() : fn2()

// 是可以，但是不够优雅
let n
if (m > 0) {
  n = 1
} else { 
  n = 3
}

// 改进
let n = m > 0 ? 1 : 3

// 逻辑可以，但书写都不太可以，必须要优雅
async function saveForm() {
  if (isCreate) { // 创建
    let params = {
      user: "noxone",
      age: 17,
      isHandsome: true
    }
    let res = await apiCreateUser(params)
    if (res.code == "0") alert("创建成功")
    else alert(res.message)
  } else { // 编辑
    let params = {
      id: 295286392
      user: "noxone",
      age: 17,
      isHandsome: true
    }
    let res = await apiEditUser(params)
    if (res.code == "0") alert("编辑成功")
    else alert(res.message)
  }
}
// 改进
async function saveForm(isCreate) {
  let params = {
    user: "noxone",
    age: 17,
    isHandsome: true
  }
  let { code, message } = isCreate ? 
    await apiCreateUser(params) 
    : await apiEditUser({id: 295286392, ...params})
    
  if (code !== "0") alert(message)
  else alert(isCreate ? "创建成功" : "编辑成功")
}
```

### 2.2 用与逻辑代替if-fn()

```js
if (n > 2) {
  fn()
}

// 省字高效
n > 2 && fn()
```

### 2.3 用for代替while

```js
function reverse(arr) {
  let l = 0, r = arr.length - 1
  while (l < r) {
     [arr[l++], arr[r--]] = [arr[r], arr[l]]
  }
}

// for
function reverse(arr) {
  for (let l = 0, r = arr.length - 1; l < r;){
    [arr[l++], arr[r--]] = [arr[r], arr[l]]
  }
}
```

### 2.4 利用好布尔值

```js
// 以下代码看着费劲
function fn(n) {
  let flag
  if (n > 5) {
    flag = true
  } else if(n % 2 == 0) { // 偶数
    flag = true
  } else {
    flag = false
  }
  return flag
}
// 改进 
function fn(n) {
  return n > 5 || n % 2 == 0
}
```

```js
// 以下代码看着也费劲
function fn(num, str, obj, arr) {
  if (num == 0) {
    return false
  }
  if (str == '') {
    return false
  }
  if (obj == null) {
    return false
  }
  if (arr.length == 0) {
    return false
  }
  if (arr.indexOf(1) != -1 || arr.indexOf(2) != -1 || arr.indexOf(3) != -1) {
    return false
  }
  
  return true
}

// 改进：利用好js的假值及自动类型转换特性
function fn(num, str, obj, arr) {
  return !!n && !!str && !!obj && !!arr.length && arr.some(n=>[1,2,3].includes(n)) 
}
```

同上

```js
var n = 5
if (n != 0) {
  // ...
} else { 
  // ...
}

// 改成这样
var n = 5
if (n) {
  // ...
} else {
  // ...
}

// 同理
var arr = []
var str = 'abc'
var obj = null

if (!arr.length) {
  // 空数组
} else {
  // 非空
}

if (!str) {
  // 空字符串
}

if (obj) {
  // 非null
} else {
  // null
}
```

## 3. 降低横向嵌套

### 3.1 降低if-if-if多层套娃

以下代码是4层if-else嵌套的代码，即使已经将具体逻辑封装到一个个函数里边了，但是还是看着费劲，更别说未封装的情况！

理论上大于3层的代码都不好理解，且维护困难，容易出问题！

```js
// holy shit!!!
function fn(data) {
  if (data !== null) {
    if (data.num >= 5) {
      fn2()
      if (data.flag) { // 是否可以data.flag && data.isAdmi呢？
        if(data.isAdmin) {
          fn3()
        }
      } else{
        fn3Err()
      }
    } else if (data.num >= 0) {
      fnErr2()
    } else {
      fnErr3()
    }
  } else {
    fnErr()
  }
}
```

这时候需要把横向嵌套的层数降低，代码书写方式尽量是`自上而下`，而非`上左左下`

改进方法：先处理`坏情况`，剩下的就是`好情况`，从而把横向嵌套层数降为1

```js
function fn(data) {
  if (data == null) return fnErr() // 1级坏情况：data为null
  if (data.num < 0) return fnErr2() // 2级坏情况
  if (data.num < 5) return fnErr3() // 2级坏情况
  
  // 剩下的就是1级好情况了，即data !== null && data.num >= 5
  fn2()
  if (!data.flag && data.isAdmin) return fn3Err() // 3级坏情况
  fn3()
  // 或合并成一行: data.flag && data.isAdmin ? fn3() : fn3Err()
}
```

这样一看是不是豁然开朗多了？

原理就是：把`if (isTrue) { ... }`改成`if(!isTrue) return`实现优雅减低嵌套

```js
// 这里用fn1、fn2、fn3来代替一些复杂的业务逻辑代码
if (isTrue1) { // 一层嵌套
  fn1()
  if (isTrue2) { // 二层嵌套
    fn2()
    if (isTrue3) { // 三层嵌套
      fn3()
    }
  }
}

// 优雅降低嵌套
if (!isTrue1) return 
fn1()
if(!isTrue2) return
fn2()
if(!isTrue3) return
fn3()
```

### 3.2 降低循环里的if-if-if套娃

平时写for循环代码如下

```js
// 举个例子，考虑以下场景：
// 将大于10且为偶数的数字放入ret数组
let ret = []

let data = [1,11,5,8,15,12,14,7,2]
for (let n of data) {
  if (n & 1) { // 偶数
    if (n > 10) {
      ret.push(n)
    }
  }
}
```

优雅降级

```js
for (let n of data) {
  if(!(n & 1) || n <= 10) continue // 是奇数或者不大于10就continue跳过
  ret.push(n)
}
// 当然你也可以这样：ret = data.map(n =>(n & 1) && n > 10)
```

如果再加一个条件：偶数但不大于10放入ret2数组
```js
let data = [1,11,5,8,15,12,14,7,2]

for (let n of data) {
  if(!(n & 1)) continue // 非偶数直接跳过
  
  if(n > 10) { // 偶数大于10
    ret.push(n)
    continue
  }
  // 剩下的情况当然是偶数且不大于10啦~
  ret2.push(n)
  
  // 或者使用三元合并成一行: n > 10 ? ret.push(n) : ret2.push(n)
}
```
X`### 3.3 放弃丑陋的Promise.then
`Promise.then`代码不太直观，而且太多的`Promise.then`链式嵌套会让代码看起来又臭又长，既然`ES6`之后推出了`async`来替代`Promise`

以下是使用`Promise.then` 写的死亡三角代码，自己品品吧~
```js
// 现在我要获取用户及用户配偶的信息
let userInfo = { uid: 1 }
let userSpouse = {}

function getUserInfo(){
  apiRequest1(userInfo.uid).then((data1)=>{ // 通过uid获取用户的基本详细
    userInfo = { ...userInfo, ...data1 } // data1包含用户的家庭id
    apiRequest2(userInfo.homeId).then((data2)=>{ // 通过用户的家庭id获取家庭基本信息
      userInfo = { ...userInfo, ...data2 } // data2包含用户的配偶id
      apiRequest1(userInfo.spouseId).then((data3)=>{ // 通过用户配偶id获取用户配偶信息
        userSpouse = { ...userSpouse, ...data3 }
        apiRequest2(userSpouse.homeId).then((data4)=>{ // 再获取家庭基本信息
          userSpouse = { ...userSpouse, ...data4}
        }).catch(e=>console.error(e))
      }).catch(e=>console.error(e))
    }).catch(e=>console.error(e))
  }).catch(e=>console.error(e))
}
```
而改成`async`明显舒适多了，可阅读性立马提升！
```js
async function getUserInfo() {
  try {
    let data1 = await apiRequest1(userInfo.uid)
    let data2 = await apiRequest2(data2.homeId)
    userInfo = { ...userInfo, ...data1, ...data2 }
    let data3 = await apiRequest1(userInfo.spouseId)
    let data4 = await apiRequest2(data3.homeId)
    userSpouse = { ...userSpouse, ...data3, ...data4 }
    } catch (e) {
      console.error(e)
    }
}
```