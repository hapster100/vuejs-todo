<template>
  <bordered-content class="create-task">
    <template v-slot:header-left>
      <div class="create-task__title title">Add Task</div>
    </template>
    <template v-slot:content>
      <full-input class="create-task__input" :value="title" @change="title = $event" :label="'Title:'" />
      <full-input class="create-task__input" :value="description" @change="description = $event" :label="'Description:'" :area="true" />
      <button @click="addBtnClick()" class="add-btn btn">Add Task</button>
    </template>
  </bordered-content>
</template>

<script>
import { mapActions } from 'vuex'
import FullInput from './FullInput'
import BorderedContent from './BorderedContent'
export default {
  components: { FullInput, BorderedContent },
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

    &__title {
      font-size: 40px;
    }

    &__input {
      padding: 10px 0;
    }

  }

  .add-btn {
    font-weight: bold;
    width: max-content;
    margin: 5px 0 0 auto;
  }
</style>
