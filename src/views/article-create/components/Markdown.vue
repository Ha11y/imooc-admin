<script setup>
import MkEditor from '@toast-ui/editor'
import '@toast-ui/editor/dist/toastui-editor.css'
import '@toast-ui/editor/dist/i18n/zh-cn'
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import { watchSwitchLang } from '@/utils/i18n'
const store = useStore()
// Edit
let mkEditor
let el
const initEditor = () => {
  mkEditor = new MkEditor({
    el,
    height: '500px',
    language: store.getters.language === 'zh' ? 'zh-CN' : 'en',
    previewStyle: 'vertical'
  })
  mkEditor.getMarkdown()
}
onMounted(() => {
  el = document.querySelector('#markdown-box')
  initEditor()
})
watchSwitchLang(() => {
  if (!el) return
  const htmlStr = mkEditor.getHTML()
  mkEditor.destroy()
  initEditor()
  mkEditor.setHTML(htmlStr)
})
</script>

<template>
  <div class="markdown-container">
    <!-- 渲染区域 -->
    <div id="markdown-box"></div>
    <!-- 底部区域 -->
    <div class="bottom">
      <el-button type="primary" @click="onSubmitClick">{{
        $t('msg.article.commit')
      }}</el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 样式 */
.markdown-container {
  .bottom {
    margin-top: 20px;
    text-align: right;
  }
}
</style>
