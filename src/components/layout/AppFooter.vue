<template>
  <div class="footer">
    <div class="company-info">
      <h4>Copyright © 2021 Giang Engineering</h4>
      <p>Oakland, CA | 510-918-9568</p>
    </div>
    <div class="social-media">
      <router-link :to="{ name: 'Yelp' }">
        <font-awesome-icon :icon="['fab', 'yelp']" />
      </router-link>
      <router-link :to="{ name: 'Facebook' }">
        <font-awesome-icon :icon="['fab', 'facebook-f']" />
      </router-link>
      <router-link :to="{ name: 'LinkedIn' }">
        <font-awesome-icon :icon="['fab', 'linkedin-in']" />
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  padding: 2em;
}

.company-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.social-media {
  display: flex;
  justify-content: center;
  align-items: center;
}

.social-media a {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
  margin: 1rem;
}
</style>