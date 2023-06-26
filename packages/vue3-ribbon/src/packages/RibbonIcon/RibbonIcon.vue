<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    iconType?: 'svg' | 'img' | 'iconfont'
    iconClass: string
    className?: string | string[]
    size?: string
  }>(),
  {
    iconType: 'svg',
    size: '16px',
  }
)

const classNameArr = computed(() => {
  if (props.iconType === 'iconfont') {
    const { className, iconClass } = props
    return Array.isArray(className) ? [iconClass].push(className) : [iconClass].concat(className)
  } else {
    return props.className
  }
})

</script>

<template>
  <div class="ribbon-icon" :class="classNameArr">
    <template v-if="iconType === 'iconfont'">
      <i :class="classNameArr" />
    </template>
    <template v-else-if="iconType === 'img'">
      <img :src="iconClass" alt="" />
    </template>
    <template v-else>
      <svg>
        <use fill="currentColor" :href="iconClass" />
      </svg>
    </template>
  </div>
</template>

<style scoped lang="scss">
.ribbon-icon {
  width: v-bind(size);
  height: v-bind(size);
  display: inline-block;
  padding: 2px;
  cursor: pointer;

  i {
    display: block;
    font-size: calc(v-bind(size) - 8px);
  }

  img {
    width: 100%;
    object-fit: contain;
    display: block;
  }

  svg {
    display: block;
    fill: currentColor;
  }
}
</style>
