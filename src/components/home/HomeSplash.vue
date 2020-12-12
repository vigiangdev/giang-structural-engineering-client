<template>
  <div class="homesplash">
    <div class="homesplash__container">
      <div class="homesplash__content">
        <h1 class="title">Building your dream home on solid foundation</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.homesplash {
  height: calc(100vh - 9em);
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.homesplash__container {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 0 3em 3em 3em;
}

.homesplash__content {
  position: relative;
  background-image: url("../../assets/img/home/home-splash.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.title {
  position: absolute;
  bottom: 0;
  font-size: 2em;
  font-weight: 500;
  color: var(--color-primary-contrast);
  width: 100%;
  padding: 0.5em 1em 1em 1em;
  box-sizing: border-box;
  animation: fadeUp 2s;
}

@media (min-width: 576px) {
  .title {
    font-size: 3em;
  }
}

@media (min-width: 768px) {
  .title {
    font-size: 4em;
  }
}

@media (min-width: 992px) {
}

@media (min-width: 1200px) {
}
</style>