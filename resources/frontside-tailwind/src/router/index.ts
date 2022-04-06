import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import routes from './routes'
import { useMainStore } from '@/stores/main'

// @ts-ignore
let base = window.route_prefix ?? undefined
if (typeof base === undefined) {
  console.error(
    'window.route_prefix is undefined. It must be either empty string or current locale.'
  )
  base = ''
}

const router = createRouter({
  history: createWebHistory(base),
  routes,

  /**
   * To keep the scroll position when route changes
   */
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // We have savedPosition usually if moving back.
      return savedPosition
    } else {
      // Pass in query parameter keep=1 to keep the scroll position as it is.
      if (to.query.keep) return

      // Otherwise scroll to top.
      return { top: 0, left: 0 } // { x: 0, y: 0 } for Vue2 version of router
    }
  },
})

router.beforeEach((to, from, next) => {
  // If we're keeping the scroll position, then we do not probably need to start loading either!
  if (to.query.keep) {
    return next()
  }
  const store = useMainStore()
  store.startLoading('router')
  next()
})

router.afterEach((to, from) => {
  const store = useMainStore()
  store.stopLoading('router')
})

export default router
