<template>
  <BackgroundImage :crtBackground="!crtOverlay" />
  <CrtOverlay v-if="crtOverlay" />
  <div id="page">
    <NavBar v-if="navBar" :glitch="glitchNav" />
    <div id="content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import BackgroundImage from "@/components/BackgroundImage.vue";
import CrtOverlay from "@/components/CrtOverlay.vue";
import NavBar from "@/components/NavBar.vue";

defineProps({
  navBar: {
    default: true,
    type: Boolean,
  },
  crtOverlay: {
    default: false,
    type: Boolean,
  },
  glitchNav: {
    default: false,
    type: Boolean,
  },
});
</script>

<style lang="scss">
#page {
  width: 100%;
  height: 100%;
  padding: 0 1em 1em 1em;
  display: flex;
  flex-direction: column;
}

#content {
  flex: 1;
}
</style>
