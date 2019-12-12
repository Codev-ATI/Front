import Vue from 'vue'
import App from './App.vue'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import './assets/theme.scss'

import Router from './router/routes'
import VueRouter from "vue-router";

Vue.use(VueRouter)
Vue.use(VueMaterial)

Vue.config.productionTip = false

new Vue({
  router: Router,
  render: h => h(App)
}).$mount('#app')
