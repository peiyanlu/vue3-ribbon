<template>
  <div
    class="drag-popup-container"
    :style="{
      width: `${width}px`,
      maxHeight: `${32+height}px`,
      left: `${offsetLeft+left}px`,
      top: `${offsetTop+top}px`
    }"
    v-show="show"
    @dragstart="()=>false"
  >
    <div class="drag-target" @mousedown.stop="dragStart" >
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
  name: 'DragPopup',
  data () {
    return {
      dragging: false,
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

        const { clientWidth: width, clientHeight: height } = target
        const { clientWidth, clientHeight } = document.querySelector(this.container)

        const moveX = clientX - disX < this.offsetLeft
          ? this.offsetLeft
          : clientX - disX > this.offsetLeft + clientWidth - width
            ? this.offsetLeft + clientWidth - width
            : clientX - disX

        const moveY = clientY - disY > this.offsetTop + clientHeight - height
          ? this.offsetTop + clientHeight - height
          : clientY - disY < this.offsetTop
            ? this.offsetTop
            : clientY - disY

        target.style.left = moveX + 'px'
        target.style.top = moveY + 'px'
        target.style.zIndex = 1000
      }
      document.onmouseup = (e) => {
        target.style.zIndex = ''
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
  watch: {}
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
  display: grid;
  grid-template-rows: $height 1fr;
  background: rgba(var(--background), 1);
  position: fixed;
  box-shadow: 0 0 2px 0 rgba(var(--color), 0.15);
  pointer-events: none;

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
        background-color: rgba(#ff0000, 1); //关闭悬浮
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

  & > * {
    pointer-events: auto;
  }
}
</style>
