;(window.webpackJsonp = window.webpackJsonp || []).push([
	[75],
	{
		508: function (s, a, t) {
			'use strict'
			t.r(a)
			var n = t(1),
				e = Object(n.a)(
					{},
					function () {
						var s = this,
							a = s._self._c
						return a('ContentSlotsDistributor', { attrs: { 'slot-key': s.$parent.slotKey } }, [
							a('h2', { attrs: { id: '_1-添加网页-logo' } }, [a('a', { staticClass: 'header-anchor', attrs: { href: '#_1-添加网页-logo' } }, [s._v('#')]), s._v(' 1. 添加网页 Logo')]),
							s._v(' '),
							a('p', [s._v('也就是你看到的一个白色的小猫猫')]),
							s._v(' '),
							a('h2', { attrs: { id: '_2-引入-vuepress-plugin-kan-ban-niang-看板娘插件' } }, [
								a('a', { staticClass: 'header-anchor', attrs: { href: '#_2-引入-vuepress-plugin-kan-ban-niang-看板娘插件' } }, [s._v('#')]),
								s._v(' 2. 引入 vuepress-plugin-kan-ban-niang 看板娘插件'),
							]),
							s._v(' '),
							a('p', [s._v('引入时发现 live2D 模型加载不出来，翻看了源码，发现原插件并未自带 live2D 模型，而是采用以下方式远程加载模型')]),
							s._v(' '),
							a('div', { staticClass: 'language-js extra-class' }, [
								a('pre', { pre: !0, attrs: { class: 'language-js' } }, [
									a('code', [
										a('span', { pre: !0, attrs: { class: 'token function' } }, [s._v('loadlive2d')]),
										a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v('(')]),
										a('span', { pre: !0, attrs: { class: 'token string' } }, [s._v("'banniang'")]),
										a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(',')]),
										s._v(' '),
										a('span', { pre: !0, attrs: { class: 'token string' } }, [
											s._v("'https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-shizuku/assets/shizuku.model.json'"),
										]),
										a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [s._v(')')]),
										s._v('\n'),
									]),
								]),
							]),
							a('p', [s._v('但是网络不好，请求不到后续所需的文件，就会导致我的看板娘加载不出来！！！ 😤😤😤')]),
							s._v(' '),
							a('h2', { attrs: { id: '_3-魔改看板娘插件' } }, [a('a', { staticClass: 'header-anchor', attrs: { href: '#_3-魔改看板娘插件' } }, [s._v('#')]), s._v(' 3. 魔改看板娘插件')]),
							s._v(' '),
							a('p', [s._v('得，还是得靠自己~')]),
							s._v(' '),
							a('p', [
								s._v('于是我就在'),
								a('code', [s._v('vuepress-plugin-kan-ban-niang')]),
								s._v('插件基础上初步尝试进行魔改，将所需的 live2D 资源包直接引入本地'),
								a('code', [s._v('public')]),
								s._v('文件夹的'),
								a('code', [s._v('models')]),
								s._v('下，修改'),
								a('code', [s._v('vuepress-plugin-kan-ban-niang')]),
								s._v('源代码，把请求 url 改成形如：'),
								a('code', [s._v('http://localhost:8000/NOxONE/models/assets/shizuku.model.json')]),
								s._v('的格式'),
							]),
							s._v(' '),
							a('p', [s._v('当然了，之前没了解过这一方面的知识，不知道怎么改，都是自己一步步摸瞎走夜路，最后神奇的改好了！！！')]),
							s._v(' '),
							a('h2', { attrs: { id: '_4-让看板娘在移动端也能显示' } }, [
								a('a', { staticClass: 'header-anchor', attrs: { href: '#_4-让看板娘在移动端也能显示' } }, [s._v('#')]),
								s._v(' 4. 让看板娘在移动端也能显示'),
							]),
							s._v(' '),
							a('p', [s._v('源代码默认移动端隐藏看板娘，于是我魔改了这一条，在移动端也让她显示出来，大小缩小为一半就行~')]),
							s._v(' '),
							a('p', [s._v('好了，现在是凌晨'), a('code', [s._v('1:31')]), s._v('，我已经部署好'), a('code', [s._v('NOxONE v1.1.0')]), s._v('了，明天还得去公司搬砖呢，先睡觉了，狗命要紧！')]),
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
