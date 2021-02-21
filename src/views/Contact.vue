<template>
  <base-layout>
    <template v-slot:header>
      <h1 class="title">Get In Touch</h1>
    </template>
    <div class="contact-form">
      <ContactForm />
    </div>
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
.contact-form {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .contact-form {
    width: 720px;
  }
}
</style>