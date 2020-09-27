<template>
  <div class="tasks-list">
    <router-link v-for="task in tasks" :key="task.id"
      class="tasks-list__item item title"
      tag="div"
      :to="{name: 'r-task', params: {id: task.id}}"
    >
      <div class="title">
        {{ task.title }}
      </div>
    </router-link>
    <router-link
      class="tasks-list__add-btn btn"
      :to="{name: 'r-create-task', params: {categoryId: this.$route.params.id}}" tag="div"
    >+</router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Categories',
  computed: {
    ...mapGetters([
      'categoryTasks'
    ]),
    tasks() {
      return this.categoryTasks(this.$route.params.id)
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  .tasks-list {
    margin-top: 10px;

    &__item {
      cursor: pointer;
      font-size: 26px;
      margin-bottom: 10px;
      border: 2px solid #cc2936;
      transition: all 0.1s ease-in;
      border-radius: 5px;
      box-shadow: 0 2px 2px 0 #22222a;
      display: flex;
      justify-content: space-between;
      &:hover {
        scale: 1.01;
        z-index: 2;
      }

      .title {
        margin: 15px 20px;
      }
    }

    &__add-btn {
      margin: 0 auto;

      display: flex;
      justify-content: center;
      align-items: center;

      width: 70px;
      height: 70px;
      border-radius: 50%;
      font-size: 50px;

      border-width: 5px;
    }
  }

</style>
