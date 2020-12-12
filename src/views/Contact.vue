<template>
  <base-layout>
    <template v-slot:header>
      <h1 class="title">Get In Touch</h1>
    </template>

    <ContactForm />
  </base-layout>
</template>

<script>
import BaseLayout from "@/components/base/BaseLayout";
import ContactForm from "@/components/contact/ContactForm.vue";

export default {
  components: {
    BaseLayout,
    ContactForm,
  },
};
</script>

<style scoped>
</style>