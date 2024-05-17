import { loginApi, logoutApi } from '@/api/auth'
import { getUserInfoApi } from '@/api/user'
import { resetRouter } from '@/router'

export const useUserStore = defineStore('user', () => {
  const user = ref({
    roles: [],
    perms: []
  })

  /**
   * 登录
   *
   * @param
   * @returns
   */
  function login(loginData) {
    return new Promise((resolve, reject) => {
      loginApi(loginData)
        .then((response) => {
          const { tokenType, accessToken } = response.data
          localStorage.setItem('accessToken', tokenType + ' ' + accessToken) // Bearer eyJhbGciOiJIUzI1NiJ9.xxx.xxx
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  // 获取信息(用户昵称、头像、角色集合、权限集合)
  function getUserInfo() {
    return new Promise((resolve, reject) => {
      getUserInfoApi()
        .then(({ data }) => {
          if (!data) {
            reject('Verification failed, please Login again.')
            return
          }
          if (!data.roles || data.roles.length <= 0) {
            reject('getUserInfo: roles must be a non-null array!')
            return
          }
          Object.assign(user.value, { ...data })
          resolve(data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  // user logout
  function logout() {
    return new Promise((resolve, reject) => {
      logoutApi()
        .then(() => {
          localStorage.setItem('accessToken', '')
          location.reload() // 清空路由
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  // remove token
  function resetToken() {
    console.log('resetToken')
    return new Promise((resolve) => {
      localStorage.setItem('accessToken', '')
      resetRouter()
      resolve()
    })
  }

  return {
    user,
    login,
    getUserInfo,
    logout,
    resetToken
  }
})
