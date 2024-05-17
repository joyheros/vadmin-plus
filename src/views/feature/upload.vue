<!-- 文件上传组件(单图+多图)示例 -->
<script setup>
import SingleUpload from '@/components/Upload/SingleUpload.vue'
import MultiUpload from '@/components/Upload/MultiUpload.vue'

const singlePicUrl = ref(
  'https://cdn.pixabay.com/photo/2016/10/03/07/00/black-and-white-1711001_1280.jpg'
)
// 这里放外链图片，防止被删
const multiPicUrls = ref([
  'https://cdn.pixabay.com/photo/2017/05/06/14/13/pathway-2289978_1280.jpg',
  'https://cdn.pixabay.com/photo/2015/03/09/18/34/beach-666122_1280.jpg',
  'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_1280.jpg',
  'https://cdn.pixabay.com/photo/2024/02/24/10/31/norway-8593725_1280.jpg'
])
</script>
<template>
  <div class="app-container">
    <el-form>
      <el-form-item label="单图上传">
        <single-upload v-model="singlePicUrl" />
      </el-form-item>
      <el-form-item label="多图上传">
        <multi-upload v-model="multiPicUrls" />
      </el-form-item>
    </el-form>
  </div>
</template>
