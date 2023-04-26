<template>
	<div :class="{ isMobile }" :style="globalSty" class="NoxoneLive2D">
		<div v-show="isLoaded" class="live2d-container hover" @mouseenter="showPanel" @mouseleave="hidePanel">
			<div v-show="isShowPanel" class="panel">
				<div @mouseenter="onMusicPlayerHover" class="music-player item" :class="{ isPlaying: noxoneMusic.isPlaying }">
					<i class="music-icon iconfont icon-musicIcon1"></i>
					<div class="music-control">
						<div @click="playNoxoneMusic('pre')" class="btn pre-btn"><i class="iconfont icon-preBtn"></i></div>
						<div @click="playNoxoneMusic('play')" class="btn play-btn" v-if="!noxoneMusic.isPlaying"><i class="iconfont icon-play"></i></div>
						<div @click="playNoxoneMusic('pause')" class="btn play-btn" v-else><i class="iconfont icon-pause"></i></div>
						<div @click="playNoxoneMusic('next')" class="btn next-btn"><i class="iconfont icon-nextBtn"></i></div>
						<div @click="setNoxoneMusicStatus('show')" v-if="noxoneMusicPlayer.isPlayerHidden" class="btn show-btn">展开</div>
						<div @click="setNoxoneMusicStatus('hide')" v-else class="btn hide-btn">收起</div>
					</div>
				</div>
				<div @mouseenter="onGameBoxHover" class="game-box item">
					<div @click="playGame('Block-collision-game')" class="game"><i class="iconfont icon-youxi"></i></div>
				</div>
			</div>
			<div v-show="isShowMsg" class="message-box" v-html="curMsg"></div>
			<canvas id="live2d" :height="220" :width="150"></canvas>
		</div>
		<div v-if="!isLoaded" class="loading">loading...</div>
	</div>
</template>

