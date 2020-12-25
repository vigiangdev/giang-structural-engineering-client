<template>
  <div class="about-content-list">
    <header class="header">
      <slot name="header"></slot>
    </header>
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.about-content-list {
  padding: 4em 2em 0;
  background-color: var(--color-primary-contrast);
}

.header {
  font-size: 2em;
  font-weight: 500;
  text-align: center;
}

.container {
  width: 100%;
  margin: 2em auto 0;
  padding: 2em;
  font-size: 1.8em;
  line-height: 1.6;
}

@media (min-width: 768px) {
  .container {
    width: 75%;
  }
}
</style>