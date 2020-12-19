<template>
  <div class="modal" v-if="isModalSwiperOpen">
    <div
      class="modal__backdrop"
      v-on:click="closeModalSwiper"
      v-if="isModalOpen"
    ></div>
    <div class="modal__container">
      <span class="material-icons close" v-on:click="closeModalSwiper">
        clear
      </span>
      <swiper
        :slides-per-view="1"
        :space-between="0"
        navigation
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }"
        class="swiper"
      >
        <swiper-slide
          class="swiper__slide"
          v-for="(image, index) in project.images"
          v-bind:key="index"
          :style="{
            backgroundImage: `url(${require(`@/assets/img/projects${project.path}${project.images[index]}`)})`,
          }"
        >
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/swiper-bundle.css";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default {
  props: ["project"],
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      isModalOpen: true,
    };
  },
  computed: {
    ...mapGetters(["isModalSwiperOpen"]),
  },
  methods: {
    ...mapMutations(["closeModalSwiper", "openModalSwiper"]),
  },
};
</script>

<style scoped>
.modal {
  z-index: 10;
}

.modal__backdrop {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}

.modal__container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  z-index: 1;
}

.close {
  position: absolute;
  color: var(--color-primary);
  font-size: 3em;
  font-weight: normal;
  padding: 0.5em;
  top: 0;
  right: 0;
  z-index: 2;
}

.close:hover,
.close:focus {
  color: var(--color-secondary);
  text-decoration: none;
  cursor: pointer;
}

.swiper {
  height: 100%;
  display: flex;
  justify-content: center;
}

.swiper__slide {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5em;
  background-color: var(--color-primary-contrast);
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}

@media (min-width: 476px) {
  .modal__container {
    width: 85vw;
    height: 85vh;
  }
}
</style>