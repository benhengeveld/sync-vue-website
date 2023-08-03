<template>
  <v-snackbar :timeout="timeout" :color="color" elevation="24" v-model="isOpen">
    {{ message }}
    <template v-slot:actions>
      <v-btn
        icon="mdi-close"
        density="comfortable"
        @click="isOpen = false"
      ></v-btn>
    </template>
  </v-snackbar>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps({
  timeout: {
    default: undefined,
    type: [Number, String],
  },
  color: {
    default: undefined,
    type: String,
  },
});

const isOpen = ref(false);
const message = ref("");

const open = (newMessage: string): void => {
  if (isOpen.value) {
    isOpen.value = false;
    setTimeout(() => {
      message.value = newMessage;
      isOpen.value = true;
    }, 50);
  } else {
    message.value = newMessage;
    isOpen.value = true;
  }
};

const close = (): void => {
  isOpen.value = false;
};

defineExpose({
  open,
  close,
});
</script>

<style lang="scss"></style>
