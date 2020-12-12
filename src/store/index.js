import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    isSidebarOpen: false,
  },
  getters: {
    isSidebarOpen(state) {
      return state.isSidebarOpen;
    },
  },
  mutations: {
    closeSidebar(state) {
      state.isSidebarOpen = false;
    },
    openSidebar(state) {
      state.isSidebarOpen = true;
    },
  },
  actions: {
    async sendEmail(context, payload) {
      const res = await axios({
        method: "post",
        url: "/api/v1/mail/send",
        data: payload,
      });
      console.log(res);
    },
  },
  modules: {},
});
