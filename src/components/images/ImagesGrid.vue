<template>
  <div class="images">
    <div
      class="image animate-in"
      v-for="(project, index) in projects"
      v-bind:key="index"
      :style="{ 'animation-delay': (index * 0.2).toString() + 's' }"
    >
      <ImageFade :project="project" />
    </div>
  </div>
</template>

<script>
import ImageFade from "@/components/images/ImageFade.vue";

export default {
  components: {
    ImageFade,
  },
  props: ["projects"],
};
</script>

<style scoped>
.images {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 0.5em;
  justify-content: center;
  font-size: 2em;
}

.image {
  width: 100%;
  height: 12em;
  border: 1px solid var(--color-primary-contrast);
  box-sizing: border-box;
  opacity: 0;
}

/* .image:nth-child(1) {
  animation-delay: 0s;
}
.image:nth-child(2) {
  animation-delay: 0.2s;
}
.image:nth-child(3) {
  animation-delay: 0.4s;
}
.image:nth-child(4) {
  animation-delay: 0.6s;
}
.image:nth-child(5) {
  animation-delay: 0.8s;
}
.image:nth-child(6) {
  animation-delay: 1s;
}
.image:nth-child(7) {
  animation-delay: 1.2s;
}
.image:nth-child(8) {
  animation-delay: 1.4s;
} */

.animate-in {
  animation-name: fadeIn;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

@media (min-width: 576px) {
  .images {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 768px) {
  .images {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1200px) {
  .images {
    grid-template-columns: repeat(4, 1fr);
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>