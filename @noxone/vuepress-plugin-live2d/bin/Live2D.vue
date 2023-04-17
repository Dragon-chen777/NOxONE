<template>
  <div :class="{ isMobile }" :style="globalSty" class="NoxoneLive2D">
    <div
      v-show="isLoaded"
      class="live2d-container hover"
      @mouseenter="showPanel"
      @mouseleave="hidePanel"
    >
      <div v-show="isShowPanel" class="panel">

        <div @mouseenter="onMusicPlayerHover" class="music-player item">
          <i class="music-icon iconfont icon-musicIcon1"></i>
          <div class="music-control">
            <div @click="playNoxoneMusic('pre')" class="btn pre-btn"><i class="iconfont icon-preBtn"></i></div>
            <div @click="playNoxoneMusic('play')" class="btn play-btn" v-if="!noxoneMusic.isPlaying"><i class="iconfont icon-play"></i></div>
            <div @click="playNoxoneMusic('pause')" class="btn pause-btn" v-else><i class="iconfont icon-pause"></i></div>
            <div @click="playNoxoneMusic('next')" class="btn next-btn"><i class="iconfont icon-nextBtn"></i></div>
          </div>
        </div>
      </div>
      <div v-show="isShowMsg" class="message-box" v-html="curMsg"></div>
      <canvas id="live2d" :height="live2DHeight" :width="live2DWidth"></canvas>
    </div>
    <div v-if="!isLoaded" class="loading">loading...</div>
  </div>
</template>

<script>
import live2dJSString from "../lib/live2d.js"
import {Bus, setAnimation} from "../util"
let randomMsgLoopTimer = null
let randomMsgLoopTimer2 = null
export default {
  name: "Live2D",
  data() {
    return {
      isLoaded: false,
      isMobile: false,
      isShowPanel: false,
      isShowMsg: true,
      msgHoldTime: NOXONE_LIVE2D_CONFIG.msgHoldTime,
      msgDelayTime: NOXONE_LIVE2D_CONFIG.msgDelayTime,
      curMsg: '天上飘着些微云，地上吹着些微风。啊！微风吹动了我头发，教我如何不想她？',
      curModel: 'shizuku',
      modelMap: {
        shizuku: "/models/shizuku/assets/shizuku.model.json", // 目前仅支持一种
      },
      live2DWidth: NOXONE_LIVE2D_CONFIG.width,
      live2DHeight: NOXONE_LIVE2D_CONFIG.height,
      noxoneMusic: {
        curMusic: {},
        isPlaying: false,
      }
    }
  },
  computed: {
    globalSty() {
      return {
        '--live2d-width': NOXONE_LIVE2D_CONFIG.width + NOXONE_LIVE2D_CONFIG.pixels,
        '--live2d-height': NOXONE_LIVE2D_CONFIG.height + NOXONE_LIVE2D_CONFIG.pixels,
        '--live2d-container-right': NOXONE_LIVE2D_CONFIG.right + NOXONE_LIVE2D_CONFIG.pixels,
        '--live2d-container-bottom': NOXONE_LIVE2D_CONFIG.bottom + NOXONE_LIVE2D_CONFIG.pixels,
        '--live2d-msgbox-bg-color': 'rgba(255,255,255,0.6)' || NOXONE_LIVE2D_CONFIG.msgBoxBgColor,
        '--live2d-msgbox-font-color': '#333' || NOXONE_LIVE2D_CONFIG.msgBoxFontColor,
      }
    }
  },
  methods: {
    goHome() {
      if (this.$route.path !== "/") this.$router.push("/")
    },
    initLive2D() {
      const isMobile = !!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      if (isMobile) this.isShowSmall = true

      if (!window.loadlive2d) {
        const script = document.createElement("script")
        script.innerHTML = live2dJSString
        document.body.appendChild(script)
      }
      window.loadlive2d(
        'live2d',
        this.$withBase(this.modelMap[this.curModel])
      )
      this.isLoaded = true
      let _this = this
      window.noxone.Bus.$on(
        "noxoneCoverDestroyed",
        function showLive2DWelcome() {

        }
      )
    },
    showPanel() {
      this.isShowPanel = true
    },
    hidePanel() {
      this.isShowPanel = false
    },
    setRandomMsg: (() => { // 实现随机不重复展示
      let msgShowedArr = []
      let msgArr = NOXONE_LIVE2D_CONFIG.messages
      let randomIdx = 0
      return function () { // 这里不能用箭头函数了，因为拿不到this，你懂的
        if (!msgArr.length) {
          msgArr = msgShowedArr
          msgShowedArr = []
        }
        randomIdx = Math.random() * msgArr.length | 0
        this.curMsg = msgArr.splice(randomIdx, 1)[0]
        msgShowedArr.push(this.curMsg)
      }
    })(),
    showRandomMsgLoop() {
      this.setRandomMsg()
      this.isShowMsg = true
      randomMsgLoopTimer = setTimeout(() => {
        this.isShowMsg = false
        randomMsgLoopTimer2 = setTimeout(() => {
          this.showRandomMsgLoop()
        }, NOXONE_LIVE2D_CONFIG.msgDelayTime)
      }, NOXONE_LIVE2D_CONFIG.msgHoldTime)
    },
    showImmediateMsg(msg){
      this.isShowMsg = false
      clearTimeout(randomMsgLoopTimer)
      clearTimeout(randomMsgLoopTimer2)
      randomMsgLoopTimer = null
      randomMsgLoopTimer2 = null
      this.curMsg = msg
      setTimeout(() => {
        this.isShowMsg = true
        setTimeout(() => {
          if(randomMsgLoopTimer||randomMsgLoopTimer2) return // debug
          this.showRandomMsgLoop()
        }, NOXONE_LIVE2D_CONFIG.msgHoldTime)
      }, 500)
    },
    // noxoneMusicPlayer交互
    handleNoxoneMusicPlayStatusChange({cmd,curMusic}){
      this.noxoneMusic.curMusic = curMusic
      if (cmd === 'play') {
        // 根据歌曲简介动态生成内容 xxxxx，一首《xx》送给你~
        this.noxoneMusic.isPlaying = true
        this.showImmediateMsg(`正在为主人播放<b style="color: #00a1d6;">《${curMusic.title}》</b><br>送给最最最可爱的你😘`)
        return
      }
      if (cmd === 'pre') {
        this.noxoneMusic.isPlaying = true
        this.showImmediateMsg(`一首<b style="color: #00a1d6;">《${curMusic.title}》</b><br>希望你能喜欢喔😊`)
        return
      }
      if (cmd === 'next') {
        this.noxoneMusic.isPlaying = true
        this.showImmediateMsg(`一首<b style="color: #00a1d6;">《${curMusic.title}》</b><br>送给我最爱的你💖`)
        return
      }
      if (cmd === 'pause') {
        this.noxoneMusic.isPlaying = false
        this.showImmediateMsg(`主人，打扰到您了吗？<br>${this.curModel}给您道歉，${this.curModel}真不是故意的😭`)
        return
      }
    },
    onMusicPlayerHover(){
      console.log(1)
      this.showImmediateMsg(`${this.curModel}可以为主人点歌哦😊`)
    },
    playNoxoneMusic(cmd) {
      window.noxone.Bus.$emit('playNoxoneMusic',cmd)
    }
  },

  beforeMount() {
    window.noxone = window.noxone || {}
    if (!window.noxone.Bus) window.noxone.Bus = new Bus()
    console.log(
      "%c noxoneLive2D已成功加载~，欢迎访问作者博客：https://dragon-chen777.github.io/NOxONE/",
      "color: #00a1d6"
    )
    window.noxone.Bus.$on('noxoneMusicPlayStatusChange', this.handleNoxoneMusicPlayStatusChange)
  },
  mounted() {
    this.showRandomMsgLoop()
    this.initLive2D()
  },
}
</script>

