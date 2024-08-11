---
title: Leetcode算法题：哈希表篇
author: NOxONE
date: '2023-06-13'
categories:
  - 算法刷题集
tags:
  - 算法刷题集
---

## [1. 有效的字母异位词（简单）](https://leetcode.cn/problems/valid-anagram/)
给定两个字符串 `s` 和 `t` ，编写一个函数来判断 `t` 是否是 `s` 的字母异位词。

**注意：** 若 `s` 和 `t` **中每个字符出现的次数都相同，则称 `s` 和 `t` **互为字母异位词。

**示例 1:**

```js
输入: s = "anagram", t = "nagaram"
输出: true
```

**示例 2:**

```js
输入: s = "rat", t = "car"
输出: false
```
### 思路

使用 `哈希表` , 记录第一个字符串的所有字符的个数，然后迭代第二个字符串，动态减少 `哈希表` 中记录的字符个数，若字符不存在（字符个数已为0或压根就没存在过）返回 `false`，否则返回 `true`

### JS
```js
// 1. 哈希表
var isAnagram = function(s, t) {
  if (s.length != t.length) return false // 长度不同，肯定false

  let map = new Map()
  for (let w of s) {
    map.set(w, map.get(w) ? map.get(w) + 1 : 1)
  }
  for (let w of t) {
    if (!map.get(w)) return false // 一语双关：undefined 和 0
    map.set(w, map.get(w) - 1)
  }
  return true
}

// 2. unicode数组
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false

  let arr = new Array(26).fill(0)
  let base = 'a'.charCodeAt() // 基准 a-z 0-26

  for (let item of s) arr[item.charCodeAt() - base]++
  for (let item of t) if (!arr[item.charCodeAt() - base]--) return false
  
  return true
};
```
### Golang
```golang
// 1. 哈希表
func isAnagram(s string, t string) bool {
  if len(s) != len(t) {
    return false
  }

  m := map[rune]int{}
  for _, w := range s {
    m[w]++
  }
  for _, w := range t {
    if (m[w] == 0) {
      return false
    }
    m[w]--
  }
  return true
}

// 2. unicode数组（go数组是值，而非指针）
func isAnagram(s string, t string) bool {
  if len(s) != len(t) {
    return false
  }

  var arr1, arr2 [26]int
  for _, w := range s {
    arr1[w - 'a']++
  }
  for _, w := range t {
    arr2[w - 'a']++
  }
  return arr1 == arr2
}
```

## [2. 两个数组的交集（简单）](https://leetcode.cn/problems/intersection-of-two-arrays/)
给定两个数组 `nums1` 和 `nums2` ，返回 *它们的交集* 。输出结果中的每个元素一定是 **唯一** 的。我们可以 **不考虑输出结果的顺序** 。

**示例 1：**

```js
输入： nums1 = [1,2,2,1], nums2 = [2,2]
输出： [2]
```

**示例 2：**

```js
输入： nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出： [9,4]
解释： [4,9] 也是可通过的
```
### 思路
使用 `set` 或 `map`

### JS
```js
var intersection = function(nums1, nums2) {
  let ret = new Set()
  let set = new Set(nums1)
  for (let n of nums2) {
    if (set.has(n)) ret.add(n)
  }
  return [...ret]
}
```
### Golang

```golang
func intersection(nums1 []int, nums2 []int) []int {
  var set = make(map[int]bool, 0) // 使用map模拟set
  var ret = make([]int, 0)

  for _, n := range nums1 {
    if set[n] {
      continue
    }
    set[n] = true
  }
  for _, n := range nums2 {
    if !set[n] {
      continue
    }
    ret = append(ret, n)
    delete(set, n)
  }
  return ret
}
```

## [3. 快乐数（简单）](https://leetcode.cn/problems/happy-number/)
编写一个算法来判断一个数 `n` 是不是快乐数。

**「快乐数」** 定义为：

-   对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
-   然后重复这个过程直到这个数变为 1，也可能是 **无限循环** 但始终变不到 1。
-   如果这个过程 **结果为** 1，那么这个数就是快乐数。

如果 `n` 是 *快乐数* 就返回 `true` ；不是，则返回 `false` 。

 
**示例 1：**

```js
输入： n = 19
输出： true
解释： 12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
```

**示例 2：**

