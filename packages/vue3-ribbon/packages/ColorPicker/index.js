import ColorPicker from './src/index'

ColorPicker.install = function (Vue) {
  Vue.component(ColorPicker.name, ColorPicker)
}

export default ColorPicker
