<template lang="pug">
  main.row.overflow-x-hidden.overflow-y-auto.m-0
    sideBar
    .col-9(:style="{ padding: '32px  24px'}")
      .headerSection.d-flex.justify-content-between.align-items-start 
        div
          h1(:style="{  fontWeight: '600', fontSize: '32px', lineHeight: '38px'}") Users
          p(:style="{color: '#475467',  fontWeight: '400', fontSize: '16px', lineHeight: '24px'}") Users
        .buttons.d-flex(style="gap: 12px")
          BaseButton(
            title="Export"
            width= '105px'
            height= '40px'
            border='1px solid #D0D5DD'
            borderRadius= '8px'
            padding='10px 16px'
            withIcon
            )
            template             
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5M5.83333 8.33333L10 12.5M10 12.5L14.1667 8.33333M10 12.5V2.5" stroke="#344054" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
          BaseButton(
            title="Add user"
            width= '122px'
            height= '40px'
            backGround
            borderRadius= '8px'
            padding='10px 16px'
            withIcon
            )
            template
              el-icon( style="font-weight: bold;" size='15px'  color="white" fill="white")
                Plus
      .controller.border-bottom.w-100.mt-2
            .links.d-flex.gap-3(:style='{color:"#667085"}')
              .link(:class="{activeOne: activeLink === 'user'}" :style="{fontSize:'14px', fontWeight:'600',cursor:'pointer' }"  @click="activeLink = 'user'").pb-3.px-1 Active users
              .link(:class="{activeOne: activeLink === 'products'}" :style="{fontSize:'14px', fontWeight:'600' ,cursor:'pointer'}"  @click="activeLink = 'products'").pb-3.px-1 Blocked users
      userTabel
      

</template>

<script setup lang="ts">
import { Plus, Download } from "@element-plus/icons-vue";
const activeLink = ref("user");
</script>

<style scoped>
main {
  height: 100vh;
  width: 100vw;
}
.activeOne {
  background: linear-gradient(90deg, #ef3e2c, #e71f63);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  border-bottom: #e71f63 2px solid;
}
</style>
