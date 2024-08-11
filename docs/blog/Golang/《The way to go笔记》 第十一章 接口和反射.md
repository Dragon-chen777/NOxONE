---
title: 《The way to go笔记》 第十一章 接口和反射
author: NOxONE
date: '2023-05-30'
categories:
  - Golang
tags:
  - Golang
---

## 11.1 What's an interface?

接口是什么呢？一言以蔽之：“接口是一个`抽象类`，只`定义方法`但`不实现`，让其他对象去实现（实现接口）后再接收”，在接口类型定义的所有方法称为`方法集`，方法接收者有对象的`值类型`或`指针类型`

打个比方，接口类型就是一个适配器，让其他对象去实现接口，自己作为适配器接收就行了

下面定义一个`Car`抽象接口，`Car`都有哪些具体功能呢？有`Run`、`Stop`、`AutoDrive`

```js
type Car interface {
  Run()
  Stop()
  AutoDrive() bool
}
```

下面是实现接口的一些对象（结构体）

```js
type Wuling struct {
  v  float64
}
func (this *Wuling) Run() {
  fmt.Println("五菱速度：", this.v)
}
func (this *Wuling) Stop() {
  fmt.Println("五菱停车")
}
func (this *Wuling) AutoDrive() bool {
  fmt.Println("老司机不需要自动驾驶")
  return false
}
```

```js
type Tesla struct {
  v  float64
}
func (this *Tesla) Run() {
  fmt.Println("特斯拉速度：", this.v)
}
func (this *Tesla) Stop() {
  fmt.Println("特斯拉停车")
}
func (this *Tesla) AutoDrive() bool {
  fmt.Println("安全自动驾驶已启动，速度为：", 2.5 * this.v)
  return true
}
```

```js
func main() {
  w := &Wuling{ 150 }
  t := &Tesla{ 200 }
  
  var wIntf Car = w // 将Wuling实例赋值给接口类型，以实现接口
  var tIntf Car = t // 实现接口
  
  // 作为已实现接口调用方法
  wIntf.Run() // 五菱速度： 150
  wIntf.Stop() // 五菱停车
  wIntf.AutoDrive() // 老司机不需要自动驾驶
  
  tIntf.Run() // 特斯拉速度： 200
  tIntf.Stop() // 特斯拉停车
  tIntf.AutoDrive() // 安全自动驾驶已启动，速度为： 500
  
  // 作为已实现接口传参
  fmt.Println(isAutoDrivable(wIntf)) // false
  fmt.Println(isAutoDrivable(tIntf)) // true
}

func isAutoDrivable(c Car) bool {
  return  c.AutoDrive()
}
```

注意，接口定义的方法必须全部实现，否则报错

**一个标准库例子**

`io`包里提供了一个接口类型`Reader`

```golang
type Reader interface {
  Read(p []byte) (n int, err error)
}
```

```js
var r io.Reader // 抽象Reader接口

r = os.Stin  // os.Stin对象实现了Read方法
r = bufio.NewReader(r) // bufio.NewReader(r Reader) 传参类型为Reader接口类型，返回的又是一个接口
r = new(bytes.Buffer)
f, _ := os.Open("test.text")
r = bufio.NewReader(f)
```

## 11.2 接口嵌套

和结构体内嵌一样，接口也是可以套娃的

```golang
type ReadWrite interface {
  Read(b Buffer) bool
  Write(b Buffer) bool
}

type Lock interface {
  Lock()
  Unlock()
}

// 组合并拓展ReadWrite、Lock接口
type File interface {
  ReadWrite
  Lock
  Close()
}
```

## 11.3 类型断言

接口类型变量可以包含任何类型的值，所以它属于`动态类型`，可通过`类型断言`来检测

类型断言成功：返回该`类型值`和`true`，类型断言失败：返回`nil`和`false`

```js
if v, ok := varI.(T); ok {
  // ...
}

// 单纯拿到转化类型值
v := varI.(T)
// 单纯判断
_, ok:= varI.(T)
```

**talk is cheap, show me the code**

