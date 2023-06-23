import { VueRibbon } from './VueRibbon'

const components = [VueRibbon]

const install = (Vue) => {
  components.forEach((component) => {
    Vue.components()
  })
}
