<template>
  <el-dropdown trigger="click" @command="handleLocaleChange">
    <div>
      <svg-icon icon-class="language" />
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="item in langOptions"
          :key="item.value"
          :disabled="globalStore.curLocale === item.value"
          :command="item.value"
        >
          {{ item.label }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useGlobalStore } from '@/stores/modules/global'
import { LocaleEnum } from '@/enums/LocaleEnum'

defineProps({
  size: {
    type: String,
    required: false
  }
})

const langOptions = [
  { label: '中文', value: LocaleEnum.ZH_CN },
  { label: 'English', value: LocaleEnum.EN }
]

const globalStore = useGlobalStore()
const { locale, t } = useI18n()

function handleLocaleChange(lang) {
  locale.value = lang
  globalStore.changeLocale(lang)

  ElMessage.success(t('langSelect.message.success'))
}
</script>
