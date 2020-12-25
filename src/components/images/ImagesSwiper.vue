<template>
  <div class="modal" v-if="isModalSwiperOpen">
    <div class="modal__backdrop" v-on:click="closeModalSwiper"></div>
    <div class="modal__container">
      <span class="material-icons close" v-on:click="closeModalSwiper">
        clear
      </span>
      <swiper
        :slides-per-view="1"
        :space-between="0"
        navigation
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true, hide: true }"
        class="swiper"
      >
        <swiper-slide
          class="swiper__slide"
          v-for="(image, index) in project.images"
          v-bind:key="index"
        >
          <img
            :src="
              require(`@/assets/img/projects${project.path}${project.images[index]}`)
            "
            :alt="project.title"
            class="swiper__img"
          />
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
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal__backdrop {
  position: absolute;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal__container {
  position: absolute;
  background-color: var(--color-primary-contrast);
  padding: 1em;
  border: 1px solid var(--color-primary-contrast);
  max-height: 100%;
  max-width: 80%;
  width: auto;
  height: auto;
  box-sizing: border-box;
  overflow: auto;
}

.close {
  position: absolute;
  color: #007aff;
  font-size: 3.5em;
  font-weight: normal;
  padding: 0.25em;
  top: 0.25em;
  right: 0.25em;
  z-index: 2;
}

.close:hover,
.close:focus {
  cursor: pointer;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper__slide {
}

.swiper__img {
  object-fit: contain;
  width: 100%;
  height: 100%;
}

@media (min-width: 992px) {
  .modal__container {
    width: 60%;
  }
}
</style>