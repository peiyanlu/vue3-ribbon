<template>
  <div class="cs-ribbon" ref="ribbonContainer">
    <!--Ribbon工具-->
    <div v-if="!readOnly">
      <div
        class="ribbon-container"
        :class="{'is-disabled': disabled}"
        v-show="!hidden&&!readOnly"
      >
        <quick-launch-toolbar
          :config="config.quickLaunchToolbar"
          :file-name="fileName"
          :logo="logo"
        />
        <ribbon-tabs
          :config="config.tabs"
          :fileTabMenu="config.fileTabMenu"
          :expanded="expanded"
          :auth="auth"
        />
      </div>
    </div>
    <div v-else />

    <div class="content-container">
      <!--顶部功能栏-->
      <div
        class="content-top"
        :class="{'is-disabled': disabled}"
        id="contentTop"
        v-show="!readOnly"
      />

      <!--内容区-->
      <div id="content" class="content">
        <pullout-layer
          v-bind.sync="dragdropConfig.attrs"
          v-on="dragdropConfig.listeners"
        >
          <div>
            <div style="position: relative;width: 100%;height: 100%">
              <ribbon-bangs
                :class="{'is-disabled': disabled}"
                :config="config.bangs"
              />
              <slot />
            </div>
          </div>
        </pullout-layer>
        <drag-popup
          v-bind.sync="dragConfig.attrs"
          v-on="dragConfig.listeners"
        />
      </div>

      <!--底部功能栏-->
      <div v-if="!readOnly">
        <div
          class="content-bottom"
          :class="{'is-disabled': disabled}"
          @dragstart="_=>false"
        >
          <div id="contentBottom">
            <component v-for="popup of popupShrinkConfig" :is="popup" :key="popup" />
          </div>
          <slot name="content-bottom" />
        </div>
      </div>
      <div v-else />
    </div>
  </div>
</template>

<script>

