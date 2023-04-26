<template>
	<div class="noxone-music" :style="globalSty" :class="{ playing: isPlaying, hidden: isPlayerHidden }">
		<div class="music-container">
			<div class="music-info">
				<div class="title">{{ curMusic.title }}</div>
				<div class="progress-container hover" @click="setProgress($event)">
					<div class="progress hover" :style="{ width: playProgress }"></div>
				</div>
			</div>
			<div class="music-cover">
				<img :src="curMusic.cover" />
			</div>
			<div class="control-pannel">
				<div class="hide-btn hover" @click="setPlayerStatus('hide')">x</div>
				<div class="action-btn fas fa-backward hover" @click="playMusic('pre')"></div>
				<div class="action-btn action-btn-big fas hover" :class="[isPlaying ? 'fa-pause' : 'fa-play']" @click="playMusic(isPlaying ? 'pause' : 'play')"></div>
				<div class="action-btn fas fa-forward hover" @click="playMusic('next')"></div>
			</div>
			<audio ref="audio" :src="curMusic.link" @timeupdate="updateProgress" @ended="playMusic('next')" />
		</div>
		<div class="small-container hover" :class="{ show: isPlayerHidden, hidden: !isPlayerHidden }" @click="setPlayerStatus('show')">
			<div class="show-btn fas fa-angle-right"></div>
		</div>
	</div>
</template>
<script>
import { Bus } from '../util'

let AUDIO = null
export default {
	data() {
		return {
			isPlaying: false,
			isPlayerHidden: false,
			playProgress: 0,
			curMusicIdx: 0,
			musicList: MUSIC_LIST,

			globalSty: {
				zoom: CONTAINER.zoom,
				bottom: CONTAINER.bottom,
				zIndex: CONTAINER.zIndex,
				'--container-bg-color': CONTAINER.containerBg,
				'--theme-color': CONTAINER.themeColor,
				'--music-info-bg-color': CONTAINER.musicInfoBg,
				'--music-title-color': CONTAINER.musicTitleColor,
			},
		}
	},
	computed: {
		curMusic() {
			return this.musicList[this.curMusicIdx]
		},
	},
	beforeMount() {
		window.noxone = window.noxone || {}
		if (!window.noxone.Bus) window.noxone.Bus = new Bus()
		console.log('%c noxoneMusicPlayer已成功加载~，欢迎访问作者博客：https://dragon-chen777.github.io/NOxONE/', 'color: #00a1d6')

		let _this = this
		window.noxone.Bus.$on('noxoneCoverDestroyed', function musicPlay() {
			_this.playMusic('play')
		})
		window.noxone.Bus.$on('playNoxoneMusic', function musicPlay(cmd) {
			_this.playMusic(cmd)
		})
		window.noxone.Bus.$on('setPlayerStatus', function setPlayerStatus(cmd) {
			_this.setPlayerStatus(cmd)
		})
		const isMobile = !!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
		if (isMobile) {
			this.globalSty.zoom *= 0.7
			this.setPlayerStatus('hide')
		}
	},
	mounted() {
		AUDIO = this.$refs.audio
	},
	methods: {
		playMusic(cmd) {
			if (cmd === 'play') {
				AUDIO.play()
				this.isPlaying = true
				window.noxone.Bus.$emit('noxoneMusicPlayStatusChange', { cmd, curMusic: this.curMusic })
				return
			}
			if (cmd === 'pause') {
				AUDIO.pause()
				this.isPlaying = false
				window.noxone.Bus.$emit('noxoneMusicPlayStatusChange', { cmd, curMusic: this.curMusic })
				return
			}
			if (cmd === 'pre') {
				if (this.curMusicIdx === 0) this.curMusicIdx = this.musicList.length - 1
				else this.curMusicIdx--
				this.$nextTick(() => {
					AUDIO.play()
					this.isPlaying = true
					window.noxone.Bus.$emit('noxoneMusicPlayStatusChange', { cmd, curMusic: this.curMusic })
				})
				return
			}
			if (cmd === 'next') {
				this.curMusicIdx = ++this.curMusicIdx % this.musicList.length
				this.$nextTick(() => {
					AUDIO.play()
					this.isPlaying = true
					window.noxone.Bus.$emit('noxoneMusicPlayStatusChange', { cmd, curMusic: this.curMusic })
				})
				return
			}
		},
		updateProgress(e) {
			const { duration, currentTime } = e.target
			this.playProgress = `${(currentTime / duration) * 100}%`
		},
		setProgress(e) {
			console.log(e.target.clientWidth, e)
			const progressContainerWidth = e.target.clientWidth
			const clickX = e.offsetX / this.globalSty.zoom // zoom会影响到e.offsetX
			const duration = AUDIO.duration
			AUDIO.currentTime = (clickX / progressContainerWidth) * duration
		},
		setPlayerStatus(cmd) {
			if (cmd === 'hide') {
				this.isPlayerHidden = true
				window.noxone.Bus.$emit('noxoneMusicPlayerStatusChange', { cmd, change: { isPlayerHidden: this.isPlayerHidden } })
				return
			}
			if (cmd === 'show') {
				this.isPlayerHidden = false
				window.noxone.Bus.$emit('noxoneMusicPlayerStatusChange', { cmd, change: { isPlayerHidden: this.isPlayerHidden } })
				return
			}
		},
	},
}
</script>
<style lang="stylus" scoped>
@import url('https://fonts.googleapis.com/css?family=Lato&display=swap')
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css')
*
  box-sizing border-box
  -webkit-tap-highlight-color rgba(0,0,0,0)
