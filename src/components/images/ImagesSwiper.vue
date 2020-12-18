<template>
  <div class="modal" v-if="isModalOpen">
    <div
      class="modal__backdrop"
      v-on:click="closeModal"
      v-if="isModalOpen"
    ></div>
    <div class="modal__container">
      <span class="material-icons close" v-on:click="closeModal"> clear </span>
      <swiper
        :slides-per-view="1"
        :space-between="0"
        navigation
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }"
        class="swiper"
      >
        <swiper-slide class="swiper__slide">Slide 1</swiper-slide>
        <swiper-slide class="swiper__slide">Slide 2</swiper-slide>
        <swiper-slide class="swiper__slide">Slide 3</swiper-slide>
        <swiper-slide class="swiper__slide">Slide 4</swiper-slide>
        <swiper-slide class="swiper__slide">Slide 5</swiper-slide>
        <swiper-slide class="swiper__slide">Slide 6</swiper-slide>
        <swiper-slide class="swiper__slide">Slide 7</swiper-slide>
        <swiper-slide class="swiper__slide">Slide 8</swiper-slide>
        <!-- <swiper-slide
          class="swiper__slide"
          v-on:click="displayImages"
          v-for="(image, index) in project.images"
          v-bind:key="index"
          >Slide
        </swiper-slide> -->
      </swiper>
    </div>
  </div>
</template>

<script>
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/swiper-bundle.css";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default {
  // props: ["project"],
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      isModalOpen: true,
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
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
  width: 75vw;
  height: 75vh;
  box-sizing: border-box;
  z-index: 1;
}

.close {
  position: absolute;
  color: var(--color-primary-contrast);
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
  background-color: var(--color-primary);
  width: 100%;
  height: 100%;
}
</style>