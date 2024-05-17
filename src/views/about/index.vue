<template>
  <div>
    <el-card class="m-4 box-card" shadow="never">
      vadmin-plus 是一款开源后台管理系统模版。采用ECMAScript 模块（ESM）规范来编写和组织代码，
      使用了最新的Vue3、Vite、Element-Plus、Pinia、Axios等主流技术开发。
    </el-card>
    <el-card class="m-3 box-card" shadow="never">
      <template #header>
        <div class="card-header">
          <span>平台信息</span>
        </div>
      </template>
      <el-descriptions border size="large" :column="3">
        <el-descriptions-item
          label-class-name="desc-label"
          class-name="desc-info"
          min-width="200px"
        >
          <template #label> 名称 </template>
          {{ name }}
        </el-descriptions-item>
        <el-descriptions-item
          label-class-name="desc-label"
          class-name="desc-info"
          min-width="200px"
        >
          <template #label> 当前版本 </template>
          {{ version }}
        </el-descriptions-item>
        <el-descriptions-item
          label-class-name="desc-label"
          class-name="desc-info"
          min-width="200px"
        >
          <template #label> 最后编译时间 </template>
          {{ buildTimestamp }}
        </el-descriptions-item>
        <el-descriptions-item
          label-class-name="desc-label"
          class-name="desc-info"
          min-width="200px"
        >
          <template #label> 推荐node版本 </template>
          {{ engines.node }}
        </el-descriptions-item>
        <el-descriptions-item
          label-class-name="desc-label"
          class-name="desc-info"
          min-width="200px"
        >
          <template #label> 推荐pnpm版本 </template>
          {{ engines.pnpm }}
        </el-descriptions-item>
        <el-descriptions-item
          label-class-name="desc-label"
          class-name="desc-link"
          min-width="200px"
        >
          <template #label> 代码地址 </template>
          <a href="https://github.com/joyheros/vadmin-plus" target="_blank"> 代码链接 </a>
        </el-descriptions-item>
      </el-descriptions>
    </el-card>

    <el-card class="m-3 box-card" shadow="never">
      <template #header>
        <div class="card-header">
          <span>生产环境依赖</span>
        </div>
      </template>
      <el-descriptions size="large" :column="3" border>
        <el-descriptions-item
          v-for="(item, index) in schema"
          label-class-name="desc-label"
          class-name="desc-link"
          min-width="200px"
        >
          <template #label>
            {{ item.label }}
          </template>
          <a :href="'https://www.npmjs.com/package/' + item.label" target="_blank">
            {{ item.field }}
          </a>
        </el-descriptions-item>
      </el-descriptions>
    </el-card>
    <el-card class="m-3 box-card" shadow="never">
      <template #header>
        <div class="card-header">
          <span>开发环境依赖</span>
        </div>
      </template>
      <el-descriptions size="large" :column="3" border>
        <el-descriptions-item
          v-for="(item, index) in devSchema"
          label-class-name="desc-label"
          class-name="desc-link"
          min-width="200px"
        >
          <template #label>
            {{ item.label }}
          </template>
          <a :href="'https://www.npmjs.com/package/' + item.label" target="_blank">
            {{ item.field }}
          </a>
        </el-descriptions-item>
      </el-descriptions>
    </el-card>
  </div>
</template>

<script setup>
import { ElCard, ElDescriptions, ElDescriptionsItem, ElTag } from 'element-plus'

defineOptions({
  name: 'About'
})

const { pkg, buildTimestamp } = APP_INFO
const { name, version, engines, dependencies, devDependencies } = pkg

const schema = []
const devSchema = []

Object.keys(dependencies).forEach((key) => {
  schema.push({ field: dependencies[key], label: key })
})

Object.keys(devDependencies).forEach((key) => {
  devSchema.push({ field: devDependencies[key], label: key })
})


</script>

<style lang="scss" scoped>
:deep(.desc-label) {
  padding: 8px;
  background-color: #f5f7fa !important;
  border: 1px solid #ebeef5;
}
:deep(.desc-info) {
  padding: 8px;
  color: #606266;
  border: 1px solid #ebeef5;
  background-color: #ebf5ff;
}
:deep(.desc-link) {
  padding: 8px;
  color: #53a7ff;
  border: 1px solid #ebeef5;
}
</style>
