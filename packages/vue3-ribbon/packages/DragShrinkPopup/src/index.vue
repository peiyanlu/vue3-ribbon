<template>
  <div
    class="drag-shrink-popup"
    :class="[popup ?'popup-trans':'popup-row']"
    :style="{
      width: width?`${width}px`:'unset',
      maxHeight: height?`${32+height}px`:'unset',
      left: `${left}px`,
      top: `${top}px`
    }"
    v-show="show"
    @dragstart="()=>false"
  >
    <div class="drag-area" @mousedown.stop="dragStart">
      <template v-if="popup">
        <div class="drag-target">
          <div class="header-left">
            <div :class="['icon-box']">
              <ribbon-icon class="popicon" icon-class="logo" />
            </div>
            <div class="poptitle">{{ titleText }}</div>
          </div>
          <div class="close-box" @click="close">
            <ribbon-icon class="popicon" icon-class="close" />
          </div>
        </div>
      </template>
      <template v-else>
        <div class="drag-target-btn" draggable="false">
          <div class="move-icon"></div>
        </div>
      </template>
    </div>
    <div class="content">
      <template v-if="$slots.default">
        <slot></slot>
      </template>
      <template v-else>
        <component :show="show" :is="component" v-on="$listeners" v-bind="$attrs" />
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DragShrinkPopup',
  data () {
    return {
      dragging: false,
      changed: false,
      offsetLeft: 0,
      offsetTop: 0,
      offsetRight: 0,
      offsetBottom: 0
    }
  },
  props: {
    container: {
      type: String,
      default: '#content'
    },
    component: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: true
    },
    titleText: {
      type: String,
      default: '弹窗默认标题'
    },
    icon: {
      type: String,
      default: 'logo'
    },
    width: {
      type: Number,
      default: 480
    },
    height: {
      type: Number,
      default: 270
    },
    popup: {
      type: Boolean,
      default: false
    },
    left: {
      type: Number,
      default: 0
    },
    top: {
      type: Number,
      default: 0
    }
  },
  computed: {},
  components: {},
  mounted () {
    const container = document.querySelector(this.container)
    this.observe(container)
  },
  methods: {
    observe (dom) {
      const mutationObserver = new MutationObserver(() => this.init(dom))

      mutationObserver.observe(dom, {
        childList: true, // 子节点的变动（新增、删除或者更改）
        attributes: true, // 属性的变动
        characterData: true, // 节点内容或节点文本的变动
        subtree: true // 是否将观察器应用于该节点的所有后代节点
      })
    },
    init (container) {
      this.$nextTick(() => {
        const { clientWidth: w, clientHeight: h } = container
        const { clientWidth: W, clientHeight: H } = document.body

        this.offsetTop = getOffsetTop(container)
        this.offsetLeft = getOffsetLeft(container)
        this.offsetRight = W - w - this.offsetLeft
        this.offsetBottom = H - h - this.offsetTop
      })
    },
    dragStart (event) {
      this.dragging = true
      let { target, clientX, clientY } = event

      target = target.parentNode
      const { offsetLeft, offsetTop } = target

      const disX = clientX - offsetLeft
      const disY = clientY - offsetTop

      document.onmousemove = ({ clientX, clientY }) => {
        if (!this.dragging) return

        const { clientWidth: width } = target
        const { clientWidth, clientHeight } = document.querySelector(this.container)

        const { target: targetDom, popupState } = calculate(clientY)

        this.$emit('update:popup', popupState) // 切换形态

        const moveX = clientX - disX < 0
          ? 0
          : clientX - disX > clientWidth - width
            ? clientWidth - width
            : clientX - disX

        const moveY = clientY - disY < 0
          ? 0
          : clientY - disY > clientHeight
            ? clientHeight
            : clientY - disY

        if (popupState) {
          target.style.position = 'absolute'
          target.style.left = moveX + 'px'
          target.style.top = moveY + 'px'
          target.style.zIndex = 1000

          this.changed = true
        } else if (this.changed) {
          this.$emit('update:popup', false)

          target.style.position = ''
          target.style.left = ''
          target.style.top = ''
          target.style.zIndex = ''

          targetDom && targetDom.append(target)
        }
      }
      document.onmouseup = (e) => {
        this.dragging = false
        this.changed = false
        document.onmousemove = null
        document.onmouseup = null
      }
    },
    close () {
      if (this.$listeners.close) {
        this.$emit('close')
      } else {
        this.$emit('update:show', false)
      }
    }
  },
  watch: {
    popup (val) {
      this.$emit('update:popup', val)
    }
  }
}

