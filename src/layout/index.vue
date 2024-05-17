<template>
  <div class="wh-full" :class="classObj">
    <!-- 遮罩层 -->
    <div
      v-if="classObj.mobile && classObj.openMenuBar"
      class="wh-full fixed-lt z-999 bg-black bg-opacity-30"
      @click="handleOutsideClick"
    ></div>

    <!-- 公用侧边栏 -->
    <MenuBar class="menubar-container" />

    <!-- 混合布局 -->
    <div v-if="layout === 'mix'" class="mix-container">
      <div class="mix-container__left">
        <MainMenu :menu-list="mixLeftMenus" :base-path="activeTopMenuPath" />
        <div class="menubar-toggle">
          <div
            class="px-[15px] flex items-center justify-center color-[var(--el-text-color-regular)]"
            @click="toggleMenuBar"
          >
            <svg-icon
              class="switcher"
              :class="{ 'is-active': globalStore.menubar.opened }"
              icon-class="indent-decrease"
            />
          </div>
        </div>
      </div>

      <div :class="{ hasTabview: showTabs }" class="main-container">
        <div :class="{ 'fixed-header': fixHeader }">
          <Tabview v-if="showTabs" />
        </div>
        <AppMain />
        <Settings v-if="defaultSettings.showSettings" />
      </div>
    </div>

    <!-- 左侧和顶部布局 -->
    <div v-else :class="{ hasTabview: showTabs }" class="main-container">
      <div :class="{ 'fixed-header': fixHeader }">
        <NavBar v-if="layout === 'left'" />
        <Tabview v-if="showTabs" />
      </div>
      <AppMain />
      <Settings v-if="defaultSettings.showSettings" />
    </div>
    <Footer v-if="showFooter" />
  </div>
</template>

<script setup>
import { useGlobalStore, useSettingsStore, usePermissionStore } from '@/stores'
import defaultSettings from '@/config/settings'
import { DeviceEnum } from '@/enums/DeviceEnum'

const globalStore = useGlobalStore()
const settingsStore = useSettingsStore()
const permissionStore = usePermissionStore()

const fixHeader = computed(() => settingsStore.fixHeader) // 是否固定header
const showTabs = computed(() => settingsStore.showTabs) // 是否显示tabview
const showFooter = computed(() => settingsStore.showFooter)
const layout = computed(() => settingsStore.layout) // 布局模式 left top mix
const activeTopMenuPath = computed(() => globalStore.activeTopMenuPath) // 顶部菜单激活path
const mixLeftMenus = computed(() => permissionStore.mixLeftMenus) // 混合布局左侧菜单

watch(
  () => activeTopMenuPath.value,
  (newVal) => {
    permissionStore.setMixLeftMenus(newVal)
  },
  {
    deep: true,
    immediate: true
  }
)

const classObj = computed(() => ({
  hideMenuBar: !globalStore.menubar.opened,
  openMenuBar: globalStore.menubar.opened,
  mobile: globalStore.device === DeviceEnum.MOBILE,
  'layout-left': layout.value === 'left',
  'layout-top': layout.value === 'top',
  'layout-mix': layout.value === 'mix'
}))

const width = useWindowSize().width
const WIDTH = 992 // 响应式布局容器固定宽度  大屏（>=1200px） 中屏（>=992px） 小屏（>=768px）

watchEffect(() => {
  if (width.value < WIDTH) {
    globalStore.toggleDevice(DeviceEnum.MOBILE)
    globalStore.closeMenuBar()
  } else {
    globalStore.toggleDevice(DeviceEnum.DESKTOP)

    if (width.value >= 1200) {
      globalStore.openMenuBar()
    } else {
      globalStore.closeMenuBar()
    }
  }
})

function handleOutsideClick() {
  globalStore.closeMenuBar()
}

function toggleMenuBar() {
  globalStore.toggleMenuBar()
}
</script>

<style lang="scss" scoped>
.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - $menubar-width);
  transition: width 0.28s;
}

