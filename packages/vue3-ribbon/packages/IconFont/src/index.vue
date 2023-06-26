<template>
  <i :class="classArr"></i>
</template>

<script>
export default {
  name: 'IconFont',
  data () {
    return {}
  },
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: [ String, Array ]
    }
  },
  computed: {
    classArr () {
      const { iconClass, className } = this
      return Array.isArray(className) ? [ iconClass ].push(className) : [ iconClass ].concat(className)
    }
  },
  components: {},
  mounted () {

  },
  methods: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
i {
  display: inline-block;
  font-size: 16px;
}
</style>
