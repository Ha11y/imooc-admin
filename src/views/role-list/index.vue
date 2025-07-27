<script setup>
import { ref } from 'vue'
import { roleList } from '@/api/role'
import { watchSwitchLang } from '@/utils/i18n'
import DistributePermission from './components/DistributePermission.vue'
const allRoles = ref([])
const selectedRole = ref('')
const distributePermissionVisible = ref(false)
const onDistibutePermission = (row) => {
  distributePermissionVisible.value = true
  selectedRole.value = row.id
}
const getRoleList = async () => {
  allRoles.value = await roleList()
  console.log('roleList', allRoles.value)
}
getRoleList()
watchSwitchLang(getRoleList)
</script>

<template>
  <div class="role-list">
    <distribute-permission
      v-model="distributePermissionVisible"
      :roleId="selectedRole"
    />

    <el-card>
      <el-table :data="allRoles" border style="width: 100%">
        <el-table-column type="index" :label="$t('msg.role.index')" width="70">
        </el-table-column>
        <el-table-column :label="$t('msg.role.name')" prop="title">
        </el-table-column>
        <el-table-column :label="$t('msg.role.desc')" prop="describe">
        </el-table-column>
        <el-table-column
          :label="$t('msg.role.action')"
          width="260"
          prop="action"
          #default="{ row }"
        >
          <el-button
            type="primary"
            size="mini"
            @click="onDistibutePermission(row)"
          >
            {{ $t('msg.role.assignPermissions') }}
          </el-button>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<style lang="scss" scoped></style>
