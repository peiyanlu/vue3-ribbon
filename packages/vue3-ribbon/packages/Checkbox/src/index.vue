<template>
  <div class="ribbon-checkbox ribbon-unselectable">
    <label>
      <input
        type="checkbox"
        :name="checkbox.name"
        :ref="checkbox.name"
        :value="checkbox.name"
        @click.stop="handleClick(checkbox)"
      />
      <i role="icon" aria-hidden="true" class="check_box_outline_blank ribbon-icon"></i>
      <i role="icon" aria-hidden="true" class="check_box ribbon-icon" style="background-color: rgb(51, 0,0);"></i>
      <span>{{checkbox.label}}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  data () {
    return {
      checkbox: {},
      checkValue: true

    }
  },
  inject: [ '$ribbon' ],
  props: {
    config: {
      type: Object,
      default: () => { },
      required: true
    }
  },
  computed: {},
  components: {},
  mounted () {
    this.checkbox = JSON.parse(JSON.stringify(this.config))
  },
  methods: {
    handleClick (config) {
      const value = this.$refs[config.name].checked
      this.$ribbon?.$emit('ribbon:params', {
        name: config.value,
        value: value
      })
    }
  },
  watch: {},
  beforeDestroy () { }
}
</script>

<style lang="scss" scoped>
.ribbon-checkbox {
  display: inline-block;
  width: 100%;
  width: 120px;
  position: relative;
  transition: all 0.25s ease-in-out;
  vertical-align: middle;
  label * {
    display: inline-block;
    vertical-align: middle;
  }
  label {
    display: block;
    &:after {
      content: "";
      display: block;
      height: 1px;
    }
    input[type="checkbox"] {
      position: absolute;
      clip: rect(0, 0, 0, 0);
    }
    span {
      display: inline;
      font-size: 11px;
    }
    i.check_box_outline_blank {
      display: inline-block;
      width: 14px;
      height: 14px;
      border: 1px solid rgb(51, 51, 51);
      border-radius: 3px;
    }
    i.check_box {
      display: inline-block;
      width: 14px;
      height: 14px;
      position: relative;
      border-radius: 3px;
      // border: 1px solid red;
      &::after {
        display: block;
        content: "";
        width: 8px;
        height: 4px;
        border-left: 2px solid #fff;
        border-bottom: 2px solid #fff;
        transform: rotate(-45deg) translate(1px, -1px);
        position: absolute;
        top: 4px;
        left: 2px;
      }
    }
    input:checked ~ .ribbon-icon:first-of-type,
    input:not(:checked) ~ .ribbon-icon:last-of-type {
      display: none;
    }

    .ribbon-icon {
      margin-right: 5px;
    }
  }
}
</style>
