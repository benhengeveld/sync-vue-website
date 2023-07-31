<template>
  <a class="svg svg-link" :href="href" target="_blank">
    <img :src="getSvgUrl(src)" :alt="src" :class="{ glitch: glitch }" />
  </a>
</template>

<script setup lang="ts">
defineProps({
  src: {
    default: "",
    type: String,
  },
  glitch: {
    default: false,
    type: Boolean,
  },
  href: {
    default: "",
    type: String,
  },
});

function getSvgUrl(src: string): string {
  try {
    return require("@/assets/svgs/" + src + ".svg");
  } catch {
    return "";
  }
}
</script>

<style lang="scss">
.svg {
  display: inline-block;
  position: relative;
  img {
    filter: invert(100%);
  }
}
</style>
