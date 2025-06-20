<template>
  <div class="project-info-card">
    <h2 class="card-title">基本信息</h2>
    <div class="card-content">
      <div v-for="(group, groupIndex) in infoGroups" :key="groupIndex" class="info-group">
        <h3 class="group-title">{{ group.title }}</h3>
        <ul class="info-list">
          <li v-for="(item, itemIndex) in group.items" :key="itemIndex" class="info-item">
            <span class="label">{{ item.label }}：</span>
            <span class="value">{{ item.value }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 项目数据
const projectData = ref({
  projectName: 'AI创新中心一期',
  location: '成都高新区新怡路与锦和路十字路口',
  isAIPark: '是',
  subwayLine: '234号线',
  constructionYear: '2024年',
  operationYear: '2025年',
  landArea: '386900000',
  landUse: '科研用地',
  grossFloorArea: '3869000000',
  floorAreaRatio: '50000',
  rentPrice: '90',
  salePrice: '12000',
  paymentMethod: '押二付一',
  decoration: '清水',
  floors: '20',
  parkingFee: '400-600元/月',
  leaseTerm: '3年',
  elevatorConfig: '1+4'
})

// 信息分组配置
const infoGroups = ref([
  {
    title: '项目概况',
    items: [
      { label: '名称', value: projectData.value.projectName },
      { label: '地址', value: projectData.value.location },
      { label: '是否人工智能产业', value: projectData.value.isAIPark },
      { label: '智轨路线', value: projectData.value.subwayLine }
    ]
  },
  {
    title: '开发规划',
    items: [
      { label: '开工建设时间', value: projectData.value.constructionYear },
      { label: '投入运营时间', value: projectData.value.operationYear }
    ]
  },
  {
    title: '土地信息',
    items: [
      { label: '占地面积(平方米)', value: projectData.value.landArea },
      { label: '用地性质', value: projectData.value.landUse }
    ]
  },
  {
    title: '建筑参数',
    items: [
      { label: '总建筑面积(平方米)', value: projectData.value.grossFloorArea },
      { label: '总容积率', value: projectData.value.floorAreaRatio },
      { label: '楼层', value: projectData.value.floors }
    ]
  },
  {
    title: '租赁信息',
    items: [
      { label: '租金(元/平方米)', value: projectData.value.rentPrice },
      { label: '售价(元/平方米)', value: projectData.value.salePrice },
      { label: '支付方式', value: projectData.value.paymentMethod },
      { label: '装修', value: projectData.value.decoration }
    ]
  },
  {
    title: '配套信息',
    items: [
      { label: '停车位', value: projectData.value.parkingFee },
      { label: '签约年限', value: projectData.value.leaseTerm },
      { label: '电梯配置', value: projectData.value.elevatorConfig }
    ]
  }
])
</script>

<style scoped>
.project-info-card {
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, sans-serif;
}

.card-title {
  padding: 16px;
  font-size: 18px;
  font-weight: 600;
  border-bottom: 1px solid #f0f0f0;
}

.card-content {
  padding: 12px;
}

.info-group {
  margin-bottom: 24px;
}

.group-title {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 12px;
  color: #333;
}

.info-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.info-item {
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid #f5f5f5;
}

.info-item:last-child {
  border-bottom: none;
}

.label {
  width: 120px;
  color: #666;
  font-weight: 500;
}

.value {
  flex: 1;
  color: #333;
}
</style>
