---
title: Leetcode算法题：数组篇
author: NOxONE
date: '2023-05-01'
categories:
  - 算法刷题集
tags:
  - 算法刷题集
---

## [1. 二分查找](https://leetcode.cn/problems/binary-search)

给定一个 `n` 个元素 `有序` 的（升序）整型数组 `nums` 和一个目标值 `target`  ，写一个函数搜索 `nums` 中的 `target`，如果目标值存在返回下标，否则返回 `-1`。

**示例 1:**

```js
输入: nums = [-1,0,3,5,9,12], target = 9     
输出: 4       
解释: 9 出现在 nums 中并且下标为 4     
```

**示例 2:**

```js
输入: nums = [-1,0,3,5,9,12], target = 2     
输出: -1        
解释: 2 不存在 nums 中因此返回 -1        
```

### 思路

使用`二分查找`

对于有序数组，使用二分查找时间复杂度为`O(log n)`。定义区间区间为`左右闭合[l, r]`，则循环判断条件为`r <= l`，中间坐标`m = (l + r) >> 1`，对于升序数组，小于`target`时`l = m + 1`，大于时`r = m - 1`，等于时直接`return m`

### JS

```js
var search = function (nums, target) { 
  for (let l = 0, r = nums.length - 1, m = l + r >> 1; l <= r; m = l + r >> 1) { 
    if (target == nums[m]) return m
    target < nums[m] ? r = m - 1 : l = m + 1 
  } 
  return -1 
}
```

### Golang

```golang
func search(nums []int, target int) int {
  l := 0
  r := len(nums) - 1
  for l <= r {
    m := (l + r) >> 1 // 中数
    if (nums[m] == target) {
      return m
    }
    if (nums[m] < target) {
      l = m + 1
      continue
    }
    r = m - 1
  }
  return -1
}
```

## [2. 移除元素](https://leetcode.cn/problems/remove-element)

给你一个数组 `nums` 和一个值 `val`，你需要 `原地` 移除所有数值等于 `val` 的元素，并返回移除后数组的新长度。

不要使用额外的数组空间，你必须仅使用 `O(1)` 额外空间并 `原地` 修改输入数组。

元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

**示例 1：**

```js
输入：nums = [3,2,2,3], val = 3
输出：2, nums = [2,2]
解释：函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。
你不需要考虑数组中超出新长度后面的元素。例如，函数返回的新长度为 2 ，
而 nums = [2,2,3,3] 或 nums = [2,2,0,0]，也会被视作正确答案。
```

**示例 2：**

```js
输入：nums = [0,1,2,2,3,0,4,2], val = 2
输出：5, nums = [0,1,4,0,3]
解释：函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。
注意这五个元素可为任意顺序。你不需要考虑数组中超出新长度后面的元素。
```

### 思路

使用`快慢指针`

`slow`指针指向替换坐标，`fast`指针用于控制迭代数组。当访问元素不等于目标时则`pick`，将元素放置于`slow`指针指向的坐标下且`slow++`；反之，当访问元素等于目标时则`drop`，此时`slow`不作任何操作

### JS

```js
function removeElement(nums, val) { 
  let fast, slow = 0
  for ; fast < nums.length; fast++ {
    if (nums[fast] != val) nums[slow++] = nums[fast]
  }
  return slow
}
```

### Golang

```golang
func removeElement(nums []int, val int) int {
  fast, slow := 0, 0
  for ; fast < len(nums); fast++ {
    if (nums[fast] != val) {
      nums[slow] = nums[fast] // 不能像这样nums[slow++] = nums[fast]一行解决，就很难受
      slow++
    }
  }
  return slow
}
```

## [3. 有序数组的平方](https://leetcode.cn/problems/squares-of-a-sorted-array/)

给你一个按 `非递减顺序` 排序的整数数组 `nums`，返回 `每个数字的平方` 组成的新数组，要求也按 `非递减顺序` 排序。

**示例 1：**

```js
输入：nums = [-4,-1,0,3,10]
输出：[0,1,9,16,100]
解释：平方后，数组变为 [16,1,0,9,100]
排序后，数组变为 [0,1,9,16,100]
```

**示例 2：**

```js
输入：nums = [-7,-3,2,3,11]
输出：[4,9,9,49,121]
```

### 思路

使用`左右双指针`

倒序遍历数组，`i`即为待放置的坐标。计算`l`指针下的元素平方和`r`指针下的元素平方，大的放于`i`坐标下，并控制相应的指针移动

### JS

```js
function sortedSquares(nums) {
  let l = 0
  let r = nums.length - 1
  let i = nums.length - 1
  while(l <= r) {
    let lRes = nums[l] ** 2
    let rRes = nums[i] ** 2
    if (lRes > rRes) {
      ret[i--] = lRes
      l++
      continue
    }
    ret[i--] = rRes
    r--
  }
  return ret
}
```

### Golang

