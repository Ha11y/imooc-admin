<script setup>
import { chapter } from '@/api/user'
import { watchSwitchLang } from '@/utils/i18n'
import { ref } from 'vue'
// import { useStore } from 'vuex'
const chapterData = ref([])
const getChapterData = async () => {
  const res = await chapter()
  chapterData.value = res
}
getChapterData()
watchSwitchLang(getChapterData)
</script>

<template>
  <el-timeline style="max-width: 600px">
    <el-timeline-item
      v-for="item in chapterData"
      center
      :timestamp="item.timestamp"
      placement="top"
      :key="item.id"
    >
      <el-card>
        <h4>{{ item.content }}</h4>
      </el-card>
    </el-timeline-item>
  </el-timeline>
</template>

<style lang="scss" scoped>
/* 样式 */
</style>
