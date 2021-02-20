<template>
  <div class="app">
    <Navbar class="navbar" />
    <router-view v-slot="{ Component }">
      <transition name="nav-fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import Navbar from "@/components/navbar/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
.app {
  font-family: "Raleway", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--color-gray-50);
  min-height: 100vh;
}
</style>
