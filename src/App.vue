<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<script setup>
import { useGlobalStore } from '@/stores'

const globalStore = useGlobalStore()
const locale = computed(() => globalStore.curLocale)
</script>
