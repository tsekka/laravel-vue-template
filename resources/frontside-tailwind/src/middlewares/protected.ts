import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { useMainStore } from '@/stores/main'

export default (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
): void => {
  next()
  // if (useMainStore().isLoggedIn) {
  //   next()
  // } else {
  //   next('/')
  // }
}
