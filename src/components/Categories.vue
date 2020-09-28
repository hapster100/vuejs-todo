<template>
  <div class="categories-list">
    <div v-if="categories.length > 0">
      <router-link v-for="category in categories" :key="category.id"
        class="categories-list__item item title"
        tag="div"
        :to="{name: 'r-category', params: {id: category.id}}"
      >
        <div class="title">
          {{ category.title }}
        </div>
        <button class="btn categories-list__delete-btn"
          @click.stop="deleteCategory(category.id)">
          <icon icon="delete" :size="20" />
        </button>
      </router-link>
    </div>
    <div v-else class="categories-list__empty-message">
      No Categories
    </div>
    <router-link
      class="categories-list__add-btn btn"
      :to="{name: 'r-create-category'}" tag="div"
    >+</router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Icon from './Icon'
export default {
  name: 'Categories',
  components: { Icon },
  computed: {
    ...mapGetters([
      'categories'
    ])
  },
  methods: {
    ...mapActions([
      'deleteCategory'
    ])
  }
}
</script>

<style lang="scss" scoped>
  .categories-list {
    margin-top: 10px;

    &__empty-message {
      font-size: 30px;
      margin: 25px auto;
      text-align: center;
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
      &:hover {
        background-color: #f5f5f5;
      }

      .title {
        margin: 15px 20px;
        font-size: 28px;
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

    &__delete-btn {
      margin: 10px;
      background-color: rgba(0,0,0,0);
    }
  }

</style>
