<script setup>
import { ref, defineEmits, defineProps, watch } from 'vue'
// import { userRoles } from '@/api/user-manage'
import { roleList } from '@/api/role'
import { watchSwitchLang } from '@/utils/i18n'
import { userRoles, updateUserRole } from '@/api/user-manage'
import { ElMessage } from 'element-plus'
import { useI18n } from 'vue-i18n'
const i18n = useI18n()
const loading = ref(false)
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  userId: {
    type: String,
    required: true
  }
})
const emits = defineEmits(['update:modelValue', 'updateRole'])
const closed = () => {
  emits('update:modelValue', false)
}

// 所有角色
const userRolesList = ref([])

const getUserRoles = async () => {
  const res = await userRoles(props.userId)
  userRolesList.value = res.role.map((item) => item.title)
  console.log('userRolesList', userRolesList.value)
}
watch(
  () => props.userId,
  (newVal) => {
    if (newVal) {
      getUserRoles()
    }
  }
)
const allUserRoles = ref([])
const getRoleList = async () => {
  allUserRoles.value = await roleList()
  console.log('allUserRoles', allUserRoles.value)
}

const onConfirm = async () => {
  // 处理数据结构
  const data = userRolesList.value.map((title) => {
    return allUserRoles.value.find((role) => role.title === title)
  })
  console.log('data', data)
  const res = await updateUserRole(props.userId, data)
  console.log('updateUserRole', res)
  ElMessage.success(i18n.t('msg.role.updateRoleSuccess'))
  emits('updateRole')
  closed()
}
getRoleList()
watchSwitchLang(getRoleList)
</script>

<template>
  <el-dialog
    :title="$t('msg.excel.roleDialogTitle')"
    :model-value="modelValue"
    @close="closed"
    width="30%"
  >
    <el-checkbox-group v-model="userRolesList">
      <el-checkbox
        v-for="item in allUserRoles"
        :key="item.id"
        :label="item.title"
      >
      </el-checkbox>
    </el-checkbox-group>
    <template #footer>
      <el-button @click="closed">
        {{ $t('msg.universal.cancel') }}
      </el-button>
      <el-button type="primary" @click="onConfirm" :loading="loading">
        {{ $t('msg.universal.confirm') }}
      </el-button>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped>
/* 样式 */
</style>
