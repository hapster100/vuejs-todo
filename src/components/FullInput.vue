<template>
  <div class="full-input">
      <div class="full-input__label">{{label}}</div>
      <div class="full-input__wrapper">
        <div :is="area ? 'textarea' : 'input'" :value="value" @input="change($event.target.value)" class="full-input__field" />
      </div>
    </div>
</template>

<script>
export default {
  props: {
    label: {
      required: true,
      type: String
    },
    value: {
      required: true,
      type: String
    },
    area: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    change(val) {
      this.$emit('change', val)
    }
  }
}
</script>

<style lang="scss" scoped>
  .full-input {
    display: flex;
    flex-direction: column;

    &__label {
        margin-right: 10px;
        margin-top: 5px;
        width: 150px;
    }
    &__wrapper {
      flex-grow: 1;
    }
    &__field {
      min-height: 38px;
      resize: vertical;
      width: 100%;
      color: #22222a;
      font-weight: bold;
      font-family: 'Monsterrat', sans-serif !important;
      border: 2px solid #22222a;
      padding: 5px 10px;
      font-size: 20px;
      border-radius: 5px;
      background-color: white;
      &:focus {
        outline: none;
      }
    }
  }

  @media screen and (min-width: 800px) {
    .full-input {
      align-items: flex-start;
      flex-direction: row;
    }
  }
</style>
