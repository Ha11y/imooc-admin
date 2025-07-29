<script setup>
import { onMounted, defineEmits, defineProps, watch } from 'vue'
import E from 'wangeditor'
import i18next from 'i18next'
import { useStore } from 'vuex'
import { commitArticle, editArticle } from './commit'
const store = useStore()
// Editor 实例
let editor
// 处理离开页面切换语言导致 dom 无法获取
let el
// 初始化 editor
const props = defineProps({
  title: {
    type: String,
    require: true
  },
  detail: {
    type: Object
  }
})
// 编辑相关
watch(
  () => props.detail,
  (val) => {
    if (val && val.content) {
      editor.txt.html(val.content)
    }
  },
  {
    immediate: true
  }
)
const initEditor = () => {
  editor = new E(el)
  editor.config.zIndex = 1
  // 菜单栏提示
  editor.config.showMenuTooltips = true
  editor.config.menuTooltipPosition = 'down'
  editor.config.lang = store.getters.language === 'zh' ? 'zh-CN' : 'en'
  editor.i18next = i18next
  editor.create()
}
onMounted(() => {
  el = document.querySelector('#editor-box')
  initEditor(el)
})
const emits = defineEmits(['onSuccess'])
const onCommit = async () => {
  if (props.title && props.detail._id) {
    await editArticle({
      id: props.detail._id,
      title: props.title,
      content: editor.txt.html()
    })
  } else {
    await commitArticle({
      title: props.title,
      content: editor.txt.html()
    })
  }
  editor.txt.html('')
  emits('onSuccess')
}
</script>

<template>
  <div class="editor-container">
    <div id="editor-box"></div>
    <div class="bottom">
      <el-button type="primary" @click="onCommit">{{
        $t('msg.article.commit')
      }}</el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 样式 */
.editor-container {
  .bottom {
    margin-top: 20px;
    text-align: right;
  }
}
</style>
