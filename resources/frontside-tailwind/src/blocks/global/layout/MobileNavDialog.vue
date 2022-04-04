<template>
  <TransitionRoot as="template" :show="open">
    <div class="lg:hidden">
      <TransitionChild
        as="template"
        enter="duration-150 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-150 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <PopoverOverlay class="z-20 fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <TransitionChild
        as="template"
        enter="duration-150 ease-out"
        enter-from="opacity-0 scale-95"
        enter-to="opacity-100 scale-100"
        leave="duration-150 ease-in"
        leave-from="opacity-100 scale-100"
        leave-to="opacity-0 scale-95"
      >
        <PopoverPanel focus class="z-30 absolute top-0 inset-x-0 max-w-3xl mx-auto w-full p-2 transition transform origin-top">
          <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y divide-gray-200">
            <div class="pt-3 pb-2">
              <div class="flex items-center justify-between px-4">
                <div>
                  <img class="h-5 w-auto" src="@/assets/ubuntu-medium.svg" alt="LaravelVueTemplate" />
                </div>

                <div class="-mr-2">
                  <PopoverButton
                    class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <span class="sr-only">Close menu</span>
                    <XIcon class="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div class="mt-3 mb-1 px-2 space-y-1">
                <PopoverButton
                  v-for="item in itemsWithHome"
                  :as="RouterLink"
                  :to="item.to"
                  exact-active-class="bg-indigo-50 border-indigo-500 text-indigo-700 hover:bg-indigo-50 hover:border-indigo-500 hover:text-indigo-700 "
                  exact
                  class="text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >{{ item.text }}</PopoverButton>
              </div>
            </div>
          </div>
        </PopoverPanel>
      </TransitionChild>
    </div>
  </TransitionRoot>
</template>

<script lang="ts">
import lib from '@/lib'
import {
  Popover,
  PopoverButton,
  PopoverOverlay,
  PopoverPanel,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { XIcon } from '@heroicons/vue/outline'
import { RouterLink } from 'vue-router'
import { PropType, defineComponent } from 'vue';
import { NavItem } from '@/types'

export default defineComponent({
  components: {
    Popover,
    PopoverButton,
    PopoverOverlay,
    PopoverPanel,
    TransitionChild,
    TransitionRoot,
    XIcon,
  },
  props: {
    open: {
      type: Boolean as PropType<boolean>,
      required: true,
    },
    items: {
      type: Array as PropType<NavItem[]>,
      required: true
    },
  },
  setup(props) {
    const itemsWithHome: NavItem[] = lib._.cloneDeep(props.items)
    itemsWithHome.unshift({
      text: 'Avaleht',
      to: { name: 'Home' },
    })

    return {
      RouterLink,
      itemsWithHome
    }
  },
})
</script>