```js
type Shaper interface { Area() float32 }
type Square struct { side float32 }
type Circle struct { radius float32 }
func (sq *Square) Area() float32 { return sq.side * sq.side }
func (ci *Circle) Area() float32 { return ci.radius * ci.radius * math.Pi }

func main() {
  var areaIntf Shaper  // 定义Shaper接口类型变量
  sq1 := new(Square) // Square类型变量
  sq1.side = 5
  areaIntf = sq1 // Shaper接口接收Square类型变量

  if t, ok := areaIntf.(*Square); ok {
    fmt.Println("area: ", t.Area()) // area:  25
  }

  if v, ok := areaIntf.(*Circle); ok {
    fmt.Println("areaInft断言类型为*Circle，值为：", v)
  } else {
    fmt.Println("areaIntf不包含Circle类型值") //  areaIntf不能断言为*Circle类型，所以走这里
  }
  
  // 注意：若断言类型不为指针类型会报错！！！
  v := areaIntf.(Square) 
  // impossible type assertion: Square does not implement Shaper (Area method has pointer receiver)
}
```

类型断言还可以使用`type-switch`形式来检测

```golang
switch t := areaIntf.(type) { // type是关键字
case *Square: // 会走这里
  fmt.Printf("Type Square %T with value %v\n", t, t)
case *Circle:
  fmt.Printf("Type Circle %T with value %v\n", t, t)
case nil:
  fmt.Printf("nil value: nothing to check?\n")
default:
  fmt.Printf("Unexpected type %T\n", t)
}
```

也可以使用 `switch varIntf.(type) { ... }` 形式，忽略断言返回值

对于处理来自于外部类型未知的数据，例如 JSON 或 XML 编码的数据时，类型测试和转换会非常有用

```golang
func classifier(items ...interface{}) { // 变长接口类型切片
  for i, x := range items {
    switch x.(type) {
    case bool:
      fmt.Printf("Param%d is a bool\n", i)
    case float64:
      fmt.Printf("Param%d is a float64\n", i)
    case int, int64:
      fmt.Printf("Param%d is a int\n", i)
    case nil:
      fmt.Printf("Param%d is a nil\n", i)
    case string:
      fmt.Printf("Param%d is a string\n", i)
    default:
      fmt.Printf("Param%d is unknown\n", i)
    }
  }
}

classifier(7, "abc", true, 3.14)
// Param0 is a int
// Param1 is a string
// Param2 is a bool
// Param3 is a float64
```

## 11.4 接口实现方法接收者

当接口实现方法的接收者为指针时，要求调用者也必须为指针！！

```js
// 接口
type Lener interface {
  Len() int
}
type Appender interface {
  Append(int)
}

// 实现
type List []int
func (l List) Len() int { // 值类型
  return len(l)
}
func (l *List) Append(val int) { // 指针类型
  *l = append(*l, val)
}
func LongEnough(l Lener) bool { // 自动类型断言
  return l.Len()*10 > 42
}
func CountInto(a Appender, start, end int) { // 自动类型断言
  for i := start; i <= end; i++ {
    a.Append(i)
  }
}
```

```js
func main() {
  var list List // 值类型
  list.Len() // 0
  list.Append(1) // [1]
  
  var plist = new(List) // 指针类型
  plist.Append(1) // [1]
  plist.Len() // 1
  
  // 接口类型断言后再调用
  LongEnough(list) // false
  CountInto(list,2,10) // 报错!
  // cannot use list (type List) as type Appender in argument to CountInto:
  // List does not implement Appender (Append method has pointer receiver)

  
  LongEnough(list) // false
  CountInto(list,2,10) // [1 2 ... 9 10]
}
```

以下是Go语言规范定义的接口方法集调用规则

*   类型 `*T` 的可调用方法集包含接受者为 `*T` 或 `T` 的所有方法集
*   类型 `T` 的可调用方法集包含接受者为 `T` 的所有方法，不包含接收者为 `*T` 的方法

## 11.5 接口例子

**1. 冒泡排序**

