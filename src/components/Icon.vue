<template>
  <i class="material-icons" :style="size && {fontSize: size + 'px'}">{{icon}}</i>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    size: {
      type: Number
    }
  }
}
</script>

<style lang="scss">
  .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    font-feature-settings: 'liga';
  }
</style>
