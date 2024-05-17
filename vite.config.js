import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import mockDevServerPlugin from "vite-plugin-mock-dev-server";
import { resolve } from "path";
import UnoCSS from "unocss/vite";

import {
  name,
  version,
  engines,
  dependencies,
  devDependencies,
} from "./package.json";

const APP_INFO = {
  pkg: { name, version, engines, dependencies, devDependencies },
  buildTimestamp: new Date().toLocaleString(),
};
const pathSrc = resolve(__dirname, "src");
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    base: './',
    resolve: {
      alias: {
        "@": pathSrc,
      },
    },
    css: {
      // CSS 预处理器
      preprocessorOptions: {
        // 定义全局 SCSS 变量
        scss: {
          javascriptEnabled: true,
          additionalData: `@use "@/styles/variables.scss" as *;`
        },
      },
    },
    plugins: [
      vue(),
      env.VITE_USE_MOCK === "true" ? mockDevServerPlugin() : null,
      UnoCSS({
        hmrTopLevelAwait: false,
      }),
      AutoImport({
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        imports: ["vue", "vue-router", "vue-i18n", "pinia", "@vueuse/core"],
        resolvers: [
          // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
          ElementPlusResolver(),
        ],
        // 是否在 vue 模板中自动导入
        vueTemplate: true,
        // 指定自动导入函数TS类型声明文件路径 (false:关闭自动生成)
        dts: false,
      }),
      Components({
        resolvers: [
          // 自动导入 Element Plus 组件
          ElementPlusResolver(),
        ],
        // 指定自定义组件位置(默认:src/components)
        dirs: ["src/components", "src/**/components"],
        // 指定自动导入组件TS类型声明文件路径 (false:关闭自动生成)
        dts: false,
      }),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [resolve(pathSrc, "assets/icons")],
        // 指定symbolId格式
        symbolId: "icon-[dir]-[name]",
      }),
    ],
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
    },
    build: {
      //target: 'es2015',
      chunkSizeWarningLimit: 2000, // 消除打包大小超过500kb警告
      minify: "terser",
      terserOptions: {
        compress: {
          keep_infinity: true,
          drop_console: true,
          drop_debugger: true,
        },
        format: {
          comments: false, // 删除注释
        },
      },
      rollupOptions: {
        output: {
          entryFileNames: "script/[name].[hash].js",
          chunkFileNames: "script/[name].[hash].js",
          assetFileNames: (assetInfo) => {
            const info = assetInfo.name.split(".");
            let extType = info[info.length - 1];
            if (
              /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i.test(assetInfo.name)
            ) {
              extType = "media";
            } else if (/\.(png|jpe?g|gif|svg)(\?.*)?$/.test(assetInfo.name)) {
              extType = "image";
            } else if (/\.(woff2?|eot|ttf|otf)(\?.*)?$/i.test(assetInfo.name)) {
              extType = "fonts";
            } else if (/\.(css?|sass|scss|less)(\?.*)?$/i.test(assetInfo.name)) {
              extType = "style";
            }
            return `${extType}/[name].[hash].[ext]`;
          },
        },
      },
    },
    define: {
      APP_INFO: JSON.stringify(APP_INFO),
    },
  }
})
