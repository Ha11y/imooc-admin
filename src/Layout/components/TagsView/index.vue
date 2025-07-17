<script setup>
// import { generateTitle } from '@/utils/i18n'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import ContextMenu from './ContextMenu.vue'
import { ref, watch } from 'vue'

const store = useStore()
const route = useRoute()
const isActiveTag = (tag) => {
  return tag.path === route.path
}
const onCloseClick = (tag) => {
  store.commit('app/delTagsView', tag)
  console.log('tag')
}
const visible = ref(false)
const Selectindex = ref(0)
const menuStyle = ref({
  left: 0,
  top: 0
})
/**
 * 展示menu
 */
const openMenu = (e, index) => {
  const { x, y } = e
  menuStyle.value = { left: x + 'px', top: y + 'px' }
  Selectindex.value = index
  visible.value = true
}
const closeMenu = () => {
  visible.value = false
}
watch(visible, (val) => {
  if (val) {
    document.body.addEventListener('click', closeMenu)
  } else {
    document.body.removeEventListener('click', closeMenu)
  }
})
</script>

<template>
  <div class="tags-view-container">
    <el-scrollbar class="tags-view-wrapper">
      <router-link
        class="tags-view-item"
        :class="isActiveTag(tag) ? 'active' : ''"
        :style="{
          background: isActiveTag(tag) ? $store.getters.cssVar.menuBg : '',
          borderColor: isActiveTag(tag) ? $store.getters.cssVar.menuBg : ''
        }"
        v-for="(tag, index) in $store.getters.tagsViewList"
        :key="tag.fullPath"
        :to="{ path: tag.fullPath }"
        @contextmenu.prevent="openMenu($event, index)"
      >
        {{ tag.title }}
        <i
          class="el-icon-close"
          v-show="!isActiveTag(tag)"
          @click.prevent.stop="onCloseClick(index)"
        ></i>
      </router-link>
    </el-scrollbar>
    <ContextMenu v-show="visible" :style="menuStyle" :index="Selectindex" />
  </div>
</template>

<style lang="scss" scoped>
/* 样式 */
.tags-view-container {
  height: 34px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  .tags-view-item {
    display: inline-block;
    position: relative;
    cursor: pointer;
    height: 26px;
    line-height: 26px;
    border: 1px solid #d8dce5;
    color: #495060;
    background: #fff;
    padding: 0 8px;
    font-size: 12px;
    margin-left: 5px;
    margin-top: 4px;
    &:first-of-type {
      margin-left: 15px;
    }
    &:last-of-type {
      margin-right: 15px;
    }
    &.active {
      color: #fff;
      &::before {
        content: '';
        background: #fff;
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        position: relative;
        margin-right: 4px;
      }
    }
    // close 按钮
    .el-icon-close {
      display: inline-block;
      width: 16px;
      height: 16px;
      line-height: 10px;
      vertical-align: 2px;
      border-radius: 50%;
      text-align: center;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      transform-origin: 100% 50%;
      &:before {
        content: '\d7';
        transform: scale(0.6);
        display: inline-block;
        vertical-align: center;
      }
      &:hover {
        background-color: #b4bccc;
        color: #fff;
      }
    }
  }
}
</style>
