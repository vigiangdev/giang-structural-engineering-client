<template>
  <base-layout>
    <template v-slot:header>
      <h1 class="title">About Us</h1>
    </template>
    <about-image-content>
      <template v-slot:header>
        <h3>Who We Are</h3>
      </template>
      <template v-slot:image>
        <img
          class="image"
          :src="require(`@/assets/img/about/team.jpg`)"
          alt="Construction plan"
        />
      </template>

      <p>
        Vi Giang is the principal engineer of Giang Engineering. He received a
        BS in Structural Engineering at the University of California, San Diego
        and has accumulated 6 years of engineering experience in residential
        construction.
      </p>
      <p>
        Besides providing structural engineering services, he works as a
        software engineer, designing web applications.
      </p>
    </about-image-content>
    <about-image-content>
      <template v-slot:header>
        <h3>The Firm</h3>
      </template>
      <template v-slot:image>
        <img
          class="image"
          :src="require(`@/assets/img/about/blueprint.jpg`)"
          alt="Construction plan"
        />
      </template>
      <p>
        Giang Engineering is a structural engineering company that is
        headquartered in Oakland, California. We provide quality structural
        services that will make you feel safe in your new home.
      </p>
      <p>
        Our firm provides a wide range of engineering services, specifically
        soft story retrofits, earthquake bracing and bolting, retaining wall
        design, remodels, and new construction.
      </p>
    </about-image-content>
    <about-content-list>
      <template v-slot:header>
        <h3>The Process</h3>
      </template>
      <div class="content-list">
        <h4>Consultation</h4>
        <p>
          Please send any architectural plans or sketches for our review. We can
          address any questions or concerns via phone or email that may arise.
        </p>
        <h4>Proposal</h4>
        <p>
          Once we have an understanding of your needs, we will send you a
          detailed proposal for the scheduled work.
        </p>
        <h4>Turnaround</h4>
        <p>
          Your project will be worked on right away. Depending on the scope of
          the project, it may take a day or a few weeks. We will provide you an
          estimate of completion.
        </p>
        <h4>Permitting</h4>
        <p>
          The structural drawings and engineering calculations will be provided
          to you, which may be submitted to the city to obtain the required
          permits.
        </p>
        <div class="contact-us">
          <h3>Ready?</h3>
          <router-link :to="{ name: 'Contact' }">Reach Out!</router-link>
        </div>
      </div>
    </about-content-list>
  </base-layout>
</template>

<script>
import BaseLayout from "@/components/base/BaseLayout.vue";
import AboutImageContent from "@/components/about/AboutImageContent.vue";
import AboutContentList from "@/components/about/AboutContentList.vue";

export default {
  components: {
    BaseLayout,
    AboutImageContent,
    AboutContentList,
  },
};
</script>

<style scoped>
.image {
  object-fit: contain;
  width: 100%;
  height: 100%;
}

.content {
  display: flex;
  flex-direction: column;
}

.content-list h4 {
  text-align: center;
  font-weight: 500;
}

.content-list p {
  text-align: center;
}

.contact-us {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em 0 0;
}

.contact-us h3 {
  font-size: 1.4em;
  font-weight: 500;
}
.contact-us a {
  font-size: 1.2em;
  text-decoration: none;
  color: var(--color-primary);
}

p {
  padding: 0 0 1em 0;
}
</style>