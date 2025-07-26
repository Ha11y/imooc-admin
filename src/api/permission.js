import request from '@/utils/request'
export const permissionList = (data) => {
  return request({
    url: '/permission/list'
  })
}
// 获取所有权限
