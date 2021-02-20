<template>
  <div class="homesplash">
    <div class="container">
      <div class="slider">
        <div class="slider-navigation">
          <div class="swiper-button-container swiper-button-prev">
            <font-awesome-icon
              class="swiper-button"
              :icon="['fas', 'chevron-left']"
            />
          </div>
          <div class="swiper-button-container swiper-button-next">
            <font-awesome-icon
              class="swiper-button"
              :icon="['fas', 'chevron-right']"
            />
          </div>
        </div>
        <swiper
          :slides-per-view="1"
          :space-between="50"
          effect="fade"
          :loop="true"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }"
          :autoplay="{ delay: 8000 }"
          class="slider-container"
        >
          <swiper-slide
            v-for="image in images"
            v-bind:key="image.id"
            class="slide"
          >
            <h1 class="slide-title">{{ image.title }}</h1>
            <img class="slide-image" :src="image.imageUrl" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import SwiperCore, { Navigation, Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Navigation, Autoplay, EffectFade]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      images: [
        {
          id: 1,
          imageUrl: require("../../assets/img/projects/scenic-lane-residence/img-0.jpg"),
          title: "Scenic Lane - Remodel",
        },
        {
          id: 2,
          imageUrl: require("../../assets/img/projects/grosvenor-place-residence/img-0.jpg"),
          title: "Grosvenor Place - New Construction",
        },
        {
          id: 3,
          imageUrl: require("../../assets/img/projects/pomona-ave-residence/img-0.jpg"),
          title: "Pomona Avenue - New ADU Construction",
        },
        {
          id: 4,
          imageUrl: require("../../assets/img/projects/oxford-street-residence/img-0.jpg"),
          title: "Oxford Street - Remodel",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
.homesplash {
  height: calc(100vh - 9em);
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  width: 100%;
  height: 100%;
  padding: 0 3em 3em 3em;
}

.slider {
  position: relative;
  width: 100%;
  height: 100%;
}

.slide {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.slider-container {
  width: 100%;
  height: 100%;
}

.slide-title {
  position: absolute;
  font-size: 2em;
  bottom: 0;
  color: white;
  background-color: rgba(255, 255, 255, 0.2);
  width: 100%;
  text-align: center;
  padding: 0.25em;
  text-transform: uppercase;
  letter-spacing: 0.2em;
}

.slide-image {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.slider-navigation {
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
}

.swiper-button-container {
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: transparent;
  width: 1.75em;
  height: 1.75em;
  padding: 1em;
  border-radius: 50%;
  background-color: rgba(200, 200, 200, 0.8);
  box-shadow: 0 0 1em rgba(60, 60, 60, 0.8);
  outline: none;
  z-index: 2;
  transition: all 0.2s ease-in;
}

.swiper-button-container:hover,
.swiper-button-container:active {
  background-color: var(--color-primary-contrast);
}

.swiper-button {
  color: var(--color-primary);
  position: absolute;
}

@media (min-width: 728px) {
  .slide-title {
    font-size: 2.5em;
    letter-spacing: 0.4em;
  }
}
</style>