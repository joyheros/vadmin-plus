<script setup>
import { useUserStore } from '@/stores/modules/user'
import avatar from '@/assets/avatar.png'

const imgSrc = ref(avatar)
const uploadRef = ref()
const userInfoFormRef = ref()
const userStore = useUserStore()
const userInfos = reactive({
  avatar: userStore.user.avatar,
  nickname: userStore.user.nickname,
  email: userStore.user.email,
  mobile: userStore.user.mobile,
  description: ''
})

const rules = reactive({
  nickname: [{ required: true, message: '昵称必填', trigger: 'blur' }]
})

const onChange = (uploadFile) => {
  const reader = new FileReader()
  reader.onload = (e) => {
    imgSrc.value = e.target.result
  }
  reader.readAsDataURL(uploadFile.raw)
}

// 更新信息
const onSubmit = async (formEl) => {
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log(userInfos)
      ElMessage.success('更新信息成功')
    } else {
      ElMessage.error('error submit!', fields)
    }
  })
}
</script>

<template>
  <div :class="['min-w-[180px]', 'max-w-[70%]']">
    <h3 class="my-8">个人信息</h3>
    <el-form ref="userInfoFormRef" label-position="top" :rules="rules" :model="userInfos">
      <el-form-item label="更新头像">
        <el-avatar :size="80" :src="imgSrc" />
        <el-upload
          ref="uploadRef"
          accept="image/*"
          action="#"
          :limit="1"
          :auto-upload="true"
          :show-file-list="true"
          :on-change="onChange"
          :on-preview="true"
        >
          <el-button plain class="ml-4">
            <svg-icon icon-class="upload" />
            <span class="ml-2">更新头像</span>
          </el-button>
        </el-upload>
      </el-form-item>
      <el-form-item label="昵称" prop="nickname">
        <el-input v-model="userInfos.nickname" placeholder="请输入昵称" />
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="userInfos.email" placeholder="请输入邮箱" clearable />
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input v-model="userInfos.mobile" placeholder="请输入联系电话" clearable />
      </el-form-item>
      <el-form-item label="简介">
        <el-input
          v-model="userInfos.description"
          placeholder="请输入简介"
          type="textarea"
          :autosize="{ minRows: 6, maxRows: 8 }"
          maxlength="56"
          show-word-limit
        />
      </el-form-item>
      <el-button type="primary" @click="onSubmit(userInfoFormRef)"> 更新信息 </el-button>
    </el-form>
  </div>
</template>
