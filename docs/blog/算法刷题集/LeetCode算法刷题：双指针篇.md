---
title: Leetcode算法题：双指针篇
author: NOxONE
date: '2023-09-18'
categories:
  - 算法刷题集
tags:
  - 算法刷题集
---

## [1. 移除元素](https://leetcode.cn/problems/remove-element/)

给你一个数组 `nums` 和一个值 `val`，你需要 **[原地](https://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95)** 移除所有数值等于 `val` 的元素，并返回移除后`数组的新长度`。

不要使用额外的数组空间，你必须仅使用 `O(1)` 额外空间并 **[原地 ](https://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95)修改输入数组**。

元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
 

**示例 1：**

```js
输入： nums = [3,2,2,3], val = 3
输出： 2, nums = [2,2]
解释： 函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。你不需要考虑数组中超出新长度后面的元素。例如，函数返回的新长度为 2 ，而 nums = [2,2,3,3] 或 nums = [2,2,0,0]，也会被视作正确答案。
```

**示例 2：**

```js
输入： nums = [0,1,2,2,3,0,4,2], val = 2
输出： 5, nums = [0,1,4,0,3]
解释： 函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。注意这五个元素可为任意顺序。你不需要考虑数组中超出新长度后面的元素。
```


### JS
```js
var removeElement = function(nums, val) {
  let fast = slow = 0
  for (; fast < nums.length; fast++) {
    if (nums[fast] === val) continue
    nums[slow++] = nums[fast]
  }
  return slow
}
```
### Golang
```golang
func removeElement(nums []int, val int) int {
  fast, slow := 0, 0
  for fast < len(nums) {
    if (nums[fast] != val) {
      nums[slow] = nums[fast]
      slow++
    }
    fast++
  }
  return slow
}
```

## [2. 剑指 Offer 05. 替换空格](https://leetcode.cn/problems/ti-huan-kong-ge-lcof/)

请实现一个函数，把字符串 `s` 中的每个空格替换成`"%20"`。

**示例 1：**
```js
输入： s = "We are happy."
输出： "We%20are%20happy."
```
### JS
```js
var replaceSpace = function(s) {
  s = [...s]
  let fast = 0
  let slow = 0
  for (; fast< s.length; fast++) {
    s[slow++] = s[fast] === ' ' ? '%20' : s[fast]
  }
  return s.join('')
};
```
### Golang
```golang
func replaceSpace(s string) string {
  ret := []byte{} // 字节型数组
  ss := []byte(s)
  
  for _, w := range ss {
    if w == ' ' {
      ret = append(ret, []byte("%20")...)
      continue
    }
    ret = append(ret, w)
  }
  return string(ret)
}
```

## [3. 反转字符串中的单词](https://leetcode.cn/problems/reverse-words-in-a-string/)

给你一个字符串 `s` ，请你反转字符串中 **单词** 的顺序。

**单词** 是由非空格字符组成的字符串。`s` 中使用至少一个空格将字符串中的 **单词** 分隔开。

返回 **单词** 顺序颠倒且 **单词** 之间用单个空格连接的结果字符串。

**注意：** 输入字符串 `s`中可能会存在前导空格、尾随空格或者单词间的多个空格。返回的结果字符串中，单词间应当仅用单个空格分隔，且不包含任何额外的空格。

**示例 1：**
```js
输入： s = "the sky is blue"
输出： "blue is sky the"
```

**示例 2：**

```js
输入： s = "  hello world  "
输出： "world hello"
解释： 反转后的字符串中不能存在前导空格和尾随空格。
```

**示例 3：**

```jsa
输入： s = "a good   example"
输出： "example good a"
解释： 如果两个单词间有多余的空格，反转后的字符串需要将单词间的空格减少到仅有一个。
```
### JS
```js
var reverseWords = function (s) {
  let ret = []

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') continue
    
    let tempStr = s[i++]
    while (i < s.length) {
      if (s[i] === ' ') break
      tempStr += s[i++]
    }
    ret.push(tempStr)
  }

  ret.reverse()
  return ret.join(' ')
};
```
### Golang
```golang
// 明显js好写得多
func reverseWords(s string) string {
  ret := []string{}
  ss := []byte(s)
  for i := 0; i < len(ss); i++ {
    if ss[i] == ' ' {
      continue
    }
    tempStr := []byte{}
    j := i
    for i < len(ss) {
      if ss[i] == ' ' {
        break
      }
      i++
    }
    tempStr = append(tempStr, ss[j:i]...)
    ret = append(ret, string(tempStr))
  }
  reverseArr(ret)
  return strings.Join(ret, " ")
}
func reverseArr(strArr []string) {
  len := len(strArr)
  for i := 0; i < len / 2; i++ {
    strArr[i], strArr[len - 1 - i] =  strArr[len - 1 - i], strArr[i]
  }
}
```

## 