import Bangs from './src'

Bangs.install = (Vue) => {
  Vue.component(Bangs.name, Bangs)
}

export default Bangs