.noxone-music
  position fixed
  left 0
.noxone-music.playing
  .music-cover
    img
      animation-play-state running
  .music-info
    opacity 1
    transform translateY(-100%)
.noxone-music.hidden
  pointer-events none
  .music-container
    opacity 0
    transform translateX(-110%)

.music-container
  position relative
  display flex
  background var(--container-bg-color)
  border 4px solid rgba(0,0,0,.2)
  box-shadow 2.8px 2.8px 2.2px rgba(0,0,0,.02),6.7px 6.7px 5.3px rgba(0,0,0,.028),12.5px 12.5px 10px rgba(0,0,0,.035),22.3px 22.3px 17.9px rgba(0,0,0,.042),41.8px 41.8px 33.4px rgba(0,0,0,.05),100px 100px 80px rgba(0,0,0,.07)
  border-radius 15px
  padding 20px 20px
  z-index 1
  transition all 0.5s ease-out



.music-cover
  position relative
  width 110px
  &::after
    position absolute
    left 50%
    bottom 100%
    width 15px
    height 15px
    content ""
    background-color var(--container-bg-color)
    border-radius 50%
    transform translate(-50%,50%)
  img
    border-radius 50%
    height 110px
    width inherit
    -o-object-fit cover
    object-fit cover
    position absolute
    bottom 0
    left 0
    animation rotate 3s linear infinite
    animation-play-state paused

.control-pannel
  display flex
  align-items center
  justify-content center
  z-index 9
  .action-btn
    border 0
    color var(--theme-color)
    font-size 20px
    cursor pointer
    padding 10px
    margin 0 15px
  .action-btn-big
    font-size 30px
  .hide-btn
    position absolute
    top 0
    right 0
    width 30px
    height 30px
    line-height 30px
    text-align center
    font-size 24px
    font-weight 600
    cursor pointer
    color var(--theme-color)
.small-container
  position absolute
  top 50%
  left 0
  transform translate(-100%,-50%)
  border-radius 0 28px 28px 0
  width 32px
  height 45px
  background-color #fefefe
  filter drop-shadow(1px 1px 2px #666)
  display flex
  align-items center
  justify-content center
  z-index 9
  cursor pointer
  background-color #fff
  overflow hidden
  color var(--theme-color)
  pointer-events auto
  .show-btn
    margin-top 2px
    margin-left -4px
    font-size 34px
    font-weight 600
    color var(--theme-color)
.small-container.hidden
  opacity 0
  transition all 0.5s ease-out
.small-container.show
  opacity 1
  transform translate(0,-50%)
  transition all 0.4s ease-in 0.4s

.music-info
  position absolute
  top 0
  left 20px
  width calc(100% - 40px)
  background var(--music-info-bg-color)
  border 4px solid rgba(0,0,0,.2)
  border-bottom-color transparent
  border-radius 15px 15px 0 0
  padding 10px 10px 10px 150px
  opacity 0
  transform translateY(0)
  transition transform .3s ease-in,opacity .3s ease-in
  z-index 0
  .title
    color var(--music-title-color)
    color #333
    font-weight 500
    font-size 22px
    text-shadow: -2px 0 #eee, 2px 0 #eee, 0 2px #eee, 0 -2px #eee;

.progress-container
  background-clip content-box
  background-color rgb(240,240,240)
  border-radius 5px
  cursor pointer
  padding 8px 0
  width 100%

  .progress
    background-color var(--theme-color)
    border-radius 5px
    height 4px
    width 0
    transition width .1s linear

@keyframes rotate
  0%
    transform rotate(0)
  to
    transform rotate(1turn)
</style>
