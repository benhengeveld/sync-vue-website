<template>
  <nav>
    <router-link to="/" class="crt-object" :class="{ glitch: glitch }">
      Home
    </router-link>
    <router-link
      to="/magic-prices"
      class="crt-object"
      :class="{ glitch: glitch }"
    >
      Magic Prices
    </router-link>
    <router-link to="/about" class="crt-object" :class="{ glitch: glitch }">
      About Me
    </router-link>
  </nav>
</template>

<script setup lang="ts">
defineProps({
  glitch: {
    default: false,
    type: Boolean,
  },
});
</script>

<style lang="scss">
@import "../assets/styles/crt.scss";
@import "../assets/styles/glitch.scss";
nav {
  display: flex;
  flex-direction: row;
  padding: 1em 0;
  flex-wrap: wrap;
  gap: 1em;

  a {
    background-color: #424242;
    color: white;
    min-width: 150px;
    word-wrap: break-word;
    white-space: normal;
    line-height: 1;
    flex: 1;
    text-align: center;
    border-radius: 4px;
    padding-top: 0.7em;
    padding-bottom: 0.7em;
    text-decoration: none;
  }
}
</style>
