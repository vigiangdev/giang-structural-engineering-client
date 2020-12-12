<template>
  <div class="homedetail">
    <div class="">
      <slot name="description"></slot>
    </div>
    <div class="">
      <slot name="img-group"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.homedetail {
  height: 100vh;
  width: 100vw;
  border: 1px solid black;
}
</style>