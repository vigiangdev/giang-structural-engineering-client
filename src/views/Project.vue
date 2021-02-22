<template>
  <base-layout>
    <ProjectImage :slug="project.slug" :image="project.images[0]" />
    <ProjectDescription
      :title="project.title"
      :location="project.location"
      :description="project.description"
      :engineer="project.engineer"
      :architect="project.architect"
      :contractor="project.contractor"
    />
    <div class="project-images">
      <div
        class="image-container"
        v-for="(image, index) in project.images.slice(1, project.images.length)"
        :key="index"
      >
        <ProjectImage :slug="project.slug" :image="image" />
      </div>
    </div>
  </base-layout>
</template>

<script>
import BaseLayout from "@/components/base/BaseLayout";
import ProjectImage from "@/components/project/ProjectImage";
import ProjectDescription from "@/components/project/ProjectDescription";
import { mapGetters } from "vuex";

export default {
  components: {
    BaseLayout,
    ProjectImage,
    ProjectDescription,
  },
  computed: {
    ...mapGetters(["projectBySlug"]),
    project() {
      return this.projectBySlug(this.$route.params.project);
    },
  },
};
</script>

<style scoped>
.project-images {
  margin: 3em 0 0 0;
}

.image-container {
  margin: 1em 0;
}
</style>