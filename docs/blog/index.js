const JS_COLUMN = require('./js')
const CSS_COLUMN = require('./css')
const ES6_COLUMN = require('./es6')
const VUE_COLUMN = require('./vue')
const THREEJS_COLUMN = require('./threejs')
const BROWSER_COLUMN = require('./browser')
const ALGORITHM_COLUMN = require('./algorithm')
const FRONT_END_ENGINEERING_COLUMN = require('./front-end-engineering')
const WEBSIT_BUILD_DIARY = require('./websit-build-diary')

const SIDEBAR = {
	// 侧边栏
	'/blog': [JS_COLUMN, CSS_COLUMN, ES6_COLUMN, VUE_COLUMN, THREEJS_COLUMN, BROWSER_COLUMN, ALGORITHM_COLUMN, FRONT_END_ENGINEERING_COLUMN, WEBSIT_BUILD_DIARY],
}
module.exports = SIDEBAR
