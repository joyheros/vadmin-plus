<template>
  <el-drawer v-model="settingsVisible" size="300" :title="$t('settings.project')">
    <el-divider>{{ $t('settings.theme') }}</el-divider>

    <div class="settings-option">
      <span class="text-xs">{{ $t('settings.themeStyle') }}</span>
      <el-switch
        v-model="isDark"
        :active-icon="Moon"
        :inactive-icon="Sunny"
        @change="changeTheme"
      />
    </div>
    <div class="settings-option">
      <span class="text-xs">{{ $t('settings.themeColor') }}</span>
      <ThemeColorPicker v-model="settingsStore.themeColor" @update:model-value="changeThemeColor" />
    </div>
    <el-divider>{{ $t('settings.pageset') }}</el-divider>

    <div class="settings-option">
      <span class="text-xs">{{ $t('settings.showTabs') }}</span>
      <el-switch v-model="settingsStore.showTabs" />
    </div>

    <div class="settings-option">
      <span class="text-xs">{{ $t('settings.fixHeader') }}</span>
      <el-switch v-model="settingsStore.fixHeader" />
    </div>

    <div class="settings-option">
      <span class="text-xs">{{ $t('settings.showLogo') }}</span>
      <el-switch v-model="settingsStore.showLogo" />
    </div>

    <div class="settings-option">
      <span class="text-xs">{{ $t('settings.showFooter') }}</span>
      <el-switch v-model="settingsStore.showFooter" />
    </div>
    <el-divider>{{ $t('settings.navigation') }}</el-divider>

    <LayoutSelect v-model="settingsStore.layout" @update:model-value="changeLayout" />
  </el-drawer>
</template>

<script setup>
import { useSettingsStore, usePermissionStore, useGlobalStore } from '@/stores'
import { Sunny, Moon } from '@element-plus/icons-vue'
import { LayoutEnum } from '@/enums/LayoutEnum'
import { ThemeEnum } from '@/enums/ThemeEnum'

const route = useRoute()
const globalStore = useGlobalStore()
const settingsStore = useSettingsStore()
const permissionStore = usePermissionStore()

const settingsVisible = computed({
  get() {
    return settingsStore.settingsVisible
  },
  set() {
    settingsStore.settingsVisible = false
  }
})

/**
 * 切换主题颜色
 */
function changeThemeColor(color) {
  settingsStore.changeThemeColor(color)
}

/**
 * 切换主题
 */
const isDark = ref(settingsStore.theme === ThemeEnum.DARK)
const changeTheme = (val) => {
  isDark.value = val
  settingsStore.changeTheme(isDark.value ? ThemeEnum.DARK : ThemeEnum.LIGHT)
}

/**
 * 切换布局
 */
function changeLayout(layout) {
  settingsStore.changeLayout(layout)
  if (layout === LayoutEnum.MIX) {
    route.name && againActiveTop(route.name)
  } else if (layout === LayoutEnum.TOP) {
    globalStore.openMenuBar()
  }
}

function againActiveTop(newVal) {
  const parent = findOutermostParent(permissionStore.routes, newVal)
  if (globalStore.activeTopMenu !== parent.path) {
    globalStore.activeTopMenu(parent.path)
  }
}

function findOutermostParent(tree, findName) {
  let parentMap = {}

  function buildParentMap(node, parent) {
    parentMap[node.name] = parent

    if (node.children) {
      for (let i = 0; i < node.children.length; i++) {
        buildParentMap(node.children[i], node)
      }
    }
  }

  for (let i = 0; i < tree.length; i++) {
    buildParentMap(tree[i], null)
  }

  let currentNode = parentMap[findName]
  while (currentNode) {
    if (!parentMap[currentNode.name]) {
      return currentNode
    }
    currentNode = parentMap[currentNode.name]
  }

  return null
}
</script>

<style lang="scss" scoped>
.settings-option {
  @apply py-1 flex-x-between;
}
</style>
