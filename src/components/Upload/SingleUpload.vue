<template>
  <!-- 上传组件 -->
  <el-upload
    v-model="imgUrl"
    class="single-uploader"
    :show-file-list="false"
    list-type="picture-card"
    :before-upload="handleBeforeUpload"
    :http-request="uploadFile"
  >
    <img v-if="imgUrl" w-full :src="imgUrl" />
    <el-icon v-else class="single-uploader__icon"><svg-icon icon-class="plus" /></el-icon>
  </el-upload>
</template>

<script setup>
import { uploadFileApi } from '@/api/file'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])
const imgUrl = useVModel(props, 'modelValue', emit)

/**
 * 自定义图片上传
 *
 * @param options
 */
async function uploadFile(options) {
  const { data: fileInfo } = await uploadFileApi(options.file)
  imgUrl.value = fileInfo.url
}

/**
 * 限制用户上传文件的格式和大小
 */
function handleBeforeUpload(file) {
  if (file.size > 2 * 1048 * 1048) {
    ElMessage.warning('上传图片不能大于2M')
    return false
  }
  return true
}
</script>

<style scoped lang="scss">
.single-uploader {
  overflow: hidden;
  cursor: pointer;
  border: 1px var(--el-border-color) solid;
  border-radius: 6px;

  &:hover {
    border-color: var(--el-color-primary);
  }

  &___icon {
    width: 256px;
    height: 178px;
    font-size: 28px;
    color: #8c939d;
    text-align: center;
  }
}
</style>
