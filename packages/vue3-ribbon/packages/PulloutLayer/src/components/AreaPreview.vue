<template>
  <div class="preview">
    <div
      class="preview-left"
      :class="{selected: position==='left'}"
    />
    <div
      class="preview-right"
      :class="{selected: position==='right'}"
    />
    <div
      class="preview-top"
      :class="{selected: position==='top'}"
    />
    <div
      class="preview-bottom"
      :class="{selected: position==='bottom'}"
    />
  </div>
</template>

<script>
export default {
  name: 'AreaPreview',
  data () {
    return {}
  },
  props: {
    position: String
  },
  computed: {},
  components: {},
  mounted () {

  },
  methods: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.preview {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 111;

  & > * {
    position: absolute;
  }

  .preview-left,
  .preview-right {
    width: 50%;
    height: 100%;
    border: 4px solid transparent;
    top: 0;
  }

  .preview-left {
    left: 0;
  }
  .preview-right {
    right: 0;
  }

  .preview-top,
  .preview-bottom {
    width: 100%;
    height: 50%;
    border: 4px solid transparent;
    left: 0;
  }

  .preview-top {
    top: 0;
  }
  .preview-bottom {
    bottom: 0;
  }
}
.selected {
  background: rgba(var(--primary), 0.3);
  border-color: rgba(var(--primary), 1) !important;
}
</style>
