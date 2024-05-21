<script setup>
import { getSecurityLog, deleteSecurityLog } from '@/api/monitor/security'

defineOptions({
  name: 'Security',
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
  getSecurityLog(queryParams)
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

/** 删除角色 */
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
    deleteSecurityLog(dataIds)
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
        <el-form-item label="用户名" prop="username">
          <el-input v-model="queryParams.username" placeholder="请输入用户名" clearable />
        </el-form-item>
        <el-form-item label="登录状态" prop="status">
          <el-select v-model="queryParams.status" placeholder="请选择" clearable>
            <el-option label="成功" value="1" />
            <el-option label="失败" value="0" />
          </el-select>
        </el-form-item>
        <el-form-item label="登录时间" prop="loginTime">
          <el-date-picker
            v-model="queryParams.operatingTime"
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
        <el-table-column type="selection" fixed="left" width="55" align="center" />
        <el-table-column label="序号" prop="id" min-width="30" />
        <el-table-column label="用户名" prop="username" width="100" />
        <el-table-column label="登录IP" prop="netip" width="130" />
        <el-table-column label="登录地点" prop="address" width="180" />
        <el-table-column label="所用系统" prop="system" width="100" />
        <el-table-column label="浏览器类型" prop="browser" width="100" />
        <el-table-column label="登录方式" prop="loginMode" width="200" />
        <el-table-column label="登录状态" align="center" width="100">
          <template #default="scope">
            <el-tag v-if="scope.row.status === 1" type="success">成功</el-tag>
            <el-tag v-else type="error">失败</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="登录时间" prop="loginTime" min-width="100" />
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
