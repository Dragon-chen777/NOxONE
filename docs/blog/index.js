const JS_COLUMN = require('./js')
const CSS_COLUMN = require('./css')
const ES6_COLUMN = require('./es6')
const VUE_COLUMN = require('./vue')
const THREEJS_COLUMN = require('./threejs')
const BROWSER_COLUMN = require('./browser')
const ALGORITHM_COLUMN = require('./algorithm')
const FRONT_END_ENGINEERING_COLUMN = require('./front-end-engineering')

const BLOG_BASE = '/blog'

const WEBSITE_CREATE_DIARY = {
  title: '建站日记',
  path: BLOG_BASE + '/website-create-diary',
}
const DONE_LIST = {
  title: 'Todo',
  path: BLOG_BASE + '/todo-list'
}
const SIDEBAR = { // 侧边栏
  '/blog': [
    WEBSITE_CREATE_DIARY,
    JS_COLUMN,
    CSS_COLUMN,
    ES6_COLUMN,
    VUE_COLUMN,
    THREEJS_COLUMN,
    BROWSER_COLUMN,
    ALGORITHM_COLUMN,
    FRONT_END_ENGINEERING_COLUMN,
    DONE_LIST
  ]
}
module.exports = SIDEBAR