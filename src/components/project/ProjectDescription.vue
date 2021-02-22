<template>
  <div class="project">
    <div class="info">
      <h1>{{ title }}</h1>
      <h3>{{ location }}</h3>
    </div>
    <div class="description">
      <p>{{ description }}</p>
    </div>
    <div class="companies">
      <p><span>Engineer:</span> {{ engineer }}</p>
      <p><span>Architect:</span> {{ architect }}</p>
      <p><span>Contractor:</span> {{ contractor }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "title",
    "location",
    "description",
    "engineer",
    "architect",
    "contractor",
  ],
};
</script>

<style scoped>
.project {
  font-size: 1rem;
  padding: 2em 0;
  margin: 0 auto;
  max-width: 992px;
}

.info {
  padding: 1em 0;
}

.info h1 {
  font-size: 1.4em;
  font-weight: bold;
}

.description {
  padding: 1rem 0;
}

.companies p:first-child {
  padding: 0;
}

.companies p:last-child {
  padding: 0;
}
.companies p {
  display: block;
  padding: 0;
}

.companies p span {
  font-weight: bold;
}

@media (min-width: 992px) {
  .companies p:first-child {
    padding: 0 1em 0 0;
  }

  .companies p:last-child {
    padding: 0 0 0 1em;
  }

  .companies p {
    display: inline-block;
    padding: 0 1em 0;
  }
} ;
</style>