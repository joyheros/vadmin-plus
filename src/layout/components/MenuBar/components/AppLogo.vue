<template>
  <div class="logo-container">
    <transition enter-active-class="animate__animated animate__fadeInLeft">
      <router-link v-if="collapse" class="wh-full flex-center" to="/">
        <img v-if="settingsStore.showLogo" :src="logo" class="logo-image" />
      </router-link>

      <router-link v-else class="wh-full flex-y-center" to="/" style="padding-left: 15px">
        <img v-if="settingsStore.showLogo" :src="logo" class="logo-image" />
        <span class="logo-title"> {{ defaultSettings.title }}</span>
      </router-link>
    </transition>
  </div>
</template>

<script setup>
import defaultSettings from '@/config/settings'
import { useSettingsStore } from '@/stores'
import logo from '@/assets/logo.png'
const settingsStore = useSettingsStore()

defineProps({
  collapse: {
    type: Boolean,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.logo-container {
  width: 100%;
  height: $navbar-height;
  background-color: $menubar-logo-background;

  .logo-image {
    width: 20px;
    height: 20px;
  }

  .logo-title {
    flex-shrink: 0; /* 防止容器在空间不足时缩小 */
    margin-left: 10px;
    font-size: 14px;
    font-weight: bold;
    color: white;
  }
}

.layout-top,
.layout-mix {
  .logo-container {
    width: $menubar-width;
  }

  &.hideMenuBar {
    .logo-container {
      width: $menubar-width-collapsed;
    }
  }
}
</style>
