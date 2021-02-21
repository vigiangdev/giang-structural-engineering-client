<template>
  <div class="card">
    <div class="card-image">
      <slot name="card-image"></slot>
    </div>
    <div class="card-content">
      <div class="card-title">
        <slot name="card-title"></slot>
      </div>
      <div class="card-detail">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  display: flex;
  align-items: center;
  padding: 1em;
  margin: 0.5em;
  background-color: var(--color-gray-50);
  border: 1px solid var(--color-primary-contrast);
}

.card-image {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 5rem;
  min-height: 5rem;
}

.card-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.card-title {
  font-size: 1.4rem;
}

.card-detail {
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 1rem 0 0 0;
}

@media (min-width: 992px) {
  .card {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    flex-basis: 0;
    flex-grow: 1;
  }

  .card-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card-detail {
    text-align: center;
  }
}
</style>