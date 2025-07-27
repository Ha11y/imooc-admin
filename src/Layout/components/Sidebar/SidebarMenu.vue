<script setup>
// import {} from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { filterRoutes, generateMenu } from '@/utils/route'
import { computed } from 'vue'
// import store from '@/store'
import SidebarItem from '@/layout/components/Sidebar/SidebarItem.vue'
// import MenuItem from './MenuItem.vue'
// import { filter } from 'core-js/core/array'
const router = useRouter()
const routes = computed(() => {
  const filterRoutess = filterRoutes(router.getRoutes())
  return generateMenu(filterRoutess)
})

const route = useRoute()
const activeMenu = computed(() => {
  const { path } = route
  return path
})
</script>

<template>
  <!-- 一级 menu 菜单 -->
  <el-menu
    v-bind:collapse="!$store.getters.sidebarOpened"
    :uniqueOpened="true"
    :default-active="activeMenu"
    :background-color="$store.getters.cssVar.menuBg"
    :text-color="$store.getters.cssVar.menuText"
    :active-text-color="$store.getters.cssVar.menuActiveText"
    router
  >
    <!-- 子集 menu 菜单 -->
    <sidebar-item
      v-for="item in routes"
      :key="item.path"
      :route="item"
    ></sidebar-item>
  </el-menu>
</template>

<style lang="scss" scoped></style>
