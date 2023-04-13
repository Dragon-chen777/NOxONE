<template>
  <div v-if="isShow" ref="noxone-cover" id="noxone-cover" :class="{ 'enableClose': enableClose }" :style="globalSty" class="noxone-cover">
    <div id="text" class="text"></div>
    <div id="text-copy" class="text-copy" v-html="textArr"></div>
    <div v-if="enableClose && isFontLoaded" class="nextTip pulsate-bck" v-html="nextTip"></div>
    <div v-if="!enableClose && isFontLoaded" class="skipTip pulsate-bck" v-html="skipTip" @click="close('noxoneCoverDestroyed')"></div>
    <template v-if="isShowMeteors && enableClose">
      <div class="meteor meteor1"></div>
      <div class="meteor meteor2"></div>
      <div class="meteor meteor3"></div>
      <div class="meteor meteor4"></div>
      <div class="meteor meteor5"></div>
    </template>
    <img class="bg" :src="bgImg">
  </div>
</template>
<script>
import Typed from '../lib/typed.js'
import {setAnimation,Bus} from '../util'


let _typed = null
export default {
  name: 'Cover',
  data() {
    return {
      isFontLoaded: false,
      isShow: true,
      isFadeOut: false,
      enableClose: false,
      textBoxW: 'auto',
      textBoxH: 'auto',
      nextTip: CONFIG.nextTip,
      skipTip: CONFIG.skipTip,
      isShowMeteors: CONFIG.isShowMeteors,
      zoom: 1,
      writingMode: CONFIG.writingMode,
      bgImg: 'https://dragon-chen777.github.io/assets/images/bg1.jpg',
    }
  },
  computed: {
    textArr() {
      let ret = []
      if (CONFIG.typeMode === 'default') {
        let s = CONFIG.texts.join('<br>')
        ret.push(s)
        return ret
      }
      return ret
    },
    globalSty() {
      return {
        // 可配置
        '--text-font-color': CONFIG.fontColor,
        '--text-font-size': CONFIG.fontSize + CONFIG.pixels,
        '--text-font-weight': CONFIG.fontWeight,
        '--text-line-height': CONFIG.fontSize * 1.5 + CONFIG.pixels,
        '--text-writing-mode': this.writingMode,
        '--text-font-align': CONFIG.fontAlign,
        '--text-border-color': CONFIG.textBorderColor,
        '--text-border-size': CONFIG.textBorderSize,
        '--bg-img-url': `../assets/images/defaultBg.jpg`,
        // 自适应
        '--text-box-w': this.textBoxW + CONFIG.pixels,
        '--text-box-h': this.textBoxH + CONFIG.pixels,
        '--text-zoom': this.zoom
      }
    },
  },
  methods: {
    typeText() {
      let _this = this
      _typed = new Typed('#text', {
        strings: _this.textArr,
        typeSpeed: 170||CONFIG.typeSpeed,
        showCursor: false,
        onComplete() {
          if (CONFIG.isAutoClose) return _this.close('noxoneCoverDestroyedAuto') // 自动关闭
          _this.enableClose = true
          _this.$refs['noxone-cover'].onclick = () => _this.close('noxoneCoverDestroyed') // 点击关闭
        },
      })
    },
    initTextBox() {
      const {offsetWidth, offsetHeight} = document.getElementById('text-copy')
      this.textBoxW = offsetWidth
      this.textBoxH = offsetHeight
    },
    close(eventName) {
      _typed.destroy()
      this.isFadeOut = true
      setAnimation(this.$refs['noxone-cover'], 'text-blur-out'||CONFIG.closeAnimation, () => {
        this.isShow = false
        document.body.style.overflow = 'visible'
        window.noxone.Bus.$emit(eventName)
      })
    }
  },
  beforeMount() {
    window.noxone = window.noxone || {}
    if (!window.noxone.Bus) window.noxone.Bus = new Bus()
    console.log('%c noxoneCover已成功加载~，欢迎访问作者博客：https://dragon-chen777.github.io/NOxONE/','color: #00a1d6')

    const isMobile = !!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    if (isMobile) {
      this.zoom *= 0.75
      this.writingMode = 'horizontal-tb'
      this.bgImg = 'https://dragon-chen777.github.io/assets/images/bg1Mobile.jpg'
    }
  },
  mounted() {
    document.body.style.overflow = 'hidden'
    document.fonts.ready.then(()=>{
      this.isFontLoaded = true
      setTimeout(() => {
        // 正确获取text-copy的宽高（vue的mounted钩子有这个bug）
        this.initTextBox()
        this.typeText()
      }, 500)
    })
  },
}
</script>

