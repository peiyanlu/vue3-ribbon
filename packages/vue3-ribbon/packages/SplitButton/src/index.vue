<template>
  <div
    class="ribbon-split-button"
    :class="[
      `ribbon-split-button-${config.size}`
    ]"
    v-clickoutside="hide"
  >
    <div
      class="split-button-header"
      :class="config.commands.length>1?'':'is-not-arrow'"
      @click.stop="handleClick(selected)"
      ref="reference"
    >
      <div>
        <ribbon-button
          :config="selected"
          :size="config.size"
          :preventDefault="true"
        />
        <div
          v-if="config.size!=='medium'"
          class="split-button-header-label"
          :title="selected.hint"
        >
          {{ selected.label }}
        </div>
        <div
          v-show="config.commands.length>1"
          class="split-button-header-arrow"
          @click.stop.self="showDropdown=!showDropdown"
        >
        </div>
      </div>
    </div>
    <drop-down
      ref="dropdown"
      v-if="config.commands.length>1"
      :config="config"
      v-show="showDropdown"
      v-model="showDropdown"
      :class="config.dropDownCssClasses"
    ></drop-down>
  </div>
</template>

<script>
import DropDown from './DropDown'

export default {
  name: 'SplitButton',
  data () {
    return {
      selected: {},
      showDropdown: false
    }
  },
  inject: [ '$ribbon' ],
  props: {
    config: {
      type: Object,
      default: () => ({
        size: 'large'
      }),
      required: true
    }
  },
  computed: {},
  components: { DropDown },
  mounted () {
    this.selected = this.config.commands[0]
  },
  methods: {
    hide () {
      this.showDropdown = false
      this.$forceUpdate()
    },
    handleClick (item) {
      this.selected = { ...item }
      this.showDropdown = false

      const { name, popupConfig } = item
      const { delayed = false } = popupConfig || {}
      const hasPopup = popupConfig && Object.keys(popupConfig).length

      if (!delayed) {
        this.$ribbon.$emit('ribbon:command', {
          command: name,
          type: this.config.type,
          showPopup: Boolean(hasPopup)
        })
      }

      if (hasPopup) {
        this.$ribbon.$emit('ribbon:popup', {
          ...popupConfig
        })
      }
    }
  },
  watch: {}
}
</script>

<style lang="scss" scoped>
$radius: 2px;

.ribbon-split-button {
  display: inline-block;
  vertical-align: top;
  position: relative;
  cursor: pointer;
  margin: 1px;
  border-radius: 2px;
  transition: all 0.3s ease-in-out;

  .split-button-header {
    display: block;
    text-align: center;
    transition: all .25s ease-in-out;
    width: 100%;
    position: relative;

    & > * {
      height: 100%;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
    }

    .split-button-header-label {
      color: rgba(var(--color), 1);
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      padding: 0 4px;
      font-size: 12px;
      line-height: 12px;
      transition: background .25s ease-in-out;
    }

    .split-button-header-arrow {
      position: relative;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

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
        opacity: 0.75;
      }
    }
  }

  &:hover {
    .split-button-header {
      background: rgba(var(--primary), 0.3);
    }

    .ribbon-button {
      background: transparent;
    }
  }
}

.ribbon-split-button-large {

  .split-button-header {
    height: 56px;
    border-radius: $radius;

    .split-button-header-label {
      width: 56px;
      border-radius: 0 0 $radius $radius;
      margin-top: -2px;
      transform: scale(0.95);
    }

    .split-button-header-arrow {
      width: 100%;
      height: 14px;
      border-radius: 0 0 $radius $radius;
    }
  }
}

.ribbon-split-button-medium {
  width: 40px;

  .split-button-header {

    & > * {
      flex-flow: row nowrap;

      & > *:first-child {
        cursor: default;
        margin-right: -6px;
      }
    }

    .split-button-header-arrow {
      width: 14px;
      height: 32px;
    }
  }
}

.ribbon-split-button-small {

  .split-button-header {

    & > * {
      flex-flow: row nowrap;
    }

    .split-button-header-arrow {
      width: 12px;
      height: 24px;
    }
  }
}

.is-not-arrow {
  padding-bottom: 14px;
}
</style>
