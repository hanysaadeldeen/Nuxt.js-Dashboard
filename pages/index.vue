<template lang="pug">
      div(:style="{ padding: '32px  24px'}")
        homeHeaderSection
        homeUserTabel
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});
</script>

<style scoped>
main {
  height: 100vh;
  width: 100vw;
}
</style>
