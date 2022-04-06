<template>
  <!-- Global notification live region, render this permanently at the end of the document -->
  <div aria-live="assertive" class="fixed inset-0 flex items-end z-40 pointer-events-none">
    <div class="w-full flex h-screen flex-col-reverse items-center">
      <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
      <transition
        enter-active-class="transform ease-out duration-300 transition"
        enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <CookieNotice class="pointer-events-auto" />
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import CookieNotice from '@/blocks/global/components/CookieNotice.vue';
import { ref, defineComponent } from 'vue'

export default defineComponent({
  components: {
    CookieNotice,
  }
})
</script>