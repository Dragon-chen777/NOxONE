<template>
  <div class="music-container" :class="{playing: isPlaying}" :style="containerSty">
    <div class="music-info">
      <div class="title">{{ curMusic.title }}</div>
      <div class="progress-container" @click="setProgress">
        <div class="progress" :style="{width: playProgress}"></div>
      </div>
    </div>
    <audio
      ref="audio"
      :src="curMusic.link" 
      @timeupdate="updateProgress"
      @ended="playMusic('next')"
    />
    <div class="music-cover">
      <img :src="curMusic.cover"/>
    </div>
    <div class="control-pannel">
      <div class="action-btn fas fa-backward" @click="playMusic('pre')"></div>
      <div class="action-btn action-btn-big fas" :class="[isPlaying ? 'fa-pause' : 'fa-play']" @click="playMusic('play')"></div>
      <div class="action-btn fas fa-forward" @click="playMusic('next')"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isPlaying: false,
      playProgress: 0,
      curMusicIdx: 0,
      musicList: MUSIC_LIST,
      
      // 样式
      containerSty: {
        zoom: CONTAINER.zoom,
        '--container-bg-color': CONTAINER.containerBg,
        '--theme-color': CONTAINER.themeColor,
        '--music-info-bg-color': CONTAINER.musicInfoBg,
        '--music-title-color': CONTAINER.musicTitleColor
      }
    }
  },
  computed: {
    curMusic() {
      return this.musicList[this.curMusicIdx]
    }
  },
  mounted() {
    const isMobile = !!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    if (isMobile) containerSty.zoom*=5
  },
  methods: {
    playMusic(cmd) {
      if (cmd === 'play') {
        this.isPlaying ? this.$refs.audio.pause() : this.$refs.audio.play()
        this.isPlaying = !this.isPlaying
        return
      }
      if (cmd === 'pre') {
        if (this.curMusicIdx === 0) this.curMusicIdx = this.musicList.length - 1
        else this.curMusicIdx--
        this.$nextTick(() => {
          this.$refs.audio.play()
          this.isPlaying = true
        })
        return
      }
      if (cmd === 'next') {
        this.curMusicIdx = ++this.curMusicIdx % this.musicList.length
        this.$nextTick(() => {
          this.$refs.audio.play()
          this.isPlaying = true
        })
        return
      }
    },
    updateProgress(e) {
      const { duration, currentTime } = e.target
      this.playProgress = `${(currentTime / duration) * 100}%`
    },
    setProgress(e) {
      const progressContainerWidth = e.target.clientWidth
      const clickX = e.offsetX
      const duration = this.$refs.audio.duration
      this.$refs.audio.currentTime = (clickX / progressContainerWidth) * duration
    }
  }
}
</script>
<style lang="stylus" scoped>
@import url('https://fonts.googleapis.com/css?family=Lato&display=swap')
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css')

* 
  box-sizing border-box

.music-container
  position fixed
  left 0
  bottom 50px
  display flex
  background var(--container-bg-color)
  border: 4px solid rgba(0,0,0,0.2)
  box-shadow:
    2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
    100px 100px 80px rgba(0, 0, 0, 0.07)

  border-radius 15px
  padding 20px 30px
  z-index 999
.music-cover
  position relative
  width 110px
  &::after 
    position absolute
    left 50%
    bottom 100%
    width 15px
    height 15px
    content ''
    background-color var(--container-bg-color)
    border-radius 50%
    transform: translate(-50%, 50%)
  img 
    border-radius 50%
    height 110px
    width inherit
    object-fit cover
    position absolute
    bottom 0
    left 0
    animation: rotate 3s linear infinite
    animation-play-state: paused

.control-pannel 
  display flex
  align-items center
  justify-content center

  .action-btn
    border 0
    color var(--theme-color)
    font-size 20px
    cursor pointer
    padding 10px
    margin 0 20px
    z-index 1
    &:focus
      outline 0
  .action-btn-big
    color var(--theme-color)
    font-size 30px

.music-container.playing .music-cover img
  animation-play-state running

.music-info 
  position: absolute;
  top: 0;
  left: 20px;
  /* 父元素宽度-40px */
  width: calc(100% - 40px);
  background var(--music-info-bg-color)
  border: 4px solid rgba(0,0,0,0.2)
  border-bottom: 4px solid #fff

  border-radius: 15px 15px 0 0;
  padding: 10px 10px 10px 150px;
  /* 没播放时默认隐藏 */
  opacity: 0;
  transform: translateY(0%);
  transition: transform 0.3s ease-in, opacity 0.3s ease-in;
  z-index: 0;
  .title
    color var(--music-title-color)
    font-weight 600
.music-container.playing 
  .music-info 
    opacity: 1;
    transform: translateY(-100%);


.progress-container
  background-color: #fff;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 0;
  height: 4px;
  width: 100%;


.progress 
  background-color: var(--theme-color);
  border-radius: 5px;
  height: 100%;
  width: 0%;
  transition: width 0.1s linear;


@keyframes rotate
  from 
    transform rotate(0)
  to
   transform rotate(360deg)


</style>