```js
输入： n = 2
输出： false
```
### JS
```js
var isHappy = function(n) {
  let map = new Map()
  
  for (n = getDigitSum(n); n != 1; n = getDigitSum(n)) {
    if (map.has(n)) return false
    map.set(n, true)
  }
  return true
}

function getDigitSum(n) {
  let ret = 0
  while (n) {
    ret += (n % 10) * (n % 10)
    n = n / 10 | 0
  }
  return ret
}
```
### Golang
```golang
func isHappy(n int) bool {
  var m = make(map[int]bool, 0)
  
  for n = getDigitSum(n); n != 1; n = getDigitSum(n) {
    if (m[n]) {
       return false
    }
    m[n] = true
  }

  return true
}
func getDigitSum(n int) int {
  var ret = 0

  for n != 0 {
    ret += (n % 10) * (n % 10)
    n = n / 10
  }

  return ret
}
```

## [4. 两数之和（简单）](https://leetcode.cn/problems/two-sum/)

给定一个整数数组 `nums` 和一个整数目标值 `target`，请你在该数组中找出 **和为目标值** *`target`*  的那 **两个** 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。

**示例 1：**

```js
输入： nums = [2,7,11,15], target = 9
输出： [0,1]
解释： 因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
```

**示例 2：**

```js
输入： nums = [3,2,4], target = 6
输出： [1,2]
```

**示例 3：**

```js
输入： nums = [3,3], target = 6
输出： [0,1]
```

### JS
```js
var twoSum = function (nums, target) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) return [map.get(target - nums[i]), i]
    map.set(nums[i], i)
  }
  return []
}
```
### Golang
```golang
func twoSum(nums []int, target int) []int {
  var m = make(map[int]int)
  for idx, n := range nums {
    if preIdx, ok := m[target - n]; ok {
      return []int{preIdx, idx}
    }
    m[n] = idx
  }
  return []int{}
}
```

## [5. 四数相加 II（中等）](https://leetcode.cn/problems/4sum-ii/)

给你四个整数数组 `nums1`、`nums2`、`nums3` 和 `nums4` ，数组长度都是 `n` ，请你计算有多少个元组 `(i, j, k, l)` 能满足：

-   `0 <= i, j, k, l < n`
-   `nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0`

 

**示例 1：**

```js
输入： nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
输出： 2
解释：
两个元组如下：
1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0
2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0
```

**示例 2：**

```js
输入： nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0]
输出： 1
```

### JS
```js
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  let ret = 0
  let map = new Map()
  for (let n of nums1) {
    for (let m of nums2) {
      map.set(m + n, map.get(m + n) ? map.get(m + n) + 1 : 1)
    }
  }
  for (let n of nums3) {
    for(let m of nums4) {
      if (map.has(-n-m)) ret += map.get(-m-n)
    }
  }
  return ret
}
```

### Golang
```golang
func fourSumCount(nums1 []int, nums2 []int, nums3 []int, nums4 []int) int {
  var ret = 0
  var m = make(map[int]int)
  for _, a := range nums1 {
    for _, b:= range nums2 {
      m[a + b]++
    } 
  }
  for _, a := range nums3 {
    for _, b:= range nums4 {
      ret += m[-a-b]
    } 
  }
 
  return ret
}
```
## [6. 三数之和（中等）](https://leetcode.cn/problems/3sum/)

给你一个整数数组 `nums` ，判断是否存在三元组 `[nums[i], nums[j], nums[k]]` 满足 `i != j`、`i != k` 且 `j != k` ，同时还满足 `nums[i] + nums[j] + nums[k] == 0` 。请

你返回所有和为 `0` 且不重复的三元组。

**注意：** 答案中不可以包含重复的三元组。

**示例 1：**

```js
输入： nums = [-1,0,1,2,-1,-4]
输出： [[-1,-1,2],[-1,0,1]]
解释：
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
注意，输出的顺序和三元组的顺序并不重要。
```

**示例 2：**

```js
输入： nums = [0,1,1]
输出： []
解释： 唯一可能的三元组和不为 0 。
```

**示例 3：**

