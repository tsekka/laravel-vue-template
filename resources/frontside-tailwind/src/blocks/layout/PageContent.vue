<template>
  <main class="relative -mt-32">
    <div class="max-w-screen-xl mx-auto pb-6 px-4 sm:px-6 lg:pb-16 lg:px-8">
      <div class="bg-white rounded-lg shadow overflow-hidden">
        <router-view v-slot="{ Component }">
          <transition name="fade-quick" mode="out-in">
            <div class="divide-y divide-gray-200" :key="$route.path" style="min-height: calc(100vh - calc(64px + 116px + 85px + 4rem))">
              <component :is="Component" />
            </div>
          </transition>
        </router-view>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
</script>