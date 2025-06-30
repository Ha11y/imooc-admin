import path from 'path'
// const path = require('path')

/**
 * 1. 获取所有路由
 */
export const getChildrenRoutes = (routes) => {
  const childrenRoutes = []
  routes.forEach((route) => {
    if (route.children && route.children.length > 0) {
      childrenRoutes.push(...route.children)
    }
  })
  return childrenRoutes
}
export const filterRoutes = (routes) => {
  // 剔除脱离层级的子集路由
  //
  const childrenRoutes = getChildrenRoutes(routes)
  return routes.filter((route) => {
    return !childrenRoutes.find((childrenRoutes) => {
      return childrenRoutes.path === route.path
    })
  })
}
/**
 * 根据route数据，返回对应的menu数据
 */
function isNull(data) {
  if (!data) return true
  if (JSON.stringify(data) === '{}') return true
  if (JSON.stringify(data) === '[]') return true
}

export const generateMenu = (routes, basePath = '') => {
  const result = []
  routes.forEach((item) => {
    if (isNull(item.children) && isNull(item.meta)) {
      return
    }
    if (isNull(item.meta) && !isNull(item.children)) {
      result.push(...generateMenu(item.children))
      return
    }
    // 不存在children ,存在meta
    // 合并path 作为 跳转路径
    const routePath = path.resolve(basePath, item.path)
    // 路由分离之后，可能存在同名
    // 路由分离之后，存在同名父路由的情况，需要单独处理
    let route = result.find((item) => item.path === routePath)
    // 当前路由尚未加入到 result 中
    if (!route) {
      route = {
        ...item,
        path: routePath,
        children: []
      }
      // icon与 title必须全部存在
      if (route.meta.icon && route.meta.title) {
        // meta 存在生成 route 对象 放入arr
        result.push(route)
      }
      // 存在children 进入迭代到children
      if (item.children) {
        route.children.push(...generateMenu(item.children, route.path))
      }
    }
  })
  return result
}
