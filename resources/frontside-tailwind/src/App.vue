<template>
  <div class="h-100 bg-gray-100">
    <ProgressBar />
    <AppHeader />
    <PageContent />

    <footer>
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <div class="border-t border-gray-200 py-8 text-sm text-gray-500 text-center sm:text-left">
          <span class="block sm:inline left">&copy; {{ (new Date()).getFullYear() }} LaravelVueTemplate OÜ.</span>
          <span class="block sm:inline">All rights reserved.</span>
        </div>
      </div>
    </footer>
  </div>
  <StickyNotices />
</template>

<script lang="ts">
import PageContent from '@/blocks/layout/PageContent.vue';
import AppHeader from '@/blocks/layout/AppHeader.vue';
import StickyNotices from '@/blocks/layout/StickyNotices.vue';
import ProgressBar from '@/blocks/global/components/ProgressBar.vue'
import { ref, reactive, computed, watch, defineComponent, provide } from 'vue'
import InitializeApp from '@/actions/InitializeApp'
import { useStores } from '@/stores'
import lib from '@/lib'


export default defineComponent({
  components: {
    ProgressBar,
    StickyNotices,
    AppHeader,
    PageContent,
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
