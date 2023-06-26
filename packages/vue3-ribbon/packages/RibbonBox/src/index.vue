<template>
  <box-small
    :config="config"
    v-if="small"
  />
  <div
    v-else
    class="ribbon-box"
    ref="ribbon-box"
  >
    <box-tools
      :config="config.tools"
      :label="config.label"
      :style="{
        width: config.width,
        minWidth: config.width
      }"
    />
  </div>
</template>

<script>
import BoxTools from './BoxTools'
import BoxSmall from './BoxSmall'

export default {
  name: 'RibbonBox',
  data () {
    return {}
  },
  props: {
    config: {
      type: Object,
      default: () => {},
      required: true
    },
    small: Boolean
  },
  computed: {},
  components: { BoxTools, BoxSmall },
  mounted () {

  },
  methods: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.ribbon-box {
  min-height: 100px;
  position: relative;

  &:not(:last-child){
    position: relative;

    &::after {
      content: "";
      width: 1px;
      height: 100%;
      transform: scaleX(0.5);
      position: absolute;
      right: 0;
      top: 0;
      background: rgba(var(--color), 0.15);
    }
  }
}

</style>
