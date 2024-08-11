---
title: 所以，jwt是个啥？
author: NOxONE
date: '2023-05-15'
categories:
  - Golang
tags:
  - Golang
---
### 1. jwt
**jwt**即`json web token`，用于用户授权，保存在客户端。

由三个部分构成：`Header`、`Payload`、`Signature`，三者用`.`隔开，形如：`hhhhh.pppppppppp.sssssss`

下面将逐个介绍
### 2. Header
**header**由`token类型`、`签名算法名`构成，形如：`{ alg: "HS256", typ: "JWT" }`，再通过base64对其编码得到jwt的第一部分，即`hhhhh`

### 3. Payload
**payload**由三种声明构成：`registered claims`、`public claims`、`private claims`，用于加密存储用户授权信息

**registered claims**用于声明一些预定义属性，例如：`ExpiresAt（token失效时间）`、`Issuer（token颁发者）`、`NotBefore（token在多久之后生效）`等

**public claims**和**private claims**保存的是用户相关授权信息

通过base64对其编码便得到jwt的第二部分，即`pppppppppp`

### 4. Signature
**signature**由编码过的header、payload以及一个秘钥通过header中指定的签名算法计算得出  
例如：`HMACSHA256(base64UrlEncode(header) + "." + base64UrlEncode(payload), secret)`

最终生成一个`tokenStr`返回给用户，作为访问受保护路由和资源（后端接口）的凭证，前端通常会把token放在`Authorization header`（可以跨域，传统的cookie不行）中，指定为`Bearer schema`，形如：`Authorization: Bearer`

### 5. 玩一玩jwt-go
说了那么多，很抽象，即使记住了也没什么卵用，最终付诸于代码实现才是真，所以 ...

**Talk is cheap， show me the code~**
```js
package main  
import (  
  "fmt"  
  "github.com/dgrijalva/jwt-go"  
  "time"  
)  
  
type Claims struct { 
  UserId string `json:"userid"`  
  jwt.StandardClaims  
}  
  
func main() {  
  // 1. 生成tokenStr
  claims := Claims{ // 这就是Payload
    "295286392", // public claims
    jwt.StandardClaims{ // registered claims
      NotBefore: time.Now().Unix() - 60, // 一分钟之前开始生效  
      ExpiresAt: time.Now().Unix() + 60*60*2, // 两小时后失效  
      Issuer: "admin", // 签发者  
    },  
  }  
  token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims) // Header、Payload结合生成token  
  signingKey := []byte("abc") // 秘钥  
  tokenStr, _ := token.SignedString(signingKey) // Signature（签名加密后，将生成的tokenStr返回给前端）
  fmt.Println(tokenStr) // aaaaaaa.bbbbbbbbbbb.cccccccc
  
  
  // 2. 解析tokenStr  
  tokenParse, err := jwt.ParseWithClaims(tokenStr, &Claims{}, func(token *jwt.Token)(interface{}, error) {  
    return signingKey, nil  
  })  
 
  if err != nil { // token过期会走这里  
    fmt.Println(err)  
    return  
  }  
  fmt.Println(tokenParse.Claims.(*Claims).UserId) // 295286392 
}
```
