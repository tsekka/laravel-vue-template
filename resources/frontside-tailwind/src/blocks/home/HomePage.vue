<template>
  <SimpleCentered />
</template>

<script lang="ts">
import SimpleCentered from '../demo/SimpleCentered.vue';
import { ref, reactive, computed, watch, defineComponent, inject } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStores } from '@/stores'
import { AnyObject } from '@/types'

export default defineComponent({
  components: {
    SimpleCentered,
  },

  setup(props, { slots }) {
    // INJECT
    const lib = inject<{ _: any, }>('lib')

    // ROUTE AND ROUTER
    const route = useRoute()
    const router = useRouter()

    // STORE
    const $stores = useStores()

    // DATA

    // METHODS

    // COMPUTED

    // WATCH

    return {
      lib
    }
  },
})
</script>