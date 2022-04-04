<template>
  <DynamicContent
    @loaded="onContentLoaded"
    :key="path"
    :path="path"
    v-if="isInDynamicContentsList"
  />
  <NotFound v-else />
</template>

<script>
import NotFound from "../../not-found/views/NotFound.vue";
import DynamicContent from "../components/DynamicContent.vue";
export default {
  components: {
    NotFound,
    DynamicContent,
  },
  //   head() {
  //     if (this.page) {
  //       return this.page.head;
  //     }
  //   },
  //   created() {
  //     this.$store.commit("SET", { pageSettings: this.page.settings });
  //   },
  watch: {
    page: {
      handler: function (page) {
        this.$store.commit("SET", { pageSettings: page.settings });
        if (this.page.slug === this.$store.getters.setting("homepage_slug")) {
          return this.$router.replace({ name: "Home" });
        }
      },
      deep: true,
    },

    head: {
      immediate: true,
      handler(head) {
        if (head) this.$store.commit("SET", { head });
      },
    },
  },
  data() {
    return {
      page: null,
    };
  },
  computed: {
    path() {
      return this.$route.path;
    },
    head() {
      return this.page ? this.page.head : null;
    },
    isInDynamicContentsList() {
      for (let [key, value] of Object.entries(this.$store.state.page.routes)) {
        if (this.path === key) return true;
      }

      return false;
    },
  },
  methods: {
    onContentLoaded(page) {
      this.page = page;
    },
  },
};
</script>
