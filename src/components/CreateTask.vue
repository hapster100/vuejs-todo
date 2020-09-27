<template>
  <div class="create-task">
    <div class="create-task__title title">Add Task</div>
    <div class="create-task__form">
      <div class="input-label">Title:</div>
      <div class="input-wrapper">
        <input v-model="title" class="input" />
      </div>
    </div>
    <div class="create-task__form">
      <div class="input-label">Description:</div>
      <div class="input-wrapper">
        <textarea v-model="description" class="input" />
      </div>
    </div>
    <button @click="addBtnClick()" class="create-task__add-btn btn">Add Task</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      title: '',
      description: ''
    }
  },
  methods: {
    ...mapActions([
      'addTask'
    ]),
    addBtnClick() {
      const { categoryId } = this.$route.params
      const { title, description } = this
      this.addTask({
        title,
        description,
        categoryId,
        done: false
      })
      this.$router.push({name: 'r-category', params: { id: categoryId }})
    }
  }
}
</script>

<style lang="scss" scoped>
  .create-task {
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

    &__form {
      padding: 15px;
      display: flex;
      align-items: flex-start;

      .input-label {
        margin-right: 10px;
        margin-top: 5px;
        width: 150px;
      }
      .input-wrapper {
        flex-grow: 1;
      }
      .input {
        min-height: 38px;
        resize: vertical;
        width: 100%;
      }
    }

    &__add-btn {
      font-weight: bold;
      width: max-content;
      margin: 0 15px 15px auto;
    }
  }
</style>
