<template>
  <div class="spinner-input">
    <input
      value="0"
      v-bind="$attrs"
      ref="input"
      @input="handleInput"
      @change="handleChange"
    />
    <div class="input-number__decrease" @click="decrease" />
    <div class="input-number__increase" @click="increase" />
  </div>
</template>

<script>
export default {
  name: 'InputNumber',
  data () {
    return {
      value: 0
    }
  },
  props: {},
  computed: {},
  components: {},
  mounted () {

  },
  methods: {
    decrease () {
      const { step, max } = this.$attrs
      if (this.value + step > max) return
      this.value += step
      this.$refs.input.value = this.value
    },
    increase () {
      const { step, min } = this.$attrs
      if (this.value + step < min) return
      this.value -= step
      this.$refs.input.value = this.value
    },
    handleChange (e) {
      const target = e.target.value
      const { min, max, step } = this.$attrs

      if (this.value < 0) {
        this.value = target < min ? min : target % step === 0 ? target : Math.ceil(target) - step
      } else {
        this.value = target > max ? max : target % step === 0 ? target : Math.floor(target) + step
      }
      this.$refs.input.value = this.value

      this.$emit('change', target)
    },
    handleInput (e) {
      this.$emit('input', e.target.value)
    }
  },
  watch: {
    value (val) {
      this.$emit('input', val)
      this.$emit('change', val)
    }
  }
}
</script>

<style lang="scss" scoped>
$height: 24px;
.spinner-input {
  position: relative;

  input {
    width: 100%;
    display: block;
    height: $height;
    border: 1px solid #e1e1e1;
    padding: 2px 15px 2px 4px;
    border-radius: 3px;
    line-height: $height - 4px;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }

  .input-number__decrease {
    width: 15px;
    height: 12px;
    background: #e1e1e1;
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;

    &::before {
      content: "";
      display: block;
      width: 0;
      height: 0;
      border-left: 3px solid transparent;
      border-right: 3px solid transparent;
      border-bottom: 4px solid #ffffff;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
    }
  }

  .input-number__increase {
    width: 15px;
    height: 12px;
    background: #e1e1e1;
    position: absolute;
    bottom: 0;
    right: 0;
    cursor: pointer;

    &::before {
      content: "";
      display: block;
      width: 0;
      height: 0;
      border-left: 3px solid transparent;
      border-right: 3px solid transparent;
      border-top: 4px solid #ffffff;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
    }
  }

  .input-number__decrease,
  .input-number__increase {
    &:hover {
      background: rgba(var(--primary), 0.6);
    }
  }
}
</style>
