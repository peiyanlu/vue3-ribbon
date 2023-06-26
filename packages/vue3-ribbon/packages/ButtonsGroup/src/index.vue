<template>
  <div
    class="ribbon-buttons"
    :style="{width: config.width}"
  >
    <ribbon-button
      v-for="command in config.commands"
      :key="command.name"
      :config="command"
      :size="config.size"
      :showlabel="config.showlabel"
      :items="config.items"
    />
  </div>
</template>

<script>
export default {
  name: 'Buttons',
  data () {
    return {

    }
  },
  props: {
    config: {
      type: Object,
      default: () => ({
        commands: [],
        size: 'small',
        items: ''
      }),
      required: true
    }
  },
  computed: {},
  components: {},
  mounted () {

  },
  methods: {

  },
  watch: {}
}
</script>

<style lang="scss" scoped>
.ribbon-buttons {
  display: inline-block;
}
</style>
