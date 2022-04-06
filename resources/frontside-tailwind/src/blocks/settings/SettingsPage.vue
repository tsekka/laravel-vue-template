<template>
    <UserSettings v-if="isDevelopment" />
    <div v-else>Settings</div>
</template>
  
<script setup lang='ts'>
import UserSettings from './components/UserSettings.vue';

const isDevelopment = import.meta.env.MODE === 'development'
</script>