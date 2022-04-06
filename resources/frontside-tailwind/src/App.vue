<template>
  <div class="h-100 bg-gray-100">
    <ProgressBar />
    <AppHeader />
    <PageContent />
    <AppFooter />
  </div>
  <StickyNotices />
</template>

<script lang="ts">
import PageContent from '@/blocks/layout/PageContent.vue';
import AppHeader from '@/blocks/layout/AppHeader.vue';
import AppFooter from '@/blocks/layout/AppFooter.vue';
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
    AppFooter,
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
