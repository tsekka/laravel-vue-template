<template>
  <div>
    <Disclosure as="div" class="relative bg-sky-700 pb-32 overflow-hidden" v-slot="{ open }">
      <nav
        :class="[open ? 'bg-sky-900' : 'bg-transparent', 'relative z-10 border-b border-teal-500 border-opacity-25 lg:bg-transparent lg:border-none']"
      >
        <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div class="relative h-16 flex items-center justify-between lg:border-b lg:border-sky-800">
            <div class="px-2 flex items-center lg:px-0">
              <router-link class="flex-shrink-0" :to="{ name: 'Home' }">
                <img class="inline-block h-8 w-auto left" src="@/assets/laravel-vue-template-logo.svg" />
              </router-link>
              <div class="hidden lg:block lg:ml-6 lg:space-x-4">
                <div class="flex">
                  <router-link
                    v-for="item in navigation"
                    :key="item.name"
                    :to="item.to"
                    :class="[$route.name === item.to.name ? 'bg-black bg-opacity-30' : 'hover:bg-sky-800', 'rounded-md py-2 px-3 mx-2 text-sm font-medium text-white transition-colors']"
                  >
                    <span v-t="item.name" />
                  </router-link>
                </div>
              </div>
            </div>
            <div class="flex-1 px-2 flex justify-center lg:ml-6 lg:justify-end">
              <SearchBox />
            </div>
            <div class="flex lg:hidden">
              <!-- Mobile menu button -->
              <DisclosureButton
                class="p-2 rounded-md inline-flex items-center justify-center text-sky-200 hover:text-white hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span class="sr-only">Open main menu</span>
                <MenuIcon v-if="!open" class="block flex-shrink-0 h-6 w-6" aria-hidden="true" />
                <XIcon v-else class="block flex-shrink-0 h-6 w-6" aria-hidden="true" />
              </DisclosureButton>
            </div>
            <div class="hidden lg:block lg:ml-4">
              <div class="flex items-center">
                <!-- <button
                  type="button"
                  class="flex-shrink-0 rounded-full p-1 text-white hover:bg-sky-800 hover:text-white focus:outline-none focus:bg-sky-900 focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-900 focus:ring-white"
                >
                  <span class="sr-only">View notifications</span>
                  <BellIcon class="h-6 w-6" aria-hidden="true" />
                </button>-->

                <LanguageSelector />

                <!-- Profile dropdown -->
                <Menu as="div" class="relative flex-shrink-0 ml-4" v-slot="{ open }">
                  <div>
                    <MenuButton
                      class="flex-shrink-0 rounded-full p-1 text-white hover:text-white hover:outline-none hover:bg-sky-700 hover:ring-2 hover:ring-offset-2 ring-offset-sky-700 ring-sky-700"
                      :class="open ? `ring-2 ring-offset-2` : ``"
                    >
                      <span class="sr-only">Open user menu</span>
                      <!-- <img class="rounded-full h-8 w-8" :src="user.imageUrl" alt /> -->
                      <base-icon value="user" size="6"></base-icon>
                    </MenuButton>
                  </div>
                  <transition
                    enter-active-class="transition ease-out duration-100"
                    enter-from-class="transform opacity-0 scale-95"
                    enter-to-class="transform opacity-100 scale-100"
                    leave-active-class="transition ease-in duration-75"
                    leave-from-class="transform opacity-100 scale-100"
                    leave-to-class="transform opacity-0 scale-95"
                  >
                    <MenuItems
                      class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                      <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                        <router-link
                          v-if="item.to"
                          :to="item.to"
                          active-class="bg-gray-100"
                          :class="['block py-2 px-4 text-sm text-gray-700']"
                        >
                          <span v-t="item.name" />
                        </router-link>
                        <a
                          v-else-if="item.href"
                          :href="item.href"
                          :class="[active ? 'bg-gray-100' : '', 'block py-2 px-4 text-sm text-gray-700']"
                        >
                          <span v-t="item.name" />
                        </a>
                      </MenuItem>
                    </MenuItems>
                  </transition>
                </Menu>
              </div>
            </div>
          </div>
        </div>
        <transition name="slide-fade">
          <DisclosurePanel class="bg-sky-900 lg:hidden">
            <div class="pt-2 pb-3 px-2 space-y-1">
              <DisclosureButton
                :as="RouterLink"
                v-for="item in navigation"
                :key="item.name"
                :to="item.to"
                active-class="bg-black bg-opacity-25"
                :class="['hover:bg-sky-800 block rounded-md py-2 px-3 text-base font-medium text-white']"
              >
                <span v-t="item.name" />
              </DisclosureButton>
            </div>
            <div class="pt-4 pb-3 border-t border-sky-800">
              <div class="flex items-center px-4">
                <div class="flex-shrink-0">
                  <div class="rounded-full border p-2">
                    <!-- <img class="rounded-full h-10 w-10" :src="img" alt="User" /> -->
                    <base-icon value="user" size="6" class="text-white rounded-full" />
                  </div>
                </div>
                <div class="ml-3">
                  <div class="text-base font-medium text-white">{{ user.name }}</div>
                  <div class="text-sm font-medium text-sky-200">{{ user.email }}</div>
                </div>
                <!-- <button
                  type="button"
                  class="ml-auto flex-shrink-0 rounded-full p-1 text-sky-200 hover:bg-sky-800 hover:text-white focus:outline-none focus:bg-sky-900 focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-900 focus:ring-white"
                >
                <span class="sr-only">View notifications</span>-->
                <LanguageSelector class="ml-auto" />
                <!-- </button> -->
              </div>
              <div class="mt-3 px-2">
                <DisclosureButton
                  v-for="item in userNavigation" 
                  :key="item.name"
                  :to="item.to ? item.to : undefined"
                  :as="item.to ? RouterLink : 'a'"
                  :href="!item.to ? item.href : undefined"
                  class="block rounded-md py-2 px-3 text-base font-medium text-sky-200 hover:text-white hover:bg-sky-800"
                  active-class="bg-black bg-opacity-25"
                  :class="['hover:bg-sky-800 block rounded-md py-2 px-3 text-base font-medium text-white']"
                  >
                    <span v-t="item.name" />
                  </DisclosureButton>
              </div>
            </div>
          </DisclosurePanel>
        </transition>
      </nav>
      <div
        aria-hidden="true"
        :class="[open ? 'bottom-0' : 'inset-y-0', 'absolute inset-x-0 left-1/2 transform -translate-x-1/2 w-full overflow-hidden lg:inset-y-0']"
      >
        <div class="absolute inset-0 flex">
          <div class="h-full w-1/2" style="background-color: #0a527b" />
          <div class="h-full w-1/2" style="background-color: #065d8c" />
        </div>
        <div class="relative flex justify-center">
          <svg class="flex-shrink-0" width="1750" height="308" viewBox="0 0 1750 308" xmlns="http://www.w3.org/2000/svg">
            <path d="M284.161 308H1465.84L875.001 182.413 284.161 308z" fill="#0369a1" />
            <path d="M1465.84 308L16.816 0H1750v308h-284.16z" fill="#065d8c" />
            <path d="M1733.19 0L284.161 308H0V0h1733.19z" fill="#0a527b" />
            <path d="M875.001 182.413L1733.19 0H16.816l858.185 182.413z" fill="#0a4f76" />
          </svg>
        </div>
      </div>
      <header class="relative py-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold text-white" v-if="$route.name">
            <span v-t="$route.name" />
          </h1>
        </div>
      </header>
    </Disclosure>
  </div>
</template>

<script lang="ts" setup>
import LanguageSelector from '../global/components/LanguageSelector.vue';
import SearchBox from '../global/components/SearchBox.vue';
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/vue'
import {
  MenuIcon,
  XIcon,
} from '@heroicons/vue/outline'

const user = {
  name: 'Ettevõtte nimi OÜ',
  handle: 'deblewis',
  email: 'info@example.com'
}

const navigation = [
  { name: 'Home', to: { name: 'Home' }},
  { name: 'Products', to: { name: 'Products' }},
  { name: 'Requisitions', to: { name: 'Requisitions' }},
  { name: 'Offerings', to: { name: 'Offerings' }},
]
const userNavigation = [
  { name: 'Settings', to: { name: 'Settings' } },
  { name: 'Sign out', href: '#sign-out' },
]
</script>