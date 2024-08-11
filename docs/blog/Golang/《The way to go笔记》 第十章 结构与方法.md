---
title: 《The way to go笔记》 第十章 结构与方法
author: NOxONE
date: '2023-05-22'
categories:
  - Golang
tags:
  - Golang
---


## 10.1 结构体的定义和初始化

### 10.1.1 定义

```golang
type obj struct {
  key1 type1
  key2 type2
  ...
}
```

字段可以是任何类型，甚至可以包括结构体本身、函数或接口

### 10.1.2 初始化

结构体初始化有多种方式

```golang
type Obj struct {
  name  string
  id    string
  age   int
}
```

```js
o2 := Obj{ "noxone", "1007", 18 } // 按字段定义顺序赋值
o3 := Obj{ name: "noxone", id: "1007", age: 18 } // 字段显式赋值
o4 := Obj { name: "noxone" } // 其余字段为对应类型零值

// 以下返回的是指针
o5 := new(Obj)
o5.name = "noxone" // &{ name:"noxone", id: "", age: 0 }
o6 := &Obj{ name: "noxone", id: "1007", age: 18 } // &{ name: "noxone", id: "1007", age: 18 }
```

### 10.1.3 结构体内存连续

Go 语言中，结构体和它所包含的数据在内存中是以`连续块`的形式存在的，即使结构体中嵌套有其他的结构体，这在性能上带来了很大的优势!

```js
type Rect1 struct {Min, Max Point }
type Rect2 struct {Min, Max *Point }
```

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/aba90b27241b461194cf75edcf1b2e7d~tplv-k3u1fbpfcp-watermark.image?)
由于结构体内数据在内存中是连续的，所以定义一个链表结构、二叉树结构也从根本上实现了内存连续！！！

```js
// 链表节点
type LinkNode struct {
  pre   *LinkNode
  val   float64
  next  *LinkNode
}

// 二叉树节点
type TreeNode struct {
  left  *TreeNode
  val   float64
  next  *TreeNode
}
```

### 10.1.4 结构体别名

```js
type Person struct {
  name  string
}

type People Person // 定义Person别名

p1 := Person{ "jack" }
p2 := People{ "jack" }

// People转Person
// var p3 Person = P2  error
p3 := Person(p2)
```

## 10.2 工厂模式创建结构体实例

Go 语言不像其他面向对象编程语言中那样可以使用构造子方法（即`new Obj(...)`）来创建实例，因此常用的是替代性的使用工厂模式来弥补这一短板

```js
func NewObj(name string, age int) *Obj {
  return &Obj{ name, age }
}
```

## 10.3 结构体标签

结构体中的字段除了`key`和`type`之外，还有一个可选的标签`tag`：它是一个附属于字段的字符串，在后续可以通过泛型`reflect.TypeOf(obj).Field(idx).Tag`拿到对应下标的tag

```js
type Obj struct {
  key1 int `tag1`
  key2 int `tag2`
}

func main() {
  obj := Obj{ 1, 2 }
  objType := reflect.TypeOf(obj)
  
  for i := 0; i < 2; i++ {
    ixField := objType.Field(i)
    fmt.Println(ixField.Tag) // tag1 tag2
  }
}
```

## 10.4 内嵌结构体

结构体可以`内嵌结构体`或者`其他值类型`，作为`匿名字段`。在Go中，继承是通过内嵌或组合来实现

```golang
type Person struct {
  name  string
}
type SuperMan struct {
  id  int
  Person // 内嵌结构体
  bool // 内嵌值类型
}
func main() {
  s := new(SuperMan)
  s.id = 107
  s.name = "noxone"
  s.bool = true
  
  fmt.Println(s) // &{ id:107, Person:{ name: "noxone" } bool:true }
  fmt.Println(s.name) // noxone 实际上为 s.Person.name，类似js的原型链查找

  // 以下是使用结构体字面量定义
  s2 := SuperMan{
    id: 107,
    Person: Person{
      name: "noxone"
    },
    bool: true,
  }
  s3 := SuperMan{107, Person{"noxone"}, true}
  
  fmt.Println(s2) // { id:107, Person:{ name: "noxone" } bool:true }
  fmt.Println(s3) // { id:107, Person:{ name: "noxone" } bool:true }
}
```

在一个结构体中，当字段相同时，外层会覆盖内层，同层字段相同则会报错(不使用的时候不报错！)

```golang
// 外层会覆盖内层
type A struct { a int }
type C struct {
  A
  a  int
}
func main() {
  c := C{ a: 10 } // { a: 10, A: {a:0} }
  fmt.Println(c.a) // 10
  fmt.Println(c.A.a) // 0
}
```

```golang
// 同层字段相同报错
type A struct {a int}
type B struct {a, b int}
type C struct {
  A 
  B
}

func main() {
  c := C{} // { A: {a:0}, B: {a:0, b:0} }
  fmt.Println(c.a) // ambiguous selector c.a 摸棱两可的c.a（可能是c.A.a或c.B.a）
}
```

