<template>
  <h1>
    <span class="text-capitalize"> {{ t('hello') + ' ' }} </span>

    <span>
      {{ t('description') }}
    </span>
  </h1>
  <div class="locales-container">
    <button class="mx-1" elevation="0" color="secondary" @click="locale = 'en'">
      En
    </button>
    <button
      class="mx-1"
      elevation="0"
      color="background"
      @click="locale = 'kr'"
    >
      Kr
    </button>
    <button class="mx-1" elevation="0" color="success" @click="locale = 'fr'">
      Fr
    </button>
    <button class="mx-1" elevation="0" color="info" @click="locale = 'sp'">
      Sp
    </button>
  </div>

  <button class="ma-2" color="#41B883" elevation="0" @click="$router.push('/')">
    Go back
  </button>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

let { t, locale } = useI18n({
  inheritLocale: true,
  useScope: 'global', // Change to "local" if you want to add <i18n></i18n> locally
})
</script>
