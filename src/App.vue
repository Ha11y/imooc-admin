<template>
  <el-config-provider :locale="$store.getters.language === 'en' ? en : zhCn">
    <RouterView />
  </el-config-provider>
</template>
<script setup>
import { RouterView } from 'vue-router'
import { useStore } from 'vuex'
import { watchSwitchLang } from '@/utils/i18n'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'
const store = useStore()
watchSwitchLang(() => {
  if (store.getters.token) {
    store.dispatch('user/getUserInfo')
  }
})
</script>
<style lang="scss"></style>
