<template>
  <div class="homesplash">
    <div class="container">
      <div class="slider">
        <div class="slider-navigation">
          <ButtonNavigation class="button-container">
            <div class="swiper-button-prev"></div>
            <div class="swiper-icon-container">
              <font-awesome-icon :icon="['fas', 'chevron-left']" />
            </div>
          </ButtonNavigation>
          <ButtonNavigation class="button-container">
            <div class="swiper-button-next"></div>
            <div class="swiper-icon-container">
              <font-awesome-icon :icon="['fas', 'chevron-right']" />
            </div>
          </ButtonNavigation>
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
import ButtonNavigation from "../utils/ButtonNavigation";

SwiperCore.use([Navigation, Autoplay, EffectFade]);

export default {
  components: {
    Swiper,
    SwiperSlide,
    ButtonNavigation,
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
          title: "Grosvenor Pl - New Construction",
        },
        {
          id: 3,
          imageUrl: require("../../assets/img/projects/pomona-ave-residence/img-0.jpg"),
          title: "Pomona Ave - Accessory Dwelling Unit",
        },
        {
          id: 4,
          imageUrl: require("../../assets/img/projects/oxford-street-residence/img-0.jpg"),
          title: "Oxford Street - Remodel",
        },
      ],
      // homeProjectsId: [1, 4, 5, 6],
      // projects: [
      //   {
      //     id: 1,
      //     title: "Scenic Lane Residence",
      //     location: "Healdsburg, CA",
      //     path: "/scenic-lane-residence/",
      //     file: "img-0-thumbnail.jpg",
      //     images: ["img-0.jpg"],
      //   },
      //   {
      //     id: 2,
      //     title: "Sixth Street Residence",
      //     location: "Berkeley, CA",
      //     path: "/sixth-street-residence/",
      //     file: "img-0-thumbnail.jpg",
      //     images: ["img-0.jpg"],
      //   },
      //   {
      //     id: 3,
      //     title: "Grizzly Peak Blvd Residence",
      //     location: "Berkeley, CA",
      //     path: "/grizzly-peak-blvd-residence/",
      //     file: "img-0-thumbnail.jpg",
      //     images: ["img-0.jpg"],
      //   },
      //   {
      //     id: 4,
      //     title: "Grosvenor Place Residence",
      //     location: "Oakland, CA",
      //     path: "/grosvenor-place-residence/",
      //     file: "img-0-thumbnail.jpg",
      //     images: ["img-0.jpg"],
      //   },
      //   {
      //     id: 5,
      //     title: "Oxford Street Residence",
      //     location: "Berkeley, CA",
      //     path: "/oxford-street-residence/",
      //     file: "img-0-thumbnail.jpg",
      //     images: ["img-0.jpg"],
      //   },
      //   {
      //     id: 6,
      //     title: "Pomona Ave Residence",
      //     location: "Oakland, CA",
      //     path: "/pomona-ave-residence/",
      //     file: "img-0-thumbnail.jpg",
      //     images: ["img-0.jpg"],
      //   },
      //   {
      //     id: 7,
      //     title: "Alameda Ave Residence",
      //     location: "Alameda, CA",
      //     path: "/alameda-ave-residence/",
      //     file: "img-0-thumbnail.jpg",
      //     images: ["img-0.jpg", "img-1.jpg"],
      //   },
      //   {
      //     id: 8,
      //     title: "Canon Ave Residence",
      //     location: "Oakland, CA",
      //     path: "/canon-ave-residence/",
      //     file: "img-0-thumbnail.jpg",
      //     images: ["img-0.jpg"],
      //   },
      // ],
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
  overflow: hidden;
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
  background-color: rgba(94, 87, 87, 0.2);
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

.button-container {
  position: relative;
}

.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  left: 0;
  top: calc(50% - 2px);
  color: transparent;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.swiper-icon-container {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

@media (min-width: 768px) {
  .slide-title {
    font-size: 2em;
    letter-spacing: 0.4em;
  }
}
</style>