<template>
  <base-layout>
    <template v-slot:header>
      <h1 class="title">Redirect</h1>
    </template>
    <div class="message">
      <p>Your message was successfully sent!</p>
      <p>You will be redirected in {{ timer }} seconds.</p>
    </div>
  </base-layout>
</template>

<script>
import BaseLayout from "@/components/base/BaseLayout.vue";
export default {
  components: { BaseLayout },
  data() {
    return {
      timer: 5,
    };
  },
  methods: {
    decrementTimer() {
      setInterval(() => {
        if (this.timer > 0) {
          this.timer -= 1;
        }
      }, 1000);
    },
  },
  created() {
    this.decrementTimer();
    setTimeout(() => {
      this.$router.push({ name: "Home" });
    }, 5000);
  },
};
</script>

<style scoped>
.message {
  font-size: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>