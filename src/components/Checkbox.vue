<template>
    <div class="checkbox" @click.stop="toggle()"
      :style="outStyle"
    >
      <div v-show="value" class="checkbox__done"
        :style="inStyle"
      ></div>
    </div>
</template>

<script>
export default {
  props: {
    value: {
      required: true,
      type: Boolean
    },
    size: {
      type: Number,
      default: 40
    }
  },
  computed: {
    outStyle() {
      return {
        width: this.size + 'px',
        height: this.size + 'px'
      }
    },
    inStyle() {
      return {
        width: Math.round(this.size * 3 / 4) + 'px',
        height: Math.round(this.size * 3 / 4) + 'px'
      }
    }
  },
  methods: {
    toggle() {
      this.$emit('toggle')
    }
  }
}
</script>

<style lang="scss" scoped>
  .checkbox {
    margin: auto 0;
    margin-right: 10px;
    border: 2px solid #cc2936;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    &__done {
      background-color: #cc2936;
      border-radius: 50%;
    }
  }
</style>
