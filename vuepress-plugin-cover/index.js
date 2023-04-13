const {resolve} = require('path')
const DEFAULT_CONFIG = require('./bin/defaultConfig')

module.exports = (config, ctx) => ({
  define() {
    const CONFIG = {...DEFAULT_CONFIG, ...config}
    return {
      CONFIG
    }
  },
  enhanceAppFiles: resolve(__dirname, './bin/enhanceAppFile.js'),
  globalUIComponents: 'Cover'
})
