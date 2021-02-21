import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
  },
  {
    path: "/contact/redirect",
    name: "ContactRedirect",
    component: () => import("../views/ContactRedirect.vue"),
    beforeEnter: (to, from, next) => {
      if (from.name !== "Contact") {
        next({ name: "Home" });
      } else {
        next();
      }
    },
  },
  {
    path: "/projects",
    name: "Projects",
    component: () => import("../views/Projects.vue"),
  },
  {
    path: "/projects/:project",
    name: "Project",
    component: () => import("../views/Project.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "PageNotFound",
    component: () => import("../views/PageNotFound.vue"),
  },
  {
    path: "/yelp",
    name: "Yelp",
    beforeEnter() {
      location.href = "http://yelp.com";
    },
  },
  {
    path: "/facebook",
    name: "Facebook",
    beforeEnter() {
      location.href = "http://facebook.com";
    },
  },
  {
    path: "/linked-in",
    name: "LinkedIn",
    beforeEnter() {
      location.href = "http://linkedin.com";
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
