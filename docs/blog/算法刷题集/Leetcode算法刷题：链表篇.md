---
title: Leetcode算法题：链表篇
author: NOxONE
date: '2023-06-11'
categories:
  - 算法刷题集
tags:
  - 算法刷题集
---

## [1. 移除链表元素（简单）](https://leetcode.cn/problems/remove-linked-list-elements/)

给你一个链表的头节点 `head` 和一个整数 `val` ，请你删除链表中所有满足 `Node.val == val` 的节点，并返回 **新的头节点** 。

**示例 1：**

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/23095a57109b4a51a97c1252186354a5~tplv-k3u1fbpfcp-zoom-1.image)

```js
输入： head = [1,2,6,3,4,5,6], val = 6
输出： [1,2,3,4,5]
```

**示例 2：**

```js
输入： head = [], val = 1
输出： []
```

**示例 3：**

```js
输入： head = [7,7,7,7], val = 7
输出： []
```

### 思路

使用`前哨兵`迭代链表

形如以下方式：

```js
let prev = new NodeList(-1, head) // 前哨兵
while (prev.next) { // prev.next即为当前节点
  if (prev.next.val === 7) {
    // ....
  }
  prev = prev.next
}
```

当前节点即为`prev.next`，当值满足条件时让前置节点的`next`指向当前节点的`next`即可，即`prev.next = prev.next.next`，否则通过`prev = prev.next`迭代下一个节点

### JS

```js
var removeElements = function(head, val) {
  let ret = new ListNode(-1, head)
  let prev = ret 
  while(prev.next){
    if (prev.next.val === val) {
      prev.next = prev.next.next
      continue
    }
    prev = prev.next
  }
  return ret.next
}
```

### Golang

```golang
func removeElements(head *ListNode, val int) *ListNode {
  var ret = &ListNode{-1, head}
  var prev = ret 
  for prev.Next != nil {
    if (prev.Next.Val == val) {
      prev.Next = prev.Next.Next
      continue
    }
    prev = prev.Next
  }
  return ret.Next
}
```

## [2. 反转链表（简单）](https://leetcode.cn/problems/reverse-linked-list/)
给你单链表的头节点 `head` ，请你反转链表，并返回反转后的链表。

**示例 1：**

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/816e90651d0f4644937054dc376d2a5f~tplv-k3u1fbpfcp-zoom-1.image)

```js
输入： head = [1,2,3,4,5]
输出： [5,4,3,2,1]
```

**示例 2：**

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d503c4b30188430a82111541540c207f~tplv-k3u1fbpfcp-zoom-1.image)

```js
输入： head = [1,2]
输出： [2,1]
```

**示例 3：**

```js
输入： head = []
输出： []
```

### 思路

1.  使用`双指针`，即`cur`指针和`prev`指针
2.  使用`栈`，利用`先进后出`这一特性
3.  使用`递归`，递归到最后一个节点时终止，通过`cur.next.next = cur`改变指向

### JS

**双指针**

```js
var reverseList = function(head) {
  if (!head || !head.next) return head

  let prev = null
  let temp = null
  while (head) {
    temp = head.next
    head.next = prev
    prev = head
    head = temp
  }
  return prev
}
```

**栈**

```js
var reverseList = function(head) {
  if (!head || !head.next) return head
  
  let stack = []
  for (let cur = head; cur; cur = cur.next) stack.push(cur) // 入栈

  let ret = stack.pop()
  let cur = ret 
  while(stack.length) { // 出栈
    cur.next = stack.pop()
    cur = cur.next
  }
  cur.next = null
  return ret
}
```

**递归**

```js
var reverseList = function(head) {
  if (!head || !head.next) return head
  
  let h = reverseList(head.next)
  head.next.next = head
  head.next = null
  return h
}
```

### Golang

**双指针**

```golang
func reverseList(head *ListNode) *ListNode {
  if (head == nil || head.Next == nil) {
    return head
  }

  var prev *ListNode
  var temp *ListNode
  
  for head != nil {
    temp = head.Next
    head.Next = prev
    prev = head
    head = temp
  }
  return prev
}
```

**栈**

```golang
// todo
```

**递归**

```golang
func reverseList(head *ListNode) *ListNode {
  if (head == nil || head.Next == nil) {
    return head
  }

  var h = reverseList(head.Next)
  head.Next.Next = head
  head.Next = nil
  return h
}
```

## [3. 两两交换链表中的节点（中等）](https://leetcode.cn/problems/swap-nodes-in-pairs/)
给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。

**示例 1：**

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2afbd27cd58e47de96632fdfce12e0e5~tplv-k3u1fbpfcp-zoom-1.image)

```js
输入： head = [1,2,3,4]
输出： [2,1,4,3]
```

