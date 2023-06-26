<template>
  <div class="container">
    <div class="box-tools">
      <template
        v-for="(item,index) of config"
      >
        <component :is="item.type" v-if="item.custom" :key="item.type" />
        <component
          v-else
          :is="item.type"
          :key="item.name+index"
          :config="item"
          v-model="item.value"
        />
      </template>
    </div>
    <div class="ribbon-label">{{ label }}</div>
  </div>
</template>

<script>
export default {
  name: 'BoxTools',
  data () {
    return {}
  },
  props: {
    config: {
      type: Array,
      default: () => [],
      required: true
    },
    label: {
      type: String,
      default: ''
    }
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
.container {
  width: 100%;
  height: 132px;
  max-height: 132px;
  padding-left: 4px;
  padding-right: 4px;
  padding-bottom: 12px;

  .box-tools {

    & > :not(.ribbon-separator):not(.ribbon-break)::after {
      content: "";
      display: block;
      height: 2px;
      user-select: none;
      background: transparent !important;
    }
  }

  .ribbon-label {
    min-width: 54px;
    width: 100%;
    padding: 0 15px;
    font-size: 12px;
    line-height: 12px;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: rgba(var(--color), 0.4);
    position: absolute;
    left: 0;
    bottom: 0;
  }
}
</style>
