import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    isSidebarOpen: false,
    isModalSwiperOpen: false,
    activeProject: null,
    projects: [
      {
        title: "Scenic Lane Residence",
        location: "Healdsburg, CA",
        path: "/scenic-lane-residence/",
        file: "img-0-thumbnail.jpg",
        images: ["img-0.jpg"],
      },
      {
        title: "Sixth Street Residence",
        location: "Berkeley, CA",
        path: "/sixth-street-residence/",
        file: "img-0-thumbnail.jpg",
        images: ["img-0.jpg"],
      },
      {
        title: "Grizzly Peak Blvd Residence",
        location: "Berkeley, CA",
        path: "/grizzly-peak-blvd-residence/",
        file: "img-0-thumbnail.jpg",
        images: ["img-0.jpg"],
      },
      {
        title: "Grosvenor Place Residence",
        location: "Oakland, CA",
        path: "/grosvenor-place-residence/",
        file: "img-0-thumbnail.jpg",
        images: ["img-0.jpg"],
      },
      {
        title: "Oxford Street Residence",
        location: "Berkeley, CA",
        path: "/oxford-street-residence/",
        file: "img-0-thumbnail.jpg",
        images: ["img-0.jpg"],
      },
      {
        title: "Pomona Ave Residence",
        location: "Oakland, CA",
        path: "/pomona-ave-residence/",
        file: "img-0-thumbnail.jpg",
        images: ["img-0.jpg"],
      },
      {
        title: "Alameda Ave Residence",
        location: "Alameda, CA",
        path: "/alameda-ave-residence/",
        file: "img-0-thumbnail.jpg",
        images: ["img-0.jpg", "img-1.jpg"],
      },
      {
        title: "Canon Ave Residence",
        location: "Oakland, CA",
        path: "/canon-ave-residence/",
        file: "img-0-thumbnail.jpg",
        images: ["img-0.jpg"],
      },
    ],
  },
  getters: {
    isSidebarOpen(state) {
      return state.isSidebarOpen;
    },
    isModalSwiperOpen(state) {
      return state.isModalSwiperOpen;
    },
    projects(state) {
      return state.projects;
    },
    activeProject(state) {
      return state.activeProject;
    },
  },
  mutations: {
    closeSidebar(state) {
      state.isSidebarOpen = false;
    },
    openSidebar(state) {
      state.isSidebarOpen = true;
    },
    closeModalSwiper(state) {
      state.isModalSwiperOpen = false;
      state.activeProject = null;
    },
    openModalSwiper(state) {
      state.isModalSwiperOpen = true;
    },
    setActiveProject(state, project) {
      state.activeProject = project;
    },
    removeActiveProject(state) {
      state.activeProject = null;
    },
  },
  actions: {
    async sendEmail(context, payload) {
      const res = await axios({
        method: "post",
        url: "/api/v1/mail/send",
        data: payload,
      });

      return res;
    },
  },
  modules: {},
});
