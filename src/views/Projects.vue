<template>
  <base-layout>
    <template v-slot:header>
      <h1>Projects</h1>
    </template>
    <ImagesGrid :projects="projects" v-on:clicked="openProject" />
    <ImagesSwiper />
  </base-layout>
</template>

<script>
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
    return {
      projects: [
        {
          title: "Scenic Lane Residence",
          location: "Healdsburg, CA",
          path: "/scenic-lane-residence/",
          file: "img-0-thumbnail.jpg",
        },
        {
          title: "Sixth Street Residence",
          location: "Berkeley, CA",
          path: "/sixth-street-residence/",
          file: "img-0-thumbnail.jpg",
        },
        {
          title: "Grizzly Peak Blvd Residence",
          location: "Berkeley, CA",
          path: "/grizzly-peak-blvd-residence/",
          file: "img-0-thumbnail.jpg",
        },
        {
          title: "Grosvenor Place Residence",
          location: "Oakland, CA",
          path: "/grosvenor-place-residence/",
          file: "img-0-thumbnail.jpg",
        },
        {
          title: "Oxford Street Residence",
          location: "Berkeley, CA",
          path: "/oxford-street-residence/",
          file: "img-0-thumbnail.jpg",
        },
        {
          title: "Pomona Ave Residence",
          location: "Oakland, CA",
          path: "/pomona-ave-residence/",
          file: "img-0-thumbnail.jpg",
        },
        {
          title: "Alameda Ave Residence",
          location: "Alameda, CA",
          path: "/alameda-ave-residence/",
          file: "img-0-thumbnail.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>