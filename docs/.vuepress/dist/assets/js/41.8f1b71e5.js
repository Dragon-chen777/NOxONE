;(window.webpackJsonp = window.webpackJsonp || []).push([
	[41],
	{
		474: function (t, a, n) {
			'use strict'
			n.r(a)
			var s = n(1),
				e = Object(s.a)(
					{},
					function () {
						var t = this,
							a = t._self._c
						return a('ContentSlotsDistributor', { attrs: { 'slot-key': t.$parent.slotKey } }, [
							a('p', [t._v('Golang切片不像JS中的数组，一些常用的方法得自己实现')]),
							t._v(' '),
							a('h2', { attrs: { id: '_1-push' } }, [a('a', { staticClass: 'header-anchor', attrs: { href: '#_1-push' } }, [t._v('#')]), t._v(' 1. push')]),
							t._v(' '),
							a('div', { staticClass: 'language-golang extra-class' }, [
								a('pre', { pre: !0, attrs: { class: 'language-text' } }, [a('code', [t._v('func push(s []int, e int) []int {\n  return append(s, e)\n}\n')])]),
							]),
							a('h2', { attrs: { id: '_2-pop' } }, [a('a', { staticClass: 'header-anchor', attrs: { href: '#_2-pop' } }, [t._v('#')]), t._v(' 2. pop')]),
							t._v(' '),
							a('div', { staticClass: 'language-golang extra-class' }, [
								a('pre', { pre: !0, attrs: { class: 'language-text' } }, [
									a('code', [t._v('func pop(s []int) ([]int, int) {\n  l := len(s)\n  if l == 0 {\n    return l, 0\n  }\n  return s[:l-1], s[l-1]\n}\n')]),
								]),
							]),
							a('h2', { attrs: { id: '_3-unshift' } }, [a('a', { staticClass: 'header-anchor', attrs: { href: '#_3-unshift' } }, [t._v('#')]), t._v(' 3. unshift')]),
							t._v(' '),
							a('div', { staticClass: 'language-golang extra-class' }, [
								a('pre', { pre: !0, attrs: { class: 'language-text' } }, [a('code', [t._v('func unshift(s []int, e int) []int {\n  return append([]int{e}, s...)\n}\n')])]),
							]),
							a('h2', { attrs: { id: '_4-shift' } }, [a('a', { staticClass: 'header-anchor', attrs: { href: '#_4-shift' } }, [t._v('#')]), t._v(' 4. shift')]),
							t._v(' '),
							a('div', { staticClass: 'language-golang extra-class' }, [
								a('pre', { pre: !0, attrs: { class: 'language-text' } }, [a('code', [t._v('func shift(s []int) ([]int, int) {\n  return s[1:], s[0]\n}\n')])]),
							]),
							a('h2', { attrs: { id: '_5-slice' } }, [a('a', { staticClass: 'header-anchor', attrs: { href: '#_5-slice' } }, [t._v('#')]), t._v(' 5. slice')]),
							t._v(' '),
							a('div', { staticClass: 'language-golang extra-class' }, [
								a('pre', { pre: !0, attrs: { class: 'language-text' } }, [a('code', [t._v('func sliceInGo(s []int, start int, end int) []int {\n  return s[start: end]\n}\n')])]),
							]),
							a('h2', { attrs: { id: '_6-splice' } }, [a('a', { staticClass: 'header-anchor', attrs: { href: '#_6-splice' } }, [t._v('#')]), t._v(' 6. splice')]),
							t._v(' '),
							a('div', { staticClass: 'language-golang extra-class' }, [
								a('pre', { pre: !0, attrs: { class: 'language-text' } }, [
									a('code', [
										t._v('func splice(s []int, start int, deleteCount int, elements ...int) []int {\n  end := start + deleteCount\n  s = append(s[:start], elements... ,s[end:]...)\n  return s\n}\n'),
									]),
								]),
							]),
							a('h2', { attrs: { id: '_7-concat' } }, [a('a', { staticClass: 'header-anchor', attrs: { href: '#_7-concat' } }, [t._v('#')]), t._v(' 7. concat')]),
							t._v(' '),
							a('div', { staticClass: 'language-golang extra-class' }, [
								a('pre', { pre: !0, attrs: { class: 'language-text' } }, [a('code', [t._v('func concat(s1, s2 []int) []int {\n  return append(s1, s2...)\n}\n')])]),
							]),
							a('h2', { attrs: { id: '_8-indexof' } }, [a('a', { staticClass: 'header-anchor', attrs: { href: '#_8-indexof' } }, [t._v('#')]), t._v(' 8. indexOf')]),
							t._v(' '),
							a('div', { staticClass: 'language-golang extra-class' }, [
								a('pre', { pre: !0, attrs: { class: 'language-text' } }, [
									a('code', [t._v('func indexOf(s []int, e int) int {\n  for i, v := range s {\n    if v == e {\n      return i\n    }\n  }\n  return -1\n}\n')]),
								]),
							]),
							a('h2', { attrs: { id: '_9-includes' } }, [a('a', { staticClass: 'header-anchor', attrs: { href: '#_9-includes' } }, [t._v('#')]), t._v(' 9. includes')]),
							t._v(' '),
							a('div', { staticClass: 'language-golang extra-class' }, [
								a('pre', { pre: !0, attrs: { class: 'language-text' } }, [
									a('code', [t._v('func includes(s []int, e int) bool {\n   for _, v := range s {\n    if v == e {\n      return true\n    }\n  }\n  return false\n}\n')]),
								]),
							]),
							a('h2', { attrs: { id: '_10-reverse' } }, [a('a', { staticClass: 'header-anchor', attrs: { href: '#_10-reverse' } }, [t._v('#')]), t._v(' 10. reverse')]),
							t._v(' '),
							a('div', { staticClass: 'language-golang extra-class' }, [
								a('pre', { pre: !0, attrs: { class: 'language-text' } }, [
									a('code', [t._v('func reverse(s []int) []int {\n  length := len(s)\n  for i := 0; i < length/2; i++ {\n    s[i], s[length-1-i] = s[length-1-i], s[i]\n  }\n  return s\n}\n')]),
								]),
							]),
							a('h2', { attrs: { id: '_11-map' } }, [a('a', { staticClass: 'header-anchor', attrs: { href: '#_11-map' } }, [t._v('#')]), t._v(' 11. map')]),
							t._v(' '),
							a('div', { staticClass: 'language-golang extra-class' }, [
								a('pre', { pre: !0, attrs: { class: 'language-text' } }, [
									a('code', [
										t._v('func mapInGo(s []int, cb func(v int, idx int) int) []int {\n  ret := make([]int, len(s))\n  for i, v := range s {\n    ret[i] = cb(v, idx)\n  }\n  return ret\n}\n'),
									]),
								]),
							]),
							a('h2', { attrs: { id: '_12-foreach' } }, [a('a', { staticClass: 'header-anchor', attrs: { href: '#_12-foreach' } }, [t._v('#')]), t._v(' 12. forEach')]),
							t._v(' '),
							a('div', { staticClass: 'language-golang extra-class' }, [
								a('pre', { pre: !0, attrs: { class: 'language-text' } }, [a('code', [t._v('func forEach(s []int, cb func(v int, idx int)) {\n  for i, v := range s {\n    cb(v, i)\n  }\n}\n')])]),
							]),
							a('h2', { attrs: { id: '_13-filter' } }, [a('a', { staticClass: 'header-anchor', attrs: { href: '#_13-filter' } }, [t._v('#')]), t._v(' 13. filter')]),
							t._v(' '),
							a('div', { staticClass: 'language-golang extra-class' }, [
								a('pre', { pre: !0, attrs: { class: 'language-text' } }, [
									a('code', [
										t._v(
											'func filter(s []int, cb func(v int, idx int) bool) []int {\n  ret := make([]int, 0)\n  for i, v := range s {\n    if cb(v) {\n      ret = append(ret, v)\n    }\n  }\n  return ret\n}\n',
										),
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
			a.default = e.exports
		},
	},
])
