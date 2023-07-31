<template>
  <router-view />
</template>

<script setup lang="ts">
document.title = "Sy_nc";
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  overflow: hidden !important;
}

#app {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  font-family: "Roboto", sans-serif;
}
</style>
