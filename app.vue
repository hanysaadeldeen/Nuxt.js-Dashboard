<template>
  <div>
    <NuxtLayout>
      <main :class="{ mainMargin: !isAuthPage }">
        <NuxtPage />
      </main>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const isAuthPage = ref(route.name === "signin" || route.name === "signup");

watch(
  () => route.name,
  (newRoute) => {
    isAuthPage.value = newRoute === "signin" || newRoute === "signup";
  }
);
</script>

<style scoped>
.mainMargin {
  margin-left: 258px;
  width: 100%;
  overflow: hidden;
}

@media (max-width: 767.98px) {
  .mainMargin {
    margin-left: 70px;
  }
}
</style>
