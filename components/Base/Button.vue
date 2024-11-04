<template lang="pug">
  button(:style="{ width, height,fontWeight: '600',border,borderRadius:borderRadius ,padding:padding}" :class="{withIcon:withIcon, background: backGround, }")
    <slot></slot>
    span(:style="{color:backGround?'white':'black' }") {{ title }}
</template>

<script setup lang="ts">
interface Props {
  title: string;
  width?: string;
  height?: string;
  backGround?: boolean;
  border?: boolean;
  borderRadius?: boolean;
  padding?: boolean;
  withIcon?: boolean;
}

defineProps<Props>();
</script>

<style scoped>
.withIcon {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.background {
  background: linear-gradient(90deg, #ef3e2c, #e71f63);
}
button {
  background-color: transparent;
  border: none;
}
</style>
