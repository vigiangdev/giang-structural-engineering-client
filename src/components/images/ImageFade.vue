<template>
  <div
    class="image__container"
    :style="{
      backgroundImage: `url(${require(`@/assets/img/projects${project.path}${project.file}`)})`,
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
</template>

<script>
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
    fadeIn() {
      this.hover = true;
      this.style.backgroundColor = "rgba(44, 62, 80, 0.9)";
      this.style.color = "var(--color-primary-contrast)";
    },
    fadeOut() {
      this.hover = false;
      this.style.backgroundColor = "rgba(0, 0, 0, 0)";
      this.style.color = "rgba(0, 0, 0, 0)";
    },
  },
};
</script>

<style scoped>
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