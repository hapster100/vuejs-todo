<template>
  <div class="tasks-list" v-if="this.category">
    <div class="tasks-list__title title">{{ category.title }}</div>
    <div v-if="tasks.length > 0">
      <div class="tasks-list__counter title">Done: {{ doneTaskCount }}/{{ tasks.length }}</div>
      <router-link v-for="task in tasks" :key="task.id"
        class="tasks-list__item item title"
        tag="div"
        :to="{name: 'r-task', params: {id: task.id}}"
      >
        <div class="title">
          {{ task.title }}
        </div>
        <checkbox :value="task.done" @toggle="toggleTask(task)" />
      </router-link>
    </div>
    <div v-else class="tasks-list__empty-message">
      No Tasks
    </div>
    <router-link
      class="tasks-list__add-btn btn"
      :to="{name: 'r-create-task', params: {categoryId: category.id}}" tag="div"
    >+</router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Checkbox from './Checkbox'
export default {
  name: 'Categories',
  components: { Checkbox },
  computed: {
    ...mapGetters([
      'categoryTasks'
    ]),
    tasks() {
      return this.categoryTasks(this.category.id)
    },
    category() {
      return this.$store.getters.category(this.$route.params.id)
    },
    doneTaskCount() {
      return this.tasks.filter(t => t.done).length
    }
  },
  methods: {
    toggleTask(task) {
      this.$store.dispatch('toggleDone', task)
    }
  },
  created() {
    if (this.category === undefined) {
      this.$router.push({name: 'r-categories'})
    }
  }
}
</script>

<style lang="scss" scoped>
  .tasks-list {
    &__empty-message {
      font-size: 30px;
      margin: 25px auto;
      text-align: center;
    }

    &__title {
      text-align: center;
      text-transform: capitalize;
      font-size: 40px;
      margin: 10px;
    }

    &__counter {
      text-align: right;
      margin-bottom: 5px;
    }

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
      align-items: center;
      padding-right: 10px;
      height: 60px;
      &:hover {
        background-color: #efefef;
      }

      .title {
        margin: 15px 20px;
      }
    }

    &__add-btn {
      margin: 15px auto;

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
