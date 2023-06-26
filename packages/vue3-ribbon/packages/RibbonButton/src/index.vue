<template>
  <div
    class="ribbon-button"
    :class="[
      `ribbon-button-${size}`,
      items === 'break' ? 'ribbon-button-break' : ''
   ]"
    :title='config.hint'
    @click="handleClick(config)"
  >
    <ribbon-icon
      :icon-class='config.icon'
      :icon-type="config.iconType"
      :title='config.hint'
    />
    <div
      v-if="showlabel"
      class="button-label"
    >
      {{ config.label }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'RibbonButton',
  data () {
    return {}
  },
  inject: [ '$ribbon' ],
  props: {
    config: {
      type: Object,
      default: () => ({

      }),
      required: true
    },
    size: {
      type: String,
      default: 'small',
      required: false
    },
    showlabel: {
      type: Boolean,
      default: false,
      required: false
    },
    items: {
      type: String,
      default: '',
      required: false
    },
    delayed: {
      type: Boolean,
      default: false
    },
    preventDefault: {
      type: Boolean,
      default: false
    }
  },
  computed: {},
  components: {},
  mounted () {

  },
  methods: {
    handleClick (current) {
      if (this.preventDefault) return

      const { name, popupConfig } = current
      const { delayed = false } = popupConfig || {}
      const hasPopup = popupConfig && Object.keys(popupConfig).length

      if (!delayed && !this.delayed) {
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
.ribbon-button {
  display: inline-block;
  padding: 1px;
  border: 1px solid transparent;
  cursor: pointer;
  border-radius: 2px;
  vertical-align: middle;
  transition: all 0.25s ease-in-out;
  color: rgba(var(--color), 1);

  &:hover {
    background: rgba(var(--primary), 0.3);
  }
}

$small: 20px;
$large: 28px;
.ribbon-button-small {
  width: $small + 4px;
  height: $small + 4px;

  & > * {
    width: $small;
    height: $small;
    font-size: $small;
    display: block;
  }
}

.ribbon-button-medium,
.ribbon-button-large {
  width: $large + 4px;
  height: $large + 4px;

  & > * {
    width: $large;
    height: $large;
    font-size: $large;
    display: block;
  }
}

.ribbon-button-break {
  display: block;
}
</style>
