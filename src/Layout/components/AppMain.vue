<script setup>
import { watch } from 'vue'
import { isTags } from '@/utils/tags'
import { generateTitle, watchSwitchLang } from '@/utils/i18n'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

const route = useRoute()
// 生成title
const getTitle = (route) => {
  let title = ''
  if (!route.meta) {
    const pathArr = route.path.split('/')
    title = pathArr[pathArr.length - 1]
  } else {
    title = generateTitle(route.meta.title)
  }
  return title
}
const store = useStore()

watch(
  route,
  (to, from) => {
    if (!isTags(to.path)) return
    const { fullPath, meta, name, params, path, query } = to
    console.log(store.getters.tagsViewList)
    store.commit('app/addTagsViewList', {
      fullPath,
      meta,
      name,
      params,
      path,
      query,
      title: getTitle(to)
    })
  },
  {
    immediate: true
  }
)
watchSwitchLang(() => {
  store.getters.tagsViewList.forEach((item, index) => {
    store.commit('app/changeTagsTitle', {
      index,
      tag: {
        ...item,
        title: getTitle(item)
      }
    })
  })
})
</script>

<template>
  <div class="app-main">
    <router-view v-slot="{ Component, route }">
      <transition name="fade-transform" mode="out-in">
        <!-- 具备组件缓存功能 -->
        <keep-alive>
          <component :is="Component" :key="route.path" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<style>
.app-main {
  min-height: calc(100vh - 50px - 41px);
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 101px 20px 20px 20px;
  box-sizing: border-box;
}
</style>
