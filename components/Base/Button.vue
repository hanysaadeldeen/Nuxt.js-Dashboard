<template>
  <button :style="{ width, height }">
    {{ title }}
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  width?: string;
  height?: string;
}

defineProps<Props>();
</script>

<style scoped>
button {
  background: linear-gradient(90deg, #ef3e2c, #e71f63);
  color: white;
  border-radius: 50px;
  border: none;
}
</style>
