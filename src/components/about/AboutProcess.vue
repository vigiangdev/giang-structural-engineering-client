<template>
  <div class="about-process">
    <h3 class="about-title">Our Process</h3>
    <div class="cards-container">
      <AboutProcessCard class="card">
        <template v-slot:card-image>
          <font-awesome-icon :icon="['fas', 'comments']" size="2x" />
        </template>
        <template v-slot:card-title>
          <h3>Consultation</h3>
        </template>
        <p>
          Send any architectural plans or sketches for our review. We can
          address any questions or concerns via phone or email that may arise.
        </p>
      </AboutProcessCard>
      <AboutProcessCard class="card">
        <template v-slot:card-image>
          <font-awesome-icon :icon="['fas', 'envelope-open-text']" size="2x" />
        </template>
        <template v-slot:card-title>
          <h3>Proposal</h3>
        </template>
        <p>
          Once we have an understanding of your needs, we will send you a
          detailed proposal for the scheduled work.
        </p>
      </AboutProcessCard>
      <AboutProcessCard class="card">
        <template v-slot:card-image>
          <font-awesome-icon :icon="['fas', 'calendar-alt']" size="2x" />
        </template>
        <template v-slot:card-title>
          <h3>Turnaround</h3>
        </template>
        <p>
          Your project will be worked on right away. Depending on the scope of
          the project, it may take a day or a few weeks. We will provide you an
          estimate of completion.
        </p>
      </AboutProcessCard>
      <AboutProcessCard class="card">
        <template v-slot:card-image>
          <font-awesome-icon :icon="['fas', 'pencil-ruler']" size="2x" />
        </template>
        <template v-slot:card-title>
          <h3>Permitting</h3>
        </template>
        <p>
          The structural drawings and engineering calculations will be provided
          to you, which may be submitted to the city to obtain the required
          permits.
        </p>
      </AboutProcessCard>
    </div>
  </div>
</template>

<script>
import AboutProcessCard from "./AboutProcessCard";
export default {
  components: {
    AboutProcessCard,
  },
};
</script>

<style scoped>
.about-process {
  background-color: var(--color-gray-100);
  border: 1px solid var(--color-primary-contrast);
}

.about-title {
  font-size: 1.6rem;
  text-align: center;
  padding: 2rem;
}

.cards-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1rem;
  padding: 0 0.5em 0.5em 0.5em;
}

@media (min-width: 992px) {
  .cards-container {
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
  }
}
</style>