<template>
  <div v-if="this.task">
    <router-link tag="div" class="back-to" :to="{name: 'r-category', params: { id: this.task.categoryId }}">
      <icon class="back-to__icon" :icon="'keyboard_arrow_left'" :size="50"/>
      <span class="back-to__title" >{{ categoryTitle }}</span>
    </router-link>
    <bordered-content class="task">
      <template v-slot:header-left>
        <div class="task__title title">
          {{ task.title }}
        </div>
      </template>
      <template v-slot:header-right>
        <button class="btn delete-btn"
          @click.stop="deleteTask()">
          <icon icon="delete" />
        </button>
      </template>
      <template v-slot:content>
        <div class="info-field info-field">
          <span class="info-field__label">Description:</span> {{ task.description || 'No Description' }}
        </div>
        <div class="info-field info-field">
          <span class="info-field__label">Category:</span> {{ categoryTitle }}
        </div>
        <div class="info-field  info-field">
          <span class="info-field__label">Status:</span>
          {{ task.done ? 'Done' : 'Not Done' }}
        </div>
      </template>
    </bordered-content>
  </div>
</template>

<script>
import Checkbox from './Checkbox'
import BorderedContent from './BorderedContent'
import Icon from './Icon'
export default {
  components: { Checkbox, BorderedContent, Icon },
  methods: {
    deleteTask() {
      const { categoryId } = this.task
      this.$store.dispatch('deleteTask', this.task.id)
      this.$router.push({name: 'r-category', params: {id: categoryId}})
    },
    toggleTask() {
      this.$store.dispatch('toggleDone', this.task)
    }
  },
  computed: {
    task() {
      const id = this.$route.params.id
      return this.$store.getters.task(id)
    },
    categoryTitle() {
      return this.$store.getters.category(this.task.categoryId).title
    }
  },
  created() {
    if (this.task === undefined) {
      this.$router.push({name: 'r-categories'})
    }
  }
}
</script>

<style lang="scss" scoped>
  .task {
    margin-top: 10px;
    &__title {
      font-size: 40px;
    }
  }
  .info-field {
    margin-bottom: 5px;
    display: flex;
    &__label {
      display: inline-block;
      font-weight: bold;
      min-width: 150px;
    }
  }

  .delete-btn {
    &:hover {
      border-color: white !important;
    }
  }

  .back-to {
    margin-top: 10px;
    cursor: pointer;

    width: max-content;

    border-radius: 20px;
    display: flex;
    align-items: center;
    font-size: 35px;
    padding: 5px 10px;

    &__title {
      transform: translateY(-2px);
    }

    &__icon {
      margin: -15px;
      margin-right: -10px;
    }

    &:hover {
      background-color: #eee;
    }
  }
</style>
