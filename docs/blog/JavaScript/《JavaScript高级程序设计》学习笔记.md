---
title: 《JavaScript高级程序设计》学习笔记
author: NOxONE
date: '2020-12-22'
categories:
  - js
tags:
  - js
---

> “了解一个东西是如何运作的才能使你成为好的开发者” —————— 写在最开头

# ECMAScript

## 0.ECMA-262 规定：

1. 对象与平台无关
2. 删除与浏览器相关的代码
3. 全面支持 Unicode 编码

## 1. 表达式

### 1.1 表达式包括：常量、变量、直接量、关键字

① 原始表达式：

```js
var num = 17
var str = 'abc'
```

② 初始化表达式：

```js
var arr = [1, 2]
var person = { name: 'Jack' }
```

③ 函数定义表达式：

```js
function add(a, b) {
	return a + b
}
```

④ 函数调用表达式：

```js
add(1, 7) // 会计算 MemberExpression 并返回Reference
```

⑤ 对象创建表达式：

```js
var obj = new Object()
```

⑥ 属性访问表达式：

```js
[ 'key' ]  传入数值时会转化为字符串
```

### 1.2 补充

1. JS 解析器遇到 `.`和 `['key']` 时的操作

   > ① 先判断变量是否为`null`和`undefined`，是则报错  
   > ② 判断是否为对象`(A instanceof Object)`， 是则执行访问对应属性或方法的操作  
   > ③ 若不为对象，对简单数据类型调用相应的`转型函数`，之后再对这个临时包装对象执行后续操作（此时的包装对象是临时在内存中创建的，与原先的变量并无引用关系，故在执行后续操作完毕之后立即被垃圾收集器收集处理)

2. 使用`[ 'key' ]`的方式访问对象属性的两大好处：
   > ① 可通过变量来访问  
   > ② 若属性名包含非法字符不可以用`.`的方式来访问，必须使用`[ 'key' ]`

## 2. 运算符

### 2.1 运算符一些特性

① 优先级：`()` =>`属性访问` => `一元操作符(++ --)` => `+、-、*、/` => `比较运算符` => `位运算(~、&、|、>>)` => `三元操作符` => `赋值`

② 结合性：只有`一元操作符`、`三元操作符`、`赋值`是右结合，其他均为左结合

```javascript
var a = 3
++a == 3 // false,      一元 > 比较元素符

!a++ // true
// 具体过程:undefined++ ——> NaN +1 ——> NaN ——> !NaN ——>true     一元操作符右结合

X = a ? b : c ? d : e ? f : g
// 相当于：X = a ? b : ( c ? d : ( e ? f : g ))     三元操作符右结合

var a = 1
b = a++ + ++a
// 相当于：b = 1 + 3 = 4   最终a = 3
```

### 2.2 位运算符

按位与 `&`：同一留一， 二进制乘

按位或 `|`：有一留一， 二进制加

按位异或 `^`：不同留一， 二进制减

按位非 `~`：取负减一

左移 `<<`：二进制左移 n 位，即乘 2^n

右移 `>>`：二进制右移 n 位，即除以 2^n

```js
// &1作奇偶判断
2 & 1 // 0
4 & 1 // 0
3 & 1 // 1

// |0 向0取整
1.5 | 0 // 1
;2.2 |
	(0 - // 2
		1.5) |
	0 // -1

// >>1 取中间数
3 >> 1 // 1
2 >> 1 // 1
```

### 2.3 逻辑与&&、逻辑或||的三层理解

1. 逻辑与 &&
   > ① 对两个布尔值进行运算  
   > ② 对两个判断进行运算  
   > ③ 第一个操作数为 true 执行或返回第二个表达式（串联开关）
2. 逻辑或 ||
   > ① 对两个布尔值进行运算  
   > ② 对两个判断进行运算  
   > ③ 第一个操作数为 false 执行或返回第二个表达式（并联开关）

