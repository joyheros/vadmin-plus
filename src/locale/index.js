import { createI18n } from 'vue-i18n'
import { useGlobalStoreHook } from '@/stores/modules/global'
// 本地语言包
import enLocale from './lang/en'
import cnLocale from './lang/zh-cn'

const globalStore = useGlobalStoreHook()

const messages = {
  'zh-cn': {
    ...cnLocale
  },
  en: {
    ...enLocale
  }
}

const i18n = createI18n({
  legacy: false,
  locale: globalStore.locale,
  messages: messages,
  globalInjection: true,
  silentTranslationWarn: true,
  missingWarn: false,
  silentFallbackWarn: true,
  fallbackWarn: false
})

export default i18n
