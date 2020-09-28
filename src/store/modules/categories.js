import categoriesStorage from '@/utils/categoriesStorage'

const state = {
  categories: []
}
const mutations = {
  SET_CATEGORIES(state, categories) {
    state.categories = categories
  },
  ADD_CATEGORY(state, category) {
    state.categories.push(category)
  }
}
const actions = {
  initCategories({commit}) {
    commit('SET_CATEGORIES', categoriesStorage.loadCategories())
  },
  addCategory(store, title) {
    const category = categoriesStorage.saveCategory(title)
    store.commit('ADD_CATEGORY', category)
  },
  deleteCategory(store, categoryId) {
    store.dispatch('deleteCategoryTasks', categoryId)
    categoriesStorage.deleteCategory(categoryId)

    const newCategories = store.state.categories.filter(c => c.id !== categoryId)
    store.commit('SET_CATEGORIES', newCategories)
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
