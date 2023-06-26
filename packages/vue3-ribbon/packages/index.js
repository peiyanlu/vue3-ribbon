import CSRibbon from './CSRibbon'
import QuickLaunchToolbar from './QuickLaunchToolbar'
import FileTabMenu from './FileTabMenu'
import RibbonTabs from './RibbonTabs'
import IconFont from './IconFont'
import IconSvgTest from './IconSvg'
import IconImg from './IconImg'
import RibbonBox from './RibbonBox'
import RibbonIcon from './RibbonIcon'
import RibbonButton from './RibbonButton'
import Separator from './Separator'
import Breaks from './Break'
import SplitButton from './SplitButton'
import Dropdown from './Dropdown'
import Dropmenu from './Dropmenu'
import ExclusiveBoxes from './ExclusiveBoxesGroup'
import Spinners from './Spinners'
import ToggleButtonsGroup from './ToggleButtonsGroup'
import ButtonsGroup from './ButtonsGroup'
import Checkbox from './Checkbox'
import Radios from './Radios'
import Group from './Group'
import ColorPickerCustom from './ColorPickerCustom'
import ColorPickerFree from './ColorPickerFree'
import ColorPicker from './ColorPicker'
import PulloutLayer from './PulloutLayer'
import Slider from './Slider'
import DragPopup from './DragPopup'
import RibbonBangs from './RibbonBangs'
import DragShrinkPopup from './DragShrinkPopup'
import DropdownSlider from './DropdownSlider'
import ExclusiveButtonsGroup from './ExclusiveButtonsGroup'

// config
import { clickoutside } from './config/directives'

const components = [
  CSRibbon,
  QuickLaunchToolbar,
  FileTabMenu,
  RibbonTabs,
  IconFont,
  IconSvgTest,
  IconImg,
  RibbonBox,
  RibbonIcon,
  RibbonButton,
  Separator,
  Breaks,
  SplitButton,
  Dropdown,
  Dropmenu,
  ExclusiveBoxes,
  Spinners,
  ToggleButtonsGroup,
  ButtonsGroup,
  Checkbox,
  Radios,
  Group,
  ColorPickerCustom,
  ColorPickerFree,
  ColorPicker,
  PulloutLayer,
  Slider,
  DragPopup,
  RibbonBangs,
  DragShrinkPopup,
  DropdownSlider,
  ExclusiveButtonsGroup,
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = (Vue, options = {}) => {
  window.popupEvt = new Vue()
  // 判断是否安装
  if (install.installed) return
  // 遍历注册组件
  components.forEach((component) => {
    Vue.component(component.name, component)
  })

  Vue.directive('clickoutside', clickoutside)
}

// 判断直接引入
if (Window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const CsRibbon = {
  version: '0.1.0',
  // 导出对象必须拥有install方法才能被安装
  install,
  // 具体的组件
  ...components,
}

export default CsRibbon
