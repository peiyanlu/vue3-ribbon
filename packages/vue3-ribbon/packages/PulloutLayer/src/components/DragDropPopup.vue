<template>
  <div
    class="drag-drop-popup"
    id="drag"
    :style="{
      width: `${width}px`,
      maxHeight: `${isPopup?32+height:containerHeight}px`,
      left: `${leftVal}px`,
      top: `${topVal}px`
    }"
    v-show="show"
  >
    <div
      class="drag-target"
      draggable="true"
      @dragstart.stop="dragStart"
      @dragend.stop="dragEnd"
    >
      <div class="header-left">
        <div :class="['icon-box']">
          <ribbon-icon class="popicon" :icon-class="icon" />
        </div>
        <div class="poptitle">{{ titleText }}</div>
      </div>
      <div class="close-box" @click="close" draggable="false">
        <ribbon-icon class="popicon" icon-class="close" />
      </div>
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
  name: 'PulloutPopUp',
  data () {
    return {
      cloneDom: null,
      offsetLeft: 0,
      offsetTop: 0,
      offsetRight: 0,
      offsetBottom: 0,
      leftVal: 0,
      topVal: 0,
      containerHeight: 0
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
      default: false
    },
    isPopup: {
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
    }
  },
  computed: {

  },
  components: {

  },
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
      const { clientWidth: w, clientHeight: h } = container
      const { clientWidth: W, clientHeight: H } = document.body
      this.offsetTop = getOffsetTop(container)
      this.offsetLeft = getOffsetLeft(container)
      this.offsetRight = W - w - this.offsetLeft
      this.offsetBottom = H - h - this.offsetTop

      this.containerHeight = h

      // if (top && !this.bottom) {
      //   this.bottomVal = H - this.offsetTop - top - this.height
      // } else {
      //   this.bottomVal = this.offsetBottom + this.bottom
      // }
      //
      // if (left && !this.right) {
      //   this.rightVal = W - this.offsetLeft - left - this.width
      // } else {
      //   this.rightVal = this.offsetRight + this.right
      // }

      if (this.bottom && !this.top) {
        this.topVal = H - this.offsetBottom - this.bottom - this.height
      } else {
        this.topVal = this.offsetTop + this.top
      }

      if (this.right && !this.left) {
        this.leftVal = W - this.offsetRight - this.right - this.width
      } else {
        this.leftVal = this.offsetLeft + this.left
      }
    },
    dragStart (event) {
      this.$emit('dragging', true)
      this.$emit('update:isPopup', true)

      let { target, clientX, clientY, offsetX, offsetY } = event
      target = target.parentNode
      const def = document.getElementById('popup-area')
      this.isDragOut = def.contains(target)
      def.appendChild(target)

      this.offsetX = offsetX
      this.offsetY = offsetY
      target.style.left = `${!this.isDragOut ? clientX : clientX - offsetX}px`
      target.style.top = `${!this.isDragOut ? clientY : clientY - offsetY}px`

      event.dataTransfer.setData('Text', target.id)
      event.dataTransfer.effectAllowed = 'copyMove'
      event.dataTransfer.dropEffect = 'copyMove'

      const clone = this.cloneDom = target.cloneNode(true)
      document.body.appendChild(clone)
      const { clientWidth, clientHeight } = clone

      /**
       * 拖拽时显示窗口的最大宽度
       * @type {number}
       */
      const $width = 240
      const scale = $width / clientWidth
      const width = scale < 1 ? clientWidth * scale : clientWidth
      const height = scale < 1 ? clientHeight * scale : clientHeight

      clone.id = 'cloneDom'
      clone.style.width = `${width}px`
      clone.style.height = `${height}px`
      clone.style.zIndex = -1000

      /**
       * 以拖拽时显示窗口为目标
       * 如果offsetX不大于宽度的一半，使用offsetX
       * 如果offsetX大于宽度的一半，使用鼠标距离右边距的距离，即：clientWidth - offsetX
       * 再判断clientWidth - offsetX是否超过了宽度的一半（超过了说明在中点左侧）
       * @type {*|number|number}
       */
      const X = !this.isDragOut
        ? 0
        : this.offsetX <= $width / 2
          ? this.offsetX
          : $width - (clientWidth - this.offsetX) < $width / 2
            ? $width / 2
            : $width - (clientWidth - this.offsetX) < $width
              ? $width - (clientWidth - this.offsetX)
              : $width
      const Y = !this.isDragOut ? 0 : offsetY
      event.dataTransfer.setDragImage(clone, X, Y)
    },
    dragEnd (event) {
      let { target, clientX, clientY } = event
      target = target.parentNode
      const { clientWidth, clientHeight } = target
      const def = document.getElementById('popup-area')
      const left = getOffsetLeft(def)
      const top = getOffsetTop(def)

      if (this.isDragOut) {
        clientX -= this.offsetX
        clientY -= this.offsetY
      }
      clientX = clientX < left ? left : clientX > (def.clientWidth + left - clientWidth) ? (def.clientWidth + left - clientWidth) : clientX
      clientY = clientY < top ? top : clientY > (def.clientHeight + top - clientHeight) ? (def.clientHeight + top - clientHeight) : clientY

      target.style.left = `${clientX}px`
      target.style.top = `${clientY}px`

      this.cloneDom.remove()

      this.$emit('update:isPopup', def.contains(target))
      this.$emit('dragging', false)
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
    show (value) {
      this.$emit('onClose', !value)
    }
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

<style lang="scss">
$height: 32px;
.drag-drop-popup {
  position: fixed;
  right: 38px;
  top: 50px;
  box-shadow: 0 0 2px 0 rgba(var(--color), 0.15);
  display: grid;
  grid-template-rows: $height minmax(0, 1fr);

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
        background-color: rgba(#FF0000, 1); //关闭悬浮
      }
    }
  }

  .content {
    width: 100%;
    height: 100%;
    overflow-y: hidden;
    background: rgba(var(--background), 1);

    & > * {
      width: 100%;
      height: 100%;
      overflow-y: overlay;
    }
  }
}
</style>
