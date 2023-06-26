<template>
  <div class="ribbon-box" v-clickoutside="hide">
    <div
      class="tools-preview-container"
      @click="handleClick"
      ref="reference"
    >
      <div class="tools-preview">
        <div class="preview-icon">
          <ribbon-icon icon-class="logo" />
        </div>
        <div class="preview-label">{{ config.label }}</div>
        <div class="preview-arrow" />
      </div>
    </div>
    <drop-down
      ref="dropdown"
      v-show="showDropdown"
      v-model="showDropdown"
      :config="config"
    ></drop-down>
  </div>
</template>

<script>
import DropDown from './DropDown'

export default {
  name: 'BoxSmall',
  data () {
    return {
      showDropdown: false
    }
  },
  props: {
    config: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  computed: {},
  components: { DropDown },
  mounted () {

  },
  methods: {
    handleClick () {
      this.showDropdown = !this.showDropdown
    },
    hide () {
      this.showDropdown = false
    }
  },
  watch: {}
}
</script>

<style lang="scss" scoped>
.ribbon-box {
  width: 80px;
  height: 100px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  $radius: 2px;
  .tools-preview-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    .tools-preview {
      text-align: center;

      .preview-icon {
        width: 32px;
        height: 32px;
        display: inline-block;
        vertical-align: middle;
        text-align: center;
        transition: background .25s ease-in-out;
        margin-top: -2px;

        & > * {
          display: block;
          font-size: 32px;
          width: 100%;
          height: 100%;
        }
      }

      .preview-label {
        width: 56px;
        color: rgba(var(--color), 1);
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        padding: 0 4px;
        margin-top: 2px;
        position: relative;
        font-size: 10px;
        line-height: 12px;
        transition: background .25s ease-in-out;
      }

      .preview-arrow {
        width: 100%;
        height: 10px;
        position: relative;
        border-radius: 0 0 $radius $radius;
        transition: all 0.3s ease-in-out;

        &::before {
          content: "";
          display: block;
          width: 0;
          height: 0;
          border-left: 4px solid transparent;
          border-top: 4px solid rgba(var(--color), 1);
          border-right: 4px solid transparent;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
}

</style>
