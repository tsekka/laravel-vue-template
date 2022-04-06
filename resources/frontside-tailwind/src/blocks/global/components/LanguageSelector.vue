<template>
  <Menu as="div" class="ml-3 relative" v-slot="{ open }">
    <div>
      <MenuButton
        class="flex-shrink-0 rounded-full p-1 text-white hover:text-white hover:outline-none hover:bg-sky-700 hover:ring-2 hover:ring-offset-2 ring-offset-sky-700 ring-sky-700"
        :class="open ? `ring-2 ring-offset-2` : ``"
      >
        <span class="sr-only">{{ t('Open language menu') }}</span>
        <img class="h-6 w-6 rounded-full" :src="currentLocale.flag" />
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
        class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <MenuItem v-slot="{ active }" v-for="item in locales" :key="item.key">
          <a
            :href="item.href"
            :class="[
              active ? 'bg-gray-100' : '',
              'block px-4 py-2 text-sm text-gray-700',
            ]"
          >
            <div class="flex">
              <img class="h-5 w-5 rounded-full mr-5 shadow" :src="item.flag" />
              {{ item.title }}
            </div>
          </a>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import collect from 'collect.js'
import eeFlag from '@/assets/flags/1x1/ee.svg'
import gbFlag from '@/assets/flags/1x1/gb.svg'

let { t, locale } = useI18n()

function getHref(key: string) {
  const route = useRoute()
  /**
  * Locale key (if not default locale) is set as base in routes/index.ts 
  * and route.fullPath returns everything after locale key. However, 
  * if it's 404 page, then route.fullpath  could return string 
  * that starts with locale key and we need to remove it.
  */
  let fragments = route.fullPath.split('/')
  if (fragments[1] === locale.value) {
    fragments.splice(1, 1)
  }

  return '/' + key + fragments.join('/')
}

const locales = computed(function () {
  return [
    { href: getHref('et'), key: 'et', title: 'Eesti keel', flag: eeFlag },
    { href: getHref('en'), key: 'en', title: 'English', flag: gbFlag }]
});

const currentLocale = computed(function () {
  return collect(locales.value).where('key', locale.value).first()
});
</script>

