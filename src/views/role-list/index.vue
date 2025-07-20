<script setup>
import { ref } from 'vue'
import { getUserManageList } from '@/api/user-manage'
import { watchSwitchLang } from '@/utils/i18n'
const userManageList = ref([])
const page = ref(1)
const size = ref(2)
const total = ref(0)
const tableData = ref([])

const getListData = async () => {
  const res = await getUserManageList({
    page: page.value,
    size: size.value
  })
  userManageList.value = res
  tableData.value = res.list
  total.value = res.total
}
getListData()
watchSwitchLang(getListData)
const handleSizeChange = (val) => {
  size.value = val
  getListData({
    page: page.value,
    size: size.value
  })
}
const handleCurrentChange = (currentPage) => {
  page.value = currentPage
  getListData()
}
</script>
<template>
  <el-card class="header">
    <div>
      <el-button type="primary">{{ $t('msg.excel.importExcel') }}</el-button>
      <el-button type="success">{{ $t('msg.excel.exportExcel') }}</el-button>
    </div>
  </el-card>
  <el-card>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="#" type="index"> </el-table-column>
      <el-table-column prop="username" :label="$t('msg.excel.name')">
      </el-table-column>
      <el-table-column :label="$t('msg.excel.mobile')" prop="mobile">
      </el-table-column>
      <el-table-column :label="$t('msg.excel.avatar')" align="center">
        <template v-slot="{ row }">
          <el-image
            class="avatar"
            :src="row.avatar"
            :preview-src-list="[row.avatar]"
          >
          </el-image>
        </template>
      </el-table-column>
      <el-table-column :label="$t('msg.excel.role')">
        <template v-slot="{ row }">
          <div v-if="row.role && row.role.length > 0">
            <el-tag v-for="item in row.role" :key="item.id" size="mini">{{
              item.title
            }}</el-tag>
          </div>
          <div v-else>
            <el-tag size="mini">{{ $t('msg.excel.defaultRole') }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column :label="$t('msg.excel.openTime')">
        <template #default="{ row }">
          {{ $filters.dateFilter(row.openTime) }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('msg.excel.action')"
        fixed="right"
        width="260"
      >
        <template #default>
          <el-button type="primary" size="mini">{{
            $t('msg.excel.show')
          }}</el-button>
          <el-button type="info" size="mini">{{
            $t('msg.excel.showRole')
          }}</el-button>
          <el-button type="danger" size="mini">{{
            $t('msg.excel.remove')
          }}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="pagination"
      :page-sizes="[2, 5, 10, 20]"
      :page-size="size"
      layout="total, prev, pager, next,jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </el-card>
</template>

<style lang="scss" scoped></style>
