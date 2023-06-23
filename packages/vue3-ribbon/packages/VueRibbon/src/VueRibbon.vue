<script setup lang="ts"></script>

<template>
  <div class="cs-ribbon" ref="ribbonContainer">
    <!--Ribbon工具-->
    <div v-if="!readOnly">
      <div class="ribbon-container" :class="{ 'is-disabled': disabled }" v-show="!hidden && !readOnly">
        <quick-launch-toolbar :config="config.quickLaunchToolbar" :file-name="fileName" :logo="logo" />
        <ribbon-tabs :config="config.tabs" :fileTabMenu="config.fileTabMenu" :expanded="expanded" :auth="auth" />
      </div>
    </div>
    <div v-else />

    <div class="content-container">
      <!--顶部功能栏-->
      <div class="content-top" :class="{ 'is-disabled': disabled }" id="contentTop" v-show="!readOnly" />

      <!--内容区-->
      <div id="content" class="content">
        <!--<pullout-layer v-bind.sync="dragdropConfig.attrs" v-on="dragdropConfig.listeners">-->
        <!--  <div>-->
        <!--    <div style="position: relative; width: 100%; height: 100%">-->
        <!--      <ribbon-bangs :class="{ 'is-disabled': disabled }" :config="config.bangs" />-->
        <!--      <slot />-->
        <!--    </div>-->
        <!--  </div>-->
        <!--</pullout-layer>-->
        <!--<drag-popup v-bind.sync="dragConfig.attrs" v-on="dragConfig.listeners" />-->
      </div>

      <!--底部功能栏-->
      <div v-if="!readOnly">
        <div class="content-bottom" :class="{ 'is-disabled': disabled }" @dragstart="(_) => false">
          <div id="contentBottom">
            <component v-for="popup of popupShrinkConfig" :is="popup" :key="popup" />
          </div>
          <slot name="content-bottom" />
        </div>
      </div>
      <div v-else />
    </div>
  </div>
</template>


<style lang='scss' scoped>
.vue-ribbon {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  box-sizing: border-box;
  background: rgba(var(--background), 1);
  
  .ribbon-container {
    width: 100%;
    background: rgba(var(--background), 1);
    position: relative;
    box-shadow: inset 0 0 0 1px rgba(var(--background), 0.1);
    user-select: none;
    
    & > * {
      flex-shrink: 0;
      flex-grow: 0;
    }
    
    &::after {
      content: "";
      display: table;
      clear: both;
    }
  }
  
  .content-container {
    position: relative;
    flex: 1;
    height: 0;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    user-select: none;
    background: rgba(var(--background), 1);
    
    .content-top {
      background: rgba(var(--background), 1);
    }
    
    .content {
      position: relative;
      flex: 1;
    }
    
    .content-bottom {
      background: rgba(var(--background), 1);
    }
    
    #contentTop,
    #contentBottom {
      display: flex;
      flex-flow: row wrap;
      background-color: rgba(var(--background), 1);
    }
  }
  
  .is-disabled {
    filter: grayscale(60%);
    user-select: none;
    cursor: not-allowed;
    pointer-events: none;
  }
}
</style>
