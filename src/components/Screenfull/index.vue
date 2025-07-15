<script setup>
import SvgIcon from '@/components/SvgIcon'
import { ref, onMounted, onUnmounted } from 'vue'
import screenfull from 'screenfull'

const isFullscreen = ref(false)

const onToggle = () => {
  screenfull.toggle()
}
// 监听 screenfull 的变化
const change = () => {
  isFullscreen.value = screenfull.isFullscreen
}
// 绑定监听
onMounted(() => {
  screenfull.on('change', change)
})
// 取消监听
onUnmounted(() => {
  screenfull.off('change', change)
})
</script>

<template>
  <div @click="onToggle">
    <SvgIcon :icon="isFullscreen ? 'exit-fullscreen' : 'fullscreen'" />
  </div>
</template>

<style lang="scss" scoped>
/* 样式 */
</style>
