<template>
  <div class="flex">
    <template v-if="!isMobile">
      <Notice id="header-notice" />
      <!--全屏 -->
      <div class="setting-item" @click="toggle">
        <svg-icon :icon-class="isFullscreen ? 'fullscreen-exit' : 'fullscreen'" />
      </div>
      <el-tooltip :content="$t('sizeSelect.tooltip')" effect="dark" placement="bottom">
        <size-select class="setting-item" />
      </el-tooltip>
      <!-- 语言选择 -->
      <lang-select class="setting-item" />
    </template>

    <!-- 用户头像 -->
    <el-dropdown class="setting-item" trigger="click">
      <div class="flex-center h100% p10px">
        <img
          :src="userStore.user.avatar + '?imageView2/1/w/80/h/80'"
          class="rounded-full mr-10px w24px w24px"
        />
        <span>{{ userStore.user.username }}</span>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <a target="_blank" href="https://juejin.cn/post/7228990409909108793">
            <el-dropdown-item>{{ $t('navbar.profile') }}</el-dropdown-item>
          </a>
          <el-dropdown-item divided @click="logout">
            {{ $t('navbar.logout') }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

    <!-- 设置 -->
    <template v-if="defaultSettings.showSettings">
      <div class="setting-item" @click="settingStore.settingsVisible = true">
        <svg-icon icon-class="setting" />
      </div>
    </template>
  </div>
</template>
<script setup>
import { useGlobalStore, useTabviewStore, useUserStore, useSettingsStore } from '@/stores'
import defaultSettings from '@/config/settings'
import { DeviceEnum } from '@/enums/DeviceEnum'
import Notice from './Notice/index.vue'

const globalStore = useGlobalStore()
const tabviewStore = useTabviewStore()
const userStore = useUserStore()
const settingStore = useSettingsStore()

const route = useRoute()
const router = useRouter()

const isMobile = computed(() => globalStore.device === DeviceEnum.MOBILE)

const { isFullscreen, toggle } = useFullscreen()

/**
 * 注销
 */
function logout() {
  ElMessageBox.confirm('确定注销并退出系统吗？', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
    lockScroll: false
  }).then(() => {
    userStore
      .logout()
      .then(() => {
        tabviewStore.delAllViews()
      })
      .then(() => {
        router.push(`/login?redirect=${route.fullPath}`)
      })
  })
}
</script>
<style lang="scss" scoped>
.setting-item {
  display: inline-block;
  min-width: 40px;
  height: $navbar-height;
  line-height: $navbar-height;
  color: var(--el-text-color);
  text-align: center;
  cursor: pointer;

  &:hover {
    background: rgb(0 0 0 / 10%);
  }
}

.layout-top,
.layout-mix {
  .setting-item,
  .el-icon {
    color: var(--el-color-white);
  }
}

.dark .setting-item:hover {
  background: rgb(255 255 255 / 20%);
}
</style>
