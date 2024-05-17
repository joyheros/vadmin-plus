<template>
  <div :class="{ 'has-logo': showLogo }">
    <!--混合布局-->
    <div class="flex w-full" v-if="layout == 'mix'">
      <AppLogo v-if="showLogo" :collapse="!globalStore.menubar.opened" />
      <MixTopMenu class="flex-1" />
      <NavbarRight />
    </div>
    <!--左侧布局 || 顶部布局 -->
    <template v-else>
      <AppLogo v-if="showLogo" :collapse="!globalStore.menubar.opened" />
      <el-scrollbar>
        <MainMenu :menu-list="permissionStore.routes" base-path="" />
      </el-scrollbar>
      <NavbarRight v-if="layout === 'top'" />
    </template>
  </div>
</template>

<script setup>
import { useSettingsStore, usePermissionStore, useGlobalStore } from '@/stores'

const globalStore = useGlobalStore()
const settingsStore = useSettingsStore()
const permissionStore = usePermissionStore()

const showLogo = computed(() => settingsStore.showLogo)
const layout = computed(() => settingsStore.layout)
</script>

<style lang="scss" scoped>
.has-logo {
  .el-scrollbar {
    height: calc(100vh - $navbar-height);
  }
}
</style>
