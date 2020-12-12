<template>
  <div class="toggle" v-on:click="toggle()">
    <span class="material-icons"> {{ icon }} </span>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters(["isSidebarOpen"]),
    icon() {
      if (this.isSidebarOpen) {
        return "close";
      } else {
        return "menu";
      }
    },
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["openSidebar", "closeSidebar"]),
    toggle() {
      if (this.isSidebarOpen) {
        this.closeSidebar();
      } else {
        this.openSidebar();
      }
    },
  },
};
</script>

<style scoped>
.toggle {
  cursor: pointer;
}

.material-icons {
  color: var(--color-primary);
}
</style>