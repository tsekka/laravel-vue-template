<template>
  <div v-if="show">
    <div
      class="bg-stone-200 shadow-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 border-b-0 border-slate-900 rounded-b-none sm:flex align-middle"
    >
      <div class="py-3 pl-3 sm:pr-3">
        Sellel veebilehel kasutatakse küpsiseid. Kasutamist jätkates nõustute privaatsuspoliitika
        ja küpsiste kasutamise
        <router-link :to="{ name: 'Home' }" class="link">tingimustega</router-link>.
      </div>
      <div class="flex align-middle pr-3">
        <button
          @click="onAccept"
          class="btn btn-sm btn-primary my-auto w-full border border-transparent rounded-none flex items-center justify-center"
        >Nõustun</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import TermsDialog from "./TermsDialog";
export default defineComponent({
  components: {
    // TermsDialog,
  },
  data() {
    return {
      show: !localStorage.getItem("cookieNoticeAccepted"),
    };
  },
  methods: {
    onAccept() {
      localStorage.setItem("cookieNoticeAccepted", '1');
      this.show = false;
    },
  },
})
</script>
