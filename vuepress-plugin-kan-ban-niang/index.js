const { resolve } = require('path')
module.exports = (options, context) => ({
  define () {
    const { clean, messages, theme, modelStyle, btnStyle, width, height, messageStyle } = options
    return {
      CLEAN: clean || false,
      THEME: theme || ['shizuku', 'Tia','Pio','xiaomai','shield'],
      MESSAGES: messages || {
        welcome: '',
        home: '迷路了吗？我带你回家吧~',
        theme: '好吧，希望你能喜欢我的其他小伙伴。',
        close: '你知道我喜欢吃什么吗？痴痴地望着你'
      },
      MESSAGE_STYLE: messageStyle || {
        right: '68px',
        bottom: '190px'
      },
      MODEL_STYLE: modelStyle || {
        right: '90px',
        bottom: '-20px',
        opacity: '0.9'
      },
      BTN_STYLE: btnStyle || {
        right: '90px',
        bottom: '40px'
      },
      WIDTH: width || 150,
      HEIGHT: height || 220
    }
  },
  name: '@vuepress-reco/vuepress-plugin-kan-ban-niang',
  enhanceAppFiles: resolve(__dirname, './bin/enhanceAppFile.js'),
  globalUIComponents: 'KanBanNiang'
})
