---
title: Leetcode算法题：字符串篇
author: NOxONE
date: '2023-08-18'
categories:
  - 算法刷题集
tags:
  - 算法刷题集
---

## [1. 反转字符串（简单）]()

编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 `s` 的形式给出。

不要给另外的数组分配额外的空间，你必须[原地](https://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95)**修改输入数组**、使用 O(1) 的额外空间解决这一问题。

**示例 1：**
```js
输入： s = ["h","e","l","l","o"]
输出： ["o","l","l","e","h"]
```
**示例 2：**
```js
输入： s = ["H","a","n","n","a","h"]
输出： ["h","a","n","n","a","H"]
```


### 思路
1. 使用 `双指针` 在迭代数组时交换两边元素即可
2. 使用栈
```js
function reverseString(s) {
  for (let r = 0, l = s.length - 1; r < l;) [s[l--], s[r++]] = [s[r], s[l]]
  return s
}
// 堆
function reverseString(s) {
  let stk = [...s]
  for (let i = 0; i < s.length; i++) s[i] = stk.pop()
  return s
}
```

## [2. 反转字符串 Ⅱ（简单）](https://leetcode.cn/problems/reverse-string-ii/)
给定一个字符串 `s` 和一个整数 `k`，从字符串开头算起，每计数至 `2k` 个字符，就反转这 `2k` 字符中的前 `k` 个字符。

-   如果剩余字符少于 `k` 个，则将剩余字符全部反转。
-   如果剩余字符小于 `2k` 但大于或等于 `k` 个，则反转前 `k` 个字符，其余字符保持原样。

**示例 1：**
```js
输入： s = "abcdefg", k = 2
输出： "bacdfeg"
```
**示例 2：**
```js
输入： s = "abcd", k = 2
输出： "bacd"
```

### 思路
考察的是对数组迭代控制，设置步进为 `2*k`，处理好两个边界条件即可
```js
var reverseStr = function (s, k) {
  s = [...s]
  let len = s.length
  for (let i = 0; i < len; i += 2 * k) {
    let l = i - 1 // 右边界
    let r = i + k > len ? len : i + k // 定义反转区间左边界
    while (++l < --r) [s[l], s[r]] = [s[r], s[l]]
  }
  return s.join('')
}
```

## [3. 替换空格（简单）](https://leetcode.cn/problems/ti-huan-kong-ge-lcof/)
请实现一个函数，把字符串 `s` 中的每个空格替换成"%20"。

**示例 1：**
```js
输入： s = "We are happy."
输出： "We%20are%20happy."
```
### 思路
典型送分题
```js
// 1. 最粗暴调replaceAll方法
function replaceSpace(s) {
  s = s.replaceAll(' ', '%20')
  return s
}

// 2. 迭代
function replaceSpace(s) {
  let ret = ''
  for (let item of s) ret += s == ' ' ? '%20' : item
  return ret
}

// 3. 原地更新
function replaceSpace(s) {
  s = [...s]
  for (let i = 0; i < s.length; i++){
    if (s[i] != ' ') continue
    s[i] = '%20'
  }
  return s.join('')
}
```
##  [4. 反转字符串中的单词 （中等）](https://leetcode.cn/problems/reverse-words-in-a-string/)
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
```js
输入： s = "a good   example"
输出： "example good a"
解释： 如果两个单词间有多余的空格，反转后的字符串需要将单词间的空格减少到仅有一个
```
### 思路
考察对字符串迭代过程控制的娴熟程度，创建一个数组，迭代直到找到非空的字符时，开启小循环，截取单词，遇到空字符即break跳出小循环，然后往数组push这个单词即可

最后反转数组
```js
var reverseWords = function (s) {
  let arr = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') continue
    
    let tempStr = ''
    while (i < s.length) {
      if (s[i] === ' ') break
      tempStr += s[i++]
    }
    arr.push(tempStr)
  }
  arr.reverse()
  return arr.join(' ')
}
```

## [5. 左旋转字符串（简单）](https://leetcode.cn/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/)
字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。

**示例 1：**
```js
输入: s = "abcdefg", k = 2
输出: "cdefgab"
```
**示例 2：**
```js
输入: s = "lrloseumgh", k = 6
输出: "umghlrlose"
```
### 思路
1. 常规做法：一边`shift()`，一边`push()`
2. 考官想要的做法：左局部反转、右局部反转，整体再反转（虽然比较耗时~）

```js
// 法一
function reverseLeftWord(s, n) {
  s = [...s]
  while(n--) s.push(s.shift())
  return s.join('')
}
// 法二
function reverseLeftWord(s, n) {
  s = [...s]
  for (let l = 0, r = n - 1; l < r; l++, r--) [s[l], s[r]] = [s[r], s[l]]
  for (let l = n, r = s.length - 1; l < r; l++, r--) [s[l], s[r]] = [s[r], s[l]]
  for (let l = 0, r = s.length - 1; l < r; l++, r--) [s[l], s[r]] = [s[r], s[l]]
  return s.join('')
}
```

## [6. 重复的子字符串（简单）](https://leetcode.cn/problems/repeated-substring-pattern/)
给定一个非空的字符串 `s` ，检查是否可以通过由它的一个子串重复多次构成。

**示例 1:**
```js
输入: s = "abab"
输出: true
解释: 可由子串 "ab" 重复两次构成。
```
**示例 2:**
```js
输入: s = "aba"
输出: false
```
**示例 3:**
```js
输入: s = "abcabcabcabc"
输出: true
解释: 可由子串 "abc" 重复四次构成。 (或子串 "abcabc" 重复两次构成。)
```
### 思路
一边迭代，一边拼凑子串，在子串长度满足条件时，开启小循环逐位检查
```js
var repeatedSubstringPattern = function (s) {
  let len = s.length
  let str = ''
  for (let i = 0; i < len >> 1; i++) { // 迭代最大到字符串长度一半即可
    str += s[i]
    if (len % str.length != 0) continue // 字符串长度要为子串长度的倍数才行
    let flag = true
    // 挨个比较，其中 j % str.length 可以实现循环坐标
    for (let j = i + 1; j < s.length; j++) {
      if (s[j] == str[j % str.length]) continue
      flag = false // 只要有字符不匹配立刻退出这个检查小循环
      break
    }
    if (flag) return true
  }
  return false
};
```