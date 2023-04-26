const BLOG_BASE = '/blog'

const VUE_COLUMN = {
	title: 'VUE',
	path: BLOG_BASE + '/vue/Reactivity响应式实现',
	collapsable: true,
	children: [
		{
			title: 'Reactivity响应式实现',
			path: BLOG_BASE + '/vue/Reactivity响应式实现',
		},
		{
			title: 'Virtual DOM和Diff原理及实现',
			path: BLOG_BASE + '/vue/Virtual DOM和Diff原理及实现',
		},
		{
			title: 'Render函数简单实现',
			path: BLOG_BASE + '/vue/Render函数简单实现',
		},
		{
			title: 'Vue.nextTick用法和实现',
			path: BLOG_BASE + '/vue/Vue.nextTick用法和实现',
		},
		{
			title: 'Vue.set用法和实现',
			path: BLOG_BASE + '/vue/Vue.set用法和实现',
		},
		{
			title: 'Vue.use原理和实现',
			path: BLOG_BASE + '/vue/Vue.use原理和实现',
		},
	],
}
module.exports = VUE_COLUMN
