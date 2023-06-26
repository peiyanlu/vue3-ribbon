<template>
  <div
    v-if="config.commands.length>1"
    class="split-button-dropdown"
  >
    <div
      :class="[selected.name === item.name ? 'is-selected' : '']"
      v-for="item of config.commands"
      :key="item.name"
      @click="handleClick(item)"
    >
      <ribbon-icon
        :icon-type="item.iconType"
        :icon-class="item.icon"
        class-name="icon"
      />
      <div class="label">{{ item.label }}</div>
    </div>
  </div>
</template>

<script>
import VuePopper from '../../config/popper/vue-popper'

export default {
  name: 'DropDown',
  data () {
    return {

    }
  },
  mixins: [ VuePopper ],
  props: {
    config: {
      type: Object,
      default: () => ({
        size: 'large'
      }),
      required: true
    },
    placement: {
      type: String,
      default: 'bottom-start'
    },
    appendToBody: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    selected () {
      return this.$parent.selected
    }
  },
  components: {},
  mounted () {
    this.referenceElm = this.$parent.$refs.reference
    this.$parent.popperElm = this.popperElm = this.$el
  },
  methods: {
    handleClick (item) {
      this.$parent.selected = { ...item }
      this.$parent.showDropdown = false

      const { name, popupConfig } = item
      const { delayed = false } = popupConfig || {}
      const hasPopup = popupConfig && Object.keys(popupConfig).length

      if (!delayed) {
        this.$parent.$ribbon.$emit('ribbon:command', {
          command: name,
          type: this.config.type,
          showPopup: Boolean(hasPopup)
        })
      }

      if (hasPopup) {
        this.$parent.$ribbon.$emit('ribbon:popup', {
          ...popupConfig
        })
      }
    }
  },
  watch: {}
}
</script>

<style lang="scss" scoped>
.split-button-dropdown {
  min-width: 140px;
  max-height: 140px;
  margin-top: 2px;
  overflow-y: auto;
  position: absolute;
  z-index: 10;
  background: rgba(var(--background), 1);
  border-radius: 2px;
  box-shadow: 0 0 2px 0 rgba(var(--color), 0.15);

  & > div {
    width: 100%;
    white-space: nowrap;
    line-height: 24px;
    font-size: 12px;
    padding: 2px 6px;
    transition: background .25s ease-in-out;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    color: rgba(var(--color), 1);

    .icon {
      height: 24px;
      font-size: 16px;
      margin-right: 6px;
      margin-top: -2px;
    }

    .label {
      font-size: 12px;
      line-height: 24px;
    }

    &:hover {
      background: rgba(var(--primary), 0.1);
    }

    &.is-selected {
      background: rgba(var(--primary), 0.3) !important;
    }
  }
}
</style>
