import httpEntity from '@/utils/http-util'

/**
 * 获取log分页数据
 *
 * @param queryParams
 */
export function getOperationLog(queryParams) {
  return httpEntity({
    url: '/api/v1/monitor/operation/page',
    method: 'get',
    params: queryParams
  })
}

/**
 * 批量删除log，多个以英文逗号(,)分割
 *
 * @param ids
 */
export function deleteOperationLog(ids) {
  return httpEntity({
    url: '/api/v1/monitor/operation/' + ids,
    method: 'delete'
  })
}
