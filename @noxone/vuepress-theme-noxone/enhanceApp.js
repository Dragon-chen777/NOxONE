/* eslint-disable no-proto */
import postMixin from '@theme/mixins/posts'
import localMixin from '@theme/mixins/locales'
import { interceptRouterError, fixRouterError404 } from '@theme/helpers/other'

export default ({ Vue, siteData, isServer, router }) => {
	Vue.mixin(postMixin)
	Vue.mixin(localMixin)
	// if (!isServer) {
	//   addScriptToHead('//kit.fontawesome.com/51b01de608.js')
	//   registerCodeThemeCss(siteData.themeConfig.codeTheme)
	// }

	interceptRouterError(router)
	fixRouterError404(router)
}
