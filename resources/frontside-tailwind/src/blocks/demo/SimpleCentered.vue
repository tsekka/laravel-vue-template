<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        <span class="block">{{ texts[1] }}</span>
        <span class="block">{{ texts[2] }}</span>
      </h2>
      <div class="mt-8 flex justify-center">
        <div class="inline-flex rounded-md shadow">
          <a
            href="#"
            class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >{{ texts[3] }}</a>
        </div>
        <div class="ml-3 inline-flex">
          <a
            href="#"
            class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
          >{{ texts[4] }}</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, reactive, computed, watch, defineComponent, inject } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStores } from '@/stores'
import { AnyObject } from '@/types'

const texts = [
  ' Ready to dive in? Start your free trial today. ',
  ' Ready to dive in? Start your free trial today. ',
  ' Ready to dive in? Start your free trial today. ',
  ' Ready to dive in? Start your free trial today. '
]

export default defineComponent({
  props: {
    texts: {
      type: Array,
      default: texts
    },
  },
  setup(props, { slots }) {
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

    return {
      lib
    }
  },
})
</script>