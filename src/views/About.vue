<template>
  <base-layout>
    <about-image-content>
      <template v-slot:header>
        <h3>Who We Are</h3>
      </template>
      <template v-slot:image>
        <img
          class="image"
          :src="require(`@/assets/img/about/team.jpg`)"
          alt="Construction plan"
        />
      </template>

      <p>
        Vi Giang is the principal engineer of Giang Engineering. He received a
        BS in Structural Engineering at the University of California, San Diego
        and has accumulated 6 years of engineering experience in residential
        construction.
      </p>
      <p>
        Besides providing structural engineering services, he works as a
        software engineer, designing web applications.
      </p>
    </about-image-content>
    <about-image-content>
      <template v-slot:header>
        <h3>The Firm</h3>
      </template>
      <template v-slot:image>
        <img
          class="image"
          :src="require(`@/assets/img/about/blueprint.jpg`)"
          alt="Construction plan"
        />
      </template>
      <p>
        Giang Engineering is a structural engineering company that is
        headquartered in Oakland, California. We provide quality structural
        services that will make you feel safe in your new home.
      </p>
      <p>
        Our firm provides a wide range of engineering services, specifically
        soft story retrofits, earthquake bracing and bolting, retaining wall
        design, remodels, and new construction.
      </p>
    </about-image-content>
    <AboutProcess />
  </base-layout>
</template>

<script>
import BaseLayout from "@/components/base/BaseLayout.vue";
import AboutImageContent from "@/components/about/AboutImageContent.vue";
import AboutProcess from "@/components/about/AboutProcess.vue";

export default {
  components: {
    BaseLayout,
    AboutImageContent,
    AboutProcess,
  },
};
</script>

<style scoped>
.image {
  object-fit: contain;
  width: 100%;
  height: 100%;
}

.content {
  display: flex;
  flex-direction: column;
}

p {
  padding: 0 0 1em 0;
}
</style>