```js
输入： nums = [0,0,0]
输出： [[0,0,0]]
解释： 唯一可能的三元组和为 0 。
```
### 思路
没有什么思路，有的是套路
### JS
```js
var threeSum = function (nums) {
  nums.sort((a, b) => a - b)
  let ret = []
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] + nums[i + 1] + nums[i + 2] > 0) break // 剪枝
    if (i > 0 && nums[i] == nums[i - 1]) continue // 去重

    let l = i + 1, r = nums.length - 1, sum = 0
    while (l < r) {
      sum = nums[i] + nums[l] + nums[r]
      if (sum < 0) {
        l++
        continue
      }
      if (sum > 0) {
        r--
        continue
      }
      ret.push([nums[i], nums[l], nums[r]])
      while (l < r && nums[l] == nums[++l]) continue // 去重
      while (l < r && nums[r] == nums[--r]) continue // 去重
    }
  }

  return ret
}
```
### Golang
```golang
func threeSum(nums []int) [][]int {
  sort.Ints(nums)
  var ret = [][]int{}
  for i := 0; i < len(nums) - 2; i++ {
    if (nums[i] + nums[i+1] + nums[i+2] > 0) {
      break
    }
    if (i > 0 && nums[i] == nums[i-1]) {
      continue
    }
    l, r := i + 1, len(nums) - 1
    for l < r {
      n1, n2, n3 := nums[i], nums[l], nums[r]
      if n1 + n2 + n3 < 0 {
        l++
        continue
      }
      if n1 + n2 + n3 > 0 {
        r--
        continue
      }
      ret = append(ret, []int{n1, n2, n3})
      for l < r && nums[l] == n2 {
        l++
      }
      for l < r && nums[r] == n3 {
        r--
      }
    }
  }
  return ret
}
```

## [7. 四数之和（中等）](https://leetcode.cn/problems/4sum/)

给你一个由 `n` 个整数组成的数组 `nums` ，和一个目标值 `target` 。请你找出并返回满足下述全部条件且**不重复**的四元组 `[nums[a], nums[b], nums[c], nums[d]]` （若两个四元组元素一一对应，则认为两个四元组重复）：

-   `0 <= a, b, c, d < n`
-   `a`、`b`、`c` 和 `d` **互不相同**
-   `nums[a] + nums[b] + nums[c] + nums[d] == target`

你可以按 **任意顺序** 返回答案 。


**示例 1：**

```js
输入： nums = [1,0,-1,0,-2,2], target = 0
输出： [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
```

**示例 2：**

```js
输入： nums = [2,2,2,2,2], target = 8
输出： [[2,2,2,2]]
```
### JS
```js
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b)
  let ret = []
  for (let i = 0; i < nums.length - 3; i++) {
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break
    if (i > 0 && nums[i] == nums[i - 1]) continue
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break
      if (j > i + 1 && nums[j] == nums[j - 1]) continue
      let l = j + 1, r = nums.length - 1
      while (l < r) {
        let n1 = nums[i], n2 = nums[j], n3 = nums[l], n4 = nums[r]
        if (n1 + n2 + n3 + n4 < target) {
          l++
          continue
        }
        if (n1 + n2 + n3 + n4 > target) {
          r--
          continue
        }
        ret.push([n1, n2, n3, n4])
        while (l < r && nums[l] == nums[++l]) continue
        while (l < r && nums[r] == nums[--r]) continue
      }
    }
  }
  return ret
}
```
### Golang
```golang
func fourSum(nums []int, target int) [][]int {
  sort.Ints(nums)
  var ret = [][]int{}

  for i := 0; i < len(nums) - 3; i++ {
    if (nums[i] + nums[i+1] + nums[i+2] + nums[i+3] > target) {
      break
    }
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue
    }
    for j := i + 1; j < len(nums) - 2; j++ {
      if (nums[i] + nums[j] + nums[j+1] + nums[j+2] > target) {
        break
      }
      if (j > i + 1 && nums[j] == nums[j-1]) {
        continue
      }
      l, r := j + 1, len(nums) - 1
      for l < r {
        n1, n2, n3, n4 := nums[i], nums[j], nums[l], nums[r]
        if (n1 + n2 + n3 + n4 < target) {
          l++
          continue
        }
        if (n1 + n2 + n3 + n4 > target) {
          r--
          continue
        }
        ret = append(ret, []int{n1, n2, n3, n4})
        for l < r && nums[l] == n3 {
          l++
        }
        for l < r && nums[r] == n4 {
          r--
        }
      } 
    }
  }
  return ret
}
```