import ExclusiveBoxes from './src/index'

ExclusiveBoxes.install = (Vue) => {
  Vue.component(ExclusiveBoxes.name, ExclusiveBoxes)
}

export default ExclusiveBoxes
