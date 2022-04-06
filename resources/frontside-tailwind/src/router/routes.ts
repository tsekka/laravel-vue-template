import { RouteRecordRaw } from 'vue-router'
import protectedRoute from '../middlewares/protected'
import Home from '@/blocks/home/HomePage.vue'
import Products from '@/blocks/products/ProductsPage.vue'
import Settings from '@/blocks/settings/SettingsPage.vue'
import NotFound from '@/blocks/not-found/NotFound.vue'

const Requisitions = {
  template: '<div class="py-36 text-center">Requisitions</div>',
}

const Offerings = {
  template: '<div class="py-36 text-center">Offerings</div>',
}

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: Home },
  { path: '/products', name: 'Products', component: Products },
  { path: '/requisition', name: 'Requisitions', component: Requisitions },
  { path: '/offerings', name: 'Offerings', component: Offerings },
  { path: '/settings', name: 'Settings', component: Settings },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

export default routes
