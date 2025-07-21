<script setup>
import UploadExcel from '@/components/UploadExcel'
import { userBatchImport } from '@/api/user-manage'
import { generateData } from './utils'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import i18n from '@/i18n'
const router = useRouter()
const onSuccess = async ({ header, results }) => {
  const updateData = generateData(results)
  await userBatchImport(updateData)
  ElMessage.success({
    message: results.length + i18n.t('msg.excel.importSuccess'),
    type: 'success'
  })
  router.push('/user/manage')
}
</script>

<template>
  <upload-excel :onSuccess="onSuccess"> </upload-excel>
</template>

<style lang="scss" scoped></style>
