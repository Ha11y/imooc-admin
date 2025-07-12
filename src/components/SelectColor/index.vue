<script setup>
import { defineProps, ref, defineEmits } from 'vue'
const predefineColors = [
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
  'rgba(255, 69, 0, 0.68)',
  'rgb(255, 120, 0)',
  'hsv(51, 100, 98)',
  'hsva(120, 40, 94, 0.5)',
  'hsl(181, 100%, 37%)',
  'hsla(209, 100%, 56%, 0.73)',
  '#c7158577'
]
const emits = defineEmits(['update:modelValue'])
defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})
const closed = () => {
  emits('update:modelValue', false)
}
const confirm = () => {
  closed()
}
// 默认色值
const mColor = ref('#00ff00')
</script>

<template>
  <el-dialog
    v-model="dialogVisible"
    :model-value="modelValue"
    width="22%"
    @close="closed"
  >
    <div class="content">
      <p class="title">{{ $t('msg.theme.themeColorChange') }}</p>
      <el-color-picker v-model="mColor" :predefine="predefineColors">
      </el-color-picker>
    </div>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="closed">{{ $t('msg.universal.cancel') }}</el-button>
        <el-button @click="confirm" type="primary">{{
          $t('msg.universal.confirm')
        }}</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped>
/* 样式 */
</style>
