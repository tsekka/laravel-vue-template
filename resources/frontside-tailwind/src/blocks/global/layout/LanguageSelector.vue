<template>
  <Menu as="div" class="ml-3 relative">
    <div>
      <MenuButton
        class="
          bg-white
          rounded-full
          flex
          text-sm
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-indigo-500
        "
      >
        <span class="sr-only">Open language menu</span>
        <img
          class="h-8 w-8 rounded-full"
          src="@/assets/uk.png"
          alt=""
        />
      </MenuButton>
    </div>
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        class="
          origin-top-right
          absolute
          right-0
          mt-2
          w-48
          rounded-md
          shadow-lg
          py-1
          bg-white
          ring-1 ring-black ring-opacity-5
          focus:outline-none
        "
      >
        <MenuItem v-slot="{ active }">
          <a
            href="#"
            :class="[
              active ? 'bg-gray-100' : '',
              'block px-4 py-2 text-sm text-gray-700',
            ]"
            >Your Profile</a
          >
        </MenuItem>
        <MenuItem v-slot="{ active }">
          <a
            href="#"
            :class="[
              active ? 'bg-gray-100' : '',
              'block px-4 py-2 text-sm text-gray-700',
            ]"
            >Settings</a
          >
        </MenuItem>
        <MenuItem v-slot="{ active }">
          <a
            href="#"
            :class="[
              active ? 'bg-gray-100' : '',
              'block px-4 py-2 text-sm text-gray-700',
            ]"
            >Sign out</a
          >
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>
<script lang="ts">
import { BellIcon, MenuIcon, XIcon } from '@heroicons/vue/outline'

export default {
  components: {
    BellIcon,
    MenuIcon,
    XIcon,
  },
}
</script>