<style lang="stylus" scoped>
@require '../assets/css/animista.css'
@font-face
  font-family FONT
  src url('../assets/fonts/test.ttf')
.bg
  position absolute
  top 0
  right 0
  width 100vw
  height 100vh
#noxone-cover
  font-family FONT !important
  position fixed
  top 0
  bottom 0
  left 0
  right 0
  height 100vh
  width 100vw
  display flex
  align-items center
  justify-content center
  background rgba(255, 255, 255, 1) no-repeat 100% / 100%
  background-size: 100% 100%
  user-select none
  z-index 999999999
  cursor url('https://dragon-chen777.github.io/assets/cursors/1/default.cur'),auto

#noxone-cover.enableClose
  cursor url('https://dragon-chen777.github.io/assets/cursors/1/select.cur'),auto !important

.text
  z-index 1
  width var(--text-box-w)
  height var(--text-box-h)
  color var(--text-font-color)
  font-size var(--text-font-size)
  font-weight var(--text-font-weight)
  writing-mode var(--text-writing-mode)
  line-height var(--text-line-height)
  text-align var(--text-font-align)
  text-shadow calc(-1 * var(--text-border-size)) 0 var(--text-border-color),
  var(--text-border-size) 0 var(--text-border-color),
  0 var(--text-border-size) var(--text-border-color),
  0 calc(-1 * var(--text-border-size)) var(--text-border-color)
  zoom: var(--text-zoom)
.text-copy
  font-size var(--text-font-size)
  font-weight var(--text-font-weight)
  writing-mode var(--text-writing-mode)
  line-height var(--text-line-height)
  text-align var(--text-font-align)
  text-shadow calc(-1 * var(--text-border-size)) 0 var(--text-border-color),
  var(--text-border-size) 0 var(--text-border-color),
  0 var(--text-border-size) var(--text-border-color),
  0 calc(-1 * var(--text-border-size)) var(--text-border-color)
  position absolute
  opacity 0
@keyframes test {
  0%,100% {
    opacity 0
  }
}

.nextTip, .skipTip
  z-index 1
  color var(--text-font-color)
  font-size calc(1 * var(--text-font-size))
  font-weight var(--text-font-weight)
  text-shadow calc(-1 * var(--text-border-size)) 0 var(--text-border-color),
  var(--text-border-size) 0 var(--text-border-color),
  0 var(--text-border-size) var(--text-border-color),
  0 calc(-1 * var(--text-border-size)) var(--text-border-color)
  position fixed
  right 20px
  zoom: var(--text-zoom)
  cursor url('https://dragon-chen777.github.io/assets/cursors/1/select.cur'),auto !important

.skipTip
  top 20px
  cursor pointer
.nextTip
  bottom 20px
// 流星

.meteor {
  pointer-events: none;
  position: absolute;
  width: 4px;
  height: 4px;
  opacity: 0;
  background: #ffffff;
  border-radius: 50%;
  box-shadow: 0 0 5px 5px #636262;
}

.meteor:after {
  content: "";
  display: block;
  border: 0px solid #fff;
  border-width: 2px 100px 2px 100px;
  border-color: transparent transparent transparent rgba(255, 255, 255, 0.3);
  transform: rotate(-45deg) translate3d(1px, 1px, 0);
  transform-origin: 0% 0%;
}

.meteor1 {
  top: 2vh;
  left: 30vw;
  animation: meteorflashing 2s infinite linear 1s;
}

.meteor2 {
  top: 22vh;
  left: 80vw;
  background: rgb(234, 0, 255);
  animation: meteorflashing 2s infinite linear 1s;
}

.meteor3 {
  top: 30vh;
  left: 40vw;
  animation: meteorflashing 3s infinite linear 2s;
}

.meteor4 {
  top: 10vh;
  left: 50vw;
  animation: meteorflashing 3s infinite linear 1s;
}

.meteor5 {
  top: 50vh;
  right: 2vw;
  animation: meteorflashing 3s infinite linear 3s;
}

@keyframes meteorflashing {
  0% {
    opacity: 0;
    transform: scale(0) translate3d(0, 0, 0);
  }
  50% {
    opacity: 1;
    transform: scale(1) translate3d(-200px, 200px, 0);
  }
  100% {
    opacity: 0;
    transform: scale(1) translate3d(-500px, 500px, 0);
  }
}
@keyframes textCopy {
  0%,100%{}
}
</style>
