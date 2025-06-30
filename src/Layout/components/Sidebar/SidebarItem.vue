<template>
  <el-sub-menu
    v-if="route.children && route.children.length > 0"
    :index="route.path"
  >
    <template #title>
      <menu-item :title="route.meta.title" :icon="route.meta.icon"></menu-item>
    </template>
    <SidebarItem v-for="item in route.children" :key="item.path" :route="item">
    </SidebarItem>
  </el-sub-menu>
  <el-menu-item v-else :index="route.path">
    <menu-item :title="route.meta.title" :icon="route.meta.icon"></menu-item>
  </el-menu-item>
</template>

<script setup>
import MenuItem from './MenuItem'
import { defineProps } from 'vue'
defineProps({
  route: {
    type: Object,
    required: true
  }
})
</script>

<style scoped lang="scss"></style>
