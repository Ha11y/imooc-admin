<script setup>
import PanThumb from '@/components/PanThumb'
import { useStore } from 'vuex'
const store = useStore()
</script>

<template>
  <div class="author-container">
    <div class="header">
      <PanThumb
        :image="store.getters.userInfo.avatar"
        :height="'60px'"
        :width="'60px'"
        :hoverable="false"
      >
        {{ $t('msg.profile.name') }}</PanThumb
      >
      <div class="header-desc">
        <h3>{{ $t('msg.profile.name') }}</h3>
        <h3>{{ $t('msg.profile.job') }}</h3>
      </div>
    </div>
    <div class="info">
      {{ $t('msg.profile.Introduction') }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 样式 */

.author-container {
  .header {
    display: flex;
    .header-desc {
      margin-left: 12px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      span {
        font-size: 14px;
      }
    }
  }
  .info {
    margin-top: 16px;
    line-height: 22px;
    font-size: 14px;
    text-indent: 26px;
  }
}
</style>
