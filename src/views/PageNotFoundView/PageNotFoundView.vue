<template>
  <DefaultPageTemplate :crtOverlay="true">
    <h1 class="title">Page not found</h1>
  </DefaultPageTemplate>
</template>

<script setup lang="ts">
import DefaultPageTemplate from "@/templates/DefaultPageTemplate.vue";
</script>

<style lang="scss">
.title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 8rem;
  font-weight: 700;
  color: white;
  line-height: 1;
  letter-spacing: 0.1rem;
  text-align: center;
}
</style>
