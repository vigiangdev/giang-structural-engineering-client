<template>
  <div class="navbar">
    <div>
      <NavRoutesBrand />
    </div>
    <div>
      <NavRoutesMain class="navbar__main" />
      <NavRoutesBurger class="navbar__toggle" />
      <NavRoutesSide class="navbar__side" />
    </div>
  </div>
</template>

<script>
import NavRoutesBrand from "@/components/navbar/NavRoutesBrand.vue";
import NavRoutesMain from "@/components/navbar/NavRoutesMain.vue";
import NavRoutesBurger from "@/components/navbar/NavRoutesBurger.vue";
import NavRoutesSide from "@/components/navbar/NavRoutesSide.vue";

export default {
  components: {
    NavRoutesBrand,
    NavRoutesMain,
    NavRoutesBurger,
    NavRoutesSide,
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-neutral);
  height: 9em;
  padding: 0 3em;
}

.navbar__main {
  display: none;
}

@media (min-width: 768px) {
  .navbar__main {
    display: block;
  }
  .navbar__toggle {
    display: none;
  }
  .navbar__side {
    display: none;
  }
}
</style>