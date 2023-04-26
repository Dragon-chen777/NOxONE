const { resolve } = require('path')
const DEFAULT_CONFIG = require('./bin/defaultConf.js')
module.exports = (config, context) => ({
	define() {
		const NOXONE_LIVE2D_CONFIG = { ...DEFAULT_CONFIG, ...config }
		return {
			NOXONE_LIVE2D_CONFIG,
		}
	},
	name: '@noxone/vuepress-plugin-live2d',
	enhanceAppFiles: resolve(__dirname, './bin/enhanceAppFile.js'),
	globalUIComponents: 'Live2D',
})