.menubar-container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  width: $menubar-width;
  height: 100%;
  overflow: hidden;
  background-color: $menu-background;
  transition: width 0.28s;

  :deep(.el-menu) {
    border: none;
  }
}

.main-container {
  position: relative;
  min-height: 100%;
  margin-left: $menubar-width;
  transition: margin-left 0.28s;
}

.switcher {
  vertical-align: middle;
  cursor: pointer;
  transform: scaleX(-1);
}

.switcher.is-active {
  transform: scaleX(1);
}

.layout-top {
  .fixed-header {
    top: $navbar-height;
    width: 100%;
  }

  .menubar-container {
    z-index: 999;
    display: flex;
    width: 100% !important;
    height: $navbar-height;

    :deep(.el-scrollbar) {
      flex: 1;
      height: $navbar-height;
    }

    :deep(.el-menu-item),
    :deep(.el-sub-menu__title),
    :deep(.el-menu--horizontal) {
      height: $navbar-height;
      line-height: $navbar-height;
    }

    :deep(.el-menu--collapse) {
      width: 100%;
    }
  }

  .main-container {
    min-height: calc(100vh - $navbar-height);
    padding-top: $navbar-height;
    margin-left: 0;
  }
}

.layout-mix {
  .menubar-container {
    width: 100% !important;
    height: $navbar-height;

    :deep(.el-scrollbar) {
      flex: 1;
      height: $navbar-height;
    }

    :deep(.el-menu-item),
    :deep(.el-sub-menu__title),
    :deep(.el-menu--horizontal) {
      height: $navbar-height;
      line-height: $navbar-height;
    }

    :deep(.el-menu--horizontal.el-menu) {
      border: none;
    }
  }

  .mix-container {
    display: flex;
    height: 100%;
    padding-top: $navbar-height;

    .mix-container__left {
      position: relative;
      width: $menubar-width;
      height: 100%;

      :deep(.el-menu) {
        height: 100%;
        border: none;
      }

      .menubar-toggle {
        position: absolute;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 50px;
        line-height: 50px;
        box-shadow: 0 0 6px -2px var(--el-color-primary);

        div:hover {
          background-color: var(--menu-background);
        }

        :deep(svg) {
          color: var(--el-color-primary) !important;
        }
      }
    }

    .main-container {
      flex: 1;
      min-width: 0;
      margin-left: 0;

      .fixed-header {
        top: $navbar-height;
      }
    }
  }
}

.hideMenuBar {
  .fixed-header {
    left: $menubar-width-collapsed;
    width: calc(100% - $menubar-width-collapsed);
  }

  .main-container {
    margin-left: $menubar-width-collapsed;
  }

  &.layout-top {
    .fixed-header {
      left: 0;
      width: 100%;
    }

    .main-container {
      margin-left: 0;
    }
  }

  &.layout-mix {
    .fixed-header {
      left: $menubar-width-collapsed;
      width: calc(100% - $menubar-width-collapsed);
    }

    .menubar-container {
      width: 100% !important;
    }

    .mix-container {
      .mix-container__left {
        width: $menubar-width-collapsed;
      }
    }
  }
}

.layout-left.hideMenuBar {
  .menubar-container {
    width: $menubar-width-collapsed !important;
  }

  .main-container {
    margin-left: $menubar-width-collapsed;
  }

  &.mobile {
    .menubar-container {
      pointer-events: none;
      transition-duration: 0.3s;
      transform: translate3d(-210px, 0, 0);
    }

    .main-container {
      margin-left: 0;
    }
  }
}

.mobile {
  .fixed-header {
    left: 0;
    width: 100%;
  }

  .main-container {
    margin-left: 0;
  }

  &.layout-top {
    .menubar-container {
      z-index: 999;
      display: flex;
      width: 100% !important;
      height: $navbar-height;

      :deep(.el-scrollbar) {
        flex: 1;
        min-width: 0;
        height: $navbar-height;
      }
    }

    .main-container {
      padding-top: $navbar-height;
      margin-left: 0;
      overflow: hidden;
    }

    // 顶部模式全局变量修改
    --el-menu-item-height: $navbar-height;
  }
}
</style>