**示例 2：**

```js
输入： head = []
输出： []
```

**示例 3：**

```js
输入： head = [1]
输出： [1]
```

### 思路

使用 `前哨兵` 加 `三指针`

分别保存第一个节点、第二个节点、第三个节点，然后指定前哨兵的 `next` 为第二个节点， `next.next` 为第一个节点， `next.next.next` 为第三个节点，以此类推迭代下去，直至当前节点无下一个节点或下下一个节点

### JS

```js
var swapPairs = function(head) {
  let ret = cur = new ListNode(-1, head)
  
  while (cur.next && cur.next.next) {
    let temp1 = cur.next
    let temp2 = cur.next.next
    let temp3 = cur.next.next.next
    cur.next = temp2
    cur.next.next = temp1
    cur.next.next.next = temp3
    cur = cur.next.next
  }
  return ret.next
}
```

### Golang

```golang
func swapPairs(head *ListNode) *ListNode {
  cur := &ListNode{-1, head}
  ret := cur
  for cur.Next != nil && cur.Next.Next != nil {
    temp1 := cur.Next
    temp2 := cur.Next.Next
    temp3 := cur.Next.Next.Next
    cur.Next = temp2
    cur.Next.Next = temp1
    cur.Next.Next.Next = temp3
    cur = cur.Next.Next
  }
  return ret.Next
}
```

## [4. 删除链表的倒数第 N 个结点（中等）](https://leetcode.cn/problems/remove-nth-node-from-end-of-list/)

给你一个链表，删除链表的倒数第 `n` 个结点，并且返回链表的头结点。

**示例 1：**

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8092965708e0414f8dc38bd3f1ff0e30~tplv-k3u1fbpfcp-zoom-1.image)

```js
输入： head = [1,2,3,4,5], n = 2
输出： [1,2,3,5]
```

**示例 2：**

```js
输入： head = [1], n = 1
输出： []
```

**示例 3：**

```js
输入： head = [1,2], n = 1
输出： [1]
```

### 思路

使用 `前哨兵` 加 `快慢指针`

先让 `快指针` 走 `n` 步， 然后快慢针同时走，直至快指针到终点时终止，此时 `慢指针` 所处位置即为待删除节点的 `前置节点`

### JS

```js
var removeNthFromEnd = function(head, n) {
  let ret = new ListNode(-1, head)
  let f = ret
  let s = ret

  while (n--) f = f.next
  while (f.next) {
    s = s.next
    f = f.next
  }
  s.next = s.next.next
  return ret.next
}
```

### Golang

```golang
func removeNthFromEnd(head *ListNode, n int) *ListNode {
  ret := &ListNode{-1, head}
  s, f := ret, ret
  for n != 0 {
    f = f.Next
    n--
  }
  for f.Next != nil {
    f = f.Next
    s = s.Next
  }
  s.Next = s.Next.Next
  return ret.Next
}
```

## [5. 链表相交（简单）](https://leetcode.cn/problems/intersection-of-two-linked-lists-lcci/)

给你两个单链表的头节点 `headA` 和 `headB` ，请你找出并返回两个单链表相交的起始节点。如果两个链表没有交点，返回 `null` 。

图示两个链表在节点 `c1` 开始相交：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e13d696c53cf4ee0adac436116dda3ce~tplv-k3u1fbpfcp-zoom-1.image)

题目数据 **保证** 整个链式结构中不存在环。

**注意**，函数返回结果后，链表必须 **保持其原始结构** 。

 

**示例 1：**

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c5d6c8d078b247378c2f2c37203dbf47~tplv-k3u1fbpfcp-zoom-1.image)

```js
输入： intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
输出： Intersected at '8'
解释： 相交节点的值为 8 （注意，如果两个链表相交则不能为 0）。
从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。
在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。
```

**示例 2：**

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/14d8b8c5192641468dab4e9815b94c9e~tplv-k3u1fbpfcp-zoom-1.image)

```js
输入： intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
输出： Intersected at '2'
解释： 相交节点的值为 2 （注意，如果两个链表相交则不能为 0）。
从各自的表头开始算起，链表 A 为 [0,9,1,2,4]，链表 B 为 [3,2,4]。
在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。
```

**示例 3：**

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1b5c8a670e9f4014bd48885905e9656a~tplv-k3u1fbpfcp-zoom-1.image)

```js
输入： intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
输出： null
解释： 从各自的表头开始算起，链表 A 为 [2,6,4]，链表 B 为 [1,5]。
由于这两个链表不相交，所以 intersectVal 必须为 0，而 skipA 和 skipB 可以是任意值。
这两个链表不相交，因此返回 null 。
```

### 思路

