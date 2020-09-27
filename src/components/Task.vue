<template>
  <div class="task">
    <div class="task__title title">
      {{ task.title }}
    </div>
    <div class="task__info">
      <div class="task__info-field info-field">
        <span class="info-field__label">Description:</span> {{ task.description || 'No Description' }}
      </div>
      <div class="task__info-field info-field">
        <span class="info-field__label">Category:</span> {{ category }}
      </div>
      <div class="task__info-field  info-field">
        <span class="info-field__label">Status:</span> {{ task.done ? 'Done' : 'Not Done' }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
      padding: 15px 0;
      padding-left: 20px;
    }

    &__info {
      padding: 15px;
    }

    &__info-field {
      margin-bottom: 5px;
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
