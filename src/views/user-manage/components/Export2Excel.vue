<template>
  <el-dialog
    :title="$t('msg.excel.title')"
    :model-value="modelValue"
    @close="closed"
    width="30%"
  >
    <el-input :placeholder="$t('msg.excel.placeholder')"> </el-input>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="closed">{{ $t('msg.excel.close') }}</el-button>
        <el-button @click="confirm" type="primary"
          >{{ $t('msg.excel.confirm') }}}</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
// import { ref, reactive, onMounted, onUnmounted } from 'vue'

// 组件逻辑
</script>

<style scoped>
/* 样式 */
</style>