```golang
func sortedSquares(nums []int) []int {
  n := len(nums)
  l, r, i := 0, n -1, n - 1
  ret := make([]int, n)
  for l <= r {
    lRes, rRes := nums[l] * nums[l], nums[r] * nums[r]
    if (lRes > rRes) {
      ret[i] = lRes
      l++
      i--
      continue
    }
    ret[i] = rRes
    r--
    i--
  }
  return ret
}
```

## [4. 长度最小的数组](https://leetcode.cn/problems/minimum-size-subarray-sum/)

给定一个含有 `n` 个正整数的数组和一个正整数 `target` 。

找出该数组中满足其和 `≥ target` 的长度最小的 `连续子数组` `[numsl, numsl+1, ..., numsr-1, numsr]` ，并返回其长度。如果不存在符合条件的子数组，返回 `0`。

**示例 1：**

```js
输入：target = 7, nums = [2,3,1,2,4,3]
输出：2
解释：子数组 [4,3] 是该条件下的长度最小的子数组。
```

**示例 2：**

```js
输入：target = 4, nums = [1,4,4]
输出：1
```

**示例 3：**

```js
输入：target = 11, nums = [1,1,1,1,1,1,1,1]
输出：0
```

### 思路

使用`滑动窗口`

定义`l`、`r`指针，移动`r`，动态计算`[l, r]`区间的元素总和，在`>= target`时，移动`l`以压缩区间大小，并记录区间元素总和以及区间长度大小的最小值，直至小于目标值时退出，当`r`超出区间时停止
### JS
```js
function minSubArrayLen(target, nums) {
  let l = r = sum = 0
  let ret = Infinite
  for (; r < nums.length; r++) {
    sum += nums[r]
    while(sum >= target) {
      ret = Math.min(ret, r - l + 1)
      sum -= nums[l++]
    }
  }
  return ret === Infinite ? 0 : ret
}
```
### Golang
```golang
func minSubArrayLen(target int, nums []int) int {
  // go的math.Inf(1)只能表示浮点类型的正无穷大值，所以取代使用len(nums) + 1作为大值，就很难受~
  l, r, ret, sum := 0, 0, len(nums) + 1, 0
  for ; r < len(nums); r++ {
    sum += nums[r]
    for sum >= target {
      if (r - l + 1) < ret { // 不能math.Min(ret, r - l + 1)，因为入参也必须是浮点类型，就很难受~
        ret = r - l + 1
      }
      sum -= nums[l]
      l++
    }
  }
  // 不能 return ret == len(nums) + 1 ? 0 : ret 就很难受~
  if ret == len(nums) + 1 {
    return 0
  }
  return ret
}
```

## [5. 螺旋矩阵Ⅱ （中等）](https://leetcode.cn/problems/spiral-matrix-ii/description/)
给你一个正整数 `n` ，生成一个包含 `1` 到 `n2` 所有元素，且元素按顺时针顺序螺旋排列的 `n x n` 正方形矩阵 `matrix` 。

**示例 1：**

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/995654e7293e4670bebfc094187f0d1f~tplv-k3u1fbpfcp-zoom-1.image)

```js
输入： n = 3
输出： [[1,2,3],[8,9,4],[7,6,5]]
```
**示例 2：**
```js
输入： n = 1
输出： [[1]]
```
### 思路
典型的 `模拟` 控制二维矩阵数组的迭代，定义好 `上、下、左、右` 四个边界，然后依次在上边界、左边界、下边界、右边界上迭代即可，迭代方向依次为正向、正向、逆向、逆向。

### JS
```js
function generateMatrix(n) {
  let matrix = Array(n).fill().map(() => Array(n).fill(0))
  let count = 1
  let l = 0, r = n - 1, t = 0, b = n - 1, i = 0 // 边界和当前下标
  for (; l <= r && t <= b; l++, r--, t++, b--) {
    for (i = l; i <= r; i++) matrix[t][i] = count++
    for (i = t + 1; i <= b; i++) matrix[i][r] = count++
    for (i = r - 1; i >= l; i--) matrix[b][i] = count++
    for (i = b - 1; i >= t + 1; i--) matrix[i][l] = count++
  }
  return matrix
};
```
### Golang
```golang
func generateMatrix(n int) [][]int {
  var matrix = make([][]int, n)
  for i := 0; i < n; i++ {
    matrix[i] = make([]int, n)
  }
  var count = 0
  var l, r, t, b, i = 0, n - 1, 0, n - 1, 0
  for l <= r && t <= b {
    for i = l; i <= r; i++ {
      count++
      matrix[t][i] = count 
    }
    for i = t + 1; i <= b; i++ {
      count++
      matrix[i][r] = count
    }
    for i = r - 1; i>= l; i-- {
      count++
      matrix[b][i] = count
    }
    for i = b - 1; i >= t + 1; i-- {
      count++
      matrix[i][l] = count
    }
    l, r, t, b = l + 1, r - 1, t + 1, b - 1
  }
  return matrix
}
```
