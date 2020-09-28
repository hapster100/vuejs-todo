import uniqid from 'uniqid'

import storage from './storage'

const CATEGORY_ARR_KEY = 'todo:categories'

const saveCategory = title => {
  const id = uniqid.time()
  const category = { id, title }

  const ids = storage.loadItem(CATEGORY_ARR_KEY) || []
  storage.saveItem([...ids, category], CATEGORY_ARR_KEY)

  return category
}

const loadCategories = _ => storage.loadItem(CATEGORY_ARR_KEY) || []

const deleteCategory = categoryId => {
  const ids = storage.loadItem(CATEGORY_ARR_KEY) || []
  storage.saveItem(ids.filter(t => t.id !== categoryId), CATEGORY_ARR_KEY)
}

export default {
  saveCategory,
  loadCategories,
  deleteCategory
}
