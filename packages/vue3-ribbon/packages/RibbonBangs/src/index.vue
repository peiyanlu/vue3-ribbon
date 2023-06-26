<template>
  <div class="ribbon-bangs" v-if="config.length">
    <div class="bangs-content" v-show="show">
      <component
        v-for="(item,index) of config"
        :is="item.type"
        :key="item.name+index"
        :config="item"
        v-model="item.value"
      />
    </div>
    <div class="bangs-icon" @click="show=!show">
      <ribbon-icon :icon-class="show?'up':'down'" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'RibbonBangs',
  data () {
    return {
      show: true
    }
  },
  props: {
    config: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  computed: {},
  components: {},
  mounted () {

  },
  methods: {

  },
  watch: {}
}
</script>

<style lang="scss" scoped>
.ribbon-bangs {
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1;
  pointer-events: none;
  user-select: none;

  .bangs-content {
    background: rgba(var(--background), 1);
    //border: 1px solid #e1e1e1;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;

    & > * {
      margin: 0;
      border: none;
      flex-shrink: 0;
      flex-grow: 0;
    }
  }

  .bangs-icon {
    background: rgba(var(--background), 1);
    color: rgba(var(--color), 1);

    & > * {
      cursor: pointer;
      width: 24px;
      height: 12px;
      display: block;
    }
  }

  &:not(.is-disabled){
    .bangs-content,
    .bangs-icon {
      pointer-events: auto;
    }
  }
}
</style>
