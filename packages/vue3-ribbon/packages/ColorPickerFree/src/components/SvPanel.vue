<template>
  <div
    class="ribbon-color-svpanel"
    :style="{
      backgroundColor: background
    }"
  >
    <div class="ribbon-color-svpanel__white" />
    <div class="ribbon-color-svpanel__black" />
    <div
      class="ribbon-color-svpanel__cursor"
      :style="{
        top: cursorTop + 'px',
        left: cursorLeft + 'px'
      }"
    >
      <div />
    </div>
  </div>
</template>

<script>
import draggable from '../draggable'

export default {
  name: 'SvPanel',
  props: {
    color: {
      required: true
    }
  },
  computed: {
    colorValue () {
      const hue = this.color.get('hue')
      const value = this.color.get('value')
      return { hue, value }
    }
  },
  watch: {
    colorValue () {
      this.update()
    }
  },
  methods: {
    update () {
      const saturation = this.color.get('saturation')
      const value = this.color.get('value')

      const el = this.$el
      const { clientWidth: width, clientHeight: height } = el

      this.cursorLeft = saturation * width / 100
      this.cursorTop = (100 - value) * height / 100

      this.background = 'hsl(' + this.color.get('hue') + ', 100%, 50%)'
    },
    handleDrag (event) {
      const el = this.$el
      const rect = el.getBoundingClientRect()

      let left = event.clientX - rect.left
      let top = event.clientY - rect.top
      left = Math.max(0, left)
      left = Math.min(left, rect.width)

      top = Math.max(0, top)
      top = Math.min(top, rect.height)

      this.cursorLeft = left
      this.cursorTop = top
      this.color.set({
        saturation: left / rect.width * 100,
        value: 100 - top / rect.height * 100
      })
    }
  },
  mounted () {
    draggable(this.$el, {
      drag: (event) => {
        this.handleDrag(event)
      },
      end: (event) => {
        this.handleDrag(event)
      }
    })
    this.update()
  },
  data () {
    return {
      cursorTop: 0,
      cursorLeft: 0,
      background: 'hsl(0, 100%, 50%)'
    }
  }
}
</script>
<style lang="scss" scoped>
.ribbon-color-svpanel {
  position: relative;
  width: 280px;
  height: 180px;

  .ribbon-color-svpanel__white,
  .ribbon-color-svpanel__black {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .ribbon-color-svpanel__white {
    background: linear-gradient(90deg,#fff,hsla(0,0%,100%,0));
  }

  .ribbon-color-svpanel__black {
    background: linear-gradient(0deg,#000,transparent);
  }

  .ribbon-color-svpanel__cursor {
    position: absolute;

    &>div {
      width: 4px;
      height: 4px;
      box-shadow: 0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0, 0, 0, 0.3), 0 0 1px 2px rgba(0, 0, 0, 0.4);
      border-radius: 50%;
      transform: translate(-2px,-2px);
    }
  }
}
</style>
