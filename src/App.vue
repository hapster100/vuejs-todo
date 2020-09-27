<template>
  <div id="app">
    <todo-header></todo-header>
    <main  class="container">
      <router-view/>
    </main>
  </div>
</template>

<script>
import TodoHeader from './components/Header'

export default {
  name: 'App',
  components: { TodoHeader },
  created() {
    this.$store.dispatch('initCategories')
    this.$store.dispatch('initTasks')
  }
}
</script>

<style lang="scss" scoped>
  .container {
    max-width: 1000px;
    margin: 0 auto;
  }
</style>
