---
title: 用Golang实现JS常用数组方法
author: NOxONE
date: '2023-07-09'
categories:
  - Golang
tags:
  - Golang
---
Golang切片不像JS中的数组，一些常用的方法得自己实现

## 1. push
```golang
func push(s []int, e int) []int {
  return append(s, e)
}
```

## 2. pop
```golang
func pop(s []int) ([]int, int) {
  l := len(s)
  if l == 0 {
    return l, 0
  }
  return s[:l-1], s[l-1]
}
```

## 3. unshift
```golang
func unshift(s []int, e int) []int {
  return append([]int{e}, s...)
}
```

## 4. shift
```golang
func shift(s []int) ([]int, int) {
  return s[1:], s[0]
}
```

## 5. slice
```golang
func sliceInGo(s []int, start int, end int) []int {
  return s[start: end]
}
```

## 6. splice
```golang
func splice(s []int, start int, deleteCount int, elements ...int) []int {
  end := start + deleteCount
  s = append(s[:start], elements... ,s[end:]...)
  return s
}
```

## 7. concat
```golang
func concat(s1, s2 []int) []int {
  return append(s1, s2...)
}
```

## 8. indexOf
```golang
func indexOf(s []int, e int) int {
  for i, v := range s {
    if v == e {
      return i
    }
  }
  return -1
}
```

## 9. includes
```golang
func includes(s []int, e int) bool {
   for _, v := range s {
    if v == e {
      return true
    }
  }
  return false
}
```

## 10. reverse
```golang
func reverse(s []int) []int {
  length := len(s)
  for i := 0; i < length/2; i++ {
    s[i], s[length-1-i] = s[length-1-i], s[i]
  }
  return s
}
```

## 11. map
```golang
func mapInGo(s []int, cb func(v int, idx int) int) []int {
  ret := make([]int, len(s))
  for i, v := range s {
    ret[i] = cb(v, idx)
  }
  return ret
}
```
## 12. forEach
```golang
func forEach(s []int, cb func(v int, idx int)) {
  for i, v := range s {
    cb(v, i)
  }
}
```

## 13. filter
```golang
func filter(s []int, cb func(v int, idx int) bool) []int {
  ret := make([]int, 0)
  for i, v := range s {
    if cb(v) {
      ret = append(ret, v)
    }
  }
  return ret
}
```