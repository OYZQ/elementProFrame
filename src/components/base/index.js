// 弹窗
import MyPopup from './MyPopup/MyPopup'
// 数字输入框
import MyInputControlNum from './MyInputControlNum'

const components = [
  MyInputControlNum,
  MyPopup
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}