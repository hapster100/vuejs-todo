<template>
  <div class="bordered">
    <div class="bordered__header">
      <slot name="header-left"></slot>
      <slot name="header-right"></slot>
    </div>
    <div class="bordered__content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
  .bordered {
    border: 2px solid #cc2936;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    &__header {
      color: white;
      background-color: #cc2936;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 15px;
    }

    &__content {
      padding: 15px;
      display: flex;
      flex-direction: column;
    }
  }
</style>
