<template>
    <DynamicContent @loaded="onContentLoaded" :key="path" :path="path" v-if="isInDynamicContentsList" />
    <NotFound v-else />
</template>

<script>
import NotFound from "../../not-found/views/NotFound.vue";
import DynamicContent from "../components/DynamicContent.vue";
import { ref, reactive, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
    components: {
        NotFound,
        DynamicContent,
    },
    setup() {
        // setup meetod jookseb väga vara app-i elutsüklis ja seega "this" kasutamine ei anna sama tulemust, mis näiteks meetodites.

        // ROUTE AND ROUTER
        const $route = useRoute();
        const $router = useRouter();

        // STORE
        const $store = useStore();

        // DATA
        const page = ref(null); // ref teeb väärtuse reaktiivseks: loob vue poolt jälgitava objekti

        // METHODS
        function onContentLoaded(pageValue) {
            page.value = pageValue;
        }

        // COMPUTED
        const path = computed(function () {
            return $route.path;
        });
        const head = computed(function () {
            return page.value ? page.value.head : null;
        });
        const isInDynamicContentsList = computed(function () {
            for (let [key, value] of Object.entries($store.state.page.routes)) {
                if (path.value === key) return true;
            }

            return false;
        });

        // WATCH
        // watch head
        watch(
            head,
            function (head) {
                if (head) $store.commit("SET", { head });
            },
            { immediate: true },
        );
        // watch page
        watch(
            head,
            function (head) {
                $store.commit("SET", { pageSettings: page.value.settings });
                if (page.value.slug === $store.getters.setting("homepage_slug")) {
                    return $router.replace({ name: "Home" });
                }
            },
            { deep: true },
        );

        // WATCH MULTIPLE
        // watch([path, head], function (newValues, oldValues) {
        //   console.log("newPath", newValues[0]);
        // });

        return {
            page,
            onContentLoaded,
            path,
            head,
            isInDynamicContentsList,
        };
    },
};
</script>
