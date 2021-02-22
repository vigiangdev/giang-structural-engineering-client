import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    isSidebarOpen: false,
    isModalSwiperOpen: false,
    activeProject: null,
    homeSplashIds: [1, 4, 5, 6],
    projects: [
      {
        id: 1,
        title: "Scenic Lane Residence",
        location: "Healdsburg, CA",
        slug: "scenic-lane-residence",
        thumbnail: "img-0-thumbnail.jpg",
        images: ["img-0.jpg"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        engineer: "Giang Engineering",
        architect: "Architect's Name Company",
        contractor: "Contractor's Name Company",
      },
      {
        id: 2,
        title: "Sixth Street Residence",
        location: "Berkeley, CA",
        slug: "sixth-street-residence",
        thumbnail: "img-0-thumbnail.jpg",
        images: ["img-0.jpg"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        engineer: "Giang Engineering",
        architect: "Architect's Name Company",
        contractor: "Contractor's Name Company",
      },
      {
        id: 3,
        title: "Grizzly Peak Blvd Residence",
        location: "Berkeley, CA",
        slug: "grizzly-peak-blvd-residence",
        thumbnail: "img-0-thumbnail.jpg",
        images: ["img-0.jpg"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        engineer: "Giang Engineering",
        architect: "Architect's Name Company",
        contractor: "Contractor's Name Company",
      },
      {
        id: 4,
        title: "Grosvenor Place Residence",
        location: "Oakland, CA",
        slug: "grosvenor-place-residence",
        thumbnail: "img-0-thumbnail.jpg",
        images: ["img-0.jpg"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        engineer: "Giang Engineering",
        architect: "Architect's Name Company",
        contractor: "Contractor's Name Company",
      },
      {
        id: 5,
        title: "Oxford Street Residence",
        location: "Berkeley, CA",
        slug: "oxford-street-residence",
        thumbnail: "img-0-thumbnail.jpg",
        images: ["img-0.jpg"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        engineer: "Giang Engineering",
        architect: "Architect's Name Company",
        contractor: "Contractor's Name Company",
      },
      {
        id: 6,
        title: "Pomona Ave Residence",
        location: "Oakland, CA",
        slug: "pomona-ave-residence",
        thumbnail: "img-0-thumbnail.jpg",
        images: ["img-0.jpg"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        engineer: "Giang Engineering",
        architect: "Architect's Name Company",
        contractor: "Contractor's Name Company",
      },
      {
        id: 7,
        title: "Alameda Ave Residence",
        location: "Alameda, CA",
        slug: "alameda-ave-residence",
        thumbnail: "img-0-thumbnail.jpg",
        images: ["img-0.jpg", "img-1.jpg"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        engineer: "Giang Engineering",
        architect: "Architect's Name Company",
        contractor: "Contractor's Name Company",
      },
      {
        id: 8,
        title: "Canon Ave Residence",
        location: "Oakland, CA",
        slug: "canon-ave-residence",
        thumbnail: "img-0-thumbnail.jpg",
        images: ["img-0.jpg"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        engineer: "Giang Engineering",
        architect: "Architect's Name Company",
        contractor: "Contractor's Name Company",
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
    projectBySlug(state) {
      return (slug) => {
        return state.projects.find((project) => project.slug === slug);
      };
    },
    homeSplashIds(state) {
      return state.homeSplashIds;
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
