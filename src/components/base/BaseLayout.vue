<template>
  <div class="base-layout">
    <div class="container">
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot></slot>
      </main>
      <header>
        <slot name="footer"></slot>
      </header>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.base-layout {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  font-size: 1em;
  box-sizing: border-box;
}

.container {
  padding: 0 3em;
  max-width: 100rem;
  width: 100%;
  box-sizing: border-box;
}

header {
  font-size: 2em;
  margin: 1em 0 0 0;
}

footer {
  font-size: 2em;
  margin: 0 0 1em 0;
}

main {
  font-size: 1em;
  margin: 3em 0;
}

@media (min-width: 576px) {
  header {
    font-size: 3em;
  }

  footer {
    font-size: 3em;
  }
}
</style>