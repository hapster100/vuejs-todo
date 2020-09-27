<template>
  <div class="categories-list">
    <router-link v-for="category in categories" :key="category.id"
      class="categories-list__item item title"
      tag="div"
      :to="{name: 'r-category', params: {id: category.id}}"
    >
      <div class="title">
        {{ category.title }}
      </div>
      <button class="btn categories-list__delete-btn"
        @click.stop="deleteCategory(category.id)">delete</button>
    </router-link>
    <router-link
      class="categories-list__add-btn btn"
      :to="{name: 'r-create-category'}" tag="div"
    >+</router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Categories',
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
        scale: 1.01;
        z-index: 2;
      }

      .title {
        margin: 15px 20px;
      }
    }

    &__add-btn {
      margin: 0 auto;

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
    }
  }

</style>
