import httpEntity from '@/utils/http-util'

/**
 * 获取log分页数据
 *
 * @param queryParams
 */
export function getSysLog(queryParams) {
  return httpEntity({
    url: '/api/v1/monitor/syslog/page',
    method: 'get',
    params: queryParams
  })
}

/**
 * 批量删除log，多个以英文逗号(,)分割
 *
 * @param ids
 */
export function deleteSysLog(ids) {
  return httpEntity({
    url: '/api/v1/monitor/syslog/' + ids,
    method: 'delete'
  })
}
