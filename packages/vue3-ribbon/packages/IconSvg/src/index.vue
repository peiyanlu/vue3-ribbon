<template>
  <svg :class="className">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
import './svg-icon.umd.min'
export default {
  name: 'IconSvgTest',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: [ String, Array ]
    }
  },
  data () {
    return {
      content: ''
    }
  },
  computed: {
    iconName () {
      return `#cloud-${this.iconClass}`
    }
  }
}
</script>

<style lang="scss" scoped>
svg {
  width: 24px;
  height: 24px;
  min-width: 12px;
  fill: currentColor;
  overflow: hidden;
  vertical-align: middle;
}
</style>