<style lang="stylus" scoped>
@require './assets/iconfont/iconfont.css'
@font-face
  font-family NOXONE_LIVE2D_FONT
  src url('./assets/fonts/font3.ttf')

* {
  padding 0
  margin 0
  box-sizing border-box
}

.NoxoneLive2D {
  position: fixed
  right: var(--live2d-container-right)
  bottom: var(--live2d-container-bottom)
  color: #00adb5
  text-align center
}

.live2d-container {
  position relative
  padding 0 80px

  .message-box {
    font-family NOXONE_LIVE2D_FONT
    font-weight 500
    font-style: 18px;
    position absolute
    bottom calc(var(--live2d-height) * 0.95)
    transform translateX(-10%)
    padding 12px 20px
    border-radius 25px
    box-shadow 0 0 1px 1px #666
    filter: drop-shadow(0 0 10px #999)
    width calc(var(--live2d-width) * 1.4)
    color var(--live2d-msgbox-font-color)
    background-color: var(--live2d-msgbox-bg-color)
    -webkit-backdrop-filter blur(10px)
    backdrop-filter blur(10px)
    pointer-events none

    &::after {
      position absolute
      bottom -20px
      left calc(var(--live2d-width) * 0.6)
      content ''
      display block
      border 10px var(--live2d-msgbox-bg-color) solid
      border-bottom-color transparent
      border-left-color transparent
      border-right-color transparent
    }
  }

  #live2d {
    width var(--live2d-width)
    height var(--live2d-height)
    pointer-events: none
    z-index: 99999
  }
}

.live2d-container.small {
  #live2d {
    transform: translate(50%, 25%) scale(0.5)
  }
}

//  面板
.panel {
  position absolute
  top 0
  bottom 0
  left 0
  right 0
  .item {
    position absolute
    border-radius 1rem
    width 100px
    height 60px
    background rgba(255, 255, 219,0.5)
    box-shadow 0 0 5px 3px #777
    -webkit-backdrop-filter blur(1px) !important
    backdrop-filter blur(10px) !important
    i {
      font-weight 600
      color #ddd
      text-shadow: -2px 0 #666, 2px 0 #666, 0 2px #666, 0 -2px #666
    }
  }

  .music-player {
    top 40px
    left -20px
    width 120px
    height 55px
    .music-icon{
      position: absolute;
      top -15px
      right 0px
      font-size 30px
      color rgb(105, 198, 245)
    }
    .music-control{
      position: absolute;
      top: 50%;
      left 50%;
      transform translate(-50%,-50%);
      display flex
      justify-content: center;
      .btn{
        box-sizing border-box
        width 30px
        height 30px
        line-height 30px
        text-align center
        color #fff
        i {
          font-size 20px
        }
        &:hover{
          i{
            color rgb(105, 198, 245)
          }
        }
      }
      .play-btn{
        padding-left 2px
        i{
          font-size 24px
        }

      }
    }
  }
}
</style>
