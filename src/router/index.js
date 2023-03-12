import Vue from 'vue'
import Router from 'vue-router'

import CreateCategory from '@/components/CreateCategory'
import CreateTask from '@/components/CreateTask'
import Categories from '@/components/Categories'
import Category from '@/components/Category'
import Task from '@/components/Task'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: window.location.pathname,
  routes: [
    {
      path: '/',
      component: Categories,
      name: 'r-categories'
    },
    {
      path: '/category/:id',
      component: Category,
      name: 'r-category'
    },
    {
      path: '/create/category',
      name: 'r-create-category',
      component: CreateCategory
    },
    {
      path: '/create/task/:categoryId',
      name: 'r-create-task',
      component: CreateTask
    },
    {
      path: '/task/:id',
      component: Task,
      name: 'r-task'
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
