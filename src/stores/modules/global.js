import defaultSettings from '@/config/settings'

// 导入 Element Plus 中英文语言包
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'
import { store } from '@/stores'
import { DeviceEnum } from '@/enums/DeviceEnum'
import { MenuStatusEnum } from '@/enums/MenuStatusEnum'

// setup
export const useGlobalStore = defineStore('app', () => {
  // state
  const device = useStorage('device', DeviceEnum.DESKTOP)
  const size = useStorage('size', defaultSettings.size)
  const locale = useStorage('locale', defaultSettings.locale)
  const menuStatus = useStorage('menuStatus', MenuStatusEnum.CLOSED)

  const menubar = reactive({
    opened: menuStatus.value === MenuStatusEnum.OPENED,
    withoutAnimation: false
  })
  const activeTopMenuPath = useStorage('activeTopMenuPath', '')
  /**
   * 根据语言标识读取对应的语言包
   */
  const curLocale = computed(() => {
    if (locale?.value == 'en') {
      return en
    } else {
      return zhCn
    }
  })

  // actions
  function toggleMenuBar() {
    menubar.opened = !menubar.opened
    menuStatus.value = menubar.opened ? MenuStatusEnum.OPENED : MenuStatusEnum.CLOSED
  }

  function closeMenuBar() {
    menubar.opened = false
    menuStatus.value = MenuStatusEnum.CLOSED
  }

  function openMenuBar() {
    menubar.opened = true
    menuStatus.value = MenuStatusEnum.OPENED
  }

  function toggleDevice(val) {
    device.value = val
  }

  function changeSize(val) {
    size.value = val
  }
  /**
   * 切换语言
   *
   * @param val
   */
  function changeLocale(val) {
    locale.value = val
  }
  /**
   * 混合模式顶部切换
   */
  function activeTopMenu(val) {
    activeTopMenuPath.value = val
  }
  return {
    device,
    menubar,
    curLocale,
    locale,
    size,
    activeTopMenu,
    toggleDevice,
    changeSize,
    changeLocale,
    toggleMenuBar,
    closeMenuBar,
    openMenuBar,
    activeTopMenuPath
  }
})

// 手动提供给 useStore() 函数 pinia 实例
// https://pinia.vuejs.org/zh/core-concepts/outside-component-usage.html#using-a-store-outside-of-a-component
export function useGlobalStoreHook() {
  return useGlobalStore(store)
}
