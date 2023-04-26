const BLOG_BASE = '/blog'

const BROWSER_COLUMN = {
	title: '浏览器',
	path: BLOG_BASE + '/browser/浏览器渲染原理',
	collapsable: true,
	children: [
		{
			title: '浏览器渲染原理',
			path: BLOG_BASE + '/browser/浏览器渲染原理',
		},
		{
			title: '浏览器架构',
			path: BLOG_BASE + '/browser/浏览器架构',
		},
		{
			title: '渲染进程里的多个线程',
			path: BLOG_BASE + '/browser/渲染进程里的多个线程',
		},
	],
}
module.exports = BROWSER_COLUMN
