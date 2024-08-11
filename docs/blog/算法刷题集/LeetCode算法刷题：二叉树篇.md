---
title: Leetcode算法题：二叉树篇
author: NOxONE
date: '2023-09-20'
categories:
  - 算法刷题集
tags:
  - 算法刷题集
---

## 0. 二叉树遍历模板
### 先序JS
```js
// 先序递归
function dfs(root) {
  if (!root) return null
  
  // 当前节点操作...
  
  dfs(root.left)
  dfs(root.right)
  return root
}

// 先序迭代
function dfs(root) {
  const stk = root ? [root] : []
  let cur = null
  while(cur || stk.length) {
    cur = stk.pop()
    // 当前节点操作...
    
    cur.right && stk.push(cur.right)
    cur.left && stk.push(cur.left)
  }
  return root
}
```
### 先序Golang
```golang
// 先序递归
func dfs(root *TreeNode) *TreeNode {
  if root == nil {
    return nil
  }
  // 当前节点操作...
  
  dfs(root.Left)
  dfs(root.Right)
  return root
}

// 先序迭代
func dfs(root *TreeNode) *TreeNode {
  if root == nil {
    return nil
  }
  stk := []*TreeNode{root}
  var cur *TreeNode
  
  for len(stk) > 0 {
    cur, stk = stk[len(stk)-1], stk[:len(stk)-1]
    // 当前节点操作...
    
    if cur.Right != nil {
      stk = append(stk, cur.Right)
    }
    if cur.Left != nil {
      stk = append(stk, cur.Left)
    }
  }
  return root
}
```
### 中序JS
```js
// 中序递归
function dfs(root) {
  if (!root) return null

  dfs(root.left)
  // 当前节点操作...
  dfs(root.right)
  return root  
}

// 中序迭代
function dfs(root) {
  const stk = []
  let cur = root
  while (cur || stk.length) {
    if (cur) {
      stk.push(cur)
      cur = cur.left
      continue
    }
    cur = stk.pop()
    // 当前节点操作...
    cur = cur.right
  }
  return root
}
```
### 中序Golang
```golang
// 中序递归
func dfs(root *TreeNode) *TreeNode {
  if root == nil {
    return nil
  }

  dfs(root.Left)
  // 当前节点操作...
  dfs(root.Right)
  return root
}

// 中序迭代
func dfs(root *TreeNode) *TreeNode {
  if root == nil {
    return nil
  }
  stk := []*TreeNode{}
  cur := root

  for cur != nil || len(stk) > 0 {
    if (cur != nil) {
      stk = append(stk, cur)
      cur = cur.Left
      continue
    }
    cur, stk = stk[len(stk) - 1] , stk[:len(stk) - 1]
    // 当前节点操作...
    cur = cur.Right
  }

  return root
}
```
### 后序JS
```js
// 后序递归
function dfs(root) {
  if (!root) return null

  dfs(root.left)
  dfs(root.right)
  // 当前节点操作...
  return root  
}

// 后序迭代
function dfs(root) {
  const stk = root ? [root] : []
  const stk2 = []
  let cur = null
  while (stk.length) {
    cur = stk.pop()
    stk2.push(cur)
    cur.left && cur.push(root.left)
    cur.right && cur.push(root.right)
  }
  while (stk2.length) {
    cur = stk2.pop();
    [cur.left, cur.right] = [cur.right, cur.left]
  }
  return root
}
```
### 后序Golang
懒得写了

### 层序JS
```js
function bfs(root) {
  const queue = root ? [root] : []

  for (let len = queue.length, cur = null; len; len = queue.length) {
    while (len--) {
      cur = queue.shift()
      // 当前节点操作...
      cur.left && queue.push(cur.left)
      cur.right && queue.push(cur.right)
    }
    // 当前层遍历结束后的操作...
  }
  return root
}
```
### 层序Golang
```golang
func bfs(root *TreeNode) *TreeNode {
  if (root == nil) {
    return nil
  }
  queue := []*TreeNode{root}

  for len(queue) > 0 {
    l := len(queue)
    for i := 0; i < l; i++ {
      cur := queue[i]
      // 当前节点操作...
      if cur.Left != nil {
        queue = append(queue, cur.Left)
      }
      if cur.Right != nil {
        queue = append(queue, cur.Right)
      }
   }
   queue = queue[l:]
   // 当前层遍历结束后的操作...
  }
  return root
}
```
### 总结
`JS` 写起来代码量明显少很多，简洁又优雅

