const BLOG_BASE = '/blog'
const COLUMN_BASE = '/websit-build-diary'
const BASE = BLOG_BASE + COLUMN_BASE + '/'

const WEBSIT_BUILD_DIARY = {
	title: '建站日记',
	path: BASE + '2023.04.01 ~ 2023.04.02',
	collapsable: true,
	children: [
		{
			title: '2023.04.01 ~ 2023.04.02',
			path: BASE + '2023.04.01 ~ 2023.04.02',
		},
		{
			title: '2023.04.03',
			path: BASE + '2023.04.03',
		},
		{
			title: '2023.04.05',
			path: BASE + '2023.04.05',
		},
		{
			title: '2023.04.07',
			path: BASE + '2023.04.07',
		},
		{
			title: '2023.04.08',
			path: BASE + '2023.04.08',
		},
		{
			title: '2023.04.09',
			path: BASE + '2023.04.09',
		},

		// todo
		{
			title: 'TODO',
			path: BASE + 'todo',
		},
	],
}
module.exports = WEBSIT_BUILD_DIARY
