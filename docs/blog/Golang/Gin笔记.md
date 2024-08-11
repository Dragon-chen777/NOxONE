---
title: Gin笔记
author: NOxONE
date: '2023-05-15'
categories:
  - Golang
tags:
  - Golang
---

## 1. 启动服务
```js
app := gin.Default()
// ...
app.Run("127.0.0.1:88")
```

## 2. RESTfull
### 2.1 GET
常用get请求方式有两种，分别是`Query`和`Params`

对于`Query`，请求的形式为`url? key1=val1&key2=val2&...& keyN=valN`，参数存放在`Query Params`中，获取的方式为`c.Query(key)`或`c.DefaultQuery(key, val)`
```js
app.GET("/getStudent", func(c *gin.Context) {
  name := C.DefaultQuery("name", "匿名") // 指定默认值
  grade : = C.Query("grade")
})
```

对于`Params`，请求形式为`url/val1/val2/.../valN`，参数存放在请求uri中，获取方式为`c.Param(key)`
```js
app.GET("/getStudent/:name/:grade", func(c *gin.Context) {
  name := c.Param("name")
  grade := c.Param("grade")
})
```

### 2.2 POST
常用的请求方式有三种，分别是`Body raw`、`Body form-data`和`Body x-www-form-urlencoded`

`Body raw`可以传递JSON，是最常用的前后端传值方式，获取方式为`c.ShouldBindJSON(&o)`
```js
// 将映射获取到name和grade字段，并且自动校验必填项
type Student struct {
  Name string `json:"name" binding:"required"`  
  Grade string `json:"grade" binding:"required"`  
}
app.POST("/addStudent", func(c *gin.Context) {
  var s Student
  c.ShouldBindJSON(&s)
})
```

`Body x-www-form-urlencoded`常用在登录表单中，获取方式为`c.PostForm(key)`或`c.DefaultPostForm(key, val)`
```js
type User struct {
  Name string `json:"name" binding:"required"`  
  Psw string `json:"psw" binding:"required"`  
}
app.POST("/user/login", func(c *gin.Context) {
  name := c.DefaultPostForm("name", "admin")  
  psw := c.PostForm("psw")
})
```

`Body form-data`用于文件上传，获取方式为`c.FormFile(key)`和`c.MultipartForm().File(key)`
```js
// 单文件上传
app.POST("/upload", func(c *gin.Context) {
  file, _ := c.FormFile("file")
  c.SaveUploadedFile(file, "./uploadFiles/" + file.Filename)  
})
// 多文件上传
app.POST("/uploadMulti", func(c *gin.Context) {  
  multiForm, _ := c.MultipartForm()  
  files := multiForm.File["file"]
  
  for _, file := range files {  
    c.SaveUploadedFile(file, "./uploadFiles/"+file.Filename)  
  }  
})
```
### 2.3 Response
`c.JSON(code, gin.H{ ... }])`，返回JSON
```js
app.GET('/getSomeInfo', func(c *gin.Context){
  c.JSON(200, gin.H{
    "code": 200,
    "message": "请求成功"
    "data": {
      "id": 107,
      "name": "NOxONE"
    }
  })
}) 
```
`c.Redirect(301, url)`，重定向
```js
app.POST('/login', func(c *gin.Context){
  c.Redirect(301, "/index")
}
```


## 3. Router Group
定义分组路由：`app.Group(url)`
```js
var task = app.Group('/task')
```

定义子路由
```js
task.POST('/add', func(c *gin.Context) { ... }) // /task/add
task.POST('/delete', func(c *gin.Context) { ... }) // /task/delete
task.POST('/update', func(c *gin.Context) { ... }) // /task/update
task.GET('/info', func(c *gin.Context) { ... }) // /task/info
```

对于所有的子路由会共用父路由的中间件，作一些鉴权、获取token操作等
```js
task.Use(middle1(), middle2()) // 在调task的增删改查接口时会先走middle1和middle2中间件
```
## 4. Middleware
中间件类型为`gin.HandlerFunc`，可以通过回传参数访问到`c *gin.Context`gin上下文对象，从而可以在请求前和请求结束后做一些操作，同时通过`c.Next()`将钩子传递下去
```js
var Logger gin.HandlerFunc = func(c *gin.Context) {
  // 请求前
  t := time.Now()
  c.Set("num", 107)

  c.Next()

  // 请求后
  status := c.Writer.Status()
  sumTime := time.Since(t)
  fmt.Println("响应时间：" + t)
  fmt.Println("响应状态：" + status)
}
var Logger2 gin.HandlerFunc = func(c *gin.Context) {
  // 请求前
  c.Set("num2", 108)

  c.Next()

  // 请求后
  fmt.Println("响应结束")
}

app := gin.New()
app.Use(Logger, Logger2)

app.GET("/test", func(c *gin.Context) {
  num := c.MustGet("num").(int)
  num2 := c.MustGet("num2).(int)
  fmt.Println(num, num2)
})

app.Run("127.0.0.1:88")
// 107 108
// 响应时间：15
// 响应状态：200
// 响应结束
```
对于组路由来说，若父路由使用中间件，则子路由都会共享到这个中间件
## 5. Validator
`form`指定映射字段，`binding`指定验证方法
```js
// 预约时间表
type Booking struct {
  StartTime time.Time `form:"startTime" binding:"required,timeValid" time_format:"1970-01-01"`
  EndTime time.Time `form:"endTime" binding:"required,gtfield=StartTime,timeValid" time_format:"1970-01-01"`
}
```
创建校验引擎，注册校验方法

其中校验方法是`validator.Func`类型，通过回传参数`fl validator.FieldLevel`可以访问到请求参数字段，方法最终返回一个布尔值来说明是否校验通过
```js
v, _ := binding.Validator.Engine().(*validator.Validate) // 创建校验引擎

// 定义校验方法并注册到校验引擎中
var timeValid validator.Func = func(fl validator.FieldLevel) bool { 
  val, _ := fl.Field().Inferface().(time.Time) 
  return !time.Now().After(date) // 只能在今天之后的日期 
}
v.RegisterValidation("timeValid", timeValid)
```

完整代码
```js
import (
  "time"
  "github.com/gin-gonic/gin/binding"
  "github.com/go-playground/validator/v10"
)

// 预约时间表
type Booking struct {
  StartTime time.Time `form:"startTime" binding:"required,timeValid" time_format:"1970-01-01"`
  EndTime time.Time `form:"endTime" binding:"required,gtfield=StartTime,timeValid" time_format:"1970-01-01"`
}

// 定义校验方法
var timeValid validator.Func = func(fl validator.FieldLevel) bool {
  val, _ := fl.Field().Inferface().(time.Time)
  return !time.Now().After(date) // 只能在今天之后的日期
}

func main() {
  app := gin.Default()
  v, _ := binding.Validator.Engine().(*validator.Validate) // 创建校验引擎
  v.RegisterValidation("timeValid", timeValid) // 注册校验方法

  app.GET("/booking", func(c *gin.Context) {
    var b Booking
    err := c.ShouldBindWith(&b, binding.Query)
    if err != nil {
      c.JSON(99, gin.H{"error": err.Error()})
      return
    }
    c.JSON(200, gin.H{"msg": "预定成功"})
  })
}
```