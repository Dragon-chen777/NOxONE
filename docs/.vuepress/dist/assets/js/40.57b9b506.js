;(window.webpackJsonp = window.webpackJsonp || []).push([
	[40],
	{
		473: function (t, s, a) {
			'use strict'
			a.r(s)
			var n = a(1),
				e = Object(n.a)(
					{},
					function () {
						var t = this,
							s = t._self._c
						return s('ContentSlotsDistributor', { attrs: { 'slot-key': t.$parent.slotKey } }, [
							s('h3', { attrs: { id: '_1-jwt' } }, [s('a', { staticClass: 'header-anchor', attrs: { href: '#_1-jwt' } }, [t._v('#')]), t._v(' 1. jwt')]),
							t._v(' '),
							s('p', [s('strong', [t._v('jwt')]), t._v('即'), s('code', [t._v('json web token')]), t._v('，用于用户授权，保存在客户端。')]),
							t._v(' '),
							s('p', [
								t._v('由三个部分构成：'),
								s('code', [t._v('Header')]),
								t._v('、'),
								s('code', [t._v('Payload')]),
								t._v('、'),
								s('code', [t._v('Signature')]),
								t._v('，三者用'),
								s('code', [t._v('.')]),
								t._v('隔开，形如：'),
								s('code', [t._v('hhhhh.pppppppppp.sssssss')]),
							]),
							t._v(' '),
							s('p', [t._v('下面将逐个介绍')]),
							t._v(' '),
							s('h3', { attrs: { id: '_2-header' } }, [s('a', { staticClass: 'header-anchor', attrs: { href: '#_2-header' } }, [t._v('#')]), t._v(' 2. Header')]),
							t._v(' '),
							s('p', [
								s('strong', [t._v('header')]),
								t._v('由'),
								s('code', [t._v('token类型')]),
								t._v('、'),
								s('code', [t._v('签名算法名')]),
								t._v('构成，形如：'),
								s('code', [t._v('{ alg: "HS256", typ: "JWT" }')]),
								t._v('，再通过base64对其编码得到jwt的第一部分，即'),
								s('code', [t._v('hhhhh')]),
							]),
							t._v(' '),
							s('h3', { attrs: { id: '_3-payload' } }, [s('a', { staticClass: 'header-anchor', attrs: { href: '#_3-payload' } }, [t._v('#')]), t._v(' 3. Payload')]),
							t._v(' '),
							s('p', [
								s('strong', [t._v('payload')]),
								t._v('由三种声明构成：'),
								s('code', [t._v('registered claims')]),
								t._v('、'),
								s('code', [t._v('public claims')]),
								t._v('、'),
								s('code', [t._v('private claims')]),
								t._v('，用于加密存储用户授权信息'),
							]),
							t._v(' '),
							s('p', [
								s('strong', [t._v('registered claims')]),
								t._v('用于声明一些预定义属性，例如：'),
								s('code', [t._v('ExpiresAt（token失效时间）')]),
								t._v('、'),
								s('code', [t._v('Issuer（token颁发者）')]),
								t._v('、'),
								s('code', [t._v('NotBefore（token在多久之后生效）')]),
								t._v('等'),
							]),
							t._v(' '),
							s('p', [s('strong', [t._v('public claims')]), t._v('和'), s('strong', [t._v('private claims')]), t._v('保存的是用户相关授权信息')]),
							t._v(' '),
							s('p', [t._v('通过base64对其编码便得到jwt的第二部分，即'), s('code', [t._v('pppppppppp')])]),
							t._v(' '),
							s('h3', { attrs: { id: '_4-signature' } }, [s('a', { staticClass: 'header-anchor', attrs: { href: '#_4-signature' } }, [t._v('#')]), t._v(' 4. Signature')]),
							t._v(' '),
							s('p', [
								s('strong', [t._v('signature')]),
								t._v('由编码过的header、payload以及一个秘钥通过header中指定的签名算法计算得出'),
								s('br'),
								t._v('\n例如：'),
								s('code', [t._v('HMACSHA256(base64UrlEncode(header) + "." + base64UrlEncode(payload), secret)')]),
							]),
							t._v(' '),
							s('p', [
								t._v('最终生成一个'),
								s('code', [t._v('tokenStr')]),
								t._v('返回给用户，作为访问受保护路由和资源（后端接口）的凭证，前端通常会把token放在'),
								s('code', [t._v('Authorization header')]),
								t._v('（可以跨域，传统的cookie不行）中，指定为'),
								s('code', [t._v('Bearer schema')]),
								t._v('，形如：'),
								s('code', [t._v('Authorization: Bearer')]),
							]),
							t._v(' '),
							s('h3', { attrs: { id: '_5-玩一玩jwt-go' } }, [s('a', { staticClass: 'header-anchor', attrs: { href: '#_5-玩一玩jwt-go' } }, [t._v('#')]), t._v(' 5. 玩一玩jwt-go')]),
							t._v(' '),
							s('p', [t._v('说了那么多，很抽象，即使记住了也没什么卵用，最终付诸于代码实现才是真，所以 ...')]),
							t._v(' '),
							s('p', [s('strong', [t._v('Talk is cheap， show me the code~')])]),
							t._v(' '),
							s('div', { staticClass: 'language-js extra-class' }, [
								s('pre', { pre: !0, attrs: { class: 'language-js' } }, [
									s('code', [
										s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('package')]),
										t._v(' main  \n'),
										s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('import')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										t._v('  \n  '),
										s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v('"fmt"')]),
										t._v('  \n  '),
										s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v('"github.com/dgrijalva/jwt-go"')]),
										t._v('  \n  '),
										s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v('"time"')]),
										t._v('  \n'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										t._v('  \n  \ntype Claims struct '),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
										t._v(' \n  UserId string '),
										s('span', { pre: !0, attrs: { class: 'token template-string' } }, [
											s('span', { pre: !0, attrs: { class: 'token template-punctuation string' } }, [t._v('`')]),
											s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v('json:"userid"')]),
											s('span', { pre: !0, attrs: { class: 'token template-punctuation string' } }, [t._v('`')]),
										]),
										t._v('  \n  jwt'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
										t._v('StandardClaims  \n'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
										t._v('  \n  \nfunc '),
										s('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('main')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
										t._v('  \n  '),
										s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 1. 生成tokenStr')]),
										t._v('\n  '),
										s('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [t._v('claims')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
										t._v(' Claims'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 这就是Payload')]),
										t._v('\n    '),
										s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v('"295286392"')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// public claims')]),
										t._v('\n    jwt'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
										t._v('StandardClaims'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// registered claims')]),
										t._v('\n      '),
										s('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [t._v('NotBefore')]),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
										t._v(' time'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
										s('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('Now')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
										s('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('Unix')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('-')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('60')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 一分钟之前开始生效  ')]),
										t._v('\n      '),
										s('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [t._v('ExpiresAt')]),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
										t._v(' time'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
										s('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('Now')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
										s('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('Unix')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('+')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('60')]),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('*')]),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('60')]),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('*')]),
										s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('2')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 两小时后失效  ')]),
										t._v('\n      '),
										s('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [t._v('Issuer')]),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v('"admin"')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 签发者  ')]),
										t._v('\n    '),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v('  \n  '),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
										t._v('  \n  '),
										s('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [t._v('token')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
										t._v(' jwt'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
										s('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('NewWithClaims')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										t._v('jwt'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
										t._v('SigningMethodHS256'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v(' claims'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// Header、Payload结合生成token  ')]),
										t._v('\n  '),
										s('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [t._v('signingKey')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
										s('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('byte')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v('"abc"')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 秘钥  ')]),
										t._v('\n  tokenStr'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [t._v('_')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
										t._v(' token'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
										s('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('SignedString')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										t._v('signingKey'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// Signature（签名加密后，将生成的tokenStr返回给前端）')]),
										t._v('\n  fmt'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
										s('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('Println')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										t._v('tokenStr'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// aaaaaaa.bbbbbbbbbbb.cccccccc')]),
										t._v('\n  \n  \n  '),
										s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 2. 解析tokenStr  ')]),
										t._v('\n  tokenParse'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token literal-property property' } }, [t._v('err')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
										t._v(' jwt'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
										s('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('ParseWithClaims')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										t._v('tokenStr'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('&')]),
										t._v('Claims'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('func')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										t._v('token '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('*')]),
										t._v('jwt'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
										t._v('Token'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('interface')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v(' error'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
										t._v('  \n    '),
										s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('return')]),
										t._v(' signingKey'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
										t._v(' nil  \n  '),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										t._v('  \n \n  '),
										s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('if')]),
										t._v(' err '),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('!=')]),
										t._v(' nil '),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// token过期会走这里  ')]),
										t._v('\n    fmt'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
										s('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('Println')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										t._v('err'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										t._v('  \n    '),
										s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('return')]),
										t._v('  \n  '),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
										t._v('  \n  fmt'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
										s('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('Println')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										t._v('tokenParse'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
										t._v('Claims'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
										s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('*')]),
										t._v('Claims'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
										t._v('UserId'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
										t._v(' '),
										s('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 295286392 ')]),
										t._v('\n'),
										s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
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
			s.default = e.exports
		},
	},
])
