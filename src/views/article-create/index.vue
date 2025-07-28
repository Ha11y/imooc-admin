<template>
  <div class="article-create">
    <el-card>
      <el-input
        v-model="articleTitle"
        clearable
        :placeholder="$t('msg.article.titlePlaceholder')"
        maxlength="20"
        class="title-input"
        style="border: 1px solid #dcdfe6"
      >
      </el-input>
      <el-tabs v-model="activeName">
        <el-tab-pane :label="$t('msg.article.markdown')" name="markdown">
          <Markdown></Markdown>
        </el-tab-pane>
        <el-tab-pane :label="$t('msg.article.richText')" name="editor">
          <Editor></Editor>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Markdown from './components/Markdown.vue'
import Editor from './components/Editor.vue'
const activeName = ref('Markdown')
const articleTitle = ref('')
</script>

<style lang="scss" scoped>
.title-input {
  margin-bottom: 20px;
}
</style>
