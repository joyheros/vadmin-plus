import defaultSettings from '@/config/settings'
import { genMixColor } from '@/utils/color'
import { setStyleProperty } from '@/utils'
import { ThemeEnum } from '@/enums/ThemeEnum'

export const useSettingsStore = defineStore('setting', () => {
  // 是否显示设置
  const settingsVisible = ref(false)
  // 是否显示标签视图
  const showTabs = useStorage('showTabs', defaultSettings.showTabs)
  // 是否显示侧边栏logo
  const showLogo = useStorage('showLogo', defaultSettings.showLogo)
  // 是否显示侧边栏logo
  const showFooter = useStorage('showFooter', defaultSettings.showFooter)
  // 是否固定头部
  const fixHeader = useStorage('fixHeader', defaultSettings.fixHeader)
  // 布局模式：left-左侧模式(默认) top-顶部模式 mix-混合模式
  const layout = useStorage('layout', defaultSettings.layout)
  // 主题颜色
  const themeColor = useStorage('themeColor', defaultSettings.themeColor)
  // 主题：light-亮色(默认) dark-暗色
  const theme = useStorage('theme', defaultSettings.theme)

  watch(
    [theme, themeColor],
    ([newTheme, newThemeColor], [oldTheme, oldThemeColor]) => {
      if (newTheme !== oldTheme) {
        if (newTheme === ThemeEnum.DARK) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      }

      if (newThemeColor !== oldThemeColor) {
        const { DEFAULT, dark, light } = genMixColor(newThemeColor)
        setStyleProperty(`--el-color-primary`, DEFAULT)
        setStyleProperty(`--el-color-primary-dark-2`, dark[2])
        setStyleProperty(`--el-color-primary-light-3`, light[3])
        setStyleProperty(`--el-color-primary-light-5`, light[5])
        setStyleProperty(`--el-color-primary-light-7`, light[7])
        setStyleProperty(`--el-color-primary-light-8`, light[8])
        setStyleProperty(`--el-color-primary-light-9`, light[9])
      }
    },
    {
      immediate: true // 立即执行，确保在侦听器创建时执行一次
    }
  )

  const settingsMap = {
    fixHeader,
    showTabs,
    showLogo,
    showFooter,
    layout
  }

  function changeSetting({ key, value }) {
    const setting = settingsMap[key]
    if (setting) {
      setting.value = value
    }
  }

  /**
   * 切换主题
   */
  function changeTheme(val) {
    theme.value = val
  }

  /**
   * 切换主题颜色
   *
   * @param color 主题颜色
   *
   */
  function changeThemeColor(color) {
    themeColor.value = color
  }

  /**
   * 切换布局
   */
  function changeLayout(val) {
    layout.value = val
  }

  return {
    settingsVisible,
    showTabs,
    fixHeader,
    showLogo,
    showFooter,
    layout,
    themeColor,
    theme,
    changeSetting,
    changeTheme,
    changeThemeColor,
    changeLayout
  }
})
