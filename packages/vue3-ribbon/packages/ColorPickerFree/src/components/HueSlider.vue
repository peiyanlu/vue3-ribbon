<template>
  <div
    class="ribbon-color-hue-slider"
    :class="{ 'is-vertical': vertical }"
  >
    <div
      class="ribbon-color-hue-slider__bar"
      @click="handleClick"
      ref="bar"
    />
    <div
      class="ribbon-color-hue-slider__thumb"
      :style="{
        left: thumbLeft + 'px',
        top: thumbTop + 'px'
      }"
      ref="thumb"
    />
  </div>
</template>

<script>
import draggable from '../draggable'

export default {
  name: 'HueSlider',
  props: {
    color: {
      required: true
    },
    vertical: Boolean
  },
  data () {
    return {
      thumbLeft: 0,
      thumbTop: 0
    }
  },
  computed: {
    hueValue () {
      return this.color.get('hue')
    }
  },
  watch: {
    hueValue () {
      this.update()
    }
  },
  methods: {
    handleClick (event) {
      const thumb = this.$refs.thumb
      const target = event.target

      if (target !== thumb) {
        this.handleDrag(event)
      }
    },
    handleDrag (event) {
      const rect = this.$el.getBoundingClientRect()
      const { thumb } = this.$refs
      let hue

      if (!this.vertical) {
        let left = event.clientX - rect.left
        left = Math.min(left, rect.width - thumb.offsetWidth / 2)
        left = Math.max(thumb.offsetWidth / 2, left)

        hue = Math.round((left - thumb.offsetWidth / 2) / (rect.width - thumb.offsetWidth) * 360)
      } else {
        let top = event.clientY - rect.top
        top = Math.min(top, rect.height - thumb.offsetHeight / 2)
        top = Math.max(thumb.offsetHeight / 2, top)

        hue = Math.round((top - thumb.offsetHeight / 2) / (rect.height - thumb.offsetHeight) * 360)
      }

      this.color.set('hue', hue)
    },
    getThumbLeft () {
      if (this.vertical) return 0
      const el = this.$el
      const hue = this.color.get('hue')

      if (!el) return 0
      const thumb = this.$refs.thumb
      return Math.round(hue * (el.offsetWidth - thumb.offsetWidth / 2) / 360)
    },
    getThumbTop () {
      if (!this.vertical) return 0
      const el = this.$el
      const hue = this.color.get('hue')

      if (!el) return 0
      const thumb = this.$refs.thumb
      return Math.round(hue * (el.offsetHeight - thumb.offsetHeight / 2) / 360)
    },
    update () {
      this.thumbLeft = this.getThumbLeft()
      this.thumbTop = this.getThumbTop()
    }
  },
  mounted () {
    const { bar, thumb } = this.$refs

    const dragConfig = {
      drag: (event) => {
        this.handleDrag(event)
      },
      end: (event) => {
        this.handleDrag(event)
      }
    }

    draggable(bar, dragConfig)
    draggable(thumb, dragConfig)
    this.update()
  }
}
</script>
<style lang="scss" scoped>
.ribbon-color-hue-slider {
  position: relative;
  box-sizing: border-box;
  width: 280px;
  height: 12px;
  background-color: red;

  .ribbon-color-hue-slider__bar {
    position: relative;
    background: linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red);
    height: 100%;
  }

  .ribbon-color-hue-slider__thumb {
    position: absolute;
    cursor: pointer;
    box-sizing: border-box;
    left: 0;
    top: 0;
    width: 4px;
    height: 100%;
    border-radius: 1px;
    background: #fff;
    border: 1px solid #f0f0f0;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.6);
    z-index: 1;
  }
}

.is-vertical {
  width: 12px;
  height: 180px;
  padding: 2px 0;

  .ribbon-color-hue-slider__bar {
    background: linear-gradient(180deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red);
  }

  .ribbon-color-hue-slider__thumb {
    left: 0;
    top: 0;
    width: 100%;
    height: 4px;
  }
}

</style>
