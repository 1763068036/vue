import Vue from 'vue'
import App from './App.vue'
// import router from './router'

Vue.config.productionTip = false

//引入基础样式
import '@/assets/css/base.css'
//引入字体比例校验.
import './assets/js/font.js'

new Vue({
  render: h => h(App)
}).$mount('#app')
