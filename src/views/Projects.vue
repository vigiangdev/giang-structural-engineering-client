<template>
  <base-layout>
    <template v-slot:header>
      <h1>Projects</h1>
    </template>
    <ImagesGrid :projects="projects" />
    <ImagesSwiper :project="activeProject" v-if="activeProject" />
  </base-layout>
</template>

<script>
import { mapGetters } from "vuex";

import BaseLayout from "@/components/base/BaseLayout.vue";
import ImagesGrid from "@/components/images/ImagesGrid.vue";
import ImagesSwiper from "@/components/images/ImagesSwiper.vue";

export default {
  components: {
    BaseLayout,
    ImagesGrid,
    ImagesSwiper,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["projects", "activeProject", "isModalSwiperOpen"]),
  },
};
</script>

<style scoped>
</style>