;(window.webpackJsonp = window.webpackJsonp || []).push([
	[86],
	{
		518: function (t, s, a) {
			'use strict'
			a.r(s)
			var n = a(1),
				r = Object(n.a)(
					{},
					function () {
						var t = this,
							s = t._self._c
						return s('ContentSlotsDistributor', { attrs: { 'slot-key': t.$parent.slotKey } }, [
							s('h2', { attrs: { id: '_1-移除元素' } }, [
								s('a', { staticClass: 'header-anchor', attrs: { href: '#_1-移除元素' } }, [t._v('#')]),
								t._v(' '),
								s('a', { attrs: { href: 'https://leetcode.cn/problems/remove-element/', target: '_blank', rel: 'noopener noreferrer' } }, [t._v('1. 移除元素'), s('OutboundLink')], 1),
							]),
							t._v(' '),
							s('p', [
								t._v('给你一个数组 '),
								s('code', [t._v('nums')]),
								t._v(' 和一个值 '),
								s('code', [t._v('val')]),
								t._v('，你需要 '),
								s('strong', [
									s('a', { attrs: { href: 'https://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95', target: '_blank', rel: 'noopener noreferrer' } }, [t._v('原地'), s('OutboundLink')], 1),
								]),
								t._v(' 移除所有数值等于 '),
								s('code', [t._v('val')]),
								t._v(' 的元素，并返回移除后'),
								s('code', [t._v('数组的新长度')]),
								t._v('。'),
							]),
							t._v(' '),
							s('p', [
								t._v('不要使用额外的数组空间，你必须仅使用 '),
								s('code', [t._v('O(1)')]),
								t._v(' 额外空间并 '),
								s('strong', [
									s('a', { attrs: { href: 'https://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95', target: '_blank', rel: 'noopener noreferrer' } }, [t._v('原地 '), s('OutboundLink')], 1),
									t._v('修改输入数组'),
								]),
								t._v('。'),
							]),
							t._v(' '),
							s('p', [t._v('元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。')]),
							t._v(' '),
							s('p', [s('strong', [t._v('示例 1：')])]),
							t._v(' '),
							s('div', { staticClass: 'language-js extra-class' }, [
								s('pre', { pre: !0, attrs: { class: 'language-js' } }, [
									s('code', [
										t._v('输入： nums '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('3')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('2')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('2')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('3')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v(' val '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('3')]),
										t._v('\n输出： '),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('2')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v(' nums '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('2')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('2')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
										t._v('\n解释： 函数应该返回新的长度 '),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('2')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v(' 并且 nums 中的前两个元素均为 '),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('2')]),
										t._v('。你不需要考虑数组中超出新长度后面的元素。例如，函数返回的新长度为 '),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('2')]),
										t._v(' ，而 nums '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('2')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('2')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('3')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('3')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
										t._v(' 或 nums '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('2')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('2')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
										t._v('，也会被视作正确答案。\n'),
									]),
								]),
							]),
							s('p', [s('strong', [t._v('示例 2：')])]),
							t._v(' '),
							s('div', { staticClass: 'language-js extra-class' }, [
								s('pre', { pre: !0, attrs: { class: 'language-js' } }, [
									s('code', [
										t._v('输入： nums '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('1')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('2')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('2')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('3')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('4')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('2')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v(' val '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('2')]),
										t._v('\n输出： '),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('5')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v(' nums '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('1')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('4')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('3')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
										t._v('\n解释： 函数应该返回新的长度 '),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('5')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v(' 并且 nums 中的前五个元素为 '),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('1')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('3')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('4')]),
										t._v('。注意这五个元素可为任意顺序。你不需要考虑数组中超出新长度后面的元素。\n'),
									]),
								]),
							]),
							s('h3', { attrs: { id: 'js' } }, [s('a', { staticClass: 'header-anchor', attrs: { href: '#js' } }, [t._v('#')]), t._v(' JS')]),
							t._v(' '),
							s('div', { staticClass: 'language-js extra-class' }, [
								s('pre', { pre: !0, attrs: { class: 'language-js' } }, [
									s('code', [
										s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('var')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token function-variable function' } }, [t._v('removeElement')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('function')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										s('span', { pre: !0, attrs: { class: 'token parameter' } }, [t._v('nums'), s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]), t._v(' val')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
										t._v('\n  '),
										s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('let')]),
										t._v(' fast '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
										t._v(' slow '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0')]),
										t._v('\n  '),
										s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('for')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
										t._v(' fast '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('<')]),
										t._v(' nums'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
										t._v('length'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
										t._v(' fast'),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('++')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
										t._v('\n    '),
										s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										t._v('nums'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
										t._v('fast'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('===')]),
										t._v(' val'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('continue')]),
										t._v('\n    nums'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
										t._v('slow'),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('++')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
										t._v(' nums'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
										t._v('fast'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
										t._v('\n  '),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
										t._v('\n  '),
										s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('return')]),
										t._v(' slow\n'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
										t._v('\n'),
									]),
								]),
							]),
							s('h3', { attrs: { id: 'golang' } }, [s('a', { staticClass: 'header-anchor', attrs: { href: '#golang' } }, [t._v('#')]), t._v(' Golang')]),
							t._v(' '),
							s('div', { staticClass: 'language-golang extra-class' }, [
								s('pre', { pre: !0, attrs: { class: 'language-text' } }, [
									s('code', [
										t._v(
											'func removeElement(nums []int, val int) int {\n  fast, slow := 0, 0\n  for fast < len(nums) {\n    if (nums[fast] != val) {\n      nums[slow] = nums[fast]\n      slow++\n    }\n    fast++\n  }\n  return slow\n}\n',
										),
									]),
								]),
							]),
							s('h2', { attrs: { id: '_2-剑指-offer-05-替换空格' } }, [
								s('a', { staticClass: 'header-anchor', attrs: { href: '#_2-剑指-offer-05-替换空格' } }, [t._v('#')]),
								t._v(' '),
								s(
									'a',
									{ attrs: { href: 'https://leetcode.cn/problems/ti-huan-kong-ge-lcof/', target: '_blank', rel: 'noopener noreferrer' } },
									[t._v('2. 剑指 Offer 05. 替换空格'), s('OutboundLink')],
									1,
								),
							]),
							t._v(' '),
							s('p', [t._v('请实现一个函数，把字符串 '), s('code', [t._v('s')]), t._v(' 中的每个空格替换成'), s('code', [t._v('"%20"')]), t._v('。')]),
							t._v(' '),
							s('p', [s('strong', [t._v('示例 1：')])]),
							t._v(' '),
							s('div', { staticClass: 'language-js extra-class' }, [
								s('pre', { pre: !0, attrs: { class: 'language-js' } }, [
									s('code', [
										t._v('输入： s '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v('"We are happy."')]),
										t._v('\n输出： '),
										s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v('"We%20are%20happy."')]),
										t._v('\n'),
									]),
								]),
							]),
							s('h3', { attrs: { id: 'js-2' } }, [s('a', { staticClass: 'header-anchor', attrs: { href: '#js-2' } }, [t._v('#')]), t._v(' JS')]),
							t._v(' '),
							s('div', { staticClass: 'language-js extra-class' }, [
								s('pre', { pre: !0, attrs: { class: 'language-js' } }, [
									s('code', [
										s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('var')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token function-variable function' } }, [t._v('replaceSpace')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('function')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										s('span', { pre: !0, attrs: { class: 'token parameter' } }, [t._v('s')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
										t._v('\n  s '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('...')]),
										t._v('s'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
										t._v('\n  '),
										s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('let')]),
										t._v(' fast '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0')]),
										t._v('\n  '),
										s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('let')]),
										t._v(' slow '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0')]),
										t._v('\n  '),
										s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('for')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
										t._v(' fast'),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('<')]),
										t._v(' s'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
										t._v('length'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
										t._v(' fast'),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('++')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
										t._v('\n    s'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
										t._v('slow'),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('++')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
										t._v(' s'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
										t._v('fast'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('===')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("' '")]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('?')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'%20'")]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
										t._v(' s'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
										t._v('fast'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
										t._v('\n  '),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
										t._v('\n  '),
										s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('return')]),
										t._v(' s'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
										s('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('join')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("''")]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										t._v('\n'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
										t._v('\n'),
									]),
								]),
							]),
							s('h3', { attrs: { id: 'golang-2' } }, [s('a', { staticClass: 'header-anchor', attrs: { href: '#golang-2' } }, [t._v('#')]), t._v(' Golang')]),
							t._v(' '),
							s('div', { staticClass: 'language-golang extra-class' }, [
								s('pre', { pre: !0, attrs: { class: 'language-text' } }, [
									s('code', [
										t._v(
											'func replaceSpace(s string) string {\n  ret := []byte{} // 字节型数组\n  ss := []byte(s)\n  \n  for _, w := range ss {\n    if w == \' \' {\n      ret = append(ret, []byte("%20")...)\n      continue\n    }\n    ret = append(ret, w)\n  }\n  return string(ret)\n}\n',
										),
									]),
								]),
							]),
							s('h2', { attrs: { id: '_3-反转字符串中的单词' } }, [
								s('a', { staticClass: 'header-anchor', attrs: { href: '#_3-反转字符串中的单词' } }, [t._v('#')]),
								t._v(' '),
								s(
									'a',
									{ attrs: { href: 'https://leetcode.cn/problems/reverse-words-in-a-string/', target: '_blank', rel: 'noopener noreferrer' } },
									[t._v('3. 反转字符串中的单词'), s('OutboundLink')],
									1,
								),
							]),
							t._v(' '),
							s('p', [t._v('给你一个字符串 '), s('code', [t._v('s')]), t._v(' ，请你反转字符串中 '), s('strong', [t._v('单词')]), t._v(' 的顺序。')]),
							t._v(' '),
							s('p', [
								s('strong', [t._v('单词')]),
								t._v(' 是由非空格字符组成的字符串。'),
								s('code', [t._v('s')]),
								t._v(' 中使用至少一个空格将字符串中的 '),
								s('strong', [t._v('单词')]),
								t._v(' 分隔开。'),
							]),
							t._v(' '),
							s('p', [t._v('返回 '), s('strong', [t._v('单词')]), t._v(' 顺序颠倒且 '), s('strong', [t._v('单词')]), t._v(' 之间用单个空格连接的结果字符串。')]),
							t._v(' '),
							s('p', [
								s('strong', [t._v('注意：')]),
								t._v(' 输入字符串 '),
								s('code', [t._v('s')]),
								t._v('中可能会存在前导空格、尾随空格或者单词间的多个空格。返回的结果字符串中，单词间应当仅用单个空格分隔，且不包含任何额外的空格。'),
							]),
							t._v(' '),
							s('p', [s('strong', [t._v('示例 1：')])]),
							t._v(' '),
							s('div', { staticClass: 'language-js extra-class' }, [
								s('pre', { pre: !0, attrs: { class: 'language-js' } }, [
									s('code', [
										t._v('输入： s '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v('"the sky is blue"')]),
										t._v('\n输出： '),
										s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v('"blue is sky the"')]),
										t._v('\n'),
									]),
								]),
							]),
							s('p', [s('strong', [t._v('示例 2：')])]),
							t._v(' '),
							s('div', { staticClass: 'language-js extra-class' }, [
								s('pre', { pre: !0, attrs: { class: 'language-js' } }, [
									s('code', [
										t._v('输入： s '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v('"  hello world  "')]),
										t._v('\n输出： '),
										s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v('"world hello"')]),
										t._v('\n解释： 反转后的字符串中不能存在前导空格和尾随空格。\n'),
									]),
								]),
							]),
							s('p', [s('strong', [t._v('示例 3：')])]),
							t._v(' '),
							s('div', { staticClass: 'language-jsa extra-class' }, [
								s('pre', { pre: !0, attrs: { class: 'language-text' } }, [
									s('code', [t._v('输入： s = "a good   example"\n输出： "example good a"\n解释： 如果两个单词间有多余的空格，反转后的字符串需要将单词间的空格减少到仅有一个。\n')]),
								]),
							]),
							s('h3', { attrs: { id: 'js-3' } }, [s('a', { staticClass: 'header-anchor', attrs: { href: '#js-3' } }, [t._v('#')]), t._v(' JS')]),
							t._v(' '),
							s('div', { staticClass: 'language-js extra-class' }, [
								s('pre', { pre: !0, attrs: { class: 'language-js' } }, [
									s('code', [
										s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('var')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token function-variable function' } }, [t._v('reverseWords')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('function')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										s('span', { pre: !0, attrs: { class: 'token parameter' } }, [t._v('s')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
										t._v('\n  '),
										s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('let')]),
										t._v(' ret '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
										t._v('\n\n  '),
										s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('for')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('let')]),
										t._v(' i '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
										t._v(' i '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('<')]),
										t._v(' s'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
										t._v('length'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
										t._v(' i'),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('++')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
										t._v('\n    '),
										s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										t._v('s'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
										t._v('i'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('===')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("' '")]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('continue')]),
										t._v('\n    \n    '),
										s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('let')]),
										t._v(' tempStr '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
										t._v(' s'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
										t._v('i'),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('++')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
										t._v('\n    '),
										s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('while')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										t._v('i '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('<')]),
										t._v(' s'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
										t._v('length'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
										t._v('\n      '),
										s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										t._v('s'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
										t._v('i'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('===')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("' '")]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('break')]),
										t._v('\n      tempStr '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('+=')]),
										t._v(' s'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
										t._v('i'),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('++')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
										t._v('\n    '),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
										t._v('\n    ret'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
										s('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('push')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										t._v('tempStr'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										t._v('\n  '),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
										t._v('\n\n  ret'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
										s('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('reverse')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										t._v('\n  '),
										s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('return')]),
										t._v(' ret'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
										s('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('join')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("' '")]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										t._v('\n'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
										t._v('\n'),
									]),
								]),
							]),
							s('h3', { attrs: { id: 'golang-3' } }, [s('a', { staticClass: 'header-anchor', attrs: { href: '#golang-3' } }, [t._v('#')]), t._v(' Golang')]),
							t._v(' '),
							s('div', { staticClass: 'language-golang extra-class' }, [
								s('pre', { pre: !0, attrs: { class: 'language-text' } }, [
									s('code', [
										t._v(
											"// 明显js好写得多\nfunc reverseWords(s string) string {\n  ret := []string{}\n  ss := []byte(s)\n  for i := 0; i < len(ss); i++ {\n    if ss[i] == ' ' {\n      continue\n    }\n    tempStr := []byte{}\n    j := i\n    for i < len(ss) {\n      if ss[i] == ' ' {\n        break\n      }\n      i++\n    }\n    tempStr = append(tempStr, ss[j:i]...)\n    ret = append(ret, string(tempStr))\n  }\n  reverseArr(ret)\n  return strings.Join(ret, \" \")\n}\nfunc reverseArr(strArr []string) {\n  len := len(strArr)\n  for i := 0; i < len / 2; i++ {\n    strArr[i], strArr[len - 1 - i] =  strArr[len - 1 - i], strArr[i]\n  }\n}\n",
										),
									]),
								]),
							]),
							s('h2', { attrs: { id: '' } }, [s('a', { staticClass: 'header-anchor', attrs: { href: '#' } }, [t._v('#')])]),
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
