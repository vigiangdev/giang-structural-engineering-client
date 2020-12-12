<template>
  <div class="nav">
    <router-link :to="{ name: 'Projects' }" class="nav__link"
      >PROJECTS</router-link
    >
    <router-link :to="{ name: 'About' }" class="nav__link"
      >ABOUT US</router-link
    >
    <router-link :to="{ name: 'Contact' }" class="nav__link"
      >CONTACT</router-link
    >
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav__link {
  font-size: 1.6em;
  letter-spacing: 0.05em;
  transition: 0.2s ease-out;
  text-decoration: none;
  color: var(--color-step-100);
  margin: 1em;
}

.nav__link:hover {
  color: var(--color-primary);
  transition: 0.2s ease-out;
}

.router-link-active {
  font-weight: 600;
  color: var(--color-primary);
}

.router-link-active:hover {
  color: var(--color-primary);
}
</style>