import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/ja'

Vue.config.devtools = true
Vue.config.productionTip = false
Vue.use(ElementUI, { locale })

var vm = new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})

vm()
