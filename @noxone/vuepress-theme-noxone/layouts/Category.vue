<template>
	<Common class="categories-wrapper" :sidebar="false">
		<!-- 分类集合 -->
		<ul class="category-wrapper">
			<li class="category-item" :class="title == item.name ? 'active' : ''" v-for="(item, index) in $categoriesList" v-show="item.pages.length > 0" :key="index">
				<router-link :to="item.path">
					<span class="category-name">{{ item.name }}</span>
					<span class="post-num" :style="{ backgroundColor: getOneColor() }">{{ item.pages.length }}</span>
				</router-link>
			</li>
		</ul>

		<!-- 博客列表 -->
		<note-abstract class="list" :data="posts" @paginationChange="paginationChange"></note-abstract>
	</Common>
</template>

<script>
import { defineComponent, computed } from 'vue'
import Common from '@theme/components/Common'
import NoteAbstract from '@theme/components/NoteAbstract'
import { sortPostsByStickyAndDate, filterPosts } from '@theme/helpers/postData'
import { getOneColor } from '@theme/helpers/other'
import { useInstance } from '@theme/helpers/composable'

export default defineComponent({
	components: { Common, NoteAbstract },

	setup(_, ctx) {
		const instance = useInstance()

		const posts = computed(() => {
			let posts = instance.$currentCategories.pages
			posts = filterPosts(posts)
			sortPostsByStickyAndDate(posts)
			return posts
		})

		const title = computed(() => {
			return instance.$currentCategories.key
		})

		const getCurrentTag = (tag) => {
			ctx.emit('currentTag', tag)
		}

		const paginationChange = (page) => {
			setTimeout(() => {
				window.scrollTo(0, 0)
			}, 100)
		}

		return {
			posts,
			title,
			getOneColor,
			getCurrentTag,
			paginationChange,
		}
	},
})
</script>

<style src="../styles/theme.styl" lang="stylus"></style>
<style src="prismjs/themes/prism-tomorrow.css"></style>
<style lang="stylus" scoped>
.categories-wrapper
  max-width: $contentWidth;
  margin: 0 auto;
  padding: 4.6rem 2.5rem 0;
  .category-wrapper {
    list-style none
    padding-left 0
    .category-item {
      vertical-align: middle;
      margin: 4px 8px 10px;
      display: inline-block;
      cursor: pointer;
      border-radius: $borderRadius
      font-size: 13px;
      box-shadow var(--box-shadow)
      transition: all .5s
      background-color var(--background-color)
      &:hover, &.active {
        background $accentColor
        a span.category-name {
          color #fff
          .post-num {
            color $accentColor
          }
        }
      }
      a {
        display flex
        box-sizing border-box
        width 100%
        height 100%
        padding: 8px 14px;
        justify-content: space-between
        align-items center
        color: #666
        .post-num {
          margin-left 4px
          width 1.2rem;
          height 1.2rem
          text-align center
          line-height 1.2rem
          border-radius $borderRadius
          font-size .7rem
          color #fff
        }
      }
    }
  }

@media (max-width: $MQMobile)
  .categories-wrapper
    padding: 4.6rem 1rem 0;
  .page-edit
    .edit-link
      margin-bottom .5rem
    .last-updated
      font-size .8em
      float none
      text-align left
</style>
