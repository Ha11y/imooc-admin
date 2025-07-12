<script setup>
import SvgIcon from '@/components/SvgIcon'
const handleSetTheme = (theme) => {}
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
        <SvgIcon icon="change-theme"></SvgIcon>
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
  <div></div>
</template>

<style lang="scss" scoped>
/* 样式 */
</style>
