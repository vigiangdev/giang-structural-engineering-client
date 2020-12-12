<template>
  <div class="nav">
    <div
      class="nav__backdrop"
      v-on:click="closeSidebar"
      v-if="isSidebarOpen"
    ></div>
    <transition name="slide">
      <div class="nav__sidebar" v-if="isSidebarOpen">
        <NavRoutesBurger class="nav__burger" />
        <div class="nav__links">
          <router-link
            :to="{ name: 'Projects' }"
            class="nav__link"
            v-on:click="closeSidebar"
            >PROJECTS</router-link
          >
          <router-link
            :to="{ name: 'About' }"
            class="nav__link"
            v-on:click="closeSidebar"
            >ABOUT US</router-link
          >
          <router-link
            :to="{ name: 'Contact' }"
            class="nav__link"
            v-on:click="closeSidebar"
            >CONTACT</router-link
          >
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import NavRoutesBurger from "@/components/navbar/NavRoutesBurger.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {
    NavRoutesBurger,
  },
  computed: {
    ...mapGetters(["isSidebarOpen"]),
  },
  data() {
    return {
      width: 0,
    };
  },
  methods: {
    ...mapMutations(["closeSidebar"]),
  },
};
</script>

<style scoped>
.nav {
  z-index: 10;
}

.nav__burger {
  text-align: right;
  padding: 1.5em;
}

.nav__links {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav__link {
  font-size: 1em;
  letter-spacing: 0.05em;
  transition: 0.5s ease-out;
  text-decoration: none;
  color: var(--color-primary);
  padding: 1em;
  width: 100%;
  text-align: center;
}

.nav__link:hover {
  color: var(--color-primary-contrast);
  background-color: var(--color-primary);
  transition: 0.5s ease-out;
}

.router-link-active {
  font-weight: 600;
  color: var(--color-primary);
}

.router-link-active:hover {
  color: var(--color-primary-contrast);
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
  transition: all 150ms ease-in 0s;
}

.nav__backdrop {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
}

.nav__sidebar {
  display: flex;
  flex-direction: column;
  font-size: 2em;
  overflow-y: auto;
  background-color: var(--color-primary-contrast);
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  z-index: 10;
  width: 300px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>