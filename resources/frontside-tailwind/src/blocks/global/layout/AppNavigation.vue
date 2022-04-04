<template>
  <Popover as="header" class="bg-white shadow border-bottom" v-slot="{ open }">
    <!-- <Disclosure as="nav" class="bg-white shadow" v-slot="{ open }"> -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <img @click="onLogoClick" class="block h-7 w-auto cursor-pointer" src="@/assets/ubuntu-medium.svg" alt="LaravelVueTemplate" />
            <!-- <span @click="onLogoClick" class="block h-7 w-auto cursor-pointer text-h4">LaravelVueTemplate</span> -->
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <router-link
              v-for="(item, i) in items"
              :key="i"
              :to="
                item.to ? item.to : { name: 'Home', query: { x: item.text } }
              "
              class="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              :class="
                item.to && item.to.name === $route.name
                  ? 'border-indigo-500 text-gray-900'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              "
            >{{ item.text }}</router-link>
          </div>
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:items-center">
          <LanguageSelector />
        </div>
        <div class="-mr-2 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <PopoverButton
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:outline-dashed focus:ring-2 focus:ring-inset focus:ring-gray"
          >
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>
      </div>
    </div>
    <MobileNavDialog :items="items" :open="open ? true : false" />
  </Popover>
</template>

<script lang="ts">
import LanguageSelector from './LanguageSelector.vue'
import MobileNavDialog from './MobileNavDialog.vue'
import { useRoute, useRouter } from 'vue-router'
import { defineComponent } from 'vue'

import navigationItems from '@/content/navigation-items'

import { BellIcon, MenuIcon, XIcon } from '@heroicons/vue/outline'
import { ref } from 'vue'
export default defineComponent({
  components: {
    BellIcon,
    MenuIcon,
    XIcon,
    MobileNavDialog,
    LanguageSelector,
  },

  setup() {
    // ROUTE AND ROUTER
    const $route = useRoute()
    const $router = useRouter()

    // DATA
    const items = ref(navigationItems)

    // METHODS
    const onLogoClick = () => {
      if ($route.name !== 'Home') {
        $router.push({ name: 'Home' })
        return
      }

      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }

    return {
      items,
      onLogoClick,
    }
  },
})
</script>