`Golang` 交换变量很便捷，且跑测试用例时，耗时比`JS`短很多很多很多。但切片（数组）的`pop`、`shift`、`push`方法需要自己实现，相对来说没有`JS`灵动

```golang
// push
arr = append(arr, n)
// pop
item, arr = arr[len(arr) - 1], arr[:len(arr) - 1]
// shift
item, arr = arr[0], arr[1:]
// slice
arr[2:5] // 截取下标范围 [2, 5)
arr[:5] // 截取下标范围 [0, 5)
arr[2:] // 相当于 arr[2: len(arr)]
```
## [1. 翻转二叉树（先中后层序）](https://leetcode.cn/problems/invert-binary-tree/)
`先中后层序`

给你一棵二叉树的根节点 `root` ，翻转这棵二叉树，并返回其根节点。

**示例 1：**

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/838a5276371e4e23bc6ce8c658c4c360~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=911&h=301&s=34272&e=jpg&b=fefcfc)

```js
输入： root = [4,2,7,1,3,6,9]
输出： [4,7,2,9,6,3,1]
```

**示例 2：**

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/264ededa5f984101bc35b7305e128663~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=761&h=182&s=15045&e=jpg&b=fefefe)

```js
输入： root = [2,1,3]
输出： [2,3,1]
```

### JS
```js
// 先序递归
var inverTree = function(root) {
  if (!root) return null
  
  [root.left, root.right] = [root.right, root.left]
  inverTree(root.left)
  inverTree(root.right)
  
  return root
}

// 后序递归
var invertTree = function(root) {
  if (!root) return null
  
  invertTree(root.left)
  invertTree(root.right);
  [root.left, root.right] = [root.right, root.left]
  
  return root
}

// 中序递归
var inverTree = function(root) {
  if (!root) return null
  
  inverTree(root.left);
  [root.left, root.right] = [root.right, root.left]
  inverTree(root.left) // 右子节点由于交换过，所以为left
  
  return root
}

// 先序迭代
var invertTree = function(root) {
  const stk = root ? [root] : []
  let cur = null
  while (stk.length) {
    cur = stk.pop();
    [cur.left, cur.right] = [cur.right, cur.left]

    // 先右后左 压栈
    cur.right && stk.push(cur.right)
    cur.left && stk.push(cur.left)
  }
  return root
}


// 中序迭代
var invertTree = function(root) {
  const stk = []
  let cur = root
  
  while (cur || stk.length) {
    if (cur) {
      stk.push(cur)
      cur = cur.left
      continue
    }
    cur = stk.pop();
    [cur.left, cur.right] = [cur.right, cur.left]
    cur = cur.left // 右子节点由于交换过，所以为left
  }

  return root
}

// 后序迭代
var invertTree = function(root) {
  const stk = root ? [root] : []
  const stk2 = []
  let cur = null
  while (stk.length) {
    cur = stk.pop()
    stk2.push(cur)
    cur.left && cur.push(root.left)
    cur.right && cur.push(root.right)
  }
  while (stk2.length) {
    cur = stk2.pop();
    [cur.left, cur.right] = [cur.right, cur.left]
  }
  return root
}

// 层序遍历
var invertTree = function(root) {
  const queue = root ? [root] : []
  for (let len = queue.length, cur = null; len; len = queue.length) {
    while (len--) {
      cur = queue.shift();
      [cur.left, cur.right] = [cur.right, cur.left]
      cur.right && queue.push(cur.right)
      cur.left && queue.push(cur.left)
    }
  }
  return root
}
```
### Golang
```golang
// 先序递归
func invertTree(root *TreeNode) *TreeNode {
  if root == nil {
    return nil
  }
  root.Right, root.Left = root.Left, root.Right
  
  invertTree(root.Left)
  invertTree(root.Right)
  
  return root
}

// 中序递归
func invertTree(root *TreeNode) *TreeNode {
  if root == nil {
    return nil
  }
  
  invertTree(root.Left)
  root.Right, root.Left = root.Left, root.Right
  invertTree(root.Left) // 这时候right已经变为left了
  
  return root
}

// 后序递归
func invertTree(root *TreeNode) *TreeNode {
  if root == nil {
    return nil
  }
  
  invertTree(root.Left)
  invertTree(root.Right)
 
  root.Right, root.Left = root.Left, root.Right
  return root
}

// 先序迭代
func invertTree(root *TreeNode) *TreeNode {
  if root == nil {
    return nil
  }
  stk := []*TreeNode{root}
  var cur *TreeNode

  for len(stk) > 0 {
    cur, stk = stk[len(stk)-1], stk[:len(stk)-1]
    cur.Right, cur.Left = cur.Left, cur.Right
    if cur.Right != nil {
      stk = append(stk, cur.Right)
    }
    if cur.Left != nil {
      stk = append(stk, cur.Left)
    }
  }
  return root
}

// 中序迭代
func invertTree(root *TreeNode) *TreeNode {
  if root == nil {
    return nil
  }
  stk := []*TreeNode{}
  cur := root

  for cur != nil || len(stk) > 0 {
    if (cur == nil) {
      cur, stk = stk[len(stk) - 1], stk[:len(stk) - 1]
      cur.Right, cur.Left = cur.Left, cur.Right
      cur = cur.Left // 因为交换过
      continue
    }
    stk = append(stk, cur)
    cur = cur.Left
  }
  return root
}

// 层序遍历
func invertTree(root *TreeNode) *TreeNode {
  if root == nil {
    return nil
  }
  queue := []*TreeNode{root}
  
   for len(queue) > 0 { 
     l := len(queue) 
     for i := 0; i < l; i++ { 
       cur := queue[i] 
       cur.Left, cur.Right = cur.Right, cur.Left 
       if cur.Left != nil { 
         queue = append(queue, cur.Left) 
       } 
       if cur.Right != nil { 
         queue = append(queue, cur.Right) 
       } 
    } 
    queue = queue[l:] 
  }
  return root
}
```

