<template>
  <div :class="className">
    <img
      :src="imgPath"
      alt=""
    >
  </div>
</template>

<script>

export default {
  name: 'IconImg',
  props: {
    iconClass: {
      type: String,
      default: 'LevelManager.png',
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
    imgPath () {
      return require(`../../../${this.iconClass}`)
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  width: 24px;
  height: 24px;
  display: inline-block;

  img {
    width: 100%;
    object-fit: contain;
    display: block;
  }
}
</style>
