import httpEntity from '@/utils/http-util'

/**
 * 登录成功后获取用户信息（昵称、头像、权限集合和角色集合）
 */
export function getUserInfoApi() {
  return httpEntity({
    url: '/api/v1/users/me',
    method: 'get'
  })
}

/**
 * 获取用户分页列表
 *
 * @param queryParams
 */
export function getUserPage(queryParams) {
  return httpEntity({
    url: '/api/v1/users/page',
    method: 'get',
    params: queryParams
  })
}

/**
 * 获取用户表单详情
 *
 * @param userId
 */
export function getUserForm(userId) {
  return httpEntity({
    url: '/api/v1/users/' + userId + '/form',
    method: 'get'
  })
}

/**
 * 添加用户
 *
 * @param data
 */
export function addUser(data) {
  return httpEntity({
    url: '/api/v1/users',
    method: 'post',
    data: data
  })
}

/**
 * 修改用户
 *
 * @param id
 * @param data
 */
export function updateUser(id, data) {
  return httpEntity({
    url: '/api/v1/users/' + id,
    method: 'put',
    data: data
  })
}

/**
 * 修改用户密码
 *
 * @param id
 * @param password
 */
export function updateUserPassword(id, password) {
  return httpEntity({
    url: '/api/v1/users/' + id + '/password',
    method: 'patch',
    params: { password: password }
  })
}

/**
 * 删除用户
 *
 * @param ids
 */
export function deleteUsers(ids) {
  return httpEntity({
    url: '/api/v1/users/' + ids,
    method: 'delete'
  })
}

/**
 * 下载用户导入模板
 *
 * @returns
 */
export function downloadTemplateApi() {
  return httpEntity({
    url: '/api/v1/users/template',
    method: 'get',
    responseType: 'arraybuffer'
  })
}

/**
 * 导出用户
 *
 * @param queryParams
 * @returns
 */
export function exportUser(queryParams) {
  return httpEntity({
    url: '/api/v1/users/_export',
    method: 'get',
    params: queryParams,
    responseType: 'arraybuffer'
  })
}

/**
 * 导入用户
 *
 * @param file
 */
export function importUser(deptId, file) {
  const formData = new FormData()
  formData.append('file', file)
  return httpEntity({
    url: '/api/v1/users/_import',
    method: 'post',
    params: { deptId: deptId },
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
