import Vue from 'vue'
import Vuex from 'vuex'

import tasks from './modules/tasks'
import categories from './modules/categories'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    tasks,
    categories
  }
})

store.dispatch('initTasks')
store.dispatch('initCategories')

export default store
