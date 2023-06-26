<template>
  <color-picker-custom
    v-if="config.pattern === 'custom'"
    :config="config"
    v-model="config.value"
  />
  <color-picker-free
    v-else
    :config="config"
    v-model="config.value"
  />
</template>

<script>
export default {
  name: 'ColorPicker',
  data () {
    return {}
  },
  props: {
    value: String,
    config: {
      type: Object,
      default: () => (
        {
          showAlpha: true,
          colorFormat: 'hex',
          disabled: false,
          size: 'small',
          pattern: 'custom',
          popperClass: '',
          predefine: []
        }
      ),
      required: true
    }
  },
  computed: {},
  components: {},
  mounted () {

  },
  methods: {},
  watch: {
    value (val) {
      this.$emit('input', val)
      this.$emit('change', val)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