```js
func main() {  
  var arr = IntArr{2, 1, 4, 3}  
  Sort(arr)  
  fmt.Println(arr) // [1 2 3 4]  
}  
  
// 冒泡排序  
// 传参为接口类型Sorter，其声明了三个方法：Len() int、Less(i, j int) bool、Swap(i, j int)  
func Sort(arr Sorter) {  
  for i := arr.Len() - 1; i > 0; i-- {  
    for j := i; j > 0; j-- {  
      if arr.Less(j, j-1) {  
        arr.Swap(j, j-1)  
      }  
    }  
  }  
}  
  
// 定义接口  
type Sorter interface {  
  Len() int  
  Less(i, j int) bool  
  Swap(i, j int)  
}  
  
// 定义一个数组类型，实现Sorter接口方法  
type IntArr []int  
  
func (p IntArr) Len() int {  
  return p(this)  
}  
func (p IntArr) Less(i, j int) bool {  
  return p[i] < p[j]  
}  
func (p IntArr) Swap(i, j int) {  
  p[i], p[j] = p[j], p[i]  
}
```

再封装一层

```js
// 由于
// var arr = []int{1, 2, 3}
// var arr2 = IntArr(arr)
// 这时arr和arr2共用同一个底层数组
func SortInt(a []int) {
  Sort(IntArr(a))
}

func main() {
  var arr = []int{2,4,1,3}
  SortInt(arr)
  fmt.Println(arr) // [1 2 3 4]
}
```

**2. io包中的Reader和Writter接口**

io包中，定义了两个接口：`io.Reader`、`io.Writter`

```js
type Reader interface {
  Read(p []byte) (n int, err error)
}

type Writer interface {
  Write(p []byte) (n int, err error)
}
```

## 11.6 空接口

空接口即`不含任何方法`的接口，无须实现，通常命名为 `any` 或 `Any`

```js
type Any interface {}
```

任何类型都实现了空接口，所以空接口可用于接收任何类型的变量

```js
type Any interface {}
type Person struct{ name string }
func main() {
  var val Any
  val = 7
  val = "string"
  val = new(Person)
  
  switch val.(type) {
  case int:
    fmt.Println(1)
  case string:
    fmt.Println(2)
  case *Person:
    fmt.Println(3) // 类型断言为*Person，最终打印3
  }
  
  // Test(val)
}

// 或者封装起来
func Test(any interface{}) {
  switch any.(type) {
  case int:
    fmt.Println(1)
  case string:
    fmt.Println(2)
  case *Person:
    fmt.Println(3) 
  }
}
```

用空接口实现通用类型数组，只需指定数组类型为空接口即可

```js
type Any interface{}
type Vector struct {
  a []Any
}
func (p *Vector) At(i int) Any {
  return p.a[i]
}
func (p *Vector) Set(i int, val Any) {
  p.a[i] = any
}
```

通用节点类型

```js
type Node struct {
  left  *Node
  right *Node
  value interface{}
}

func NewNode(l, r *Node) *Node {
  return &Node{l, r, value}
}
func (n *Node) SetValue(val interface{}) {
  n.value = val
}

```

一个接口的值可以赋值给另一个接口变量，只要底层类型实现了必要的方法

```js
type myPrintInterface interface {
  print()
}

func f3(x myInterface) {
  x.(myPrintInterface).print() // 若x的底层类型实现了print方法就可以断言为myPrintInterface接口调用从而调用print()方法
}
```

## 11.7 反射

Go语言提供了一种机制可以在`运行时`访问到对象的属性和方法，但是在编译时并不知道这些变量的具体类型，这种机制被称为反射

Go中的反射是由reflect包实现，由两大部分构成：`reflect.Type` 和 `reflect.Value`，并提供 `reflect.Typeof` 和 `reflect.ValueOf`进行访问

如下图所示，原始值先转化成接口变量再转化成反射对象

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bf41472b2ad14dddb7789654918af61c~tplv-k3u1fbpfcp-watermark.image?)

### 11.7.1 interface 转 reflect

