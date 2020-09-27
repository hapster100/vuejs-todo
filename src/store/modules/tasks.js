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
  },
  deleteTask(store, taskId) {
    taskStorage.deleteTask(taskId)
    store.commit('SET_TASKS', taskStorage.loadTasks())
  },
  editTask(store, task) {
    taskStorage.editTask(task)
    store.commit('SET_TASKS', taskStorage.loadTasks())
  },
  toggleDone(store, task) {
    taskStorage.editTask({...task, done: !task.done})
    store.commit('SET_TASKS', taskStorage.loadTasks())
  }
}
const getters = {
  categoryTasks(state) {
    return categoryId => state.tasks.filter(t => t.categoryId === categoryId)
  },
  task() {
    return id => state.tasks.find(t => t.id === id)
  }
}

export default {
  actions,
  getters,
  mutations,
  state
}
