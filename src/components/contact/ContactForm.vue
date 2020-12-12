<template>
  <form class="contactform" v-on:submit.prevent="sendEmailTo">
    <div class="container">
      <label for="name">Full Name:</label>
      <input
        v-model="name"
        type="text"
        name="name"
        placeholder="(Required)"
        required
      />
    </div>
    <div class="container">
      <label for="phone">Phone number:</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        placeholder="(Optional)"
        v-model="phone"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
      />
    </div>
    <div class="container">
      <label for="email">Email:</label>
      <input
        v-model="email"
        type="email"
        name="email"
        placeholder="(Required)"
        required
      />
    </div>
    <div class="container">
      <label for="message">Message:</label>
      <textarea
        v-model="message"
        name="message"
        cols="30"
        rows="10"
        placeholder="(Required)"
        required
      ></textarea>
    </div>
    <ButtonDesign type="submit">Send</ButtonDesign>
  </form>
</template>

<script>
import { mapActions } from "vuex";
import ButtonDesign from "@/components/utils/ButtonDesign.vue";

export default {
  components: {
    ButtonDesign,
  },
  data() {
    return {
      feedback: null,
      name: null,
      phone: null,
      email: null,
      message: null,
    };
  },
  methods: {
    ...mapActions(["sendEmail"]),
    sendEmailTo() {
      if (this.name && this.email && this.message) {
        const info = {
          name: this.name,
          phone: this.phone,
          email: this.email,
          text: this.message,
        };
        this.sendEmail(info);
      } else {
        this.feedback = "Please ";
      }
    },
  },
};
</script>

<style scoped>
.contactform {
  display: flex;
  flex-direction: column;
  font-size: 1.5em;
}
.container {
  display: flex;
  flex-direction: column;
  margin: 0.5em 0;
}

input {
  height: 1.5em;
  font-size: 1em;
  padding: 0.5em;
}

input,
textarea {
  border: 1px solid var(--color-gray-300);
  background-color: var(--color-gray-50);
  padding: 0.5em;
  transition: all 0.2s;
}

input:focus,
textarea:focus {
  outline: 1px solid var(--color-primary);
  transition: all 0.2s;
}
</style>