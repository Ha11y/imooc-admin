<script setup>
import { defineProps } from 'vue'
import { generateTitle } from '@/utils/i18n'
defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})
</script>

<template>
  <i v-if="icon.includes('el-icon')" class="sub-el-icon"></i>
  <svg-icon v-else :icon="icon"></svg-icon>
  <span>{{ generateTitle(title) }}</span>
</template>

<style lang="scss" scoped>
/* 样式 */
</style>
