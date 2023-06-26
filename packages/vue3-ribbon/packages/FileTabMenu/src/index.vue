<template>
  <div class="ribbon-file-tab-menu">
    <div
      class="file-tab-button"
      @click.stop="showMenu(true)"
    >
      {{ config.activator.label }}
    </div>
    <transition name="show" mode="in-out">
      <div class="file-tab-menu-mask" :class="{'is-expanded': show}" v-if="show">
        <div class="file-tab-menu" >
          <div class="tab-menu-tabs">
            <div class="tabs-back">
              <ribbon-icon
                class="back"
                icon-class="left"
                @click.native="showMenu(false)"
              />
            </div>
            <div class="tabs-buttons">
              <div
                v-for="item of config.items"
                :key="item.label"
                :class="['tabs-button', selected === item.label ? 'is-selected' : '']"
                @click="selected = item.label"
              >
                <ribbon-icon
                  v-if="item.icon"
                  :icon-type="item.iconType"
                  :icon-class="item.icon"
                  class-name="icon"
                />
                <div>{{ item.label }}</div>
              </div>
            </div>
          </div>
          <div class="tab-menu-tabs-panes">
            <div
              v-for="item of config.items"
              :key="item.label"
              :class="['tabs-pane', selected === item.label ? 'is-selected' : '']"
            >
              <div class="tabs-pane-title">{{ selected }}</div>
              <div
                v-for="subitem of item.commands"
                :key="subitem.label"
              >
                <template v-if="subitem.custom">
                  <component :is="subitem.type"></component>
                </template>
                <template v-else>
                  <div class="tabs-pane-buttons">
                    <div class="tabs-pane-button">
                      <ribbon-icon
                        v-if="subitem.icon"
                        :icon-type="subitem.iconType"
                        :icon-class="subitem.icon"
                        class-name="icon"
                      />
                      <div>{{ subitem.label }}</div>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'FileTabMenu',
  data () {
    return {
      show: false,
      selected: this.config.items[0].label
    }
  },
  inject: [ '$ribbon' ],
  props: {
    config: {
      type: Object,
      default: () => ({
        name: 'file-tab-menu:generic-actions',
        activator: {
          label: '文件'
        },
        items: []
      }),
      required: true
    }
  },
  computed: {},
  components: {},
  mounted () {

  },
  methods: {
    showMenu (show) {
      this.show = show
      this.$forceUpdate()
    },
    hide () {
      this.showMenu(false)
    }
  },
  watch: {}
}
</script>

<style lang="scss" scoped>
.ribbon-file-tab-menu {

  .file-tab-button {
    line-height: 26px;
    text-transform: uppercase;
    padding: 0 12px;
    transition: all .25s ease-in-out;
    cursor: pointer;
  }

  .file-tab-menu-mask {
    width: 100%;
    height: 100%;
    pointer-events: none;
    position: fixed;
    left: 0;
    top: 0;
    z-index: -1;

    .file-tab-menu {
      width: 50%;
      min-width: 600px;
      height: 100%;
      display: flex;
      background: rgba(var(--background), 1);
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: center;
      box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 20%);
      pointer-events: auto;
      will-change: left;

      & > div {
        padding: 32px 0;
      }

      .tab-menu-tabs {
        width: 150px;
        height: 100%;
        background-image: linear-gradient(rgba(var(--primary), 1), rgba(var(--primary), 1)); // #2b579a
        background-color: rgba(#000000, 0.25);
        background-blend-mode: color-burn;

        .tabs-back {
          width: 100%;
          height: 64px;
          display: flex;
          flex-flow: row nowrap;
          justify-content: flex-start;
          align-items: center;

          .back {
            width: 32px;
            height: 32px;
            margin: 16px;
            color: #ffffff;
            cursor: pointer;
            transition: all .25s ease-in-out;
          }
        }

        .tabs-buttons {
          display: flex;
          flex-flow: column nowrap;

          .tabs-button {
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-start;
            align-items: center;
            padding: 8px 16px;
            color: rgba(#FFF, 1);
            cursor: pointer;
            transition: all .25s ease-in-out;

            & > div:last-child {
              flex: 1;
              height: 24px;
              line-height: 24px;
              margin-left: 6px;
              text-align: left;
              white-space: nowrap;
              text-overflow: ellipsis;
            }

            .icon {
              display: block;
              width: 20px;
              height: 20px;
              font-size: 20px;
            }

            &:hover {
              background: #0000001a;
            }

            &.is-selected {
              background: #ffffff1a;
            }
          }
        }
      }

      .tab-menu-tabs-panes {
        width: 100%;
        height: 100%;
        flex: 1;

        .tabs-pane {
          width: 100%;
          height: 100%;
          padding-bottom: 3px;
          display: flex;
          flex-flow: column nowrap;
          justify-content: flex-start;

          .tabs-pane-title {
            font-size: 26px;
            color: rgba(var(--color), 1);
            padding: 0;
            margin: 0 16px 16px;
          }

          .tabs-pane-buttons {
            padding: 10px;
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-start;
            align-items: center;
            align-content: flex-start;

            .tabs-pane-button {
              display: flex;
              flex-flow: row nowrap;
              justify-content: flex-start;
              align-items: center;
              padding: 6px;
              color: rgba(var(--color), 1);
              cursor: pointer;
              transition: all .25s ease-in-out;

              & > div:last-child {
                width: 60px;
                height: 24px;
                line-height: 24px;
                margin-left: 12px;
                text-align: left;
                white-space: nowrap;
                text-overflow: ellipsis;
              }

              .icon {
                display: block;
                width: 24px;
                height: 24px;
                font-size: 24px;
              }

              &:hover {
                background: rgba(var(--color), 0.1);
              }
            }
          }
        }

        & > :not(.is-selected) {
          display: none;
        }
      }
    }

    &.is-expanded {
      pointer-events: auto;
      z-index: 999;
    }
  }

  .show-enter-active {
    transition: left 0.15s;
  }
  .show-leave-active {
    transition: left 0s;
  }

  .show-enter,
  .show-leave-to {
    left: -50%;
  }

  .show-enter-to,
  .show-leave {
    left: 0;
  }
}
</style>
