<template>
  <div class="card-container">
    <div class="card-image">
      <img :src="imgSrc" alt="卡片图片" v-if="imgSrc">
    </div>
    <div class="card-content">
      <p class="info-item" v-if="address">地址：{{ address }}</p>
      <p class="info-item" v-if="contactPerson">联系人：{{ contactPerson }}</p>
      <p class="info-item" v-if="phone">联系电话：{{ phone }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  // 图片地址
  imgSrc: {
    type: String,
    default: ''
  },
  // 地址信息
  address: {
    type: String,
    default: ''
  },
  // 联系人
  contactPerson: {
    type: String,
    default: ''
  },
  // 联系电话
  phone: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.card-container {
  width: 320px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  background-color: #ffffff;
}

.card-container:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.card-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-content {
  padding: 20px 24px;
}

.info-item {
  margin-bottom: 12px;
  font-size: 14px;
  color: #333333;
  line-height: 1.5;
}

.info-item:last-child {
  margin-bottom: 0;
}

/* 响应式适配 */
@media (max-width: 768px) {
  .card-container {
    width: 100%;
    max-width: 320px;
  }
}
</style>
