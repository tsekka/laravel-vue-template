<template >
  <div class="max-w-lg w-full lg:max-w-xs">
    <label for="search" class="sr-only">Search</label>
    <div class="relative text-sky-100 focus-within:text-gray-400">
      <div class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
        <BaseIcon value="search" class="flex-shrink-0 h-5 w-5" aria-hidden="true" />
      </div>
      <input
        id="search"
        name="search"
        class="block w-full bg-sky-700 bg-opacity-50 py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 placeholder-sky-100 focus:outline-none focus:bg-white focus:ring-white focus:border-white focus:placeholder-gray-500 focus:text-gray-900 sm:text-sm"
        placeholder="Search"
        type="search"
      />
    </div>
  </div>
</template>