const calculate = clientY => {
  const topTarget = document.getElementById('contentTop')
  const bottomTarget = document.getElementById('contentBottom')
  let target = null

  const referenceTop = getOffsetTop(topTarget) + topTarget.offsetHeight
  const referenceBottom = getOffsetTop(bottomTarget)

  // 是否在popup状态
  const popupState = clientY > referenceTop && clientY < referenceBottom
  if (!popupState) target = clientY < referenceTop ? topTarget : bottomTarget

  return { target, popupState }
}

const getOffsetTop = obj => {
  let tmp = obj.offsetTop
  let val = obj.offsetParent
  while (val != null) {
    tmp += val.offsetTop
    val = val.offsetParent
  }
  return tmp
}
const getOffsetLeft = obj => {
  let tmp = obj.offsetLeft
  let val = obj.offsetParent
  while (val != null) {
    tmp += val.offsetLeft
    val = val.offsetParent
  }
  return tmp
}
</script>

<style lang="scss">
$height: 32px;
.drag-shrink-popup {
  position: relative;
  display: grid;

  .drag-area {
    cursor: move;

    .drag-target {
      width: 100%;
      height: $height;
      background: rgba(var(--primary), 1);
      cursor: move;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-flow: row nowrap;
      font-size: 14px;
      font-family: Microsoft YaHei Regular, Microsoft YaHei Regular-Regular;
      font-weight: 400;

      .header-left {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-flow: row nowrap;
        color: rgba(#FFF, 1);
        flex: 1;
        width: 0;
        pointer-events: none;

        .icon-box {
          display: flex;
          width: $height;
          height: $height;
          margin: 0 4px;
          justify-content: center;
          align-items: center;
          flex-grow: 0;
          flex-shrink: 0;

          & > * {
            font-size: 18px;
            color: var(--color);
            width: $height - 8px;
            height: $height - 8px;
            flex-grow: 0;
            flex-shrink: 0;
          }
        }

        .poptitle {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }

      .close-box {
        display: flex;
        width: $height;
        height: $height;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        flex-grow: 0;
        flex-shrink: 0;
        color: rgba(#FFF, 1);
        pointer-events: auto;
        transition: background-color 0.3s ease-in-out;

        &:hover {
          background-color: rgba(#FF0000, 1); //关闭悬浮
        }
      }
    }

    .drag-target-btn {
      background: rgba(var(--background), 1);
      display: flex;
      width: 24px;
      height: $height;
      align-items: center;
      padding: 4px;

      .move-icon {
        width: 100%;
        height: 100%;
        border-left: 3px dotted rgba(var(--color), 1);
      }
    }

    & > * {
      pointer-events: none;
    }
  }

  .content {
    width: 100%;
    height: 100%;
    background: rgba(var(--background), 1);
  }
}

.popup-trans {
  border: 1px solid rgba(var(--color), 0.1);
  grid-template-rows: $height 1fr;
  box-shadow: 0 2px 12px 0 rgba(var(--color), 0.1);
}
.popup-row {
  min-width: 60px;
  height: unset;
  grid-template-columns: 24px 1fr;
  border: 1px solid rgba(var(--color), 0.1);
}
</style>
