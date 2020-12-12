<template>
  <router-link :to="{ name: 'Home' }" exact class="navbar__brand"
    >GIANG <span class="engineering">ENGINEERING</span
    ><span class="eng">ENG</span></router-link
  >
</template>

<script>
export default {};
</script>

<style scoped>
.navbar__brand {
  font-weight: 600;
  font-size: 2em;
  letter-spacing: 0.2em;
  text-decoration: none;
  color: var(--color-primary);
}

.engineering {
  display: none;
}

.eng {
  display: inline-block;
}
@media (min-width: 576px) {
  .engineering {
    display: inline-block;
  }

  .eng {
    display: none;
  }
}
</style>