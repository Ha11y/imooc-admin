<template>
  <div class="">
    <div class="article-detail-container">
      <h2 class="title">{{ detail.title }}</h2>
      <div class="header">
        <span class="author">
          {{ $t('msg.article.author') }}:{{ detail.author }}
        </span>
        <span class="time">
          {{ $t('msg.article.time') }}:{{ detail.time }}
        </span>
        <el-button type="text" class="edit" @click="onEditClick">{{
          $t('msg.article.edit')
        }}</el-button>
      </div>
      <div class="content" v-html="detail.content"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { articleDetail } from '@/api/article'
import { watchSwitchLang } from '@/utils/i18n'
import { useRoute } from 'vue-router'
const route = useRoute()
const articleId = route.params.id
const detail = ref({})
// 获取文章详情数据
const getArticleDetail = async () => {
  const res = await articleDetail(articleId)
  detail.value = res
}
getArticleDetail()
watchSwitchLang(getArticleDetail)
</script>

<style lang="scss" scoped>
.article-detail-container {
  .title {
    font-size: 22px;
    text-align: center;
    padding: 12px 0;
  }
  .header {
    padding: 26px 0;
    .author {
      font-size: 14px;
      color: #555666;
      margin-right: 20px;
    }
    .time {
      font-size: 14px;
      color: #999aaa;
      margin-right: 20px;
    }
    .edit {
      float: right;
    }
  }
  .content {
    font-size: 14px;
    padding: 20px 0;
    border-top: 1px solid #d4d4d4;
  }
}
</style>
