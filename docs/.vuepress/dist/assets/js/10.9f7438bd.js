;(window.webpackJsonp = window.webpackJsonp || []).push([
	[10],
	{
		394: function (t, e, n) {},
		436: function (t, e, n) {
			'use strict'
			n(394)
		},
		506: function (t, e, n) {
			'use strict'
			n.r(e)
			var i = n(0),
				p = Object(i.c)({
					functional: !0,
					props: { type: { type: String, default: 'tip' }, text: String, vertical: { type: String, default: 'top' } },
					render: (t, { props: e, slots: n }) => t('span', { class: ['badge', e.type], style: { verticalAlign: e.vertical } }, e.text || n().default),
				}),
				c = (n(436), n(1)),
				l = Object(c.a)(p, void 0, void 0, !1, null, '0e62864c', null)
			e.default = l.exports
		},
	},
])
