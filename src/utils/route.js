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
    if (isNull(item.meta) && isNull(item.children)) {
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
    }
    // 存在children 进入迭代到children
    if (item.children) {
      route.children.push(...generateMenu(item.children, route.path))
    }
  })
  return result
}

/**
 * export const generateMenu = (routes, basePath = '') => {
  // 最终需要返回的值
  const result = []
  // 遍历路由表
  routes.forEach((item) => {
    // 不存在 children && 不存在 meta 则被认为是 《不需要处理的数据》， 直接 return
    if (isNull(item.meta) && isNull(item.children)) return
    // 存在 children 不存在 meta，则被认为是《父节点》，需要进行解析，所以进入迭代。
    if (isNull(item.meta) && !isNull(item.children)) {
      result.push(...generateMenu(item.children))
      return
    }
    // 合并 path 作为跳转路径
    const routePath = path.resolve(basePath, item.path)
    // 路由分离之后，存在同名父路由（指的是：name 相同的路由对象）的情况，需要单独处理
    // 很多同学比较关注同名父路由，这个其实不需要过于关心的。因为同名的 name 本身就是不符合约定的。
    let route = result.find((item) => item.path === routePath)

    // 查找匹配的 route 对象，如果 route 对象不存在，则表示当前的 route 还没有放入到 result 数组中，所以我们需要构建一个新的 route 对象，并且把它放入到 result 里面
    if (!route) {
      route = {
        ...item,
        path: routePath,
        children: []
      }

      // icon 与 title 必须全部存在，只有这样，我们才认为它是一个需要在 《menu item》 中展示的数据
      if (route.meta.icon && route.meta.title) {
        // meta 存在生成 route 对象，放入 arr
        result.push(route)
      }
    }

    // 存在 children 进入迭代到children
    if (item.children) {
      route.children.push(...generateMenu(item.children, route.path))
    }
  })

  return result
}
 */
