<template>
  <div id="app">
    <todo-header></todo-header>
    <main  class="container">
      <transition name="scroll" mode="out-in">
        <router-view/>
      </transition>
    </main>
  </div>
</template>

<script>
import TodoHeader from './components/Header'

export default {
  name: 'App',
  components: { TodoHeader }
}
</script>

<style lang="scss" scoped>
  .container {
    padding: 20px;
    max-width: 1000px;
    margin: 0 auto;
  }

  .scroll-enter-active, .scroll-leave-active {
    transition: all 0.2s ease-in-out;
  }

  .scroll-enter {
    opacity: 0;
    transform: translate(100vw);
    scale: 0;
  }

  .scroll-leave-to {
    opacity: 0;
    transform: translate(-100vw);
    scale: 0;
  }

</style>
