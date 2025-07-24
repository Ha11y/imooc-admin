<template>
  <el-dialog
    :title="$t('msg.excel.title')"
    :model-value="modelValue"
    @close="closed"
    width="30%"
  >
    <el-input :placeholder="$t('msg.excel.placeholder')" v-model="excelName">
    </el-input>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="closed">{{ $t('msg.excel.close') }}</el-button>
        <el-button @click="onConfirm" type="primary" :loading="loading"
          >{{ $t('msg.excel.confirm') }}}</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { watchSwitchLang } from '@/utils/i18n'
import { ref, defineProps, defineEmits } from 'vue'
import { getUserManageAllList } from '@/api/user-manage'
import { formatJson, USER_RELATIONS } from './Export2ExcelConstants.js'
const excel = await import('@/utils/Export2Excel')
const loading = ref(false)
const i18n = useI18n()
defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})
let exportDefaultName = i18n.t('msg.excel.defaultName')
const excelName = ref('')
excelName.value = watchSwitchLang(() => {
  exportDefaultName = i18n.t('msg.excel.defaultName')
  excelName.value = exportDefaultName
})
const emits = defineEmits(['update:modelValue'])
// 导出按钮点击事件
const onConfirm = async () => {
  loading.value = true
  const allUser = (await getUserManageAllList()).list
  const data = formatJson(USER_RELATIONS, allUser)
  excel.excel_json_to_excel({
    // excel 表头
    header: Object.keys(USER_RELATIONS),
    data,
    filename: excelName.value || exportDefaultName,
    // 是否自动列宽
    autoWidth: true,
    // 文件类型
    bookType: 'xlsx'
  })
  closed()
}
// 关闭
const closed = () => {
  loading.value = false
  emits('update:modelValue', false)
}

// 组件逻辑
</script>

<style scoped>
/* 样式 */
</style>
