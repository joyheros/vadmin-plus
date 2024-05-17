<template>
  <section class="app-main">
    <router-view>
      <template #default="{ Component, route }">
        <transition enter-active-class="animate__animated animate__fadeIn" mode="out-in">
          <keep-alive :include="cachedViews">
            <component :is="Component" :key="route.path" />
          </keep-alive>
        </transition>
      </template>
    </router-view>
  </section>
</template>

<script setup>
import { useTabviewStore } from '@/stores'

const cachedViews = computed(() => useTabviewStore().cachedViews) // 缓存页面集合
</script>

<style lang="scss" scoped>
.app-main {
  position: relative;
  width: 100%;
  min-height: calc(100vh - $navbar-height);
  overflow: hidden;
  background-color: var(--el-bg-color-page);
}

.hasTabview .app-main {
  min-height: calc(100vh - $navbar-height - $tabs-height);
}

.fixed-header + .app-main {
  min-height: 100vh;
  padding-top: $navbar-height;
}

.hasTabview .fixed-header + .app-main {
  min-height: 100vh;
  padding-top: $navbar-height + $tabs-height;
}

.layout-mix,
.layout-top {
  .fixed-header + .app-main {
    padding-top: 0;
  }
}

.layout-mix {
  .app-main {
    height: calc(100vh - $navbar-height);
    padding-top: 0;
    overflow-y: auto;
  }

  .hasTabview .app-main {
    height: calc(100vh - $navbar-height - $tabs-height);
    min-height: calc(100vh - $navbar-height - $tabs-height);
  }

  .fixed-header + .app-main {
    min-height: calc(100vh - $navbar-height);
  }

  .hasTabview .fixed-header + .app-main {
    height: calc(100vh - $navbar-height);
    min-height: calc(100vh - $navbar-height);
    padding-top: $tabs-height;
  }
}

.layout-top {
  .hasTabview .fixed-header + .app-main {
    padding-top: $tabs-height;
  }
}
</style>
