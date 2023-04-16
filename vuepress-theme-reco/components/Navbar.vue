<template>
  <header
    ref="navbar"
    class="navbar"
    :class="{ fixed: navbarFixed }"
    @mouseenter="toggleNavBarBg(true)"
    @mouseleave="toggleNavBarBg(false)"
  >
    <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')" />
    <router-link :to="$localePath" class="home-link">
      <img
        class="logo"
        v-if="$themeConfig.logo"
        :src="$withBase($themeConfig.logo)"
        :alt="$siteTitle"
      />
      <span ref="siteName" class="site-name" v-if="$siteTitle">{{
        $siteTitle
      }}</span>
    </router-link>
    <div
      class="links"
      :style="
        linksWrapMaxWidth
          ? {
              'max-width': linksWrapMaxWidth + 'px',
            }
          : {}
      "
    >
      <Mode />
      <AlgoliaSearchBox v-if="isAlgoliaSearch" :options="algolia" />
      <SearchBox
        v-else-if="
          $themeConfig.search !== false && $frontmatter.search !== false
        "
      />
      <NavLinks class="can-hide" />
    </div>
  </header>
</template>

<script>
import { defineComponent, ref, onMounted, computed } from "vue";
import AlgoliaSearchBox from "@AlgoliaSearchBox";
import SearchBox from "@SearchBox";
import SidebarButton from "@theme/components/SidebarButton";
import NavLinks from "@theme/components/NavLinks";
import Mode from "@theme/components/Mode";
import { useInstance } from "@theme/helpers/composable";
function throttle(func, delay) {
  let timer = null;
  let startTime = Date.now();

  return function () {
    const curTime = Date.now();
    const remaining = delay - (curTime - startTime);
    const context = this;
    const args = arguments;

    clearTimeout(timer);
    if (remaining <= 0) {
      func.apply(context, args);
      startTime = Date.now();
    } else {
      timer = setTimeout(func, remaining);
    }
  };
}
export default defineComponent({
  components: { SidebarButton, NavLinks, SearchBox, AlgoliaSearchBox, Mode },
  data() {
    return {
      navbarFixed: false,
      isHome: true,
    };
  },
  watch: {
    $route: {
      handler(to, from) {
        if (to.path == "/") {
          this.isHome = true;
          this.navbarFixed = false;
          console.log(this.isHome, this.navbarFixed);
          return;
        }
        this.isHome = false;
        this.navbarFixed = true;
        console.log(this.isHome, this.navbarFixed);
      },
      immediate: true,
    },
  },
  methods: {
    toggleNavBarBg(isFocus) {
      if (this.$refs.navbar.classList.contains("fixed")) return;
      if (isFocus) this.$refs.navbar.classList.add("focus");
      else this.$refs.navbar.classList.remove("focus");
    },
    handleNavbarBg() {
      if (!this.isHome) return;
      this.navbarFixed = window.pageYOffset > window.innerHeight - 60;
    },
  },

  mounted() {
    window.addEventListener("scroll", throttle(this.handleNavbarBg), false);
  },
  setup(props, ctx) {
    const instance = useInstance();
    const linksWrapMaxWidth = ref(null);
    const algolia = computed(() => {
      return (
        instance.$themeLocaleConfig.algolia ||
        instance.$themeConfig.algolia ||
        {}
      );
    });

    const isAlgoliaSearch = computed(() => {
      return algolia.value && algolia.value.apiKey && algolia.value.indexName;
    });

    function css(el, property) {
      // NOTE: Known bug, will return 'auto' if style value is 'auto'
      const win = el.ownerDocument.defaultView;
      // null means not to return pseudo styles
      return win.getComputedStyle(el, null)[property];
    }

    onMounted(() => {
      const MOBILE_DESKTOP_BREAKPOINT = 719; // refer to config.styl
      const NAVBAR_VERTICAL_PADDING =
        parseInt(css(instance.$el, "paddingLeft")) +
        parseInt(css(instance.$el, "paddingRight"));

      const handleLinksWrapWidth = () => {
        if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
          linksWrapMaxWidth.value = null;
        } else {
          linksWrapMaxWidth.value =
            instance.$el.offsetWidth -
            NAVBAR_VERTICAL_PADDING -
            ((instance.$refs.siteName && instance.$refs.siteName.offsetWidth) ||
              0);
        }
      };
      handleLinksWrapWidth();
      window.addEventListener("resize", handleLinksWrapWidth, false);
    });

    return {
      linksWrapMaxWidth,
      algolia,
      isAlgoliaSearch,
      css,
    };
  },
});
</script>

<style lang="stylus">
$navbar-vertical-padding = 0.7rem;
$navbar-horizontal-padding = 1.5rem;

.navbar {
  padding: $navbar-vertical-padding $navbar-horizontal-padding;
  line-height: $navbarHeight - 1.4rem;
  box-shadow: var(--box-shadow);
  background: var(--background-color);

  a, span, img {
    display: inline-block;
  }

  .logo {
    height: $navbarHeight - 1.4rem;
    min-width: $navbarHeight - 1.4rem;
    margin-right: 0.8rem;
    vertical-align: top;
    border-radius: 50%;
  }

  .site-name {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--text-color);
    position: relative;
  }

  .links {
    padding-left: 1.5rem;
    box-sizing: border-box;
    white-space: nowrap;
    font-size: 0.9rem;
    position: absolute;
    right: $navbar-horizontal-padding;
    top: $navbar-vertical-padding;
    display: flex;
    background-color: var(--background-color);

    .search-box {
      flex: 0 0 auto;
      vertical-align: top;
    }
  }
}

@media (max-width: $MQMobile) {
  .navbar {
    padding-left: 4rem;

    .can-hide {
      display: none;
    }

    .links {
      padding-left: 0.2rem;
    }
  }
}
</style>