## [2. 二叉树的层序遍历 II（层序）（中等）](https://leetcode.cn/problems/binary-tree-level-order-traversal-ii/)


给你二叉树的根节点 `root` ，返回其节点值 **自底向上的层序遍历** 。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

**示例 1：**

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c4e9d17126a34d778453a63b7e42f3ea~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=277&h=302&s=11387&e=jpg&b=fefefe)

```js
输入： root = [3,9,20,null,null,15,7]
输出： [[15,7],[9,20],[3]]
```

**示例 2：**

```js
输入： root = [1]
输出： [[1]]
```

### JS
```js
var levelOrderBottom = function(root) {
  const ret = []
  const queue = root ? [root] : []
  for (let len = queue.length, cur = null; len; len = queue.length) {
    let tempArr = []
    while (len--) {
      cur = queue.shift()
      tempArr.push(cur.val)
      cur.left && queue.push(cur.left)
      cur.right && queue.push(cur.right)
    }
    ret.push(tempArr)
  }
  return ret.reverse()
}
```
### Golang
```golang
func levelOrderBottom(root *TreeNode) [][]int {
  ret := [][]int{}
  if (root == nil) {
    return ret
  }
  
  queue := []*TreeNode{root}

  for len(queue) > 0 {
    tempArr := []int{}
    l := len(queue)
    for i := 0; i < l; i++ {
      cur := queue[i]
      tempArr = append(tempArr, cur.Val)
      if cur.Left != nil {
        queue = append(queue, cur.Left)
      }
      if cur.Right != nil {
        queue = append(queue, cur.Right)
      }
    }
    ret = append(ret, tempArr)
    queue = queue[l:]
  }

  return reverseSlice(ret)
}
func reverseSlice(slice [][]int) [][]int {
  for i, j := 0, len(slice) - 1; i < j; i, j = i + 1, j -1 {
    slice[i], slice[j] = slice[j], slice[i]
  }
  return slice
}
```
## [3. 二叉树的右视图（层序）（中等）](https://leetcode.cn/problems/binary-tree-right-side-view/)

