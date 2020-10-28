import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './Routes'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)
Vue.config.productionTip = false
Vue.use(VueRouter)
const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})
new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
