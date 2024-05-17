import httpEntity from '@/utils/http-util'

/**
 * 登录API
 *
 * @param data
 * @returns
 */
export function loginApi(data) {
  const formData = new FormData()
  formData.append('username', data.username)
  formData.append('password', data.password)
  formData.append('captchaKey', data.captchaKey || '')
  formData.append('captchaCode', data.captchaCode || '')
  return httpEntity({
    url: '/api/v1/auth/login',
    method: 'post',
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

/**
 * 注销API
 */
export function logoutApi() {
  return httpEntity({
    url: '/api/v1/auth/logout',
    method: 'delete'
  })
}

/**
 * 获取验证码
 */
export function getCaptchaApi() {
  return httpEntity({
    url: '/api/v1/auth/captcha',
    method: 'get'
  })
}
