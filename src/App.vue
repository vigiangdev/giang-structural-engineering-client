<template>
  <div class="app">
    <Navbar class="navbar" />
    <router-view v-slot="{ Component }">
      <transition name="nav-fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <AppFooter />
  </div>
</template>

<script>
import Navbar from "@/components/navbar/Navbar.vue";
import AppFooter from "@/components/layout/AppFooter.vue";
import AOS from "aos";

export default {
  components: {
    Navbar,
    AppFooter,
  },
  created() {
    AOS.init({
      offset: 120,
      delay: 200,
      duration: 400,
      easing: "ease",
      once: false,
      mirror: true,
      anchorPlacement: "top-bottom",
    });
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
