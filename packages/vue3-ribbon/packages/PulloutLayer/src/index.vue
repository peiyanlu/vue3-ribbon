<template>
  <div class="drag-container">
    <div
      id="viewport-area"
      class="grid-container"
      :class="[
        `grid-${isRow?'row':'column'}`,
        isPos?'':`is-${position}`
      ]"
    >
      <slot />
    </div>
    <AreaIndicator
      v-if="dragging"
      :dragging.sync="dragging"
      @position="val=>position=val"
      @dynamicPosition="val=>dynamicPosition=val"
      @isPopup="val=>isPopup=val"
    />
    <AreaPreview
      v-if="dynamicPosition"
      :position.sync="dynamicPosition"
    />
    <div id="popup-area">
      <drag-drop-popup
        @onClose="val=>isClose=val"
        :isPopup.sync="isPopup"
        v-bind="$attrs"
        v-on="$listeners"
        @dragging="val=>dragging=val"
      />
    </div>
  </div>
</template>

<script>
import AreaIndicator from './components/AreaIndicator'
import AreaPreview from './components/AreaPreview'
import DragDropPopup from './components/DragDropPopup'

export default {
  name: 'PulloutLayer',
  data () {
    return {
      position: '',
      dynamicPosition: '',
      dragging: false,
      isPopup: true,
      isClose: false
    }
  },
  props: {

  },
  computed: {
    isRow () {
      return [ 'top', 'bottom' ].includes(this.position)
    },
    isPos () {
      return this.isPopup || this.isClose
    }
  },
  components: { AreaIndicator, AreaPreview, DragDropPopup },
  mounted () {

  },
  methods: {

  },
  watch: {

  }
}
</script>

<style lang="scss" scoped>
.drag-container {
  width: 100%;
  height: 100%;
  position: relative;

  .grid-container {
    width: 100%;
    height: 100%;
    display: grid;
    position: relative;

    & > * {
      width: unset !important;
      height: unset !important;
      position: unset !important;
    }

    &.grid-row {
      grid-auto-flow: row;
      grid-template-rows: repeat(auto-fit, minmax(25%, 1fr));
    }

    &.is-top {
      grid-template-rows: repeat(auto-fit, 200px minmax(25%, 1fr));
    }

    &.is-bottom {
      grid-auto-flow: row;
      grid-template-rows: repeat(auto-fit, minmax(25%, 1fr) 200px);
    }

    &.grid-column {
      grid-template-columns: repeat(auto-fit, minmax(25%, 1fr));
    }

    &.is-left {
      grid-template-columns: repeat(auto-fit,  400px minmax(25%, 1fr));
    }

    &.is-right {
      grid-template-columns: repeat(auto-fit, minmax(25%, 1fr)  400px);
    }
  }
}

#popup-area {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 222;
  pointer-events: none;

  & > * {
    pointer-events: auto;
  }
}
</style>
