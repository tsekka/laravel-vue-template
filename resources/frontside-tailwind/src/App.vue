<template>
  <div class="bg-stone-50">
    <ProgressBar />
    <AppNavigation />
    <!-- <CookieNotice /> -->
    <main>
      <div class="flex-grow">
        <router-view v-slot="{ Component }">
          <transition name="fade-quick" mode="out-in">
            <div :key="$route.path" style="min-height: calc(100vh - calc(64px + 85px))">
              <component :is="Component" />
            </div>
          </transition>
        </router-view>
      </div>
    </main>
    <footer>
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <div class="border-t border-gray-200 py-8 text-sm text-gray-500 text-center sm:text-left">
          <span class="block sm:inline left">&copy; {{ (new Date()).getFullYear() }} LaravelVueTemplate OÜ.</span>
          <span class="block sm:inline">All rights reserved.</span>
        </div>
      </div>
    </footer>
  </div>
  <StickyNotice />
</template>

<script lang="ts">
import StickyNotice from './blocks/global/components/StickyNotice.vue';
import CookieNotice from './blocks/global/components/CookieNotice.vue';
import ProgressBar from '@/blocks/global/layout/ProgressBar.vue'
import AppNavigation from '@/blocks/global/layout/AppNavigation.vue'
import { ref, reactive, computed, watch, defineComponent, provide } from 'vue'
import InitializeApp from '@/actions/InitializeApp'
import { useStores } from '@/stores'
import lib from '@/lib'


export default defineComponent({
  components: {
    ProgressBar,
    AppNavigation,
    CookieNotice,
    StickyNotice,
  },
  setup() {
    const stores = useStores()
    lib.stores = stores
    provide('lib', lib)
    new InitializeApp(useStores()).init()
    // console.log(store.appLoading)
    return {}
  },
})
</script>
