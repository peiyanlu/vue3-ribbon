<template>
  <div class="el-color-predefine">
    <div class="el-color-predefine__colors">
      <div
        class="el-color-predefine__color-selector"
        :class="{selected: item.selected, 'is-alpha': item._alpha < 100}"
        v-for="(item, index) in rgbaColors"
        :key="colors[index]"
        @click="handleSelect(index)"
      >
        <div :style="{'background-color': item.value}" />
      </div>
    </div>
  </div>
</template>

<script>
import Color from '../color'

export default {
  name: 'Predefine',
  props: {
    colors: { type: Array, required: true },
    color: { required: true }
  },
  data () {
    return {
      rgbaColors: this.parseColors(this.colors, this.color)
    }
  },
  methods: {
    handleSelect (index) {
      this.color.fromString(this.colors[index])
    },
    parseColors (colors, color) {
      return colors.map(value => {
        const c = new Color()
        c.enableAlpha = true
        c.format = 'rgba'
        c.fromString(value)
        c.selected = c.value === color.value
        return c
      })
    }
  },
  watch: {
    '$parent.currentColor' (val) {
      const color = new Color()
      color.fromString(val)

      this.rgbaColors.forEach(item => {
        item.selected = color.compare(item)
      })
    },
    colors (newVal) {
      this.rgbaColors = this.parseColors(newVal, this.color)
    },
    color (newVal) {
      this.rgbaColors = this.parseColors(this.colors, newVal)
    }
  }
}
</script>
<style lang="scss" scoped>
.el-color-predefine {
  display: flex;
  font-size: 12px;
  margin-top: 8px;
  width: 286px;

  .el-color-predefine__colors {
    display: flex;
    height: 106px;
    overflow-y: overlay;
    padding: 3px;
    flex: 1;
    flex-wrap: wrap;

    .el-color-predefine__color-selector {
      margin: 0 0 8px 8px;
      width: 20px;
      height: 20px;
      border-radius: 4px;
      cursor: pointer;

      &>div {
        display: flex;
        height: 100%;
        border-radius: 3px;
      }

      &:nth-child(10n+1) {
        margin-left: 0;
      }
    }

    .el-color-predefine__color-selector.is-alpha {
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);
    }
    .el-color-predefine__color-selector.selected {
      box-shadow: 0 0 3px 2px rgba(var(--primary), 1);
    }
  }
}
</style>
