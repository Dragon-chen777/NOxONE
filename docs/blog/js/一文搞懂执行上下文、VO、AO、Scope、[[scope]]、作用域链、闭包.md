---
title: 一文搞懂执行上下文、VO、AO、Scope、[[scope]]、作用域链、闭包
author: NOxONE
date: '2022-07-18'
sticky: 1
cover: 'https://dragon-chen777.github.io/assets/images/祢豆子/8.jpg'
categories:
  - js
tags:
  - js
---

## 0. 写在开头

本文将秉承**talk is cheap, show me the code**原则，争取将`执行上下文`、`VO`、`AO`、`Scope`、`[[scope]]`、`作用域`、`作用域链`这些晦涩抽象的概念用`伪代码`的形式来清晰表述出来，用以强化理解和记忆。

若有写的不对的地方，还请大佬们在评论区批评指正!

那么，让我们开始吧~

## 1. 执行上下文

JS 引擎在执行一段代码前，会先创建对应的`执行上下文`(`EC`，Execution Context)，该执行上下文负责存储`VO`、`AO`、`Scope`、`this`。同时也创建`执行上下文栈`(`ECStack`，Execution Context Stack)来管理执行上下文的推入和弹出

不多 BB，来看代码

```js
let a = 1
function fn1(){
  fn2()
}
function fn2(){
  console.log(a)
}
fn1()

// 创建执行上下文
globalEC = { ... }
fn1EC = { ... }
fn2EC = { ... }
// 在执行fn1()前，先按顺序将执行上下文推入栈
ECStack.push(globalEC) // globalEC即全局上下文
ECStack.push(fn1EC)
ECStack.push(fn2EC)

// 执行完毕，出栈
ECStack.pop() // 弹出fn2EC并销毁
ECStack.pop() // 弹出fn1EC并销毁
// globalEC会一直保留，直到程序退出
```

## 2. VO

`VO`即 Variable Object 变量对象，仅定义在`全局执行上下文`(`globalEC`)中，存储`全局变量`和`函数`

来看代码

```js
let a = 1
let arr = [1,2,3]
let obj = {id:107}
function fn(){ ... }

// globalEC
globalEC = {
  VO:{
    a: 1,
    arr: [1,2,3],
    obj: {id:107},
    fn: function fn(){ ... }
  }
}
```

## 3. AO

`AO`即 Activation Object 活跃对象，定义在函数执行上下文(`fnEC`)中（准确来说，在函数开始执行前才创建），存储`局部变量`和`子函数`以及`arguments`

不多 BB，来看代码

```js
function fn(a,b){
  var c = 3,
  var fn2 = function(){
    let d = 4
    console.log(a+b+c+d)
  }
  fn2()
}
fn(1,2) // 10

// fn函数开始执行前，创建fnEC
fnEC = {
  AO:{
    arguments:{
      '0':1,
      '1':2,
      length:2
    },
    a:1,
    b:2,
    c:undefined,
    fn2:undefined,
  }
}
// 将fnEC推入执行上下文栈
ECStack.push(fnEC) // [globalEC,fnEC]

// fn函数执行的过程中慢慢填装AO
fnEC = {
  AO:{
    arguments:{ ... },
    a:1,
    b:2,
    c:3,
    fn2:function(){ ... }
  }
}
// 执行内部函数fn2，也是如此
fn2EC = {
  AO:{
    arguments:{
      length:0
    },
    d:4
  }
}
// 将fn2EC推入栈
ECStack.push(fn2EC) // [globalEC,fnEC,fn2EC]

// 执行fn2结束
ECStack.pop() // fn2EC销毁
// 执行fn结束
ECStack.pop() // fnEC销毁
```

## 4. Scope

`Scope`定义在`执行上下文`中，就是所谓的`作用域`，存储在其中的一个个`AO`和`VO`按队列顺序链接成了所谓的`作用域链`，记忆为`作用域就是Scope，作用域链就是Scope的链结构`

`[[scope]]`在函数`创建`时定义在`函数`中，保存当前所处执行上下文的`Scope`；若当前执行上下文是`globalEC`，那么保存的是当前全局执行上下文的`VO`，记忆为`[[scope]]保存函数创建时所处执行上下文的Scope`

`Scope`、`[[scope]]`二者关系如下

```js
fnEC.Scope = [ fnEC.AO ,...fn.[[scope]] ]
```

文字介绍比较晦涩，所以不多 bb，写代码就完事了

```js
let a = 1
function fn(){
  let b = 2
  function fn2(){
    let c = 3
    function fn3(){
      console.log(a,b,c)
    }
    fn3() // 6
  }
  fn2()
}
fn()

// 创建fn函数时，定义fn.[[scope]]
fn.[[scope]] = [globalEC.VO]
// 执行fn函数，在其内部创建fn2函数时，定义fn2.[[scope]]
fn2.[[scope]] = fnEC.Scope = [fnEC.AO, ...fn.[[scope]] ]
// 执行fn2函数，在其内部创建fn3函数时，定义fn3.[[scope]]
fn3.[[scope]] = fn2EC.Scope = [fn2EC.AO,...fn2.[[scope]] ] // [fn2EC.AO, fn1EC.AO, globalEC.VO]
```

不多 BB，继续 coding，这次串联上前面介绍的`EC`、`ECStack`、`VO`、`AO`、`[[scope]]`，只要搞懂了这些，作用域、作用域链、作用域链查询这些概念就是小 case

