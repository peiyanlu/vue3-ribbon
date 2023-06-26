<template>
  <div
    class="ribbon-dropdown-slider"
    ref="dropdown-slider"
    v-clickoutside="hide"
    :style="{width: config.width||''}"
  >
    <div
      class="ribbon-dropdown-slider-header"
      :class="{'is-simplify':config.pattern==='simplify'}"
      @click="showDropdown=!showDropdown"
    >
      <ribbon-button
        :config="config"
        size="large"
        :delayed="true"
        v-if="config.pattern==='simplify'"
      />
      <div v-else>
        <div class="header-label">
          <!--<ribbon-icon-->
          <!--  v-if="selected.icon"-->
          <!--  :icon-type="selected.iconType"-->
          <!--  :icon-class="selected.icon"-->
          <!--/>-->
          {{ config.value }}
        </div>
        <div class="header-arrow" />
      </div>

    </div>
    <div class="ribbon-dropdown-slider-dropdown" v-show="showDropdown">
      <slider
        v-bind="config"
        v-model="config.value"
        @change="handleChange"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DropdownSlider',
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
      default: () => {},
      required: true
    }
  },
  computed: {},
  components: {},
  mounted () {

  },
  methods: {
    hide () {
      this.showDropdown = false
      this.$forceUpdate()
    },
    handleChange (val) {
      this.$ribbon.$emit('ribbon:command', {
        command: `${this.config.name} ${val}`,
        value: val,
        type: this.config.type
      })
    }
  },
  watch: {

  },
  beforeDestroy () {

  }
}
</script>

<style lang="scss" scoped>
.ribbon-dropdown-slider {
  display: inline-block;
  vertical-align: top;
  //min-width: 40px;
  margin: 0 1px;
  position: relative;
  transition: all .25s ease-in-out;

  .ribbon-dropdown-slider-header {
    display: table;
    border-collapse: collapse;
    width: 100%;
    border: 1px solid rgba(var(--color), 0.1);

    & > * {
      display: table-row;
    }

    .header-label {
      width: 102px;
      height: 22px;
      vertical-align: middle;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: 12px;
      line-height: 18px;
      padding: 2px 6px;
      color: rgba(var(--color), 1);

      .icon {
        height: 22px;
        font-size: 14px;
        margin-top: -2px;
      }
    }

    .header-arrow {
      width: 16px;
      height: 22px;
      position: relative;
      cursor: pointer;
      display: table-cell;
      transition: all .25s ease-in-out;

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

    &.is-simplify {
      border: none;

      & > * {
        display: block;
      }
    }
  }

  .ribbon-dropdown-slider-dropdown {
    width: 120px;
    padding: 0 15px;
    max-height: 140px;
    margin-top: 2px;
    border-radius: 2px;
    background: rgba(var(--background), 1);
    box-shadow: 0 0 2px 0 rgba(var(--color), 0.15);
    overflow-y: auto;
    position: absolute;
    z-index: 10;
  }
}
</style>
