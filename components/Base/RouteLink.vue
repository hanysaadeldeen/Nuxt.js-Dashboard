<template>
  <NuxtLink
    :to="link"
    :style="{
      padding: '8px 12px',
      cursor: 'pointer',
    }"
    class="d-flex align-items-center justify-content-start gap-3 text-decoration-none rounded"
    :class="{ active: activeLink }"
  >
    <slot name="icon"></slot>
    <h2
      class="m-0"
      :style="{
        color: activeLink ? '#fff' : '#000000',
        fontWeight: '500',
        fontSize: '16px',
      }"
    >
      {{ title }}
    </h2>
  </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  link?: string;
  activeLink?: string;
}

defineProps<Props>();
</script>

<style scoped></style>
