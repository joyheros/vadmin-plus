<script setup>
import { getSysLog, deleteSysLog } from '@/api/monitor/syslog'

defineOptions({
  name: 'Syslog',
  inheritAttrs: false
})

const queryFormRef = ref(ElForm)

const loading = ref(false)
const ids = ref([])
const total = ref(0)

const queryParams = reactive({
  pageNum: 1,
  pageSize: 10
})

const dataList = ref()

/** 查询 */
function handleQuery() {
  loading.value = true
  getSysLog(queryParams)
    .then(({ data }) => {
      dataList.value = data
      total.value = data.length
    })
    .finally(() => {
      loading.value = false
    })
}
/** 重置查询 */
function resetQuery() {
  queryFormRef.value.resetFields()
  queryParams.pageNum = 1
  handleQuery()
}

/** 行checkbox 选中事件 */
function handleSelectionChange(selection) {
  ids.value = selection.map((item) => item.id)
}

function handleDelete(itemId) {
  const dataIds = [itemId || ids.value].join(',')
  if (!dataIds) {
    ElMessage.warning('请勾选删除项')
    return
  }

  ElMessageBox.confirm('确认删除已选中的数据项?', '警告', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    loading.value = true
    deleteSysLog(dataIds)
      .then(() => {
        ElMessage.success('删除成功')
        resetQuery()
      })
      .finally(() => (loading.value = false))
  })
}

onMounted(() => {
  handleQuery()
})
</script>

<template>
  <div class="app-container">
    <div class="search-container">
      <el-form ref="queryFormRef" :model="queryParams" :inline="true">
        <el-form-item label="所属模块" prop="module">
          <el-input v-model="queryParams.module" placeholder="请输入所属模块" clearable />
        </el-form-item>
        <el-form-item label="操作时间" prop="requestTime">
          <el-date-picker
            v-model="queryParams.requestTime"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期时间"
            end-placeholder="结束日期时间"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleQuery"><svg-icon icon-class="search" />搜索</el-button>
          <el-button @click="resetQuery"><svg-icon icon-class="reset" />重置</el-button>
        </el-form-item>
      </el-form>
    </div>

    <el-card shadow="never" class="table-container">
      <template #header>
        <el-button type="danger" :disabled="ids.length === 0" @click="handleDelete()"
          ><svg-icon icon-class="trash" />删除</el-button
        >
      </template>

      <el-table
        ref="dataTableRef"
        v-loading="loading"
        :data="dataList"
        highlight-current-row
        border
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" fixed="left" width="60" align="center" />
        <el-table-column label="序号" prop="id" min-width="30" />
        <el-table-column label="所属模块" prop="module" width="100" />
        <el-table-column label="请求接口" prop="httpAddr" width="150" />
        <el-table-column label="请求方法" prop="httpMethod" width="100" />
        <el-table-column label="IP地址" prop="netip" width="130" />
        <el-table-column label="地点" prop="address" width="180" />
        <el-table-column label="操作系统" prop="system" width="100" />
        <el-table-column label="浏览器类型" prop="browser" width="100" />
        <el-table-column label="请求耗时" prop="execTime" width="100" />
        <el-table-column label="请求时间" prop="requestTime" min-width="100" />
        <el-table-column label="操作" width="60">
          <template #default="scope">
            <el-button type="primary" size="small" link @click="openDetail(scope.row)">
              <svg-icon icon-class="note" />详情
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <pagination
        v-if="total > 0"
        v-model:total="total"
        v-model:page="queryParams.pageNum"
        v-model:limit="queryParams.pageSize"
        @pagination="handleQuery"
      />
    </el-card>
  </div>
</template>
