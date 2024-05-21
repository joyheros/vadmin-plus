import { createRouter, createWebHashHistory } from 'vue-router'
import { useUserStore, usePermissionStore } from '@/stores'
import NProgress from '@/utils/nprogress'

export const Layout = () => import('@/layout/index.vue')

// 静态路由
export const baseRoutes = [
  {
    path: '/redirect',
    component: Layout,
    meta: {
      title: 'redirect',
      hidden: true
    },
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/layout/redirect/index.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: 'login',
      hidden: true
    }
  },
  {
    path: '/',
    name: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/index.vue'),
        name: 'Home',
        meta: {
          title: 'home',
          icon: 'home',
          affix: true,
          keepAlive: true,
          alwaysShow: false
        }
      },
      {
        path: 'account',
        component: () => import('@/views/account/index.vue'),
        meta: {
          title: 'account',
          hidden: true
        }
      },
      {
        path: '401',
        component: () => import('@/views/error/401.vue'),
        meta: {
          title: 'error401',
          hidden: true
        }
      },
      {
        path: '403',
        component: () => import('@/views/error/403.vue'),
        meta: {
          title: 'error403',
          hidden: true
        }
      },
      {
        path: '404',
        component: () => import('@/views/error/404.vue'),
        meta: {
          title: 'error404',
          hidden: true
        }
      },
      {
        path: '500',
        component: () => import('@/views/error/500.vue'),
        meta: {
          title: 'error500',
          hidden: true
        }
      }
    ]
  }
]

/**
 * 创建路由
 */
const router = createRouter({
  history: createWebHashHistory(),
  routes: baseRoutes,
  // 刷新时，滚动条位置还原
  scrollBehavior: () => ({ left: 0, top: 0 })
})

/**
 * 重置路由
 */
export function resetRouter() {
  router.replace({ path: '/login' })
}

const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  const hasToken = localStorage.getItem('accessToken')
  if (hasToken) {
    if (to.path === '/login') {
      // 如果已登录，跳转首页
      next({ path: '/' })
      NProgress.done()
    } else {
      console.log('enter has token in route')
      const userStore = useUserStore()
      const hasRoles = userStore.user.roles && userStore.user.roles.length > 0
      if (hasRoles) {
        // 未匹配到任何路由，跳转404
        if (to.matched.length === 0) {
          from.name ? next({ name: from.name }) : next('/404')
        } else {
          next()
        }
      } else {
        const permissionStore = usePermissionStore()
        try {
          const { roles } = await userStore.getUserInfo()
          const accessRoutes = await permissionStore.generateRoutes(roles)
          console.log('before add: ', accessRoutes)
          accessRoutes.forEach((route) => {
            router.addRoute(route)
          })
          console.log('after add: ', accessRoutes)
          next({ ...to, replace: true })
        } catch (error) {
          // 移除 token 并跳转登录页
          await userStore.resetToken()
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    // 未登录可以访问白名单页面
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})

export default router
