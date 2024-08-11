---
title: Gorm笔记
author: NOxONE
date: '2023-05-13'
categories:
  - Golang
tags:
  - Golang
---

## 1. 连接数据库
```js
// [username[:password]@][protocol[(address)]]/dbname[?param1=value1&...&paramN=valueN] 
// data source name, 详情参考：https://github.com/go-sql-driver/mysql#dsn-data-source-name  
dsn := "root:123456@tcp(127.0.0.1:3306)/gormLearn?charset=utf8mb4&parseTime=True&loc=Local" 
db, _ := gorm.Open(mysql.Open(dsn), &gorm.Config{})
```

## 2. 创建表
### 2.1 start
```js
// 设计表结构
type Student struct {  
  gorm.Model  
  Name string  
  Age int  
}
type Teacher struct {
  gorm.Model
  Name string
  Type string
}
// 在连接数据库中创建表
db.AutoMigrate(&Person{}, &Teacher{})
```

注意
1. GORM在存入数据库时，默认会将表名和表字段名转成`蛇形`，即`AaBbCcc -> aa_bb_ccc`
2. `gorm.Model`为默认的字段，包括字段`ID`、`CreatedAt`、`UpdatedAt`、`DeletedAt`
```js
// gorm.Model 的定义
type Model struct {
  ID        uint           `gorm:"primaryKey"`
  CreatedAt time.Time
  UpdatedAt time.Time
  DeletedAt gorm.DeletedAt `gorm:"index"`
}
```

### 2.2 结构体嵌入
`gorm.Model`
```js
type User struct {
  gorm.Model
  Name string
}
// 等效于
type User struct {
  ID        uint           `gorm:"primaryKey"`
  CreatedAt time.Time
  UpdatedAt time.Time
  DeletedAt gorm.DeletedAt `gorm:"index"`
  Name string
}
```
其他结构体嵌入可通过`gorm:"embedded"`字段
```js
type Author struct {
  Name string
}
type Blog struct {
  Author Author `gorm:embedded`
  Id int
}

// 等价于
type Blog struct {
  Name string
  Id int
}
```
或者通过`embeddedPrefix`补充前缀
```js
type Blog struct {
  Author Author `gorm:embedded;embeddedPrefix:author_`
  Name string
  Id int
}
// 等价于
type Blog struct {
  AuthorName string
  Name string
  Id int
}
```

## 3. CRUD操作
开始前先在库里创建表
```js
type Person struct {
  Name string
  Age int
}
db.AutoMigrate(&Person{})
```
### 3.1 Create
**创建单条**
```js
var user = Person{
  Name: "noxone",
  Age: 18
}
res := db.Create(&user)

user.ID // 主键
res.Error // error
res.RowsAffected // 插入记录条数
```

**创建多条**
```js
var users = []Person{
  { Name: "noxone1" },
  { Name: "noxone2" },
  { Name: "noxone3" },
}

res := db.Create(&users)
if res.Error != nil {
  return
}
for _, user := range users {
  user.ID // 1 2 3
}
```

**使用Map创建**
```js
db.Model(&Person{}).Create(map[string]interface{}{
  "Name": "noxone",
  "Age": 18
})
```
### 3.2 Read
**查询之前 先创建接收容器**
```js
var user User
var users []Users 
```
**查询主键**

GORM 提供了 `First`、`Take`、`Last` 方法，以便从数据库中检索单个对象
```js
db.First(&user) // SELECT * FROM persons ORDER BY id LIMIT 1
db.Take(&user) // SELECT * FROM persons LIMIT 1
db.Last(&user) // SELECT * FROM person ORDER BY id DESC LIMIT 1

db.First(&user,107)
// SELECT * FROM users WHERE id = 107

db.First(&user,"id = ?", "aaaabb")
// SELECT * FROM users WHERE id = 'aaaabb'

db.Find(&users, []int{1,2,3}) 
// SELECT * FROM users WHERE id IN (1,2,3)
```

**查询首项**
```js
db.Where("name = ?", "noxone").First(&user)
db.First(&user, "name = ?", "noxone") // 简写
```

**查询所有项**
```js
db.Find(&users, "Age >= ?", 12)  
db.Where("Age >= ?", 10).Or("Age < ?", 15).Find(&users)
db.Where("Age >= ? or Age < ?", 10, 15).Find(&users)

db.Find(&users) // 返回所有项
```

