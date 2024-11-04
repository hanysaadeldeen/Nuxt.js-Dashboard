<template>
  <NuxtLink
    :to="link"
    :style="{
      padding: '8px 12px',
      cursor: 'pointer',
    }"
    class="d-flex align-items-center justify-content-center justify-content-md-start gap-3 text-decoration-none rounded"
    :class="{ active: activeLink }"
  >
    <slot name="icon"></slot>
    <div
      class="d-flex justify-content-between align-items-center w-75 d-none d-md-flex"
    >
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
      <el-icon v-if="showArrow" color="#98A2B3"><ArrowDownBold /></el-icon>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { ArrowDownBold } from "@element-plus/icons-vue";

interface Props {
  title: string;
  link?: string;
  activeLink?: string;
  showArrow?: boolean;
}

defineProps<Props>();
</script>

<style scoped></style>
