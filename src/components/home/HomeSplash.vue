<template>
  <div class="homesplash">
    <div class="homesplash__container">
      <div class="homesplash__content">
        <h1 class="title">BUILDING YOUR DREAM HOME ON SOLID FOUNDATION</h1>
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
}

.title {
  position: absolute;
  display: inline-block;
  bottom: 0;
  margin: 1em;
  font-size: 2em;
  font-weight: 500;
  text-align: center;
  letter-spacing: 0.1em;
  color: var(--color-primary-contrast);
  box-sizing: border-box;
  padding: 0.5em;
  border: 3px solid transparent;
  border-radius: 0.5em;
  background: rgb(255, 255, 255, 0.1);
  backdrop-filter: blur(30px);
  background-clip: padding-box;
  box-shadow: 10px 10px 10px rgba(180, 180, 180, 0.1);
}

@media (min-width: 576px) {
}

@media (min-width: 768px) {
}

@media (min-width: 992px) {
  .title {
    font-size: 3em;
  }
}

@media (min-width: 1200px) {
}
</style>