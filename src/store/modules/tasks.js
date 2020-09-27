import taskStorage from '@/utils/taskStorage'

const state = {
  tasks: []
}
const mutations = {
  SET_TASKS(state, tasks) {
    state.tasks = tasks
  }
}
const actions = {
  initTasks({commit}) {
    commit('SET_TASKS', taskStorage.loadTasks())
  },
  deleteCategoryTasks(store, categoryId) {
    store.getters.categoryTasks(categoryId).forEach(task => taskStorage.deleteTask(task.id))
    store.commit('SET_TASKS', taskStorage.loadTasks())
  },
  addTask(store, task) {
    taskStorage.saveTask(task)
    store.commit('SET_TASKS', taskStorage.loadTasks())
  }
}
const getters = {
  categoryTasks(state) {
    return categoryId => state.tasks.filter(t => t.categoryId === categoryId)
  }
}

export default {
  actions,
  getters,
  mutations,
  state
}
