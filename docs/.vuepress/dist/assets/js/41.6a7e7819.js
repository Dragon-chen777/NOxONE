(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{461:function(t,s,a){"use strict";a.r(s);var e=a(2),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"_1-js内存管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-js内存管理"}},[t._v("#")]),t._v(" 1.JS内存管理")]),t._v(" "),s("h4",{attrs:{id:"_1-1-内存生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-内存生命周期"}},[t._v("#")]),t._v(" 1.1 内存生命周期")]),t._v(" "),s("p",[s("code",[t._v("分配内存")]),t._v(" => "),s("code",[t._v("内存读写")]),t._v(" => "),s("code",[t._v("释放内存")])]),t._v(" "),s("p",[t._v("在JS语言中，内存分配是由JS引擎自动完成的，释放内存也是如此，由JS引擎根据垃圾回收机制进行回收，开发者能控制的是内存读写这一环节")]),t._v(" "),s("h4",{attrs:{id:"_1-2-两种内存存储类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-两种内存存储类型"}},[t._v("#")]),t._v(" 1.2 两种内存存储类型")]),t._v(" "),s("p",[s("code",[t._v("基本类型")]),t._v("：内存是"),s("code",[t._v("固定大小")]),t._v("的，其值存储在"),s("code",[t._v("栈（stack）")]),t._v("空间中")]),t._v(" "),s("p",[s("code",[t._v("引用类型")]),t._v("：内存是"),s("code",[t._v("非固定")]),t._v("的，其值存储在"),s("code",[t._v("堆（heap）")]),t._v("空间中，指向堆空间中的对象的"),s("code",[t._v("指针")]),t._v("存储在栈空间中")]),t._v(" "),s("p",[t._v("不多bb，来看代码：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在栈中给数值分配内存")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" s "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'NO x ONE'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在栈中给字符串分配内存")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在堆中存储新的对象，在栈中存储指向该对象的指针并赋值给obj变量，由此构成引用关系")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 共享同一个指针")]),t._v("\nobj2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里obj2不再保存指针，但是不会影响obj")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("fn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n")])])]),s("h2",{attrs:{id:"_2-垃圾回收机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-垃圾回收机制"}},[t._v("#")]),t._v(" 2.垃圾回收机制")]),t._v(" "),s("h4",{attrs:{id:"_2-1-核心原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-核心原理"}},[t._v("#")]),t._v(" 2.1 核心原理")]),t._v(" "),s("p",[s("code",[t._v("GC")]),t._v("即Garbage Collection，垃圾回收机制。JS引擎定期找出不再用到的内存，然后释放，至于如何实现有不同的策略，常见的有"),s("code",[t._v("标记清除算法")]),t._v("和"),s("code",[t._v("引用计数算法")])]),t._v(" "),s("h4",{attrs:{id:"_2-2-标记清除算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-标记清除算法"}},[t._v("#")]),t._v(" 2.2 标记清除算法")]),t._v(" "),s("p",[s("code",[t._v("标记清除")]),t._v("（"),s("code",[t._v("Mark-Sweep")]),t._v("），大多数浏览器的JS引擎都在采用这种算法，只是在此基础之上又进行各自的优化加工")]),t._v(" "),s("p",[t._v("该策略分为"),s("code",[t._v("Mark")]),t._v("和"),s("code",[t._v("Sweep")]),t._v("两个阶段，过程如下:")]),t._v(" "),s("p",[s("code",[t._v("Mark阶段")])]),t._v(" "),s("ul",[s("li",[t._v("运行时在内存中所有变量标记0（垃圾）")]),t._v(" "),s("li",[t._v("从各个根对象遍历，将被引用的变量标记变为1（非垃圾）")])]),t._v(" "),s("p",[s("code",[t._v("Sweep阶段")])]),t._v(" "),s("ul",[s("li",[t._v("将所有标记0的变量内存释放，GC")])]),t._v(" "),s("p",[t._v("来看看代码:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" fn2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 开始执行此函数时，将其作用域中a、B以及匿名函数标记为0")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 由于这里return出去会被其他变量引用，故标记变为1")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("altert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 由于这里的闭包，B的标记变为1")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行函数完毕，销毁作用域，在某个GC回收循环节清理标记为0的变量a，")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// B和匿名函数被保留了下来即非垃圾变量")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 补充一下：fn和fn2作为window.fn和window.fn2，标记一直为1，")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 仅仅当手动设置fn=null和fn2=null才会标记为0")]),t._v("\n")])])]),s("p",[t._v("但是这种策略存在"),s("code",[t._v("内存碎片化")]),t._v("缺陷，即释放的内存空间往往是不连续的，如下图所示:")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4718761d56714eff9a364b8bb8e5b297~tplv-k3u1fbpfcp-zoom-1.image",alt:"在这里插入图片描述"}})]),t._v(" "),s("p",[t._v("这样不利于内存的回收利用,即空闲内存与非空闲内存是相交错的，不利于存储")]),t._v(" "),s("p",[t._v("故考虑优化在"),s("code",[t._v("Mark")]),t._v("和"),s("code",[t._v("Sweep")]),t._v("阶段之间再补充上整理"),s("code",[t._v("Compact")]),t._v("阶段")]),t._v(" "),s("ul",[s("li",[t._v("在"),s("code",[t._v("Mark")]),t._v("阶段结束后，将标记1的变量内存往一端移动，标记0的变量内存往另一端移动")]),t._v(" "),s("li",[t._v("开启"),s("code",[t._v("Sweep")]),t._v("阶段")])]),t._v(" "),s("p",[t._v("优化后的策略即标记整理清除算法(Mark-Compact-Sweep)，入下图所示:")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b432febb62e249a296d3e20de35e3d7c~tplv-k3u1fbpfcp-zoom-1.image",alt:"在这里插入图片描述"}})]),t._v(" "),s("h4",{attrs:{id:"_2-3-引用计数算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-引用计数算法"}},[t._v("#")]),t._v(" 2.3 引用计数算法")]),t._v(" "),s("p",[t._v("JS引擎很早之前使用过这种策略回收内存，其核心思想为：将"),s("code",[t._v("不再被引用的对象（零引用）")]),t._v("作为垃圾回收，需要提醒的是，这种策略由于存在很多问题，目前逐渐被"),s("code",[t._v("弃用")]),t._v("了")]),t._v(" "),s("p",[t._v("过程如下:")]),t._v(" "),s("ul",[s("li",[t._v("当声明一个引用类型并赋值给变量时，这个值的引用次数初始为1")]),t._v(" "),s("li",[t._v("若该值又被赋值给另一个变量，引用次数+1")]),t._v(" "),s("li",[t._v("若该变量的被其他值覆盖了，引用次数-1")]),t._v(" "),s("li",[t._v("当这个值引用次数变为0时，说明该值不再被引用，垃圾回收器会在运行时清理释放其内存")])]),t._v(" "),s("p",[t._v("代码如下:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 引用次数初始化为1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 引用次数2，即obj被a和b引用")]),t._v("\na"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 引用次数1")]),t._v("\nb"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 引用次数0，")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// GC回收此引用类型在堆空间中所占的内存")]),t._v("\n")])])]),s("p",[t._v("但是存在一些问题，例如最常见的是循环引用现象")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// fn引用次数为1，因为window.fn = fn，会在window=null即浏览器关闭时回收")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// A: 1")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// B: 1")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// B: 2")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// A: 2")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行完fn函数，作用域销毁时，A和B引用次数-1，但是还不为0，")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在某个GC回收循环执行时不会释放其内存，存在了内存泄漏")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 若执行无限多次fn，那么内存将会被占满，程序宕机")]),t._v("\n")])])]),s("p",[t._v("若是采用"),s("code",[t._v("标记清除")]),t._v("策略则会在"),s("code",[t._v("fn")]),t._v("执行完毕后，作用域销毁，将域中的"),s("code",[t._v("A")]),t._v("和"),s("code",[t._v("B")]),t._v("变量标记为0以便GC回收内存，不会存在这种问题。")]),t._v(" "),s("h2",{attrs:{id:"_3-v8对gc的优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-v8对gc的优化"}},[t._v("#")]),t._v(" 3.V8对GC的优化")]),t._v(" "),s("p",[t._v("前面提到，现在大部分浏览器JS引擎都采用"),s("code",[t._v("标记清理")]),t._v("策略来实现垃圾回收机制，但是又各自基于此策略又进行了不同的优化，这里主要来看Chrome的JS引擎"),s("code",[t._v("V8")]),t._v("对此进行的优化")]),t._v(" "),s("h4",{attrs:{id:"_3-1-分代式回收"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-分代式回收"}},[t._v("#")]),t._v(" 3.1 分代式回收")]),t._v(" "),s("p",[s("code",[t._v("标记清理")]),t._v("策略在每次垃圾回收前都要检测内存中所有的对象标记是否为0来作为是否回收的依据。若一些大、老、存活长的对象（"),s("code",[t._v("老生代")]),t._v("）与小、新、存活时间短的对象（"),s("code",[t._v("新生代")]),t._v("）采用一个频率检查的话将会消耗很大的性能，故要区别对待。所以V8采用"),s("code",[t._v("分代")]),t._v("的方式进行垃圾回收，对前者使用"),s("code",[t._v("老生代GC")]),t._v("（清理频率低），后者采用"),s("code",[t._v("新生代GC")]),t._v("（清理频率高）")]),t._v(" "),s("h5",{attrs:{id:"_3-1-1-内存存储分代"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1-内存存储分代"}},[t._v("#")]),t._v(" 3.1.1 内存存储分代")]),t._v(" "),s("p",[t._v("由于V8的GC策略主要是基于分代，故V8存储变量的方式也是分代的，将堆空间开辟为新生代和老生代")]),t._v(" "),s("p",[s("code",[t._v("新生代内存存储")]),t._v("：堆空间内存空间小(1~8MB)，对应GC算法"),s("code",[t._v("Scavenge")]),t._v("效率高")]),t._v(" "),s("p",[s("code",[t._v("老生代内存存储")]),t._v("：堆空间内存较大，对应GC算法"),s("code",[t._v("Mark-Compact-Sweep")]),t._v("效率稍低")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/160a6ec31c4147c4b7680eaa5a112f40~tplv-k3u1fbpfcp-zoom-1.image",alt:"在这里插入图片描述"}})]),t._v(" "),s("p",[t._v("这种分配是非常合理的，对于频繁回收操作，"),s("code",[t._v("牺牲空间换取时间")]),t._v("；对于低频回收操作，"),s("code",[t._v("牺牲时间换取空间")]),t._v("。此思想可以类比"),s("code",[t._v("计算机存储分层结构")]),t._v("，将需要读取频率高的存储在小容量、高处理的cache中，将读取频率低的存储在大容量、低处理的内存中")]),t._v(" "),s("h5",{attrs:{id:"_3-1-2-新生代gc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2-新生代gc"}},[t._v("#")]),t._v(" 3.1.2 新生代GC")]),t._v(" "),s("p",[t._v("对于新生代采用"),s("code",[t._v("Scavenge")]),t._v("算法进行垃圾回收，将新生代存储区一分为二："),s("code",[t._v("使用区")]),t._v("、"),s("code",[t._v("空闲区")])]),t._v(" "),s("p",[t._v("过程如下：")]),t._v(" "),s("ul",[s("li",[t._v("程序运行时，作用域中"),s("code",[t._v("所有变量")]),t._v("都会存入"),s("code",[t._v("使用区")]),t._v("，当该区域内存写满之后就会进行一次GC")]),t._v(" "),s("li",[t._v("在GC开始前，先将使用区里的"),s("code",[t._v("活动对象")]),t._v("移动到"),s("code",[t._v("空闲区")]),t._v("，"),s("code",[t._v("非活动对象")]),t._v("保留，随后进行GC，清除保留在使用区里的非活动对象")]),t._v(" "),s("li",[t._v("GC结束，将"),s("code",[t._v("空闲区")]),t._v("与"),s("code",[t._v("使用区")]),t._v("进行互换")])]),t._v(" "),s("p",[t._v("如下图所示:")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9686e99f26854540886b929f427080c7~tplv-k3u1fbpfcp-zoom-1.image",alt:"在这里插入图片描述"}})]),t._v(" "),s("h5",{attrs:{id:"_3-1-3老生代gc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-3老生代gc"}},[t._v("#")]),t._v(" 3.1.3老生代GC")]),t._v(" "),s("p",[t._v("首先，老生代都是从新生代转变来的，但要经过考核，满足以下任意一种条件即可：")]),t._v(" "),s("ul",[s("li",[t._v("当一个新生代对象经过多次"),s("code",[t._v("Scavenge GC")]),t._v("仍然是存活，那么就判定它是生命周期长的对象（老油条），会将其移动到老生代内存中，作为老生代对象")]),t._v(" "),s("li",[t._v("当一个变量刚进入使用区时就已经占了"),s("code",[t._v("25%")]),t._v("（天生的老油条），那么为了性能考虑，直接将其移动到老生代内存中")])]),t._v(" "),s("p",[t._v("随后采用前面所说的"),s("code",[t._v("Mark-Compact-Sweep")]),t._v("即标记整理清除策略来进行垃圾回收即可")]),t._v(" "),s("h4",{attrs:{id:"_3-2-并行回收"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-并行回收"}},[t._v("#")]),t._v(" 3.2 并行回收")]),t._v(" "),s("p",[t._v("V8主要是采用"),s("code",[t._v("分代式回收")]),t._v("，但是对于老生代使用"),s("code",[t._v("Mark-Compact-Sweep")]),t._v("性能还是有提升空间，故又对老生代垃圾回收机制采用"),s("code",[t._v("并行回收")]),t._v("进行优化")]),t._v(" "),s("p",[t._v("首先为什么要"),s("code",[t._v("并行回收")]),t._v("呢？这是由于JS是"),s("code",[t._v("单线程")]),t._v("的，运行在主线程上，在GC回收也是运行在主线程中，这会造成JS脚本暂时堵塞，在GC回收完毕才会恢复脚本运行，这种现象叫作"),s("code",[t._v("全停顿（Stop-To-World）")]),t._v("，所以为了加快GC回收，V8引擎引入了"),s("code",[t._v("并行回收")]),t._v("，即并行开启多个"),s("code",[t._v("辅助线程")]),t._v("，协同完成GC回收工作（人多好干活，社会主义好啊~）")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4740ff845812441c91334ee74fc76aa8~tplv-k3u1fbpfcp-zoom-1.image",alt:"在这里插入图片描述"}})]),t._v(" "),s("h4",{attrs:{id:"_3-3并发回收"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3并发回收"}},[t._v("#")]),t._v(" 3.3并发回收")]),t._v(" "),s("p",[t._v("采用"),s("code",[t._v("并行回收")]),t._v("还是存在一个问题，那就是它还是多多少少造成JS脚本堵塞，并未从根本上解决问题，所以又提出了"),s("code",[t._v("并发回收")]),t._v("机制，如下图所示:")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/886e2277801e4055b36884bff3760ab5~tplv-k3u1fbpfcp-zoom-1.image",alt:"在这里插入图片描述"}})]),t._v(" "),s("p",[t._v("GC回收完全在辅助线程中进行，不占用主线程，丝毫不会导致JS脚本挂起，这就是"),s("code",[t._v("并发")]),t._v("的好处\n但是要实现很难，因为主线程在执行 "),s("code",[t._v("JavaScript")]),t._v(" 时，堆中的对象"),s("code",[t._v("引用关系随时可能变化")]),t._v("，这时辅助线程之前做的一些标记或者正在进行的标记就会改变，所以需要额外实现一些"),s("code",[t._v("读写锁")]),t._v("机制来控制，具体怎么搞又是一个深入的话题")]),t._v(" "),s("h4",{attrs:{id:"_3-4增量标记、惰性清理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-4增量标记、惰性清理"}},[t._v("#")]),t._v(" 3.4增量标记、惰性清理")]),t._v(" "),s("p",[t._v("这也是对"),s("code",[t._v("并行回收")]),t._v("存在的"),s("code",[t._v("全停顿")]),t._v("现象进行的优化，在"),s("code",[t._v("Mark")]),t._v("阶段采用"),s("code",[t._v("增量标记")]),t._v("代替"),s("code",[t._v("全停顿标记")]),t._v("，在"),s("code",[t._v("Sweep")]),t._v("阶段采用"),s("code",[t._v("惰性清理")]),t._v("来代替，尽最大的可能减少"),s("code",[t._v("全停顿")]),t._v("时间，具体怎么搞也是一个深入的话题")]),t._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/yacan8/blog/issues/33",target:"_blank",rel:"noopener noreferrer"}},[t._v("1.深入理解Chrome V8垃圾回收机制"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management",target:"_blank",rel:"noopener noreferrer"}},[t._v("2.内存管理"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.cn/post/6981588276356317214",target:"_blank",rel:"noopener noreferrer"}},[t._v("3.「硬核JS」你真的了解垃圾回收机制吗"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);