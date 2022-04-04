
<template>
  <component v-bind="$attrs" :is="templateComponent">
    <!-- <template #title>
      {{ title }}
    </template> -->
    <div v-if="loaded">
      <BlockContent :blocks="current.blocks" />
    </div>
    <div v-else class="block" style="min-height: 500px"></div>
    <template #card-footer><slot name="card-footer"></slot></template>
  </component>
</template>

<script>
import BlockContent from "@B/global/block-content/BlockContent.vue";
// import LandlordContactForm from "../../global/components/LandlordContactForm.vue";
// import HtmlContent from "../../global/components/HtmlContent.vue";
import DefaultTemplate from "./templates/DefaultTemplate.vue";
import WideTemplate from "./templates/WideTemplate.vue";
// import CardTemplate from "./templates/CardTemplate.vue";

export default {
  emits: ["loaded"],
  inject: ["$_"],
  components: {
    // LandlordContactForm,
    BlockContent,
  },

  props: {
    path: {
      type: String,
      required: true,
    },
    template: {
      type: String,
      default: null,
    },
    disableContactForm: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      loaded: false,
      title: this.$store.state.page.routes[this.path].title,
    };
  },

  created() {
    this.fetchContent();
  },

  computed: {
    current() {
      return this.$store.state.page.current;
    },
    templateComponent() {
      if (this.template) return this.getTemplate(this.template);

      return this.getTemplate(this.current ? this.current.template : null);
    },
  },

  methods: {
    getTemplate(name) {
      if (name === "wide" || name === "WideTemplate") {
        return WideTemplate;
      } else {
        return DefaultTemplate;
      }
    },
    async fetchContent() {
      this.$store.commit("START_LOADING", this.path);

      const cached = this.$_.get(this.$store.state.page.cache, this.path, false);
      if (cached) {
        return this.finish(cached);
      }
      const response = await this.axios.get("page-content" + this.path);
      this.$store.commit("page/SET_CACHE", [this.path, response.data]);
      this.finish(response.data);
    },

    finish(current) {
      this.$store.commit("page/SET", { current: current });
      this.$emit("loaded", current);
      this.loaded = true;
      this.$store.commit("STOP_LOADING", this.path);
    },
  },
};
</script>
