(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{435:function(t,a,s){"use strict";s.r(a);var e=s(2),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-概述"}},[t._v("#")]),t._v(" 1.概述")]),t._v(" "),a("h4",{attrs:{id:"_1-1-cpu-gpu-操作系统-应用程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-cpu-gpu-操作系统-应用程序"}},[t._v("#")]),t._v(" 1.1 CPU，GPU，操作系统，应用程序")]),t._v(" "),a("p",[t._v("四者关系如下：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CPU")]),t._v("，"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GPU")]),t._v(" ⇒ 操作系统 ⇒ 应用程序\n")])])]),a("p",[a("code",[t._v("GPU")]),t._v("即"),a("code",[t._v("Graphics Processing Unit")]),t._v("，图像处理器\nCPU、GPU 都属于计算机硬件提供"),a("code",[t._v("汇编语言API")]),t._v("供操作系统调度，操作系统又提供"),a("code",[t._v("高级语言API")]),t._v("供应用程序操作")]),t._v(" "),a("h4",{attrs:{id:"_1-2-应用程序里的进程、线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-应用程序里的进程、线程"}},[t._v("#")]),t._v(" 1.2 应用程序里的进程、线程")]),t._v(" "),a("p",[t._v("应用程序(program)由多个"),a("code",[t._v("进程(process)")]),t._v("构成，进程是"),a("code",[t._v("CPU资源分配的最小单位")]),t._v("；单个进程又由多个"),a("code",[t._v("线程(thread)")]),t._v("构成，线程是"),a("code",[t._v("CPU调度的最小单位")])]),t._v(" "),a("p",[t._v("如下图所示：")]),t._v(" "),a("p",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2e41fd4522764378975100f55c7aabec~tplv-k3u1fbpfcp-zoom-1.image",width:"90%",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[t._v("线程共享CPU分配给进程的资源内存空间，可以彼此通信，而同个程序里的进程之间内存地址是相互隔离的，需要通过"),a("code",[t._v("IPC（Inter Process Communication）")]),t._v("进行通信(例如浏览器主进程需要通过"),a("code",[t._v("RendererHost")]),t._v("接口向渲染进程传输数据)")]),t._v(" "),a("p",[t._v("进程间彼此相互隔离，工作独立，一个进程GG了也不会影响其他进程")]),t._v(" "),a("h4",{attrs:{id:"_1-3-浏览器架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-浏览器架构"}},[t._v("#")]),t._v(" 1.3 浏览器架构")]),t._v(" "),a("p",[t._v("浏览器按多个进程分成多个模块，各个模块相互独立，且有着单一职责，又相互联系，浏览器各个模块如下：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("浏览器模块")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Browser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 负责整个浏览器内行为协调，调用各个模块\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("渲染模块")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Renderer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 负责渲染网页\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GPU")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("模块")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 负责绘制页面\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("网络模块")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Network"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 负责网络请求 \n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("存储模块")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Storage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 负责本地存储\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("用户界面模块")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 负责浏览器提供给用户的界面模块\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("设备模块")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Device"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 负责与各种本地设备交互\n")])])]),a("p",[t._v("在Chrome浏览器里点击左上角的"),a("code",[t._v("三个点按钮")]),t._v("⇒ "),a("code",[t._v("更多工具")]),t._v("⇒ "),a("code",[t._v("任务管理器")]),t._v("，可以看到浏览器里运行的各个进程")]),t._v(" "),a("p",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5dd421d31be947d990820b04a3e20a72~tplv-k3u1fbpfcp-zoom-1.image",width:"90%",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[t._v("补充：")]),t._v(" "),a("p",[t._v("1.每个页面会在单个渲染进程中运行，js是这个渲染进程中的一个单线程")]),t._v(" "),a("p",[t._v("2.Chrome浏览器在web是多进程，在移动设备由于内存资源有限会采用单进程")]),t._v(" "),a("h4",{attrs:{id:"_1-4-站点隔离"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-站点隔离"}},[t._v("#")]),t._v(" 1.4 站点隔离")]),t._v(" "),a("p",[a("code",[t._v("站点隔离")]),t._v("是将不同站点各自运行在独立的进程里，不许通信，实现"),a("code",[t._v("沙盒隔离")]),t._v("，从而阻碍了iframe绕过同源策略进行安全攻击的可能，因为同个进程站点之间可以进行数据通信")]),t._v(" "),a("h2",{attrs:{id:"_2-导航功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-导航功能"}},[t._v("#")]),t._v(" 2.导航功能")]),t._v(" "),a("p",[t._v("在开始介绍浏览器的导航功能之前，先抛出一个经典问题："),a("code",[t._v("从输入一个url到显示一个页面，浏览器背后发生了些什么？")]),t._v("\n这个问题的背后其实涉及到了浏览器的很多个进程之间的通信，下面来逐个过一过这些模块")]),t._v(" "),a("h4",{attrs:{id:"_2-1-ui线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-ui线程"}},[t._v("#")]),t._v(" 2.1 UI线程")]),t._v(" "),a("p",[a("code",[t._v("ui线程")]),t._v("是"),a("code",[t._v("浏览器进程")]),t._v("中的一个线程，负责浏览器UI展示和用户交互。用户在导航搜索栏输入时，会通过ui线程解析校验输入的url，在用户敲击回车后，ui线程控制网页tab栏开启loading动画，通知"),a("code",[t._v("网络进程")]),t._v("发送请求")]),t._v(" "),a("h4",{attrs:{id:"_2-2-网络线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-网络线程"}},[t._v("#")]),t._v(" 2.2 网络线程")]),t._v(" "),a("p",[a("code",[t._v("网络线程")]),t._v("在拿到url后就会启动服务，"),a("code",[t._v("DNS寻址")]),t._v("后通过一系列网络协议与服务器建立安全链接，在收到响应后，检查请求头"),a("code",[t._v("header")]),t._v("里的"),a("code",[t._v("content-type")]),t._v("字段发现是html类型数据，然后由浏览器进程通过"),a("code",[t._v("RendererHost")]),t._v("接口将数据传输给"),a("code",[t._v("渲染进程")]),t._v("作处理")]),t._v(" "),a("p",[t._v("补充：")]),t._v(" "),a("p",[t._v("1.为提高效率，UI线程在通知网络线程发送请求的同时也会实例化一个"),a("code",[t._v("渲染进程")]),t._v("等着")]),t._v(" "),a("p",[t._v("2.若"),a("code",[t._v("content-type")]),t._v("为"),a("code",[t._v("zip")]),t._v("或者其他类型文件，会将数据交由"),a("code",[t._v("下载管理器进程")]),t._v("处理")]),t._v(" "),a("h4",{attrs:{id:"_2-3-渲染进程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-渲染进程"}},[t._v("#")]),t._v(" 2.3 渲染进程")]),t._v(" "),a("p",[a("code",[t._v("渲染进程")]),t._v("在接收到"),a("code",[t._v("html")]),t._v("数据后，就会解析html文件，开始渲染页面（具体渲染过程这里不展开），在完成渲染后，通过"),a("code",[t._v("IPC")]),t._v("告知浏览器进程里的"),a("code",[t._v("ui线程")]),t._v("停止tab栏的loading动画")]),t._v(" "),a("p",[t._v("流程图如下:")]),t._v(" "),a("p",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9ef9571f767c40eba250458042b843fb~tplv-k3u1fbpfcp-zoom-1.image",width:"90%",alt:"在这里插入图片描述"}})]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1806716",target:"_blank",rel:"noopener noreferrer"}},[t._v("1.现代浏览器内部机制 Part 1 | 多进程架构"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.cn/post/7035791817803038728",target:"_blank",rel:"noopener noreferrer"}},[t._v("2.精读《深入了解现代浏览器一》"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000012925872",target:"_blank",rel:"noopener noreferrer"}},[t._v("3.从浏览器多进程到JS单线程，JS运行机制最全面的一次梳理"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);