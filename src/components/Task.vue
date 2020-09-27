<template>
  <bordered-content class="task">
    <template v-slot:header-left>
      <div class="task__title title">
        {{ task.title }}
      </div>
    </template>
    <template v-slot:header-right>
      <button class="btn delete-btn"
        @click.stop="deleteTask()">delete
      </button>
    </template>
    <template v-slot:content>
      <div class="info-field info-field">
        <span class="info-field__label">Description:</span> {{ task.description || 'No Description' }}
      </div>
      <div class="info-field info-field">
        <span class="info-field__label">Category:</span> {{ category }}
      </div>
      <div class="info-field  info-field">
        <span class="info-field__label">Status:</span>
        {{ task.done ? 'Done' : 'Not Done' }}
      </div>
    </template>
  </bordered-content>
</template>

<script>
import Checkbox from './Checkbox'
import BorderedContent from './BorderedContent'
export default {
  components: { Checkbox, BorderedContent },
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
    category() {
      return this.$store.getters.category(this.task.categoryId).title
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
  }
  .delete-btn {
    &:hover {
      border-color: white !important;
    }
  }
  .info-field {
    &__label {
      display: inline-block;
      font-weight: bold;
      width: 150px;
    }
  }
</style>
