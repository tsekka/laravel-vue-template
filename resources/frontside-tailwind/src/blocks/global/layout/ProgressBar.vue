<style lang="scss">
$vue3-progress-bar-container-z-index: 999999;
$vue3-progress-bar-container-transition: all 500ms ease;
$vue3-progress-bar-color: #000;
$vue3-progress-bar-height: 2px;
$vue3-progress-bar-transition: all 200ms ease;
@import "@marcoschulte/vue3-progress/dist/";
</style>


<template >
  <Vue3ProgressBar />
</template>

<script lang="ts">
import { useMainStore } from '@/stores/main'
import { ProgressFinisher, useProgress } from '@marcoschulte/vue3-progress'
import { computed, watch, defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const mainStore = useMainStore()

    const appIsLoading = computed(() => {
      return mainStore.appIsLoading
    })

    const progresses: ProgressFinisher[] = []

    watch(appIsLoading, (value) => {
      if (value) {
        progresses.push(useProgress().start())
      } else {
        progresses.pop()?.finish()
      }
    })
  },
})
</script>

