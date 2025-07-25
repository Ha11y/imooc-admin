import request from '@/utils/request'
/**
 * 获取用户列表
 */
export const getUserManageList = (data) => {
  return request({
    url: '/user-manage/list',
    params: data
  })
}
// 批量导入
export const userBatchImport = (data) => {
  return request({
    url: '/user-manage/batch/import',
    method: 'POST',
    data
  })
}
// 删除指定数据
export const deleteUser = (id) => {
  return request({
    url: `/user-manage/delete/${id}`
  })
}
// 获取全部用户列表接口
export const getUserManageAllList = () => {
  return request({
    url: '/user-manage/all-list'
  })
}
// 获取用户详情
export const userDetail = (id) => {
  return request({
    url: `/user-manage/detail/${id}`
  })
}
// 获取指定用户的角色
export const userRoles = (id) => {
  return request({
    url: `/user-manage/role/${id}`
  })
}

// 为用户分配角色
export const updateUserRole = (id, roles) => {
  return request({
    url: `/user-manage/update-role/${id}`,
    method: 'POST',
    data: {
      roles
    }
  })
}
