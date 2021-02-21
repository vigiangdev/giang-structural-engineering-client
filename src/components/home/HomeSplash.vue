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
            v-for="project in projects.filter((el) =>
              homeSplashIds.includes(el.id)
            )"
            v-bind:key="project.id"
            class="slide"
          >
            <router-link
              :to="{ name: 'Project', params: { project: project.slug } }"
            >
              <h1 class="slide-title">
                {{ project.title }}
              </h1>
              <img
                class="slide-image"
                :src="
                  require(`../../assets/img/projects/${project.slug}/${project.images[0]}`)
                "
              />
            </router-link>
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
import { mapGetters } from "vuex";

SwiperCore.use([Navigation, Autoplay, EffectFade]);

export default {
  components: {
    Swiper,
    SwiperSlide,
    ButtonNavigation,
  },
  computed: {
    ...mapGetters(["projects", "homeSplashIds"]),
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
a {
  width: 100%;
  height: 100%;
  text-decoration: none;
}

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
  outline: none;
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