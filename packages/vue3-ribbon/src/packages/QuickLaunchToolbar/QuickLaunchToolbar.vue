<script setup lang="ts">
import RibbonIcon from '../RibbonIcon/RibbonIcon.vue'
</script>

<template>
  <div class="quick-launch-toolbar">
    <div class="toolbar-left">
      <div class="logo">
        <ribbon-icon :icon-type="logo"></ribbon-icon>
      </div>
      
    </div>
    <div class="toolbar-center"></div>
    <div class="toolbar-right"></div>
  </div>
</template>

<style scoped lang="scss"></style>