**String检索**
```js
db.Where("name = ?", "noxone").First(&user) // 获取第一条匹配记录
// SELECT * FROM users WHERE name = 'noxone' ORDER BY id LIMIT 1

db.Where("name <> ?", "noxone").Find(&users) // 获取全部匹配记录
// SELECT * FROM users WHERE name <> 'noxone'

db.Where("id IN ?", []uint{1, 3, 5}).Find(&users) // IN
// SELECT * FROM users WHERE id IN (1, 2, 3)

db.Where("name = ? AND age < ?", "noxone", 17).Find(&users) // AND
// SELECT * FROM users WHERE name = 'noxone' AND age < 17

db.Where("age BETWEEN ? AND ?", 18, 22).Find(&users) // BETWEEN
// SELECT * FROM users WHERE age BETWEEN 18 AND 22

db.Where("name LIKE ?", "%no%").Find(&users) // LIKE
// SELECT * FROM users WHERE name LIKE '%no%'

db.Where("updated_at > ?", "2008-01-01 00:00:00").Find(&users) // Time
// SELECT * FROM users WHERE updated_at > '2008-01-01 00:00:00'
```

**Struct & Map检索**
```js
db.Where(&User{Name: "noxone", Age: 18}).First(&user)
// SELECT * FROM users WHERE name = 'noxone' AND age = 18 ORDER BY id LIMIT 1

db.Where(map[string]interface{}{"name": "noxone", "age": 18}).Find(&users)
// SELECT * FROM users WHERE name = 'noxone' AND age = 18

db.Where([]int64{1, 3, 5}).Find(&users)
// SELECT * FROM users WHERE id IN (1, 3, 5)

// 注意！！！ 对于Struct的零值字段，不会被应用于sql查询，应使用map来代替
db.Where(&User{Name: "noxone", Age: 0}).Find(&users)
// SELECT * FROM users WHERE name = 'noxone'

db.Where(map[string]interface{}{"name": "noxone", "age": 0}).Find(&users)
// SELECT * FROM users WHERE name = 'noxone' AND age = 0
```

**内联检索**

属于优雅写法
```js
db.Find(&users, "name = ?", "noxone")
db.Find(&users, "name = ? AND age > ?", "noxone", 18)
db.Find(&users, User{Name: "noxone"})
db.Find(&users, map[string]interface{}{"name": "noxone"})
```

**NOT**
```js
db.NOT("name = ?", "noxone").Find(&users)
// SELECT * FROM users WHERE NOT name = "noxone"

db.NOT(User{Name: "noxone", Age: 18}).Find(&users)
// SELECT * FROM users WHERE name <> "noxone" AND age <> 18

db.NOT(map[string]interface{}{"age": []int{17, 18, 19}})
// SELECT * FROM users WHERE age NOT IN (17, 18, 19)
```

**Limit & Offset**
```js
db.Limit(3).Find(&users)
// SELECT * FROM users LIMIT 3

// 通过 -1 消除 Limit 条件
db.Limit(10).Find(&users1).Limit(-1).Find(&users2)
// SELECT * FROM users LIMIT 10; (users1)
// SELECT * FROM users; (users2)

db.Offset(3).Find(&users)
// SELECT * FROM users OFFSET 3

db.Limit(10).Offset(5).Find(&users)
// SELECT * FROM users OFFSET 5 LIMIT 10

// 通过 -1 消除 Offset 条件
db.Offset(10).Find(&users1).Offset(-1).Find(&users2)
// SELECT * FROM users OFFSET 10; (users1)
// SELECT * FROM users; (users2)
```
### 3.3 Update
**修改之前 先查询**
```js
var user User 
db.First(&user,7)
```
**更新所有字段**
```js
user.Name = "noxone"
user.Age = 22
db.Save(&user)
// UPDATE users SET name="noxone", age=22 updated_at = '2023-5-12 17:00:00' WHERE id=7
```
**更新单个字段**
```js
db.Model(&user).Update("name", "noxone")
// UPDATE users SET name="noxone", updated_at = '2023-5-12 17:00:00' WHERE id=7
```

