<template>
  <div class="area-indicator" >
    <div
      class="indicator-left"
      @drop.prevent="onDdrop($event,'left')"
      @dragenter.prevent="onEnter($event,'left')"
      @dragleave.prevent="onLeave($event,'left')"
      @dragover.prevent
    >
      <ribbon-icon icon-class="left" />
    </div>
    <div
      class="indicator-right"
      @drop.prevent="onDdrop($event,'right')"
      @dragenter.prevent="onEnter($event,'right')"
      @dragleave.prevent="onLeave($event,'right')"
      @dragover.prevent
    >
      <ribbon-icon icon-class="right" /></div>
    <div
      class="indicator-top"
      @drop.prevent="onDdrop($event,'top')"
      @dragenter.prevent="onEnter($event,'top')"
      @dragleave.prevent="onLeave($event,'top')"
      @dragover.prevent
    >
      <ribbon-icon icon-class="up" /></div>
    <div
      class="indicator-bottom"
      @drop.prevent="onDdrop($event,'bottom')"
      @dragenter.prevent="onEnter($event,'bottom')"
      @dragleave.prevent="onLeave($event,'bottom')"
      @dragover.prevent
    >
      <ribbon-icon icon-class="down" /></div>
  </div>
</template>

<script>
export default {
  name: 'AreaIndicator',
  data () {
    return {
      dynamicPosition: '',
      position: ''
    }
  },
  props: {
    dragging: Boolean
  },
  computed: {},
  components: {},
  mounted () {

  },
  methods: {
    onDdrop (event, position) {
      this.$emit('update:dragging', false)
      this.$emit('dynamicPosition', '')
      this.$emit('position', position)
      this.$emit('isPopup', false)

      const data = event.dataTransfer.getData('Text')
      const target = document.getElementById('viewport-area')
      const dom = document.getElementById(data)
      if (dom) {
        if ([ 'top', 'left' ].includes(position)) {
          target.prepend(dom)
        } else {
          target.append(dom)
        }
      }
    },
    onEnter (event, position) {
      this.$emit('dynamicPosition', position)
    },
    onLeave (event, position) {
      this.$emit('dynamicPosition', '')
    }
  },
  watch: {}
}
</script>

<style lang="scss" scoped>
.area-indicator {
  width: 100%;
  height: 100%;
  pointer-events: none;
  border: 4px solid transparent;
  position: absolute;
  z-index: 333;
  left: 0;
  top: 0;

  & > * {
    pointer-events: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: 1px solid rgba(var(--primary), 1);
    color: #fff;
    background: rgba(var(--primary), 0.4);
  }
  & > * > * {
    width: 32px;
    pointer-events: none;
  }

  .indicator-left {
    width: 40px;
    height: 80px;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(0,-50%);
  }
  .indicator-right {
    width: 40px;
    height: 80px;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(0,-50%);
  }
  .indicator-top {
    width: 80px;
    height: 40px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%,0);
  }
  .indicator-bottom {
    width: 80px;
    height: 40px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,0);
  }
}
</style>
