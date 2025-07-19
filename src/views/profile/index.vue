<template>
  <div class="my-container">
    <el-row>
      <el-col :span="6">
        <ProjectCard :feature="featureData" />
      </el-col>
      <el-col :span="18">
        <el-card class="user-card">
          <el-tabs v-model="activeName">
            <el-tab-pane :label="$t('msg.profile.feature')" name="feature">
              <Feature></Feature>
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
import { feature } from '@/api/user.js'

const featureData = ref([])
const getFeature = async () => {
  const res = await feature()
  featureData.value = res.data
}
getFeature()
</script>

<style lang="scss" scoped>
.my-container {
  .user-card {
    margin-right: 20px;
  }
}
</style>