export default {
  name: 'CSRibbon',
  data () {
    return {
      enabled: true,
      expanded: true,
      visible: true,
      auth: {
        type: 'enable',
        tabs: []
      },
      dragConfig: {
        attrs: {},
        listeners: {}
      },
      dragdropConfig: {
        attrs: {},
        listeners: {}
      },
      dragshrinkConfig: {
        attrs: {},
        listeners: {}
      }
    }
  },
  provide () {
    return {
      $ribbon: this
    }
  },
  props: {
    config: {
      type: Object,
      default: () => ({
        fileTabMenu: {},
        quickLaunchToolbar: {},
        tabs: {}
      })
    },
    theme: [ Object, String ],
    readOnly: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    hidden: {
      type: Boolean,
      default: false
    },
    collapsed: {
      type: Boolean,
      default: false
    },
    popupConfig: {
      type: Object,
      default: () => ({
        attrs: {
          show: false
        }
      })
    },
    popupShrinkConfig: Array,
    fileName: {
      type: String,
      default: 'fileName'
    },
    logo: String
  },
  computed: {},
  mounted () {
    this.expanded = !this.collapsed
    this.enabled = !this.disabled
    this.visible = !this.hidden

    this.$emit('ribbon:mounted', { ...this.config })
    this.changeUiColor(this.theme)
  },
  methods: {
    changeUiColor (params) {
      let theme
      if (typeof params === 'string') {
        theme = [ 'dark', 'light' ].includes(params) && params === 'light'
          ? theme = { primary: '6,206,174', background: '255,255,255' }
          : theme = { primary: '6,206,174', background: '43,44,46' }
      } else {
        theme = { ...params }
      }

      const { primary = '6,206,174', background = '43,44,46', color = '' } = theme

      const [ R, G, B ] = background.split(',')
      const grayLevel = R * 0.299 + G * 0.587 + B * 0.114
      const autoColor = grayLevel > 192 ? '51,51,51' : '255,255,255'

      // const dom = this.$refs.ribbonContainer
      const dom = document.body

      dom.style.setProperty('--primary', primary)
      dom.style.setProperty('--background', background)
      dom.style.setProperty('--color', color || autoColor)
    },
    enable () {
      this.enabled = true
      this.$emit('update:disabled', false)
      this.$emit('ribbon:disabled', false)
    },
    disable () {
      this.enabled = false
      this.$emit('update:disabled', true)
      this.$emit('ribbon:disabled', true)
    },
    show () {
      this.visible = true
      this.$emit('update:hidden', false)
      this.$emit('ribbon:hidden', false)
    },
    hide () {
      this.visible = false
      this.$emit('update:hidden', true)
      this.$emit('ribbon:hidden', true)
    },
    expand () {
      this.expanded = true
      this.$emit('update:collapsed', false)
      this.$emit('ribbon:collapsed', false)
    },
    collapse () {
      this.expanded = false
      this.$emit('update:collapsed', true)
      this.$emit('ribbon:collapsed', true)
    },
    getInfo () {

    },
    getConfig () {
      return { ...this.config }
    },
    hideTabs (arr) {
      this.auth = {
        type: 'invisible',
        tabs: [ ...arr ]
      }
    },
    showTabs (arr) {
      this.auth = {
        type: 'visible',
        tabs: [ ...arr ]
      }
    },
    enableTabs (arr) {
      this.auth = {
        type: 'enabled',
        tabs: [ ...arr ]
      }
    },
    disableTabs (arr) {
      this.auth = {
        type: 'disabled',
        tabs: [ ...arr ]
      }
    }
  },
  watch: {
    popupConfig: {
      deep: true,
      immediate: true,
      handler: function (config) {
        const { type, attrs = {}, listeners = {} } = config || {}
        switch (type) {
          case 'drag': {
            this.dragConfig = {
              attrs: { ...attrs },
              listeners: { ...listeners }
            }
            this.dragdropConfig.attrs.show = false
            this.dragshrinkConfig.attrs.show = false
            break
          }
          case 'dragdropp': {
            this.dragdropConfig = {
              attrs: { ...attrs },
              listeners: { ...listeners }
            }
            this.dragConfig.attrs.show = false
            this.dragshrinkConfig.attrs.show = false
            break
          }
          case 'dragshrink': {
            this.dragConfig.attrs.show = false
            this.dragdropConfig.attrs.show = false
            break
          }
        }
      }
    },
    theme: {
      deep: true,
      immediate: true,
      handler: function (theme) {
        this.changeUiColor(theme)
      }
    }
  },
  beforeDestroy () {
    this.$emit('ribbon:beforedestroy', { ...this.config })
  },
  destroyed () {
    this.$emit('ribbon:destroy', { ...this.config })
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
/*滚动条样式*/
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(144,147,153,0.2);
}

</style>
<style lang="scss" scoped>
.cs-ribbon {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  box-sizing: border-box;
  background: rgba(var(--background), 1);

  .ribbon-container {
    width: 100%;
    background: rgba(var(--background), 1);
    position: relative;
    box-shadow: inset 0 0 0 1px rgba(var(--background), 0.1);
    user-select: none;

    & > * {
      flex-shrink: 0;
      flex-grow: 0;
    }

    &::after {
      content: "";
      display: table;
      clear: both;
    }
  }

  .content-container {
    position: relative;
    flex: 1;
    height: 0;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    user-select: none;
    background: rgba(var(--background), 1);

    .content-top {
      background: rgba(var(--background), 1);
    }

    .content {
      position: relative;
      flex: 1;
    }

    .content-bottom {
      background: rgba(var(--background), 1);
    }

    #contentTop,
    #contentBottom {
      display: flex;
      flex-flow: row wrap;
      background-color:rgba(var(--background), 1);
    }
  }

  .is-disabled {
    filter: grayscale(60%) ;
    user-select: none;
    cursor: not-allowed;
    pointer-events: none;
  }
}
</style>
