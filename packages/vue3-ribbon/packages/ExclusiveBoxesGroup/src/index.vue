<template>
  <div
    class="ribbon-exclusive-boxes"
    ref="exclusiveBoxes"
    :style="{
      width: config.width || '260px',
      height: config.height || '80px'
    }"
    v-clickoutside="hide"
  >
    <div class="exclusive-boxes-preview">
      <div class="exclusive-boxes-preview-container">
        <div
          :style="{ flex: prevFlex }"
          class="exclusive-boxes-preview-box"
          v-for="(item, index) in prevBoxes"
          :key="item.name+index"
          :class="{ isActive: item.name === selected.name }"
          @click.prevent="handleClick(item)"
        >
          <div
            v-if="item.html"
            class="exclusive-boxes-html"
            v-html="item.html"
          />
          <img
            v-else-if="item.image"
            :src="item.image"
            :alt="item.name"
          />
          <ribbon-icon
            v-else
            :icon-class="item.icon"
            class="ribbon-icon"
          />
        </div>
      </div>
      <div class="exclusive-boxes-tools">
        <div class="button prev" @click="prev()" />
        <div class="button next" @click="next()" />
        <div class="button all" @click="showAll()" />
      </div>
    </div>
    <div
      class="exclusive-boxes-dropdown"
      v-show="showDropdown"
      :style="{ height: dropdownHeight }"
    >
      <div class="exclusive-boxes-boxes">
        <div
          v-for="(item, index) in configData.items"
          :key="item.name+index"
        >
          <div class="exclusive-boxes-title">{{ item.name }}</div>
          <div
            class="exclusive-boxes-box"
            :class="{ isActive: item.name === selected.name }"
            @click.prevent="handleClick(item)"
          >
            <div
              v-if="item.html"
              class="exclusive-boxes-html"
              v-html="item.html"
            />
            <img
              v-else-if="item.image"
              :src="item.image"
              :alt="item.name"
            />
            <ribbon-icon
              v-else
              :icon-class="item.icon"
              class="ribbon-icon"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExclusiveBoxes',
  data () {
    return {
      activeIndex: undefined,
      prevIndex: 0,
      showDropdown: false,
      configData: [],
      headerBoxes: [],
      selected: {},
      colNumber: 3
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
  computed: {
    prevBoxes () {
      return this.headerBoxes[this.prevIndex]
    },
    prevFlex () {
      return 1 / this.configData.colNumber || '25%'
    },
    dropdownHeight () {
      const reg = /(\S*)(px|PX)/g
      const res = reg.exec(this.config.height)
      return !res ? '240px' : `${res[1] * this.colNumber}px`
    }
  },
  components: {},
  mounted () {
    this.configData = JSON.parse(JSON.stringify(this.config.data))
    this.colNumber = this.configData.colNumber || this.colNumber
    this.headerBoxes = this.groupingArray(this.configData.items, this.colNumber)
  },
  methods: {
    prev () {
      if (this.prevIndex <= 0) return
      this.prevIndex -= 1
    },
    next () {
      if (this.prevIndex >= this.headerBoxes.length - 1) return
      this.prevIndex += 1
    },
    showAll () {
      this.showDropdown = true
    },
    handleClick (item) {
      this.selected = { ...item }
      this.showDropdown = false

      // this.$ribbon?.$emit('ribbon:params', {
      //   name: this.config.name,
      //   value: item.value
      // })
      this.$ribbon?.$emit('ribbon:command', {
        command: this.configData.command,
        type: this.config.type,
        value: item.value
      })
    },
    groupingArray (data, num) {
      const result = []
      for (var i = 0; i < data.length; i += num) {
        result.push(data.slice(i, i + num))
      }
      return result
    },
    hide () {
      this.showDropdown = false
      this.$forceUpdate()
    }
  },
  watch: {}
}
</script>

<style lang="scss" scoped>
.ribbon-exclusive-boxes {
  display: inline-block;
  vertical-align: top;
  position: relative;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 1px 1px #e1e1e1;

  .exclusive-boxes-preview {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    width: 100%;
    height: 100%;

    .exclusive-boxes-preview-container {
      display: flex;
      width: calc(100% - 20px);
      height: 100%;

      .exclusive-boxes-preview-box {
        margin: 0 1px;
        border: 3px solid transparent;
        border-collapse: collapse;
        box-sizing: border-box;
        overflow: hidden;
        transition: all ease 0.2s;
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        color: rgba(var(--color), 1);

        .exclusive-boxes-html {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        &:hover {
          border: 3px solid rgba($color: #06eace, $alpha: 0.5);
        }

        &:active {
          border: 3px solid rgba($color: #06eace, $alpha: 0.8);
        }
      }

      .isActive {
        border: 3px solid rgba($color: #06eace, $alpha: 1);
      }
    }

    .exclusive-boxes-tools {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-around;

      .button {
        width: 20px;
        height: 20px;
        border-radius: 3px;
        cursor: pointer;
        position: relative;
        transition: background-color 0.3s ease-in-out;

        &:hover {
          background-color: rgba(var(--primary), 0.3);
        }
      }

      .prev {
        &::before {
          content: '';
          display: block;
          width: 0;
          height: 0;
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid rgba(var(--color), 1);
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%);
        }
      }

      .next {
        &::before {
          content: "";
          display: block;
          width: 0;
          height: 0;
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid rgba(var(--color), 1);
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%);
        }
      }

      .all {
        &::before {
          content: '';
          display: block;
          width: 0;
          height: 0;
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid rgba(var(--color), 1);
          position: absolute;
          left: 50%;
          top: 35%;
          transform: translate(-50%,-50%);
        }
        &::after {
          content: '';
          display: block;
          width: 0;
          height: 0;
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid rgba(var(--color), 1);
          position: absolute;
          left: 50%;
          bottom: 35%;
          transform: translate(-50%,50%);
        }
      }
    }
  }

  .exclusive-boxes-dropdown {
    border-radius: 4px;
    position: absolute;
    top: 0;
    z-index: 1;
    width: 100%;
    background-color: rgba(var(--background), 1);

    .exclusive-boxes-header {
      position: relative;
      height: 100%;
      width: 100%;
      overflow: scroll;
    }

    .exclusive-boxes-boxes {
      height: 100%;
      width: 100%;
      overflow-y: scroll;

      &>div {
        .exclusive-boxes-title {
          padding: 0 4px;
          font-size: 12px;
          line-height: 24px;
          background-color: #e1e1e1;
        }

        .exclusive-boxes-box {
          width: 80px;
          height: 80px;
          margin: 0 1px;
          border: 3px solid transparent;
          border-collapse: collapse;
          box-sizing: border-box;
          overflow: hidden;
          transition: all ease 0.2s;
          display: flex;
          align-items: center;

          .exclusive-boxes-html {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          &:hover {
            border: 3px solid rgba($color: #06eace, $alpha: 0.5);
          }

          &:active {
            border: 3px solid rgba($color: #06eace, $alpha: 0.8);
          }
        }

        .isActive {
          border: 3px solid rgba($color: #06eace, $alpha: 1);
        }
      }

    }
  }
}
</style>
