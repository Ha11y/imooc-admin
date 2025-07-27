<template>
  <el-dialog
    :title="$t('msg.excel.roleDialogTitle')"
    :model-value="modelValue"
    @close="closed"
  >
    <el-tree
      ref="treeRef"
      :data="rolePermissionData"
      show-checkbox
      check-strictly
      node-key="id"
      default-expand-all
      :props="defaultProps"
    >
    </el-tree>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="closed">{{ $t('msg.universal.cancel') }}</el-button>
        <el-button type="primary" @click="onConfirm">{{
          $t('msg.universal.confirm')
        }}</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch } from 'vue'
import {
  permissionList,
  rolePermission,
  distributePermission
} from '@/api/permission'
import { watchSwitchLang } from '@/utils/i18n'
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'
const i18n = useI18n()
const rolePermissionData = ref([])
const treeRef = ref(null)
// 属性结构配置
const defaultProps = {
  children: 'children',
  label: 'permissionName'
}
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  roleId: {
    type: String,
    required: true
  }
})
const emits = defineEmits(['update:modelValue'])
// 获取角色权限数据
const getAllRolePermission = async () => {
  rolePermissionData.value = await permissionList()
  // console.log(rolePermissionData.value)
}
const getRolePermission = async () => {
  const checkedKeys = await rolePermission(props.roleId)

  console.log('checkedKeys.value', checkedKeys)
  treeRef.value.setCheckedKeys(checkedKeys)
}
watch(
  () => props.roleId,
  (val) => {
    if (val) {
      getRolePermission()
    }
  }
)

getAllRolePermission()
watchSwitchLang(getAllRolePermission)
/**
  确定按钮点击事件
 */
const onConfirm = async () => {
  await distributePermission({
    permissions: treeRef.value.getCheckedKeys(),
    roleId: props.roleId
  })
  ElMessage.success(i18n.t('msg.role.updateRoleSuccess'))
  closed()
}

/**
 * 关闭
 */
const closed = () => {
  emits('update:modelValue', false)
}
</script>
