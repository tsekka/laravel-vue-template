<template>
  <footer>
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
      <div class="border-t border-gray-200 py-8 text-sm text-gray-500 text-center sm:text-left">
        <span class="block sm:inline left">&copy; {{ (new Date()).getFullYear() }} LaravelVueTemplate OÜ.</span>
        <span class="block sm:inline" v-t="'All rights reserved.'" />
      </div>
    </div>
  </footer>
</template>