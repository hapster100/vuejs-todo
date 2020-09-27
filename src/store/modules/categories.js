import categoriesStorage from '@/utils/categoriesStorage'

const state = {
  categories: []
}
const mutations = {
  SET_CATEGORIES(state, categories) {
    state.categories = categories
  }
}
const actions = {
  initCategories({commit}) {
    commit('SET_CATEGORIES', categoriesStorage.loadCategories())
  },
  addCategory(store, title) {
    categoriesStorage.saveCategory(title)

    const newCategories = categoriesStorage.loadCategories()

    store.commit('SET_CATEGORIES', newCategories)
  },
  deleteCategory(store, categoryId) {
    store.dispatch('deleteCategoryTasks', categoryId)
    categoriesStorage.deleteCategory(categoryId)
    store.commit('SET_CATEGORIES', categoriesStorage.loadCategories())
  }
}
const getters = {
  categories(state) {
    return state.categories
  },
  category(state) {
    return id => state.categories.find(c => c.id === id)
  }
}

export default {
  actions,
  getters,
  mutations,
  state
}
