<template>
  <div class="nav-button-container">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  color: var(--color-primary);
  width: 2rem;
  height: 2rem;
  padding: 1.5rem;
  margin: 1.5rem;
  border-radius: 50%;
  background-color: rgba(230, 230, 230, 0.5);
  box-shadow: 0 0 0.5rem rgba(140, 140, 140, 0.8);
  outline: none;
  z-index: 2;
  transition: all 0.2s ease-in;
}

.nav-button-container:hover {
  background-color: var(--color-primary-contrast);
  transform: scale(1.05);
  box-shadow: 0 0 0.75rem rgba(140, 140, 140, 1);
  outline: none;
}

.nav-button-container:active {
  transform: scale(1);
  box-shadow: 0 0 0.5rem rgba(140, 140, 140, 0.8);
  outline: none;
}
</style>