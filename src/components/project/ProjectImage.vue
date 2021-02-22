<template>
  <div class="project-image">
    <img
      class="image"
      v-bind:src="require('@/assets/img/projects/' + slug + '/' + image)"
    />
  </div>
</template>

<script>
export default {
  props: ["slug", "image"],
};
</script>

<style scoped>
.project-image {
  margin: 0 auto;
  width: 100%;
  max-width: 992px;
  max-height: 1080px;
}
.image {
  display: block;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>