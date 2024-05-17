import httpEntity from '@/utils/http-util'

/**
 * 获取角色分页数据
 *
 * @param queryParams
 */
export function getNotices() {
  return httpEntity({
    url: '/api/v1/notices',
    method: 'get'
  })
}
