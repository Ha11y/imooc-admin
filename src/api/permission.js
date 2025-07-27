import request from '@/utils/request'
export const permissionList = (data) => {
  return request({
    url: '/permission/list'
  })
}

// 获取所有权限
export const rolePermission = (roleId) => {
  return request({
    url: `/role/permission/${roleId}`
  })
}
// 定义分配权限接口
export const distributePermission = (data) => {
  return request({
    url: '/role/distribute-permission',
    method: 'POST',
    data
  })
}
