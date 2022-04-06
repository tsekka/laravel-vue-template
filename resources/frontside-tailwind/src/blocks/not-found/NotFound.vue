<template>
  <div class="flex-grow flex-col justify-center w-full mx-auto px-4 sm:px-6 lg:px-8">
    <!-- <div class="flex-shrink-0 flex justify-center">
      <router-link :to="{ name: 'Home' }" class="inline-flex">
        <span class="sr-only">LaravelVueTemplate</span>
        <img
          class="h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
          alt=""
        />
      </router-link>
    </div>-->
    <div class="py-16 lg:py-36 w-full">
      <div class="text-center">
        <p class="text font-semibold text-indigo-600 uppercase tracking-wide">404</p>
        <h1 class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          <span v-t="`Page not found`" />
        </h1>
        <p class="mt-3 text-base text-gray-500">
          <span v-t="`We’re having trouble finding that page - it may have been deleted.`" />
        </p>
        <div class="mt-6">
          <router-link :to="{ name: 'Home' }" class="text-base font-medium text-indigo-600 hover:text-indigo-500">
            <span v-t="`Back to main page`" class="left" />
            <span aria-hidden="true">&rarr;</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  mounted() {
    this.$nextTick(() => {
      //   this.$store.commit("SET", { head: { title: "Lehte ei leitud!" } });
    })
  },
})
</script>
