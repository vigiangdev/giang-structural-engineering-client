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
import { mapGetters, mapMutations, mapActions } from "vuex";
import ButtonDesign from "@/components/utils/ButtonDesign.vue";

export default {
  components: {
    ButtonDesign,
  },
  data() {
    return {
      name: "",
      phone: "",
      email: "",
      message: "",
    };
  },
  computed: {
    ...mapGetters(["feedback"]),
  },
  methods: {
    ...mapMutations(["resetFeedback"]),
    ...mapActions(["sendEmail"]),
    async sendEmailTo() {
      const info = {
        name: this.name,
        phone: this.phone,
        email: this.email,
        text: this.message,
      };
      const res = await this.sendEmail(info);

      if (res.data.success) {
        this.$router.push({ name: "ContactRedirect" });
      } else {
        alert(res.data.message);
      }
    },
  },
};
</script>

<style scoped>
.contactform {
  display: flex;
  flex-direction: column;
  font-size: 1.6em;
}
.container {
  display: flex;
  flex-direction: column;
  margin: 0 0 1em 0;
}

label {
  padding: 0.5em 0;
  font-weight: 500;
}

input {
  height: 2.5em;
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