<template>
  <div class="user-info-container">
    <el-card class="print-box">
      <el-button type="primary" v-print="printObj" :loading="pringLoading">{{
        $t('msg.userInfo.print')
      }}</el-button>
    </el-card>
    <div class="user-info-box" id="userInfoBox">
      <h2 class="title">{{ $t('msg.userInfo.title') }}</h2>
      <!-- 头部渲染 -->
      <div class="header">
        <el-descriptions :column="2" border>
          <el-descriptions-item :label="$t('msg.userInfo.name')">
            {{ detailData.username }}
          </el-descriptions-item>
          <el-descriptions-item :label="$t('msg.userInfo.sex')">
            {{ detailData.gender }}
          </el-descriptions-item>
          <el-descriptions-item :label="$t('msg.userInfo.nation')">
            {{ detailData.nationlity }}
          </el-descriptions-item>
          <el-descriptions-item :label="$t('msg.userInfo.mobile')">
            {{ detailData.mobile }}
          </el-descriptions-item>
          <el-descriptions-item :label="$t('msg.userInfo.province')">
            {{ detailData.province }}
          </el-descriptions-item>
          <el-descriptions-item :label="$t('msg.userInfo.date')">
            {{ $filters.dateFilter(detailData.openTime) }}
          </el-descriptions-item>
          <el-descriptions-item :label="$t('msg.userInfo.remark')" :span="2">
            <el-tag
              class="remark"
              size="small"
              v-for="(item, index) in detailData.remark"
              :key="index"
            >
              {{ item }}
            </el-tag>
          </el-descriptions-item>
          <el-descriptions-item :label="$t('msg.userInfo.address')" :span="2">
            {{ detailData.address }}
          </el-descriptions-item>
        </el-descriptions>
        <el-image
          :src="detailData.avatar"
          class="avatar"
          :preview-src-list="[detailData.avatar]"
        >
        </el-image>
      </div>
      <!-- 内容渲染 -->
      <div class="body">
        <el-descriptions :column="1" direction="vertical" border>
          <el-descriptions-item :label="$t('msg.userInfo.experience')">
            <ul>
              <li v-for="(item, index) in detailData.experience" :key="index">
                <span>
                  {{ $filters.dateFilter(item.startTime, 'YYYY/MM') }} ----
                  {{ $filters.dateFilter(item.endTime, 'YYYY/MM') }}
                </span>
                <span>
                  {{ item.title }}
                </span>
                <span>{{ item.desc }}</span>
              </li>
            </ul>
          </el-descriptions-item>
          <el-descriptions-item :label="$t('msg.userInfo.major')">
            {{ detailData.major }}
          </el-descriptions-item>
          <el-descriptions-item :label="$t('msg.userInfo.glory')">
            {{ detailData.glory }}
          </el-descriptions-item>
        </el-descriptions>
      </div>
      <!-- 底部渲染 -->
      <div class="foot">
        {{ $t('msg.userInfo.foot') }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'
import { userDetail } from '@/api/user-manage'
import { watchSwitchLang } from '@/utils/i18n'
const detailData = ref({})
const props = defineProps({
  id: {
    type: String,
    required: true
  }
})
// 打印相关
const pringLoading = ref(false)
// 创建打印对象
const printObj = {
  // 打印区域
  id: 'userInfoBox',
  // 打印标题
  popTitle: 'imooc-vue-element-admin',

  beforeOpenCallback() {
    pringLoading.value = true
  },
  openCallback() {
    pringLoading.value = false
  }
}

const getUserDetail = async () => {
  console.log('props.id', props.id)
  detailData.value = await userDetail(props.id)
  console.log('detailData', detailData.value)
}
getUserDetail()
// 语言切换时重新获取用户详情
watchSwitchLang(getUserDetail)
</script>

<style lang="scss" scoped>
.print-box {
  margin-bottom: 20px;
  text-align: right;
}
.user-info-box {
  width: 1024px;
  margin: 0 auto;
  .title {
    text-align: center;
    margin-bottom: 18px;
  }
  .header {
    display: flex;
    ::v-deep .el-descriptions {
      flex-grow: 1;
    }
    .avatar {
      width: 187px;
      box-sizing: border-box;
      padding: 30px 20px;
      border: 1px solid #ebeef5;
      border-left: none;
    }
    .remark {
      margin-right: 12px;
    }
  }
  .body {
    ul {
      list-style: none;
      li {
        span {
          margin-right: 62px;
        }
      }
    }
  }
  .foot {
    margin-top: 42px;
    text-align: right;
  }
}
</style>
