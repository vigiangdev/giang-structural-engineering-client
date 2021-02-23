<template>
  <div class="about-image-content" data-aos="fade-up">
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
  padding: 2em;
}

.about-image-content:nth-child(odd) {
  background-color: var(--color-gray-100);
}

.header {
  font-size: 1.6em;
}

.container {
  display: flex;
  flex-direction: column;
  margin: 1em 0 0 0;
}

.content {
  font-size: 1em;
  line-height: 1.6;
  margin-top: 1em;
}

.image {
  align-self: center;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .about-image-content:nth-child(odd) .container .image {
    padding: 0 2em 0 0;
  }

  .about-image-content:nth-child(even) .container .image {
    order: 2;
    padding: 0 0 0 2em;
  }

  .container {
    flex-direction: row;
  }

  .image {
    flex-basis: 15em;
    flex-grow: 1;
  }

  .content {
    margin-top: 0;
    flex-basis: 0;
    flex-grow: 12;
  }
}
</style>