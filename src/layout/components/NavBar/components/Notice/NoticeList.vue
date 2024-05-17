<script setup>
import NoticeItem from './NoticeItem.vue'

const props = defineProps({
  list: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <div v-if="props.list.length">
    <NoticeItem v-for="(item, index) in props.list" :key="index" :noticeItem="item" />
  </div>
  <el-empty v-else description="$t('notice.empty')" />
</template>
