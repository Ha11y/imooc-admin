<script setup>
import SvgIcon from '@/components/SvgIcon'
import SelectColor from './components/SelectColor.vue'
import { ref } from 'vue'
const modelValue = ref(false)
const handleSetTheme = (theme) => {
  modelValue.value = true
}
</script>

<template>
  <el-dropdown
    v-bind="$attrs"
    triggle="click"
    class="theme"
    @command="handleSetTheme"
  >
    <div>
      <el-tooltip :content="$t('msg.theme.themeChange')">
        <SvgIcon id="guide-theme" icon="change-theme"></SvgIcon>
      </el-tooltip>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="color">
          {{ $t('msg.theme.themeColorChange') }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>

  <!-- 弹出层 -->
  <div>
    <SelectColor v-model="modelValue"> </SelectColor>
  </div>
</template>

<style lang="scss" scoped>
/* 样式 */
</style>
