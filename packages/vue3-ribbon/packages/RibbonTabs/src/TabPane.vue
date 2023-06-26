<template>
  <div
    class="tabs-pane"
    :class="{
      'is-selected': selected === config.label
    }"
  >
    <div>
      <ribbon-box
        v-for="subitem of boxNor"
        :key="subitem.name"
        :config="subitem"
      />
      <ribbon-box
        v-for="subitem of boxPre"
        :key="subitem.name"
        :config="subitem"
        small
      />
      <div />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabPane',
  data () {
    return {
      boxNor: this.config.ribbons,
      boxPre: []
    }
  },
  props: {
    config: {
      type: Object,
      default: () => {},
      required: true
    },
    selected: String
  },
  computed: {},
  components: {},
  mounted () {
    let scrollWidth = 0
    this.config.ribbons.forEach(({ width }) => {
      scrollWidth += parseInt(width)
    })

    const resize = new ResizeObserver(([ entry ]) => {
      const { target } = entry
      const { clientWidth } = target
      const scroll = scrollWidth - clientWidth

      const ribbons = this.config.ribbons.slice().reverse()

      let width = 0; let key = 0
      ribbons.some((item, index) => {
        width += parseInt(item.width)
        const temp = width - 80 * (index + 1)
        if (temp > scroll && scroll > 0) {
          key = index + 1
          return true
        }
      })

      if (key > 0) {
        this.boxNor = ribbons.splice(key).reverse()
        this.boxPre = ribbons.slice().reverse().splice(-(key))
      } else {
        this.boxNor = ribbons.reverse()
        this.boxPre = []
      }
    })
    resize.observe(this.$el)
  },
  methods: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.tabs-pane {
  width: 100%;
  min-width: 960px;
  height: 100%;
  padding: 4px 0;

  & > div {
    display: table-row;

    & > * {
      display: table-cell;
      vertical-align: top;
    }
  }
}
</style>
