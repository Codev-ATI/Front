import Vue from 'vue'
import App from './App.vue'

//Vue.prototype.host = "http://localhost:8080";
Vue.prototype.host = "https://qati.herokuapp.com";

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
Vue.use(VueMaterial)

import Router from './router/routes'
import VueRouter from "vue-router";
Vue.use(VueRouter)

import EventBus from './EventBus'
Vue.prototype.$bus = EventBus;

import axios from "axios";
axios.defaults.headers.common['Access-Control-Allow-Origin'] = "*";
axios.defaults.baseURL = Vue.prototype.host;


Vue.config.productionTip = false

new Vue({
  router: Router,
  render: h => h(App)
}).$mount('#app')
