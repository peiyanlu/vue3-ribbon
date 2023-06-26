import DragPopup from './src'

DragPopup.install = (Vue) => {
  Vue.component(DragPopup.name, DragPopup)
}

export default DragPopup
