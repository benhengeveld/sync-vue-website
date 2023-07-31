<template>
  <div class="svg svg-icon">
    <img :src="getSvgUrl(src)" :alt="src" :class="{ glitch: glitch }" />
    <span class="svg-tooltip" v-if="tooltipText != ''">{{ tooltipText }}</span>
  </div>
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
  tooltipText: {
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

.svg:hover .svg-tooltip {
  visibility: visible;
}

.svg-tooltip {
  visibility: hidden;
  background-color: black;
  color: white;
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  padding: 0.3em 0.8em;
  border-radius: 0.4em;

  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -120%);
  z-index: 1;
}
</style>
