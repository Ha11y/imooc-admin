<template>
  <div class="login-container">
    <el-form
      class="login-form"
      :model="loginForm"
      :rules="loginRules"
      ref="loginFormRef"
    >
      <div class="title-container">
        <h3 class="title">{{ $t('msg.login.title') }}</h3>
        <LangSelect class="lang-select" effect="light"></LangSelect>
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <SvgIcon icon="user" />
        </span>
        <el-input
          placeholder="username"
          name="username"
          type="text"
          v-model="loginForm.username"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <SvgIcon icon="password" />
        </span>
        <el-input
          placeholder="password"
          name="password"
          :type="passwordType"
          v-model="loginForm.password"
        />
        <span class="show-pwd" @click="showPwd">
          <SvgIcon :icon="passwordType === 'password' ? 'eye' : 'eye-open'" />
        </span>
      </el-form-item>
      <el-button
        type="primary"
        style="width: 100%; margin-bottom: 30px"
        @click="handleLogin"
        >{{ $t('msg.login.loginBtn') }}</el-button
      >
      <div class="tip" v-html="$t('msg.login.desc')"></div>
    </el-form>
  </div>
</template>

<script setup>
// 导入组件之后无需注册可直接使用
// import { Avatar } from '@element-plus/icons'
// import { login } from '@/api/user'
import LangSelect from '@/components/LangSelect'
import SvgIcon from '@/components/SvgIcon.vue'
import { ref } from 'vue'
import { useStore } from 'vuex'
import { loginRules } from '@/utils/rules'
import { useRouter } from 'vue-router'
const passwordType = ref('password')
const showPwd = () => {
  if (passwordType.value === 'password') {
    passwordType.value = 'text'
  } else {
    passwordType.value = 'password'
  }
}
const router = useRouter()
// 表单验证

// 表单验证规则

// 登录
const loading = ref(false)
const loginFormRef = ref(null)
const store = useStore()
const loginForm = ref({
  username: '',
  password: ''
})
const handleLogin = () => {
  loginFormRef.value.validate((valid) => {
    if (!valid) return
    loading.value = true
    store
      .dispatch('user/login', loginForm.value)
      .then(() => {
        loading.value = false
        // 登录后操作
        router.push('/')
      })
      .catch((err) => {
        console.log(err)
        loading.value = false
      })
  })
}
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
    .tip {
      font-size: 15px;
      line-height: 20px;
      color: white;
    }
    ::v-deep .lang-select {
      font-size: 26px;
      position: absolute;
      top: 0px;
      right: 0px;
      background-color: #fff;
    }
    ::v-deep .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }

    ::v-deep .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;

      input {
        background: transparent;
        border: 0px;
        -webkit-apearance: none;
        border-radius: 0px;
        padding: 15px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        // width: 100%;
        caret-color: $cursor;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