## 3. 语句

① 表达式语句

```js
i++
var a = 1
delete property
```

② 复合语句

```js
{
	i++
	var a = 1
} // 结尾无须加' ; ' 加了代表空语句
```

③ 声明语句

```js
var、let、const、function // 不可delete，因为声明的是变量而非属性)
```

④ 流程控制语句

```js
if
while
do-while
switch-case
for
for-in
for-of
```

## 4. Boolean

```js
Boolean:{
  [[PrimitiveValue]]: true / false,
  __proto___: Boolean
}
```

在带有判断条件的语句中，对`非布尔类型`变量会尝试调用`Boolean()`方法，对六个特殊值会返回 false：`""、0、-0、NaN、null、undefined`，其余均返回 true 包括：`[]、{}、function(){ }、'0'、'false'`

```js
坑: Boolean(new Boolean(false)) // true
```

## 5. Number

```js
Number:{
  [[PrimitiveValue]]: 数值,
  __proto__: Number
}
```

运算操作符`+、-、*、/、%`等会对`非number类型`尝试调用`valueOf()`方法（字符串拼接除外），对于三个特殊值会返回 0：`""、null、false`，对象先调用`valueOf()`，若 NaN，再调用`toString()`

特别的，NaN 是特殊的数值，但不等于任何值包括自身

```js
typeof NaN == 'number' // true

!isNaN(A) //用于判断A是否是数值
```

### 5.1 常用方法

```js
toFixed(n) //保留n位小数
toPrecision(n) // 保留n位数，科学计数法  99.toPrecision(1) = 1e+2
```

## 6. String

```js
String:{
  [[PrimitiveValue]]: 'abc',
  '0': 'a',
  '1': 'b',
  '2': 'c',
  length: 3,
  __proto__: String
}
```

字符串由零或多个 16 位 Unicode 字符组成

转义序列：如&nbsp，尽管本身由多个字符构成，但参与字符串长度计算时为 1

简单数据类型在调用方法时，其本身并无任何方法，变量保存的仅为一个字面量，故会进行类型包装后再调用相应方法操作并返回，但变量本身并不会改变

> 具体过程: 创建包装对象 —— 调用方法并返回 —— 销毁临时对象

```js
var str = 'abc'
var str1 = str.toUpperCase()
str.length = 1 // 无效
alert(str1) // ABC
alert(str) // abc
alert(str.length) // 3
```

### 6.1 常用方法

```js
charAt(index) // 返回字符串指定索引处的字符，相当于[index]
charCodeAt(index) // 返回字符串指定索引处的字符所对应的字符编码
concat(str) // 拼接字符串，相当于”+”
indexOf(value, startIndex) // 从startIndex（默认为0）开始向后查找首个匹配”value”的索引并返回
lastIndexOf(value, index) // 从后向前查找
```

```js
// 大小写转化
toLowerCase()、toUpperCase()、toLocaleLowerCase()、toLocaleUpperCase()
```

```js
trim() // 删除前后置所有空格，还分trimLeft()和trimRight()
split(a) // 对字符串进行分隔，并放入数组中，以a作为标志分隔符，默认为' '
join(a) // 将数组元素拼接成字符串，以a作为分隔符，默认为','
```

```js
// ☆截取字符串操作
slice(start, end) // 截取[start,end)区间的字符串  数组也是使用这个方法来截取数组元素
substring(start, end) // 截取[start,end)区间的字符串
substr(start, num) // 从start开始截取num个字符串
// slice: start和end为负时代表倒数
// substring: start和end为负代表0（有反转操作，当start > end时）
// substr: start为负代表倒数，num为负代表0
```

## 7. 引用类型 Object

对象是由多个键值对构成的无序合集

### 7.1 引用数据类型与简单数据类型的区别

1. 有属性和方法
2. 内部可改变
3. 变量保存的是对象的`指针`