## 10.5 方法

### 10.5.1 定义

在Go中，方法是作用在接收者（receiver）上的一个函数，接收者是某种类型的变量，定义方式如下

```js
func (recv receiver_type) methodName(parameter_list) (return_value_list) { ... }
```

其中`recv`是接收者（可以立即为JS中的`this`），`receiver_type`是接收者的类型，剩余的是定义的方法，在方法中可以操作`recv`，从而访问到`recv`里边的字段

```js
type Obj struct {
  name  string
}
func (this Obj) getName() string { // 这里的this并非关键字，只是单纯的变量名，你也可以命名为self，怎么舒服怎么来
  return this.name
}
func (this *Obj) setName(newName) {
  this.name = newName
}
```

### 10.5.2 接收者按值传递和按指针传递

一般修改实例属性的方法都要指定传入指针而非值，否则修改不成功

**按值传递**

```js
type Obj struct {
  name  string
}
func (this Obj) setName(newName) {
  this.name = newName
}

func main() {
  o := Obj{"a"}
  o.setName("b")
  fmt.Println(o.name) // a，改了个寂寞
}
```

**按指针传递**

```js
type Obj struct {
  name  string
}
func (this *Obj) setName(newName) {
  this.name = newName
}

func main() {
  o := Obj{"a"}
  o.setName("b")
  fmt.Println(o.name) // b
}
```

### 10.5.3 getter/setter

```golang
package person

// 属性小写开头意味着对外部包不可见 
type Person struct {
    firstName string
    lastName  string
}

// 只能通过方法访问属性
func (p *Person) FirstName() string {
    return p.firstName
}

func (p *Person) SetFirstName(newName string) {
    p.firstName = newName
}
```

### 10.5.4 方法继承

在go中，实例可以继承内嵌结构体实例的方法

```js
type Engine struct {
  v float64
}

type Car struct {
  Engine
  name string
}
func (this *Engine) getV() {
  fmt.Println("引擎速度为: ", this.v)
}

func main () {
  car := &Car{ Engine{100}, "BMW" }
  car.getV() // 引擎速度为：100
}
```

在自身定义方法，可以覆盖继承的同名方法

```js
func (this *Car) getV() { // 覆盖基类
  fmt.Println(this.name, "的速度为: ", this.v + 50)
}

func main () {
  car := &Car{ Engine{100}, "BMW" }
  car.getV() // BMW的速度为：150
}
```

对于方法的继承，具体分为**组合**和**内嵌**，区别是什么呢？不多bb，上代码

**组合**

```golang
type A struct {}
type B struct {}
type C struct {
  id  int
  a   *A
  b   *B
}
func (this *A) fnA() { fmt.Println("a") }
func (this *B) fnB() { fmt.Println("b") }

func main() {
  c := new(C)
  c.a.fnA() // a
  c.b.fnB() // b
  
  // 下面这样不行！
  c.fnA() // c.fnA undefined (type *C has no field or method fnA)
}
```

**内嵌**

内嵌也是默认常用的实现继承的方式

```golang
type A struct {}
type B struct {}
type C struct {
  id  int
  A
  B
}
func (this *A) fnA() { fmt.Println("a") }
func (this *B) fnB() { fmt.Println("b") }

func main() {
  c := new(C)
  c.fnA() // a   
  c.fnB() // b
  
  // 下面这样也OK，实际上和JS的原型链查找类似
  c.A.fnA() // a
  c.B.fnB() // b
}
```

### 10.5.5 多重继承

Go实现继承相比其他语言来说比较奔放，js老弟是通过原型即`prototype`，java老哥则是`class B extend A`

不管js还是java，继承的本质上都是`一个儿子一个爹`

而Go就像吕布那样奔放，`一个儿子多个爹！！！`

但是要注意的是父类之间的方法和属性名千万别重合，否则报形如`ambiguous selector o.fn`的错

```js
type Camera struct{}
func (c *Camera) TakeAPicture() string { return "Click" }

type Phone struct{}
func (p *Phone) Call() string { return "Ring Ring" }

type CameraPhone struct {
    Camera
    Phone
}

func main() {
  cp := new(CameraPhone)
  cp.TakeAPicture()
  cp.Call() 
}
```

### 10.5.6 String()方法和格式化描述符

在调用`fmt.Println(o)`时，或其他尝试获取`o`的字符串操作时，会自动调用`o`的`String()`方法，和JS里的`toString()`一毛一样

```js
type Obj struct{
  name  string
}
func (this Obj) String() string {
  return "hello " + this.name
}

o := Obj { "noxone" }
fmt.Println(o) // hello noxone
fmt.Printf("%v", o) // hello noxone
fmt.Printf("%T", o) // main.Obj
fmt.Printf("%#v", o) // main.Obj{name: "noxone"}
```
