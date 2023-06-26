<template>
  <div
    class="box-dropdwon"
    :style="{
      width: config.width,
      minWidth: config.width
    }"
  >
    <box-tools
      :config="config.tools"
      :label="config.label"
    />
  </div>
</template>

<script>
import BoxTools from './BoxTools'
import VuePopper from '../../config/popper/vue-popper'

export default {
  name: 'DropDown',
  data () {
    return {}
  },
  mixins: [ VuePopper ],
  props: {
    config: {
      type: Object,
      default: () => {},
      required: true
    },
    placement: {
      default: 'bottom-end'
    },
    appendToBody: {
      type: Boolean,
      default: false
    }
  },
  computed: {},
  components: { BoxTools },
  mounted () {
    this.referenceElm = this.$parent.$refs.reference
    this.$parent.popperElm = this.popperElm = this.$el
  },
  methods: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
$radius: 2px;

.box-dropdwon {
  background: rgba(var(--background), 1);;
  border-radius: $radius;
  box-shadow: 0 0 2px 0 rgba(var(--color), 0.15);
  position: absolute;
  right: 0;
  z-index: 10;

  .container {
    padding-top: 4px;
    padding-bottom: 16px;
    height: unset;

    :deep(.ribbon-label) {
      padding-bottom: 4px;
    }
  }

  &::after {
    content: '';
    display: table;
    clear: both;
  }
}
</style>
