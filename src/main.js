import Vue from 'vue'
import App from './App'

import router from './router'
import store from './store'

import './app.scss'

import taskStorage from './utils/taskStorage'
import categoriesStorage from './utils/categoriesStorage'

Vue.config.productionTip = false

window.ts = taskStorage
window.cs = categoriesStorage

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