1.  使用 `双指针`，计算两个链表长度，让长的先走完多出的节点，然后两个节点同时走，如相交则会有共同的节点
2.  使用 `set` 记录A链表的所有节点，然后迭代B链表，看是否有相同节点

### JS

**双指针**

```js
var getIntersectionNode = function (headA, headB) {
  let step = 0
  let curA = headA
  let curB = headB
  for (; curA; step++) curA = curA.next
  for (; curB; step--) curB = curB.next

  curA = step > 0 ? headA : headB
  curB = step > 0 ? headB : headA
  step = Math.abs(step)
  while (step--) curA = curA.next
  for (; curA; curA = curA.next, curB = curB.next) {
    if (curA === curB) return curA
  }
    
  return null
}
```

**set**

```js
var getIntersectionNode = function(headA, headB) {
  let set = new Set()
  while(headA) {
    set.add(headA)
    headA = headA.next
  }
  while(headB){
    if(set.has(headB)) return headB
    headB = headB.next
  }
  return null
}
```

### Golang

```golang
func getIntersectionNode(headA, headB *ListNode) *ListNode {
  var curA, curB, step = headA, headB, 0
  for curA != nil {
    curA = curA.Next
    step++
  }  
  for curB != nil {
    curB = curB.Next
    step--
  }
  curA, curB = headA, headB
  for step > 0 {
    curA = curA.Next
    step--
  }
  for step < 0 {
    curB = curB.Next
    step++
  }
  for curA != curB {
    curA = curA.Next
    curB = curB.Next
  }
  return curA
}
```

## [6. 环形链表 II（困难）](https://leetcode.cn/problems/linked-list-cycle-ii/)

给定一个链表的头节点  `head` ，返回链表开始入环的第一个节点。 *如果链表无环，则返回 `null`。*

如果链表中有某个节点，可以通过连续跟踪 `next` 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 `pos` 来表示链表尾连接到链表中的位置（**索引从 0 开始**）。如果 `pos` 是 `-1`，则在该链表中没有环。**注意：`pos` 不作为参数进行传递**，仅仅是为了标识链表的实际情况。

**不允许修改** 链表。

**示例 1：**

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/44a022027ca147ee9f8c03a6bf92080d~tplv-k3u1fbpfcp-zoom-1.image)

```js
输入： head = [3,2,0,-4], pos = 1
输出： 返回索引为 1 的链表节点
解释： 链表中有一个环，其尾部连接到第二个节点。
```

**示例 2：**

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2c22b95a238e44c0a36942d7b1cde12c~tplv-k3u1fbpfcp-zoom-1.image)

```js
输入： head = [1,2], pos = 0
输出： 返回索引为 0 的链表节点
解释： 链表中有一个环，其尾部连接到第一个节点。
```

**示例 3：**

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5c0ae6b0894d4eaf86c94686ce615b14~tplv-k3u1fbpfcp-zoom-1.image)

```js
输入： head = [1], pos = -1
输出： 返回 null
解释： 链表中没有环。
```

### 思路

1. 使用 `快慢指针`

首先，快指针 `f` 每次走两步，慢指针 `s` 每次走一步，当二者相遇时，`s` 回到原点（若不相遇的话，则证明没有环）

之后， `f` 和 `s` 每次都走一步，直到两者相遇时，此时相遇点即为入环节点

证明如下：设头节点到入环点长度为 `x`，环长度为 `y+z`，`y` 为 `s` 与 `f` 的第一次相遇点

第一次相遇时：`s = x+y` , `f = x+y+n(y+z)` => `x+y+n(y+z) = 2x+2y` => `x+y = n(y+z)` => `x = n(y+z)-y`

若 `f` 再走 `x` 步时：`f = x+y+n(y+z) + x = x+2n(y+z)` ，此时正好停留在入环点

2. 使用 `set`

迭代链表的同时记录已访问过的节点，若有环的话，那么必定会再次访问入环点

### JS

```js
var detectCycle = function (head) {
  if (!head || !head.next || !head.next.next) return null
  
  let f = s = head
  while (f.next && f.next.next) {
    f= f.next.next
    s = s.next
    if (s == f) {
      s = head
      while (s != f) {
        s = s.next
        f = f.next
      }
      return s
    }
  }
  return null
}
```

### Golang

```golang
func detectCycle(head *ListNode) *ListNode {
  if head == nil || head.Next == nil || head.Next.Next == nil {
     return nil
  }

  f, s := head, head
  for f.Next != nil && f.Next.Next != nil {
    f = f.Next.Next
    s = s.Next
    if s == f {
      s = head
      for s != f {
        s = s.Next
        f = f.Next
      }
      return s
    }
  }
  return nil
}
```
