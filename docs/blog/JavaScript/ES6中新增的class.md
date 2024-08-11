---
title: ES6中新增的class
author: NOxONE
date: '2022-07-19'
categories:
  - js
tags:
  - js
---

`class`与其他面向对象编程语言中的类是不同的，它只是单纯的一个`声明构造函数的语法糖`，简化了原型和继承的实现，使得语法更加优雅，代码结构层次更加清晰，健壮

```js
// es6实现类
class Person {
	constructor(id, cb) {
		// 定义实例上的属性和方法
		this.id = id
		this.cd = cb

		// 隐含操作
		// this.__proto__ = Person.prototype
		// this.__proto__.constructor = Person
		// return this
	}
	fn() {} // 定义原型上的方法，即Person.prototype.fn
	fn2 = function () {} // 定义实例上的方法，即instance.fn2
	age = 1 // 定义实例属性，即instance.age
}
// es5实现类
function Person(id, cb) {
	this.id = id
	this.cb = cb
	this.age = 1
	this.fn2 = function () {}
}
Person.prototype.fn = function () {}

// es6实现继承
class Man extends Person {
	constructor(id, cb, sex) {
		super(id, cb) // 继承
		this.sex = sex

		// 隐含操作
		// this.__proto__ = new Person()
		// this.__proto__.constructor = Man
		// return this
	}
}
// es5实现继承
function Man(id, cb, sex) {
	Person.call(this, id, cb)
	this.sex = sex
}
Man.prototype = new Person()
```

使用`static`可定义类上的`静态属性`和`静态方法`，实例不可访问

```js
// es6
class Person {
	static id = 1
	static sayHello() {
		alert('hello')
	}
}
Person.sayHello()

// es5
function Person() {}
Person.sayHello = function () {
	alert('hello')
}
Person.id = 1
```

使用`get/set`定义原型上属性存取操作函数

```js
// es6
class Person{
  get name(){
    return 'jack'
  }
  set name(newVal,oldVal){
    this.name = newVal
    console.log(`new:${newVal},old:${oldVal}`)
  }
}

// es5
function Person(){}
Person.prototype={
  get name(){
    return 'jack'
  }
  set name(newVal,oldVal){
    this.name = newVal
    console.log(`new:${newVal},old:${oldVal}`)
  }
}
```

class 到 function 的 Babel 编译

```js
// es6
class Person{
  constructor(name){
    this.name = name // instance.name
  }
  id=1008 // instance.id
  sayName(){ return this.name} // prototype.sayName
  get name(){ return 'jack' } // prototype.name(getter/settter)
  set name(newVal,oldVal){
    this.name = newVal
    console.log(`new:${newVal},old:${oldVal}`)
  }
  static sayHello(){ return 'hello' } // constructor.sayHello
}

// es6 to es5 by Babel
var Person = (function(){
  function Person(name){
    if(!this instanceof Person) throw new Error(`Cannot call a class as a function`)
    this.name = name
    this.id = id
  }
  _createClass(
    Person,
    [ // prototype
      { key:'sayName', value:function sayName(){...} },
      { key:'name', get:function(){...}, set: function(){...}}
    ],
    [ // constructor
      { key:'sayHello', value: function sayHello(){...} }
    ]
  );
  return Person
})();

var _createClass = (function(){
  function def(target,props){
    for(var i = 0;i<props.length;i++){
      var desc = props[i]

      desc.enumerable = !!desc.enumerable // 默认不可遍历
      desc.configurable = true
      desc.writable = 'value' in desc

      Object.defineProperty(target,desc.key,desc)
    }
  }
  return function(Constructor,protoProps,staticProps){
    if(protoProps) def(Constructor.prototype, protoProps)
    if(staticProps) def(Constructor, staticProps)
    return Constructor
  }
})()
```

## 参考

[1. 了解 JS 中的类](https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript)

[2. Babel 如何编译 class 上](https://github.com/mqyqingfeng/Blog/issues/105)

[3. Babel 如何编译 class 下](https://github.com/mqyqingfeng/Blog/issues/106)