```js
var val = 1
rVal := reflect.ValueOf(val) // 1
rType := reflect.TypeOf(val) // int
```

### 11.7.2 reflect 转 interface

```js
var val = 1
rVal := reflect.ValueOf(val)
rVal.Interface()
```

### 11.7.3 reflect 转 interface 转 Primitive

```js
var val = 1
rVal := reflect.ValueOf(val)
rVal.Interface().(int) // 断言
```

### 11.7.4 更新原始值

如果我们想要更新一个 `reflect.Value`，那么它持有的值一定是可以被更新的（意味则要传递指针而非值）

```js
// 按值传递，试图改变reflect.Value会报错
n := 1
v := reflect.ValuedOf(n)
v.SetInt(10) 
// panic: reflect: reflect.flag.mustBeAssignable using unaddressable value
// 错误：reflect.flag.mustBeAssignable使用的是不可寻址的值

// 按指针传递
n := 1
v := reflect.ValueOf(&n)
v.Elem().SetInt(10) // reflect.Value.Elem获取指针指向变量
fmt.Println(n) // 10
// 通过v.Canset()可以检测反射值是否可以设置，返回一个bool值

// 和以下代码类似
n := 1
v := &n
*v = 10
```

`reflect.Value.SetType` 更新变量的`Type`值

`reflect.Value.Elem` 获取指针指向变量

### 11.7.5 结构体反射

`reflect.Value`有一个`Type`方法返回反射对象`Type`

`reflect.Value`和`reflect.Type`都有一个`Kink`方法返回一个`reflect包`里定义的常量表示`底层类型`

内置的常量如下

```js
const (
    Invalid Kind = iota
    Bool
    Int
    Int8
    Int16
    Int32
    Int64
    Uint
    Uint8
    Uint16
    Uint32
    Uint64
    Uintptr
    Float32
    Float64
    Complex64
    Complex128
    Array
    Chan
    Func
    Interface
    Map
    Ptr
    Slice
    String
    Struct
    UnsafePointer
)
```

通过`NumField()`返回`struct`字段数量，通过`Filed(i)`返回字段值

```js
type Person struct {  
  Name string  
  id string  
}  
  
func main() {  
  var p interface{} = Person{"noxone", "123456"}  
  value := reflect.ValueOf(p) // {"noxone" "123456"}  
  typ := reflect.TypeOf(p) // main.Person  
  typ2 := value.Type() // main.Person  
  knd := value.Kind() // struct  
  knd2 := typ.Kind() // struct  
  fmt.Println(value, typ, typ2, knd, knd2)  
  
  for i := 0; i < value.NumField(); i++ {  
    fmt.Println(value.Field(i)) // noxone 123456  
  }  
}
```

与此同时`Filed(i)`也是一个`reflect.Value`，意味则可以调用`Type`、`Interface`以及`Kind`方法

```js
for i := 0; i < value.NumField(); i++ {  
  f := value.Field(i)  
  fmt.Println(f, f.Type(), f.Interface(), f.Kind()) // noxone string noxone string  
  // 打印id字段时，f.Interface()会报错，因为是未导出的字段（即小写开头）  
}
```

修改未导出的字段（即小写字母开头的字段）会报错，修改非指针值的字段也会报错

```js
// 错误示范
type Person struct {  
  Name string  
  id string  
}  

var p interface{} = Person{"noxone", "123456"}
value := reflect.ValueOf(p)
  
value.Field(0).SetString("wxq") // 修改非指针值的字段
// panic: reflect: reflect.Value.SetString using unaddressable value  
value.Field(1).SetString("9999") // 修改未导出的字段
// panic: reflect: reflect.Value.SetString using value obtained using unexported field
  
// 正确示范
type Person struct {  
  Name string  
  Id string  
}  

var p = Person{"noxone", "123456"}  
s := reflect.ValueOf(&p).Elem() // 拿到指针反射值指向的对象  

s.Field(0).SetString("wxq")  
s.Field(1).SetString("9999") 
fmt.Println(p) // {wxq 9999}

```
