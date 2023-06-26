<template>
  <div
    class="ribbon-group"
    :style="{width: config.width}"
  >
    <component
      v-for="(item,index) of config.members"
      :key="item.name+index"
      :is="item.type"
      :config="item"
      :class="config.items === 'break' ? 'ribbon-group-item-break' : ''"
    />
  </div>
</template>

<script>
export default {
  name: 'Group',
  data () {
    return {}
  },
  props: {
    config: {
      type: Object,
      default: () => {},
      required: true
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
.ribbon-group {
  display: inline-block;

  :deep(.ribbon-group-item-break) {
    display: block;
  }
}
</style>
