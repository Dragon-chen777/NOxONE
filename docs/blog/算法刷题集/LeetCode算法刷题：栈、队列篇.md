---
title: Leetcode算法题：栈、队列篇
author: NOxONE
date: '2023-09-18'
categories:
  - 算法刷题集
tags:
  - 算法刷题集
---
## [1. 有效的括号](https://leetcode.cn/problems/valid-parentheses/)
给定一个只包括 `'('`，`')'`，`'{'`，`'}'`，`'['`，`']'` 的字符串 `s` ，判断字符串是否有效。

有效字符串需满足：

1.  左括号必须用相同类型的右括号闭合。
1.  左括号必须以正确的顺序闭合。
1.  每个右括号都有一个对应的相同类型的左括号。

**示例 1：**

```js
输入： s = "()"
输出： true
```

**示例 2：**

```js
输入： s = "()[]{}"
输出： true
```

**示例 3：**

```js
输入： s = "(]"
输出： false
```

### JS
```js
var isValid = function (s) {
  let stk = []
  let map = new Map([['(', ')'], ['[', ']'], ['{', '}']])
  for (let w of s) {
    if (map.has(w)) {
      stk.push(w)
      continue
    }
    if (map.get(stk.pop()) !== w) return false
  }

  return !stk.length
};
```
## [2. 删除字符串中的所有相邻重复项](https://leetcode.cn/problems/remove-all-adjacent-duplicates-in-string/)

给出由小写字母组成的字符串 `S`，**重复项删除操作**会选择两个相邻且相同的字母，并删除它们。

在 S 上反复执行重复项删除操作，直到无法继续删除。

在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。

**示例：**

```js
输入： "abbaca"
输出： "ca"
解释：
例如，在 "abbaca" 中，我们可以删除 "bb" 由于两字母相邻且相同，这是此时唯一可以执行删除操作的重复项。之后我们得到字符串 "aaca"，其中又只有 "aa" 可以执行重复项删除操作，所以最后的字符串为 "ca"。
```

### JS
```js
var removeDuplicates = function(s) {
  let stk = ['']
  for (let w of s) {
    if (stk[stk.length - 1] === w) {
      stk.pop()
      continue
    }
    stk.push(w)
  }
  return stk.slice(1).join('')
};
```

## [3. 逆波兰表达式求值（中等）](https://leetcode.cn/problems/evaluate-reverse-polish-notation/)

给你一个字符串数组 `tokens` ，表示一个根据 [逆波兰表示法](https://baike.baidu.com/item/%E9%80%86%E6%B3%A2%E5%85%B0%E5%BC%8F/128437) 表示的算术表达式。

请你计算该表达式。返回一个表示表达式值的整数。

**注意：**

-   有效的算符为 `'+'`、`'-'`、`'*'` 和 `'/'` 。
-   每个操作数（运算对象）都可以是一个整数或者另一个表达式。
-   两个整数之间的除法总是 **向零截断** 。
-   表达式中不含除零运算。
-   输入是一个根据逆波兰表示法表示的算术表达式。
-   答案及所有中间计算结果可以用 **32 位** 整数表示。

**示例 1：**

```js
输入： tokens = ["2","1","+","3","*"]
输出： 9
解释： 该算式转化为常见的中缀算术表达式为：((2 + 1) * 3) = 9
```

**示例 2：**

```js
输入： tokens = ["4","13","5","/","+"]
输出： 6
解释： 该算式转化为常见的中缀算术表达式为：(4 + (13 / 5)) = 6
```

**示例 3：**

```js
输入： tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
输出： 22
解释： 该算式转化为常见的中缀算术表达式为：
  ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
```

### JS
```js
var evalRPN = function (tokens) {
  let stk = []
  for (let s of tokens) {
    if (!['+', '-', '*', '/'].includes(s)) {
      stk.push(+s)
      continue
    }
    
    let n2 = stk.pop()
    let n1 = stk.pop()
    if (s === '+') {
      stk.push(n1 + n2)
      continue
    }
    if (s === '-') {
      stk.push(n1 - n2)
      continue
    }
    if (s === '*') {
      stk.push(n * n2)
      continue
    }
    if (s === '/') {
      stk.push(n1 / n2 | 0) // 向0取整
      continue
    }
  }
  return stk[0]
};
```
## [4. 滑动窗口最大值（难）](https://leetcode.cn/problems/sliding-window-maximum/)

给你一个整数数组 `nums`，有一个大小为 `k` 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 `k` 个数字。滑动窗口每次只向右移动一位。

返回 `滑动窗口中的最大值` 

**示例 1：**

```js
输入： nums = [1,3,-1,-3,5,3,6,7], k = 3
输出： [3,3,5,5,6,7]
解释：
滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7      5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
```

**示例 2：**

```js
输入： nums = [1], k = 1
输出： [1]
```
### JS
```js
var maxSlidingWindow = function (nums, k) {
  let ret = []
  let queue = [] // 保存数字下标，且对应数字最大时排第一

  for (let i = 0; i < nums.length; i++) {
    while (queue.length && nums[i] >= nums[queue[queue.length - 1]]) queue.pop()
    queue.push(i)
    if (queue[0] < i - k + 1) queue.shift()
    ret.push(nums[queue[0]])
  }
  return ret.slice(k - 1)
}
```

## [5. 前 K 个高频元素（中等）](https://leetcode.cn/problems/top-k-frequent-elements/)

给你一个整数数组 `nums` 和一个整数 `k` ，请你返回其中出现频率前 `k` 高的元素。你可以按 **任意顺序** 返回答案。

算法的时间复杂度 **必须** 优于 `O(n log n)` 

**示例 1:**

```js
输入: nums = [1,1,1,2,2,3], k = 2
输出: [1,2]
```

**示例 2:**

```js
输入: nums = [1], k = 1
输出: [1]
```
### JS
```js
var topKFrequent = function(nums, k) {
  let ret = []

  let map = new Map()
  for (let n of nums) map.set(n, (map.get(n) || 0) + 1)

  let heap = new Heap((a, b) => a[1] - b[1]) // 大顶堆
  for (let entry of map) heap.push(entry) 
  while(k--) ret.push(heap.pop()[0])
  return ret
};

class Heap {
  constructor(compareFn) {
    this.queue = []
    this.compareFn = compareFn
  }
  // logN
  push(item) { // 自底向上
    this.queue.push(item)
    for (
      let i = this.size() - 1, j = i - 1 >> 1; 
      j >= 0 && this.compare(i, j) > 0; 
      i = j, j = i - 1 >> 1
    ) {
      this.change(i, j)
    }
  }
  // logN 由于只调用k次，所以时间复杂度为k
  pop() { // 自上而下
    let ret = this.queue[0]
    this.queue[0] = this.queue.pop()

    for (
      let i = 0, j = this.compare(2 * i + 1, 2 * i + 2) > 0 ? 2 * i + 1 : 2 * i + 2;
      j < this.size() && this.compare(j, i) > 0;
      i = j, j = this.compare(2 * i + 1, 2 * i + 2) > 0 ? 2 * i + 1 : 2 * i + 2
    ) {
      this.change(i, j)
    }
    return ret
  }
  compare(i, j) {
    if (!this.queue[i]) return -1
    if (!this.queue[j]) return 1
    return this.compareFn(this.queue[i], this.queue[j])
  }
  change(i, j) {
    [this.queue[i], this.queue[j]] = [this.queue[j], this.queue[i]]  
  }
  size() {
    return this.queue.length
  }
}
````