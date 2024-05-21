<script setup>
const userPasswdFormRef = ref()
const userPasswds = reactive({
  oldPassword: '',
  newPassword: '',
  confirmPassword: ''
})

const rules = reactive({
  oldPassword: [{ required: true, message: '密码必填', trigger: 'blur' }],
  newPassword: [{ required: true, message: '密码必填', trigger: 'blur' }],
  confirmPassword: [{ required: true, message: '密码必填', trigger: 'blur' }]
})

// 更新信息
const onSubmit = async (formRef) => {
  await formRef.validate((valid, fields) => {
    if (valid) {
      console.log(userPasswds)
      ElMessage.success('更新信息成功')
    } else {
      ElMessage.error('error submit!', fields)
    }
  })
}
</script>

<template>
  <div :class="['min-w-[180px]', 'max-w-[70%]']">
    <h3 class="my-8">修改密码</h3>
    <el-form ref="userPasswdFormRef" label-position="top" :rules="rules" :model="userPasswds">
      <el-form-item label="旧密码" prop="oldPassword">
        <el-input v-model="userPasswds.oldPassword" placeholder="请输入旧密码" />
      </el-form-item>
      <el-form-item label="新密码" prop="newPassword">
        <el-input v-model="userPasswds.newPassword" placeholder="请输入新密码" clearable />
      </el-form-item>
      <el-form-item label="确认新密码" prop="confirmPassword">
        <el-input v-model="userPasswds.confirmPassword" placeholder="请输入新密码" clearable />
      </el-form-item>
      <el-button type="primary" @click="onSubmit(userPasswdFormRef)"> 更新信息 </el-button>
    </el-form>
  </div>
</template>
