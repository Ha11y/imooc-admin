<template>
  <div class="my-container">
    <el-row>
      <el-col :span="6">
        <ProjectCard :featuresData="featuresData" />
      </el-col>
      <el-col :span="18">
        <el-card class="user-card">
          <el-tabs v-model="activeName">
            <el-tab-pane :label="$t('msg.profile.feature')" name="feature">
              <Feature :featuresData="featuresData"></Feature>
            </el-tab-pane>
            <el-tab-pane :label="$t('msg.profile.chapter')" name="chapter">
              <chapter></chapter>
            </el-tab-pane>
            <el-tab-pane :label="$t('msg.profile.author')" name="author">
              <author></author>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProjectCard from './components/ProjectCard.vue'
import Feature from './components/Feature.vue'
import chapter from './components/chapter.vue'
import author from './components/author.vue'
import { feature } from '@/api/user.js'
import { watchSwitchLang } from '@/utils/i18n'

const featuresData = ref([])
const getFeature = async () => {
  const res = await feature()
  featuresData.value = res
}
getFeature()
watchSwitchLang(getFeature)
</script>

<style lang="scss" scoped>
.my-container {
  .user-card {
    margin-right: 20px;
  }
}
</style>