<script>
import live2dJSString from '../lib/live2d.js'
import { Bus, setAnimation } from '../util'
let randomMsgLoopTimer = null
let randomMsgLoopTimer2 = null
export default {
	name: 'Live2D',
	data() {
		return {
			isMobile: false,
			isLoaded: false,
			isMobile: false,
			isShowPanel: false,
			isShowMsg: false,
			msgHoldTime: NOXONE_LIVE2D_CONFIG.msgHoldTime,
			msgDelayTime: NOXONE_LIVE2D_CONFIG.msgDelayTime,
			curMsg: '天上飘着些微云，地上吹着些微风。啊！微风吹动了我头发，教我如何不想她？',
			curModel: 'shizuku',
			modelMap: {
				shizuku: '/models/shizuku/assets/shizuku.model.json', // 目前仅支持一种
			},
			live2DZoom: NOXONE_LIVE2D_CONFIG.zoom,
			live2DRight: NOXONE_LIVE2D_CONFIG.right,
			noxoneMusic: {
				curMusic: {},
				isPlaying: false,
			},
			noxoneMusicPlayer: {
				isPlayerHidden: false,
			},
		}
	},
	computed: {
		globalSty() {
			return {
				'--live2d-width': NOXONE_LIVE2D_CONFIG.width + NOXONE_LIVE2D_CONFIG.pixels,
				'--live2d-height': NOXONE_LIVE2D_CONFIG.height + NOXONE_LIVE2D_CONFIG.pixels,
				'--live2d-container-right': this.live2DRight + NOXONE_LIVE2D_CONFIG.pixels,
				'--live2d-container-bottom': NOXONE_LIVE2D_CONFIG.bottom + NOXONE_LIVE2D_CONFIG.pixels,
				'--live2d-msgbox-bg-color': NOXONE_LIVE2D_CONFIG.msgBoxBgColor,
				'--live2d-msgbox-font-color': NOXONE_LIVE2D_CONFIG.msgBoxFontColor,
				'--live2d-zIndex': NOXONE_LIVE2D_CONFIG.zIndex,
				'--live2d-zoom': this.live2DZoom,
			}
		},
	},
	methods: {
		goHome() {
			if (this.$route.path !== '/') this.$router.push('/')
		},
		initLive2D() {
			const isMobile = !!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
			if (isMobile) this.isShowSmall = true

			if (!window.loadlive2d) {
				const script = document.createElement('script')
				script.innerHTML = live2dJSString
				document.body.appendChild(script)
			}
			window.loadlive2d('live2d', this.$withBase(this.modelMap[this.curModel]))
			this.isLoaded = true
			let _this = this
			window.noxone.Bus.$on('noxoneCoverDestroyed', function showLive2DWelcome() {})
		},
		showPanel() {
			this.isShowPanel = true
		},
		hidePanel() {
			this.isShowPanel = false
		},
		setRandomMsg: (() => {
			// 实现随机不重复展示
			let msgShowedArr = []
			let msgArr = NOXONE_LIVE2D_CONFIG.messages
			let randomIdx = 0
			return function () {
				// 这里不能用箭头函数了，因为拿不到this，你懂的
				if (!msgArr.length) {
					msgArr = msgShowedArr
					msgShowedArr = []
				}
				randomIdx = (Math.random() * msgArr.length) | 0
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
		showImmediateMsg(msg) {
			this.isShowMsg = false
			clearTimeout(randomMsgLoopTimer)
			clearTimeout(randomMsgLoopTimer2)
			randomMsgLoopTimer = null
			randomMsgLoopTimer2 = null
			this.curMsg = msg
			setTimeout(() => {
				this.isShowMsg = true
				setTimeout(() => {
					if (randomMsgLoopTimer || randomMsgLoopTimer2) return // debug
					this.showRandomMsgLoop()
				}, NOXONE_LIVE2D_CONFIG.msgHoldTime)
			}, 500)
		},
		// noxoneMusicPlayer交互
		handleNoxoneMusicPlayStatusChange({ cmd, curMusic }) {
			this.noxoneMusic.curMusic = curMusic
			if (cmd === 'play') {
				// 根据歌曲简介动态生成内容 xxxxx，一首《xx》送给你~
				this.noxoneMusic.isPlaying = true
				this.showImmediateMsg(`这首<b style="color: #00a1d6;">《${curMusic.title}》</b><br>送给最最最可爱的你😘`)
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
		handleNoxoneMusicPlayerStatusChange({ cmd, change }) {
			for (let key in change) {
				key in this.noxoneMusicPlayer ? (this.noxoneMusicPlayer[key] = change[key]) : -1
			}
			if (cmd === 'show') {
				this.showImmediateMsg(`NOxONE播放器出现啦🎇`)
				return
			}
			if (cmd === 'hide') {
				this.showImmediateMsg(`NOxONE播放器隐藏啦🎆`)
				return
			}
		},
		onMusicPlayerHover() {
			this.showImmediateMsg(`你好~ 我叫${this.curModel}，<br>我可以为您点歌哦🎵`)
		},
		onGameBoxHover() {
			this.showImmediateMsg(`偷偷告诉你~<br>我家主人不在家喔~<br>想玩他写的游戏吗？`)
		},
		playNoxoneMusic(cmd) {
			window.noxone.Bus.$emit('playNoxoneMusic', cmd)
		},
		setNoxoneMusicStatus(cmd) {
			window.noxone.Bus.$emit('setPlayerStatus', cmd)
		},
		playGame(name) {
			if (name === 'Block-collision-game') {
				window.open('https://dragon-chen777.github.io/Block-collision-game/', '_blank')
			}
		},
	},

	beforeMount() {
		window.noxone = window.noxone || {}
		if (!window.noxone.Bus) window.noxone.Bus = new Bus()
		console.log('%c noxoneLive2D已成功加载~，欢迎访问作者博客：https://dragon-chen777.github.io/NOxONE/', 'color: #00a1d6')
		window.noxone.Bus.$on('noxoneMusicPlayStatusChange', this.handleNoxoneMusicPlayStatusChange)
		window.noxone.Bus.$on('noxoneMusicPlayerStatusChange', this.handleNoxoneMusicPlayerStatusChange)
		this.isMobile = !!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
		if (this.isMobile) {
			this.live2DZoom *= 0.7
			this.live2DRight = -40
		}
	},
	mounted() {
		this.showRandomMsgLoop()
		this.initLive2D()
	},
}
</script>

<style lang="stylus" scoped>
@require './assets/iconfont/iconfont.css'
// @font-face
//   font-family: NOXONE_GLOBAL_FONT
//   src: url('./assets/fonts/Alimama_DongFangDaKai_Regular.woff') format('woff'),
//         url('./assets/fonts/Alimama_DongFangDaKai_Regular.woff2') format('woff'),
//         url('./assets/fonts/Alimama_DongFangDaKai_Regular.ttf') format('truetype')
$themeColor = #69c6f5
* {
  padding 0
  margin 0
  box-sizing border-box
}
.NoxoneLive2D {
  font-family NOXONE_GLOBAL_FONT
  position fixed
  right var(--live2d-container-right)
  bottom var(--live2d-container-bottom)
  color $themeColor
  text-align center
  z-index var(--live2d-zIndex)
  zoom var(--live2d-zoom)
  -webkit-user-select none
  -moz-user-select none
}


.live2d-container {
  position relative
  padding 0 80px 0 140px

  .message-box {
    position absolute
    bottom 210px
    transform translateX(-10%)
    width 220px
    padding 12px 20px
    border-radius 25px
    font-weight 500
    font-size 18px
    color var(--live2d-msgbox-font-color)
    background-color var(--live2d-msgbox-bg-color)
    filter drop-shadow(1px 1px 5px #333)

    &::after {
      position absolute
      bottom -20px
      left 90px
      content ''
      display block
      border 10px var(--live2d-msgbox-bg-color) solid
      border-bottom-color transparent
      border-left-color transparent
      border-right-color transparent
    }
  }

  #live2d {
    width 150px
    height 220px
    pointer-events: none
  }
}

//  面板
.panel {
  position absolute
  top 0
  bottom 0
  left 0
  right 0
  pointer-events none
  .item {
    pointer-events auto
    position absolute
    border-radius 1rem
    background-color var(--live2d-msgbox-bg-color)
    filter drop-shadow(1px 1px 5px #333)
    i {
      font-weight 600
      color #ddd
      text-shadow -2px 0 #666, 2px 0 #666, 0 2px #666, 0 -2px #666
    }
  }
  .game-box{
    width 50px
    height 30px
    top 50px
    left 80px
    display flex
    align-items center
    justify-content center
    .game{
      width 20px
      height 20px
      i{
        font-size 20px
      }
      &:hover{
        i{
          color $themeColor
        }
      }
    }
  }
  .music-player {
    bottom 50px
    left 10px
    width 120px
    height 55px

    .music-icon{
      position absolute
      top -15px
      right 0px
      font-size 30px
      color $themeColor
      animation rotate 1.8s linear infinite
      animation-play-state paused
    }
    .music-control{
      position absolute
      top 50%
      left 50%
      transform translate(-50%,-50%)
      display flex
      justify-content center
      .btn{
        box-sizing border-box
        width 30px
        height 30px
        line-height 30px
        text-align center
        i {
          font-size 20px
        }
        &:hover{
          i{
            color $themeColor
          }
        }
      }
      .play-btn{
        padding-left 2px
        i{
          font-size 24px
        }
      }
      .show-btn, .hide-btn {
        position absolute
        width auto
        height auto
        top -20px
        left -5px
        font-size 12px
        font-weight 600
        color #ddd
        text-shadow -2px 0 #666, 2px 0 #666, 0 2px #666, 0 -2px #666
        &:hover {
          color $themeColor
        }
      }
    }
  }
  .music-player.isPlaying{
    .music-icon{
      animation-play-state running
    }
  }
}


@keyframes rotate
  0%
    transform rotate(0)
  25%
    transform rotate(25deg)
  50%
    transform rotate(0)
  75%
    transform rotate(-25deg)
  100%
    transform rotate(0)
</style>
