<!-- 接口文档 -->
<template>
  <div class="app-container">
    <el-card class="box-card" shadow="always">
      <template #header>
        <div class="card-header">
          <h3 class="text-center">Vite5 + Vue3 + Pinia + Element-plus搭建企业级前端项目</h3>
        </div>
      </template>
      <el-row class="card-content">
        <p>
          本文从0到1描述了搭建一个管理前端项目模板的基本步骤，其中包括pnpm、vue3、vite5、Element-Plus、Vue-Router、Pinia、Axios等前端主流技术栈。希望通过本项目能够让大家在学习Vue3等技术栈时少花些时间，少走些弯路。
        </p>
      </el-row>
    </el-card>
    <el-card class="box-card" shadow="always">
      <template #header>
        <div class="card-header">
          <span>技术栈</span>
        </div>
      </template>
      <el-row class="card-content">
        <el-table :data="tableData" stripe border class="box-card">
          <el-table-column prop="name" label="名字" width="200" />
          <el-table-column prop="desc" label="描述" />
          <el-table-column prop="address" label="地址" width="350" />
        </el-table>
      </el-row>
    </el-card>
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="项目初始化" name="1">
        <template #title>
          <span class="p-2 text-14px">项目初始化</span>
        </template>
        <div class="p-2">
          1. 首先需要安装<a href="https://nodejs.org/" target="_blank">nodejs</a>，版本要求大于等于V20
        </div>
        <div class="p-2">2. 安装pnpm：npm install pnpm -g</div>
        <div class="p-2">
          3. 按照Vite官方文档 - 搭建Vite项目说明，执行以下命令完成 vue 、Vue Router、Pinia 模板项目的初始化
          <ul>
            <li>pnpm create vite@latest</li>
            <li>√ Project name: ... projectname</li>
            <li>√ Select a framework: » Vue</li>
            <li>√ Select a variant: » Customize with create-vue</li>
            <li>Vue.js - The Progressive JavaScript Framework</li>
            <li>√ 是否使用 TypeScript 语法？ ... <b>否</b> / 是</li>
            <li>√ 是否启用 JSX 支持？ ... <b>否</b> / 是</li>
            <li>√ 是否引入 Vue Router 进行单页面应用开发？ ... 否 / <b>是</b></li>
            <li>√ 是否引入 Pinia 用于状态管理？ ... 否 / <b>是</b></li>
            <li>√ 是否引入 Vitest 用于单元测试？ ... 否 / <b>是</b></li>
            <li>√ 是否要引入一款端到端（End to End）测试工具？ » No</li>
            <li>√ 是否引入 ESLint 用于代码质量检测？ ... 否 / <b>是</b></li>
            <li>√ 是否引入 Prettier 用于代码格式化？ ... 否 / <b>是</b></li>
            <li>√ Add Vue DevTools extension for debugging? (experimental) ... <b>否</b> / 是</li>
          </ul>
        </div>
        <div class="p-2">
          4. 安装项目依赖<br />
          cd projectname<br />
          pnpm install<br />
          pnpm update<br />
          pnpm format
        </div>
        <div class="p-2">
          5. 启动项目<br />
          pnpm dev<br />
          浏览器访问: http://localhost:5173
        </div>
        <div class="p-2">
          6. 整合Pinia<br />
          Pinia 是 Vue 的专属状态管理库，它允许你跨组件或页面共享状态。<br />
          请参考Pinia的文档:
          <a href="https://pinia.vuejs.org/" target="_blank">https://pinia.vuejs.org/</a> 和stores目录下的代码
        </div>
        <div class="p-2">
          7. 整合Vue-Router<br />
          Vue-Router 是 Vue 的路由管理器。<br />
          请参考Vue-Router的文档: <a href="https://router.vuejs.org/" target="_blank">https://router.vuejs.org/</a>"
          和stores目录下的代码
        </div>
        <div class="p-2">
          8. vue-i18n 自定义国际化<br />
          安装依赖: pnpm add vue-i18n<br />
          自定义语言包请参考locale目录
        </div>
      </el-collapse-item>
      <el-collapse-item name="2">
        <template #title>
          <span class="p-2 text-14px">整合Element-Plus</span>
        </template>
        <div class="p-2">
          1. 本地安装Element Plus<br />
          pnpm add element-plus
        </div>
        <div class="p-2">
          2. 安装组件按需自动导入<br />
          pnpm add -D unplugin-auto-import unplugin-vue-components
        </div>
        <div class="p-2">
          3. vite.config.ts - 自动导入配置
          <pre>
  import AutoImport from "unplugin-auto-import/vite";
  import Components from "unplugin-vue-components/vite";
  import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
  AutoImport({
    imports: ["vue", "vue-router", "vue-i18n", "pinia", "@vueuse/core"],
    resolvers: [
      ElementPlusResolver(),
    ],
    vueTemplate: true,
    dts: false,
  }),
  Components({
    resolvers: [
      ElementPlusResolver(),
    ],
    dirs: ["src/components", "src/**/components"],
    dts: false,
  })</pre
          >
        </div>
        <div class="p-2">
          4. Element-Plus的国际化<br />
          Element Plus 提供了一个 Vue 组件 ConfigProvider 用于全局配置国际化的设置<br />
          请参考App.vue和src/stores/modules/golbal.js，以及src/components/LangSelect
        </div>
      </el-collapse-item>
      <el-collapse-item name="3">
        <template #title>
          <span class="p-2 text-14px">整合Axios和Mock</span>
        </template>
        <div class="p-2">
          1. 安装依赖<br />
          pnpm add axios
        </div>
        <div class="p-2">
          2. Axios工具类封装<br />
          请参考src/utils/http-utils
        </div>
        <div class="p-2">
          3. API定义<br />
          请参考src/api
        </div>
        <div class="p-2">
          4. 安装Mock Server<br />
          pnpm add -D vite-plugin-mock-dev-server
        </div>
        <div class="p-2">
          5. vite.config.ts配置Mock和代理
          <pre>
  plugins: [
    env.VITE_USE_MOCK === "true" ? mockDevServerPlugin() : null,
  ]
  server: {
    host: '0.0.0.0',
    port: Number(env.VITE_APP_PORT),
    open: true,
    proxy: {
      /** 代理前缀为 /mock 的请求  */
      [env.VITE_APP_BASE_URL]: {
        changeOrigin: true,
        target: env.VITE_APP_API_URL, // 接口地址
        rewrite: (path) => path.replace(new RegExp("^" + env.VITE_APP_BASE_URL), ''),
      }
    }
  }</pre
          >
        </div>
        <div class="p-2">
          6. 实现mock数据<br />
          请参考mock目录
        </div>
      </el-collapse-item>
      <el-collapse-item name="4">
        <template #title>
          <span class="p-2 text-14px">整合SVG图标</span>
        </template>
        <div class="p-2">
          1. 安装依赖<br />
          pnpm add -D vite-plugin-svg-icons@2.0.1
        </div>
        <div class="p-2">
          2. main.ts 引入注册脚本<br />
          import 'virtual:svg-icons-register';
        </div>
        <div class="p-2">
          3. vite.config.ts配置插件
          <pre>
  plugins: [
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [resolve(pathSrc, "assets/icons")],
      // 指定symbolId格式
      symbolId: "icon-[dir]-[name]",
    }),
  ]</pre
          >
        </div>
        <div class="p-2">
          4. SVG 组件封装<br />
          请参考src/components/SvgIcon/index.vue
        </div>
      </el-collapse-item>
      <el-collapse-item name="5">
        <template #title>
          <span class="p-2 text-14px">整合scss和unocss</span>
        </template>
        <div class="p-2">
          1. 安装依赖<br />
          pnpm add -D sass<br />
          pnpm add -D unocss
        </div>
        <div class="p-2">
          2. 创建 variables.scss 变量文件<br />
          src/styles/variables.scss 添加变量 $bg-color 定义，注意规范变量以 $ 开头
        </div>
        <div class="p-2">
          3. vite.config.ts配置css和unocss
          <pre>
  import UnoCSS from "unocss/vite";
  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
        additionalData: `@use "@/styles/variables.scss" as *;`
      },
    },
  },
  plugins: [
    UnoCSS({
      hmrTopLevelAwait: false,
    }),
  ]</pre
          >
        </div>
        <div class="p-2">
          4. main.js引入<br />
          import 'uno.css'
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup>
const activeNames = ref(['1'])
const handleChange = (val) => {
  console.log(val)
}
const tableData = [
  {
    name: 'pnpm',
    desc: '快速的，节省磁盘空间的包管理工具',
    address: 'https://pnpm.io/'
  },
  {
    name: 'vite5',
    desc: '前端开发与构建工具',
    address: 'https://vitejs.dev/'
  },
  {
    name: 'vue3',
    desc: '渐进式JavaScript开发框架',
    address: 'https://vuejs.org'
  },
  {
    name: 'Pinia',
    desc: '新一代状态管理工具',
    address: 'https://pinia.vuejs.org/'
  },
  {
    name: 'Vue Router',
    desc: 'Vue.js 的官方路由',
    address: 'https://router.vuejs.org/'
  },
  {
    name: 'Element Plus',
    desc: '基于Vue 3，面向设计师和开发者的组件库',
    address: 'https://element-plus.org'
  }
]
</script>

<style lang="scss" scoped>
/** 关闭tag标签  */
.app-container {
  /* 50px = navbar = 50px */
  height: calc(100vh - 50px);
  overflow: auto;
}

/** 开启tag标签  */
.hasTabview {
  .app-container {
    /* 84px = navbar + tabs = 50px + 34px */
    height: calc(100vh - 84px);
    overflow: auto;
  }
}
</style>
