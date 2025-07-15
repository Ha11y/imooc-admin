<script setup>
// import { get } from 'core-js/core/dict';
import { watch, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { generateTitle } from '@/utils/i18n'
// 生成数组数据
const route = useRoute()
const store = useStore()
const breadCrumbData = ref([])
const linkHoverColor = ref(store.getters.cssVar.memuBg)
const getBreadcrumb = (route) => {
  breadCrumbData.value = route.matched.filter(
    (item) => item.meta && item.meta.title
  )
}

// 监听路由变化
watch(
  route,
  () => {
    getBreadcrumb(route)
  },
  {
    immediate: true
  }
)
const router = useRouter()
const onLinkClick = (item) => {
  router.push(item.path)
}
</script>
<template>
  <el-breadcrumb class="breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <!-- 不可点击项 -->
      <el-breadcrumb-item v-for="(item, index) in breadCrumbData" :key="index">
        <!-- 不可点击项显示 -->
        <span class="no-redirect" v-if="index === breadCrumbData.length - 1">{{
          generateTitle(item.meta.title)
        }}</span>
        <!--可点击项显示  -->
        <span class="redirect" v-else @click.prevent="onLinkClick(item)">{{
          generateTitle(item.meta.title)
        }}</span>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<style lang="scss" scoped>
.breadcrumb {
  display: inline-block;
  margin-left: 10px;
  font-size: 14px;
  line-height: 50px;
  .redirect {
    color: #666;
    font-size: 600;
  }
  .redirect:hover {
    color: v-bind(linkHoverColor);
    cursor: pointer;
  }
  ::v-deep .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
