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
  name: 'Checkbox',
  props: {
    value: {
      required: true,
      type: Boolean
    },
    size: {
      type: Number,
      default: 40
    },
    color: {
      default: '#cc2936'
    },
    backColor: {
      default: '#ffffff'
    }
  },
  computed: {
    outStyle() {
      return {
        width: this.size + 'px',
        height: this.size + 'px',
        borderColor: this.color,
        backColor: this.backColor
      }
    },
    inStyle() {
      return {
        width: Math.round(this.size * 3 / 4) + 'px',
        height: Math.round(this.size * 3 / 4) + 'px',
        backgroundColor: this.color
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
    cursor: pointer;
    border: 2px solid;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    &__done {
      border-radius: 50%;
    }
  }
</style>
