<template>
  <div
    :class="[
      'ribbon-color-picker',
      config.disabled ? 'is-disabled' : '',
      `ribbon-color-picker-${config.size}`
    ]"
    :style="{width: config.width}"
    v-clickoutside="hide"
  >
    <div class="ribbon-color-picker__mask" v-if="config.disabled"></div>
    <div class="ribbon-color-picker__trigger" @click="handleTrigger">
      <div class="ribbon-color-picker__color" :class="{ 'is-alpha': config.showAlpha }">
        <div
          :style="{
            backgroundColor: displayedColor
          }"
        />
        <span class="ribbon-color-picker__empty el-icon-close" v-if="!value && !showPanelColor"></span>
      </div>
      <div class="color-picker-header-arrow" />
    </div>
    <picker-dropdown
       ref="dropdown"
       :class="[config.popperClass || '']"
       v-model="showPicker"
       @pick="confirmValue"
       @clear="clearValue"
       :color="color"
       :show-alpha="config.showAlpha"
       :predefine="config.predefine"
    />
  </div>
</template>

<script>
import Color from './color'
import PickerDropdown from './components/PickerDropdown.vue'

export default {
  name: 'ColorPickerFree',
  inject: [ '$ribbon' ],
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
          popperClass: '',
          predefine: []
        }
      ),
      required: true
    }
  },
  computed: {
    displayedColor () {
      if (!this.value && !this.showPanelColor) {
        return 'transparent'
      }
      return this.displayedRgb(this.color, this.config.showAlpha)
    }
  },
  watch: {
    value (val) {
      if (!val) {
        this.showPanelColor = false
      } else if (val && val !== this.color.value) {
        this.color.fromString(val)
      }
    },
    color: {
      deep: true,
      handler () {
        this.showPanelColor = true
      }
    },
    displayedColor (val) {
      if (!this.showPicker) return
      const currentValueColor = new Color({
        enableAlpha: this.config.showAlpha,
        format: this.config.colorFormat
      })
      currentValueColor.fromString(this.value)

      const currentValueColorRgb = this.displayedRgb(currentValueColor, this.config.showAlpha)
      if (val !== currentValueColorRgb) {
        this.$emit('active-change', val)
      }
    }
  },
  methods: {
    handleTrigger () {
      if (this.config.disabled) return
      this.showPicker = !this.showPicker
    },
    confirmValue () {
      const value = this.color.value
      this.$emit('input', value)
      this.$emit('change', value)
      this.showPicker = false
      this.$ribbon.$emit('ribbon:command', {
        command: `${this.config.name} ${value} TrueColor`,
        value: value,
        type: this.config.type
      })
    },
    clearValue () {
      this.$emit('input', null)
      this.$emit('change', null)
      this.showPanelColor = false
      this.showPicker = false
      this.resetColor()
    },
    hide () {
      if (!this.showPicker) return
      this.showPicker = false
      this.resetColor()
    },
    resetColor () {
      this.$nextTick(_ => {
        if (this.value) {
          this.color.fromString(this.value)
        } else {
          this.showPanelColor = false
        }
      })
    },
    displayedRgb (color, showAlpha) {
      if (!(color instanceof Color)) {
        throw Error('color should be instance of Color Class')
      }

      const { r, g, b } = color.toRgb()
      return showAlpha
        ? `rgba(${r}, ${g}, ${b}, ${color.get('alpha') / 100})`
        : `rgb(${r}, ${g}, ${b})`
    }
  },
  mounted () {
    const value = this.value
    if (value) {
      this.color.fromString(value)
    }
    this.popperElm = this.$refs.dropdown.$el
  },
  data () {
    const color = new Color({
      enableAlpha: this.config.showAlpha,
      format: this.config.colorFormat
    })

    return {
      color,
      showPicker: false,
      showPanelColor: false
    }
  },
  components: {
    PickerDropdown
  }
}
</script>
<style lang="scss" scoped>
.ribbon-color-picker {
  display: inline-block;
  position: relative;
  margin: 0 1px;

  .ribbon-color-picker__mask {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 4px;
    pointer-events: none;
    cursor: not-allowed;
  }

  .ribbon-color-picker__trigger {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    font-size: 0;
    position: relative;
    cursor: pointer;
    height: 24px;
    padding: 3px;
    border: 1px solid rgba(var(--color), 0.1);
    overflow: hidden;
    transition: border .25s ease-in-out;

    .ribbon-color-picker__color {
      width: 100%;
      height: 100%;

      & > * {
        display: block;
        width: 16px;
        height: 16px;
        font-size: 11px;
      }

      &.is-alpha {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);
      }
    }

    .color-picker-header-arrow {
      width: 10px;
      margin-left: 3px;
      height: 100%;
      position: relative;
      cursor: pointer;

      &::before {
        content: "";
        display: block;
        width: 0;
        height: 0;
        border-left: 4px solid transparent;
        border-top: 4px solid rgba(var(--color), 1);
        border-right: 4px solid transparent;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  &.is-disabled {
    pointer-events: none;
    cursor: not-allowed;
  }
}
$small: 24px;
$large: 48px;
.ribbon-color-picker-small {
  .ribbon-color-picker__trigger {
    .ribbon-color-picker__color {
      & > * {
        width: auto;
        min-width: $small - 8px;
      }
    }
  }
}
.ribbon-color-picker-large {
  .ribbon-color-picker__trigger {
    .ribbon-color-picker__color {
      &>* {
        width: auto;
        min-width: $large - 8px;
      }
    }
  }
}
</style>
