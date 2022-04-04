import { RouteRecordRaw } from 'vue-router'
import protectedRoute from '../middlewares/protected'
import Home from '@/blocks/home/HomePage.vue'
import Demo from '@/blocks/demo/DemoPage.vue'
import Example from '@/Example.vue'
import NotFound from '@/blocks/not-found/NotFound.vue'

const Prices = {
  template: '<div class="py-36 text-center">Prices</div>',
}
const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: Home },
  { path: '/example', name: 'Example', component: Example },
  { path: '/demo', name: 'Demo', component: Demo },
  { path: '/prices', name: 'Prices', component: Prices },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

export default routes