对象实例都会有一个`__proto__`属性（不可枚举）指向原型，专有方法由原型链继承而来；对象在使用字面量表示法即`let o = { ... }`的形式定义时，其**proto**为 Object。（最纯的空对象:Object.create(null)）

### 7.2 属性特征( 学习源码时需要 )

`configurable`、`enumerable`、`writable`、`value`、`getter/setter`

```js
Object.defineProperties(obj, {
	id: {
		value: 17,
		writable: true,
		enumerable: true,
		configurable: false,
	},
	name: {
		enumerable: true,
		configurable: false,
		get() {
			return _name
		},
		set(str) {
			_name = str
		},
	},
})
```

## 8. Function

```js
Function:{
  arguments: { '0': 传参1, '1': 传参2, length:2, callee: 函数 },
  caller: 函数调用者指针,
  this: fReference.base,
  __proto__: Function,
}
```

### 8.1 函数参数

1. 参数不是必须的(但不写你会被同事打)，只是方便书写和阅读，内部是使用`arguments`伪数组来存储传入参数
2. 参数是`按值传递`的，对于引用类型传递的是`指针`而非在堆空间 new 出来的对象本身
3. 即使定义了参数个数，但在函数调用时依旧可传入多于或少于规定的参数个数
4. 函数没有签名，不能规定传入参数类型（TypeScript 弥补了这一缺陷）

```js
fun(3, person) 等价于 fun(argument[0] = 3, argument[1] = person )

// argument[1].name ='jack'会修改到person 而argument[1]={name:'jack'}不会
// 相当于改变了argument[1]的指针，不再和person同一个指针
```

### 8.2 函数里的 this

指向函数的实际调用对象，不恰当的来说，在哪个对象内部环境执行，this 就保存哪个对象的指针，注意：this 只在函数被调用时才确定，定义时未确定！

```js
obj.fn()
// 执行前发生的事:
// 1.计算MemberExpression即fn，获得fnReference
fnReference = {
	base: obj,
	propertyName: 'fn',
	strict: false,
}
// 执行时，创建fn的执行上下文fnEC
fnEC = {
	AO: {
		arguments: { length: 0, callee: fn },
		this: fnReference.base,
		// ...
	},
	Scope: [VO, AO],
}
```

☆ 手动指定 this 的方法

```js
apply(obj, arr), apply(obj, arguments), apply(obj, num1, num2)
call(obj, num1, num2)
bind(obj) // 返回一个绑定了obj为this的函数
```

### 8.3 函数的三种表达式

```js
// 函数声明式
function fn(){ ... }
// 函数表达式
let fn = function(){ ... }
// 命名函数表达式
let fn = function getId(){ ... }
```

区别：

1. 函数声明式存在`函数提升`的效果，即声明前调用是允许的，而函数表达式则要解析器执行到它所在代码行时，才会被解释执行
2. 函数声明式会给函数对象设置`name`为函数名，而函数表达式由于本质上是声明一个匿名函数再赋值指针给这个函数变量，name 为""
3. 命名函数表达式和函数声明式差不多，也会为函数对象设置 name，只是将函数指针保存到一个变量而已，无函数提升现象，表现与普通变量提升一样

### 8.4 自执行函数

将函数声明语句转化为自执行函数的方法:

```js
(function(){....})()
true && function(){...}()
false || function(){...}()
0, function(){...}()
// 一元操作符:+、-、*、/、！、~、&、|
```

自执行函数作用：

1. 避免作用域下的命名污染和命名冲突
2. 利于压缩，一些源码都会大量使用自执行函数

另外自执行函数前最好加一个";", 防止报错

## 9. Array

```js
Array:{
  '0': 7,
  '1': 2,
  '2': 2,
  length: 3,
  __proto__: Array
}
```

数组的每一项可保存任何类型的数据，数组本质上是一个对象，索引对应属性 key，项值对应属性值 value，其 length 由项数双向动态决定。

