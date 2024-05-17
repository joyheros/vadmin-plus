import { createPinia } from 'pinia'

const store = createPinia()

// 全局注册 store
export function setupStore(app) {
  app.use(store)
}

export * from './modules/global'
export * from './modules/permission'
export * from './modules/settings'
export * from './modules/tabview'
export * from './modules/user'

export { store }
