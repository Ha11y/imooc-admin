<template>
  <div class="container">
    <!-- 左侧基本信息卡片 -->
    <aside class="sidebar">
      <div>
        <img
        src="@/assets/image.png"
        alt="AI创新中心外观"
        class="thumbnail"
      >
      <div style="j">
        <span>地址: 成都高新区新裕路与锦和路十字路口</span>
        <span>联系人: 吴先生</span>
        <span>联系电话:17688767570</span>
      </div>

      </div>

      <nav class="info-nav">
        <a href="#basic-info" class="active">基本信息</a>
        <a href="#certification-info">认证信息</a>
        <a href="#property-service">物业服务</a>
        <a href="#floor-plan">户型图</a>
        <a href="#location-map">位置及周边</a>
      </nav>
    </aside>

    <!-- 主要内容区域 -->
    <main class="content">
      <!-- 基本信息表格 -->
      <section id="basic-info" class="info-section">
        <h2>基本信息</h2>
        <table class="data-table">
          <thead>
            <tr>
              <th>项目</th>
              <th>详情</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>名称</td>
              <td>AI创新中心一期</td>
            </tr>
            <tr>
              <td>地址</td>
              <td>成都高新区新街路与锦和路十字路口</td>
            </tr>
            <tr>
              <td>联系人</td>
              <td>吴先生</td>
            </tr>
            <tr>
              <td>联系电话</td>
              <td>17888767570</td>
            </tr>
            <tr>
              <td>是否科技企业</td>
              <td>是</td>
            </tr>
            <tr>
              <td>地铁线路</td>
              <td>234号线</td>
            </tr>
            <tr>
              <td>开工时间</td>
              <td>2024年</td>
            </tr>
            <tr>
              <td>预计运营时间</td>
              <td>2025年</td>
            </tr>
            <!-- 更多表格行可根据实际数据补充 -->
          </tbody>
        </table>
      </section>

      <!-- 认证信息 -->
      <section id="certification-info" class="info-section">
        <h2>认证信息</h2>
        <div class="info-grid">
          <div class="info-item">
            <span>办公楼类型:</span>
            <span>科研办公</span>
          </div>
          <div class="info-item">
            <span>评定类型:</span>
            <span>甲级</span>
          </div>
        </div>
      </section>

      <!-- 物业服务 -->
      <section id="property-service" class="info-section">
        <h2>物业服务</h2>
        <div class="service-info">
          <p class="service-company">物业管理公司名称: 成都天府软件园有限公司</p>
          <p class="service-fee">物业管理费: <strong>6元/月/平方米</strong></p>
        </div>
      </section>

      <!-- 户型图 -->
      <section id="floor-plan" class="info-section">
        <h2>户型图</h2>
        <div class="floor-plan-container">
          <img
            src="@/assets/image2.png"
            alt="现代办公空间户型图"
            class="floor-plan-image"
          >
        </div>
      </section>

      <!-- 位置及周边 -->
      <section id="location-map" class="info-section">
        <h2>位置及周边</h2>
        <div class="map-container">
          <img
            src="@/assets/image3.png"
            alt="项目区位地图"
            class="map-image"
          >
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
// import { ref } from 'vue'

// 基本信息数据
// const basicInfo = ref({
//   name: 'AI创新中心一期',
//   address: '成都高新区新街路与锦和路十字路口',
//   contact: '吴先生',
//   phone: '17888767570',
//   isTechCompany: true,
//   metroLine: '234号线',
//   startDate: '2024年',
//   openingDate: '2025年'
// })

// 认证信息数据
// const certificationInfo = ref({
//   propertyType: '科研办公',
//   evaluationLevel: '甲级'
// })

// 物业服务数据
// const serviceInfo = ref({
//   managementCompany: '成都天府软件园有限公司',
//   managementFee: '6元/月/平方米'
// })
function test() {
  console.log('test')
}
test()
</script>

<style scoped>
/* 基础样式重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, sans-serif;
  line-height: 1.6;
  color: #333;
}

.container {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* 侧边栏样式 */
.sidebar {
  width: 240px;
  margin-right: 20px;
}

.thumbnail {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
}

.info-nav {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.info-nav a {
  display: block;
  padding: 8px 12px;
  text-decoration: none;
  color: #333;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.info-nav a.active {
  background-color: #3e7dff;
  color: white;
}

/* 内容区域样式 */
.content {
  flex: 1;
}

.info-section {
  margin-bottom: 30px;
}

h2 {
  font-size: 24px;
  margin-bottom: 15px;
  border-bottom: 2px solid #eaeaea;
  padding-bottom: 8px;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;
}

.data-table th,
.data-table td {
  padding: 10px;
  border: 1px solid #eaeaea;
  text-align: left;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

.info-item {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #f8f9fa;
  border-radius: 6px;
}

/* 户型图样式 */
.floor-plan-container {
  width: 100%;
  height: 450px;
  background-color: #f5f5f5;
  border-radius: 8px;
  overflow: hidden;
}

.floor-plan-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 地图样式 */
.map-container {
  width: 100%;
  height: 400px;
  border-radius: 8px;
  overflow: hidden;
}

.map-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }

  .info-nav {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .info-nav a {
    flex: 1;
    min-width: 48%;
    margin-bottom: 10px;
  }
}
</style>
