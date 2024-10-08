;(window.webpackJsonp = window.webpackJsonp || []).push([
	[84],
	{
		517: function (t, s, a) {
			'use strict'
			a.r(s)
			var n = a(1),
				e = Object(n.a)(
					{},
					function () {
						var t = this,
							s = t._self._c
						return s('ContentSlotsDistributor', { attrs: { 'slot-key': t.$parent.slotKey } }, [
							s('h2', { attrs: { id: '_0-引子' } }, [s('a', { staticClass: 'header-anchor', attrs: { href: '#_0-引子' } }, [t._v('#')]), t._v(' 0.引子')]),
							t._v(' '),
							s('p', [
								t._v('一个 Tab 页面里的所有执行任务都是在'),
								s('code', [t._v('渲染进程(render process)')]),
								t._v('进行的，其中包括：页面渲染、JS 执行、事件循环、异步 Http 请求等。请牢记，'),
								s('code', [t._v('浏览器的渲染进程是多线程的')]),
							]),
							t._v(' '),
							s('p', [t._v('下面来看看主要包含的线程')]),
							t._v(' '),
							s('h2', { attrs: { id: '_1-gui-渲染线程' } }, [s('a', { staticClass: 'header-anchor', attrs: { href: '#_1-gui-渲染线程' } }, [t._v('#')]), t._v(' 1.GUI 渲染线程')]),
							t._v(' '),
							s('p', [t._v('GUI 即 Graphical User Interface，图形用户界面。该线程是由'), s('code', [t._v('渲染引擎(render engine)')]), t._v('驱动的，主要任务如下:')]),
							t._v(' '),
							s('ul', [
								s('li', [s('p', [t._v('渲染页面，包括解析 HTML、CSS，构建渲染树(render tree)，布局和绘制等')])]),
								t._v(' '),
								s('li', [s('p', [t._v('执行重排/回流(Layout/Reflow)和重绘(Repaint)')])]),
							]),
							t._v(' '),
							s('p', [
								t._v('详情可以参考同专栏的《'),
								s('a', { attrs: { href: 'https://blog.csdn.net/Xiaoyc7/article/details/125550420', target: '_blank', rel: 'noopener noreferrer' } }, [t._v('浏览器渲染原理'), s('OutboundLink')], 1),
								t._v('》'),
							]),
							t._v(' '),
							s('p', [
								t._v('注意：'),
								s('code', [t._v('GUI渲染线程与JS引擎线程互斥')]),
								t._v('，JS 引擎线程执行时，GUI 渲染线程会被挂起，GUI 更新会被推入到队列中'),
								s('code', [t._v('等JS引擎空闲时')]),
								t._v('后执行'),
							]),
							t._v(' '),
							s('h2', { attrs: { id: '_2-js-引擎线程' } }, [s('a', { staticClass: 'header-anchor', attrs: { href: '#_2-js-引擎线程' } }, [t._v('#')]), t._v(' 2.JS 引擎线程')]),
							t._v(' '),
							s('p', [t._v('顾名思义，就是由'), s('code', [t._v('JS引擎(javaScript engine)')]), t._v('驱动，执行 JS 代码的线程，主要任务如下：')]),
							t._v(' '),
							s('ul', [s('li', [t._v('解析 JS 代码')]), t._v(' '), s('li', [t._v('执行 JS 代码')])]),
							t._v(' '),
							s('p', [t._v('注意：JS 是单线程的，且与 GUI 渲染线程互斥，意味着当 JS 执行过长，可能会造成页面渲染不连贯，会造成堵塞')]),
							t._v(' '),
							s('h2', { attrs: { id: '_3-事件触发线程' } }, [s('a', { staticClass: 'header-anchor', attrs: { href: '#_3-事件触发线程' } }, [t._v('#')]), t._v(' 3.事件触发线程')]),
							t._v(' '),
							s('p', [t._v('JS 是单线程的，不能独立完成异步操作，故事件触发线程用于辅助 JS 引擎实现'), s('code', [t._v('事件监听异步回调操作')]), t._v('，主要任务如下：')]),
							t._v(' '),
							s('ul', [
								s('li', [
									t._v('当 JS 引擎执行'),
									s('code', [t._v('setTimeout')]),
									t._v('、'),
									s('code', [t._v('ajax请求')]),
									t._v('等异步操作时等触发了事件（即拿到了结果后）会将对应回调任务添加到'),
									s('code', [t._v('自身维护的任务队列')]),
									t._v('中'),
								]),
								t._v(' '),
								s('li', [t._v('等待 JS 引擎空闲时，会访问事件触发线程中的任务队列，从中取出任务按入队先后顺序执行')]),
							]),
							t._v(' '),
							s('p', [t._v('补充：')]),
							t._v(' '),
							s('ul', [
								s('li', [t._v('异步的宏任务例如 setTimeout、ajax 维护在'), s('code', [t._v('事件触发线程任务队列')]), t._v('中')]),
								t._v(' '),
								s('li', [t._v('微任务维护在'), s('code', [t._v('JS引擎线程任务队列')]), t._v('中')]),
								t._v(' '),
								s('li', [
									t._v('在执行完同步的宏任务后，会先从 JS 引擎线程的任务队列中拿到微任务逐一执行完毕然后才从事件触发线程中的任务队列取出异步宏任务，故执行顺序永远是'),
									s('code', [t._v('宏=>微=>宏')]),
									t._v('，这里的宏和微并非单纯的，可能一个宏任务里面包含了微任务，这个微任务又包含宏任务和下一个微任务'),
								]),
							]),
							t._v(' '),
							s('h2', { attrs: { id: '_4-定时触发器线程' } }, [s('a', { staticClass: 'header-anchor', attrs: { href: '#_4-定时触发器线程' } }, [t._v('#')]), t._v(' 4.定时触发器线程')]),
							t._v(' '),
							s('p', [s('code', [t._v('setTimeout')]), t._v('和'), s('code', [t._v('setTnterval')]), t._v('所在线程，负责具体的计时任务')]),
							t._v(' '),
							s('h2', { attrs: { id: '_5-异步-http-请求线程' } }, [s('a', { staticClass: 'header-anchor', attrs: { href: '#_5-异步-http-请求线程' } }, [t._v('#')]), t._v(' 5.异步 Http 请求线程')]),
							t._v(' '),
							s('p', [t._v('在 JS 代码中使用 ajax 发送 http 请求时，会开启这个线程，负责具体的 http 请求任务')]),
							t._v(' '),
							s('h2', { attrs: { id: '_6-js-引擎线程与其他线程的协作-总结' } }, [
								s('a', { staticClass: 'header-anchor', attrs: { href: '#_6-js-引擎线程与其他线程的协作-总结' } }, [t._v('#')]),
								t._v(' 6.JS 引擎线程与其他线程的协作(总结)'),
							]),
							t._v(' '),
							s('p', [t._v('不多 bb，直接来看代码')]),
							t._v(' '),
							s('div', { staticClass: 'language-js extra-class' }, [
								s('pre', { pre: !0, attrs: { class: 'language-js' } }, [
									s('code', [
										s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// setTimeout')]),
										t._v('\n'),
										s('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('setTimeout')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=>')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
										t._v('\n\t'),
										s('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('alert')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('1')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										t._v('\n'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('1000')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										t._v('\n\n'),
										s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 1.这里代码由js引擎线程执行')]),
										t._v('\n'),
										s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 2.计数1000ms这个任务交由定时触发器线程去完成，然后js引擎就暂时不管，执行其他后面的代码')]),
										t._v('\n'),
										s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 3.等1000ms后，定时器触发器完成任务，通知事件触发线程将回调` ()=>{alert(1)} `推入到任务')]),
										t._v('\n'),
										s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 队列中，待js引擎空闲时取出执行')]),
										t._v('\n'),
									]),
								]),
							]),
							s('div', { staticClass: 'language-js extra-class' }, [
								s('pre', { pre: !0, attrs: { class: 'language-js' } }, [
									s('code', [
										s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 异步ajax请求')]),
										t._v('\n'),
										s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('let')]),
										t._v(' xhr '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('new')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token class-name' } }, [t._v('XMLHttpRequest')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										t._v('\nxhr'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
										s('span', { pre: !0, attrs: { class: 'token function-variable function' } }, [t._v('onreadystatechange')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=>')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
										t._v('\n\txhr'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
										s('span', { pre: !0, attrs: { class: 'token function-variable function' } }, [t._v('onload')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=>')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
										t._v('\n\t\t'),
										s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// a')]),
										t._v('\n\t\t'),
										s('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('alert')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										t._v('xhr'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
										t._v('responseText'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										t._v('\n\t'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
										t._v('\n'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
										t._v('\nxhr'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
										s('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('open')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'get'")]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'https://www.some.com/api'")]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token boolean' } }, [t._v('true')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// b')]),
										t._v('\nxhr'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
										s('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('send')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('null')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// b')]),
										t._v('\n\n'),
										s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 1.JS引擎线程执行完b开启异步http请求线程，然后暂时不管了，执行后面的代码')]),
										t._v('\n'),
										s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 2.当异步http请求线程完成网络请求并返回数据了，会通知事件触发线程将a回调')]),
										t._v('\n'),
										s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// ` ()=>alert(xhr.responseText) `推入任务队列，等js引擎空闲了取出执行回调')]),
										t._v('\n'),
									]),
								]),
							]),
							s('p', [
								t._v('如下图所示：\n'),
								s('img', { attrs: { src: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1a0b22842c5a4890a624ab34f1a381ed~tplv-k3u1fbpfcp-zoom-1.image', alt: '在这里插入图片描述' } }),
							]),
							t._v(' '),
							s('h2', { attrs: { id: '参考' } }, [s('a', { staticClass: 'header-anchor', attrs: { href: '#参考' } }, [t._v('#')]), t._v(' 参考')]),
							t._v(' '),
							s('p', [
								s(
									'a',
									{ attrs: { href: 'https://segmentfault.com/a/1190000012925872', target: '_blank', rel: 'noopener noreferrer' } },
									[t._v('从浏览器多进程到 JS 单线程，JS 运行机制最全面的一次梳理'), s('OutboundLink')],
									1,
								),
							]),
						])
					},
					[],
					!1,
					null,
					null,
					null,
				)
			s.default = e.exports
		},
	},
])
