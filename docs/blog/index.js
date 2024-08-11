const fs = require('fs')
const path = require('path')
const colums = []
const columSort = {
	JavaScript: 0,
	ES6: 1,
	Golang: 2,
	VUE: 3,
	CSS: 4,
	算法刷题集: 5,
	数据结构与算法: 6,
	'Three.js': 7,
	浏览器相关: 8,
	前端工程化: 9,
	建站日记: 10,
}

fs.readdirSync(__dirname, { withFileTypes: true }).forEach((colum) => {
	if (!colum.isDirectory()) return

	const BASE = `/blog/${colum.name}`
	const blogs = fs
		.readdirSync(path.join(__dirname, colum.name))
		.filter((file) => file.endsWith('.md'))
		.map((file) => file.slice(0, -3))

	colums.push({
		title: colum.name,
		path: `${BASE}/${blogs[0]}`,
		collapsable: true,
		children: blogs.map((blog) => ({ title: blog, path: `${BASE}/${blog}` })),
	})
})
colums.sort((a, b) => columSort[a.title] - columSort[b.title])
module.exports = {
	'/blog': colums,
}
