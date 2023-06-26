<template>
  <div class="ribbon-tabs">
    <div class="ribbon-tabs-buttons">
      <div>
        <file-tab-menu v-if="fileTabMenu.items.length" :config="fileTabMenu" />
        <div
          v-for="(item, index) of config"
          :key="item.label"
          class="tabs-button"
          :class="[
            selected === item.label ? 'is-selected' : '',
            item.disabled ? 'is-disabled' : '',
            item.invisible ? 'is-invisible' : ''
          ]"
          @click="handleTabChanged(item, index)"
        >
          {{ item.label }}
        </div>
      </div>
      <div>
        <ribbon-icon
          :icon-class="expanded?'up':'down'"
          @click.native="expanded?$ribbon.collapse():$ribbon.expand()"
        />
      </div>
    </div>
    <div
      class="ribbon-tabs-panes"
      :class="expanded ? '' : 'is-collapse'"
    >
      <tab-pane
        v-for="item of config"
        :key="item.label"
        :config="item"
        :selected="selected"
      />
    </div>
  </div>
</template>

<script>
import TabPane from './TabPane'

export default {
  name: 'RibbonTabs',
  data () {
    return {
      selected: this.config[0].label,
      selectedIndex: 0
    }
  },
  inject: [ '$ribbon' ],
  props: {
    config: {
      type: Array,
      default: () => [],
      required: true
    },
    fileTabMenu: {
      type: Object,
      default: () => {},
      required: true
    },
    expanded: {
      type: Boolean,
      default: true
    },
    auth: {
      type: Object,
      default: () => ({
        type: 'enable',
        tabs: []
      })
    }
  },
  computed: {

  },
  components: { TabPane },
  mounted () {

  },
  methods: {
    handleTabChanged (item, index) {
      this.selected = item.label
      this.selectedIndex = index
      this.$ribbon.$emit('ribbon:tab', {
        index: index,
        tab: { ...item }
      })
      this.$ribbon.expand()
    }
  },
  watch: {
    auth: {
      handler: function ({ type, tabs }) {
        switch (type.toLowerCase()) {
          case 'disabled':
            tabs.forEach(index => {
              if (index !== this.selectedIndex) {
                this.config[index].disabled = true
              }
            })
            break
          case 'invisible':
            tabs.forEach(index => {
              if (index !== this.selectedIndex) {
                this.config[index].invisible = true
              }
            })
            break
          default:
            tabs.forEach(index => {
              this.config[index].disabled = false
              this.config[index].invisible = false
            })
            break
        }
        const enable = this.config.map((item, index) => {
          const { invisible, disabled } = item
          if (!invisible && !disabled) {
            item.index = index
            return item
          }
        })
        const [ { label, index } ] = enable
        this.selected = label
        this.selectedIndex = index
      },
      immediate: true,
      deep: true
    }
  }
}
</script>

<style lang="scss" scoped>
.ribbon-tabs {
  width: 100%;

  $hight: 26px;
  .ribbon-tabs-buttons {
    width: 100%;
    height: $hight;
    font-size: 12px;
    background-image: linear-gradient(rgba(var(--background), 1),rgba(var(--background), 1));
    background-color: rgba(var(--color), 0.1);
    background-blend-mode: color-burn;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-content: center;

    & > :first-child {
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-content: center;

      .tabs-button {
        color: rgba(var(--color), 1);
        text-transform: uppercase;
        padding: 0 12px;
        transition: all .25s ease-in-out;
        cursor: pointer;

        &.is-selected {
          background: rgba(var(--background), 1);
          color: rgba(var(--primary), 1);
        }

        &.is--disabled {
          opacity: 0.4;
          user-select: none;
          pointer-events: none;
        }

        &.is-invisible {
          display: none;
        }
      }

      & > * {
        line-height: $hight;
        flex-shrink: 0;
        flex-grow: 0;
      }

      &:first-child {
        & > div {
          color: rgba(var(--color), 1);
        }
      }
    }

    & > :last-child {
      width: $hight;
      height: $hight;
      padding: 6px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgba(var(--color), 1);
    }
  }

  .ribbon-tabs-panes {
    width: 100%;
    height: 140px;
    will-change: height;
    transition: height 0.15s ease-in-out;

    & > :not(.is-selected) {
      display: none;
    }

    &.is-collapse {
      height: 0;
    }
  }
}
</style>
