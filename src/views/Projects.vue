<template>
  <base-layout>
    <template v-slot:header>
      <h1>Projects</h1>
    </template>
    <ImagesGrid :projects="projects" />
  </base-layout>
</template>

<script>
import BaseLayout from "@/components/base/BaseLayout.vue";
import ImagesGrid from "@/components/images/ImagesGrid.vue";

export default {
  components: {
    BaseLayout,
    ImagesGrid,
  },
  data() {
    return {
      projects: [
        {
          title: "Scenic Lane Residence",
          path: "/scenic-lane-residence/",
          file: "img-0.jpg",
        },
        {
          title: "Sixth Street Residence",
          path: "/sixth-street-residence/",
          file: "img-0.jpg",
        },
        {
          title: "Grizzly Peak Blvd Residence",
          path: "/grizzly-peak-blvd-residence/",
          file: "img-0.jpg",
        },
        {
          title: "Grosvenor Place Residence",
          path: "/grosvenor-place-residence/",
          file: "img-0.jpg",
        },
        {
          title: "Oxford Street Residence",
          path: "/oxford-street-residence/",
          file: "img-0.jpg",
        },
        {
          title: "Pomona Ave Residence",
          path: "/pomona-ave-residence/",
          file: "img-0.jpg",
        },
        {
          title: "Alameda Ave Residence",
          path: "/alameda-ave-residence/",
          file: "img-0.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>