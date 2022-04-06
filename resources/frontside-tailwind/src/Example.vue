<template></template>

<script lang="ts">
import { ref, reactive, computed, watch, defineComponent, inject } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStores } from '@/stores'
import { AnyObject } from '@/types'
import { useI18n } from 'vue-i18n'

export default defineComponent({

  setup(props, { slots }) {
    // INJECT
    const lib = inject<{ _: any, }>('lib')

    // LOCALIZATION
    let { t, locale } = useI18n()

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