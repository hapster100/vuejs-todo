<template>
  <header class="header">
    <router-link
      tag="span"
      class="header__title title"
      :to="{name: 'r-categories'}"
    >
      ToDoListApp
    </router-link>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .header {
    height: 60px;
    padding: 0 40px;
    background-color: #22222a;
    color: #fff;
    display: flex;
    align-items: center;
    box-shadow: 0 0 5px 1px #22222a;

    &__title {
      cursor: pointer;
      font-size: 36px;
      font-weight: bold;
    }
  }
</style>
