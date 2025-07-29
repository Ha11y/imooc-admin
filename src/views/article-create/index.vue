<template>
  <div class="article-create">
    <el-card>
      <el-input
        v-model="title"
        clearable
        :placeholder="$t('msg.article.titlePlaceholder')"
        maxlength="20"
        class="title-input"
        style="border: 1px solid #dcdfe6"
      >
      </el-input>
      <el-tabs v-model="activeName">
        <el-tab-pane :label="$t('msg.article.markdown')" name="markdown">
          <Markdown
            :title="title"
            :detail="detail"
            @onSuccess="onSuccess"
          ></Markdown>
        </el-tab-pane>
        <el-tab-pane :label="$t('msg.article.richText')" name="editor">
          <Editor
            :title="title"
            :detail="detail"
            @onSuccess="onSuccess"
          ></Editor>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Markdown from './components/Markdown.vue'
import Editor from './components/Editor.vue'
import { useRoute } from 'vue-router'
import { articleDetail } from '@/api/article'
const activeName = ref('markdown')
// const articleTitle = ref('')
// 处理编辑相关
const detail = ref({})
const title = ref('')
const onSuccess = () => {
  title.value = ''
}

const route = useRoute()
const articleId = route.params.id
const getArticleDetail = async () => {
  console.log(articleId)
  detail.value = await articleDetail(articleId)
  title.value = detail.value.title
}
if (articleId) {
  getArticleDetail()
}
</script>

<style lang="scss" scoped>
.title-input {
  margin-bottom: 20px;
}
</style>