给定一个二叉树的 **根节点** `root`，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

**示例 1:**

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bceb354676524c94a567edf85045314c~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=401&h=301&s=14835&e=jpg&b=ffffff)

```js
输入: [1,2,3,null,5,null,4]
输出: [1,3,4]
```

**示例 2:**

```js
输入: [1,null,3]
输出: [1,3]
```

### JS
```js
var rightSideView = function(root) {
  const ret = []
  const queue = root ? [root] : []

  for (let len = queue.length, cur = null; len; len = queue.length) {
    while(len--) {
      cur = queue.shift()
      cur.left && queue.push(cur.left)
      cur.right && queue.push(cur.right)
    }
    ret.push(cur.val)
  }
  return ret
}
```
### Golang
```golang
func rightSideView(root *TreeNode) []int {
  ret := []int{}
  if (root == nil){
    return ret
  }
  queue := []*TreeNode{root}
  var cur *TreeNode
  
  for len(queue) > 0 {
    l := len(queue)

    for i := 0; i < l; i++ {
      cur =  queue[i]
      if cur.Left != nil {
        queue = append(queue, cur.Left)
      }
      if cur.Right != nil {
        queue = append(queue, cur.Right)
      }
    }
    ret = append(ret, cur.Val)
    queue = queue[l:]
  }
  return ret
}
```

## [4. 二叉树的层平均值（层序）](https://leetcode.cn/problems/average-of-levels-in-binary-tree/)

给定一个非空二叉树的根节点 `root` , 以数组的形式返回每一层节点的平均值。与实际答案相差 `10-5` 以内的答案可以被接受。

**示例 1：**

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ff1b6caeb9d94f62b82ed099418f0bea~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=277&h=302&s=11138&e=jpg&b=fefefe)

```js
输入： root = [3,9,20,null,null,15,7]
输出： [3.00000,14.50000,11.00000]
解释： 第 0 层的平均值为 3,第 1 层的平均值为 14.5,第 2 层的平均值为 11 。
因此返回 [3, 14.5, 11] 。
```

**示例 2:**

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/93d22846a41d40a8804f696044e082e1~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=292&h=302&s=11358&e=jpg&b=fefefe)

```js
输入： root = [3,9,20,15,7]
输出： [3.00000,14.50000,11.00000]
```
### JS
```js
var averageOfLevels = function(root) {
  const ret = []
  const queue = root ? [root] : []
  for (let len = queue.length, cur = null; len; len = queue.length) {
    let sum = 0
    let total = len
    while (len--) {
      cur = queue.shift()
      sum += cur.val
      cur.left && queue.push(cur.left)
      cur.right && queue.push(cur.right)
    }
    ret.push(sum / total)
  }
  return ret
};
```
### Golang
```golang
func averageOfLevels(root *TreeNode) []float64 {
  ret := []float64{}
  if root == nil {
    return ret
  }

  queue := []*TreeNode{root}
  for len(queue) > 0 {
    l := len(queue)
    sum := 0
    for i := 0; i < l; i++ {
      cur := queue[i]
      sum += cur.Val
      if cur.Left != nil {
        queue = append(queue, cur.Left)
      }
      if cur.Right != nil {
        queue = append(queue, cur.Right)
      }
    }
    // 这里是重点，int转float64
    ret = append(ret, float64(sum) / float64(l))
    queue = queue[l:]
  }
  return ret
}
```

## [5. N 叉树的层序遍历（层序）](https://leetcode.cn/problems/n-ary-tree-level-order-traversal/)

给定一个 N 叉树，返回其节点值的*层序遍历*。（即从左到右，逐层遍历）。

树的序列化输入是用层序遍历，每组子节点都由 null 值分隔（参见示例）。

**示例 1：**

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/50f4bfa786c04790ae5e9cd92e2db2d0~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=781&h=502&s=30744&e=png&b=ffffff)

```js
输入： root = [1,null,3,2,4,null,5,6]
输出： [[1],[3,2,4],[5,6]]
```

