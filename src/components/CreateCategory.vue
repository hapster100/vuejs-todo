<template>
  <div class="create-category">
    <div class="create-category__title title">Add Category</div>
    <div class="create-category__form">
      <div class="input-label">Title:</div>
      <div class="input-wrapper">
        <input v-model="title" class="input" />
      </div>
    </div>
    <button @click="addBtnClick()" class="create-category__add-btn btn">Add Category</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
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
      align-items: center;

      .input-label {
        margin-right: 10px;
      }
      .input-wrapper {
        flex-grow: 1;
      }
      .input {
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
