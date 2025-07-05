<script setup>
import {} from 'vue'
import SidebarMenu from './SidebarMenu.vue'
</script>

<template>
  <div class=" ">
    <div class="logo-container">
      <el-avatar size="44" shape="square" src=""> </el-avatar>
      <h2 class="logo-title" v-if="$store.getters.sidebarOpened">imooc-admin</h2>
    </div>
    <el-scrollbar>
      <SidebarMenu />
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
.logo-container {
  height:44px;
  padding:10px 0 22px 0;
  display:flex;
  align-items:center;
  justify-content:center;
  .logo-title {
    margin-left:10px;
    color:#fff;
    font-weight: 600;
    line-height:50px;
    font-size: 16px;
    white-space: nowrap;
  }
}

</style>
