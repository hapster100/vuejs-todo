import uniqid from 'uniqid'

import storage from './storage'

const TASK_BASE_KEY = 'todo:task:'
const TASK_ARR_KEY = 'todo:tasks'

const taskkey = id => `${TASK_BASE_KEY}${id}`

const saveTask = task => {
  const id = uniqid.time()
  const key = taskkey(id)

  const ids = storage.loadItem(TASK_ARR_KEY) || []
  storage.saveItem([...ids, id], TASK_ARR_KEY)

  storage.saveItem({
    ...task, id
  }, key)
}

const loadTasks = _ => {
  const ids = storage.loadItem(TASK_ARR_KEY) || []
  return ids.map(taskId => storage.loadItem(taskkey(taskId)))
}

const editTask = editedTask => {
  const key = taskkey(editedTask.id)
  storage.saveItem(editedTask, key)
}

const deleteTask = taskId => {
  const key = taskkey(taskId)
  const ids = storage.loadItem(TASK_ARR_KEY) || []
  storage.saveItem(ids.filter(id => id !== taskId), TASK_ARR_KEY)
  storage.deleteItem(key)
}

export default {
  saveTask,
  loadTasks,
  editTask,
  deleteTask
}
