<template>
  <div class="ribbon-toggle-buttons">
    <div
      v-for="command of config.commands"
      class="toggle-button"
      :class="[
          selected.name === command.name ? 'toggle-button-selected' : '',
          `toggle-button-${config.size}`
        ]"
      :key="command.name"
      :title="command.hint"
      @click="handleChick(command)"
    >
      <ribbon-icon
        :icon-type="command.iconType"
        :icon-class="command.icon"
        :title="command.hint"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToggleButtons',
  data () {
    return {
      selected: {}
    }
  },
  inject: [ '$ribbon' ],
  props: {
    config: {
      type: Object,
      default: () => ({
        type: 'toggle-buttons', // define the type of the tool
        name: 'toggle-buttons:bold-italic-underline-strikethrough', // group name
        size: 'small', // size of the buttons - "small" or "large"
        commands: [
          {
            name: 'bold', // command name
            hint: 'Bold (Ctrl+B)', // optional button tooltip
            label: 'Bold', // optional // optional button label
            icon: 'gis' // optional button icon
          },
          {
            name: 'italic',
            hint: 'Italic (Ctrl+I)',
            label: 'Italic',
            icon: 'dts'
          },
          {
            name: 'underline',
            hint: 'Underline (Ctrl+U)',
            label: 'Underline',
            icon: 'gis'
          },
          {
            name: 'strikethrough',
            hint: 'Strikethrough',
            label: 'Strikethrough',
            icon: 'dts'
          }
        ]
      }),
      required: true
    }
  },
  computed: {},
  components: {},
  mounted () {

  },
  methods: {
    handleChick (current) {
      const selected = this.selected.name === current.name
      this.selected = selected ? {} : { ...current }
      this.$ribbon.$emit('command', {
        command: current.name,
        type: 'toggle-buttons',
        selected: selected
      })
    }
  },
  watch: {}
}
</script>

<style lang="scss" scoped>
.ribbon-toggle-buttons {
  display: inline-block;

  .toggle-button {
    display: inline-block;
    padding: 3px;
    border: 1px solid transparent;
    cursor: pointer;
    border-radius: 2px;
    vertical-align: middle;
    transition: all 0.25s ease-in-out;

    &:hover {
      background: rgba(var(--primary), 0.3);
    }
  }

  $small: 16px;
  $large: 32px;
  .toggle-button-small {
    width: $small + 8px;
    height: $small + 8px;

    &>* {
      width: $small;
      height: $small;
      font-size: $small;
      display: block;
    }
  }

  .toggle-button-large {
    width: $large + 8px;
    height: $large + 8px;

    &>* {
      width: $large;
      height: $large;
      font-size: $large;
      display: block;
    }
  }

  .toggle-button-selected {
    background: rgba(var(--primary), 0.8);
    background: #2b579a;
  }
}
</style>
