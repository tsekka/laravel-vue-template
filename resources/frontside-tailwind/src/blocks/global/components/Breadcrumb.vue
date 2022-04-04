<template>
  <nav class="flex" aria-label="Breadcrumb">
    <ol role="list" class="flex items-center space-x-4">
      <li>
        <div>
          <router-link :to="{ name: 'Home' }" class="text-gray-400 hover:text-gray-500">
            <HomeIcon class="flex-shrink-0 h-5 w-5" aria-hidden="true" />
            <span class="sr-only">Home</span>
          </router-link>
        </div>
      </li>
      <li v-for="page in items" :key="page.name">
        <div class="flex items-center">
          <ChevronRightIcon class="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
          <router-link v-if="page.to" :to="page.to" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">{{ page.name }}</router-link>
          <span
            v-else
            class="cursor-default ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
            :aria-current="page.current ? 'page' : undefined"
          >{{ page.name }}</span>
        </div>
      </li>
    </ol>
  </nav>
</template>

<script lang="ts">
import { AnyObject } from "@/types";
import { ChevronRightIcon, HomeIcon } from "@heroicons/vue/solid";
import { defineComponent, PropType } from 'vue'
import { RouteLocationRaw } from "vue-router";


export default defineComponent({
  components: {
    ChevronRightIcon,
    HomeIcon,
  },
  props: {
    items: {
      type: Array as PropType<{ name: string, to?: string | RouteLocationRaw, current?: boolean }[]>,
      requires: true,
    },
  },
})
</script>
