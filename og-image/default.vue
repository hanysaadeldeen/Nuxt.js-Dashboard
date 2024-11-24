<template>
  <div class="">
    {{ title }}
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "Welcome to My Website!",
  },
});
</script>
