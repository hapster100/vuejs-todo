<template>
  <div class="task">
    <div class="task__title title">
      {{ task.title }}
      <button class="btn task__delete-btn"
        @click.stop="deleteTask()">delete
      </button>
    </div>
    <div class="task__info">
      <div class="task__info-field info-field">
        <span class="info-field__label">Description:</span> {{ task.description || 'No Description' }}
      </div>
      <div class="task__info-field info-field">
        <span class="info-field__label">Category:</span> {{ category }}
      </div>
      <div class="task__info-field  info-field">
        <span class="info-field__label">Status:</span>
        {{ task.done ? 'Done' : 'Not Done' }}
      </div>
    </div>
  </div>
</template>

<script>
import Checkbox from './Checkbox'
export default {
  components: { Checkbox },
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
    border: 2px solid #cc2936;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    &__title {
      font-size: 40px;
      color: white;
      background-color: #cc2936;
      padding: 15px 20px;
      padding-left: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__info {
      padding: 15px;
    }

    &__info-field {
      margin-bottom: 5px;
    }

    &__delete-btn {
      &:hover {
        border-color: white !important;
      }
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
