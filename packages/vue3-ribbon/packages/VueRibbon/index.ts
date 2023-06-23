import { App } from 'vue'
import VueRibbon from './src/VueRibbon.vue'

export { VueRibbon }

export default {
  install(app: App) {
    app.component('VueRibbon', VueRibbon)
  },
}
