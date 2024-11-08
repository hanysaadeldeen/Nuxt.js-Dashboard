<template lang="pug">
  button(:style="{background:whiteBackground, width, height,fontWeight: '600',border,borderRadius:borderRadius ,padding:padding}" :class="{GrayBackgroundColor:GrayBackgroundColor,reverse:reverse, withIcon:withIcon,centerTitles:centerTitles, background: backGround, }")
    <slot></slot>
    span(:style="{color:GrayBackgroundColor || backGround?'white':'#344054', fontSize:fontsize }") {{ title }}
</template>

<script setup lang="ts">
interface Props {
  title?: string;
  width?: string;
  height?: string;
  backGround?: boolean;
  border?: string;
  borderRadius?: string;
  padding?: string;
  withIcon?: boolean;
  fontsize?: string;
  reverse?: boolean;
  whiteBackground?: string;
  centerTitles?: boolean;
  GrayBackgroundColor?: boolean;
}

defineProps<Props>();
</script>

<style scoped>
.withIcon {
  display: flex;
  align-items: center;
  justify-content: space-between;
  display: reverse;
}
.centerTitles {
  display: flex;
  align-items: center;
  justify-content: center;
}
.reverse {
  flex-direction: row-reverse;
}
.background {
  background: linear-gradient(90deg, #ef3e2c, #e71f63);
}
.GrayBackgroundColor {
  background: #cccccc;
  color: white;
}

button {
  background-color: transparent;
  border: none;
}
</style>
