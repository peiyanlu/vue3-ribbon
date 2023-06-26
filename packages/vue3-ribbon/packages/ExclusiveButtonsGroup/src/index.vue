<template>
  <div class="exclusive-buttons">
    <div
      v-for="tool of tools"
      :key="tool.name"
      :class="{isActive: activeTool.name===tool.name}"
      class="ribbon-button"
      :title='tool.hint'
      @click="handleClick(tool)"
    >
      <ribbon-icon
        :icon-class='tool.icon'
        :icon-type="tool.iconType"
        :title='tool.hint'
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExclusiveButtonsGroup',
  data () {
    return {
      activeTool: null,
      tools: [ {
        name: 'HDEC DrawLine', // 指令名称
        hint: 'Undo (Ctl+Z)', // 指令的快捷键提示
        label: '绘制直线', // 指令标签名
        icon: 'logo' // 指令图标
      }, {
        name: 'HDEC DrawSmartLine',
        hint: 'Redo (Ctl+Y)',
        label: '绘制智能线段',
        icon: 'logo'
      }, {
        name: 'HDEC DrawArc',
        hint: 'Redo (Ctl+Y)',
        label: '绘制圆弧',
        icon: 'logo'
      } ]
    }
  },
  inject: [ '$ribbon' ],
  props: {},
  computed: {},
  components: {},
  mounted () {

  },
  methods: {
    handleClick (tool) {
      this.activeTool = tool
    }
  },
  watch: {}
}
</script>

<style lang="scss" scoped>
.exclusive-buttons {
  display: inline-block;
  height: 24px;

  $small: 16px;
  .ribbon-button {
    display: inline-block;
    padding: 3px;
    border: 1px solid transparent;
    cursor: pointer;
    border-radius: 2px;
    vertical-align: middle;
    transition: all 0.25s ease-in-out;
    color: rgba(var(--color), 1);

    width: $small + 8px;
    height: $small + 8px;

    & > * {
      width: $small;
      height: $small;
      font-size: $small;
      display: block;
    }

    &:hover {
      background: rgba(var(--primary), 0.3);
    }

    &.isActive {
      background-color: rgba(var(--primary), 0.5);
    }
  }
}
</style>
