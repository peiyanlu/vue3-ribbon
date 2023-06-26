<template>
  <transition name="el-zoom-in-top">
    <div
      class="ribbon-color-dropdown"
      v-show="showPopper"
    >
      <div class="ribbon-color-dropdown__main-wrapper">
        <hue-slider ref="hue" :color="color" vertical style="float: right;"></hue-slider>
        <sv-panel ref="sl" :color="color"></sv-panel>
      </div>
      <alpha-slider v-if="showAlpha" ref="alpha" :color="color"></alpha-slider>
      <predefine v-if="predefine" :color="color" :colors="predefine"></predefine>
      <div class="ribbon-color-dropdown__btns">
        <div class="ribbon-color-dropdown__value">
          <input
            class="ribbon-color-dropdown__input"
            type="text"
            v-model="customInput"
            @keyup.enter="handleConfirm"
            @blur="handleConfirm"
          >
        </div>
        <div>
          <div
            class="ribbon-color-btn link-btn"
            @click="$emit('clear')"
          >
            清空
          </div>
          <div
            class="ribbon-color-btn plain-btn"
            @click="confirmValue"
          >
            确定
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import SvPanel from './SvPanel'
import HueSlider from './HueSlider'
import AlphaSlider from './AlphaSlider'
import Predefine from './Predefine'
import VuePopper from '../../../config/popper/vue-popper'

export default {
  name: 'PickerDropdown',
  mixins: [ VuePopper ],
  components: {
    SvPanel,
    HueSlider,
    AlphaSlider,
    Predefine
  },
  props: {
    color: {
      required: true
    },
    showAlpha: {
      type: Boolean,
      default: false
    },
    value: {
      type: Boolean,
      default: false
    },
    predefine: {
      type: Array,
      default: () => ([
        '#ff4500',
        '#ff8c00',
        '#ffd700',
        '#90ee90',
        '#00ced1',
        '#1e90ff',
        '#c71585',
        'rgba(255, 69, 0, 0.68)',
        'rgb(255, 120, 0)',
        'hsv(51, 100, 98)',
        'hsva(120, 40, 94, 0.5)',
        'hsl(181, 100%, 37%)',
        'hsla(209, 100%, 56%, 0.73)',
        '#c7158577'
      ])
    }
  },
  data () {
    return {
      showPopper: false,
      customInput: ''
    }
  },
  computed: {
    currentColor () {
      const parent = this.$parent
      return !parent.value && !parent.showPanelColor ? '' : parent.color.value
    }
  },
  methods: {
    confirmValue () {
      this.$emit('pick')
    },
    handleConfirm () {
      this.color.fromString(this.customInput)
    }
  },
  mounted () {
    this.$parent.popperElm = this.popperElm = this.$el
    this.referenceElm = this.$parent.$el
  },
  watch: {
    value: {
      immediate: true,
      handler (val) {
        this.showPopper = val
        this.$emit('input', val)
      }
    },
    showPopper (val) {
      if (val === true) {
        this.$nextTick(() => {
          const { sl, hue, alpha } = this.$refs
          sl && sl.update()
          hue && hue.update()
          alpha && alpha.update()
        })
      }
    },
    currentColor: {
      immediate: true,
      handler (val) {
        this.customInput = val
      }
    }
  }
}
</script>
<style lang="scss">
.ribbon-color-dropdown {
  width: 300px;
  position: absolute;
  z-index: 10;
  padding: 6px;
  box-sizing: content-box;
  background-color: rgba(var(--background), 1);
  border: 1px solid rgba(var(--background), 1);
  border-radius: 4px;
  box-shadow: 0 0 2px 0 rgba(var(--color), 0.15);
}

.ribbon-color-dropdown__main-wrapper {
  margin-bottom: 6px;

  &:after {
    content: "";
    display: table;
    clear: both;
  }
}

.ribbon-color-dropdown__btns {
  margin-top: 6px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  .ribbon-color-dropdown__value {
    line-height: 26px;
    font-size: 12px;
  }

  .ribbon-color-dropdown__input {
    width: 100%;
    -webkit-appearance: none;
    background-color: rgba(var(--background), 1);
    background-image: none;
    border-radius: 4px;
    border: 1px solid rgba(var(--color), 0.1);
    box-sizing: border-box;
    color: rgba(var(--color), 1);
    display: inline-block;
    font-size: inherit;
    height: 28px;
    line-height: 26px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    cursor: pointer;

    &:hover {
      border-color: rgba(var(--color), 0.5);
    }
  }

  .ribbon-color-btn {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: rgba(var(--background), 1);
    border: 1px solid rgba(var(--color), 0.1);
    color: rgba(var(--color), 1);
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 7px 15px;
    font-size: 12px;
    border-radius: 3px;
  }

  .link-btn {
    border-color: transparent;
    color: rgba(var(--primary), 1);
    background: transparent;
    padding-left: 0;
    padding-right: 0;
  }

  .plain-btn {
    &:hover {
      border-color: rgba(var(--primary), 1);
      color: rgba(var(--primary), 1);
    }
  }

  .ribbon-color-btn + .ribbon-color-btn {
    margin-left: 10px;
  }
}
</style>