**示例 2：**

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9b50162f3f19474b8f772ab02060e662~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=596&h=541&s=31486&e=png&b=fefefe)

```js
输入： root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
输出： [[1],[2,3,4,5],[6,7,8,9,10],[11,12,13],[14]]
```
### JS
```js
var levelOrder = function(root) {
  const ret = []
  const queue = root ? [root] : []
  for (let len = queue.length, cur = null; len; len = queue.length) {
    const tempArr = []
    while (len--) {
      cur = queue.shift()
      tempArr.push(cur.val)
      cur.children && cur.children.forEach(node => queue.push(node))
    }
    ret.push(tempArr)
  }
  return ret
}
```
### Golang
```golang
func levelOrder(root *Node) [][]int {
  ret := [][]int{}
  if root == nil {
    return ret
  }
  queue := []*Node{root}
  
  for len(queue) > 0 {
    l := len(queue)
    tempArr := []int{}
    for i := 0; i < l; i++ {
      cur := queue[i]
      tempArr = append(tempArr, cur.Val)
      for _, node := range cur.Children {
        queue = append(queue, node)
      }
    }
    ret = append(ret, tempArr)
    queue = queue[l:]
  }
  return ret
}
```

## [6. 填充每个节点的下一个右侧节点指针（层序）（中等）](https://leetcode.cn/problems/populating-next-right-pointers-in-each-node/)

给定一个 **完美二叉树** ，其所有叶子节点都在同一层，每个父节点都有两个子节点。二叉树定义如下：
```golang
struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
```

填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 `NULL`。初始状态下，所有 next 指针都被设置为 `NULL`。

**示例 1：**

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d481c3b27d704b1db5071fbab15f665b~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1058&h=361&s=32568&e=png&b=ffffff)

```js
输入： root = [1,2,3,4,5,6,7]
输出： [1,#,2,3,#,4,5,6,7,#]
解释： 给定二叉树如图 A 所示，你的函数应该填充它的每个 next 指针，以指向其下一个右侧节点，如图 B 所示。序列化的输出按层序遍历排列，同一层节点由 next 指针连接，'#' 标志着每一层的结束。
```
### JS
```js
var connect = function (root) {
  const queue = root ? [root] : []
  
  for (let len = queue.length, cur = null; len; len = queue.length) {
    let pre = null
    while (len--) {
      cur = queue.shift()
      if (pre) pre.next = cur
      cur.left && queue.push(cur.left)
      cur.right && queue.push(cur.right)
      pre = cur
    }
   
  }
  return root
}
```
### Golang
```golang
func connect(root *Node) *Node {
  if root == nil {
    return root
  }
  
  queue := []*Node{root}
  for l := len(queue); l > 0; l = len(queue) {
    var pre *Node
    for i := 0; i < l; i++ {
      cur := queue[i]
      if pre != nil {
        pre.Next = cur
      }
      if cur.Left != nil {
        queue = append(queue, cur.Left)
      }
      if cur.Right != nil {
        queue = append(queue, cur.Right)
      }
      pre = cur
    }
    queue = queue[l:]
  }
  return root 
}
```

## [7. 二叉树的最大深度（先后层序）（简单）](https://leetcode.cn/problems/maximum-depth-of-binary-tree/)

给定一个二叉树 `root` ，返回其最大深度。

二叉树的 **最大深度** 是指从根节点到最远叶子节点的最长路径上的节点数。

**示例 1：**

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/351234f7929e445fba1d6b4490accff4~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=422&h=292&s=12823&e=jpg&b=ffffff)

```js
输入： root = [3,9,20,null,null,15,7]
输出： 3
```

**示例 2：**

```js
输入： root = [1,null,2]
输出： 2
```
### JS
```js
// 层序遍历（最简明）
var maxDepth = function(root) {
  const queue = root ? [root] : []
  let ret = 0
  for (let len = queue.length, cur = null; len; len = queue.length) {
    ret++
    while(len--) {
      cur = queue.shift()
      cur.left && queue.push(cur.left)
      cur.right && queue.push(cur.right)
    }
  }
  return ret
}

// 先序遍历
var maxDepth = function(root) {
  function dfs(root, depth) {
    if (!root) return depth

    depth++
    let lDepth = dfs(root.left, depth)
    let rDepth = dfs(root.right, depth)
    return Math.max(depth, lDepth, rDepth)
  }
  return dfs(root, 0)
}

// 后序遍历
var maxDepth = function(root) {
  function dfs(root) {
    if (!root) return 0
    return Math.max(dfs(root.left), dfs(root.right)) + 1
  }
  return dfs(root)
}
```

