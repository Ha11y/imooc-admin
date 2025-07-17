<script setup>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { defineProps } from 'vue'
const router = useRouter()
const store = useStore()
const onRefreshClick = () => {
  // window.location.reload()
  router.go(0) // Refresh the current page
}
const onCloseRightClick = () => {
  // Logic to close tags to the right
  store.commit('app/removeTagsView', {
    type: 'right',
    index: props.index
  })
}
const onCloseOtherClick = () => {
  // Logic to close other tags
  store.commit('app/removeTagsView', {
    type: 'other',
    index: props.index
  })
}
const props = defineProps({
  index: {
    type: Number,
    default: 0
  }
})
</script>

<template>
  <ul class="context-menu-container">
    <li @click="onRefreshClick">
      {{ $t('msg.tagsView.refresh') }}
    </li>
    <li @click="onCloseRightClick">
      {{ $t('msg.tagsView.closeRight') }}
    </li>
    <li @click="onCloseOtherClick">
      {{ $t('msg.tagsView.closeOther') }}
    </li>
  </ul>
</template>

<style lang="scss" scoped>
/* 样式 */
.context-menu-container {
  position: fixed;
  background: #fff;
  z-index: 3000;
  list-style-type: none;
  padding: 5px 0;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 400;
  color: #333;
  box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
  li {
    margin: 0;
    padding: 7px 16px;
    cursor: pointer;
    &:hover {
      background: #eee;
    }
  }
}
</style>