```js
// 执行代码如下
let a = 0
function fn3(){
  console.log(a)
}
function fn1(b,c,d){
  let a = 1
  fn3()
  function fn2(b){
    let c = 8
    console.log(a,b,c,d)
  }
  fn2(7)
}
fn1(2,3,4) // 输出: 0  1,7,8,4

// 咳咳... 那么重头戏来了
// 这段代码详细执行过程分析如下（建议把上述执行的代码截图，对照着看以下的伪代码分析过程）
ECStack.push(globalEC) // 推入全局执行上下文

globalEC.VO.a = 1 // VO存储a
globalEC.VO.fn3 = function(){ ... } // VO存储fn3
fn3.[[scope]] = [globalEC.VO] // fn3创建时定义[[scope]]

globalEC.VO.fn1 = function(){ ... }
fn1.[[scope]] = [globalEC.VO]

fn1EC = { // 在执行fn前创建fnEC
  AO:{
    arguments:{'0':2,'1':3,'2':4,length:3},
    b:2,
    c:3,
    d:4,
    a:undefined,
    fn2:function(){ ... }
  },
  Scope:[ fn1EC.AO, ...fn1.[[scope]] ]
}
ECStack.push(fn1EC) // 推入fnEC [globalEC, fn1EC]

fn1.AO.a = 1 // 执行let a = 1才会给AO中的a赋值

fn3EC = { // 执行fn3前创建fn3EC
  AO:{
    arguments:{length:0}
  },
  Scope:[ fn3EC.AO, ...fn3.[[scope]] ] // [ fn3EC.AO, globalEC.VO ]
}
ECStack.push(fn3EC) // 推入fn3EC [globalEC, fn1EC, fn3EC]

// 执行console.log(a)，会从当前执行上下文即fn3EC内部的Scope查询，
// 沿着作用域链逐级往上查找a
fn3EC.Scope.forEach(scope=>{
  if(scope.hasOwnProperty('a')){
    console.log(scope['a']) // 找到的是: globalEC.VO.a即0
    break
  }
)

ECSTack.pop() // fn3EC销毁，[globalEC, fn1EC]

fn2.[[scope]] = fn1EC.Scope // 创建fn2时定义[[scope]]
fn2EC = { // 执行fn2前创建执行上下文
  AO:{
    arguments:{ '0':7,length:1},
    b:7,
    c:undefined
  },
  Scope:[ fn2EC.AO, ...fn2.[[scope]] ] // [fn2EC.AO,fn1EC.AO,globalEC.VO]
}
ECStack.push(fn2EC) // [globalEC, fn1EC, fn2EC]
fn2EC.AO.c = 8
// 执行console.log(a,b,c,d),从当前执行上下文即fn2EC的Scope查询
fn2EC.Scope.forEach(scope=>{
  if(scope.hasOwnProperty('a')){
    console.log(scope['a']) // 找到的是: fn1EC.AO.a即1
    break
  }
  // 依此类推
  // 找到 fn2EC.AO.b即7
  // 找到 fn2EC.AO.c即8
  // 找到 fn1EC.AO.d即4
)

ECStack.pop() // 销毁fn2EC, [globalEC, fn1EC]
ECStack.pop() // 销毁fn1EC， [globalEC]

// 直到用户关闭当前页面，globalEC销毁，ECStack也销毁
```

## 5. 闭包

在搞懂了前面的东西，那么理解闭包就是信手拈来，其本质上就是`返回的内部函数的[[scope]]保存了外部函数的Scope`，
不多 bb，来看代码

```js
function fn1(){
  let a = 1
  function fn2(){
    let b = 2
    console.log(a,b)
  }
  return fn2
}
let fn = fn1()
fn() // 1,2

// 执行fn1函数,在创建fn2时，会定义fn2.[[scope]]
fn2.[[scope]] = fn1EC.Scope // [...fn1EC.AO,...globleEC.VO]

// fn1执行完毕，将fn2 return出去，这时候fn=fn2 --> fn.[[scope]] = fn2.[[scope]]，
// 故fn2的[[scope]]保留了下来，在执行fn时可以访问fn1EC.Scope
// 在执行fn时，创建的执行上下文是这样的
fnEC = {
  AO:{
    arguments:{ ... },
    b:2
  }
  Scope:[fnEC.AO, ...fn.[[scope]] ] // [fnEC.AO, fn1EC.AO, globalEC.VO]
}
// 通过fn1EC.AO可以访问fn1函数内部的变量a
```

再来看一个老掉牙的闭包面试题

```js
var data = []
for (var i = 0; i < 3; i++) {
  data[i] = (function a(i) {
    return function b(){
      console.log(i)
    }
  })(i)
}

data[0]() // 0
data[1]() // 1
data[2]() // 2

// 我们来分析data[1]，对于父函数a有
a.[[scope]] = [ globalEC.VO ]
aEC = { // 注意每次循环父函数a都不一样
  AO:{
    arguments:{'0':1,length:1},
    i:1 // 这里保存了i=1
  },
  Scope:[ aEC.AO, ...a.[[scope]] ]
}
// 对于return的b函数有
b.[[scope]] = aEC.Scope = [ aEC.AO, globalEC.VO ] // 保存了父函数a执行上下文的Scope
bEC={
  AO:{
    arguments:{length:0}
  },
  Scope:[ bEC.AO, ...b.[[scope]] ] // 这时i变量从aEC.AO中获取
}
```
