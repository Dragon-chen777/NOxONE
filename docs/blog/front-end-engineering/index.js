const BLOG_BASE = '/blog'

const FRONT_END_ENGINEERING_COLUMN = {
	title: '工程化',
	path: BLOG_BASE + '/front-end-engineering/webpack搭建',
	collapsable: true,
	children: [
		{
			title: 'webpack搭建',
			path: BLOG_BASE + '/front-end-engineering/webpack搭建',
		},
		{
			title: '移动端适配方案',
			path: BLOG_BASE + '/front-end-engineering/移动端适配方案',
		},
	],
}
module.exports = FRONT_END_ENGINEERING_COLUMN
