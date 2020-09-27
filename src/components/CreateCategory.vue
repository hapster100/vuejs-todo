<template>
  <div>
    <bordered-content class="create-category">
      <template v-slot:header-left>
        <div class="create-category__title title">Add Category</div>
      </template>
      <template v-slot:content>
        <full-input :value="title" :label="'Title:'" @change="title = $event" />
        <button @click="addBtnClick()" class="add-btn btn">Add Category</button>
      </template>
    </bordered-content>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import FullInput from './FullInput'
import BorderedContent from './BorderedContent'
export default {
  components: { FullInput, BorderedContent },
  data() {
    return {
      title: ''
    }
  },
  methods: {
    ...mapActions([
      'addCategory'
    ]),
    addBtnClick() {
      this.addCategory(this.title)
      this.$router.push({name: 'r-categories'})
    }
  }
}
</script>

<style lang="scss" scoped>
  .create-category {
    margin-top: 10px;
    &__title {
      font-size: 40px;
    }
  }

  .add-btn {
    font-weight: bold;
    width: max-content;
    margin: 15px 0 0 auto;
  }
</style>
