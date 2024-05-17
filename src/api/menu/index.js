import httpEntity from '@/utils/http-util'

/**
 * 获取路由列表
 */
export function listRoutes() {
  return httpEntity({
    url: '/api/v1/menus/routes',
    method: 'get'
  })
}

/**
 * 获取菜单树形列表
 *
 * @param queryParams
 */
export function listMenus(queryParams) {
  return httpEntity({
    url: '/api/v1/menus',
    method: 'get',
    params: queryParams
  })
}

/**
 * 获取菜单下拉树形列表
 */
export function getMenuOptions() {
  return httpEntity({
    url: '/api/v1/menus/options',
    method: 'get'
  })
}

/**
 * 获取菜单表单数据
 *
 * @param id
 */
export function getMenuForm(id) {
  return httpEntity({
    url: '/api/v1/menus/' + id + '/form',
    method: 'get'
  })
}

/**
 * 添加菜单
 *
 * @param data
 */
export function addMenu(data) {
  return httpEntity({
    url: '/api/v1/menus',
    method: 'post',
    data: data
  })
}

/**
 * 修改菜单
 *
 * @param id
 * @param data
 */
export function updateMenu(id, data) {
  return httpEntity({
    url: '/api/v1/menus/' + id,
    method: 'put',
    data: data
  })
}

/**
 * 删除菜单
 *
 * @param id 菜单ID
 */
export function deleteMenu(id) {
  return httpEntity({
    url: '/api/v1/menus/' + id,
    method: 'delete'
  })
}
