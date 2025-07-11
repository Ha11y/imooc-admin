<script setup>
import { useStore } from 'vuex'
import SvgIcon from '../SvgIcon.vue'
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'
import { defineProps } from 'vue'
const store = useStore()
const i18n = useI18n()
defineProps({
  effect: {
    type: String,
    default: 'dark',
    validator: (value) => {
      return ['dark', 'light'].includes(value)
    }
  }
})
const handleSetLanguage = (lang) => {
  store.commit('app/setLanguage', lang)
  i18n.locale.value = lang
  ElMessage.success(`语言切换成功: ${lang === 'zh' ? '中文' : 'English'}`)
}
</script>

<template>
  <el-dropdown
    class="international"
    trigger="click"
    @command="handleSetLanguage"
  >
    <div>
      <el-tooltip content="国际化" :effect="effect">
        <SvgIcon icon="language" />
      </el-tooltip>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          :disabled="store.getters.language === 'zh'"
          command="zh"
          >中文</el-dropdown-item
        >
        <el-dropdown-item
          :disabled="store.getters.language === 'en'"
          command="en"
          >English</el-dropdown-item
        >
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style lang="scss" scoped>
/* 样式 */
</style>
