<script setup>
import { useStore } from 'vuex'
import Hamburger from '@/components/Hamburger/index.vue'
import Breadcrumb from '@/components/Breadcrumb/index.vue'
import LangSelect from '@/components/LangSelect/index.vue'
import ThemeSelect from '@/components/ThemeSelect/index.vue'
const store = useStore()
const logout = () => {
  store.dispatch('user/logout')
}
</script>

<template>
  <div class="navbar">
    <div class="hamburger">
      <Hamburger class="hamburger-container"></Hamburger>
    </div>
    <div class="breadcrumb-container">
      <Breadcrumb></Breadcrumb>
    </div>

    <div class="right-menu">
      <ThemeSelect class="right-menu-item hover-effect"></ThemeSelect>
      <LangSelect class="right-menu-item hover-effect"></LangSelect>
      <el-dropdown class="avatar-container">
        <div class="avatar-wrapper">
          <el-avatar
            shape="square"
            :size="40"
            :src="$store.getters.userInfo.avatar"
          >
          </el-avatar>
          <i class="el-icon-s-tools"></i>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <router-link to="/">
              <el-dropdown-item>{{ $t('msg.navBar.home') }}</el-dropdown-item>
            </router-link>
            <a href="" target="_blank">
              <el-dropdown-item>{{ $t('msg.navBar.course') }}</el-dropdown-item>
            </a>
            <el-dropdown-item divided @click="logout">{{
              $t('msg.navBar.logout')
            }}</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background-color: aliceblue;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.5s;
    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
  .breadcrumb-container {
    float: left;
  }
}
.right-menu {
  display: flex;
  align-items: center;
  float: right;
  padding-right: 16px;
}
::v-deep .right-menu-item {
  display: inline-block;
  padding: 0 18px 0 0;
  font-size: 24px;
  color: #5a5e66;
  vertical-align: text-bottom;
  margin-right: 10px;
  &.hover-effect {
    cursor: pointer;
  }
}
::v-deep .avatar-container {
  cursor: pointer;
  .avatar-wrapper {
    margin-top: 5px;
    position: relative;
  }
  .el-avatar {
    --avatar-background-color: none;
    margin-right: 12px;
  }
}
</style>
