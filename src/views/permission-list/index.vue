<template>
  <div class="">
    <el-card>
      <el-table
        :data="permissionLists"
        style="width: 100%; margin-bottom: 20px"
        row-key="id"
        border
        default-expand-all
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      >
        <el-table-column
          prop="permissionName"
          :label="$t('msg.permission.name')"
          width="180"
        ></el-table-column>
        <el-table-column
          prop="permissionMark"
          :label="$t('msg.permission.mark')"
          width="180"
        ></el-table-column>
        <el-table-column
          prop="permissionDesc"
          :label="$t('msg.permission.desc')"
          width="180"
        ></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { permissionList } from '@/api/permission'
import { watchSwitchLang } from '@/utils/i18n'

const permissionLists = ref([])
const getPermissionList = async () => {
  permissionLists.value = await permissionList()
  console.log(permissionLists.value)
}
getPermissionList()
watchSwitchLang(getPermissionList)
</script>

<style lang="scss" scoped></style>
