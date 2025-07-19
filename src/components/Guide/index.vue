<script setup>
import SvgIcon from '@/components/SvgIcon.vue'
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import steps from '@/utils/steps'
const i18n = useI18n()
let driver = null
onMounted(() => {
  driver = new Driver({
    // 禁止点击蒙版关闭
    allowClose: false,
    closeBtnText: i18n.t('msg.guide.close'),
    nextBtnText: i18n.t('msg.guide.next'),
    prevBtnText: i18n.t('msg.guide.prev')
  })
})
const onClick = () => {
  driver.defineSteps(steps(i18n))
  driver.start()
}
</script>

<template>
  <div>
    <el-tooltip :content="$t('msg.navBar.guide')">
      <SvgIcon id="guide-start" icon="guide" @click="onClick"> </SvgIcon>
    </el-tooltip>
  </div>
</template>

<style lang="scss" scoped>
/* 样式 */
</style>