**更新多个字段**
```js
db.Model(&user).Updates(User{Name: "noxone", Age: 22})
db.Model(&user).Updates(map[string]interface{}{"name": "noxone", "age": 22})
// UPDATE users SET name="noxone", age=22 updated_at = '2023-5-12 17:00:00' WHERE id=7
```
**更新选定字段**
```js
db.Model(&user).Select("name").Updates(User{Name: "noxone", Age: 22})
// UPDATE users SET name="noxone", updated_at = '2023-5-12 17:00:00' WHERE id=7

db.Model(&user).Omit("name").Updates(User{Name: "noxone", Age: 22})
// UPDATE users SET age=22 updated_at = '2023-5-12 17:00:00' WHERE id=7

db.Model(&user).Select("name", "age").Updates(User{Name: "noxone", Age: 22, IsHandsome: true})
// UPDATE users SET name="noxone", age=22 updated_at = '2023-5-12 17:00:00' WHERE id=7
```
### 3.4 Delete
```js
db.Where("name = ?", "noxone").First(&Person{}).Delete(&Person{}) // 软删除
db.Where("age in (?)", []int{10, 15}).Unscoped().Delete(&Person{}) // 硬删除
```
### 3.5 RUD By Id
```js
var user User

tx := db.First(&user, 107) // read  

tx.Updates(User{ // update  
  Name: "sd",  
  Age:  0,  
})  

tx.Delete(&User{}) // delete (soft)  
tx.Unscoped().Delete(&User{}) // delete (hard)
```
## 4. 关系表
### 4.1 Belongs To
**`belongs to`将从属者的主字段+ID作为外键值，从而建立从属关系**
```golang
// 当user分配给某个company时，会自动把关联company的ID作为外键值保存到CompanyID字段，从而建立一对一的从属连接
type User struct {  
  gorm.Model  
  Name string  
  CompanyID int  
  Company Company  
}  
type Company struct {  
  Id int  
  Name string  
}  
```
**重写外键**
```golang
// 使用 CompanyRefer 作为外键  
type User struct {  
  gorm.Model  
  Name string  
  CompanyRefer string  
  Company Company `gorm:"foreignKey:CompanyRefer"`  
}  
type Company struct {  
  Id int  
  Name string  
}
```
**重写引用**
```golang
// 使用 Code 作为引用，这时会将关联company的Code作为外键值保存到CompanyID字段
type User struct {  
  gorm.Model  
  Name string  
  CompanyID string  // CompanyID作为外键
  Company Company `gorm:"references:Code"`  
}  
type Company struct {  
  Id int  
  Code string  
  Name string  
}
```
### 4.2 Has one
**`has one`将关联Model的实例作为外键，从而建立一对一的关联**
```golang
type User struct {  
  gorm.Model  
  IdCard IdCard  // IdCard作为外键  
}  
type IdCard struct {  
  gorm.Model  
  Number string  
  UserID uint  
}
```
### 4.3 Has Many
**`has many`将关联Model的多个实例作为外键，从而建立一对多的关联**
```golang
type js struct {  
  gorm.Model  
  IdCards []IdCard  // []IdCard作为外键
}  
type IdCard struct {  
  gorm.Model  
  Number string  
  UserID uint  
}
```
### 4.4 Many To Many
**`many to many`会创建两个Model之间的连接表**
```golang
type User struct {  
  gorm.Model  
  Courses []*Course `gorm:"many2many:user_courses"`  
}  
type Course struct {  
  gorm.Model  
  Name string  
  Users []*User `gorm:"many2many:user_languages"`
}
```
这里会在`user`和`course`表之间创建一个中间连接表`user_courses`，从而可以得到user和course之间的多对多映射，即一个user会关联多个course，一个course也会关联多个user

### 4.5 Preload
先建立全部类型的表
```golang
type Person struct {  
  gorm.Model  
  IdCard IdCard // has one 一对一  
  CreditCards []CreditCard // has many 一对多  
  FamilyID string  
  Family Family // belongs to 从属  
  Clubs []Club `gorm:"many2many:user_club"`  // many to many 多对多
}  
  
type IdCard struct {  // 身份证
  gorm.Model  
  Number string  
}  
type CreditCard struct {  // 银行卡
  gorm.Model  
  Type string  
  Number string  
}  
type Family struct {  // 家庭
  gorm.Model  
  Members []Person  
}  
type Club struct {  // 俱乐部
  gorm.Model  
  Type string  
  Members []Person  
}
```
使用`Preload`可以在查询时加载关联表数据
```js
var persons []Person
db.Preload("IdCard", "CreditCards", "Family", "Clubs").Find(&persons)  
// SELECT * FROM persons  
// SELECT * FROM idcards WHERE person_id IN (1,2,3,4,5) 一对一  
// SELECT * FROM credit_cards WHERE person_id IN (1,2,3,4,5) 一对多  
// SELECT * FROM familys WHERE id IN (1,2) 从属  
// SELECT * FROM clubs WHERE id IN (1,2) 多对多
```



