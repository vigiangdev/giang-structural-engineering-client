<template>
  <div class="about-image-content">
    <header class="header">
      <slot name="header"></slot>
    </header>
    <div class="container">
      <div class="image">
        <slot name="image"></slot>
      </div>
      <main class="content">
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.about-image-content {
  font-size: 1rem;
  margin: 0 0 4em 0;
}

.header {
  font-size: 1.4em;
  font-weight: 500;
}

.container {
  display: flex;
  flex-direction: column;
  margin: 2em 0;
}

.content {
  font-size: 1em;
  padding: 2em 0;
}

.image {
  align-self: flex-start;
  margin: 0 auto;
}

.content {
  line-height: 1.6;
}

@media (min-width: 768px) {
  .container {
    flex-direction: row;
  }

  .image {
    flex-basis: 15em;
    flex-grow: 1;
  }

  .content {
    padding: 0 0 0 2em;
    flex-basis: 0;
    flex-grow: 12;
  }
}
</style>