import EleImage from './EleImage'

const Plugin = {}

Plugin.install = function(Vue, params = {}) {
  Vue.prototype.$EleImageParams = params
  Vue.component(EleImage.name, EleImage)
}

if (typeof window !== 'undefined' && window.Vue) {
  Plugin.install(window.Vue)
}

export { EleImage }
export default Plugin
