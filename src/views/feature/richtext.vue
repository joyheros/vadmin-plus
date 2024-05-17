<script setup>
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { uploadFileApi } from '@/api/file'

const content = `                     <b>定风波</b>
                    [ 宋·苏轼 ]
莫听穿林打叶声，何妨吟啸且徐行。
竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生。<br/>
料峭春风吹酒醒，微冷，山头斜照却相迎。
回首向来萧瑟处，归去，也无风雨也无晴。
`
const contentRef = ref(content)
const editorRef = shallowRef() // 编辑器实例，必须用 shallowRef
const mode = ref('default') // 编辑器模式
const toolbarConfig = ref({}) // 工具条配置
// 编辑器配置
const editorConfig = ref({
  placeholder: '请输入内容...',
  MENU_CONF: {
    uploadImage: {
      // 自定义图片上传
      async customUpload(file, insertFn) {
        uploadFileApi(file).then((response) => {
          const url = response.data.url
          insertFn(url)
        })
      }
    }
  }
})

const handleCreated = (editor) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}

function handleChange(editor) {
  contentRef.value = editor.getHtml()
}

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})
</script>

<template>
  <div class="editor-wrapper">
    <!-- 工具栏 -->
    <Toolbar
      id="toolbar-container"
      :editor="editorRef"
      :default-config="toolbarConfig"
      :mode="mode"
    />
    <!-- 编辑器 -->
    <Editor
      id="editor-container"
      v-model="contentRef"
      :default-config="editorConfig"
      :mode="mode"
      @on-change="handleChange"
      @on-created="handleCreated"
    />
  </div>
</template>
<style src="@wangeditor/editor/dist/css/style.css"></style>
