<template>
  <base-layout>
    <template v-slot:header>
      <h1>Projects</h1>
    </template>
    <ImagesGrid :projects="projects" />
    <transition name="fade">
      <ImagesSwiper :project="activeProject" v-if="activeProject" />
    </transition>
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
.fade-enter-active,
.fade-leave-active {
  transition: all 0.25s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>