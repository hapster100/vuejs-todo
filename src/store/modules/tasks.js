import taskStorage from '@/utils/taskStorage'

const state = {
  tasks: []
}
const mutations = {
  SET_TASKS(state, tasks) {
    state.tasks = tasks
  },
  ADD_TASK(state, task) {
    state.tasks.push(task)
  },
  DELETE_TASK(state, taskId) {
    state.tasks = state.tasks.filter(task => task.id !== taskId)
  }
}
const actions = {
  initTasks({commit}) {
    commit('SET_TASKS', taskStorage.loadTasks())
  },
  deleteCategoryTasks(store, categoryId) {
    store.getters.categoryTasks(categoryId).forEach(task => taskStorage.deleteTask(task.id))

    const newTasks = store.state.tasks.filter(task => task.categoryId !== categoryId)
    store.commit('SET_TASKS', newTasks)
  },
  addTask(store, task) {
    const newTask = taskStorage.saveTask(task)
    store.commit('ADD_TASK', newTask)
  },
  deleteTask(store, taskId) {
    taskStorage.deleteTask(taskId)
    store.commit('DELETE_TASK', taskId)
  },
  editTask(store, task) {
    taskStorage.editTask(task)

    const newTasks = store.state.tasks.map(t => t.id === task.id ? task : t)
    store.commit('SET_TASKS', newTasks)
  },
  toggleDone(store, task) {
    const toggledTasks = {...task, done: !task.done}
    taskStorage.editTask(toggledTasks)

    const newTasks = store.state.tasks.map(t => t.id === task.id ? toggledTasks : t)
    store.commit('SET_TASKS', newTasks)
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
