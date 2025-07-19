<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
import SvgIcon from '@/components/SvgIcon'
// import store from '@/store'
const store = useStore()

const toggleClick = () => {
  store.commit('app/toggleSidebar')
}
const icon = computed(() => {
  return store.getters.sidebarOpened ? 'hamburger-opened' : 'hamburger-closed'
})
</script>

<template>
  <div class="hamburger-container" @click="toggleClick">
    <svg-icon id="guide-hamburger" class="hamburger" :icon="icon"></svg-icon>
  </div>
</template>

<style lang="scss" scoped>
/* 样式 */
.hamburger-container {
  padding: 0 16px;
  .hamburger {
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
  }
}
</style>
