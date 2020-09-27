<template>
  <div class="create-task">
    <div class="create-task__title title">Add Task</div>
    <full-input class="create-task__input" :value="title" @change="title = $event" :label="'Title:'" />
    <full-input class="create-task__input" :value="description" @change="description = $event" :label="'Description:'" :area="true" />
    <button @click="addBtnClick()" class="create-task__add-btn btn">Add Task</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import FullInput from './FullInput'
export default {
  components: { FullInput },
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

    &__input {
      padding: 15px;
    }

    &__add-btn {
      font-weight: bold;
      width: max-content;
      margin: 0 15px 15px auto;
    }
  }
</style>
