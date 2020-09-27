const saveItem = (obj, key) => localStorage.setItem(key, JSON.stringify(obj))
const loadItem = key => JSON.parse(localStorage.getItem(key))
const deleteItem = key => localStorage.removeItem(key)

export default {
  saveItem,
  loadItem,
  deleteItem
}
