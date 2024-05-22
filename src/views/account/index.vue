<script setup>
import Profile from './components/profile.vue'
import Preference from './components/preference.vue'
import AccountSecurity from './components/accountSecurity.vue'
import ChangePasswd from './components/changePasswd.vue'

defineOptions({
  name: 'Account'
})
const isOpen = ref(false)
const panels = [
  {
    key: 'profile',
    label: '个人信息',
    icon: 'user',
    component: Profile
  },
  {
    key: 'preference',
    label: '偏好设置',
    icon: 'setting',
    component: Preference
  },
  {
    key: 'accountSecurity',
    label: '账户安全',
    icon: 'shield',
    component: AccountSecurity
  },
  {
    key: 'changePasswd',
    label: '修改密码',
    icon: 'lock',
    component: ChangePasswd
  }
]
const witchPanel = ref('profile')
</script>

<template>
  <el-container class="h-full">
    <el-aside class="overflow-hidden p-2 border-r-[1px]" width="180px">
      <el-menu :default-active="witchPanel" class="account-menu">
        <el-menu-item
          v-for="item in panels"
          :key="item.key"
          :index="item.key"
          @click="
            () => {
              witchPanel = item.key
              isOpen = !isOpen
            }
          "
        >
          <div class="flex items-center">
            <svg-icon :icon-class="item.icon" size="20px" />&nbsp;
            <span>{{ item.label }}</span>
          </div>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <component :is="panels.find((item) => item.key === witchPanel).component" :class="['ml-[60px]']" />
    </el-main>
  </el-container>
</template>

<style lang="scss">
.account-menu {
  background-color: var(--background-color);
  border: none;
  
  .el-menu-item {
    height: 48px !important;
    color: var(--el-text-color-regular);

    &:hover {
      color: var(--menu-hover);
    }

    &.is-active {
      color: var(--menu-active-text) !important;

      &:hover {
        color: var(--menu-hover) !important;
      }
    }
  }
}
</style>
