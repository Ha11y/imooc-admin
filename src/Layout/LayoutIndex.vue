<script setup>
import SidebarIndex from '@/Layout/components/Sidebar/SidebarIndex.vue'
import Navbar from '@/Layout/components/NavBar.vue'
import AppMain from '@/Layout/components/AppMain.vue'
import variables from '@/styles/variables.module.scss'
</script>

<template>
  <div
    class="app-wrapper"
    :class="[$store.getters.sidebarOpened ? 'openSidebar' : 'hideSidebar']"
  >
    <SidebarIndex
      class="sidebar-container"
      :style="{ backgroundColor: variables.menuBg }"
    ></SidebarIndex>
    <div class="main-container">
      <div class="fixed-header">
        <Navbar></Navbar>
      </div>
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
  transition: width 0.26s;
}
.hideSidebar .fixed-header {
  width: calc(100% - #{$hideSideBarWidth});
}

//
</style>