`new Array(7)`相当于创建一个数组，且其 length = 7，每个项都为 undefined（特别地，delete 掉数组的 key，length 不变，而是将 delete 的 key 对应的 value 设为 undefined）

### 9.1 判断是否为数组的方法

```js
arr instanceof Array
Array.isArray(arr)
arr.constructor == Array
Object.prototype.toString.call(arr) == '[object Array]'
```

### 9.2 常用数组方法

① 会修改原数组

```js
push() // 数组尾项插值
unshift() // 数组首项插值
pop() // 删尾项并返回
shift() // 删首项并返回
reverse() // 反转数组
sort() // 对数组进行排序，传入参数为比较函数
// arr.sort( (a,b) => a - b ) 比较函数，返回负数按从小到大排序
☆ splice(start, num, newArr) // 从start开始往后删num个项，并在start处插入newArr，返回删除的项组成的数组
```

② 不修改原数组

```js
concat() // 拼接数组
slice(start, end) // 截取[start,end),end默认为数组长度,start默认为0
indexOf(value, start) // 从start开始向后查找首个匹配value的项的index并返回，无返回-1
lastIndexOf(value, end) // 从后查找
```

③ 数组迭代方法：

```js
// 1、检测
every((el, idx) => {}) // 对数组每个项运行传入函数，若都return true，则最终return true
some((el, idx) => {}) // 若有一个结果return true，则return true
// 2、筛选
filter((el, idx) => {}) // 返回return true的项组成的数组
// 3、遍历
forEach((el, idx) => {}) // 无返回值（相当于for循环）
map((el, idx) => {}) // 返回回调函数返回结果组成的数组
// 4、归并
reduce((pre, cur, idx, arr) => {}, preNum) // 其中prev = prev’ + cur’,最开始prev为0
```

```js
var arr = [1, 2, 3, 4]
var res

res = arr.every((item, index, array) => item > 2) // false
res = arr.some((item, index, array) => item > 2) // true
res = arr.filter((item, index, array) => index > 1) // [3,4]
res = arr.map((item, index, array) => item * 2) // [2,4,6,8]
arr.forEach((item) => (item += 1))
console.log(arr) // [1,2,3,4] 不变

res = arr.reduce((pre, cur, index, array) => pre + cur) // 10
```

## 10. Global

定义全局环境，在浏览器宿主环境中作为 window 对象的一部分存在来加以实现
方法:

```js
encodeURI()
encodeURIComponent()
decodeURI()
decodeURICompnent();
URI：Uniform Resource Identifier,统一资源标识符
```

属性：`undefined`、`NaN`、`Infinity`以及各种对象构造器

## 11. Math

方法

```js
max(a,b,c) // 或max.apply(Math,arr)
min(a,b,c)
ceil() // 向上取舍
floor() // 向下取舍
round() // 四舍五入
abs() // 绝对值
sqrt() // 平方根
pow(n,m) // n^m
random() // 生成[0, 1)区间随机数
☆Math.floor(Math.random()*(r - l + 1) + l) // 生成[l , r]区间随机整数
```

## ☆12. 作用域与作用域链 (Context & Scope)

略，传送门 👇👇👇

