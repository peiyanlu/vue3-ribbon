<template>
  <div class="ribbon-spinners">
    <div class="ribbon-spinners-group-label">{{ config.label }}</div>
    <div
      v-for="spinner in config.spinners"
      class="ribbon-spinners-spinner"
      :key="spinner.name"
    >
      <label :for="spinner.name">
        <ribbon-icon
          :icon-class='spinner.icon'
          class="spinner-icon"
        />
        <div class="spinner-label">{{ spinner.label }}：</div>
        <input-number
          v-model="spinner.value"
          type="number"
          :min="spinner.min"
          :max="spinner.max"
          :step="spinner.step"
          :name="spinner.name"
          :id="spinner.name"
          @change="handleChange($event,spinner)"
        />
        <div class="ribbon-spinners-spinner-units">{{ config.units }}</div>
      </label>
    </div>
  </div>
</template>

<script>
import InputNumber from './InputNumber'

export default {
  name: 'Spinners',
  data () {
    return {

    }
  },
  props: {
    config: {
      type: Object,
      default: () => ({
        type: 'spinners',
        units: 'in', // spinner units (in, cm, pt, px, pc, etc)
        name: 'spinners:indent', // spinner group name
        label: 'Indent', // spinner group label
        spinners: [
          {
            name: 'HDEC DrawLine', // 指令名称
            label: '绘制直线', // 指令标签名
            icon: 'gis', // 指令图标
            min: -5,
            max: 5,
            step: 0.5
          },
          {
            name: 'HDEC DrawSmartLine',
            label: '绘制智能线段',
            icon: 'gis',
            min: -5,
            max: 5,
            step: 0.5
          }
        ],
        size: 'small',
        items: ''
      }),
      required: true
    }
  },
  computed: {},
  components: { InputNumber },
  mounted () {

  },
  methods: {
    handleChange (e, spinner) {
      console.log(78, e, spinner)
    }
  },
  watch: {

  }
}
</script>

<style lang="scss" scoped>
$height: 24px;
.ribbon-spinners {
  display: inline-block;
  height: $height;
  user-select: none;

  .ribbon-spinners-group-label {
    line-height: 20px;
    font-size: 12px;
    padding-left: 5px;
    color: rgba(var(--color), 1);
  }

  .ribbon-spinners-spinner>label {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    color: rgba(var(--color), 1);

    .spinner-icon {
      display: block;
      width: 16px;
      height: 16px;
      font-size: 16px;
    }

    .spinner-label {
      font-size: 12px;
      line-height: $height;
      padding: 0 3px;
    }
  }

  .ribbon-spinners-spinner + .ribbon-spinners-spinner {
    margin-top: 3px;
  }

  .ribbon-spinners-spinner-units {
    font-size: 12px;
    line-height: $height;
    color: rgba(var(--color), 0.6);
    padding: 0 5px;
  }
}
</style>
