<template></template>

<script lang="ts" setup>
import { ref, reactive, computed, watch, defineComponent, inject } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStores } from '@/stores'
import { AnyObject } from '@/types'

// INJECT
const lib = inject<{ _: any, }>('lib')

// ROUTE AND ROUTER
const $route = useRoute()
const $router = useRouter()

// STORE
const $stores = useStores()

  // DATA

  // METHODS

  // COMPUTED

  // WATCH
</script>