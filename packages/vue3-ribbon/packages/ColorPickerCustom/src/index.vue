<template>
  <div
    class="ribbon-color-picker"
    :class="`ribbon-color-picker-${config.size}`"
    :style="{width: config.width}"
    v-clickoutside="hide"
  >
    <div>
      <div class="ribbon-color-picker-header">
        <div @click="showDropdown=true" :title="config.hint">
          <div class="color-picker-header-color">
            <ribbon-icon
              v-if="config.icon&&config.iconType!=='img'&&config.size==='small'"
              :icon-class='config.icon'
              :style="{color: selected}"
            />
            <div
              v-else
              :style="{background: selected}"
            />
          </div>
          <div class="color-picker-header-arrow"/>
        </div>
      </div>
      <div
        class="ribbon-color-picker-dropdown"
        v-show="showDropdown"
      >
        <div class="color-picker-dropdown-space">
          <div
            v-for="(color,index) of config.predefine"
            :key="color+index"
            :style="{ backgroundColor: color }"
            @click="changeColor(color)"
            :class="selected===color?'selected':''"
          />
        </div>
        <div class="ribbon-color-dropdown__btns">
        <div class="ribbon-color-dropdown__value">
          <input
            class="ribbon-color-dropdown__input"
            type="text"
            v-model="selected"
            disabled
          >
        </div>
        <div>
          <div
            class="ribbon-color-btn link-btn"
            @click="clearValue"
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColorPickerCustom',
  data () {
    return {
      selected: 'transparent',
      showDropdown: false
    }
  },
  inject: [ '$ribbon' ],
  props: {
    value: String,
    config: {
      type: Object,
      default: () => (
        {
          type: 'color-picker', // define type of the tool
          name: 'color-picker:font-color', // color picker name
          size: 'small', // size of the tool - "small" or "large"
          hint: 'Set font color', // optional tool hint
          icon: 'gis', // color picker icon
          iconType: 'svg', // color picker icon type
          predefine: [
            '#FFFFCC',
            '#CCFFFF',
            '#FFCCCC',
            '#FFCC99',
            '#99CCFF',
            '#336699',
            '#FFFFFF',
            '#3399CC',
            '#CCFFCC',
            '#99CCCC',
            '#669999',
            '#660066',
            '#333333',
            '#FF33CC',
            '#999999',
            '#db1717',
            '#cc9999',
            '#000000',
            '#fd9595',
            '#FF6666',
            '#FFFF66',
            '#99CC66'
          ]
        }
      ),
      required: true
    }
  },
  computed: {},
  components: {},
  mounted () {},
  methods: {
    changeColor (color) {
      this.selected = color
    },
    hide () {
      console.log(this.value)
      this.selected = this.value
      this.showDropdown = false
      this.$forceUpdate()
    },
    clearValue () {
      this.selected = 'transparent'
      this.$emit('input', null)
      this.$emit('change', null)
      this.showDropdown = false
    },
    confirmValue () {
      const value = this.selected
      this.$emit('input', value)
      this.$emit('change', value)
      this.showDropdown = false
      this.$ribbon.$emit('ribbon:command', {
        command: `${this.config.name} ${value}`,
        value: value,
        type: 'color-picker'
      })
    }
  },
  watch: {
    value: {
      immediate: true,
      handler (val) {
        console.log(val)
        this.selected = val
      }
    }
  },
  directives: {
    clickoutside: {
      inserted: (el, { value }) => {
        el.handler = (e) => {
          const target = e.target
          if (el !== target && !el.contains(target)) {
            value && value()
          }
        }
        document.addEventListener('click', el.handler, false)
      },
      unbind: (el) => {
        document.removeEventListener('click', el.handler)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.ribbon-color-picker {
  display: inline-block;
  position: relative;
  margin: 0 1px;

  .ribbon-color-picker-header {
    height: 24px;
    padding: 3px;
    border: 1px solid transparent;
    overflow: hidden;
    transition: border .25s ease-in-out;

    & > * {
      height: 100%;
      display: table-row;

      & > *{
        display: table-cell;
        vertical-align: middle;
      }
    }

    .color-picker-header-color {
      height: 100%;

      & > * {
        display: block;
        width: 16px;
        height: 16px;
        font-size: 11px;
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
        border-top: 3px solid rgba(var(--color), 1);
        border-right: 4px solid transparent;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  .ribbon-color-picker-dropdown {
    width: 272px;
    height: 200px;
    padding: 8px;
    position: absolute;
    z-index: 10;
    box-sizing: content-box;
    background-color: rgba(var(--background), 1);
    border-radius: 4px;
    box-shadow: 0 0 2px 0 rgba(var(--color), 0.15);
    display: flex;
    flex-flow: column nowrap;

    .color-picker-dropdown-space {
      display: flex;
      flex: 1;
      flex-wrap: wrap;
      align-content: flex-start;

      & > * {
        margin: 0 0 8px 8px;
        width: 20px;
        height: 20px;
        border-radius: 4px;
        cursor: pointer;
        box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.05);

        & > div {
          display: flex;
          height: 100%;
          border-radius: 3px;
        }

        &:nth-child(10n+1) {
          margin-left: 0;
        }

        &.selected {
          box-shadow: 0 0 3px 2px rgba(var(--primary), 1);
        }
      }
    }

    .ribbon-color-dropdown__btns {
      margin-top: 6px;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;

      .ribbon-color-dropdown__value {
        width: 160px;
        line-height: 26px;
        font-size: 12px;
      }

      .ribbon-color-dropdown__input {
        width: 100%;
        -webkit-appearance: none;
        background-color: #fff;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        height: 28px;
        line-height: 26px;
        outline: none;
        padding: 0 15px;
        transition: border-color .2s cubic-bezier(.645,.045,.355,1);
        cursor: pointer;

        &:hover {
          border-color: #c0c4cc;
        }
      }

      .ribbon-color-btn {
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        background: #fff;
        border: 1px solid #dcdfe6;
        color: #606266;
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
  }

  &:hover {
    .ribbon-color-picker-header {
      border-color: rgba(var(--primary), 1);
    }
  }
}
$small: 24px;
$large: 48px;
.ribbon-color-picker-small {
  .ribbon-color-picker-header {
    .color-picker-header-color {
      & > * {
        width: $small - 8px;
      }
    }
  }
}
.ribbon-color-picker-large {
  .ribbon-color-picker-header {
    .color-picker-header-color {
      & > * {
        width: $large - 8px;
      }
    }
  }
}
</style>
