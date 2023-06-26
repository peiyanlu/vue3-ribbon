<template>
  <div class="ribbon-break" />
</template>

<script>
export default {
  name: 'Break',
  data () {
    return {}
  },
  props: {
    config: {
      type: Object,
      default: () => {}
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

<style lang="scss" scoped>
.ribbon-break {
  display: block;
  user-select: none;
}
</style>
