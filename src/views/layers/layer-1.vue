<template>
  <div style="padding: 30px">
    <el-alert :closable="false" title="菜单一级" type="success">
      <router-view />
    </el-alert>
  </div>
</template>
