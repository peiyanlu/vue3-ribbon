<template>
  <div
    class="ribbon-dropdown"
    ref="dropdown"
    v-clickoutside="hide"
    :style="{width: config.width}"
  >
    <div
      class="ribbon-dropdown-header"
      @click="showDropdown=!showDropdown"
    >
      <div>
        <div class="ribbon-dropdown-header-label">
          <ribbon-icon
            v-if="selected.icon"
            :icon-type="selected.iconType"
            :icon-class="selected.icon"
          />
          {{ selected.label }}
        </div>
        <div class="ribbon-dropdown-header-arrow" />
      </div>
    </div>
    <div class="ribbon-dropdown-dropdown" v-show="showDropdown">
      <div
        :class="[selected.name === item.name ? 'is-selected' : '']"
        v-for="item of config.items"
        :key="item.name"
        :style="item.style"
        @click="handleClick(item)"
      >
        <ribbon-icon
          v-if="item.icon"
          :icon-class="item.icon"
          :icon-type="item.iconType"
        />
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
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
    this.selected = this.config.items[0]
  },
  methods: {
    hide () {
      this.showDropdown = false
      this.$forceUpdate()
    },
    handleClick (item) {
      this.selected = { ...item }
      this.showDropdown = false
    }
  },
  watch: {},
  beforeDestroy () {

  }
}
</script>

<style lang="scss" scoped>
.ribbon-dropdown {
  display: inline-block;
  vertical-align: top;
  width: 120px;
  margin: 0 1px;
  position: relative;
  transition: all .25s ease-in-out;

  .ribbon-dropdown-header {
    display: table;
    border-collapse: collapse;
    width: 100%;
    border: 1px solid rgba(var(--color), 0.1);

    & > * {
      height: 100%;
      display: table-row;
    }

    .ribbon-dropdown-header-label {
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

    .ribbon-dropdown-header-arrow {
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
      }
    }
  }

  .ribbon-dropdown-dropdown {
    width: 120px;
    max-height: 140px;
    margin-top: 2px;
    border-radius: 2px;
    background: rgba(var(--background), 1);
    box-shadow: 0 0 2px 0 rgba(var(--color), 0.15);
    overflow-y: auto;
    position: absolute;
    left: 0;
    top: 24px;
    z-index: 10;

    & > div {
      white-space: nowrap;
      line-height: 24px;
      font-size: 12px;
      padding: 2px 6px;
      transition: background .25s ease-in-out;
      text-align: left;
      overflow: hidden;
      text-overflow: ellipsis;
      color: rgba(var(--color), 1);

      .icon {
        height: 24px;
        font-size: 16px;
        margin-right: 6px;
        margin-top: -2px;
      }

      &:hover {
        background: rgba(var(--primary), 0.1);
      }

      &.is-selected {
        background: rgba(var(--primary), 0.3);
      }
    }
  }
}
</style>
