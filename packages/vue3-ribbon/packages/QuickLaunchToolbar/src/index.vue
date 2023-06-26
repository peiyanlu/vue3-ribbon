<template>
  <div class="ribbon-QuickLaunchToolbar">
    <div>
      <div class="ribbon-logo">
        <ribbon-icon icon-class="logo" />
      </div>
      <ribbon-button
        v-for="item of config"
        :key="item.name"
        :config="item"
      />
    </div>
    <div class="file-name">{{ fileName }}</div>
    <div>
      <!--waiting-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuickLaunchToolbar',
  data () {
    return {}
  },
  inject: [ '$ribbon' ],
  props: {
    config: {
      type: Array,
      default: () => [],
      required: true
    },
    fileName: String,
    logo: String
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
$height: 24px;

.ribbon-QuickLaunchToolbar {
  width: 100%;
  height: $height;
  overflow: hidden;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  & > * {
    color: rgba(var(--color), 1);
    max-width: 30%;
  }

  & > :first-child {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;

    .ribbon-logo {
      display: inline-block;
      padding: 1px;
      border: 1px solid transparent;
      border-radius: 2px;
      vertical-align: middle;
      transition: all 0.25s ease-in-out;
      color: rgba(var(--color), 1);
      margin: 0 4px;

      & > * {
        width: 20px;
        height: 20px;
        font-size: 20px;
        display: block;
      }
    }
  }

  .file-name {
    max-width: 30%;
    font-size: 12px;
    line-height: $height;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    & > * {
      width: 100%;
      line-height: $height;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>