[《一文搞懂执行上下文、VO、AO、Scope、[[scope]]、作用域链、闭包》](https://juejin.cn/post/7121724252381773861)

## ☆13. 原型链

逐层向上查询，找到立即中断查询

```js
instance --> instance.__proto__ --> ... --> Object --> Object.prototype --> null
```

方法

```js
isPrototypeOf(instance)
hasOwnProperty(property) / hasPrototypeProperty(property)
Object.keys(obj) // 返回对象上所有可枚举属性组成的数组
key in obj // 返回布尔值，in操作符范围扩展到原型上
```

获取自有属性

```js
let arr = []
for (key in obj) {
	obj.hasOwnProperty(key) && arr.push(key)
}
// 或
arr = Object.getOwnPropertyNames(obj) // ES5新增（不可枚举属性也返回）
```

## ☆14. 创建对象模式

### 14.1 工厂模式

```js
function createPerson(age, name) {
  let o = new Object()
  o.name = "Jack"
  o.fn = () => { ... }
  return o
}
```

本质：内部创建一个对象实例，并赋上传入的属性值，最后返回

缺点：不能自定义对象类型

### 14.2 构造模式

```js
function Person(name, age) {
  this.name = name
  this.fn = () => { ... }
}

var person1 = new Person("Jack", 17)
```

缺点: 方法要在每个实例上重新在创建一遍，占内存且复用性差！

### 14.3 原型模式（属性、方法共享）

```js
function Person() {}

Person.prototype.name = "Jack"
Person.prototype.fn = () => { ... }
```

### ☆14.4 构造原型模式（属性私有，方法共享）

```js
// 属性私有
function Person(name) {
  this.name = name
}
// 方法共享
Person.prototype.fn = () => { ... }
```

### 14.5 扩展

#### 动态原型模式

动态添加方法，可防止错误将原型方法置 null 的情况

```js
function Person(name) {
  this.name = name
  if(typeof this.fn != "function") {
    Person.prototype.fn = () => { ... }
  }
}
```

#### 寄生构造函数模式（工厂 + 构造）

主要用于扩展原生对象

```js
function SuperArr() {
	var arr = new Array()
	arr.push.apply(arr, arguments)
	arr.toSerial = function () {
		return arr.join('-')
	}
	return arr
}
```

#### 稳妥构造函数模式

将内部变量私有化，对外提供接口访问

```js
function Person(name, age) {
	let name = name // 私有变量
	let age = age

	let o = new Object() // 对外暴露API
	o.getName = () => name + '77'
	o.setName = (newName) => (name = newName)
	return o
}
```

## ☆15. 继承

这里插一句：ES6 原生可以实现继承，而 ES5 得自己实现！

### 15.1 原型链继承

```js
A.prototype = new B()
A.prototype.constructor = A
```

存在问题：

1. 父实例中的属性成了公有属性
2. 创建子实例时不能向父类的构造函数传递参数

### 15.2 构造函数继承

```js
function B() {
	this.name = 'Jack'
}

function A() {
	B.call(this)
}
```

### ☆15.3 组合继承

即上述两种方法结合

```js
function B(name) {
  this.name = name
}
B.prototype.fn = () => { ... }

function A(name, age) {
  B.call(this, name)
  this.age = age
}
A.prototype = new B() // 原型为：{ name: undefined }
A.prototype.constructor = A

let a = new A('jack', 17)
```

缺点: 子类实例与其原型有同名属性，不优雅

### ☆15.4 寄生组合式继承（完美继承）

```js
function inheritPrototype(A, B) {
	A.prototype = Object.create(B.prototype)
	A.prototype.constructor = A
}
```

# BOM

---

**Browser Object Model**，包含用于访问浏览器的各种接口：

> window、Location、History、Navigator、Screen

## 1. window

既是通过 JS 访问浏览器窗口的一个接口，也是 ES 规定的 Global 对象

### 1.1 属性

```js
screenLeft、screenTop // 窗口相对于屏幕左(上)方的位置
outerWidth、outerHeight // 窗口总宽高
innerWidth、innerHeight // 窗口视图区宽高
```

### 1.2 方法

```js
open(URL, '_self' / '_blank', config) //打开一个新窗口
setTimeout(function(){...}, ms)
setInterval(function, ms)
clearTimeout(id)
clearInterva(id)
confirm(msg) // 弹出模态框，打印msg，根据用户选择返回boolean值
prompt(msg) // 弹出模态框，打印msg，根据用户输入返回string值
moveTo(x, y)  moveBy(⊿x , ⊿y) // 改变窗口相对屏幕的坐标
resizeTo(x, y)   resizeBy(⊿x, ⊿y) // 改变窗口总宽高
```

setTimeout 和 setInterval 的注意点:

1. 两者都按指定时间，将回调函数推入 JS 任务队列，异步执行（宏-->微-->宏），等主线程中所有同步任务都已经执行完毕之后才会被推入执行栈
2. `setTimeout(cb, 0)`相当于将 cb 推入 JS 任务队列底部
3. setInterval 的时间间隔最短为用户电脑`显示器刷新频率`60HZ（16.7ms）
4. setInterval 具有`累积效应`，即上一个任务开始执行时，下一个任务就已经开启计时，可能导致任务重叠执行
5. 由于 4，故一般要采用 setTimeout 递归来模拟

```js
setTimeout(function () {
	alert(1)
	setTimeout(arguments.callee, 1000)
}, 1000)
```

6. 可应用在轮播图切换、页面滚动场景中，但是会因为显示器刷新频率的原因造成卡顿
   ，所以最好还是用 css3 来定制动画(`animation、@keyFrame`)或者使用`requestAnimation frame`

## 2. Location

主要提供当前窗口中加载文档相关信息以及一些导航功能

### 2.1 属性

```js
protocal // 协议
hostname // 域名
port // 端口号
pathname // 目录和文件名
hash // 哈希值
search // 查询字符串（以"?"开头）
href // 完整URL即（protocal + ': //' + hostname）也是Location对象toString的返回值
```

### 2.2 跳转操作

```js
window.open(URL)
window.location = URL
location.href = URL
location.assign(URL)
location.replace(URL) // 不会生成历史记录
```

## 3.History

跳转页面之间的切换

```js
history.go(index)
history.forward() == go(1)
history.back() == go(-1)
history.go(href)
history.length // 历史记录长度
```

## 4.Navigator

获取客户端信息

```js
navigator.userAgent.toLowerCase() // 获取代理客户端
```

# DOM

---

**Document Object Model**，针对于 HTML 和 XML 文档提供的 API，描绘一个层次化的节点树，允许对节点增删改查等操作

## 1. Node 类型

由 DOM1 级定义，在 JS 中作为 Node 类型实现，`将html元素映射作js中的Node类`，从而方便操作 dom

10 个公有属性

```js
nodeType // 节点类型
nodeName // 节点名称
nodeValue
childNodes // 所有子节点（包括空格文本节点）构成的NodeList动态伪数组
ownerDocument // 返回document
```

```js
firstChild
lastChild
parentNode
nextSibling
previousSibling
```

7 个公有方法

```js
hasChildNodes()
cloneNode(true) // 深拷贝
normalize() // 合并文本节点
```

```js
appendChild(newEl) // 增
insertBefore(newEl, curEl) // 插
removeChild(curEl) // 删
replaceChild(newEl, curEl) // 改
```

## 2. document

是`<html>`节点的父节点、根节点、文档节点

属性

```js
title // 文档名
charset // 字符集

doctype // <!DOCTYPE>
documentElement // <html>
body // <body>
head // <head>
forms // 所有<form>
Images // 所有<img>
links // 所有<a>

// 网址相关
URL // 网址
domain // 域名
referrer // 来源页面

readyState // 页面加载状态 'loading' / 'complete'
compatMode // 浏览器渲染模式 'CSS1Compat' / 'BackCompat'
```

方法

```js
getElementById()

// 动态HTMLCollection伪数组:
getElementsByTagName()、getElementsByClassName()、getElementsByName()

// 静态伪数组:
querySelector()、querySelectorAll()

createElement("div") // 创建元素节点
createTextNode("this is a text") // 创建文本节点
createDocumentFragment() // 创建DOM片段

write()、writeln() // 空之前的内容
hasFocus() // 判断是否聚焦，一般是针对于input类
```

动态集合：DOM 结构变化能自动映射到保存的伪数组中（有引用关系）

静态集合：DOM 结构变化不会反映到之前保存的伪数组中（仅 copy 关系）

☆ 动态集合比静态性能好很多，一个从 DOM 缓存中直接获取，一个要在后台遍历一次 DOM，一般难获取的节点才会使用 query

## 3. Element 类型

很多属性和方法其实已继承 document

属性

```js
id
className
classList // class数组
data - key // 自定义特殊属性
tagName
value
children // HTMLColloction数组(不包含文本节点)
parentNode // 父节点
attributes // attrs数组
innerHTML // 返回元素所有子节点对应的HTML标记
outerHTML // 扩大范围到元素自身
```

方法

```js
getAttribute('data-name') // 以data-为前缀的特殊属性对应的值
setAttribute('data-name', 'Jack')
removeAttribute()
```

`childNodes`与`children`的区别：

1. childNodes 是`nodeList`伪数组（包含文本节点和空格）
2. children 是`HTMLColloction`伪数组（不包含文本节点）

classList 方法

```js
toggle(className) // 切换类名
add(className) // 添加类名
remove(className) // 移除类名
contains(className) // 判断是否包含类名
```

## 4. 事件

### 4.1 事件流

> 捕获阶段 --> 目标阶段 --> 冒泡阶段

注意：从 window 开始捕获, 仅与 DOM 结构有关而与 CSS 样式无关

### 4.2 事件处理程序

响应某个事件的函数，由`on`+`事件名称`构成，形如`onEvent`

#### 4.2.1 HTML 事件处理程序

回调函数绑定在标签上

缺点：

1. HTML 和 JS 代码紧密耦合，不利于维护
2. 时差问题，即元素一出现在页面上就触发相应事件（如 onload），但事件处理程序还未就绪

#### 4.2.2 DOM0 级事件处理程序：

回调函数绑定在标签对应的 dom 上

```js
btn.onclick = () => { ... }
btn.onclick = null // 注销事件
```

#### 4.2.3 DOM2 级事件处理程序：

回调函数也是绑定在标签对应的 dom 上，只是绑定的方式优雅规范一些

```js
btn.addEventListener("click", () => { ... }, false)
// 第三个参数为是否在捕获阶段就执行回调，默认为false即冒泡阶段执行
btn.removeEventListener"click", () => { ... }() // 注销事件
```

注意：

1. 不存在重写：给一个 dom 添加多个相同的事件处理程序会从上到下依次执行
2. DOM 节点被移除前，最好手动解绑事件处理程序，以防内存泄漏

### 4.3 事件对象 event

在事件处理程序作为第一个参数 event 传入

```js
btn.onclick = function(event){ ... }
```

属性

```js
target // 事件实际目标
currentTarget // 当前正在处理事件的元素

type // 事件类型
bubbles // 事件是否冒泡
eventPhase // 1.捕获 2.目标 3.冒泡
```

方法

```js
preventDefault() // 取消事件默认行为
stopPropagation() // 取消事件进一步冒泡
stopImmediatePropagation() // 取消事件进一步冒泡, 同时阻止任何事件处理程序调用
```

举个应用实例

```js
// 一个函数处理多个事件
let handler = function (e) {
	switch (e.type) {
		case 'click':
			e.preventDefault // 取消inputSubmit的提交行为
			break
		case 'mouseover':
			alert(e.target) // buttonElement
			break
		case 'mouseout':
			alert(e.target.id) // buttonElement.id
			break
	}
}
inputSubmit.onclick = handler
btn.onmouseout = handler
btn.addEventListener('mouseover', handler, false)
```

### 4.4 事件委托

利用`事件冒泡`，在 DOM 树最高层上绑定事件处理程序，即可统一处理子 DOM 事件

```html
<ul>
	<li class="li1">1</li>
	<li class="li2">2</li>
	<li class="li3">3</li>
</ul>
```

```js
ul.onclick = function (e) {
	switch (e.target.className) {
		case 'li1':
			alert(1)
			break
		case 'li2':
			alert(2)
			break
		case 'li3':
			alert(3)
			break
	}
}
```

# JSON

---

**JS Object Notation**，即 JavaScript 对象表示法，JSON 是一种数据格式，用于在互联网上传输结构化数据，很多编程语言都有针对 JSON 的`解析器`和`序列化器`

## 1. JSON 可表示的数据类型

Object、Array、String、Number、Boolean，不支持 undefined

## 2. JSON 对象格式

- 无声明变量
- 没有末尾分号
- 属性必须加双引号，数组同理

## 3. 序列化器

```js
JSON.stringify(obj) // 将obj对象转换成JSON对象
```

## 4. 解析器

```js
JSON.parse(json) // 将JSON对象转换为obj对象
```

## 补充

```js
JSON.parse(JSON.stringify(obj)) // 使用JSON实现对象深克隆
```

# AJAX

---

**Asynchronous Javascript And XML**，异步 JS 及 XML，技术核心是`XMLHttpRequest`实例对象 xhr，即向服务器发送请求和解析服务器响应的接口，以异步方式从服务器取得更多信息

```js
let xhr = new XMLHttpRequest() //创建xhr
let res = null

xhr.onreadystatechange = () => {
	let { readyState, status, responseText } = xhr
	if (readyState == 4) {
		//可用xhr.onload = (event) => {......} 代替简化
		if ((status >= 200 && status < 300) || status == 304) res = responseText
		else alert('请求失败: ' + xhr.status)
	}
}
xhr.open('get', 'URL', true) // 发送请求
xhr.send(null)
```

xhr 属性

```js
readyState // 请求完成状态
0: 未使用open()
1: 调用了open()未调用send()
2: 调用send()但未接收到响应
3: 已经接收到部分响应数据
4: 已接收到全部响应数据

status // 响应HTTP状态
200: 成功
304: 请求资源并未修改可直接使用浏览器中的缓存
301
302
303

responseText // 作为响应主体返回的文本(JSON格式)
```

xhr 方法

```js
open("method", URL, boolean) 第三个参数表示是否异步
send("data")
getResponseHeader("响应头")
getRequestHeader("请求头")
getAllResponseHeaders()
setRequestHeader("请求头", "值")
```

# CORS

---

## 1. 问题来源:

通过 XHR 实现 AJAX 通信有跨域问题（出于安全，XHR 对象只能访问同源资源）

## 2.解决方案

`CORS`：Cross—Origin Resource Sharing， 跨域资源共享，定义了必须跨域访问时，浏览器与服务器应如何沟通。根本思想是使用`自定义的HTTP头部`让浏览器与服务器进行沟通

```js
Origin: "http://www.domain.com"  // 请求源
Access-Control-Allow-Origin: "https://www.domain.com"  // 服务器允许源
```

## 3. CORS 的实现

1. 可通过 xhr 对象实现对 CORS 的原生支持，只要传入绝对 URL 即可，但跨域 XHR 有一些安全限制： 1.不能使用 setRequestHeader(“请求头”, “值”)设置自定义头部 2.调用 getAllResponseHeaders()返回空字符串 3.不能发送和接收 cookie
2. Preflighted Requests
3. 带凭据的请求(withCredentials)

简单的跨浏览器 CORS

```js
function createCORSRequest(method, url) {
	let xhr = new XMLHttpRequest()
	if ('withCredentials' in xhr) {
		xhr.open(method, url, true)
		return xhr
	}
	if (typeof XDomainRequest != 'undefined') {
		xhr = new XDomainRequest()
		xhr.open(method, url)
		return xhr
	}
	return null
}
```

## 4. 其他跨域技术：

1. JSONP： `<script>`可以跨域
2. Comet：服务器向页面单向推送数据
3. SSE：服务器向页面发送事件
4. Web Sockets：全双工、双向通信
