<template>
  <icon-font
    v-if="iconType === 'iconfont'"
    :icon-class="iconClass"
    :class-name="className"
  />
  <icon-img
    v-else-if="iconType === 'img'"
    :icon-class="iconClass"
    :class-name="className"
    :path="path"
  />
  <icon-svg-test
    v-else
    :icon-class="iconClass"
    :class-name="className"
  />
</template>

<script>
export default {
  name: 'RibbonIcon',
  data () {
    return {}
  },
  props: {
    iconType: {
      type: String,
      default: () => 'svg'
    },
    iconClass: {
      type: String,
      default: () => 'gis',
      required: true
    },
    className: {
      type: [ String, Array ]
    },
    path: {
      type: String
    }
  },
  computed: {},
  components: {},
  mounted () {

  },
  methods: {},
  watch: {}
}
</script>

<style lang="" scoped>

</style>
