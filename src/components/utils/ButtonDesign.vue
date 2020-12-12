<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
button {
  padding: 0.5em;
  background-color: #f8f8f8;
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
  cursor: pointer;
  width: 100%;
  margin: 0 auto;
  transition: all 0.2s;
}

button:focus {
  outline: none;
}

button:hover {
  background-color: var(--color-primary);
  color: var(--color-primary-contrast);
  transition: all 0.2s;
}

@media (min-width: 576px) {
  button {
    width: 10em;
  }
}
</style>