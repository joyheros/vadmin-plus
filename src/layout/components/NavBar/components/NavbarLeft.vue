<template>
  <div class="flex">
    <div
      class="px-[15px] flex items-center justify-center color-[var(--el-text-color-regular)]"
      @click="toggleMenuBar"
    >
      <svg-icon
        class="switcher"
        :class="{ 'is-active': globalStore.menubar.opened }"
        icon-class="side-toggle"
      />
    </div>
    <breadcrumb />
  </div>
</template>

<script setup>
import { useGlobalStore } from '@/stores'

const globalStore = useGlobalStore()

function toggleMenuBar() {
  globalStore.toggleMenuBar()
}
</script>

<style scoped lang="scss">
.switcher {
  vertical-align: middle;
  cursor: pointer;
  transform: scaleX(-1);
}

.switcher.is-active {
  transform: scaleX(1);
}
</style>
