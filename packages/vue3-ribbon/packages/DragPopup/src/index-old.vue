<template>
  <div
    class="drag-popup-container"
    :style="{
      width: `${(width)}px`,
      maxHeight: `calc(32px + ${height}px)`,
      left: `${leftVal}px`,
      top: `${topVal}px`,
      right: `${rightVal}px`,
      bottom: `${bottomVal}px`,
    }"
    v-show="show"
  >
    <div class="popup-grid">
      <div class="drag-target" @mousedown="drag($event, true)">
        <div class="header-left">
          <div :class="['icon-box']">
            <ribbon-icon class="popicon" :icon-class="icon" />
          </div>
          <div class="poptitle">{{ titleText }}</div>
        </div>
        <div class="close-box" @click="close">
          <ribbon-icon class="popicon" icon-class="close" />
        </div>
      </div>
      <div class="content" :style="{maxHeight: `${height}px`}">
        <template v-if="$slots.default">
          <slot></slot>
        </template>
        <template v-else>
          <component :is="component" v-on="$listeners" v-bind="$attrs" />
        </template>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DragPopup',
  data () {
    return {
      cloneDom: null,
      offsetLeft: 0,
      offsetTop: 0,
      offsetRight: 0,
      offsetBottom: 0,
      leftVal: 0,
      topVal: 0,
      rightVal: 0,
      bottomVal: 0
    }
  },
  props: {
    container: {
      type: String,
      default: ''
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
      default: 320
    },
    height: {
      type: Number,
      default: 480 // 270
    },
    left: {
      type: Number,
      default: 120
    },
    top: {
      type: Number,
      default: 60
    },
    right: {
      type: Number,
      default: 0
    },
    bottom: {
      type: Number,
      default: 0
    },
    ableToFixed: {
      type: Boolean,
      default: false
    },
    doNotSendCommand: {
      type: Boolean,
      default: false
    }
  },
  computed: {

  },
  components: {

  },
  mounted () {
    console.log('testA', this.$attrs, this.$listeners)
    this.$nextTick(() => {
      this.observe(document.querySelector('.popup-grid'))
    })
  },
  methods: {
    observe (dom) {
      let tempHeight = 0
      const mutationObserver = new MutationObserver(() => {
        const height = dom.clientHeight
        if (height !== tempHeight) {
          tempHeight = height
          // 之后更新外部容器等操作
          this.initPosition(this.width, height)
        }
      })

      mutationObserver.observe(dom, {
        childList: true, // 子节点的变动（新增、删除或者更改）
        attributes: true, // 属性的变动
        characterData: true, // 节点内容或节点文本的变动
        subtree: true // 是否将观察器应用于该节点的所有后代节点
      })
    },
    initPosition (width, height) {
      const container = document.querySelector(this.container)
      const { clientWidth: w, clientHeight: h } = container
      const { clientWidth: W, clientHeight: H } = document.documentElement
      this.offsetTop = getOffsetTop(container)
      this.offsetLeft = getOffsetLeft(container)
      this.offsetRight = W - w - this.offsetLeft
      this.offsetBottom = H - h - this.offsetTop

      if (this.top && !this.bottom) {
        this.bottomVal = H - this.offsetTop - this.top - height
      } else {
        this.bottomVal = this.offsetBottom + this.bottom
      }

      if (this.left && !this.right) {
        this.rightVal = W - this.offsetLeft - this.left - width
      } else {
        this.rightVal = this.offsetRight + this.right
      }

      if (this.bottom && !this.top) {
        this.topVal = H - this.offsetBottom - this.bottom - height
      } else {
        this.topVal = this.offsetTop + this.top
      }

      if (this.right && !this.left) {
        this.leftVal = W - this.offsetRight - this.right - width
      } else {
        this.leftVal = this.offsetLeft + this.left
      }
    },
    drag (evt, flag = true) {
      if (!flag) return

      let { target, target: { parentNode }, clientX, clientY } = evt
      target = parentNode.parentNode
      const { offsetWidth: width, offsetHeight: height } = parentNode

      const disX = clientX - target.offsetLeft
      const disY = clientY - target.offsetTop

      document.onmousemove = e => {
        let left = e.clientX - disX
        let top = e.clientY - disY

        const area = document.querySelector(this.container)
        const { clientWidth, clientHeight } = area
        const areaWidth = clientWidth + getOffsetLeft(area)
        const areaHeight = clientHeight + getOffsetTop(area)

        left = left <= this.offsetLeft ? this.offsetLeft : left >= areaWidth - width ? areaWidth - width : left
        top = top <= this.offsetTop ? this.offsetTop : top >= areaHeight - height ? areaHeight - height : top

        target.style.left = left + 'px'
        target.style.top = top + 'px'

        return false
      }
      document.onmouseup = e => {
        document.onmousemove = null
        document.onmouseup = null
      }
      return false
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

  }
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

<style lang="scss" scoped>
$height: 32px;
.drag-popup-container {
  background: rgba(var(--background), 1);
  position: fixed;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  pointer-events: none;

  .popup-grid {
    display: grid;
    grid-template-rows: $height 1fr;

    .drag-target {
      width: 100%;
      height: $height;
      background: #06ceae;
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
        color: #ffffff;
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
            color: rgba(var(--color), 1);
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
        color: #ffffff;
        transition: background-color 0.3s ease-in-out;

        &:hover {
          background-color: rgba(#ff0000, 1); //关闭悬浮
        }
      }
    }

    .content {
      width: 100%;
      height: 100%;
      background: #ffffff;

      & > * {
        width: 100%;
        height: 100%;
        overflow-y: auto;
      }
    }
  }

  & > * {
    pointer-events: auto;
  }
}
</style>
