<template>
  <div class="upload-excel">
    <!-- 模板内容 -->
    <div class="btn-upload">
      <el-button :loading="loading" type="primary" @click="handleUpload">
        {{ $t('msg.uploadExcel.upload') }}
      </el-button>
    </div>
    <input
      type="file"
      ref="excelUploadInput"
      class="excel-upload-input"
      accept=".xlsx, .xls"
      @change="handleChange"
    />
    <div
      class="drop"
      @drop.stop.prevent="handleDrop"
      @dragover.stop.prevent="handleDragover"
      @dragenter.stop.prevent="handleDragover"
    >
      <i class="el-icon-upload"></i>
      <span>{{ $t('msg.uploadExcel.drop') }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'
import XLSX from 'xlsx'

import { getHeaderRow, isExcel } from './utils'
import { ElMessage } from 'element-plus'
const excelUploadInput = ref(null)
const props = defineProps({
  // 上传前回调
  beforeUpload: Function,
  // 成功回调
  onSuccess: Function
})

// 组件逻辑

// 点击上传触发上传

const loading = ref(false)
const handleUpload = () => {
  excelUploadInput.value.click()
}
const handleChange = (e) => {
  const files = e.target.files
  const rawFile = files[0] // only use fiels[0]
  if (!rawFile) return
  upload(rawFile)
}
// 触发上传事件
const upload = (rawFile) => {
  excelUploadInput.value.value = null

  // 如果没有指定上传前回调的话
  if (!props.beforeUpload) {
    readerData(rawFile)
    return
  }
  // 如果指定了上传前回调，那么只有返回 true 后才回执行后续操作
  const before = props.beforeUpload(rawFile)
  if (before) {
    readerData(rawFile)
  }
}
// 读取数据(异步)
const readerData = (rawFile) => {
  loading.value = true
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    // 该事件在读取操作完成时触发
    reader.onload = (e) => {
      // 1.获取解析到的数据
      const data = e.target.result
      // 2.利用XLSX 对数据进行解析
      const workbook = XLSX.read(data, { type: 'array' })
      // 3.获取第一张表格（工作薄）名称
      const firstSheetName = workbook.SheetNames[0]
      // 4.只读取第一张(sheet1)表格的数据
      const worksheet = workbook.Sheets[firstSheetName]
      // 5.解析数据表头
      const header = getHeaderRow(worksheet)
      // 6.解析数据体
      const results = XLSX.utils.sheet_to_json(worksheet)
      // 7. 传入解析之后的数据
      generateData({ header, results })
      // 8. loading 处理
      loading.value = false
      // 异步完成
      resolve()
    }
    // 启动读取指定的Blob 或File 内容
    reader.readAsArrayBuffer(rawFile)
  })
}
// 根据导入内容，生成数据
const generateData = (excelData) => {
  props.onSuccess && props.onSuccess(excelData)
}
// 拖拽文本释放时触发
const handleDrop = (e) => {
  // 上传中跳过
  if (loading.value) return
  const files = e.dataTransfer.files
  if (files.length !== 1) {
    ElMessage.error('必须要有一个文件')
    return
  }
  const rawFile = files[0]
  if (!isExcel(rawFile)) {
    ElMessage.error('文件必须是 .xlsx,.xls,csv格式')
    return false
  }
  // 触发上传事件
  upload(rawFile)
}

// 拖拽悬停时触发
const handleDragover = (e) => {
  // 在新位置生成源项的副本
  e.dataTransfer.dropEffect = 'copy'
}
</script>

<style scoped>
/* 样式 */
.upload-excel {
  display: flex;
  justify-content: center;
  margin-top: 100px;
  .excel-upload-input {
    display: none;
    z-index: -9999;
  }
  .btn-upload,
  .drop {
    border: 1px dashed #bbb;
    width: 350px;
    height: 160px;
    text-align: center;
    line-height: 160px;
  }
  .drop {
    line-height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #bbb;
    i {
      font-size: 60px;
      display: block;
    }
  }
}
</style>