## [8. 二叉树的最小深度（后层序）](https://leetcode.cn/problems/minimum-depth-of-binary-tree/)

给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

**说明：** 叶子节点是指没有子节点的节点。

**示例 1：**

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/86e92f7e77c74e05807538f68b85b271~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=432&h=302&s=12800&e=jpg&b=ffffff)

```js
输入： root = [3,9,20,null,null,15,7]
输出： 2
```

**示例 2：**

```js
输入： root = [2,null,3,null,4,null,5,null,6]
输出： 5
```
### JS
```js
// 后序
var minDepth = function (root) { // 1.确定函数传参和返回值
  if (!root) return 0 // 2.确定终止条件

  // 3.确定单层递归条件
  // 左 -> minDepth(root.left) 
  // 右 -> minDepth(root.right) 
  // 中 -> +1
  if (!root.left) return minDepth(root.right) + 1 // 这里左被干掉了
  if (!root.right) return minDepth(root.left) + 1 // 这里右被干掉了
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1
}

// 层序
var minDepth = function (root) {
  let queue = root ? [root] : []
  let ret = 0 
  for (let len = queue.length, cur = null; len; len = queue.length) {
    ret++
    while (len--) {
      cur = queue.shift()
      if (!cur.left && !cur.right) return ret
      cur.left && queue.push(cur.left)
      cur.right && queue.push(cur.right)
    }
  }
  return ret
}
```

## [9. 对称二叉树（先层序）](https://leetcode.cn/problems/symmetric-tree/)

给你一个二叉树的根节点 `root` ， 检查它是否轴对称。

**示例 1：**

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/36312666d17142919cfd67dc9b311d4c~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=354&h=291&s=15374&e=jpg&b=fefefe)

```js
输入： root = [1,2,2,3,4,4,3]
输出： true
```

**示例 2：**

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/75f80e811e1e4baa9f31bcb9bbe27c51~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=308&h=258&s=10207&e=jpg&b=fefefe)

```js
输入： root = [1,2,2,null,3,null,3]
输出： false
```
### JS
```js
// 先序
var isSymmetric = function(root) {
  return !root || compareNode(root.left, root.right)
}
function compareNode(l, r) {
  if (!l && !r) return true
  if (!l || !r || l.val !== r.val) return false
  return compareNode(l.left, r.right) && compareNode(l.right, r.left)
}

// 层序
var isSymmetric = function(root) {
  if (!root) return true
  
  let queue = [root.left, root.right]
  let l = r = null
  while (queue.length) {
    l = queue.shift()
    r = queue.shift()

    if (!l && !r) continue
    if (!l || !r || l.val !== r.val) return false

    queue.push(l.left)
    queue.push(r.right)
    queue.push(l.right)
    queue.push(r.left)
  }
  return true
}
```

### Golang
```golang
// 先序
func isSymmetric(root *TreeNode) bool {
  return root == nil || compareNode(root.Left, root.Right)
}
func compareNode(l, r *TreeNode) bool {
  if l == nil && r == nil {
    return true
  }
  if l == nil || r == nil || l.Val != r.Val {
    return false
  }
  return compareNode(l.Left, r.Right) && compareNode(l.Right, r.Left)
}

// 层序
func isSymmetric(root *TreeNode) bool {
  if root == nil {
    return true
  }
  var queue = []*TreeNode{root.Left, root.Right}
  for len(queue) > 0 {
    l := queue[0]
    r := queue[1]
    queue = queue[2:]
    if l == nil && r == nil {
      continue
    }
    if l == nil || r == nil || l.Val != r.Val {
      return false
    }
    queue = append(queue, l.Left, r.Right, l.Right, r.Left)
  }
  return true
}
```
