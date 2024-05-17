import httpEntity from '@/utils/http-util'

/**
 * 获取log分页数据
 *
 * @param queryParams
 */
export function getSecurityLog(queryParams) {
  return httpEntity({
    url: '/api/v1/monitor/security/page',
    method: 'get',
    params: queryParams
  })
}

/**
 * 批量删除log，多个以英文逗号(,)分割
 *
 * @param ids
 */
export function deleteSecurityLog(ids) {
  return httpEntity({
    url: '/api/v1/monitor/security/' + ids,
    method: 'delete'
  })
}
