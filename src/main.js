import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/css/styles.css";
import "./assets/css/variables.css";
import "./assets/css/fonts.css";
import "./assets/css/animations.css";

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
