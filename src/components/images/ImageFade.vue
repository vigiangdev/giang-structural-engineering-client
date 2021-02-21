<template>
  <router-link
    class="project-link"
    :to="{ name: 'Project', params: { project: project.slug } }"
  >
    <div
      class="image__container"
      v-on:click="openProject"
      :style="{
        backgroundImage: `url(${require(`@/assets/img/projects/${project.slug}/${project.thumbnail}`)})`,
      }"
    >
      <div
        class="image__window"
        v-on:mouseover="fadeIn"
        v-on:mouseleave="fadeOut"
        :style="style"
      >
        <h3>{{ project.title }}</h3>
        <p class="image__location">{{ project.location }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: ["project"],
  data() {
    return {
      hover: false,
      style: {
        backgroundColor: "rgba(0, 0, 0, 0)",
      },
    };
  },
  computed: {},
  methods: {
    ...mapMutations(["setActiveProject", "openModalSwiper"]),
    fadeIn() {
      this.hover = true;
      this.style.color = "var(--color-primary";
      this.style.backgroundColor = "rgba(249, 250, 251, 0.95";
    },
    fadeOut() {
      this.hover = false;
      this.style.backgroundColor = "rgba(0, 0, 0, 0)";
      this.style.color = "rgba(0, 0, 0, 0)";
    },
    openProject() {
      this.setActiveProject(this.project);
      this.openModalSwiper();
    },
  },
};
</script>

<style scoped>
.project-link {
  text-decoration: none;
}

.image__container {
  display: block;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  transition: all 0.2s;
  cursor: pointer;
}

.image__window {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  padding: 2em;
  width: 100%;
  height: 100%;
  transition: all 0.2s;
  color: rgba(0, 0, 0, 0);
}

.image__location {
  font-size: 0.8em;
  padding: 0.5em;
}
</style>