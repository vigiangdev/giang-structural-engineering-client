<template>
  <div class="app">
    <Navbar class="navbar" />
    <transition name="fade">
      <router-view />
    </transition>
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
  background-color: #f9fafb;
  min-height: 100vh;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
