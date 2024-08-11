<template>
	<div class="abstract-item" @click="$router.push(item.path)">
		<reco-icon v-if="item.frontmatter.sticky" icon="reco-sticky" />
		<div class="cover-wrap">
			<div class="cover" :style="`background-image: url(${item.frontmatter.cover || coverList[(coverList.length * Math.random()) | 0]})`" />
		</div>
		<div class="abstract-item-content">
			<div class="title">
				<reco-icon v-if="item.frontmatter.keys" icon="reco-lock" />
				<router-link :to="item.path">{{ item.title }}</router-link>
			</div>
			<div class="abstract" v-html="item.excerpt"></div>
			<PageInfo :pageInfo="item" :currentTag="currentTag"> </PageInfo>
		</div>
	</div>
</template>

<script>
import { defineComponent } from 'vue'
import { RecoIcon } from '@vuepress-reco/core/lib/components'
import PageInfo from './PageInfo'
const BASE_URL = 'https://dragon-chen777.github.io/assets/images/祢豆子'

export default defineComponent({
	components: { PageInfo, RecoIcon },
	props: ['item', 'currentPage', 'currentTag'],
	data() {
		return {
			coverList: [
				`${BASE_URL}/7.jpg`,
				`${BASE_URL}/8.jpg`,
				`${BASE_URL}/6.jpg`,
				`${BASE_URL}/4.jpg`,
				`${BASE_URL}/3.jpg`,
				`${BASE_URL}/2.jpg`,
				`${BASE_URL}/9.jpg`,
				`${BASE_URL}/10.jpg`,
				`${BASE_URL}/12.jpg`,
				`${BASE_URL}/15.jpg`,
			],
		}
	},
})
</script>

<style lang="stylus" scoped>
.abstract-item {
  position: relative;
  margin: 0 auto 20px;
  padding: 16px 20px;
  width: 100%;
  overflow: hidden;
  border-radius: $borderRadius;
  box-shadow: var(--box-shadow);
  box-sizing: border-box;
  transition: all 0.3s;
  background-color: var(--background-color);
  cursor: pointer;
  display flex

  > * {
    pointer-events: auto;
  }

  .reco-sticky {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    color: $accentColor;
    font-size: 2.4rem;
  }

  &:hover {
    box-shadow: var(--box-shadow-hover);
    .cover-wrap {
      .cover {
        transform scale(1)
      }
    }
    .title {
      &:after {
      visibility: visible;
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }
    }
  }
  .cover-wrap {
    width 240px
    height 210px
    border-radius 10px
    overflow hidden
  }
  .cover {
    width 100%
    height 100%
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transform scale(1.2)
    transition transform 0.5s
  }
  .abstract-item-content {
    margin-left 40px
    // width 100%
    display flex
    flex-direction column
    // align-items center
    justify-content center
  }

  .title {
    position: relative;
    font-size: 1.28rem;
    line-height: 46px;
    display: inline-block;

    a {
      color: var(--text-color);
    }

    .reco-lock {
      font-size: 1.28rem;
      color: $accentColor;
    }

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: $accentColor;
      visibility: hidden;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      transition: 0.3s ease-in-out;
    }

    &:hover a {
      color: $accentColor;
    }

  }

  .tags {
    .tag-item {
      &.active {
        color: $accentColor;
      }

      &:hover {
        color: $accentColor;
      }
    }
  }
}

@media (max-width: $MQMobile) {
  .tags {
    display: block;
    margin-top: 1rem;
    margin-left: 0 !important;
  }
}
</style>
