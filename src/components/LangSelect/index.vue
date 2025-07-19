<script setup>
import { useStore } from 'vuex'
import SvgIcon from '../SvgIcon.vue'
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'
import { defineProps, computed } from 'vue'
const store = useStore()
const i18n = useI18n()
const props = defineProps({
  effect: {
    type: String,
    default: 'dark',
    validator: (value) => {
      return ['dark', 'light'].includes(value)
    }
  }
})
const language = computed(() => store.getters.language)
const handleSetLanguage = (lang) => {
  // 切换 i18n 的方法
  i18n.locale.value = lang
  store.commit('app/setLanguage', lang)

  ElMessage.success(
    `${i18n.t('msg.toast.switchLangSuccess')}: ${
      lang === 'zh' ? '中文' : 'English'
    }`
  )
}
</script>

<template>
  <el-dropdown
    class="international"
    trigger="click"
    @command="handleSetLanguage"
  >
    <div>
      <el-tooltip content="国际化" :effect="props.effect">
        <SvgIcon id="guide-lang" icon="language" />
      </el-tooltip>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :disabled="language === 'zh'" command="zh"
          >中文</el-dropdown-item
        >
        <el-dropdown-item :disabled="language === 'en'" command="en"
          >English</el-dropdown-item
        >
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style lang="scss" scoped>
/* 样式 */
</style>
