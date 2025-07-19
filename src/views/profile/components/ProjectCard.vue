<script setup>
import PanThumb from '@/components/PanThumb'
import { defineProps } from 'vue'
defineProps({
  featureData: {
    type: Array
  }
})
</script>

<template>
  <el-card class="user-container">
    <template #header>
      <div class="header">
        <span>{{ $t('msg.profile.introduce') }}</span>
      </div>
    </template>
    <div class="user-profile">
      <!-- 头像 -->
      <div class="box-center">
        <PanThumb
          :image="$store.getters.userInfo.avatar"
          :height="'100px'"
          :width="'100px'"
          :hoverable="false"
        >
          <div>hell0</div>
          {{ $store.getters.userInfo.title }}</PanThumb
        >
      </div>
      <!-- 姓名和角色 -->
      <div class="box-center">
        <div class="user-name text-center">
          {{ $store.getters.userInfo.username }}
        </div>
        <div class="user-role text-center text-muted">
          {{ $store.getters.userInfo.title }}
        </div>
      </div>
    </div>
  </el-card>
</template>

<style lang="scss" scoped>
/* 样式 */
.user-container {
  .text-muted {
    font-size: 14px;
    color: #777;
  }

  .user-profile {
    text-align: center;
    .user-name {
      font-weight: bold;
    }

    .box-center {
      padding-top: 10px;
    }

    .user-role {
      padding-top: 10px;
      font-weight: 400;
    }
  }
}
</style>
