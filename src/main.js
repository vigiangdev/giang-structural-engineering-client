import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/css/styles.css";
import "./assets/css/variables.css";
import "./assets/css/fonts.css";
import "./assets/css/animations.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronLeft,
  faChevronRight,
  faEnvelopeOpenText,
  faCalendarAlt,
  faComments,
  faPencilRuler,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faChevronLeft,
  faChevronRight,
  faEnvelopeOpenText,
  faCalendarAlt,
  faComments,
  faPencilRuler
);

createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
