import request from '@/utils/request'
export const getArticleList = (data) => {
  return request({
    url: '/article/list',
    params: data
  })
}

// 修改排序
export const articleSort = (data) => {
  return request({
    url: '/article/sort',
    method: 'POST',
    data
  })
}

// 删除文章
export const deleteArticle = (articleId) => {
  return request({
    url: `/article/delete/${articleId}`,
    method: 'get'
  })
}
// 获取文章详情
export const articleDetail = (articleId) => {
  return request({
    url: `/article/${articleId}`,
    method: 'get'
  })
}
