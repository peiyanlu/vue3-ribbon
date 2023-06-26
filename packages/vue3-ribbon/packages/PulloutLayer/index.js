import PulloutLayer from './src/index'

PulloutLayer.install = (Vue) => {
  Vue.component(PulloutLayer.name, PulloutLayer)
}

export default PulloutLayer
