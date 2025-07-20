<script setup>
import { defineProps, ref } from 'vue'
defineProps({
  featuresData: {
    type: Array,
    required: true
  }
})
const activeName = ref(0)
</script>

<template>
  <el-collapse v-model="activeName" accordion>
    <el-collapse-item
      v-for="item in featuresData"
      :key="item.id"
      :title="item.title"
      :name="item.id"
      class="el-collapse-item"
    >
      <div v-html="item.content"></div>
    </el-collapse-item>
  </el-collapse>
</template>

<style lang="scss" scoped>
/* 样式 */
::v-deep .el-collapse-item__header {
  font-weight: bold;
}
.el-collapse-item {
  ::v-deep a {
    color: #2d62f7;
    margin: 0 4px;
  }
}
</style>
