<template>
  <div id="background">
    <img id="background-image" src="../assets/imgs/error-screen.jpg" />
  </div>
  <div class="crt" v-if="crtBackground"></div>
</template>

<script setup lang="ts">
defineProps({
  crtBackground: {
    default: true,
    type: Boolean,
  },
});
</script>

<style lang="scss">
#background {
  position: absolute;
  top: 0;
  left: 0;
  background-color: black;
  width: 100vw;
  height: 100vh;
  z-index: -2;
  overflow: hidden;

  #background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: blur(0.4375em);
  }
}

.crt {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}
</style>
