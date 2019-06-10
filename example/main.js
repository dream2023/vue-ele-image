import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import ElImage from '../src/index'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(ElImage, {
  lazy: true,
  fit: 'cover',
  color: '#ffffff',
  backgroundColor: '#409EFF'
})

new Vue({
  render: h => h(App)
}).$mount('#app')
