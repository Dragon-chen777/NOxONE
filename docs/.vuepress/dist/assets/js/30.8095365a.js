;(window.webpackJsonp = window.webpackJsonp || []).push([
	[30],
	{
		464: function (t, s, a) {
			'use strict'
			a.r(s)
			var n = a(1),
				r = Object(n.a)(
					{},
					function () {
						var t = this,
							s = t._self._c
						return s('ContentSlotsDistributor', { attrs: { 'slot-key': t.$parent.slotKey } }, [
							s('p', [t._v('这里只介绍常用到的 ES6 数组扩展')]),
							t._v(' '),
							s('h2', { attrs: { id: '_1-数组解绑' } }, [s('a', { staticClass: 'header-anchor', attrs: { href: '#_1-数组解绑' } }, [t._v('#')]), t._v(' 1. 数组解绑')]),
							t._v(' '),
							s('p', [s('code', [t._v('...')]), t._v('运算操作符可以将数组解绑')]),
							t._v(' '),
							s('div', { staticClass: 'language-js extra-class' }, [
								s('pre', { pre: !0, attrs: { class: 'language-js' } }, [
									s('code', [
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('...')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('1')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('2')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('3')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 1,2,3')]),
										t._v('\n'),
										s('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('add')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('...')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('1')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('2')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('3')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// add(1,2,3)')]),
										t._v('\n\n'),
										s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('let')]),
										t._v(' arr1 '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('1')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('2')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('3')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
										t._v('\n'),
										s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('let')]),
										t._v(' arr2 '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('4')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('5')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('6')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
										t._v('\narr1'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
										s('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('push')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('...')]),
										t._v('arr2'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// [1,2,3,4,5,6]')]),
										t._v('\n'),
									]),
								]),
							]),
							s('p', [s('code', [t._v('...')]), t._v('操作符的其他应用')]),
							t._v(' '),
							s('p', [t._v('① 克隆数组')]),
							t._v(' '),
							s('div', { staticClass: 'language-js extra-class' }, [
								s('pre', { pre: !0, attrs: { class: 'language-js' } }, [
									s('code', [
										s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
										t._v(' arr1 '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('1')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('2')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
										t._v('\n'),
										s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
										t._v(' arr2 '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('...')]),
										t._v('arr1'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// Array.from(arr1) / arr1.concat() / arr1.slice()也可以')]),
										t._v('\narr2 '),
										s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// [1,2]')]),
										t._v('\narr1 '),
										s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// [1,2] 不受影响，即arr2保存的并非arr1的指针，而是真正意义的克隆')]),
										t._v('\n'),
									]),
								]),
							]),
							s('p', [t._v('② 合并数组')]),
							t._v(' '),
							s('div', { staticClass: 'language-js extra-class' }, [
								s('pre', { pre: !0, attrs: { class: 'language-js' } }, [
									s('code', [
										s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
										t._v(' arr1 '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('1')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('2')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
										t._v('\n'),
										s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
										t._v(' arr2 '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('3')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('4')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
										t._v('\n'),
										s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
										t._v(' arr3 '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('...')]),
										t._v('arr1'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('...')]),
										t._v('arr2'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
										t._v('\n'),
									]),
								]),
							]),
							s('p', [t._v('③ 同解耦结合')]),
							t._v(' '),
							s('div', { staticClass: 'language-js extra-class' }, [
								s('pre', { pre: !0, attrs: { class: 'language-js' } }, [
									s('code', [
										s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
										t._v('a'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('...')]),
										t._v('rest'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('1')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('2')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('3')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('4')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
										t._v('\n'),
										s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 相当于')]),
										t._v('\nrest '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('...')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('2')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('3')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('4')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
										t._v('\n\n'),
										s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
										t._v('a'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('...')]),
										t._v('rest'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('1')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
										t._v('\na '),
										s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 1')]),
										t._v('\nrest '),
										s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// []')]),
										t._v('\n'),
										s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 注意...rest只能放在最后一位，放在其他位置都会报错喔~')]),
										t._v('\n'),
									]),
								]),
							]),
							s('p', [t._v('④ 字符串转数组')]),
							t._v(' '),
							s('div', { staticClass: 'language-js extra-class' }, [
								s('pre', { pre: !0, attrs: { class: 'language-js' } }, [
									s('code', [
										s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('var')]),
										t._v(' str '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'jack'")]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v('\n'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('...')]),
										t._v('str'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v("// ['j','a','c','k']")]),
										t._v('\n\nstr'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
										s('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('split')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("''")]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
										s('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('reverse')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
										s('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('join')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("''")]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v("// 'kcaj'")]),
										t._v('\n'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('...')]),
										t._v('str'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
										s('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('reverse')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
										s('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('join')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("''")]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v("// 'kcaj'")]),
										t._v('\n'),
									]),
								]),
							]),
							s('h2', { attrs: { id: '_2-array-find' } }, [s('a', { staticClass: 'header-anchor', attrs: { href: '#_2-array-find' } }, [t._v('#')]), t._v(' 2. Array.find')]),
							t._v(' '),
							s('p', [t._v('对数组进行遍历操作传入一个函数作为回调，返回符合条件的第一个项')]),
							t._v(' '),
							s('div', { staticClass: 'language-js extra-class' }, [
								s('pre', { pre: !0, attrs: { class: 'language-js' } }, [
									s('code', [
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('1')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('2')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('3')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('5')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('6')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('7')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
										t._v('\n\t'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
										s('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('filter')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										s('span', { pre: !0, attrs: { class: 'token parameter' } }, [t._v('n')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=>')]),
										t._v(' n '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('>')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('4')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 5')]),
										t._v('\n\t'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
										t._v('\n\t\t'),
										s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 使用find代替filter')]),
										t._v('\n\t\t'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('1')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('2')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('3')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('5')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('6')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('7')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										t._v('\n\t'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
										s('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('find')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										s('span', { pre: !0, attrs: { class: 'token parameter' } }, [t._v('n')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=>')]),
										t._v(' n '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('>')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('4')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 5')]),
										t._v('\n'),
									]),
								]),
							]),
							s('h2', { attrs: { id: '_3-array-from' } }, [s('a', { staticClass: 'header-anchor', attrs: { href: '#_3-array-from' } }, [t._v('#')]), t._v(' 3. Array.from()')]),
							t._v(' '),
							s('p', [s('code', [t._v('Array.from(arrayLike)')]), t._v('用于将伪数组转换为真数组，所谓伪数组满足两个基本条件:')]),
							t._v(' '),
							s('ul', [s('li', [t._v('有'), s('code', [t._v('length')]), t._v('这个属性')]), t._v(' '), s('li', [t._v('除了 length 属性，其他属性都是'), s('code', [t._v('数字索引')])])]),
							t._v(' '),
							s('p', [t._v('将伪数组转化为真数组示例如下:')]),
							t._v(' '),
							s('div', { staticClass: 'language-js extra-class' }, [
								s('pre', { pre: !0, attrs: { class: 'language-js' } }, [
									s('code', [
										s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// NodeList伪数组')]),
										t._v('\n'),
										s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('let')]),
										t._v(' ps '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
										t._v(' document'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
										s('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('querySelectorAll')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'p'")]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										t._v('\n'),
										s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('let')]),
										t._v(' pArr '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
										t._v(' Array'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
										s('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('from')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										t._v('ps'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
										s('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('filter')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										s('span', { pre: !0, attrs: { class: 'token parameter' } }, [t._v('p')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=>')]),
										t._v(' p'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
										t._v('textContent'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
										t._v('length '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('>')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('100')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										t._v('\n'),
										s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 筛选文本长度大于100的所有p填入数组赋值给pArr')]),
										t._v('\n\n'),
										s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// arguments对象')]),
										t._v('\n'),
										s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('function')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('fn')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
										t._v('\n\t'),
										s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('var')]),
										t._v(' args '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
										t._v(' Array'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
										s('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('from')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										t._v('arguments'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										t._v('\n\t'),
										s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// ...')]),
										t._v('\n'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
										t._v('\n'),
									]),
								]),
							]),
							s('p', [t._v('只要是部署了'), s('code', [t._v('Iteraror')]), t._v('接口的数据结构，Array.from 都能将其转为数组,如字符串、Set 结构')]),
							t._v(' '),
							s('div', { staticClass: 'language-js extra-class' }, [
								s('pre', { pre: !0, attrs: { class: 'language-js' } }, [
									s('code', [
										t._v('Array'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
										s('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('from')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'hello'")]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										t._v('\n'),
										s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v("// ['h', 'e', 'l', 'l', 'o']")]),
										t._v('\n\n'),
										s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('let')]),
										t._v(' namesSet '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('new')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token class-name' } }, [t._v('Set')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
										s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'a'")]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'b'")]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										t._v('\nArray'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
										s('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('from')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										t._v('namesSet'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v("// ['a', 'b']")]),
										t._v('\n'),
									]),
								]),
							]),
							s('p', [t._v('对象满足伪数组条件，也可以通过 Array.from 转为数组')]),
							t._v(' '),
							s('div', { staticClass: 'language-js extra-class' }, [
								s('pre', { pre: !0, attrs: { class: 'language-js' } }, [
									s('code', [
										s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('var')]),
										t._v(' obj '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
										t._v('\n\t'),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0')]),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('1')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v('\n\t'),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('1')]),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('2')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v('\n\t'),
										s('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [t._v('length')]),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('2')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v('\n'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
										t._v('\nconsole'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
										s('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('log')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										t._v('Array'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
										s('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('from')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										t._v('obj'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('1')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('2')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
										t._v('\n'),
									]),
								]),
							]),
							s('h2', { attrs: { id: '_4-array-fill' } }, [s('a', { staticClass: 'header-anchor', attrs: { href: '#_4-array-fill' } }, [t._v('#')]), t._v(' 4. Array.fill')]),
							t._v(' '),
							s('p', [t._v('填充'), s('code', [t._v('Array.fill(item, start, end)')]), t._v('，将数组 '), s('code', [t._v('[start,end)')]), t._v(' 范围的项替换成 item')]),
							t._v(' '),
							s('div', { staticClass: 'language-js extra-class' }, [
								s('pre', { pre: !0, attrs: { class: 'language-js' } }, [
									s('code', [
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('1')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('2')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('3')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('4')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
										s('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('fill')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('7')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('1')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('4')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// [1,7,7,7]')]),
										t._v('\n'),
									]),
								]),
							]),
							s('h2', { attrs: { id: '_5-array-of' } }, [s('a', { staticClass: 'header-anchor', attrs: { href: '#_5-array-of' } }, [t._v('#')]), t._v(' 5. Array.of')]),
							t._v(' '),
							s('p', [t._v('将一组值转换为数组')]),
							t._v(' '),
							s('div', { staticClass: 'language-js extra-class' }, [
								s('pre', { pre: !0, attrs: { class: 'language-js' } }, [
									s('code', [
										t._v('Array'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
										s('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('of')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('1')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('2')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('3')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// [1,2,3]')]),
										t._v('\n'),
									]),
								]),
							]),
						])
					},
					[],
					!1,
					null,
					null,
					null,
				)
			s.default = r.exports
		},
	},
])
