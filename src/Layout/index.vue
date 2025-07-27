<script setup>
import SidebarIndex from '@/layout/components/Sidebar/SidebarIndex.vue'
import Navbar from '@/layout/components/NavBar.vue'
import AppMain from '@/layout/components/AppMain.vue'
import { useStore } from 'vuex'
import TagsView from '@/layout/components/TagsView'
const store = useStore()
</script>

<template>
  <div
    class="app-wrapper"
    :class="[$store.getters.sidebarOpened ? 'openSidebar' : 'hideSidebar']"
  >
    <SidebarIndex
      id="guide-sidebar"
      class="sidebar-container"
      :style="{ backgroundColor: store.getters.cssVar.menuBg }"
    ></SidebarIndex>
    <div class="fixed-header">
      <Navbar></Navbar>
      <!-- tags -->
      <TagsView id="guide-tags"></TagsView>
    </div>
    <div class="main-container">
      <AppMain></AppMain>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~@/styles/mixin.scss';
@import '~@/styles/variables.module.scss';
@import '~@/styles/sidebar.scss';
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  widows: 100%;
}
.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width #{$sdieBarDurations};
}

.hideSidebar .fixed-header {
  width: calc(100% - #{$hideSideBarWidth});
}
</style>
