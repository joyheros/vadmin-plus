<!-- 混合布局菜单(top) -->
<template>
  <el-scrollbar>
    <el-menu
      mode="horizontal"
      :default-active="activePath"
      :background-color="variables['menu-background']"
      :text-color="variables['menu-text']"
      :active-text-color="variables['menu-active-text']"
      @select="handleMenuSelect"
    >
      <el-menu-item v-for="route in mixTopMenus" :key="route.path" :index="route.path">
        <template #title>
          <svg-icon v-if="route.meta && route.meta.icon" :icon-class="route.meta.icon" />
          <span v-if="route.path === '/'"> {{ $t('menubar.home') }}</span>
          <template v-else>
            <span v-if="route.meta && route.meta.title" class="ml-1">
              {{ translateRouteTitle(route.meta.title) }}
            </span>
          </template>
        </template>
      </el-menu-item>
    </el-menu>
  </el-scrollbar>
</template>

<script setup>
import { usePermissionStore, useGlobalStore } from '@/stores'
import { translateRouteTitle } from '@/utils/i18n'
import variables from '@/styles/variables.module.scss'

const globalStore = useGlobalStore()
const permissionStore = usePermissionStore()
const router = useRouter()

const activePath = computed(() => globalStore.activeTopMenuPath)

// 顶部菜单集合
const mixTopMenus = ref([])

/**
 * 菜单选择事件
 */
const handleMenuSelect = (routePath) => {
  globalStore.activeTopMenu(routePath)
  permissionStore.setMixLeftMenus(routePath)
  // 获取左侧菜单集合，默认跳转到第一个菜单
  const mixLeftMenus = permissionStore.mixLeftMenus
  goToFirstMenu(mixLeftMenus)
}

/**
 * 默认跳转到左侧第一个菜单
 */
const goToFirstMenu = (menus) => {
  if (menus.length === 0) return

  const [first] = menus

  if (first.children && first.children.length > 0) {
    goToFirstMenu(first.children)
  } else if (first.name) {
    router.push({
      name: first.name
    })
  }
}

// 初始化顶部菜单
onMounted(() => {
  mixTopMenus.value = permissionStore.routes.filter((item) => !item.meta || !item.meta.hidden)
})
</script>
