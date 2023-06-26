<template>
  <div class="ribbon-radios ribbon-unselectable">
    <ul>
      <li v-for="(item,index) in radios.items" :key="index">
        <label>
          <input
            type="radio"
            :name="radios.name"
            :id="item.value"
            :value="item.value"
            @change="handleClick(item,radios)"
          />
          <i role="icon" aria-hidden="true" class="radio_button_unchecked ribbon-icon"></i>
          <i role="icon" aria-hidden="true" class="radio_button_checked ribbon-icon"></i>
          <span>{{item.label}}</span>
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Radios',
  data () {
    return {
      radios: {},
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
    this.radios = JSON.parse(JSON.stringify(this.config))
  },
  methods: {
    handleClick (item, radios) {
      // const value = this.$refs[item.value][0].value
      this.$ribbon?.$emit('ribbon:params', {
        name: radios.name,
        value: item.value
      })
    }
  },
  watch: {},
  beforeDestroy () { }
}
</script>

<style lang="scss" scoped>
.ribbon-radios {
  display: inline-block;
  width: 100%;
  // width: 120px;
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
    input[type="radio"] {
      position: absolute;
      clip: rect(0, 0, 0, 0);
    }
    span {
      font-size: 11px;
    }
    i.radio_button_unchecked {
      display: inline-block;
      width: 14px;
      height: 14px;
      border: 1px solid rgb(51, 51, 51);
      border-radius: 50%;
    }
    i.radio_button_checked {
      display: inline-block;
      width: 14px;
      height: 14px;
      position: relative;
      border-radius: 50%;
      border: 1px solid rgb(51, 51, 51);
      &::after {
        display: block;
        content: "";
        width: 8px;
        height: 8px;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgb(51, 51, 51);
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
