<template>
  <div class="projects">
    <base-layout>
      <ImagesGrid :projects="projects" />
    </base-layout>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import BaseLayout from "@/components/base/BaseLayout.vue";
import ImagesGrid from "@/components/images/ImagesGrid.vue";

export default {
  components: {
    BaseLayout,
    ImagesGrid,
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
.projects {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 14rem);
  width: 100vw;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-in;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>